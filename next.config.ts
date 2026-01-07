import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

// GitHub Pages for a project site is served under: https://<user>.github.io/<repo>/
// This repo is: wangji9/wangji9 -> basePath should be "/wangji9".
// We gate it behind an env var so local dev stays on root.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'wangji9';
const basePath = isGitHubPages ? `/${repoName}` : undefined;

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
