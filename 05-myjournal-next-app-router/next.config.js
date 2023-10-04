/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    optimizePackageImports: ["@mui/joy"],
  },
};

module.exports = nextConfig;
