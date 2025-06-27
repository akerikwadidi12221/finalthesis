import json
from pathlib import Path
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from catalog.models import Product, Category, ProductImage
from django.utils.text import slugify

class Command(BaseCommand):
    help = "Import products from a JSON file"

    def add_arguments(self, parser):
        parser.add_argument(
            'json_path', type=str, nargs='?',
            default='database/space/sample_products.json',
            help='Path to the JSON file with product info'
        )
        parser.add_argument(
            '--category', type=int,
            help='ID of the category to assign to all products (optional)'
        )

    @transaction.atomic
    def handle(self, *args, **options):
        json_path = Path(options['json_path'])
        if not json_path.exists():
            raise CommandError(f'File {json_path} not found!')

        category_option = options.get('category')
        category = None
        if category_option is not None:
            try:
                category = Category.objects.get(pk=category_option)
            except Category.DoesNotExist:
                raise CommandError('Specified category does not exist')

        with json_path.open(encoding='utf-8') as f:
            products = json.load(f)

        for item in products:
            code = item.get('code')
            name = item.get('name', '')
            cat_name = item.get('category')
            image = item.get('image')
            desc = item.get('description', '')

            if not code or not name:
                self.stderr.write('Skipping invalid item')
                continue

            prod_category = category
            if prod_category is None:
                if not cat_name:
                    self.stderr.write('Skipping item without category')
                    continue
                prod_category, _ = Category.objects.get_or_create(
                    name=cat_name,
                    defaults={'slug': slugify(cat_name)}
                )

            obj, created = Product.objects.update_or_create(
                code=code,
                defaults={
                    'name': name,
                    'description': desc,
                    'category': prod_category,
                    'slug': slugify(f"{name}-{code}")[:255],
                    'price': 0,
                }
            )

            if image:
                ProductImage.objects.update_or_create(
                    product=obj,
                    image_url=image,
                    defaults={'is_primary': True}
                )

            action = 'Created' if created else 'Updated'
            self.stdout.write(self.style.SUCCESS(f'{action} {obj.code}'))

        self.stdout.write(self.style.SUCCESS('Import finished'))
