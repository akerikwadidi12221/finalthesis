import os
import random
from django.utils.text import slugify
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'buildmart.settings.dev')
django.setup()

from catalog.models import Category, Brand, Product, ProductImage

CATEGORIES = [
    'لوله واتصالات پنج لایه نیوپایپ',
    'لوله و اتصالات تک لایه آذین',
    'لوله و اتصالات فاضلابی مولتی پایپ',
    'محصولات پلی اتیلن آبیاری دینا پلیمر',
]

BRANDS = ['NewPipeCo', 'AzinCo', 'MultiPipeCo', 'DinaPolymerCo']

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
IMAGES_DIR = os.path.join(BASE_DIR, 'database', 'images')

LOREM = ' '.join(['لورم ایپسوم' for _ in range(20)])

for idx, name in enumerate(CATEGORIES, start=1):
    cat, _ = Category.objects.get_or_create(
        name=name,
        defaults={'slug': slugify(name, allow_unicode=True), 'display_order': idx}
    )
    images_path = os.path.join(IMAGES_DIR, str(idx))
    image_files = [f for f in os.listdir(images_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    for count, img in enumerate(image_files[:5], start=1):
        code = f"c{idx:02d}-{count:03d}"
        title = f"محصول نمونه {count} از {name}"
        product, _ = Product.objects.get_or_create(
            code=code,
            defaults={
                'slug': slugify(title, allow_unicode=True)[:255],
                'name': title,
                'description': LOREM,
                'category': cat,
                'price': random.randint(100000, 5000000),
                'stock_quantity': 10,
                'brand': Brand.objects.get_or_create(name=BRANDS[idx-1])[0],
            }
        )
        abs_image = os.path.join(images_path, img)
        ProductImage.objects.get_or_create(
            product=product,
            image_url=os.path.abspath(abs_image),
            defaults={'is_primary': True}
        )

print('Seed data loaded.')
