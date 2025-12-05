import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hope from "../components/Hope";
import { Palette, Shirt, Rocket } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <Hero />

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 px-5 bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-[#c4871f] text-3xl md:text-4xl font-bold mb-4 font-poppins">What We Do</h2>
          <p className="text-center max-w-[820px] mx-auto mb-10 text-gray-700 leading-relaxed">
            We specialize in creative design and professional printing that helps your ideas come alive. 
            Here's a look at our core services:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Palette size={40} />, 
                title: "Graphic Design", 
                desc: "Logos, posters, social media graphics and full branding packages that tell your story.",
                href: "#graphic-design" // Specific anchor
              },
              { 
                icon: <Shirt size={40} />, 
                title: "Custom Printing", 
                desc: "T-shirts, mugs, bags, packaging and more — printed with care and colour-true results.",
                href: "#custom-printing" // Specific anchor
              },
              { 
                icon: <Rocket size={40} />, 
                title: "Branding Solutions", 
                desc: "Corporate merchandise, event swag, and promotional items that create lasting impressions.",
                href: "#branding-solutions" // Specific anchor
              }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                className="block group no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4871f] focus-visible:ring-offset-2 rounded-2xl"
                aria-label={`Learn more about ${item.title}`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full border border-transparent hover:border-[#c4871f]/20">
                  <div className="text-[#c4871f] mb-4 group-hover:scale-110 transition-transform duration-300 inline-flex">
                    {item.icon}
                  </div>
                  <h3 className="text-[#c4871f] text-xl font-bold mb-3 group-hover:text-[#a36e1a] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Real Services Section with Sliders */}
      <section id="services" className="py-20 px-5 bg-white text-center">
        <h1 className="text-[#c4871f] text-3xl md:text-4xl font-bold mb-12 tracking-widest font-poppins">SERVICES</h1>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto">
          {[
            { 
              id: "design", 
              title: "Design", 
              icon: <Palette className="w-6 h-6" />, 
              images: [
                "https://i.postimg.cc/CLKP2fhZ/Design.png", 
                "https://i.postimg.cc/fRprmThw/cups.jpg", 
                "https://i.postimg.cc/xTHRhGww/space.jpg"
              ] 
            },
            { 
              id: "printing", 
              title: "Custom Printing", 
              icon: <Shirt className="w-6 h-6" />, 
              images: [
                "https://i.postimg.cc/nr2WD4Hx/cloth.jpg", 
                "https://i.postimg.cc/d18pqMpm/caps.jpg", 
                "https://i.postimg.cc/qBxSST2Y/cloth2.jpg"
              ] 
            },
            { 
              id: "branding", 
              title: "Branding", 
              icon: <Rocket className="w-6 h-6" />, 
              images: [
                "https://i.postimg.cc/YqynBq0F/gf.png", 
                "https://i.postimg.cc/qMZbHMqj/brain.png", 
                "https://i.postimg.cc/YqynBq0F/download.png"
              ] 
            }
          ].map((service, i) => (
            <div 
              key={service.id} 
              className="w-full max-w-[360px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group animate-service"
              style={{ animationDelay: `${i * 160}ms` }}   /* staggered entrance */
            >
              {/* Slider Area */}
              <div 
                className="relative w-full h-[280px] overflow-hidden bg-gray-100 bg-center bg-cover service-slider"
                style={{ backgroundImage: `url(${service.images[0]})` }}
              >
                {service.images.map((src, idx) => (
                  <img 
                    key={idx}
                    src={src} 
                    alt={`${service.title} ${idx}`}
                    className="absolute inset-0 w-full h-full object-cover animate-fade-slider service-slide-img"
                    style={{
                      animationDelay: `-${idx * 7}s`,
                      animationDuration: `${service.images.length * 7}s`,
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite',
                      animationFillMode: 'both',
                    }}
                  />
                ))}
              </div>
              
              {/* Content Area */}
              <div className="h-[120px] flex flex-col items-center justify-center p-4 bg-white relative z-10">
                <div className="text-[#c4871f] mb-2 p-3 rounded-full bg-[#c4871f]/10 group-hover:bg-[#c4871f] group-hover:text-white transition-colors duration-300 icon-bounce">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Hope />
    </div>
  );
}