/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for pure HTML/CSS/JS hosting
  images: {
    unoptimized: true, // Required for static export when using next/image with external URLs
  },
  // Note: If you deploy to Vercel and want to use the included API route,
  // you should remove or comment out `output: 'export'` above.
}

module.exports = nextConfig