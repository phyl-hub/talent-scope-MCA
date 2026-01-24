import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, ShieldCheck, Timer, DollarSign, Flame } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6" id="compare">
      <div className="text-center mb-10 space-y-3">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
          <AlertTriangle className="w-4 h-4" />
          The Elite Operator Solution
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-100">
          Variable placement fees destroy unit economics.
        </h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          <strong>$5K-$20K per hire is unsustainable</strong> when you lose 50% of your floor every quarter. Every placement fee spikes CAC. Switch to a fixed-cost pipeline that keeps desks full.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
        {/* Traditional Recruiter */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-lg flex flex-col gap-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Traditional agencies</p>
              <p className="text-sm text-slate-400">Slow. Expensive. Inefficient.</p>
            </div>
            <XCircle className="w-6 h-6 text-slate-600" />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-slate-500 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-100">$5K-$20K per placement</p>
                <p className="text-sm text-slate-400">Variable costs that spike every time you hire. No performance guarantee.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Timer className="w-5 h-5 text-slate-500 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-100">4–6 weeks downtime</p>
                <p className="text-sm text-slate-400">Every empty seat costs you lost opportunity.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-slate-500 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-100">Resume noise</p>
                <p className="text-sm text-slate-400">Hours lost interviewing candidates who can't perform on the phone.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 text-sm text-slate-400">
            <Flame className="w-4 h-4 inline mr-1 text-slate-500" />
            Result: CAC spikes with every hire. Revenue uptime degrades.
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:flex flex-col items-center justify-center text-slate-700">
          <span className="h-full w-px bg-slate-800" aria-hidden></span>
        </div>

        {/* ISO Bench */}
        <div className="bg-slate-900/70 text-white rounded-3xl p-6 shadow-2xl border border-emerald-500/30 flex flex-col gap-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">ISO Bench</p>
              <p className="text-sm text-slate-300">Fixed-cost bench for outbound hiring.</p>
            </div>
            <CheckCircle className="w-6 h-6 text-emerald-400" />
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">$1,000–$1,800/mo + Bench Activation Fee. Unlimited hires.</p>
                <p className="text-sm text-slate-300">Fixed cost access insurance for constant turnover. CAC stays predictable.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Timer className="w-5 h-5 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Weekly drops + bench depth.</p>
                <p className="text-sm text-slate-300">Continuous inventory so you can replace churn fast without restarting a recruiter cycle.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">90-120s Video Auditions</p>
                <p className="text-sm text-slate-300">Verify dial-pressure resilience before interviews.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 text-sm text-slate-300 relative z-10">
            <Flame className="w-4 h-4 inline mr-1 text-emerald-400" />
            Result: CAC protected. LTV preserved. Revenue uptime maximized.
          </div>
        </div>
      </div>
    </section>
  );
}
