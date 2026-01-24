import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://isobench.com';
const defaultImage = `${siteUrl}/images/high-energy-sdr-team.jpg`;

export default function SEO({
  title = 'Video-Vetted MCA Outbound Talent | Weekly Drops | ISO Bench',
  description = 'Replace $5K-$20K placement fees with fixed-cost MCA outbound hiring. Weekly drops of video-vetted Outbound Funding Specialists. Unlimited hires. Zero placement fees.',
  path = '/',
  image = defaultImage,
  type = 'website',
  keywords = 'MCA outbound hiring, outbound funding specialist, merchant cash advance recruiting, MCA sales talent, MCA talent sourcing, fixed-cost recruiting, weekly candidate drops, video vetted sales reps, dial-pressure resilience, no placement fee recruiting',
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

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
