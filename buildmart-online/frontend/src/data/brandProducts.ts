import { Product } from './products';

/*
 * برای هر برند چند محصول به‌عنوان نمونه گذاشته‌ایم؛
 * فقط نام، کد و تصویر را با دادهٔ واقعی (لینک گیتی‌کالا) جایگزین کنید
 */

export const newPipe: Product[] = [
  { id: 101, code: 'NP-P16', img: '/images/products/newpipe/P16.jpg', title: 'لوله پنج‌لایه 16 نیوپایپ' },
  { id: 102, code: 'NP-F20', img: '/images/products/newpipe/F20.jpg', title: 'سه‌راهی 20 نیوپایپ' },
  // ...
];

export const azin: Product[] = [
  { id: 201, code: 'AZ-P25', img: '/images/products/azin/P25.jpg', title: 'لوله آذین 25' },
  // ...
];

export const multiPipe: Product[] = [
  { id: 301, code: 'MP-110', img: '/images/products/multipipe/110.jpg', title: 'لوله فاضلابی 110 مولتی پایپ' },
  // ...
];

export const dinaPolymer: Product[] = [
  { id: 401, code: 'DP-PE32', img: '/images/products/dina/PE32.jpg', title: 'لوله پلی‌اتیلن 32 دینا پلیمر' },
  // ...
];
