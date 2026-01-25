import React, { useState } from 'react';
import { DollarSign, TrendingUp, AlertTriangle, Flame, Calculator } from 'lucide-react';

export default function ROICalculator() {
  const [leadCost, setLeadCost] = useState(75);
  const [leadsPerMonth, setLeadsPerMonth] = useState(200);
  const [closeRate, setCloseRate] = useState(18);
  const [dealValue, setDealValue] = useState(5000);

  const calculateLoss = () => {
    const potentialDeals = Math.round(leadsPerMonth * (closeRate / 100));
    const potentialRevenue = potentialDeals * dealValue;
    const leadBurn = leadsPerMonth * leadCost;
    return { potentialDeals, potentialRevenue, leadBurn };
  };

  const { potentialDeals, potentialRevenue, leadBurn } = calculateLoss();

  return (
    <section className="py-14 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-300 font-bold uppercase tracking-wider text-sm mb-3">
            <Calculator size={16} />
            MCA Revenue Calculator
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Capture <span className="text-emerald-400">scalable volume.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Empty desks destroy your funding volume. Calculate the revenue potential of a fully staffed MCA floor.
          </p>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-lg border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Cost Per Lead ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="number" 
                    value={leadCost}
                    onChange={(e) => setLeadCost(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white font-bold focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Leads/Month per Seat
                </label>
                <input 
                  type="range" 
                  min="20" 
                  max="300" 
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="text-right text-emerald-300 font-bold mt-1">{leadsPerMonth} Leads</div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Close Rate (%)
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="40" 
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="text-right text-emerald-300 font-bold mt-1">{closeRate}%</div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Avg. Deal Value ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="number" 
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white font-bold focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition duration-500"></div>
              
              <p className="text-emerald-300 font-bold mb-2 relative z-10 flex items-center justify-center gap-2">
                <TrendingUp size={16} />
                Monthly Revenue Potential
              </p>
              <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight relative z-10">
                ${potentialRevenue.toLocaleString()}
              </div>
              <p className="text-sm text-slate-500 mb-8 relative z-10">
                {potentialDeals} closed deals per month
              </p>

              <div className="space-y-3 relative z-10">
                <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Lead Investment</span>
                  <span className="text-slate-300 font-bold">${leadBurn.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                  <span className="text-slate-400">ISO Bench Subscription</span>
                  <span className="text-emerald-300 font-bold">From $1,000/mo (+ activation)</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Potential Net Profit (after $1,000/mo)</span>
                  <span className="text-emerald-300">+${(potentialRevenue - 1000).toLocaleString()}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4 relative z-10">
                Activation fee is one-time to start or re-activate access (see Terms).
              </p>

              <div className="mt-8 relative z-10">
                <a href="/schedule" className="inline-flex items-center justify-center gap-2 w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-3 rounded-xl transition shadow-lg shadow-emerald-500/10">
                  Apply for Beta Access <TrendingUp size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>

        <p className="text-center text-slate-400 mt-8 text-sm">
          <strong className="text-white">Every empty seat is lost dials.</strong> Draft Outbound Funding Specialists today. They're dialing tomorrow.
        </p>
      </div>
    </section>
  );
}
