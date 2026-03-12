# Pegrio Business Website

A modern, clean, and professional website designed to generate leads for a general business audience. Built with Next.js and Tailwind CSS, this website is fully responsive and optimized for performance.

## Tech Stack
- Next.js 14+
- TypeScript
- Tailwind CSS
- Framer Motion
- Next/Image for optimized images

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pegrio-business-website.git
   cd pegrio-business-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Build
To build the project for production:
```bash
npm run build
```

### Deploy
To export the project for static hosting:
```bash
npm run export
```

## Project Structure Overview
```
/src
  /app
    /api
      /contact
        route.ts
    /components
      Header.tsx
      Footer.tsx
      Hero.tsx
      ...
    /config
      images.ts
    /pages
      index.tsx
      about.tsx
      services.tsx
      contact.tsx
      faq.tsx
  /public
    /images
  /styles
    globals.css
  layout.tsx
  ...
```

## Image Customization
To change any image on the site, edit `src/config/images.ts`:

1. Find the image slot you want to change (e.g., "hero", "about").
2. Replace the `src` URL with your own image URL.
3. Update the `alt` text to describe the new image.
4. Save the file — every component on the site updates automatically.

### Image Slots
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: Gallery image 1
- **gallery-2**: Gallery image 2
- **team-1**: Team member photo
- **gallery-3**: Gallery image 3
- **cta**: Call-to-action background
- **testimonial-bg**: Testimonials section background

## Brand Customization
### Changing Colors
Modify the colors in `tailwind.config.js` under the `theme.extend.colors` section.

### Changing Fonts
Update the font in `layout.tsx` by changing the import statement for `next/font`.

### Changing Logo
If a logo slot exists, update the image URL in `src/config/images.ts`.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The base URL for your API.

## Deployment Instructions (Vercel)
1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Go to Vercel and import your project.
3. Set up environment variables in the Vercel dashboard.
4. Deploy your project.