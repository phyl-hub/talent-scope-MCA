import React from 'react';
import { Play, CheckCircle2, ArrowRight, ShieldCheck, Users, Zap, LayoutDashboard, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ========== NAVBAR ========== */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">T</div>
            <span className="text-xl font-bold tracking-tight">Talent Scope</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            <a href="#how" className="hover:text-blue-600 transition">How it Works</a>
            <a href="#demo" className="hover:text-blue-600 transition">The Menu</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          </div>

          <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-semibold transition shadow-lg shadow-slate-900/10 text-sm">
            Start Hiring
          </button>
        </div>
      </nav>

      <main>
        {/* ========== HERO SECTION (Recruitment-Bot Style) ========== */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Value Prop */}
              <div className="space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  Accepting New Founders
                </div>

                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Hire a Verified SDR. <br />
                  <span className="text-blue-600">By Monday.</span>
                </h1>

                <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                  Stop reading resumes. We source, vet, and video-interview top talent. You get a curated weekly menu of candidates ready to close.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 flex items-center justify-center gap-2">
                    Get This Week's Menu
                    <ArrowRight size={20} />
                  </button>
                  <div className="flex items-center gap-4 px-4 py-2">
                    <div className="flex -space-x-3">
                      <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-white" alt="Founder" />
                      <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-white" alt="Founder" />
                      <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-white" alt="Founder" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">Trusted by 100+ Founders</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4 text-sm font-medium text-slate-500">
                  <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-600" /> No Placement Fees</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-600" /> Cancel Anytime</span>
                </div>
              </div>

              {/* Right: The Visual (Clean UI Mockup) */}
              <div className="relative">
                {/* Decorative blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                
                <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 rotate-1 hover:rotate-0 transition duration-500">
                  {/* Mock Window Header */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      5 Verified Matches
                    </div>
                  </div>

                  {/* Candidate List */}
                  <div className="space-y-4">
                    <CandidateRow name="Sarah Miller" role="Ent. SDR @ Oracle" score={9.4} />
                    <CandidateRow name="Anon #001" score={9.1} />
                    <CandidateRow name="Elena Rodriguez" role="BDR Team Lead" score={8.8} />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -left-8 bottom-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <Play size={20} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Verification</p>
                      <p className="text-sm font-bold text-slate-900">Video Included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== COMPARISON (Spark Hire Style - Clean & Logical) ========== */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Why Founders are Switching</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Old Way */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm opacity-70">
                <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2">
                  <Clock size={24} /> Traditional Agency
                </h3>
                <ul className="space-y-4 text-slate-500">
                  <li className="flex items-center gap-3"><span className="text-red-400">×</span> Expensive (20% of Salary)</li>
                  <li className="flex items-center gap-3"><span className="text-red-400">×</span> 4-6 weeks to hire</li>
                  <li className="flex items-center gap-3"><span className="text-red-400">×</span> Resume spam, no vetting</li>
                  <li className="flex items-center gap-3"><span className="text-red-400">×</span> "Salesy" recruiters</li>
                </ul>
              </div>

              {/* New Way */}
              <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl shadow-blue-900/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                  <Zap size={24} /> Talent Scope
                </h3>
                <ul className="space-y-4 text-slate-900 font-medium">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20} /> Flat $1,000/month</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20} /> Candidates every Monday</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20} /> Video-Verified Quality</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20} /> Pause/Cancel Anytime</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== HOW IT WORKS (Willo Style - Minimalist) ========== */}
        <section className="py-24 bg-white" id="how">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-20 text-slate-900">
              Your New Hiring Engine.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <Step 
                num="01" 
                title="We Source" 
                desc="Our algorithms scan LinkedIn, Social, and Communities for high-intent SDR talent."
              />
              <Step 
                num="02" 
                title="We Video-Vet" 
                desc="Candidates must submit a 60-second video pitch. We use AI to score energy and clarity."
              />
              <Step 
                num="03" 
                title="You Interview" 
                desc="You receive a curated menu of the Top 5 candidates every Monday. Click to book."
              />
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-bold text-slate-900">Talent Scope</p>
          <p className="text-slate-500 text-sm">© 2024. Built for SaaS Founders.</p>
        </div>
      </footer>
    </div>
  );
}

// ========== SUB-COMPONENTS ==========

function CandidateRow({ name, role, score }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold group-hover:bg-blue-200 group-hover:text-blue-700 transition">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">
          <Zap size={12} fill="currentColor" /> {score}
        </div>
      </div>
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition duration-300 shadow-sm">
        {num}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">{desc}</p>
    </div>
  );
}

export default App;