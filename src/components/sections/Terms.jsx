import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <SEO
        path="/terms"
        title="ISO Bench Terms of Service | Outbound Bench Subscription"
        description="Review the Terms of Service for ISO Bench's video-vetted Outbound Bench subscription. Includes activation fees, monthly subscription terms, stacking rules, non-circumvention, data handling, and liability."
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="mb-10 border-b border-slate-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-300">
            Please read these terms carefully. They define the boundaries of our "Utility" hiring model.
          </p>
          <div className="mt-4 text-sm text-slate-500 font-medium uppercase tracking-wider">
            Effective Date: January 8, 2026
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12 text-slate-300 leading-relaxed">

          {/* Subscription Summary (Quick View) */}
          <section className="bg-slate-900/40 border border-emerald-500/20 rounded-xl p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">Subscription Summary</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-200">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Weekly Inventory Drops (Mon @ 9 AM EST — Enterprise Scale / 2 PM EST — Growth Core)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Bench Access via Stacking (20 stacks — Growth Core / 50 stacks — Enterprise Scale)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Month-to-month billing</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Cancel anytime</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> No Success Fees / No Placement Fees</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> No Placement Protection or performance guarantees</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Pipeline access only; you hire directly</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Activation Fee applies to start or re-activate access</li>
            </ul>
          </section>

          {/* 1. The Service & Definitions */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">1. The Service & Definitions</h2>
            <p className="mb-4">
              ISO Bench is a brand name operated by Talent Scope Group LLC ("ISO Bench," "we," "us," "our"). ISO Bench is a <strong>Talent Logistics Utility</strong> providing access to a vetted inventory of independent Outbound Funding Specialists ("Candidates"). We deliver <strong>Weekly Inventory Drops</strong> featuring video auditions ("The Tape") and other candidate-provided vetting data.
            </p>
            <div className="bg-slate-900/50 border-l-4 border-emerald-400 p-4 text-slate-200 text-sm mb-6">
              <strong>Important Distinction:</strong> We are not a recruitment agency, headhunting firm, PEO, or employment representative. We do not represent Candidates, negotiate salaries, manage employment offers, or guarantee individual hire longevity. We provide access to a supply chain; final compliance, background checks, and licensing confirmation are the Client's responsibility.
            </div>

            <div className="space-y-3">
              <p><strong>1.1 The Platform:</strong> ISO Bench (operated by Talent Scope Group LLC) is a Talent Logistics Utility providing access to a vetted inventory of independent Outbound Funding Specialists ("Candidates").</p>
              <p><strong>1.2 The Client:</strong> Refers to the subscribing entity, including all parent companies, subsidiaries, branch offices, and common-ownership affiliates.</p>
              <p><strong>1.3 Introduction:</strong> An "Introduction" is legally established the moment a Client performs a "Stack" action on the Platform, thereby unlocking Candidate contact information, video auditions ("The Tape"), or vetting data.</p>
              <p><strong>1.4 The Bench:</strong> The curated pool of Candidates made available via "Weekly Drops."</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3">Additional Definitions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Drop:</strong> The scheduled release of new candidate inventory into the ISO Bench portal for a given plan.</li>
                <li><strong>The Tape:</strong> A Candidate’s short video audition made available in the portal.</li>
                <li><strong>Stack / Stacking:</strong> The action of claiming a Candidate into your company’s bench in the portal. Stacking is required to unlock Candidate Data (as defined below).</li>
                <li><strong>Candidate Data:</strong> Contact and profile details unlocked after stacking (which may include name, email, phone, any optional resume or LinkedIn profile provided by the Candidate, and other Candidate-provided preference fields such as location/time zone, remote/hybrid/in-office preference, relocation willingness, and compensation/engagement preferences).</li>
                <li><strong>Elite:</strong> A label used in the portal for Candidates with <strong>Score ≥ 8.5</strong> under ISO Bench’s internal scoring. Elite access is <strong>Enterprise Scale only</strong> and is not available on Growth Core.</li>
                <li><strong>Rule of 5:</strong> A Candidate may be stacked by up to five (5) distinct Client companies; once the limit is reached the Candidate may be removed from new stacking availability.</li>
              </ul>
            </div>
          </section>

          {/* 2. Fees, Activation, and Payment Terms */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">2. Fees, Activation, and Payment Terms</h2>

            <div className="space-y-3">
              <p>
                <strong>2.1 Bench Activation Fee:</strong> Access to the ISO Bench platform requires a one-time, non-refundable Bench Activation Fee (the "Activation Fee"). This fee covers the administrative costs of system integration, account provisioning, and the initial licensing of proprietary vetting data.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Growth Core Tier:</strong> $2,000.00 USD</li>
                <li><strong>Enterprise Scale Tier:</strong> $4,000.00 USD</li>
              </ul>
              <p>
                The Activation Fee is due and payable in full upon execution of the initial subscription and is separate from the recurring Monthly Subscription Fee.
              </p>

              <p>
                <strong>2.2 Monthly Subscription Fee:</strong> The Client shall pay a recurring monthly fee based on their selected tier (<strong>$1,000 USD</strong> for Growth Core / <strong>$1,800 USD</strong> for Enterprise Scale) to maintain continuous access to "The Drop" and their "Stacked" inventory.
              </p>
              <p className="text-sm text-slate-400">
                For purposes of these Terms, an <strong>"Active Subscription"</strong> means a subscription that is current and paid, not cancelled, and not suspended for non-payment or other breach.
              </p>
              <p>
                <strong>2.3 Lapsed Access & Re-Activation:</strong> The Activation Fee provides access only for the duration of a continuous, active subscription.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Immediate Suspension:</strong> Upon non-payment or cancellation, Platform access and Stack visibility are suspended immediately.</li>
                <li><strong>The 30-Day Rule:</strong> If the account remains inactive for thirty (30) days, all Stacked data is permanently forfeited.</li>
                <li><strong>Re-Activation Requirement:</strong> To re-establish access following thirty (30) days of inactivity, the Client must pay a new Activation Fee at the then-current rate.</li>
                <li><strong>Survival of Restrictions:</strong> The Restricted Engagement Period (Section 3) remains in full effect for all Candidates introduced prior to suspension, deactivation, or forfeiture.</li>
              </ul>
              <p>
                <strong>2.4 Non-Refundability:</strong> All fees, including the Activation Fee and recurring Subscription Fees, are non-refundable. Clients acknowledge that value is delivered upon the granting of access to the proprietary Candidate Tape and Candidate Data.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3">Operational Subscription Notes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Placement Fees:</strong> While a subscription is Active, the Client may hire unlimited Candidates from their Stacked inventory with $0 per-hire commissions.</li>
                <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly in advance.</li>
                <li><strong>Cancellation:</strong> The Client may cancel at any time via the account portal or by emailing billing@isobench.com. Access continues until the end of the current billing period.</li>
                <li><strong>Weekly Inventory Drops:</strong> New Candidates are released weekly (typically Monday @ 9 AM EST for Enterprise Scale; 2 PM EST for Growth Core). Inventory size and composition may vary.</li>
                <li><strong>Stacking Capacity:</strong> Growth Core includes up to <strong>20</strong> stacks; Enterprise Scale includes up to <strong>50</strong> stacks.</li>
                <li><strong>Elite Access:</strong> Elite Candidates (Score <strong>≥ 8.5</strong>) are visible/unlockable on <strong>Enterprise Scale only</strong> and are not available on Growth Core.</li>
                <li><strong>No Placement Protection:</strong> We do not offer replacement guarantees or performance guarantees; the subscription provides pipeline access only.</li>
              </ul>
            </div>
          </section>

          {/* 3. Proprietary Introductions & Non-Circumvention */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">3. Proprietary Introductions & Non-Circumvention (The "Teeth")</h2>
            <div className="space-y-3">
              <p><strong>3.1 Restricted Period:</strong> The Client is prohibited from engaging, hiring, or contracting any Candidate introduced by ISO Bench for a period of twelve (12) months following the date of the initial Stack (the "Restricted Period").</p>
              <p><strong>3.2 Prior Relationship Exception:</strong> If a Client has a documented prior relationship with a Candidate, the Client must notify ISO Bench via email (legal@isobench.com) within twenty-four (24) hours of the Stack action. Failure to notify constitutes a waiver of any prior relationship claim and confirms the Introduction was proprietary to ISO Bench.</p>
              <p><strong>3.3 Buyout Fee (Liquidated Damages):</strong> If the Client engages, hires, contracts, or otherwise utilizes the services of a Candidate during the Restricted Period without an active subscription, the Client agrees to pay a Direct Placement Fee of <strong>$7,500 USD per Candidate</strong>.</p>
              <p><strong>3.4 Rationalization:</strong> The Client acknowledges that <strong>$7,500</strong> is a reasonable pre-estimate of ISO Bench's lost subscription revenue and vetting costs, and is not a penalty.</p>
              <p><strong>3.5 Survival:</strong> This Section 3 shall survive the termination or cancellation of this Agreement for the duration of the Restricted Period.</p>
            </div>
          </section>

          {/* 4. Operational Rules */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">4. Operational Rules</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>4.1 The Rule of 5:</strong> To maintain talent quality, each Candidate may be stacked by a maximum of five (5) Clients. ISO Bench reserves the right to remove Candidates from the marketplace once this limit is reached.</li>
              <li><strong>4.2 Stacking Locks:</strong> Stacked Candidates remain locked in the Client’s private portal for thirty (30) days. Stacks cannot be undone or exchanged to prevent data scraping.</li>
              <li><strong>Stack Refreshes (planned / may be offered):</strong> ISO Bench may, in its discretion, introduce limited portal controls that allow a Client to refresh a capped number of locked stacks per month. Any such feature (including eligibility, limits, and timing) is governed solely by what is displayed in the Platform and may be modified, suspended, or discontinued at any time.</li>
              <li><strong>4.3 Status Accuracy:</strong> The Client agrees to accurately update the Engagement Status (Interviewing, Hired, Passed) of all Stacked Candidates within the portal.</li>
              <li><strong>Unlocking Contact:</strong> Candidate Data is revealed only after you stack a Candidate.</li>
              <li><strong>No Inventory Guarantees:</strong> We do not guarantee any minimum number of Candidates per drop or any hiring outcomes.</li>
            </ul>
          </section>

          {/* 5. Independent Contractor Limitation */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">5. Independent Contractor Limitation</h2>
            <div className="space-y-3">
              <p><strong>5.1 No Employment Relationship:</strong> ISO Bench is not an employer, PEO, or staffing agency. Candidates are independent third parties.</p>
              <p><strong>5.2 Compliance:</strong> The Client is solely responsible for all employment compliance, 1099/W2 classification, background checks, and local labor law adherence.</p>
              <p><strong>5.3 No Performance Guarantee:</strong> ISO Bench guarantees the supply chain (delivery of vetted talent), but does not guarantee the individual performance or retention of any Candidate once hired by the Client.</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3">Client Responsibilities</h3>
              <p className="mb-4">
                By using our service, you acknowledge that you are the sole employer of any Candidate you hire. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conducting final interviews and reference checks.</li>
                <li>Negotiating offers and employment contracts.</li>
                <li>Complying with all local labor laws and payroll requirements.</li>
                <li>Determining worker classification and pay structure (e.g., W-2 vs 1099 contractor, commission-only vs base/commission) and ensuring compliance with all applicable employment, tax, and wage-and-hour laws.</li>
              </ul>
              <p className="mt-4 text-sm text-slate-400">
                Candidate preference fields (including 1099/commission preferences) are Candidate-provided signals used for matching and scoring. They are not legal advice and do not determine worker classification.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                ISO Bench is not liable for any employment disputes, performance issues, or "ghosting" by Candidates.
              </p>
            </div>
          </section>

          {/* 6. Data Privacy & Audit */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">6. Data Privacy & Audit</h2>
            <div className="space-y-3">
              <p><strong>6.1 Access Logs:</strong> Client acknowledges that all Stack actions, IP addresses, and data exports are logged and may be used as evidence in the event of a Direct Placement Fee dispute.</p>
              <p><strong>6.2 Audit Rights:</strong> ISO Bench reserves the right to verify the employment status of Stacked Candidates via public records (e.g., LinkedIn) or direct Candidate confirmation.</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3">Candidate Data & Confidentiality</h3>
              <p className="mb-4">
                We grant you a limited, non-transferable license to view Candidate profiles (including The Tape and any Candidate Data unlocked via stacking) for the sole purpose of internal hiring.
              </p>
              <p className="mb-4 text-rose-300 font-medium">
                Strictly Prohibited:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reselling Candidate data to third parties or other agencies.</li>
                <li>Publicly posting Candidate video pitches (e.g., on YouTube or LinkedIn) without the Candidate’s express written consent.</li>
                <li>Scraping, exporting, indexing, or bulk-copying any Candidate information, including Candidate Data and scoring.</li>
                <li>Sharing login credentials to the ISO Bench platform.</li>
              </ul>
              <p className="mt-4">
                Violation of this policy may result in immediate termination of your subscription without refund and potential legal action.
              </p>
            </div>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">7. Disclaimer & Limitation of Liability</h2>
            <p>
              The service is provided on an "AS IS" basis. We screen Candidates for energy and pitch quality, but we do not guarantee that any specific Candidate will accept your offer or meet your specific performance quotas. In no event shall Talent Scope Group LLC (d/b/a ISO Bench) be liable for any indirect, incidental, or consequential damages arising from your hiring decisions.
            </p>
          </section>

          {/* 8. Contact */}
          <section className="border-t border-slate-800 pt-8 mt-8">
            <h2 className="text-xl font-bold text-slate-100 mb-4">8. Contact Information</h2>
            <p>
              Talent Scope Group LLC (d/b/a ISO Bench)<br />
              1309 Coffeen Avenue STE 1200<br />
              Sheridan, Wyoming 82801<br />
              <a href="mailto:legal@isobench.com" className="text-emerald-300 hover:underline">legal@isobench.com</a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}