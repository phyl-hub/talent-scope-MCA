import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://isobench.com';
const defaultImage = `${siteUrl}/images/high-energy-sdr-team.jpg`;

export default function SEO({
  title = 'MCA Outbound Talent | Outbound Funding Specialists | ISO Bench From $1,000/mo',
  description = 'Replace $5K-$20K placement fees with fixed-cost MCA talent logistics. Video-vetted Outbound Funding Specialists. Weekly drops. Sustained dial capacity. Unlimited hires. Zero placement fees.',
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
      <meta name="author" content="ISO Bench" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ISO Bench" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* PWA / Colors */}
      <meta name="theme-color" content="#0f172a" />

      {/* Additional SEO meta tags */}
      <meta name="language" content="English" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
