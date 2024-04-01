/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  images: {
    domains: ['files.stripe.com']
  }
}

module.exports = nextConfig