# Pegrio Business Website

A modern, responsive website designed for general business services, built with Next.js and Tailwind CSS. This website aims to generate leads through a clean and professional design, featuring essential pages and components.

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
   git clone https://github.com/yourusername/pegrio-website.git
   cd pegrio-website
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
To create an optimized production build:
```bash
npm run build
```

### Deploy
To deploy the application, follow the instructions in the DEPLOYMENT_GUIDE.md.

## Project Structure Overview
```
/src
  /app
    /api
      /contact
    /components
    /config
      images.ts
    /pages
      about.tsx
      contact.tsx
      faq.tsx
      home.tsx
      services.tsx
    /styles
  /public
  /utils
```

## Image Customization
To change any image on the site, edit `src/config/images.ts`:
1. Find the slot you want to change (e.g., "hero", "about").
2. Replace the `src` URL with your own image URL.
3. Update the `alt` text to describe the new image.
4. Save the file — changes will reflect across all components using that image.

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
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background

## Brand Customization
- **Colors**: Modify colors in `tailwind.config.js`.
- **Fonts**: Change fonts in `layout.tsx` using `next/font`.
- **Logo**: Update the logo in `src/config/images.ts` if applicable.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The base URL for your API.

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md for deploying to Vercel.