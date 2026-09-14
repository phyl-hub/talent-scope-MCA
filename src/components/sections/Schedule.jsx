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
    <section className="min-h-screen bg-white">
      {/* Header - Full Width */}
      <div className="bg-gradient-to-r from-red-50 to-amber-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-red-600 bg-red-100 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            Stop Burning CAC. Capture Your MCA Bench.
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            See This Week's Drop. <span className="text-amber-600">Dominate Tomorrow.</span>
          </h1>
          <p className="text-2xl text-slate-600 mb-4">
            <strong>15 minutes.</strong> We show you this week's Outbound Funding Specialists. You watch the tape. You draft the best.
          </p>
          <p className="text-lg text-slate-500 max-w-3xl">
            Growth Core gets <strong>Standard Batch</strong> access (Monday @ <strong>2 PM EST</strong>). Enterprise Scale gets priority access to the <strong>Top 10% Elite Batch</strong> (Monday @ <strong>9 AM EST</strong>).
          </p>
        </div>
      </div>

      {/* Benefits Section - Full Width */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Calendar className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">15-Minute Walkthrough</h3>
                <p className="text-slate-600">See this week's MCA bench—Outbound Funding Specialists vetted for sustained dial capacity and objection handling.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Watch the Tape</h3>
                <p className="text-slate-600">90-120 sec video auditions. Verify dial-pressure resilience and objection-handling speed.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Remote-Ready</h3>
                <p className="text-slate-600">Vetted for tech-readiness and the discipline to hit 300+ dials/day from any location.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GHL Booking Widget - Full Width */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="w-full px-6">
          <div className="max-w-6xl mx-auto">
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
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-600 mb-4">
            Can't find a time? Email <a href="mailto:hello@talent-scope.com" className="text-blue-600 hover:underline font-bold">hello@talent-scope.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}