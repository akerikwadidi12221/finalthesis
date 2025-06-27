import { categories } from '../data/categories';

export default function Categories(){
  return(
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">دسته‌بندی محصولات</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
        {categories.map(c=>(
          <div key={c.id} className="flex flex-col items-center gap-2 p-4 border rounded">
            <img src={c.icon} alt={c.title} className="w-14 h-14"/>
            <span className="text-xs text-center">{c.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
