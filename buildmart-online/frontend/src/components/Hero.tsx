interface Props{ img:string; title:string; subtitle:string }
export default function Hero({img,title,subtitle}:Props){
  return(
    <section className="h-[320px] md:h-[420px] bg-cover bg-center flex flex-col justify-center"
             style={{backgroundImage:`url(${img})`}}>
      <div className="max-w-7xl w-full mx-auto px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-black mb-4">{title}</h1>
        <p className="md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
