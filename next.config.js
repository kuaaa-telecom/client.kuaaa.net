/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    // CF_BUILD is set by Cloudflare Pages
    unoptimized: !process.env.CF_BUILD,
  },
}

module.exports = nextConfig
