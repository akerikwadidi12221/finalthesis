import { products } from '../data/products';

export default function FeaturedProducts() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">محصولات ویژه</h2>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {products.slice(0, 6).map((p) => (
          <div key={p.id}
               className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={p.image}
                 alt={p.name}
                 className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="font-semibold mb-2">{p.name}</h3>
            <p className="text-orange-600 font-bold">
              {p.price.toLocaleString()} تومان
            </p>
            <p className="text-sm text-gray-500">{p.unit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
