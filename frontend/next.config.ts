import type { NextConfig } from 'next';

/**
 * Static export: `next build` writes plain HTML/CSS/JS to `out/`, which the
 * "Deploy Website" GitHub Action uploads to S3 behind CloudFront.
 * No server runs in production, so server-only features (middleware, cookies,
 * server actions, image optimisation, response headers) are not available.
 */
const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default config;
