import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import Categories from '../components/Categories';
import About from '../components/About';
import { latest,featured } from '../data/products';

export default function Home(){
  return(
    <Layout>
      <Hero
        img="/images/banner-pipe.jpg"
        title="تأسیسات؛ قلب ساختمان"
        subtitle="هرآنچه برای پروژه‌تان نیاز دارید یکجا فراهم است."
      />

      <div className="max-w-7xl mx-auto">
        <ProductCarousel title="منتخب جدیدترین محصولات" items={latest}/>
        <ProductCarousel title="منتخب محصولات"           items={featured}/>
      </div>

      <Categories/>
      <About/>
    </Layout>
  );
}
