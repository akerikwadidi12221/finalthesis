import { Product } from '../data/products';

interface Props {
  title: string;
  items: Product[];
}
export default function BrandSection({ title, items }: Props) {
  return (
    <section className="my-12">
      <h2 className="text-xl font-bold mb-6 border-b-2 border-[#0a3768] inline-block px-2">
        {title}
      </h2>

      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        {items.map((p) => (
          <div key={p.id} className="border rounded p-3 text-center">
            <img
              src={p.img}
              alt={p.title}
              className="h-24 mx-auto object-contain mb-2"
            />
            <p className="text-xs line-clamp-2 mb-1">{p.title}</p>
            <span className="text-[10px] text-gray-500">کد: {p.code}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
