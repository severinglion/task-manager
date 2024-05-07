/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['knex']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'future-focus.ca',
      },
      {
        protocol: 'https',
        hostname: 'future-focus.ca',
      },
    ],
  },
};

export default nextConfig;
