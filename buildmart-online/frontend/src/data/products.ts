export interface Product{ id:number; title:string; img:string; code:string }

/* فهرست تصاویر موجود در images/products */
const codes = ['1594','2100','2101','2102','2104','2639','2650','2667','2695'] as const;

export const latest:Product[] = codes.map((c,i)=>({
  id:i+1,
  code:c,
  title:`محصول کد ${c}`,          // بعداً عنوان واقعی را جایگزین کنید
  img:`/images/products/p-${c}.jpg`
}));

/* فعلاً همان‌ها را در بخش Featured هم نمایش می‌دهیم */
export const featured = [...latest];
