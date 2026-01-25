import React from 'react';
// 1. Import Link and useLocation
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  // 2. Get the current page path
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800" aria-label="Primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] bg-slate-950 text-emerald-300 border border-emerald-500/30 rounded-lg px-3 py-2 font-bold"
      >
        Skip to content
      </a>
      <div className="bg-emerald-500/10 text-emerald-200 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-6 py-2 text-xs sm:text-sm font-semibold">
          <span className="font-bold">Status:</span> Strategic Density Launch. Batching first 100+ specialists for NY &amp; Miami. <span className="font-bold">Inaugural Drop:</span> Monday, Feb 16, 2026.
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo - Always goes to Home */}
        <Link to="/" className="flex items-center gap-2">
          {/* Use the public folder path */}
          <img src="/images/iso-bench-logo.png" alt="ISO Bench Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tight text-slate-100">ISO Bench</span>
        </Link>
        
        {/* Links - Smart Logic */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
          <Link 
            to="/schedule" 
            className="hover:text-emerald-400 transition font-bold"
          >
            Join Feb 16 Waitlist
          </Link>
          
          {/* LOGIC: 
             If we are on Home (isHomePage is true) -> use "#compare" (smooth scroll)
             If we are on Terms (isHomePage is false) -> use "/#compare" (go to home first)
          */}
          
          <a 
            href={isHomePage ? "#compare" : "/#compare"} 
            className="hover:text-emerald-400 transition"
          >
            Compare
          </a>

          <a 
            href={isHomePage ? "#how" : "/#how"} 
            className="hover:text-emerald-400 transition"
          >
            How it Works
          </a>

          <a 
            href={isHomePage ? "#pricing" : "/#pricing"} 
            className="hover:text-emerald-400 transition"
          >
            Pricing
          </a>
        </div>

        {/* CTA */}
        <Link
          to="/schedule"
          className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-emerald-500/10 text-sm hover:-translate-y-0.5 flex flex-col items-center leading-tight"
        >
          <span className="font-bold">Join the Feb 16 Waitlist</span>
          <span className="text-xs opacity-80">(5 Beta Partner spots)</span>
        </Link>
      </div>
    </nav>
  );
}