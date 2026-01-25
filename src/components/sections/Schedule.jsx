import React, { useEffect } from 'react';
import { Calendar, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Schedule() {
  useEffect(() => {
    // Load GHL booking widget script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="min-h-screen bg-slate-950">
      {/* Header - Full Width */}
      <div className="bg-gradient-to-r from-slate-950 to-slate-900 py-12 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-emerald-300 bg-emerald-500/10 px-4 py-2 rounded-full mb-5 border border-emerald-500/20">
            <AlertTriangle className="w-4 h-4" />
            Stop Burning CAC. Capture Your MCA Bench.
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-100 mb-5">
            Apply for the Feb 16 Beta. <span className="text-emerald-400">5 Partner Spots.</span>
          </h1>
          <p className="text-2xl text-slate-300 mb-4">
            <strong>15 minutes.</strong> We walk you through the inaugural batch. You help us calibrate the filter. You get priority access + waived activation.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl">
            <strong>Strategic Density:</strong> Concentrating in NY/Melville and South Florida corridors to meet local floor standards. Inaugural Drop: Monday, Feb 16, 2026.
          </p>
        </div>
      </div>

      {/* Benefits Section - Full Width */}
      <div className="bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Calendar className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-100 mb-2">15-Minute Beta Briefing</h3>
                <p className="text-slate-300">Learn how the Feb 16 batch is being curated. No sales pitch—just an operator walkthrough.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-100 mb-2">Watch the Tape</h3>
                <p className="text-slate-300">90-120 sec video auditions. Verify dial-pressure resilience and objection-handling speed.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-100 mb-2">Operationally Ready</h3>
                <p className="text-slate-300">Vetted for tech readiness and the discipline to hit 300+ dials/day inside your CRM.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GHL Booking Widget - Full Width */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-900 py-12">
        <div className="w-full px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/Philipp-Hoffschroer.jpg"
                alt="Philipp Hoffschroer, Founder of ISO Bench"
                className="w-14 h-14 rounded-full object-cover border border-slate-800"
                loading="lazy"
              />
              <div className="leading-tight">
                <div className="text-slate-100 font-bold">Philipp Hoffschroer</div>
                <div className="text-slate-400 text-sm">Founder, ISO Bench</div>
                <div className="text-slate-400 text-sm">You’ll speak directly with me on the call.</div>
              </div>
            </div>
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/rI9xeSjenMoAmFFBcYNa" 
              style={{
                width: '100%',
                border: 'none',
                overflow: 'hidden',
                minHeight: '700px',
                borderRadius: '24px'
              }}
              scrolling="no" 
              id="rI9xeSjenMoAmFFBcYNa_1765211754343"
              title="See This Week's Bench"
            />
          </div>
        </div>
      </div>

      {/* Fallback CTA */}
      <div className="bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 mb-4">
            Can't find a time? Email <a href="mailto:hello@isobench.com" className="text-emerald-300 hover:underline font-bold">hello@isobench.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}