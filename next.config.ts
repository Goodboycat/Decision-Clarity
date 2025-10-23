import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable image optimization for compatibility
  images: {
    unoptimized: true,
  },
  
  // Add trailing slash for better routing
  trailingSlash: true,
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
