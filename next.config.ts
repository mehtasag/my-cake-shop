import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests from E2B subdomains
  allowedDevOrigins: ["*.e2b.app", "*.e2b.dev"],
  
  // Prevent build errors from stopping the server
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable React strict mode to reduce HMR issues in iframe
  reactStrictMode: false,

  // Allow all remote image domains while testing inside E2B sandbox
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // CORS Headers for all routes including RSC payloads
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS, PATCH, DELETE, POST, PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" },
          { key: "Access-Control-Allow-Credentials", value: "true" },
        ]
      }
    ]
  }
};

export default nextConfig;
