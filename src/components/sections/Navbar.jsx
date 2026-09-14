import React from 'react';
// 1. Import Link and useLocation
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  // 2. Get the current page path
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo - Always goes to Home */}
        <Link to="/" className="flex items-center gap-2">
          {/* Use the public folder path */}
          <img src="/images/talent-scope-logo.png" alt="Talent Scope Logo" width="32" height="32" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tight text-slate-900">Talent Scope</span>
        </Link>
        
        {/* Links - Smart Logic */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
          <Link 
            to="/schedule" 
            className="hover:text-amber-600 transition font-bold"
          >
            Preview Candidates
          </Link>
          
          {/* LOGIC: 
             If we are on Home (isHomePage is true) -> use "#compare" (smooth scroll)
             If we are on Terms (isHomePage is false) -> use "/#compare" (go to home first)
          */}
          
          <a 
            href={isHomePage ? "#compare" : "/#compare"} 
            className="hover:text-blue-600 transition"
          >
            Compare
          </a>

          <a 
            href={isHomePage ? "#how" : "/#how"} 
            className="hover:text-blue-600 transition"
          >
            How it Works
          </a>

          <a 
            href={isHomePage ? "#pricing" : "/#pricing"} 
            className="hover:text-blue-600 transition"
          >
            Pricing
          </a>
        </div>

        {/* CTA */}
        <Link
          to="/schedule"
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg shadow-amber-500/20 text-sm hover:-translate-y-0.5 flex flex-col items-center leading-tight"
        >
          <span className="font-bold">See Candidates FREE</span>
          <span className="text-xs opacity-90">(See Their Tapes 🎥)</span>
        </Link>
      </div>
    </nav>
  );
}