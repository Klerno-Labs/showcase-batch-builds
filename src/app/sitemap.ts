const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
  <url>
    <loc>https://example.com/</loc>
  </url>
  <url>
    <loc>https://example.com/about</loc>
  </url>
  <url>
    <loc>https://example.com/services</loc>
  </url>
  <url>
    <loc>https://example.com/contact</loc>
  </url>
</urlset>`;

export const GET = () => new Response(sitemap, {
  headers: {
    "Content-Type": "application/xml",
  },
});