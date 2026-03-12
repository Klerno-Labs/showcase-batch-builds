# Summit Electric Website

## Project Description
This project is a modern, clean, and professional website for Summit Electric, a trusted local service provider specializing in quality home improvement solutions. The website is designed to generate leads and establish trust with local customers.

## Tech Stack
- Next.js 14+
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/summit-electric.git
   cd summit-electric
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
  /components      # Shared components
  /config          # Configuration files (images, constants)
  /app             # Next.js app directory
  /styles          # Global styles
/public            # Static assets
```

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot is documented with comments explaining where it appears on the site.

### Image Slots
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image for inner pages
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: First gallery image
- **gallery-2**: Second gallery image
- **gallery-3**: Third gallery image
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background
- **gallery-4**: Fourth gallery image

## Brand Customization
### Changing Colors
To change colors, modify the `tailwind.config.js` file.

### Changing Fonts
To change fonts, update the `layout.tsx` file in the `/src/app` directory.

### Changing Logo
If a logo slot exists, update the logo URL in the `src/config/images.ts` file.

## Environment Variables
The following environment variables are required:
- `NEXT_PUBLIC_API_URL`: Your API endpoint for form submissions.

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md file for deploying the application on Vercel.