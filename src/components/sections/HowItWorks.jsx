import React from 'react';
import { Search, CheckCircle2, CalendarClock } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-16 bg-slate-950" id="how">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <CalendarClock className="w-4 h-4" />
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-100">
            How ISO Bench Works
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Running a high-velocity MCA sales team means constant motion. Reps churn. Seats open. Dials drop. Most companies feel this pain too late.
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            ISO Bench exists to solve that operational gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-300 font-bold text-lg border border-emerald-500/20">01</div>
              <Search className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Step 1: Source + screen outbound talent</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              We continuously source Outbound Funding Specialists and screen for what matters on a high-velocity floor. Resumes are secondary. Every candidate completes a short video audition designed to test:
            </p>
            <ul className="text-slate-300 text-base space-y-2 mb-4">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Real-time objection handling under rejection pressure</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Tonal authority on outbound financial calls</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Comfort with commission-driven compensation</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Technical readiness for sustained dial capacity and CRM workflows</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              Only candidates who meet our baseline make it into the platform.
            </p>
          </div>

          <div className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-300 font-bold text-lg border border-emerald-500/20">02</div>
              <CalendarClock className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Step 2: Weekly inventory drops</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Every week, new candidates are released into the ISO Bench portal. You get access to:
            </p>
            <ul className="text-slate-300 text-base space-y-2 mb-4">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Outbound Funding Specialists optimized for sustained dial capacity and real-time objection handling</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Candidates vetted for rejection pressure resilience and front-end qualification</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              You review, contact, and decide who you want to move forward with. We don’t interfere with your hiring decisions.
            </p>
          </div>

          <div className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-300 font-bold text-lg border border-emerald-500/20">03</div>
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Step 3: Hire directly</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              ISO Bench does not employ reps and does not charge per hire.
            </p>
            <p className="text-slate-300 font-semibold mb-2">You:</p>
            <ul className="text-slate-300 text-base space-y-2 mb-4">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Interview candidates directly</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Decide compensation and structure</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Hire, trial, or pass</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              You pay a Bench Activation Fee to turn on access, then a flat monthly subscription to keep access active. No recruiter markups. No per-head fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}