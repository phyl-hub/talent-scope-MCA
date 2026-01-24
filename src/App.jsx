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
              title="Video-Vetted MCA Outbound Talent | Weekly Drops | From $1,000/mo | ISO Bench"
              description="Replace $5K-$20K placement fees with fixed-cost MCA outbound hiring. Weekly drops of video-vetted Outbound Funding Specialists. Sustained dial capacity. Zero placement fees."
              keywords="MCA outbound hiring, outbound funding specialist, merchant cash advance recruiting, MCA talent sourcing, fixed-cost MCA recruiting, weekly candidate drops, video vetted sales reps, dial-pressure resilience"
              type="website"
              jsonLd={{
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'ISO Bench: Video-Vetted MCA Outbound Bench',
                description:
                  'Replace $5K-$20K placement fees with fixed-cost MCA outbound hiring. Video-vetted Outbound Funding Specialists for remote, hybrid, or in-office teams. 90-120 second video auditions verify dial-pressure resilience. Unlimited hires. Zero placement fees.',
                brand: {
                  '@type': 'Brand',
                  name: 'ISO Bench',
                },
                category: 'Fixed-Cost MCA Recruiting Services',
                keywords: 'MCA outbound hiring, outbound funding specialist, merchant cash advance recruiting, video auditions, dial-pressure resilience, weekly drops',
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
                  availability: 'https://schema.org/InStock',
                  url: 'https://isobench.com/',
                  seller: {
                    '@type': 'Organization',
                    name: 'Talent Scope Group LLC',
                    url: 'https://isobench.com/',
                  },
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'United States',
                },
                audience: {
                  '@type': 'Audience',
                  audienceType: 'MCA companies hiring outbound funding specialists',
                },
              }}
            />
            <Navbar />
            <main>
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
                title="See This Week's MCA Bench | Watch The Tape | ISO Bench"
                description="15 minutes. Watch video auditions from Outbound Funding Specialists. Verify dial-pressure resilience and objection handling. Draft the best. Hire faster."
                keywords="MCA outbound demo, MCA setter demo, MCA sales bench, vetted MCA talent, MCA recruiting, merchant cash advance staffing, outbound funding specialist, video auditions"
              />
              <Navbar />
              <main>
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