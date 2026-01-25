import React from 'react';
import { ArrowRight, CheckCircle2, Lock, Flame, ShieldCheck, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CandidateRow from '../ui/CandidateRow';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-slate-950" id="product-promise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 relative z-10">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold border border-emerald-500/20 uppercase tracking-wide">
              <Flame size={14} className="fill-emerald-400 text-emerald-400" />
              New York & Miami Strategic Launch
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.05] mb-6">
                Your Fixed-Cost<br/>
                <span className="text-emerald-400">Talent Bench</span><br/>
                for MCA Shops.
              </h1>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-lg font-medium">
                Stop paying $5k+ per hire. Access a vetted bench of Outbound Specialists so empty seats never kill your daily dial volume.
              </p>
              
              <div className="bg-slate-900/50 border-l-4 border-emerald-500 p-4 mb-8 max-w-md">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong>The Feb 16 Inaugural Drop:</strong> We are currently hand-vetting the first 100 specialists for the NY and Miami corridors. 5 Beta Partner slots remain.
                </p>
              </div>

              <div className="grid gap-4 mb-10 text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-200 text-lg">Grit Filter: Verify tonal authority & phone presence.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-200 text-lg">Unlimited Hires: $0 per-head placement fees.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-200 text-lg">Density: Exclusively New York & Miami.</span>
                </div>
              </div>
            </div>

            {/* CTA & Founder Block */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/schedule"
                  className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-8 py-4 rounded-xl font-black text-xl shadow-2xl shadow-emerald-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Apply for Beta Access
                  <ArrowRight size={22} strokeWidth={3} />
                </Link>
                <a
                  href="#pricing"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-900/40 rounded-xl border border-slate-800 text-slate-300 font-bold text-base hover:bg-slate-900/70 transition-colors"
                >
                  See The Model
                </a>
              </div>

              <div className="flex items-center gap-4 pl-1 border-t border-slate-900 pt-6 mt-2">
                <img
                  src="/images/Philipp-Hoffschroer.jpg"
                  alt="Philipp Hoffschroer"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-800"
                />
                <div className="text-sm leading-tight">
                  <div className="text-slate-200 font-bold text-base">"The resume lies. The Tape doesn't!"</div>
                  <div className="text-slate-500 font-medium">— Philipp Hoffschroer, Founder</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vetting Scorecard Visual */}
          <div className="relative hidden lg:block">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

            {/* Main Scorecard UI */}
            <div className="relative z-20">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden transform rotate-1">
                {/* Scorecard Header */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-700/50">
                   <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest">
                        <BarChart3 size={14} />
                        Tonal Scorecard: Outbound Specialist
                      </div>
                      <span className="text-slate-500 text-[10px] font-mono uppercase">Batch #001-NYM</span>
                   </div>

                   <div className="flex items-center justify-between gap-3">
                     <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                       <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]"></span>
                       Randomized Flash Objection
                     </div>
                     <span className="text-slate-500 text-[10px] font-mono uppercase">Live Moment</span>
                   </div>
                </div>

                {/* Scorecard Metrics */}
                <div className="p-6 space-y-4 bg-slate-900/90">
                  {/* Candidate Feed */}
                  <div className="pt-4 border-t border-slate-800/50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-slate-100 font-bold flex items-center gap-2 text-sm">
                        <Lock size={14} className="text-slate-500" />
                        Feb 16 Batch Preview
                      </h3>
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">5 subsections</span>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <CandidateRow name="Anon #014" score={8.2} />
                      <div className="opacity-40 grayscale blur-[1px]">
                        <CandidateRow name="Anon #027" score={9.8} />
                      </div>
                      <div className="opacity-20 grayscale blur-[2px]">
                        <CandidateRow name="Anon #041" score={7.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Shield Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-950 border border-slate-800 p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-30 transform -rotate-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/40">
                  <ShieldCheck className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase leading-none mb-1">Vetting Guarantee</div>
                  <div className="text-slate-200 font-bold text-xs uppercase tracking-tight">Zero Placement Fees</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}