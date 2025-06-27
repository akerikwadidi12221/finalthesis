import { useSearchParams } from 'react-router-dom';
import Layout from '../layouts/Layout';

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get('q');
  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-xl font-bold">نتایج جستجو برای: {q}</h2>
        <p>لیست نتایج در حال توسعه است.</p>
      </div>
    </Layout>
  );
}
