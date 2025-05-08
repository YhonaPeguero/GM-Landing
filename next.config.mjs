/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'plus.unsplash.com', 'v0.blob.com'],
    unoptimized: true,
  },
};

export default nextConfig;
