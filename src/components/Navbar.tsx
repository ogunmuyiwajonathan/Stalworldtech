import { useState, useEffect } from "react";
import { Link } from "wouter";
// import logo from "@assets/generated_images/gold_metallic_abstract_logo_letter_g_or_s.png";
import { Menu, X, Home, Palette, Tag, Award, Building, MapPin } from "lucide-react";
 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "What we do", href: "#what-we-do", icon: <Palette className="w-4 h-4" /> },
    { name: "Services", href: "#services", icon: <Tag className="w-4 h-4" /> },
    { name: "Testimonial", href: "#testimonial", icon: <Award className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <Building className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <MapPin className="w-4 h-4" /> },
  ];
 
  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 px-6 py-3 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/45 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 text-[#d4af37] font-bold text-lg no-underline animate-navbar-slide">
          <img src="1log.png" alt="Stalworld Logo" className="h-9 w-auto rounded-full" />
          Stalworld
        </a>
 
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 list-none animate-navbar-slide" style={{ animationDelay: "0.1s" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="flex flex-col items-center text-white font-semibold px-3 py-2 rounded-lg transition-all duration-200 hover:text-black hover:bg-[#d4af37] group text-center"
                >
                  <span className="text-xl mb-1 group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="text-xs">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
 
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-[#d4af37] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
 
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 animate-in slide-in-from-top-5">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="flex items-center gap-3 text-white font-semibold px-4 py-3 rounded-lg hover:text-black hover:bg-[#d4af37] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}