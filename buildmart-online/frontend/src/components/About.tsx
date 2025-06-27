export default function About(){
  return(
    <section className="relative bg-cover bg-center text-white"
             style={{backgroundImage:'url(/images/about-bg.jpg)'}}>
      <div className="absolute inset-0 bg-[#0a3768]/70"></div>

      <div className="relative max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">درباره ما</h2>
        <p className="leading-7 mb-6">
          «پایپ استور» از سال ۱۳۹۹ به‌عنوان مرجع آنلاین فروش تأسیسات و لوله‌کشی ساختمانی فعالیت می‌کند.
          ما هزاران محصول معتبر را با تضمین اصالت و قیمت رقابتی فراهم کرده‌ایم.
        </p>
        <a href="/about" className="inline-block bg-yellow-400 text-[#0a3768] px-6 py-2 rounded">
          بیشتر بدانید
        </a>
      </div>
    </section>
  );
}
