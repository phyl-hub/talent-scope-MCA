import React from 'react';
import { ArrowRight, CheckCircle2, Play, Lock, Zap, Video, Flame, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CandidateRow from '../ui/CandidateRow';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white" id="product-promise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 relative z-10">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold border border-red-100 animate-fade-in">
              <Flame size={14} className="fill-red-500 text-red-500" />
              Remote-First MCA Talent. Delivered Weekly.
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Your Fixed-Cost<br/>
                <span className="text-amber-600">Remote Bench</span> for<br/>
                MCA shops.
              </h1>
                <p className="text-lg text-slate-600 mb-4 leading-relaxed max-w-lg">Access a vetted bench of <strong>Outbound Funding Specialists</strong> so empty seats never slow your dial capacity.
                </p>
              <div className="space-y-3 mb-8 text-base text-slate-700">
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Weekly Candidate Bench:</strong> Remote-Ready Outbound Specialists.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Video Auditions:</strong> Vetted for dial-pressure resilience.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Flat Rate:</strong> Flat monthly fee. No long-term contracts.</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/schedule"
                className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-4 min-w-[270px] rounded-xl font-bold text-lg shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Preview Candidates Free
                <ArrowRight size={20} />
              </Link>
              <a
                href="#faq"
                className="flex items-center gap-2 px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 font-semibold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <ShieldCheck size={18} className="text-slate-400" />
                No placement fees.
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              Month-to-month. Cancel anytime. Weekly Inventory Drops.
            </p>
          </div>

          {/* Right Column: The Bench Visual */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-50 -z-10"></div>

            {/* Main Video Card */}
            <div className="absolute top-0 right-0 w-[420px] h-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 z-0 transform rotate-2 hover:rotate-0 transition duration-500 group cursor-pointer border border-slate-100">
              <picture>
                <source srcSet="/images/high-energy-sdr-team.webp" type="image/webp" />
                <img
                  src="/images/high-energy-sdr-team.jpg"
                  alt="Remote financial services sales floor"
                  width={1024}
                  height={559}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 filter brightness-95"
                />
              </picture>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-lg group-hover:scale-110 transition">
                  <Play size={32} fill="white" className="text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Floating Bench UI */}
            <div className="absolute bottom-12 left-0 w-[380px] z-10">
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-6 -rotate-1 hover:rotate-0 transition duration-500">

                {/* Header of Card */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1 border border-amber-100">
                    <Lock size={10} />
                    Your Outbound Inventory
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic mb-3">
                  Sample profiles, for illustration
                </p>

                {/* Candidate List */}
                <div className="space-y-3 relative">
                  <CandidateRow name="Marcus Torres" role="Outbound Specialist • Bilingual" score={8.1} />

                  {/* Active Candidate with Popover */}
                  <div className="relative">
                    <CandidateRow name="Jordan Mills" role="Outbound Specialist • 4yr Exp" score={9.5} />
                  </div>

                  <CandidateRow name="Ashley Chen" role="Outbound Specialist • High Volume" score={8.6} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Fallback */}
          <div className="lg:hidden space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-100">
              <picture>
                <source srcSet="/images/high-energy-sdr-team.webp" type="image/webp" />
                <img
                  src="/images/high-energy-sdr-team.jpg"
                  className="w-full h-48 object-cover"
                  alt="MCA sales floor"
                  width={1024}
                  height={559}
                />
              </picture>
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <Play size={40} fill="white" className="text-white" />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6">
              <p className="text-[11px] text-slate-400 italic mb-3">
                Sample profiles, for illustration
              </p>
              <CandidateRow name="Marcus Torres" role="Outbound Specialist • 5yr Exp" score={9.8} />
              <CandidateRow name="Jordan Mills" role="Outbound Specialist • High Volume" score={9.4} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}