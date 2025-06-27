import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';

export default function ProductPage() {
  const { id } = useParams();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-xl font-bold">محصول {id}</h2>
        <p>جزئیات محصول در حال توسعه است.</p>
      </div>
    </Layout>
  );
}
