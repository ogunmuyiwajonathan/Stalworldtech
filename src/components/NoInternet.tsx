import { Link } from "wouter";

export default function NoInternet() {
  return (
    <div className="h-screen w-full bg-[#0d0d0d] flex flex-col items-center justify-center text-center p-6">
      
      {/* Glowing Icon */}
      <div className="text-[#c4871f] animate-pulse text-[80px] drop-shadow-[0_0_25px_rgba(196,135,31,0.6)]">
        ⚡
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#c4871f] mt-4">
        No Internet Connection
      </h1>

      {/* Subtitle */}
      <p className="text-white/80 mt-2 max-w-md text-sm md:text-base leading-relaxed">
        It looks like you are offline. Please check your network and try again.
      </p>

      {/* Visual Animated Bars */}
      <div className="flex gap-1 mt-6 animate-pulse">
        <div className="w-2 h-6 bg-white/20 rounded"></div>
        <div className="w-2 h-10 bg-white/30 rounded"></div>
        <div className="w-2 h-8 bg-white/20 rounded"></div>
        <div className="w-2 h-4 bg-white/10 rounded"></div>
      </div>

      {/* Retry Button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-10 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c4871f] to-[#ff7e5f] text-black font-bold shadow-[0_8px_28px_rgba(196,135,31,0.25)] transition-transform hover:-translate-y-1 active:scale-95"
      >
        Try Again
      </button>

      {/* Back to Home Link */}
      <Link href="/" className="text-white/60 text-sm underline mt-6 hover:text-white/95">
        Back to Home
      </Link>

      {/* Brand Signature */}
      <div className="absolute bottom-8 text-[11px] text-white/20 tracking-widest">
        Stalworld Media Concept
      </div>
    </div>
  );
}
