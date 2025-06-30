import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../layouts/Layout';

interface Product {
  id: number;
  name: string;
  price: string;
  images: { image_url: string; is_primary: boolean }[];
  specifications: {
    specification_type: { name: string; unit: string };
    value: string;
  }[];
}

function ProductImageDisplay({ product }: { product: Product }) {
  const primary = product.images.find((i) => i.is_primary) || product.images[0];
  const url = primary
    ? `http://127.0.0.1:8000/media/${primary.image_url}`
    : '/placeholder.jpg';
  return <img src={url} alt={product.name} className="w-64" />;
}

function ProductSpecificationsDisplay({ product }: { product: Product }) {
  if (!product.specifications.length) return <p>مشخصات فنی برای این محصول موجود نیست.</p>;
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>مشخصه</th>
          <th>مقدار</th>
        </tr>
      </thead>
      <tbody>
        {product.specifications.map((spec, i) => (
          <tr key={i}>
            <td>
              {spec.specification_type.name}
              {spec.specification_type.unit
                ? ` (${spec.specification_type.unit})`
                : ''}
            </td>
            <td>{spec.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    axios
      .get<Product>(`http://127.0.0.1:8000/api/catalog/products/${id}/`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4">
        {product ? (
          <>
            <h2 className="text-xl font-bold mb-4">{product.name}</h2>
            <ProductImageDisplay product={product} />
            <p className="mt-4">قیمت: {product.price}</p>
            <ProductSpecificationsDisplay product={product} />
          </>
        ) : (
          <p>در حال بارگذاری...</p>
        )}
      </div>
    </Layout>
  );
}
