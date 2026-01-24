import React from 'react';
import { ArrowRight, CheckCircle2, Lock, Flame, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CandidateRow from '../ui/CandidateRow';

export default function Hero() {
  return (
    <section className="relative pt-14 pb-20 overflow-hidden bg-slate-950" id="product-promise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 relative z-10">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold border border-emerald-500/20">
              <Flame size={14} className="fill-emerald-400 text-emerald-400" />
              Video-vetted MCA outbound talent. Weekly drops. Zero placement fees.
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1] mb-6">
                Your Fixed-Cost<br/>
                <span className="text-emerald-400">Talent Bench</span><br/>
                for MCA sales floors.
              </h1>
                <p className="text-lg text-slate-300 mb-4 leading-relaxed max-w-lg">Watch short video auditions. Stack the best reps. Hire directly—<strong>no placement fees</strong>.
                </p>
              <div className="space-y-3 mb-8 text-base text-slate-300">
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Weekly Inventory:</strong> Fresh candidates released every Monday.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Video Auditions:</strong> Verify dial-pressure resilience before interview.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Fixed Cost:</strong> Bench Activation Fee + flat monthly. Unlimited hires, zero placement fees.</span>
                </p>
              </div>
            </div>

            {/* Founder */}
            <div className="flex items-center gap-3">
              <img
                src="/images/Philipp-Hoffschroer.jpg"
                alt="Philipp Hoffschroer, Founder of ISO Bench"
                className="w-11 h-11 rounded-full object-cover border border-slate-800"
                loading="lazy"
              />
              <div className="text-sm leading-tight">
                <div className="text-slate-200 font-semibold">Philipp Hoffschroer</div>
                <div className="text-slate-400">Founder, ISO Bench</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/schedule"
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-10 py-3.5 min-w-[270px] rounded-xl font-bold text-lg shadow-xl shadow-emerald-500/10 transition hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Preview Candidates Free
                <ArrowRight size={20} />
              </Link>
              <a
                href="#faq"
                className="flex items-center gap-2 px-6 py-3.5 bg-slate-900/40 rounded-xl border border-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-900/70 transition-colors cursor-pointer"
              >
                <ShieldCheck size={18} className="text-slate-400" />
                No placement fees.
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-3">
              Month-to-month. Cancel anytime. Weekly Inventory Drops.
            </p>

            {/* Trust Module */}
            <div className="mt-6 bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
              <div className="text-sm font-bold text-slate-100 mb-3">What you’ll see in the free preview</div>
              <div className="grid sm:grid-cols-3 gap-3 text-sm text-slate-300">
                <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-3">
                  <div className="text-slate-100 font-semibold mb-1">The Tape</div>
                  <div>90–120s video auditions to judge phone presence fast.</div>
                </div>
                <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-3">
                  <div className="text-slate-100 font-semibold mb-1">Scorecard</div>
                  <div>Clear signals: objection-handling, pacing, readiness.</div>
                </div>
                <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-3">
                  <div className="text-slate-100 font-semibold mb-1">How stacking works</div>
                  <div>See the workflow for contacting and drafting replacements.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Bench Visual */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-3xl opacity-60 -z-10"></div>

            {/* Portal Preview Card (not a fake video) */}
            <Link
              to="/schedule"
              className="absolute top-0 right-0 w-[420px] h-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 z-0 transform rotate-2 hover:rotate-0 transition duration-500 group border border-slate-800"
              aria-label="Preview the ISO Bench portal"
            >
              <img
                src="/images/high-energy-sdr-team.jpg"
                alt="ISO Bench portal preview"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 filter brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">Portal Preview</div>
                  <div className="text-slate-100 font-black text-lg leading-tight">See how The Tape + stacking works</div>
                </div>
                <div className="shrink-0 inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold px-4 py-2 rounded-xl transition shadow-lg shadow-emerald-500/10">
                  Preview
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>

            {/* Floating Bench UI */}
            <div className="absolute bottom-12 left-0 w-[380px] z-10">
              <div className="bg-slate-900/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-slate-800 p-5 -rotate-1 hover:rotate-0 transition duration-500">
                
                {/* Header of Card */}
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1 border border-emerald-500/20">
                    <Lock size={10} />
                    Your Bench
                  </div>
                </div>

                {/* Candidate List */}
                <div className="space-y-2.5 relative">
                  <CandidateRow name="Candidate A" role="Outbound Specialist" score={8.1} />
                  
                  {/* Active Candidate with Popover */}
                  <div className="relative">
                    <CandidateRow name="Candidate (Elite)" role="Enterprise only preview" score={9.5} />
                    <div className="absolute -right-2 -top-2 bg-emerald-400 text-slate-950 text-[10px] font-black px-2 py-1 rounded-full shadow-lg">
                      TOP
                    </div>
                  </div>

                  <CandidateRow name="Candidate (Elite)" role="Enterprise only preview" score={8.6} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Fallback */}
          <div className="lg:hidden space-y-6">
            <Link
              to="/schedule"
              className="relative rounded-xl overflow-hidden shadow-lg border border-slate-800 block"
              aria-label="Preview the ISO Bench portal"
            >
              <img
                src="/images/high-energy-sdr-team.jpg"
                className="w-full h-48 object-cover"
                alt="ISO Bench portal preview"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">Portal Preview</div>
                  <div className="text-slate-100 font-black">See The Tape</div>
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold px-3 py-2 rounded-xl transition">
                  Preview
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
            <div className="bg-slate-900/60 rounded-xl shadow-xl border border-slate-800 p-5">
              <CandidateRow name="Candidate (Elite)" role="Enterprise only preview" score={9.8} />
              <CandidateRow name="Candidate (Elite)" role="Enterprise only preview" score={9.4} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}