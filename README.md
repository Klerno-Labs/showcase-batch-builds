# Aspen Dental Studio Website

## Project Description
This project is a bespoke, hand-crafted website for Aspen Dental Studio, a modern dental practice focused on providing comprehensive family dentistry with a gentle, patient-first approach. The website aims to generate leads through a user-friendly interface and clear calls to action.

## Tech Stack
- Next.js 14+ (React Framework)
- TypeScript
- Tailwind CSS (Utility-first CSS framework)
- Framer Motion (Animation library)

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aspen-dental-studio.git
   cd aspen-dental-studio
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
To deploy the application, follow the instructions in the `DEPLOYMENT_GUIDE.md`.

## Project Structure Overview
```
/src
  /app
    /api
      /contact
    /components
      /Navbar.tsx
      /HeroSection.tsx
      /ServiceCard.tsx
      /ContactForm.tsx
    /config
      images.ts
    /pages
      /about
        page.tsx
      /contact
        page.tsx
      /services
        page.tsx
      page.tsx
    /styles
      globals.css
  /public
    /images
  /utils
    cn.ts
```

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Here are the image slots and their usage:

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
To change colors, modify the `tailwind.config.js` file. For fonts, update the `layout.tsx` file. To change the logo, update the image URL in `src/config/images.ts`.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The API endpoint for form submissions.

## Deployment Instructions
Follow the instructions in the `DEPLOYMENT_GUIDE.md` for deploying the application to Vercel.