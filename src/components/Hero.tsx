// import img1 from "@assets/generated_images/creative_graphic_design_workspace_with_computer_and_color_palettes.png";
// import img2 from "@assets/generated_images/high_quality_printing_press_or_merchandise_printing.png";
// import img3 from "@assets/generated_images/corporate_branding_items_like_mugs_and_notebooks.png";

const images = ["footre.png", "day.png", "mount.avif", "cloth2.jpeg", "sea.png"];

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
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] w-full px-6 md:px-9 animate-in fade-in zoom-in duration-1000">
        <div className="max-w-3xl">
          <h1 className="text-[#d4af37] font-poppins text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.05] mb-3 drop-shadow-lg">
            Welcome to Stalworld Media Concept<br/>
            <span className="text-[0.8em] text-white/90">Graphic Design agency</span>
          </h1>
          
          <p className="text-white text-[clamp(0.95rem,1.6vw,1.15rem)] mb-3 max-w-[70ch] drop-shadow-md font-playfair italic">
            "Turning concepts into creation"
          </p>
          
          <p className="text-white/90 mb-3 leading-relaxed drop-shadow-md max-w-[600px]">
            At <strong>Stalworld Media Concept</strong>, we create posters, logos, social media
            graphics, and branding materials. We pair bold ideas with reliable printing services to help your
            brand stand out.
          </p>
          
          <p className="text-white/90 mb-8 leading-relaxed drop-shadow-md max-w-[600px]">
            Unique designs, professional prints — from personal gifts to corporate merchandise, we
            bring your ideas to life.
            <br /> <br /> <i><strong>---Adewale Adisa </strong> (Stalworld Media Concept Founder)</i>
          </p>
          
          <a 
            href="#about" 
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#c4871f] to-[#ff7e5f] text-black font-bold no-underline shadow-[0_8px_28px_rgba(196,135,31,0.17)] transition-transform hover:-translate-y-1"
          >
            Let's Work Together
          </a>
        </div>
      </div>

      {/* Moving Banner */}
      <div className="absolute bottom-6 left-0 w-full overflow-hidden pointer-events-none z-20">
        <div className="inline-block whitespace-nowrap font-bold uppercase tracking-[1.4px] text-white text-sm animate-slide-right drop-shadow-md">
          Welcome to Stalworld Media Concept
        </div>
      </div>
    </div>
  );
}