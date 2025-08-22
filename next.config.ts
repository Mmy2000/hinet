import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // 👈 allow localhost for dev
        port: "1337",          // 👈 Strapi port
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "your-production-domain.com", // 👈 add your deployed Strapi host here
      },
    ],
  },
};

export default nextConfig;
