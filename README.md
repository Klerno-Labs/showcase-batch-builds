# Wagmore Dog Grooming Website

## Description
This project is a modern, clean, and professional website for Wagmore Dog Grooming, showcasing their pet care services including grooming, boarding, daycare, and veterinary wellness. The site is designed to engage local customers and generate leads through clear calls to action.

## Tech Stack
- Next.js 14+
- TypeScript
- Tailwind CSS
- Framer Motion for animations

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wagmore-dog-grooming.git
   cd wagmore-dog-grooming
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
To deploy the application, follow the instructions in the DEPLOYMENT_GUIDE.md file.

## Project Structure Overview
```
/src
  /components       # Shared components
  /config           # Configuration files (images, constants)
  /app              # Next.js app directory
    /api            # API routes
    /pages          # Page components
  /styles           # Global styles
/public              # Static assets
```

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot has a comment explaining where it appears on the site.

### Image Slots
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image for inner pages
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
To change colors, modify the `tailwind.config.js` file. For fonts, update the `layout.tsx` file. To change the logo, edit the `src/config/images.ts` file.

## Environment Variables
The following environment variables are needed:
- `NEXT_PUBLIC_API_URL`: The base URL for the API.

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md file for deploying to Vercel.