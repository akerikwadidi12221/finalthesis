import { useRef } from 'react';
import { Product } from '../data/products';
import { scroll } from '../utils/scroll';
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props{ title:string; items:Product[] }
export default function ProductCarousel({title,items}:Props){
  const ref = useRef<HTMLDivElement>(null);
  return(
    <section className="my-10">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
        <div className="flex gap-1">
          <button onClick={()=>ref.current&&scroll(ref.current,'right')}
                  className="p-1 bg-[#0a3768] text-white rounded">
            <ChevronRightIcon className="w-4"/>
          </button>
          <button onClick={()=>ref.current&&scroll(ref.current,'left')}
                  className="p-1 bg-[#0a3768] text-white rounded">
            <ChevronLeftIcon className="w-4"/>
          </button>
        </div>
      </div>

      <div ref={ref} className="flex gap-4 overflow-x-auto px-4 scroll-smooth snap-x">
        {items.map(p=>(
          <div key={p.id}
               className="min-w-[160px] snap-start shrink-0 border rounded-lg p-3 text-center">
            <img src={p.img} alt={p.title} className="h-24 mx-auto object-contain mb-3"/>
            <p className="text-xs line-clamp-2 mb-2">{p.title}</p>
            <span className="text-[10px] text-gray-500 block">کد محصول: {p.code}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
