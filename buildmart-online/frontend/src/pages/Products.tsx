import Layout from '../layouts/Layout';
import BrandSection from '../components/BrandSection';
import {
  newPipe,
  azin,
  multiPipe,
  dinaPolymer,
} from '../data/brandProducts';

export default function ProductsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <BrandSection title="لوله و اتصالات پنج‌لایه نیوپایپ"      items={newPipe} />
        <BrandSection title="لوله و اتصالات تک‌لایه آذین"          items={azin} />
        <BrandSection title="لوله و اتصالات فاضلابی مولتی پایپ"     items={multiPipe} />
        <BrandSection title="محصولات پلی‌اتیلن آبیاری دینا پلیمر"   items={dinaPolymer} />
      </div>
    </Layout>
  );
}
