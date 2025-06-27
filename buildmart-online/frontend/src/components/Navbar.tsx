import { Link } from 'react-router-dom';

export default function Navbar(){
  return(
    <header className="bg-[#0a3768] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-black tracking-tight">پایپ استور</Link>
          <input
            type="search"
            placeholder="جستجوی نام / کد محصول"
            className="hidden md:block w-72 px-3 py-1 rounded outline-none text-gray-800"
          />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link to="/login"     className="bg-white text-[#0a3768] px-4 py-1 rounded">ورود</Link>
          <Link to="/products"  className="hover:underline">محصولات</Link>
          <Link to="/brands"    className="hover:underline">برندها</Link>
        </div>
      </div>
    </header>
  );
}
