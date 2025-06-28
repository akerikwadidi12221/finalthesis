import { useEffect, useState } from 'react';

export default function HomeSmokeTest() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    async function run() {
      try {
        const catRes = await fetch('/api/catalog/categories/');
        const prodRes = await fetch('/api/catalog/products/?page_size=4');
        if (!catRes.ok || !prodRes.ok) {
          console.error('Bad response', catRes.status, prodRes.status);
          setStatus('error');
          return;
        }
        const categories = await catRes.json();
        const products = await prodRes.json();
        console.log('Categories:', categories.map((c: any) => c.name));
        console.log('Products:', products.map((p: any) => p.name));
        setStatus('success');
      } catch (err) {
        console.error('Fetch error', err);
        setStatus('error');
      }
    }
    run();
  }, []);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Smoke test failed</div>;
  return <div>Smoke test passed</div>;
}
