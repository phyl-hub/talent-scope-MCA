import React from 'react';
import { Zap, ShieldCheck, CheckCircle2, Flame, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section className="py-16 bg-slate-950" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-emerald-300 bg-emerald-500/10 px-4 py-2 rounded-full mb-5 border border-emerald-500/20">
            <Zap className="w-4 h-4" />
            Scalable Volume. Fixed Cost.
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-100">
            Stop paying <span className="text-emerald-400">$5K-$20K</span> per hire.
          </h2>
          <p className="text-2xl text-slate-300 mt-4 max-w-2xl mx-auto">
            <strong>Your MCA floor loses 50% of reps every quarter. Variable fees destroy your P&L.</strong></p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          
          {/* CORE PLAN */}
          <div className="relative bg-slate-900/60 rounded-3xl shadow-2xl border-2 border-slate-800 overflow-hidden">
            <div className="absolute top-0 left-0 bg-amber-300 text-slate-950 px-6 py-2 rounded-br-2xl font-black text-sm">
              PILOT PARTNER
            </div>
            <div className="absolute top-0 right-0 bg-emerald-400 text-slate-950 px-6 py-2 rounded-bl-2xl font-bold text-sm">
              MOST POPULAR
            </div>
            <div className="pt-12 pb-10 px-10">
              <h3 className="text-3xl font-black text-slate-100">Growth Core</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-black text-slate-100">$1,000</span>
                <span className="text-xl text-slate-400">/month</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                + <span className="text-slate-200 font-semibold">$2,000 Bench Activation Fee</span> (one-time to start; re-required after 30+ days inactive)
              </p>
              <p className="text-sm text-emerald-200 mt-2 font-semibold">
                Pilot perk: Bench Activation Fee waived (<strong>$2k–$4k savings</strong>) for the first 5 NY or Miami Beta Partners.
              </p>
              <p className="text-lg text-slate-300 mt-2">For 5–10-seat sales floors ready to eliminate hiring friction.</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-100">Candidates remain on your bench for up to 30 days.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-100">Inaugural Drop: <strong>Monday, Feb 16, 2026</strong>. Batching 100+ vetted specialists for NY &amp; Miami corridors.</span>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-100"><strong>Operationally ready:</strong> Vetted for tech readiness and CRM discipline.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-100">Stack up to 20 candidates in your portal.</span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-slate-300 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-100"><strong>General population only:</strong> Elite access (Score <strong>≥ 8.5</strong>) is Enterprise-only.</span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-slate-300 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-100"><strong>The tape don't lie:</strong> Verify dial-pressure resilience.</span>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-100"><strong>Pre-launch:</strong> No database to search today. Apply for beta access now.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-100"><strong>$0 placement fees with unlimited hires.</strong></span>
                </li>
              </ul>

              <Link to="/schedule" className="mt-10 block w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-lg py-4 rounded-xl text-center shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
                Apply for Beta Access
              </Link>
              <p className="text-slate-400 mt-3 text-sm text-center">
                Month-to-month. Cancel anytime. Inaugural Drop: Monday, Feb 16, 2026.
              </p>
            </div>
          </div>

          {/* SCALE PLAN */}
          <div className="relative bg-gradient-to-br from-slate-900 to-black rounded-3xl shadow-3xl overflow-hidden text-white border border-slate-800">
            <div className="absolute top-0 left-0 bg-slate-100 text-slate-950 px-6 py-2 rounded-br-2xl font-bold text-sm">
              HIGH VOLUME
            </div>
            <div className="absolute top-0 right-0 bg-amber-300 text-slate-950 px-6 py-2 rounded-bl-2xl font-black text-sm">
              PILOT PARTNER
            </div>
            <div className="pt-12 pb-10 px-10">
              <h3 className="text-3xl font-black">Enterprise Scale</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-black">$1,800</span>
                <span className="text-xl text-slate-400">/month</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                + <span className="text-white font-semibold">$4,000 Bench Activation Fee</span> (one-time to start; re-required after 30+ days inactive)
              </p>
              <p className="text-sm text-emerald-200 mt-2 font-semibold">
                Beta Partner perk: Bench Activation Fee waived (<strong>$2,000–$4,000 value</strong>) for the first 5 NY or Miami Beta Partners. Help us calibrate the filter; get the first month on us.
              </p>
              <p className="text-lg text-slate-300 mt-2">For 10+ seat teams that need continuous dial capacity.</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Candidates remain on your bench for up to 30 days.</span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Everything in Growth Core.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Inaugural Drop: <strong>Monday, Feb 16, 2026</strong>. Priority access for Enterprise Beta Partners.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold"><strong>Enterprise-only Elite access:</strong> Score <strong>≥ 8.5</strong>.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Stack up to 50 candidates in your portal.</span>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold"><strong>Stack Refresher (Coming Soon):</strong> Planned ability to refresh a limited number of locked stacks per month (target: up to 5), subject to availability in the portal.</span>
                </li>
              </ul>

              <Link to="/schedule" className="mt-10 block w-full bg-emerald-400 text-slate-950 hover:bg-emerald-300 font-bold text-lg py-4 rounded-xl text-center shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
                Apply for Beta Access
              </Link>
              <p className="text-slate-400 mt-3 text-sm text-center">
                Month-to-month. Cancel anytime. Inaugural Drop: Monday, Feb 16, 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
