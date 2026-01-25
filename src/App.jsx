import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Comparison from './components/sections/Comparison';
import HowItWorks from './components/sections/HowItWorks';
import Credibility from './components/sections/Credibility';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';
import Schedule from './components/sections/Schedule';
import SEO from './components/SEO';
import ROICalculator from './components/sections/ROICalculator'; // New Import
import StickyCTA from './components/ui/StickyCTA'; // New Import

// Imports for new pages
import PrivacyPolicy from './components/sections/Privacy'; 
import Terms from './components/sections/Terms'; 

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Routes>
        <Route path="/" element={
          <>
            <SEO
              path="/"
              title="MCA Outbound Talent | NY & Miami Beta | Inaugural Drop Feb 16, 2026 | ISO Bench"
              description="Join the Feb 16 Beta: Fixed-cost MCA talent logistics for NY and Miami floors. Video-vetted Outbound Funding Specialists. $2K-$4K activation waived for 5 Beta Partners. Apply now."
              keywords="MCA recruiting, MCA outbound hiring, outbound funding specialists, NY MCA sales, Miami MCA hiring, dial-pressure resilience, objection handling, commission-only ISO reps, MCA talent pipeline, beta partner"
              type="website"
              jsonLd={{
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'ISO Bench: MCA Talent Logistics Utility',
                description:
                  'Join the Feb 16 Beta: Fixed-cost MCA talent logistics for NY and Miami floors. Video-vetted Outbound Funding Specialists. Activation fee waived for 5 Beta Partners.',
                brand: {
                  '@type': 'Brand',
                  name: 'ISO Bench',
                },
                category: 'Fixed-Cost MCA Recruiting Services',
                keywords: 'MCA recruiting, outbound funding specialists, NY Miami MCA hiring, dial-pressure resilience, beta partner',
                offers: {
                  '@type': 'Offer',
                  price: '1000',
                  priceCurrency: 'USD',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '1000',
                    priceCurrency: 'USD',
                    billingDuration: 'P1M',
                  },
                  availability: 'https://schema.org/PreOrder',
                  url: 'https://isobench.com/',
                  seller: {
                    '@type': 'Organization',
                    name: 'Talent Scope Group LLC',
                    url: 'https://isobench.com/',
                  },
                },
                audience: {
                  '@type': 'Audience',
                  audienceType: 'MCA companies hiring outbound funding specialists in NY and Miami',
                },
              }}
            />
            <Navbar />
            <main id="main-content">
              <Hero />
              <Comparison />
              <HowItWorks />
              <Credibility />
              <ROICalculator />
              <Pricing />
              <FAQ />
            </main>
            <Footer />
            <StickyCTA />
          </>
        } />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* 2. ADD THIS ROUTE */}
        <Route path="/terms" element={<Terms />} />

        <Route
          path="/schedule"
          element={
            <>
              <SEO
                path="/schedule"
                title="Apply for Feb 16 Beta | MCA Outbound Specialists | NY & Miami | ISO Bench"
                description="15 minutes. Apply for the Feb 16 Beta. 5 partner spots available. $2K-$4K activation waived + first month free. Strategic Density launch for NY and Miami MCA floors."
                keywords="MCA outbound demo, MCA setter demo, MCA sales bench, vetted MCA talent, MCA recruiting, merchant cash advance staffing, outbound funding specialist, NY Miami beta"
              />
              <Navbar />
              <main id="main-content">
                <Schedule />
              </main>
              <Footer />
            </>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;