/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // ignoring linting altogether. Should be removed for production builds
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
