import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Plain-text versions of the answers below, used for FAQPage structured data.
// Keep in sync with the `faqs` array's JSX `answer` content.
const faqSchemaText = [
  "Your subscription provides continuous, unlimited access to your Outbound Inventory. It's a fixed-cost logistics utility designed to protect your LTV/CAC ratio. The Drop (Weekly Inventory Drops): Weekly delivery of 2–4 (Growth Core: Standard Batch, Monday at 2 PM EST) or 5–8 (Enterprise Scale: Priority access to Top 10% Elite Batch, Monday at 9 AM EST) Outbound Funding Specialists. The Tape: Mandatory 90–120s video auditions (\"The Tape Don't Lie\") assessed against our Core 5: Revenue Resilience (30%), Communication Fluency & Pacing (20%), Executive Presence & Authority (20%), Incentive Alignment (20%), Operational Readiness (10%). Unlimited Hires: Hire as many reps as you need with $0 placement fees. Billing: Month-to-month. Cancel anytime.",
  "No. We are a Logistics Utility for the Virtual MCA Floor. Recruiters charge $5K–$20K per hire, a variable cost that spikes your CAC and destroys unit economics on turnover. Our model delivers an unlimited, continuous supply of pre-vetted remote inventory starting at $1,000/mo. Your talent supply cost becomes predictable and marginal, safeguarding your LTV/CAC ratio.",
  "Stacking builds operational insurance. Your industry loses 50% of reps every quarter. Candidates remain on your bench for up to 30 days. After four weekly drops, your bench typically grows to 8–16 (Growth Core) or 20–32 (Enterprise Scale) Outbound Funding Specialists. When turnover hits, you draft a replacement instantly. Result: your dials never stop and your CAC stays fixed, replacement costs are marginal instead of a $5K–$20K spike.",
  "Unlimited Bench Access: Stack as many Outbound Funding Specialists on your bench as you need. Every week, we drop fresh inventory, 2–4 candidates (Growth Core) or 5–8 candidates (Enterprise Scale), directly into your portal. Your bench capacity grows consistently. 8–16 candidates on your bench after 4 weeks (Growth Core) gives you operational insurance: when a rep quits, you draft a replacement instantly. No placement fees. No per-head costs. No downtime. The subscription provides continuous access to inventory; you control hiring decisions and deployment.",
  "We vet for sustained dial capacity and real-time objection handling under rejection pressure, not resume fluff. In high-velocity MCA outbound, dial-pressure resilience and objection-handling speed are the primary assets, industry knowledge is secondary. Each candidate records a 90–120s audition and is scored on our 5-Point Scorecard: Revenue Resilience (30%), Communication Fluency & Pacing (20%), Executive Presence & Authority (20%), Incentive Alignment (20%), Operational Readiness (10%). We prioritize thick-skinned candidates over those with finance degrees. We can teach MCA in 20 minutes, we can't teach grit.",
  "We guarantee the pipeline, not individual performance. Our value makes turnover an irrelevant financial cost. If a rep quits, you draft the next pre-vetted top performer from your bench, no fees, no downtime. That's the operational insurance we provide.",
  "Talent Scope is your Fixed-Cost MCA Talent Logistics Utility, focused on delivering Remote-Ready Outbound Funding Specialists. Final compliance remains the client's responsibility: background checks, required disclosures, and employment verification. This division of labor keeps talent costs fixed and low while preserving operational control.",
  "Outbound Funding Specialists are remote-ready. Vetted for tech-readiness, unshakeable phone presence, sustained dial capacity, and the discipline to hit 300+ dials a day from any location. The industry churns too fast to wait for the \"perfect\" candidate who knows your specific underwriting box. Hire for energy and grit, then point them at the dialer.",
  "We specialize exclusively in Merchant Cash Advance (MCA). High-turnover, high-velocity virtual sales floors that need Outbound Funding Specialists with sustained dial capacity and real-time objection handling skills.",
  "Outbound Funding Specialists need minimal industry knowledge (10%). They slay gatekeepers, handle objections under rejection pressure, and scrub leads, they don't need to explain factor rates. We can teach them what MCA is in 20 minutes. We source commission-hungry outbound specialists from high-stress, short-cycle sales environments (Debt Settlement, Solar, Insurance) who thrive under dial pressure.",
  "Yes. We specialize in remote-first reps. Every candidate is vetted for tech-readiness, unshakeable phone presence, and the discipline to hit 300+ dials a day. We source global talent with near-native English who work US hours and understand MCA products, business owner psychology, and funding urgency.",
];

const faqs = [
  {
    id: 'faq-subscription',
    question: "What does the subscription deliver?",
    answer: (
      <>
        <p className="mb-4">Your subscription provides continuous, unlimited access to your Outbound Inventory. It's a fixed-cost logistics utility designed to protect your <strong>LTV/CAC ratio</strong>.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>The Drop (Weekly Inventory Drops):</strong> Weekly delivery of <strong>2–4</strong> (Growth Core: <strong>Standard Batch</strong>, Monday @ <strong>2 PM EST</strong>) or <strong>5–8</strong> (Enterprise Scale: <strong>Priority access to Top 10% Elite Batch</strong>, Monday @ <strong>9 AM EST</strong>) Outbound Funding Specialists.</li>
          <li><strong>The Tape:</strong> Mandatory <strong>90–120s</strong> video auditions ("The Tape Don't Lie") assessed against our Core 5: Revenue Resilience (30%), Communication Fluency & Pacing (20%), Executive Presence & Authority (20%), Incentive Alignment (20%), Operational Readiness (10%).</li>
          <li><strong>Unlimited Hires:</strong> Hire as many reps as you need with <strong>$0 placement fees</strong>.</li>
          <li><strong>Billing:</strong> Month-to-month. Cancel anytime.</li>
        </ul>
      </>
    )
  },
  {
    id: 'faq-agency-difference',
    question: "Are you a recruiting agency? What is the core financial difference?",
    answer: (
      <>
        <p className="mb-3">No. We are a <strong>Logistics Utility for the Virtual MCA Floor</strong>. Recruiters charge <strong>$5K–$20K per hire</strong>—a variable cost that spikes your <strong>CAC</strong> and destroys unit economics on turnover.</p>
        <p>Our model delivers an <strong>unlimited, continuous supply</strong> of pre-vetted remote inventory starting at <strong>$1,000/mo</strong>. Your talent supply cost becomes <strong>predictable and marginal</strong>, safeguarding your <strong>LTV/CAC ratio</strong>.</p>
      </>
    )
  },
  {
    id: 'faq-stacking',
    question: "What is 'Stacking' and why is it crucial for my virtual MCA floor?",
    answer: (
      <>
        <p className="mb-3"><strong>Stacking</strong> builds operational insurance. Your industry loses 50% of reps every quarter. Candidates remain on your bench for up to <strong>30 days</strong>. After four weekly drops, your bench typically grows to <strong>8–16</strong> (Growth Core) or <strong>20–32</strong> (Enterprise Scale) Outbound Funding Specialists.</p>
        <p>When turnover hits (it will), you draft a replacement <strong>instantly</strong>. Result: <strong>your dials never stop</strong> and your <strong>CAC stays fixed</strong>—replacement costs are marginal instead of a <strong>$5K–$20K</strong> spike.</p>
      </>
    )
  },
  {
    id: 'faq-unlimited-bench',
    question: "What does Unlimited Bench Access mean?",
    answer: (
      <>
        <p className="mb-3"><strong>Unlimited Bench Access:</strong> Stack as many Outbound Funding Specialists on your bench as you need. Every week, we drop fresh inventory—<strong>2–4 candidates (Growth Core)</strong> or <strong>5–8 candidates (Enterprise Scale)</strong>—directly into your portal.</p>
        <p className="mb-3">Your bench capacity grows consistently. <strong>8–16 candidates on your bench after 4 weeks</strong> (Growth Core) gives you operational insurance: when a rep quits, you draft a replacement instantly. No placement fees. No per-head costs. No downtime.</p>
        <p>The subscription provides continuous access to inventory; you control hiring decisions and deployment.</p>
      </>
    )
  },
  {
    id: 'faq-vetting-standard',
    question: "What is the vetting standard? (The 'Tape Don't Lie' promise)",
    answer: (
      <>
        <p className="mb-3">We vet for <strong>sustained dial capacity</strong> and <strong>real-time objection handling under rejection pressure</strong>, not resume fluff. In high-velocity MCA outbound, <strong>dial-pressure resilience</strong> and <strong>objection-handling speed</strong> are the primary assets—industry knowledge is secondary.</p>
        <p className="mb-3">Each candidate records a <strong>90–120s</strong> audition and is scored on our <strong>5-Point Scorecard</strong>:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Revenue Resilience</strong> (30%) — Objection handling and pipeline protection under rejection pressure.</li>
          <li><strong>Communication Fluency & Pacing</strong> (20%) — Clear, authoritative communication on outbound calls.</li>
          <li><strong>Executive Presence & Authority</strong> (20%) — Must project confidence and control conversations.</li>
          <li><strong>Incentive Alignment</strong> (20%) — Intrinsic motivation in variable-pay, high-velocity outbound environments.</li>
          <li><strong>Operational Readiness</strong> (10%) — Immediate technical proficiency; zero ramp-up. Remote-ready.</li>
        </ul>
        <p className="mt-3">We prioritize <strong>thick-skinned</strong> candidates over those with finance degrees. We can teach MCA in 20 minutes—we can't teach grit.</p>
      </>
    )
  },
  {
    id: 'faq-performance-guarantee',
    question: "Do you guarantee a hire's performance or cover them if they quit?",
    answer: (
      <>
        <p className="mb-3">We guarantee the <strong>pipeline</strong>, not individual performance. Our value makes turnover an <strong>irrelevant financial cost</strong>.</p>
        <p>If a rep quits, you <strong>draft the next</strong> pre-vetted top performer from your bench—<strong>no fees, no downtime</strong>. That’s the <strong>operational insurance</strong> we provide.</p>
      </>
    )
  },
  {
    id: 'faq-compliance',
    question: "Who handles background checks and final employment compliance?",
    answer: (
      <>
        <p className="mb-3">Talent Scope is your <strong>Fixed-Cost MCA Talent Logistics Utility</strong>, focused on delivering Remote-Ready Outbound Funding Specialists.</p>
        <p><strong>Final compliance</strong> remains the client's responsibility: background checks, required disclosures, and employment verification. This division of labor keeps talent costs <strong>fixed & low</strong> while preserving <strong>operational control</strong>.</p>
      </>
    )
  },
  {
    id: 'faq-deploy-speed',
    question: "How fast can I deploy a rep?",
    answer: (
      <>
        <p className="mb-3"><strong>Outbound Funding Specialists:</strong> Remote-ready. Vetted for tech-readiness, unshakeable phone presence, sustained dial capacity, and the discipline to hit 300+ dials a day from any location.</p>
        <p>The industry churns too fast to wait for the "perfect" candidate who knows your specific underwriting box. <strong>Hire for energy and grit, then point them at the dialer.</strong></p>
      </>
    )
  },
  {
    id: 'faq-industries',
    question: "What industry do you serve?",
    answer: (
      <p>We specialize exclusively in <strong>Merchant Cash Advance (MCA)</strong>. High-turnover, high-velocity virtual sales floors that need Outbound Funding Specialists with sustained dial capacity and real-time objection handling skills.</p>
    )
  },
  {
    id: 'faq-industry-match',
    question: "Do candidates need MCA experience?",
    answer: (
      <>
        <p className="mb-3"><strong>Outbound Funding Specialists:</strong> Minimal industry knowledge needed (10%). They slay gatekeepers, handle objections under rejection pressure, and scrub leads—they don't need to explain factor rates. We can teach them what MCA is in 20 minutes.</p>
        <p>We source commission-hungry outbound specialists from high-stress, short-cycle sales environments (Debt Settlement, Solar, Insurance) who thrive under dial pressure.</p>
      </>
    )
  },
  {
    id: 'faq-us-based',
    question: "Are they remote? Are they US-based?",
    answer: (
      <p>Yes. We specialize in <strong>remote-first reps</strong>. Every candidate is vetted for tech-readiness, unshakeable phone presence, and the discipline to hit 300+ dials a day. We source global talent with near-native English who work <strong>US hours</strong> and understand MCA products, business owner psychology, and funding urgency.</p>
    )
  }
];

function FAQItem({ id, question, answer, isOpen, onClick }) {
  return (
    <div id={id} className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-start text-left gap-4 hover:bg-slate-50 transition-colors duration-200 px-2 -mx-2 rounded-lg"
      >
        <span className="text-lg font-semibold text-slate-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 px-2 -mx-2">
          <div className="text-slate-600 leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const hash = window.location.hash?.replace('#', '');
    if (!hash) return 0;
    const idx = faqs.findIndex((f) => f.id === hash);
    return idx >= 0 ? idx : 0;
  });

  // Auto-open based on URL hash (e.g., #faq-unlimited-bench)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleHashChange = () => {
      const hash = window.location.hash?.replace('#', '');
      if (!hash) return;
      const idx = faqs.findIndex((f) => f.id === hash);
      if (idx >= 0) setOpenIndex(idx);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq, i) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqSchemaText[i] || '',
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Questions Before You Subscribe
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            No fluff. Just answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="mailto:sales@talent-scope.com"
            className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200"
          >
            sales@talent-scope.com →
          </a>
        </div>
      </div>
    </section>
  );
}
