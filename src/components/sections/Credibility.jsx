import React from 'react';
import { CheckCircle2, XCircle, Zap } from 'lucide-react';

export default function Credibility() {
  return (
    <section className="py-16 bg-slate-950" id="credibility">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <Zap className="w-4 h-4" />
            Why MCA companies use ISO Bench
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-100">
            Built for high-churn, high-volume sales floors
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Traditional recruiting breaks down when you need speed and throughput over resumes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Pain Points */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xl font-bold text-slate-100 mb-3">Traditional recruiting breaks down in high-churn environments:</h3>
            <ul className="text-slate-300 text-base space-y-2">
              <li className="flex items-start gap-3"><XCircle size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />Recruiter fees don’t scale</li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />Time-to-hire kills momentum</li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />Resumes don’t predict call performance</li>
            </ul>
          </div>

          {/* Operator Value */}
          <div className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xl font-bold text-slate-100 mb-3">ISO Bench is built for operators who need:</h3>
            <ul className="text-slate-300 text-base space-y-2">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Speed over polish</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Throughput over perfection</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />A repeatable system instead of one-off hires</li>
            </ul>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-10 grid md:grid-cols-3 gap-4 text-sm font-semibold">
          <div className="bg-slate-900/60 text-slate-100 rounded-xl px-4 py-3 flex items-center justify-between border border-slate-800">
            <span>Speed-to-contact</span>
            <span className="text-emerald-300">Instant after stacking</span>
          </div>
          <div className="bg-slate-900/40 text-slate-100 rounded-xl px-4 py-3 flex items-center justify-between border border-slate-800">
            <span>Weekly candidate drop</span>
            <span className="font-black">Mon 9 AM & 2 PM EST</span>
          </div>
          <div className="bg-slate-900/40 text-slate-100 rounded-xl px-4 py-3 flex items-center justify-between border border-slate-800">
            <span>Hiring model</span>
            <span className="font-black">Unlimited hires, flat fee</span>
          </div>
        </div>

        {/* Fit Filter */}
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-lg font-bold text-slate-100 mb-3">Good fit if you…</h3>
            <ul className="text-slate-300 text-base space-y-2">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Need to keep seats filled through churn</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Care more about dial behavior than polished resumes</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />Want a repeatable pipeline, not one-off recruiting</li>
            </ul>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-lg font-bold text-slate-100 mb-3">Not a fit if you…</h3>
            <ul className="text-slate-300 text-base space-y-2">
              <li className="flex items-start gap-3"><XCircle size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />Want a recruiter to run interviews and negotiate offers</li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />Only hire “perfect resumes” and expect low churn</li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />Need guaranteed headcount or guaranteed performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
