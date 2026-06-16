import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
