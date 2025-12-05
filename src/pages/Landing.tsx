import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Share2, Info, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Landing() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    // Bubble configurations from your original CSS
    const bubbles = [
        { size: 25, delay: 2 },
        { size: 15, delay: 1 },
        { size: 35, delay: 3 },
        { size: 22, delay: 4.5 },
        { size: 30, delay: 2.5 },
        { size: 18, delay: 6 },
        { size: 28, delay: 7 },
        { size: 32, delay: 4 }
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        
        <div className="relative w-full h-screen overflow-hidden bg-black text-white font-poppins">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: `url("https://i.postimg.cc/fWCq5vh8/dera.png")` }}
            />

            {/* Bubbles - PNG Images Only */}
            <div className="absolute inset-x-0 bottom-0 flex justify-around items-end z-10 pointer-events-none h-full overflow-hidden">
                {bubbles.map((bubble, i) => (
                    <img 
                        key={i}
                        src="https://i.postimg.cc/4ysMyLRS/bubble.png" 
                        alt="Bubble"
                        className="absolute animate-bubble opacity-0"
                        style={{ 
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            left: `${12.5 * i}%`,
                            animationDelay: `${bubble.delay}s`,
                            bottom: '0'
                        }}
                    />
                ))}
            </div>

            {/* Navbar / Header */}
            <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-6 py-5 md:px-12 md:py-8">
                <img 
                    src="/g.png" 
                    alt="Logo" 
                    className="h-16 md:h-20 w-auto animate-rotate" 
                    style={{ animation: 'rotate 4s linear infinite' }}
                />
                <Link href="/home">
                    <button className="text-white border-2 border-white rounded-full px-6 py-2 md:px-8 md:py-3 font-semibold text-sm m-4 md:text-base hover:bg-[#00aac1] hover:border-[#00aac1] hover:scale-105 transition-all duration-300 cursor-pointer uppercase tracking-wide">
                        Sign Up
                    </button>
                </Link>
            </div>

            {/* Main Content */}
            <div className="absolute top-1/2 left-[8%] -translate-y-1/2 z-30">
                <p className="text-xl md:text-2xl opacity-90 mb-2 font-light">Welcome to</p>
                <h1 className="text-[clamp(3rem,8vw,80px)] font-bold leading-[1.1] mb-8 drop-shadow-xl">
                    Stalworld <br /> Media Concept
                </h1>
            </div>

            {/* CTA Links */}
            <div className="absolute top-[70%] left-[8%] z-30 flex flex-col gap-4">
                {["Find out", "Learn more"].map((text) => (
                    <Link key={text} href="/home">
                        <div className="relative overflow-hidden border border-white text-white px-6 py-3 min-w-[150px] text-center cursor-pointer group transition-colors duration-500 hover:text-[#00aac1] hover:border-[#00aac1]">
                            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></span>
                            <span className="relative z-10 font-medium uppercase text-sm tracking-wider">{text}</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Sliding Sidebar */}
            <div 
                className={`fixed top-0 right-0 h-full z-50 transition-transform duration-500 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Expanded Sidebar Content */}
                <div className="w-80 md:w-96 h-full bg-gradient-to-b from-[#00545d] to-[#000729] flex flex-col items-center py-10 relative">
                    {/* Close Button - Top */}
                    <button 
                        onClick={toggleSidebar}
                        className="absolute top-6 left-6 text-white hover:text-[#00aac1] transition-colors"
                    >
                        <X size={28} />
                    </button>
                    
                    {/* Logo in Expanded Sidebar */}
                    <div className="mt-16 mb-12 flex flex-col items-center">
                        <img 
                            src="/3d.png" 
                            alt="Logo" 
                            className="h-30 w-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-center text-white">Stalworld Media</h3>
                    </div>
                    
                    {/* Social Media Section - Expanded */}
                    <div className="w-full px-8 mb-12">
                        <h4 className="text-lg font-semibold mb-6 text-[#00aac1] text-center">Connect With Us</h4>
                        <div className="flex flex-col gap-4">
                            {[
                                { icon: <Facebook size={24} />, label: "Facebook", color: "#1877F2" },
                                { icon: <Instagram size={24} />, label: "Instagram", color: "#E4405F" },
                                { icon: <Twitter size={24} />, label: "Twitter", color: "#1DA1F2" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <div 
                                        className="p-2 rounded-lg transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: social.color }}
                                    >
                                        {social.icon}
                                    </div>
                                    <span className="text-white font-medium flex-grow">{social.label}</span>
                                    <svg className="w-5 h-5 text-white/60 group-hover:text-[#00aac1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="w-full px-8 mb-12">
                        <h4 className="text-lg font-semibold mb-6 text-[#00aac1] text-center">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {["Home", "Services", "Portfolio", "About", "Contact", "Blog"].map((item) => (
                                <Link key={item} href={`/${item.toLowerCase()}`}>
                                    <div 
                                        className="p-3 text-center bg-white/5 rounded-lg hover:bg-[#00aac1] hover:text-white transition-all duration-300 cursor-pointer"
                                        onClick={toggleSidebar}
                                    >
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* Bottom Icons - Expanded */}
                    <div className="mt-auto w-full px-8">
                        <div className="flex justify-center gap-8 mb-10">
                            <div className="text-center group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#00aac1] transition-all duration-300 mb-2">
                                    <Share2 size={20} className="text-white group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="text-xs text-white/70">Share</span>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#00aac1] transition-all duration-300 mb-2">
                                    <Info size={20} className="text-white group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="text-xs text-white/70">Info</span>
                            </div>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="p-4 bg-white/5 rounded-lg mb-6">
                            <p className="text-sm text-white/80 text-center">📧 info@stalworld.com</p>
                            <p className="text-sm text-white/80 text-center mt-1">📍 Creative Studio</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Original Sidebar (Hidden when expanded) */}
            {!isSidebarOpen && (
                <div className="absolute right-0 top-0 bottom-0 w-[50px] md:w-[60px] bg-gradient-to-b from-[#00545d] to-[#000729] z-40 flex flex-col justify-between items-center py-10">
                    <button 
                        onClick={toggleSidebar}
                        className="text-white cursor-pointer hover:text-[#00aac1] transition-colors"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex flex-col gap-6">
                        <Facebook className="text-white cursor-pointer hover:text-[#00aac1] transition-colors" size={20} />
                        <Instagram className="text-white cursor-pointer hover:text-[#00aac1] transition-colors" size={20} />
                        <Twitter className="text-white cursor-pointer hover:text-[#00aac1] transition-colors" size={20} />
                    </div>

                    <div className="flex flex-col gap-6 mb-10">
                        <Share2 className="text-white cursor-pointer hover:text-[#00aac1] transition-colors" size={20} />
                        <Info className="text-white cursor-pointer hover:text-[#00aac1] transition-colors" size={20} />
                    </div>
                </div>
            )}
        </div>
    );
}