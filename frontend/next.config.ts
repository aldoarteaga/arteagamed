import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',
  experimental: {
    typedRoutes: true,
  },
  // Workspace packages (@eart/*) are consumed from source and use NodeNext-style
  // `./file.js` specifiers; let webpack resolve those to the `.ts` files.
  webpack(webpackConfig: { resolve: { extensionAlias?: Record<string, string[]> } }) {
    webpackConfig.resolve.extensionAlias = { '.js': ['.ts', '.tsx', '.js'] };
    return webpackConfig;
  },
  // Strict security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://js.stripe.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              'frame-src https://js.stripe.com',
              "connect-src 'self' https://api.stripe.com https://cognito-idp.eu-west-1.amazonaws.com",
              "img-src 'self' data: https:",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default config;
