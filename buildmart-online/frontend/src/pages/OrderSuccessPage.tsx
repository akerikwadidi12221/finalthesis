import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';

export default function OrderSuccessPage() {
  const { orderId } = useParams();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4 text-center">
        <h2 className="text-xl font-bold mb-2">خرید با موفقیت انجام شد</h2>
        <p>شماره سفارش: {orderId}</p>
      </div>
    </Layout>
  );
}
