import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/SnehalWadhane-Portfolio',
  output: 'export',
  images: {
    unoptimized: true,
  },
  /* config options here */
};
// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true, // Not recommended for production
//   },
// }
export default nextConfig;
