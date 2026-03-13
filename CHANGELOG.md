# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2023-10-27

### Added
- **Core Pages**: Home, About, Services, Contact, and FAQ pages fully implemented.
- **Navigation**: Responsive sticky header with mobile slide-out menu and accessibility attributes.
- **Footer**: 4-column layout with contact info, social links, and legal links.
- **Contact Form**: Fully functional form with validation, honeypot spam protection, and loading states.
- **Image Management**: Centralized image configuration via `src/config/images.ts`.
- **SEO**: Meta tags, Open Graph tags, JSON-LD Structured Data, Sitemap, and Robots.txt.
- **Design System**: Tailwind CSS integration with custom primary color palette (Blue).
- **Typography**: Inter font family with optimized loading.
- **Performance**: Next.js Image optimization (lazy loading), `next/font` usage.
- **Components**: Reusable UI components (Button, Input, Textarea).

### Technical Details
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion ready (added to dependencies)
- **Browser Support**: Modern browsers (ES6+)

### Known Limitations
- Contact form currently logs to console. Email integration requires an API provider (e.g., SendGrid, Resend) in `src/app/api/contact/route.ts`.
- Map on Contact page is a static image placeholder. Integration with Google Maps API requires a valid API Key.

### Security
- Implemented honeypot field (`_gotcha`) in contact form to prevent bot submissions.
- Input sanitization and validation on all form fields.
- External links use `rel="noopener noreferrer"`.