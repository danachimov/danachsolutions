import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static, self-contained ./out folder for Hostinger.
  output: "export",
  // next/image cannot use the optimization server in a static export.
  images: { unoptimized: true },
  // Each route becomes folder/index.html so /services/, /about/, etc. resolve.
  trailingSlash: true,
};

export default nextConfig;
