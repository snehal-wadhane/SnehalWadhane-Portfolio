import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  /* config options here */
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Not recommended for production
  },
}
export default nextConfig;
