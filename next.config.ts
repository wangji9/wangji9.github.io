import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

// User/Org GitHub Pages root site is served at: https://<user>.github.io/
// For the repo named "<user>.github.io", you should NOT set basePath.
// (basePath is only needed for project sites like https://<user>.github.io/<repo>/)

// Keep an optional override (PROJECT_BASE_PATH) in case you ever deploy as a project site.
// Example: set PROJECT_BASE_PATH=/wangji9 to deploy under https://wangji9.github.io/wangji9/
const basePath = process.env.PROJECT_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
