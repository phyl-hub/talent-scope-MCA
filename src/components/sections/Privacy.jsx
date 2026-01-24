import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../SEO';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <SEO
        path="/privacy"
        title="ISO Bench Privacy Policy | Candidate & Client Data Protection"
        description="Learn how ISO Bench collects, uses, and protects candidate videos, resumes, and client data for the video-vetted Outbound Bench subscription."
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="mb-10 border-b border-slate-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-300">
            How we collect, use, and protect your data in our talent logistics utility.
          </p>
          <div className="mt-4 text-sm text-slate-500 font-medium uppercase tracking-wider">
            Effective Date: January 8, 2026 | Last Updated: January 9, 2026
          </div>
          <p className="mt-4 text-sm text-emerald-300 font-bold">
            This Privacy Policy is legally binding. By using our service or submitting candidate data, you consent to these practices.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-12 text-slate-300 leading-relaxed">
          
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">1. Introduction & Scope</h2>
            <p className="mb-4">
              ISO Bench is a brand name operated by Talent Scope Group LLC ("ISO Bench," "we," "us," "our"). We are a <strong>Fixed-Cost Talent Supply Partner</strong>—a subscription-based fixed-cost talent supply service operating under Wyoming law. This Privacy Policy governs how we collect, use, disclose, and protect personal data and biometric information from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Candidates who submit video applications and resumes</li>
              <li>Clients (subscribers) who access our platform</li>
              <li>Website visitors and users</li>
            </ul>
            <p>
              This policy complies with applicable privacy laws including GDPR (EU), CCPA (California), PIPEDA (Canada), and federal US privacy standards. By submitting data to ISO Bench, you consent to the collection and use of information as described in this policy.
            </p>
          </section>

          {/* 2. Categories of Data Collected */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">2. Data We Collect & Legal Basis</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-100 mb-2">2.1 Candidate Personal Data</h3>
                <p className="text-sm mb-3"><strong>Legally Collected From:</strong> Submitted applications, Loom recordings, and resume uploads.</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Full name, email address, phone number</li>
                  <li>LinkedIn profile URL, GitHub, or portfolio links</li>
                  <li>Current and past employment history</li>
                  <li>Education and professional certifications</li>
                  <li>Salary history/expectations (if provided)</li>
                  <li>Geographic location and availability status</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-100 mb-2">2.2 Biometric & Video Data (Special Category)</h3>
                <p className="text-sm mb-3"><strong>CRITICAL DISCLOSURE:</strong> Your video submission contains biometric information under GDPR, CCPA, and state privacy laws.</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Video Recording:</strong> Your facial features, body language, and appearance</li>
                  <li><strong>Voice Recording:</strong> Your voice characteristics and speech patterns</li>
                  <li><strong>Duration:</strong> Typically 60–180 seconds per submission</li>
                  <li><strong>Storage Location:</strong> Loom Cloud (third-party), Google Drive (encrypted), and our backend systems</li>
                </ul>
                <p className="text-sm mt-3 bg-yellow-50 p-3 rounded border border-yellow-200">
                  <strong>Your Explicit Consent:</strong> By submitting a video, you explicitly consent to the collection, storage, and processing of your biometric data for employment evaluation purposes.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-100 mb-2">2.3 AI-Derived Data</h3>
                <p className="text-sm mb-3">We process your video using Large Language Models (LLMs) to generate:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Automated video transcriptions (using OpenAI Whisper or equivalent)</li>
                  <li>Energy/Communication scores (1–10 scale)</li>
                  <li>Sales presence assessment</li>
                  <li>Objection handling analysis</li>
                  <li>Linguistic sentiment analysis</li>
                  <li>Hiring compatibility scores</li>
                </ul>
                <p className="text-sm mt-3 text-slate-500">
                  <strong>Note:</strong> AI scoring is automated but reviewed by human screeners before inclusion in active ISO Bench inventory.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-100 mb-2">2.4 Website & Usage Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>IP address, browser type, operating system</li>
                  <li>Pages visited, time spent on site</li>
                  <li>Referral source (Google Analytics)</li>
                  <li>Cookies (see Section 8)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Data */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">3. Use of Data & Legal Basis</h2>
            <p className="mb-4">We process data under the following legal bases:</p>
            
            <div className="space-y-4 text-sm">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-slate-100">For Candidates:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Contract Performance:</strong> Process your application and coordinate with employers</li>
                  <li><strong>Legitimate Interest:</strong> Evaluate communication skills, energy, and sales fit</li>
                  <li><strong>Explicit Consent:</strong> Share your profile with potential employers (video + resume)</li>
                  <li><strong>Service Improvement:</strong> Train AI models on anonymized hiring outcomes</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-slate-100">For Clients (Subscribers):</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Deliver the weekly candidate pipeline (6–8 or 11–15 profiles)</li>
                  <li>Process subscription payments</li>
                  <li>Send account notifications and service updates</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-slate-100">For All Users:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Website analytics and performance optimization</li>
                  <li>Fraud prevention and security</li>
                  <li>Legal compliance (GDPR, CCPA, employment law)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Data Sharing & Third Parties */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">4. Data Sharing & Third-Party Processors</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-100 mb-2">4.1 Candidates: Shared With Employers (Subscribers)</h3>
                <p className="text-sm mb-3">
                  By submitting a video and resume, you explicitly authorize ISO Bench (operated by Talent Scope Group LLC) to share your profile with our paid subscribers. This is the core function of our service.
                </p>
                <p className="text-sm mb-3">
                  <strong>What Employers See:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Your name and contact information</li>
                  <li>Your Loom recording (hosted link)</li>
                  <li>Your resume (PDF)</li>
                  <li>AI-generated energy/communication score</li>
                  <li>Brief summary of qualifications</li>
                  <li>Availability status</li>
                </ul>
                <p className="text-sm mt-3 text-red-600 font-bold">
                  IMPORTANT: Once shared with an employer, we cannot retroactively delete your video or data from their systems.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-100 mb-2">4.2 Data Processors & Service Providers</h3>
                <p className="text-sm mb-3">We use the following third-party services (Data Processors under GDPR Article 28):</p>
                
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-300">
                      <th className="text-left p-2 font-bold">Service</th>
                      <th className="text-left p-2 font-bold">Purpose</th>
                      <th className="text-left p-2 font-bold">Data Processed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-2"><strong>Google Forms/Drive</strong></td>
                      <td className="p-2">Application collection & storage</td>
                      <td className="p-2">Resume, name, email</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-2"><strong>Loom</strong></td>
                      <td className="p-2">Video hosting & embedding</td>
                      <td className="p-2">Video, voice, biometric data</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-2"><strong>OpenAI / Anthropic</strong></td>
                      <td className="p-2">Video transcription & scoring</td>
                      <td className="p-2">Audio transcripts, AI scores</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-2"><strong>Notion</strong></td>
                      <td className="p-2">Employer dashboard</td>
                      <td className="p-2">Candidate profiles, scores</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-2"><strong>Stripe</strong></td>
                      <td className="p-2">Payment processing</td>
                      <td className="p-2">Client payment info (PCI-DSS)</td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-sm mt-4 bg-blue-50 p-3 rounded">
                  <strong>International Data Transfers:</strong> Some processors are located outside the EU/US. Talent Scope Group LLC uses Standard Contractual Clauses (SCCs) and Data Processing Agreements (DPAs) to support GDPR compliance.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-100 mb-2">4.3 No Sale of Data</h3>
                <p className="text-sm">
                  Talent Scope Group LLC does NOT sell, broker, or monetize candidate data independently. Your data is shared only with employers as part of our pipeline service.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Data Retention & Deletion */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">5. Data Retention & Deletion Rights</h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-bold text-slate-100 mb-2">5.1 Retention Schedule</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Active Circulation (Candidates in Pipeline):</strong> 12 months from submission. After 12 months, profiles are de-listed from active ISO Bench inventory.</li>
                  <li><strong>Video & Resume Storage:</strong> Retained for 24 months to support employer reference inquiries.</li>
                  <li><strong>Anonymized Data (AI Models):</strong> Retained indefinitely for training and performance analysis. We strip personally identifiable information (name, email, phone) but retain linguistic and outcome data.</li>
                  <li><strong>Client Payment Records:</strong> Retained for 7 years per IRS & state tax requirements.</li>
                  <li><strong>Website Analytics:</strong> Retained for 26 months (Google Analytics default).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-100 mb-2">5.2 Right to Deletion (Right to be Forgotten)</h3>
                <p className="mb-2">
                  You may request deletion of your personal data at any time by emailing legal@isobench.com. We will:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Delete your profile from active ISO Bench inventory within 5 business days</li>
                  <li>Delete your resume, contact info, and video links from our systems within 30 days</li>
                  <li>Request deletion from Loom Cloud (third-party) — note: Loom's retention may differ</li>
                </ul>
                <p className="text-red-600 font-bold">
                  LIMITATION: We cannot delete data that has already been downloaded by an employer or is stored in their systems.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-100 mb-2">5.3 Right to Data Portability</h3>
                <p>
                  You may request a machine-readable copy of your personal data in CSV or JSON format. Request via legal@isobench.com.
                </p>
              </div>
            </div>
          </section>

          {/* 6. AI Processing & Automated Decisions */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">6. Automated Decision-Making & AI Transparency</h2>
            
            <div className="space-y-4 text-sm">
              <p>
                Under GDPR Article 22, we disclose that we use automated processing (LLM-based AI) to evaluate candidates. However, a human reviews all scores before your profile is included in active ISO Bench inventory.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                <p className="font-bold text-slate-100 mb-2">Your Rights Regarding AI Decisions:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Right to know the basis of your score (you can request a detailed scoring explanation)</li>
                  <li>Right to human review if you believe the AI assessment was unfair</li>
                  <li>Right to object to algorithmic processing (request will be manually reviewed)</li>
                </ul>
              </div>

              <p>
                <strong>How to Request:</strong> Email legal@isobench.com with your name and original submission date. We will respond within 30 days with details about your AI scores and the ability to appeal.
              </p>
            </div>
          </section>

          {/* 7. Privacy by Jurisdiction */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">7. Privacy Rights by Jurisdiction</h2>
            
            <div className="space-y-4 text-sm">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-slate-100">🇪🇺 GDPR (EU & UK)</p>
                <p className="mt-2">You have additional rights including: right to access, rectification, erasure, restriction, portability, and objection to processing. Contact: legal@isobench.com</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-slate-100">🇺🇸 CCPA (California)</p>
                <p className="mt-2">California residents have the right to know, delete, opt-out, and correct personal information. Request via legal@isobench.com with valid ID verification.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-slate-100">🇨🇦 PIPEDA (Canada)</p>
                <p className="mt-2">You have the right to access, correct, and request deletion of personal information. Request via legal@isobench.com</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-slate-100">🗽 Other US States</p>
                <p className="mt-2">Talent Scope Group LLC extends GDPR/CCPA-equivalent rights to all users regardless of location.</p>
              </div>
            </div>
          </section>

          {/* 8. Cookies & Tracking */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">8. Cookies, Tracking & Analytics</h2>
            
            <div className="space-y-3 text-sm">
              <p>
                <strong>Google Analytics:</strong> We use Google Analytics 4 to track website usage. This sets cookies to understand visitor behavior. You can opt-out via the Google Analytics opt-out browser extension.
              </p>
              <p>
                <strong>Loom Tracking:</strong> Loom may track who views your recording (analytics). This is controlled by Loom's privacy policy.
              </p>
              <p className="bg-blue-50 p-3 rounded">
                <strong>Cookie Consent:</strong> By continuing to use our website, you consent to cookie usage. We do not use cookies for targeted advertising.
              </p>
            </div>
          </section>

          {/* 9. Security & Data Protection */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">9. Data Security Measures</h2>
            
            <div className="space-y-3 text-sm">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption in Transit:</strong> All data transmitted via HTTPS/TLS 1.2 or higher</li>
                <li><strong>Encryption at Rest:</strong> Google Drive (AES-256), Loom Cloud (industry-standard), backend database (encrypted)</li>
                <li><strong>Access Controls:</strong> Role-based access (only authorized staff can access candidate data)</li>
                <li><strong>Breach Notification:</strong> In the event of a data breach, we will notify affected individuals within 72 hours per GDPR</li>
              </ul>
              <p className="mt-4 text-red-600 font-bold">
                LIMITATION: No system is 100% secure. Talent Scope Group LLC is not liable for unauthorized access or data breaches due to third-party negligence.
              </p>
            </div>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">10. Children's Privacy</h2>
            <p className="text-sm">
              Talent Scope Group LLC does not knowingly collect data from individuals under 18 years of age. If we discover that a minor has submitted an application, we will delete their data immediately. Candidates must be 18+ to apply.
            </p>
          </section>

          {/* 11. Changes to Privacy Policy */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-sm">
              Talent Scope Group LLC may update this Privacy Policy at any time. We will notify you of material changes via email or by updating the "Last Updated" date. Continued use of our service constitutes acceptance of updated terms.
            </p>
          </section>

          {/* 12. Contact & Data Rights Requests */}
          <section className="border-t border-slate-200 pt-8 mt-8">
            <h2 className="text-xl font-bold text-slate-100 mb-4">12. Contact Information & Data Subject Rights</h2>
            <p className="text-sm mb-4">
              For privacy-related inquiries, data access requests, deletion requests, or complaints:
            </p>
            <div className="bg-slate-50 p-6 rounded border border-slate-200">
              <p className="font-semibold text-slate-100">Talent Scope Group LLC (d/b/a ISO Bench)</p>
              <p className="text-sm text-slate-700 mt-2">1309 Coffeen Avenue STE 1200</p>
              <p className="text-sm text-slate-700">Sheridan, Wyoming 82801</p>
              <p className="text-sm text-slate-700 mt-3">
                <a href="mailto:legal@isobench.com" className="text-blue-600 hover:text-blue-800">legal@isobench.com</a>
              </p>
              <p className="text-sm text-slate-600 mt-4 italic">
                Response time: 30 days for all data requests per GDPR/CCPA standards.
              </p>
            </div>

            <p className="text-sm mt-6">
              <strong>EU Data Protection Authority:</strong> If you believe Talent Scope Group LLC (d/b/a ISO Bench) has violated your privacy rights, you may lodge a complaint with your local Data Protection Authority (DPA).
            </p>
          </section>

          {/* Acknowledgment */}
          <section className="border-t border-slate-200 pt-8 mt-8 bg-slate-50 p-6 rounded-lg">
            <p className="text-sm text-slate-700">
              <strong>By submitting your candidate application or using our service, you acknowledge:</strong> (1) You have read this Privacy Policy; (2) You consent to the collection and processing of your biometric data (video/voice) for employment evaluation; (3) You understand your data will be shared with potential employers; (4) You understand you cannot retroactively delete data already provided to employers; (5) You accept our data retention and deletion policies.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}