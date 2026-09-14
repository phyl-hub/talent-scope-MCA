import React from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORT THIS to fix navigation

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/talent-scope-logo.png" alt="Talent Scope Logo" width="32" height="32" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Talent Scope
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              <strong className="text-slate-700">Your Private MCA Outbound Bench.</strong><br />
              Outbound Funding Specialists.
            </p>
            <address className="text-slate-500 text-sm leading-relaxed not-italic">
              Talent Scope Group LLC<br />
              1309 Coffeen Avenue, STE 1200<br />
              Sheridan, WY 82801<br />
              United States<br />
              <a href="tel:+13074290181" className="hover:text-blue-600 transition duration-200">+1 (307) 429-0181</a>
            </address>
          </div>

          {/* Column 2: Product */}
          <div>
            <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Product</p>
            <ul className="space-y-3 text-sm text-slate-500">
              {/* Internal Anchor Links (using #) can stay as <a> tags */}
              <li><a href="/#product-promise" className="hover:text-blue-600 transition duration-200">Our Product</a></li>
              <li><a href="/#how" className="hover:text-blue-600 transition duration-200">How It Works</a></li>
              <li><a href="/#pricing" className="hover:text-blue-600 transition duration-200">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-blue-600 transition duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Legal</p>
            <ul className="space-y-3 text-sm text-slate-500">
              {/* 2. USE <Link> FOR INTERNAL PAGES */}
              <li><Link to="/privacy" className="hover:text-blue-600 transition duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition duration-200">Terms of Service</Link></li>
              <li><a href="mailto:sales@talent-scope.com" className="hover:text-blue-600 transition duration-200">Contact Sales</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Connect</p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="mailto:sales@talent-scope.com" className="hover:text-blue-600 transition duration-200">Email</a></li>
              <li><a href="https://www.linkedin.com/company/talent-scope-group/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-200">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">&copy; 2025 Talent Scope Group LLC. All rights reserved.</p>
          <p className="text-slate-400 text-sm font-medium">From $1,000/mo flat. Unlimited hires. $0 placement fees.</p>
        </div>
      </div>
    </footer>
  );
}