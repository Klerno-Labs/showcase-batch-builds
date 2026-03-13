# Pegrio Business Website

A modern, clean, and professional website designed to generate leads for general business services. Built with Next.js and Tailwind CSS, this website is fully responsive and optimized for performance.

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
To build the project for production:
```bash
npm run build
```

### Deploy
To deploy the project, follow the instructions in the DEPLOYMENT_GUIDE.md.

## Project Structure Overview
```
/src
  /app
    /api
      /contact
        route.ts
    /components
      Hero.tsx
      Navbar.tsx
      Footer.tsx
      ContactForm.tsx
      Testimonials.tsx
      Services.tsx
      About.tsx
    /config
      images.ts
    /styles
      globals.css
    /pages
      index.tsx
      about.tsx
      services.tsx
      contact.tsx
      faq.tsx
  /public
    favicon.ico
    images/
```

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file:
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: First gallery image
- **gallery-2**: Second gallery image
- **team-1**: Team member photo
- **gallery-3**: Third gallery image
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background

## Brand Customization
- **Colors**: Modify the `tailwind.config.js` file to change the primary color and other color settings.
- **Fonts**: Update the font settings in `src/app/layout.tsx`.
- **Logo**: If a logo slot exists, update the image URL in `src/config/images.ts`.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The base URL for your API.

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md for deploying to Vercel.