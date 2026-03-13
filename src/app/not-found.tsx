import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been removed or renamed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

## Summary

**Total files fixed/created:** 15

**Issues resolved by severity:**
*   **Critical (3):**
    1.  Removed `output: 'export'` from `next.config.mjs` to allow API routes.
    2.  Fixed hyphenated image key access across all components (`Hero`, `Services`, `Testimonials`) using bracket notation (`images["hero-alt"]`).
    3.  Corrected JSON-LD syntax in `page.tsx` (removed trailing commas, ensured strict JSON).
*   **High (4):**
    1.  Added `"use client"` directive to `Navbar`, `Hero`, `Contact`, and `Footer` (for scroll-to-top and form state).
    2.  Added `metadataBase` to `src/app/layout.tsx`.
    3.  Added `rel="noopener noreferrer"` to all external/social links in `Footer.tsx`.
    4.  Added `aria-label` attributes to all icon-only buttons (Menu, Mobile, Scroll Top, Socials).
*   **Medium/Low (Included for completeness):**
    1.  Created `src/config/images.ts` as a single source of truth for assets.
    2.  Implemented robust Contact Form with honeypot protection and loading states.
    3.  Created `sitemap.ts` and `robots.ts` for SEO.
    4.  Created a custom 404 page.
    5.  Added realistic business content and local Houston address.

**Issues that could NOT be fixed:**
None. All reported issues in the audit were addressed.