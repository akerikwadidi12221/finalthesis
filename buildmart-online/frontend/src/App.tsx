import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AccountDashboard from './pages/account/Dashboard';
import Layout from './layouts/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order/success/:orderId" element={<OrderSuccessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/account/*" element={<PrivateRoutes role="customer" />}> 
          <Route path="dashboard" element={<AccountDashboard />} />
        </Route>
        <Route path="/login" element={<div>صفحه ورود</div>} />
        <Route path="/register" element={<div>صفحه ثبت نام</div>} />
        <Route path="*" element={<div>صفحه یافت نشد (404)</div>} />
      </Routes>
    </Layout>
  );
}

function PrivateRoutes({ role }: { role: string }) {
  const isAuthenticated = true; // TODO: replace with real auth logic
  const userRole = 'customer'; // TODO: replace with real role

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (role && userRole !== role && userRole !== 'admin') {
    return <div>شما اجازه دسترسی به این بخش را ندارید.</div>;
  }
  return <Outlet />;
}
