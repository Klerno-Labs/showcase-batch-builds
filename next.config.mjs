/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enable static export for maximum portability if needed, 
  // though API routes prevent pure static export without separate backend.
  // For this prompt, we keep standard Next.js serverless mode to support the API route.
};

export default nextConfig;