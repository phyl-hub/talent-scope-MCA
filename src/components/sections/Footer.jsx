import React from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORT THIS to fix navigation

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-10 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/iso-bench-logo.png" alt="ISO Bench Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold tracking-tight text-slate-100">
                ISO Bench
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              <strong className="text-slate-200">Institutional-grade hiring for MCA ISOs.</strong><br />
              Outbound Funding Specialists.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <p className="text-sm font-bold text-slate-100 mb-4 uppercase tracking-wider">Product</p>
            <ul className="space-y-3 text-sm text-slate-400">
              {/* Internal Anchor Links (using #) can stay as <a> tags */}
              <li><a href="/#product-promise" className="hover:text-emerald-400 transition duration-200">Our Product</a></li>
              <li><a href="/#how" className="hover:text-emerald-400 transition duration-200">How It Works</a></li>
              <li><a href="/#pricing" className="hover:text-emerald-400 transition duration-200">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-emerald-400 transition duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <p className="text-sm font-bold text-slate-100 mb-4 uppercase tracking-wider">Legal</p>
            <ul className="space-y-3 text-sm text-slate-400">
              {/* 2. USE <Link> FOR INTERNAL PAGES */}
              <li><Link to="/privacy" className="hover:text-emerald-400 transition duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-400 transition duration-200">Terms of Service</Link></li>
              <li><a href="mailto:sales@isobench.com" className="hover:text-emerald-400 transition duration-200">Contact Sales</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <p className="text-sm font-bold text-slate-100 mb-4 uppercase tracking-wider">Connect</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="mailto:sales@isobench.com" className="hover:text-emerald-400 transition duration-200">Email</a></li>
              <li><a href="https://www.linkedin.com/company/talent-scope-group/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition duration-200">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">&copy; 2026 Talent Scope Group LLC (d/b/a ISO Bench). All rights reserved.</p>
          <p className="text-slate-500 text-sm font-medium">From $1,000/mo + Bench Activation Fee. Unlimited hires. $0 placement fees.</p>
        </div>
      </div>
    </footer>
  );
}