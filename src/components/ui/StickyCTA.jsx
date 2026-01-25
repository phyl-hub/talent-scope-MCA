import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px (approx hero height)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-4xl mx-auto bg-slate-900/70 text-white rounded-2xl shadow-2xl border border-slate-800 p-4 flex items-center justify-between gap-4 relative overflow-hidden">
        
        {/* Glowing effect */}
        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Strategic Density: NY + Miami</p>
          </div>
          <p className="font-bold text-sm md:text-base text-slate-100">
            Inaugural Drop: Monday, Feb 16, 2026.
          </p>
          <p className="text-xs text-slate-400">
            $2K–$4K Activation Fee waived + first month free for 5 Beta Partners.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link 
            to="/schedule" 
            className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm font-bold px-5 py-2.5 rounded-lg transition shadow-lg shadow-emerald-500/10 flex items-center gap-2 whitespace-nowrap"
          >
            Apply for Beta Access <ArrowRight size={16} />
          </Link>
          <button 
            onClick={() => setIsClosed(true)}
            className="text-slate-500 hover:text-white transition p-1"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
