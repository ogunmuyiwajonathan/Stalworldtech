import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Share2, Info, Menu, X, Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Landing() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [showInfoPanel, setShowInfoPanel] = useState(false);
    const [copied, setCopied] = useState(false);

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
        // Close share/info panels when closing sidebar
        setShowShareOptions(false);
        setShowInfoPanel(false);
    };

    const handleShare = () => {
        setShowShareOptions(true);
        setShowInfoPanel(false);
    };

    const handleInfo = () => {
        setShowInfoPanel(true);
        setShowShareOptions(false);
    };

    const handleClosePanels = () => {
        setShowShareOptions(false);
        setShowInfoPanel(false);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareOptions = [
        {
            platform: "Facebook",
            icon: <Facebook size={20} />,
            color: "#1877F2",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
        },
        {
            platform: "Twitter",
            icon: <Twitter size={20} />,
            color: "#1DA1F2",
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out Stalworld Media Concept`
        },
        {
            platform: "WhatsApp",
            icon: "📱",
            color: "#25D366",
            url: `https://wa.me/?text=${encodeURIComponent(`Check out Stalworld Media Concept: ${window.location.href}`)}`
        },
        {
            platform: "Copy Link",
            icon: copied ? <Check size={20} /> : <Copy size={20} />,
            color: copied ? "#10B981" : "#6B7280",
            action: () => copyToClipboard(window.location.href)
        }
    ];

    const contactInfo = [
        { icon: <Mail size={20} />, label: "Email", value: "info@stalworld.com", color: "#DC2626" },
        { icon: <Phone size={20} />, label: "Phone", value: "+234 802 390 8821", color: "#059669" },
        { icon: <MapPin size={20} />, label: "Address", value: "47b, New Ipaja Road, Iyana Ipaja, Lagos State, Nigeria", color: "#7C3AED" }
    ];

    const services = [
        "Graphic Design",
        "Custom Printing",
        "Branding Solutions",
        "Logo Design",
        "Social Media Graphics",
        "Corporate Merchandise"
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white font-poppins">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: `url("dera.jpg")` }}
            />

            {/* Bubbles */}
            <div className="absolute inset-x-0 bottom-0 flex justify-around items-end z-10 pointer-events-none h-full overflow-hidden">
                {bubbles.map((bubble, i) => (
                    <img
                        key={i}
                        src="/bubble.png"
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
                className={`fixed top-0 right-0 h-full z-50 transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="w-80 md:w-96 h-full bg-gradient-to-b from-[#00545d] to-[#000729] flex flex-col items-center py-10 relative overflow-y-auto">
                    {/* Close Button */}
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-6 left-6 text-white hover:text-[#00aac1] transition-colors z-50"
                    >
                        <X size={28} />
                    </button>

                    {/* Logo */}
                    <div className="mt-0 mb-8 flex flex-col items-center">
                        <img src="3d.png" alt="Logo" className="h-40 w-auto" />
                        <h3 className="text-xl font-bold text-center text-white mt-2">Stalworld Media <br /> Concept</h3>
                    </div>

                    {/* Share Panel */}
                    {showShareOptions && (
                        <div className="w-full px-6 mb-6 animate-slideIn">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-lg font-semibold text-[#00aac1]">Share</h4>
                                <button
                                    onClick={handleClosePanels}
                                    className="text-white hover:text-[#00aac1] text-sm"
                                >
                                    Close
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {shareOptions.map((option, index) => (
                                    option.action ? (
                                        <button
                                            key={index}
                                            onClick={option.action}
                                            className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-2"
                                            style={{ backgroundColor: `${option.color}15` }}
                                        >
                                            <div className="p-2 rounded-full" style={{ backgroundColor: option.color }}>
                                                {option.icon}
                                            </div>
                                            <span className="text-white text-sm font-medium">{option.platform}</span>
                                        </button>
                                    ) : (
                                        <a
                                            key={index}
                                            href={option.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-2"
                                            style={{ backgroundColor: `${option.color}15` }}
                                        >
                                            <div className="p-2 rounded-full" style={{ backgroundColor: option.color }}>
                                                {option.icon}
                                            </div>
                                            <span className="text-white text-sm font-medium">{option.platform}</span>
                                        </a>
                                    )
                                ))}
                            </div>
                            {copied && (
                                <div className="mt-3 p-2 bg-green-500/20 text-green-300 text-sm text-center rounded-lg">
                                    ✓ Link copied to clipboard!
                                </div>
                            )}
                        </div>
                    )}

                    {/* Info Panel */}
                    {showInfoPanel && (
                        <div className="w-full px-6 mb-6 animate-slideIn">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-lg font-semibold text-[#00aac1]">Contact Info</h4>
                                <button
                                    onClick={handleClosePanels}
                                    className="text-white hover:text-[#00aac1] text-sm"
                                >
                                    Close
                                </button>
                            </div>
                            <div className="space-y-4 mb-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                                        <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                                            <div style={{ color: item.color }}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[#00aac1] font-medium text-sm">{item.label}</p>
                                            <p className="text-white text-sm mt-1">{item.value}</p>
                                            <button
                                                onClick={() => copyToClipboard(item.value)}
                                                className="mt-2 text-xs text-gray-400 hover:text-[#00aac1] transition-colors"
                                            >
                                                {copied && item.value === "info@stalworld.com" ? "✓ Copied" : "Copy"}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mb-4">
                                <h5 className="text-[#00aac1] font-medium mb-2">Our Services</h5>
                                <div className="flex flex-wrap gap-2">
                                    {services.map((service, index) => (
                                        <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center text-sm text-white/60">
                                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                                <p className="mt-1">Sat: 10:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                    )}

                    {/* Main Content (shown when no panel is active) */}
                    {!showShareOptions && !showInfoPanel && (
                        <>
                            {/* Social Media Section */}
                            <div className="w-full px-6 mb-8">
                                <h4 className="text-lg font-semibold mb-6 text-[#00aac1] text-center">Connect With Us</h4>
                                <div className="flex flex-col gap-4">
                                    {[{ icon: <Facebook size={24} />, label: "Facebook", color: "#1877F2" },
                                    { icon: <Instagram size={24} />, label: "Instagram", color: "#E4405F" },
                                    { icon: <Twitter size={24} />, label: "Twitter", color: "#1DA1F2" }].map((social, index) => (
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
                            <div className="w-full px-6 mb-8">
                                <h4 className="text-lg font-semibold mb-4 text-[#00aac1] text-center">Quick Links</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Home", "Services", "About", "Contact"].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => {
                                                // Handle navigation
                                                toggleSidebar();
                                            }}
                                            className="p-3 text-center bg-white/5 rounded-lg hover:bg-[#00aac1] hover:text-white transition-all duration-300"
                                        >
                                            <span className="text-sm font-medium">{item}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Bottom Icons */}
                    <div className="mt-auto w-full px-6">
                        <div className="flex justify-center gap-8 mb-6">
                            <button
                                onClick={handleShare}
                                className={`text-center group cursor-pointer ${showShareOptions ? 'text-[#00aac1]' : ''}`}
                            >
                                <div className={`p-3 rounded-full mb-2 transition-all duration-300 ${showShareOptions ? 'bg-[#00aac1]' : 'bg-white/5 group-hover:bg-[#00aac1]'}`}>
                                    <Share2 size={20} className={`transition-transform ${showShareOptions ? 'scale-110' : 'group-hover:scale-110'}`} />
                                </div>
                                <span className="text-xs text-white/70">Share</span>
                            </button>
                            <button
                                onClick={handleInfo}
                                className={`text-center group cursor-pointer ${showInfoPanel ? 'text-[#00aac1]' : ''}`}
                            >
                                <div className={`p-3 rounded-full mb-2 transition-all duration-300 ${showInfoPanel ? 'bg-[#00aac1]' : 'bg-white/5 group-hover:bg-[#00aac1]'}`}>
                                    <Info size={20} className={`transition-transform ${showInfoPanel ? 'scale-110' : 'group-hover:scale-110'}`} />
                                </div>
                                <span className="text-xs text-white/70">Info</span>
                            </button>
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
                        <button
                            onClick={() => {
                                setIsSidebarOpen(true);
                                setTimeout(handleShare, 100);
                            }}
                            className="text-white cursor-pointer hover:text-[#00aac1] transition-colors"
                        >
                            <Share2 size={20} />
                        </button>
                        <button
                            onClick={() => {
                                setIsSidebarOpen(true);
                                setTimeout(handleInfo, 100);
                            }}
                            className="text-white cursor-pointer hover:text-[#00aac1] transition-colors"
                        >
                            <Info size={20} />
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}