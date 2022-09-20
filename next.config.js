/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: !!process.env.CF_BUILD,
  }
}

module.exports = nextConfig
