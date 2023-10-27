/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mui/joy"],
  },
};

module.exports = nextConfig;
