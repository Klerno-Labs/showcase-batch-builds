# Core Strength CrossFit Website

## Description
This project is a modern, clean, and professional website for Core Strength CrossFit, a premium fitness facility offering personalized training, group classes, and holistic wellness programs. The website is designed to engage local customers and online visitors, promoting lead generation through effective call-to-action elements.

## Tech Stack
- Next.js 14+
- TypeScript
- Tailwind CSS
- Framer Motion
- next/image for optimized images
- next/font for web fonts

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/core-strength-crossfit.git
   cd core-strength-crossfit
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
To deploy the project, follow the instructions in the DEPLOYMENT_GUIDE.md file.

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
      index.tsx
      about.tsx
      services.tsx
      contact.tsx
    /styles
      globals.css
  /public
  /utils
```

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot is defined with a `src` URL and `alt` text. The following slots are available:

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
To change colors, modify the `tailwind.config.js` file. For fonts, update the `layout.tsx` file to change the Google Font. The logo can be changed in the `images.ts` file.

## Environment Variables
Ensure to set the following environment variables in your `.env` file:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md file for deploying to Vercel.