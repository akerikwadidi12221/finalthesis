import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductsPage from './Products';
import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';
import SearchPage from './SearchPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import OrderSuccessPage from './OrderSuccessPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import AccountDashboard from './account/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <h1 className="sr-only">BuildMart Online</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order/success/:orderId" element={<OrderSuccessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/account" element={<AccountDashboard />} />
      </Routes>
    </>
  );
};

export default App;
