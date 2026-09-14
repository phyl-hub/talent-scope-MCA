import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://talent-scope.com';
const defaultImage = `${siteUrl}/images/high-energy-sdr-team.jpg`;

export default function SEO({
  title = 'Remote MCA Outbound Talent | Outbound Funding Specialists | From $1,000/mo | Talent Scope',
  description = 'Replace $5K-$20K placement fees with fixed-cost MCA talent logistics. Remote-ready Outbound Funding Specialists. Weekly drops. Sustained dial capacity. Unlimited hires. Zero placement fees.',
  path = '/',
  image = defaultImage,
  type = 'website',
  keywords = 'MCA outbound hiring, outbound funding specialist, merchant cash advance recruiting, MCA sales talent, plug and play sales reps, fixed-cost MCA recruiting, dial-pressure resilience, objection handling, MCA floor staffing, MCA talent pipeline, no placement fee recruiting, outbound continuity, commission sales',
  jsonLd = null,
}) {
  const url = `${siteUrl}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Talent Scope" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Talent Scope" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* PWA / Colors */}
      <meta name="theme-color" content="#0f172a" />

      {/* Additional SEO meta tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="language" content="English" />

      {jsonLd && Array.isArray(jsonLd) ? (
        jsonLd.map((entry, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(entry)}</script>
        ))
      ) : jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
