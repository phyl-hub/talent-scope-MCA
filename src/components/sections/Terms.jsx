import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SEO
        path="/terms"
        title="Talent Scope Terms of Service | Outbound Bench Subscription"
        description="Review the Terms of Service for Talent Scope's video-vetted Outbound Bench subscription. Includes weekly inventory drops, unlimited bench access, month-to-month billing, data handling, and liability."
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-500">
            Please read these terms carefully. They define the boundaries of our "Utility" hiring model.
          </p>
          <div className="mt-4 text-sm text-slate-400 font-medium uppercase tracking-wider">
            Effective Date: December 1, 2025
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12 text-slate-600 leading-relaxed">

          {/* Subscription Summary (Quick View) */}
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-700 mb-3">Subscription Summary</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-800">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600"></span> Weekly Inventory Drops (Mon @ 9 AM EST — Enterprise: Top 10% Elite Batch / 2 PM EST — Growth: Standard Batch)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600"></span> Unlimited Bench Access</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600"></span> Month-to-month billing</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600"></span> Cancel anytime</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600"></span> No Success Fees / No Placement Fees</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600"></span> No Placement Protection or performance guarantees</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600"></span> Pipeline access only; you hire directly</li>
            </ul>
          </section>
          
          {/* 1. Service Scope */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Scope of Service</h2>
            <p className="mb-4">
              Talent Scope Group LLC ("Talent Scope") is your **Fixed-Cost Talent Supply Partner**—a subscription-based logistics utility for outbound hiring. We deliver **Weekly Inventory Drops** featuring video-vetted **Outbound Funding Specialists** (MCA-focused and adjacent short-cycle industries), including their video auditions and resumes.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-slate-700 text-sm">
              <strong>Important Distinction:</strong> We are not a recruitment agency, headhunting firm, or employment representative. We do not represent candidates, negotiate salaries, manage employment offers, or guarantee individual hire longevity. We provide fixed-cost talent supply; final compliance, background checks, and licensing confirmation are the client's responsibility.
            </div>
          </section>

          {/* 2. Subscription & Payments */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Subscription & Fees</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flat Fee:</strong> Access to the logistics utility starts at <strong>$1,000 USD per month</strong> (Growth Core) or <strong>$1,800 USD per month</strong> (Enterprise Scale).</li>
              <li><strong>No Success Fees:</strong> We do not charge placement fees, commissions, or percentages of candidate salaries.</li>
              <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly in advance.</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time via your account portal or by emailing billing@talent-scope.com. Access continues until the end of the current billing period.</li>
              <li><strong>Unlimited Bench Access:</strong> Stack and maintain continuous access to candidates in your portal.</li>
              <li><strong>Weekly Inventory Drops:</strong> New candidates are released weekly (typically Monday @ 9 AM EST for Enterprise Scale — priority access to the <strong>Top 10% Elite Batch</strong>; 2 PM EST for Growth Core — <strong>Standard Batch</strong>).</li>
              <li><strong>Month-to-month:</strong> Cancel anytime. No long-term contracts.</li>
              <li><strong>No Placement Protection:</strong> We do not offer replacement guarantees or performance guarantees; the subscription provides pipeline access only.</li>
            </ul>
          </section>

          {/* 3. Client Responsibilities */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Your Responsibilities (The "No Headhunting" Clause)</h2>
            <p className="mb-4">
              By using our service, you acknowledge that you are the sole employer of any candidate you hire. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conducting final interviews and reference checks.</li>
              <li>Negotiating offers and employment contracts.</li>
              <li>Complying with all local labor laws and payroll requirements.</li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              Talent Scope is not liable for any employment disputes, performance issues, or "ghosting" by candidates.
            </p>
          </section>

          {/* 4. Data Usage & Privacy */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Candidate Data & Confidentiality</h2>
            <p className="mb-4">
              We grant you a limited, non-transferable license to view candidate videos and resumes for the sole purpose of internal hiring.
            </p>
            <p className="mb-4 text-red-600 font-medium">
              Strictly Prohibited:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reselling candidate data to third parties or other agencies.</li>
              <li>Publicly posting candidate video pitches (e.g., on YouTube or LinkedIn) without their express written consent.</li>
              <li>Sharing login credentials to the Talent Scope platform.</li>
            </ul>
            <p className="mt-4">
              Violation of this policy will result in immediate termination of your subscription without refund and potential legal action.
            </p>
          </section>

          {/* 5. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Disclaimer & Limitation of Liability</h2>
            <p>
              The service is provided on an "AS IS" basis. We screen candidates for energy and pitch quality, but we do not guarantee that any specific candidate will accept your offer or meet your specific performance quotas. In no event shall Talent Scope Group LLC be liable for any indirect, incidental, or consequential damages arising from your hiring decisions.
            </p>
          </section>

          {/* 6. Contact */}
          <section className="border-t border-slate-200 pt-8 mt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p>
              Talent Scope Group LLC<br />
              1309 Coffeen Avenue STE 1200<br />
              Sheridan, Wyoming 82801<br />
              United States of America<br />
              <a href="tel:+13074290181" className="text-blue-600 hover:underline">+1 (307) 429-0181</a><br />
              <a href="mailto:legal@talent-scope.com" className="text-blue-600 hover:underline">legal@talent-scope.com</a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}