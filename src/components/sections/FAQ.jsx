import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const faqs = [
  {
    id: 'faq-agency-difference',
    question: "What exactly is a 'Talent Logistics' platform?",
    answer: (
      <>
        <p className="mb-3">Traditional recruiting is a <strong>search</strong>. ISO Bench is a <strong>supply chain</strong>.</p>
        <p className="mb-3">Instead of paying <strong>$5K–$20K</strong> every time you hire (variable cost that spikes your <strong>CAC</strong>), you pay a <strong>fixed monthly subscription</strong> for continuous access to video-vetted outbound talent.</p>
        <p>We treat sales talent as <strong>inventory</strong>—ready to be drafted the moment a seat opens on your floor.</p>
      </>
    )
  },
  {
    id: 'faq-industries',
    question: "What industry do you serve?",
    answer: (
      <p>We specialize exclusively in <strong>Merchant Cash Advance (MCA)</strong>. High-turnover, high-velocity sales floors that need Outbound Funding Specialists with sustained dial capacity and real-time objection handling skills.</p>
    )
  },
  {
    id: 'faq-why-ny-miami',
    question: "Why New York and Miami?",
    answer: (
      <>
        <p className="mb-3"><strong>These hubs dictate the industry's tonal standards.</strong> The MCA outbound cadence—objection handling, pitch velocity, closing pressure—is set on floors in the NY/Melville corridor and South Florida.</p>
        <p className="mb-3">We're saturating these corridors first to ensure candidates meet local floor standards before expanding nationwide.</p>
        <p>Strategic Density beats geographic sprawl. If you're running a floor in these markets, you get specialists who already speak your language.</p>
      </>
    )
  },
  {
    id: 'faq-industry-match',
    question: "Do candidates need MCA experience?",
    answer: (
      <>
        <p className="mb-3"><strong>Not necessarily.</strong> Outbound Funding Specialists can ramp into your box quickly. What you can’t teach is dial-pressure resilience and objection handling under rejection.</p>
        <p>We source commission-hungry outbound specialists from adjacent short-cycle industries (Debt Settlement, Solar, Insurance) who thrive under pressure.</p>
      </>
    )
  },
  {
    id: 'faq-subscription',
    question: "What does the subscription deliver?",
    answer: (
      <>
        <p className="mb-4">A fixed-cost subscription that gives you continuous access to inventory drops and a private bench you build via stacking.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Inaugural Drop:</strong> Monday, <strong>Feb 16, 2026</strong>. We're batching the first 100+ vetted specialists for this release.</li>
          <li><strong>Post-Launch Rhythm:</strong> After Feb 16, we move to a standard Monday 9 AM (Enterprise) / 2 PM (Growth Core) EST schedule.</li>
          <li><strong>Stacking Capacity:</strong> Growth Core can stack up to <strong>20</strong> candidates; Enterprise Scale can stack up to <strong>50</strong> candidates.</li>
          <li><strong>The Tape:</strong> Mandatory <strong>90–120s</strong> video auditions ("The Tape Don't Lie") assessed against our Core 5 scorecard.</li>
          <li><strong>Unlimited Hires:</strong> Hire as many reps as you want with <strong>$0 placement fees</strong>.</li>
          <li><strong>Billing:</strong> Month-to-month. Cancel anytime.</li>
        </ul>
      </>
    )
  },
  {
    id: 'faq-activation-fee',
    question: "What is the Bench Activation Fee?",
    answer: (
      <>
        <p className="mb-3"><strong>Bench Activation Fee</strong> is a one-time fee to secure your bench (it's a utility activation, not a per-hire service fee).</p>
        <p className="mb-3"><strong>Waived for our 5 inaugural Beta Partners—plus the first month free.</strong> Help us calibrate the filter; we'll cover your activation and first subscription.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Growth Core:</strong> $2,000 Activation (waived for Beta Partners)</li>
          <li><strong>Enterprise Scale:</strong> $4,000 Activation (waived for Beta Partners)</li>
        </ul>
        <p className="mt-3">It covers account provisioning, system setup, and licensing of proprietary vetting data so you can unlock Candidate contact info and The Tape the moment you stack.</p>
      </>
    )
  },
  {
    id: 'faq-drop',
    question: "When is the next drop?",
    answer: (
      <>
        <p className="mb-3"><strong>The inaugural batch drops Feb 16, 2026.</strong></p>
        <p className="mb-3">Following that, we move to a standard Monday rhythm:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Enterprise Scale:</strong> Monday @ <strong>9:00 AM EST</strong> (priority access)</li>
          <li><strong>Growth Core:</strong> Monday @ <strong>2:00 PM EST</strong></li>
        </ul>
        <p className="mt-3">Enterprise Scale also includes access to <strong>Elite</strong> candidates (scored <strong>≥ 8.5</strong>), which are not available on Growth Core.</p>
      </>
    )
  },
  {
    id: 'faq-placement-fees',
    question: "Are there any placement fees?",
    answer: (
      <>
        <p className="mb-3">None. Hire one rep or build a full floor—your cost remains a <strong>flat monthly subscription</strong>.</p>
        <p>We exist to keep your talent cost <strong>fixed</strong> and your <strong>CAC predictable</strong>, even through turnover.</p>
      </>
    )
  },
  {
    id: 'faq-stack-refresher',
    question: "What is the Enterprise 'Stack Refresher'?",
    answer: (
      <>
        <p className="mb-3"><strong>Coming soon:</strong> We plan to offer Enterprise customers a limited ability to <strong>refresh a capped number of locked stacks per month</strong> (target: up to 5) to maintain inventory hygiene.</p>
        <p className="text-sm text-slate-400">Availability and limits are subject to what is enabled in the portal at the time. Designed for 10+ seat floors where speed-to-dial matters and you can’t afford stale inventory.</p>
      </>
    )
  },
  {
    id: 'faq-stacking',
    question: "How does 'Stacking' work? What does it unlock?",
    answer: (
      <>
        <p className="mb-3"><strong>Stacking</strong> is how you claim a candidate into your bench. When you click “Stack to My Bench,” the candidate moves into your private portal and their contact details are revealed.</p>
        <p className="mb-3"><strong>What it unlocks:</strong> Email/phone plus any optional supplemental info the candidate provided (resume and/or LinkedIn profile).</p>
        <p className="mb-3"><strong>Plan limits:</strong> Growth Core can have up to <strong>20</strong> active stacks; Enterprise Scale can have up to <strong>50</strong> active stacks.</p>
        <p>Stacking is the operational insurance: when turnover hits, you draft a replacement fast—no new recruiter fee cycle, no downtime.</p>
      </>
    )
  },
  {
    id: 'faq-unstack',
    question: "Can I unstack a candidate if they aren't a fit?",
    answer: (
      <>
        <p className="mb-3">No. To prevent data scraping and protect the integrity of the marketplace, stacks are treated as <strong>locked for up to 30 days</strong>.</p>
        <p>The absence of optional supplemental info (resume/LinkedIn) does not entitle a client to unstack—choose your drafts based on <strong>The Tape</strong>.</p>
      </>
    )
  },
  {
    id: 'faq-rule-of-5',
    question: "What is the 'Rule of 5'?",
    answer: (
      <>
        <p className="mb-3">To protect candidates from being overwhelmed and to keep a premium experience for clients, each candidate can be stacked by a maximum of <strong>5</strong> companies.</p>
        <p>Once the 5th company stacks a candidate, they may be removed from new stacking availability in the marketplace.</p>
        <p className="mt-3">Scarcity is the point: a bench is only useful when it’s <strong>reserved</strong> and ready the moment a seat opens.</p>
      </>
    )
  },
  {
    id: 'faq-vetting-standard',
    question: "What is 'The Tape'? (The 'Tape Don't Lie' promise)",
    answer: (
      <>
        <p className="mb-3">Resumes don’t predict phone performance in high-velocity MCA outbound. <strong>The Tape</strong> does.</p>
        <p className="mb-3">Every candidate records a <strong>90–120s</strong> video audition and is scored on our <strong>5-Point Scorecard</strong>:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Revenue Resilience</strong> (30%) — Objection handling and pipeline protection under rejection pressure.</li>
          <li><strong>Communication Fluency & Pacing</strong> (20%) — Clear, authoritative communication on outbound calls.</li>
          <li><strong>Executive Presence & Authority</strong> (20%) — Must project confidence and control conversations.</li>
          <li><strong>Incentive Alignment</strong> (20%) — Intrinsic motivation in variable-pay, high-velocity outbound environments.</li>
          <li><strong>Operational Readiness</strong> (10%) — Immediate technical proficiency; zero ramp-up. Ready to start.</li>
        </ul>
        <p className="mt-3">We prioritize <strong>thick-skinned</strong> candidates over those with finance degrees. We can teach MCA in 20 minutes—we can't teach grit.</p>
      </>
    )
  },
  {
    id: 'faq-resume-linkedin',
    question: "Do I get a resume or LinkedIn profile?",
    answer: (
      <>
        <p className="mb-3"><strong>The Tape</strong> is the primary signal we optimize for because it shows live phone presence under pressure.</p>
        <p>Most candidates also provide an optional resume and/or LinkedIn profile. If provided, they appear in your portal <strong>as soon as you stack</strong> the candidate.</p>
      </>
    )
  },
  {
    id: 'faq-us-based',
    question: "Are candidates remote-ready?",
    answer: (
      <>
        <p className="mb-3">Yes. Every candidate is vetted for <strong>Operational Readiness</strong>: a quiet workspace, reliable high-speed internet, and the discipline to operate inside a CRM workflow.</p>
        <p className="mb-3">That said, our <strong>Feb 16 batch</strong> is concentrated in <strong>NY and Miami</strong> for shops that prefer hybrid or in-office presence.</p>
        <p>What matters is dial performance and operational reliability.</p>
      </>
    )
  },
  {
    id: 'faq-candidate-location-preferences',
    question: "Do you provide work-style preferences (remote / hybrid / in-office)?",
    answer: (
      <>
        <p className="mb-3">Yes. Candidate profiles include practical operating details like stated <strong>work-style preference</strong> (remote / hybrid / in-office) and an availability window.</p>
        <p>You decide what operating setup you want—ISO Bench gives you the data to hire accordingly.</p>
      </>
    )
  },
  {
    id: 'faq-1099-commission',
    question: "Do you favor candidates who want to work 1099 (contractor) and commission-only?",
    answer: (
      <>
        <p className="mb-3">Yes. In this industry, incentive alignment matters. We tend to favor candidates who explicitly prefer <strong>1099 contractor</strong> arrangements and <strong>commission-only</strong> compensation because it matches the realities of high-velocity outbound.</p>
        <p>If a candidate selects different preferences (W2, base-heavy, etc.), they can still appear in the portal—but it may <strong>reduce their score</strong> because it signals lower incentive alignment for commission-first outbound environments.</p>
      </>
    )
  },
  {
    id: 'faq-deploy-speed',
    question: "How fast can I deploy a rep?",
    answer: (
      <>
        <p className="mb-3"><strong>Fast.</strong> Once you stack a candidate, contact details are unlocked and you can move directly to interview and onboarding.</p>
        <p className="mb-3">Speed beats search. In MCA, an empty seat can cost <strong>$500–$1,000/day</strong> in lost opportunity—one month of ISO Bench often costs less than a few days of downtime.</p>
        <p>The industry churns too fast to wait for the "perfect" resume. <strong>Hire for energy and grit, then point them at the dialer.</strong></p>
      </>
    )
  },
  {
    id: 'faq-performance-guarantee',
    question: "Do you guarantee a hire's performance or cover them if they quit?",
    answer: (
      <>
        <p className="mb-3">We guarantee the <strong>pipeline</strong>, not individual performance. You control hiring, coaching, and management.</p>
        <p>If a rep quits, the point of the bench is you can <strong>draft the next</strong>—without starting a new recruiter fee cycle.</p>
      </>
    )
  },
  {
    id: 'faq-compliance',
    question: "Who handles background checks and final employment compliance?",
    answer: (
      <>
        <p className="mb-3">ISO Bench is your <strong>Fixed-Cost MCA Talent Logistics Utility</strong>, focused on delivering video-vetted Outbound Funding Specialists.</p>
        <p><strong>Final compliance</strong> remains the client's responsibility: background checks, required disclosures, and employment verification.</p>
      </>
    )
  },
  {
    id: 'faq-cancel-lapse',
    question: "What happens if I cancel or miss a payment?",
    answer: (
      <>
        <p className="mb-3"><strong>Immediate suspension:</strong> Platform access and Stack visibility are suspended immediately upon cancellation or non-payment.</p>
        <p className="mb-3"><strong>30-day churn rule:</strong> If the account remains inactive for thirty (30) days, your Stacked data is permanently forfeited.</p>
        <p className="mb-3"><strong>Re-activation:</strong> After 30 days inactive, a new Bench Activation Fee is required to re-establish access.</p>
        <p className="text-sm text-slate-400">Note: the 12-month Restricted Engagement Period still applies to Candidates introduced before cancellation.</p>
      </>
    )
  },
  {
    id: 'faq-buyout-clause',
    question: "Can I hire someone I found on ISO Bench after cancelling?",
    answer: (
      <>
        <p className="mb-3">Introductions are proprietary. If you stack a Candidate, a <strong>12-month Restricted Engagement Period</strong> begins from that Stack date.</p>
        <p className="mb-3">If you engage, hire, contract, or otherwise utilize the services of a Candidate during the Restricted Period <strong>without an active subscription</strong>, the Terms include a <strong>$7,500 USD</strong> Direct Placement Fee per Candidate (liquidated damages).</p>
        <p className="text-sm text-slate-400">If you believe you had a documented prior relationship, notify legal@isobench.com within 24 hours of stacking.</p>
      </>
    )
  }
];

function FAQItem({ id, question, answer, isOpen, onClick }) {
  return (
    <div id={id} className="border-b border-slate-800 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex justify-between items-start text-left gap-4 hover:bg-slate-900/50 transition-colors duration-200 px-2 -mx-2 rounded-lg"
      >
        <span className="text-lg font-semibold text-slate-100 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0 mt-1" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 px-2 -mx-2">
          <div className="text-slate-300 leading-relaxed">{answer}</div>
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

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-emerald-300 font-bold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-5">
            Questions Before You Subscribe
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            No fluff. Just answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-slate-900/40 rounded-2xl p-6 md:p-8 border border-slate-800">
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
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <a
            href="mailto:sales@isobench.com"
            className="text-emerald-300 font-semibold hover:text-emerald-200 transition-colors duration-200"
          >
            sales@isobench.com →
          </a>
        </div>
      </div>
    </section>
  );
}
