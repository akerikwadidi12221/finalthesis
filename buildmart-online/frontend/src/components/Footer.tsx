export default function Footer(){
  return(
    <footer className="bg-[#0a3768] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-black text-xl mb-4">پایپ استور</h3>
          <p className="text-sm leading-7">
            بزرگ‌ترین فروشگاه آنلاین لوله، اتصالات، چسب و تجهیزات تأسیسات ساختمانی؛
            ارسال سریع و مشاورهٔ تخصصی.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p>تهران، بزرگراه آیت‌الله سعیدی، خیابان کارگر، پلاک ۵۸</p>
          <p>پشتیبانی: 021-88770000</p>
          <p>ایمیل: support@pipestore.ir</p>
          <div className="flex gap-3 mt-2 text-base">
            <a href="#" aria-label="linkedin">in</a>
            <a href="#" aria-label="instagram">ig</a>
            <a href="#" aria-label="telegram">tg</a>
          </div>
        </div>
      </div>
      <div className="bg-[#07254c] text-center text-xs py-2">
        کلیه حقوق این وب‌سایت متعلق به پایپ استور است.
      </div>
    </footer>
  );
}
