# Pegrio Website

A modern, high-performance business website built with Next.js 14, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Utility-first)
- **Animations**: Framer Motion
- **Images**: Next.js Image Optimization
- **Fonts**: Next.js Font Optimization (Inter)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd pegrio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pegrio-website/
├── public/                 # Static assets (favicons, etc)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── api/           # API routes (contact form)
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── faq/           # FAQ page
│   │   ├── services/      # Services page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── components/        # React components
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Page sections (Hero, Forms)
│   │   └── ui/            # Reusable UI primitives
│   ├── config/            # Configuration files
│   │   └── images.ts      # Image URL management
│   └── lib/               # Utility functions
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Changing Images

All images are centrally managed in `src/config/images.ts`. 

1. Open `src/config/images.ts`.
2. Find the slot key (e.g., `hero`, `about`, `service-1`).
3. Replace the `src` property with your new image URL.
4. Update the `alt` text for accessibility.
5. Save the file. The change will reflect immediately on your site.

**Supported Slots:**
- `hero`: Homepage hero banner.
- `hero-alt`: Secondary hero or page header.
- `about`: About section/team page image.
- `service-1`, `service-2`, `service-3`: Service card images.
- `gallery-1`, `gallery-2`, `gallery-3`: Miscellaneous gallery/images.
- `team-1`: Team photo.
- `cta`: Call-to-action section background.
- `testimonial-bg`: Testimonials section background.

### Branding & Colors

To change the primary brand color:

1. Open `tailwind.config.ts`.
2. Locate the `colors.primary` object.
3. Adjust the hex codes to match your brand.
4. The site will automatically update text, buttons, and accents to the new palette.

To change the logo:
1. Replace the `P` div in `src/components/layout/Navbar.tsx` with an `Image` component pointing to your logo file.

### Fonts

The site uses **Inter** by default. To change fonts:

1. Go to `src/app/layout.tsx`.
2. Import a new font from `next/font/google`.
3. Replace `inter` with your new font object in the `className`.

## Environment Variables

No environment variables are strictly required for the static build to run. However, for production analytics or API integrations (email), you would typically add them to `.env.local`.

## Deployment

This site is optimized for static export via Vercel.

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click "Add New Project".
3. Import your repository.
4. Vercel will detect Next.js automatically.
5. Click **Deploy**.

For static export configuration, ensure `output: 'export'` is present in `next.config.js` (if deploying to static hosts like Netlify or S3).

## Support

For questions regarding this build, please contact the Pegrio development team.