import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';

export default function CategoryPage() {
  const { slug } = useParams();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-xl font-bold">دسته: {slug}</h2>
        <p>لیست محصولات این دسته در حال توسعه است.</p>
      </div>
    </Layout>
  );
}
