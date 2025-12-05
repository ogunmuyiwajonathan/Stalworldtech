const images = [
  "https://i.postimg.cc/3x4L850c/footre.png", 
  "https://i.postimg.cc/gJPttSjb/day.png", 
  "https://i.postimg.cc/xjB56p4p/mount.avif", 
  "https://i.postimg.cc/qBxSST2Y/cloth2.jpg", 
  "https://i.postimg.cc/SQHdg1PQ/sea.png"
];

export default function Hero() {
  return (
    <div id="home" className="relative h-screen overflow-hidden flex items-center justify-center pt-[72px]">
      {/* Background Slides */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover animate-fade-hero"
            style={{
              animationDelay: `-${index * 5}s`,
              animationDuration: `${images.length * 5}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationFillMode: 'both',
              filter: 'brightness(1)'
            }}
          />
        ))}
        
        {/* Fixed Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] w-full px-6 md:px-9 animate-in fade-in zoom-in duration-1000">
        <div className="max-w-3xl">
          <h1 className="text-[#d4af37] font-poppins text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.05] mb-3 drop-shadow-lg">
            Welcome to Stalworld Media Concept<br/>
            <span className="text-[0.8em] text-white/95">Graphic Design agency</span>
          </h1>
          
          <p className="text-white text-[clamp(0.95rem,1.6vw,1.15rem)] mb-3 max-w-[70ch] drop-shadow-lg font-playfair italic">
            "Turning concepts into creation"
          </p>
          
          <p className="text-white/95 mb-3 leading-relaxed drop-shadow-lg max-w-[600px] font-medium">
            At <strong className="text-[#d4af37]">Stalworld Media Concept</strong>, we create posters, logos, social media
            graphics, and branding materials. We pair bold ideas with reliable printing services to help your
            brand stand out.
          </p>
          
          <p className="text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-[600px] font-medium">
            Unique designs, professional prints — from personal gifts to corporate merchandise, we
            bring your ideas to life.
          </p>
          
          <a 
            href="#about" 
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#c4871f] to-[#ff7e5f] text-white font-bold no-underline shadow-[0_8px_28px_rgba(196,135,31,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(196,135,31,0.5)] hover:scale-105"
          >
            Let's Work Together
          </a>
        </div>
      </div>

      {/* Moving Banner */}
      <div className="absolute bottom-6 left-0 w-full overflow-hidden pointer-events-none z-20">
        <div className="inline-block whitespace-nowrap font-bold uppercase tracking-[1.4px] text-white/95 text-sm animate-slide-right drop-shadow-lg bg-black/30 px-4 py-2 rounded-full">
          Welcome to Stalworld Media Concept
        </div>
      </div>
    </div>
  );
}