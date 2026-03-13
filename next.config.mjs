/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/showcase-batch-builds",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;