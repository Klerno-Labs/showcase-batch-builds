# Summit Real Estate Website

## Project Description
This is a modern, clean, and professional website for Summit Real Estate, a full-service real estate brokerage. The website showcases their services, team, and client testimonials while facilitating lead generation through clear calls to action and a responsive design.

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
   git clone https://github.com/yourusername/summit-real-estate.git
   cd summit-real-estate
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
To create a production build:
```bash
npm run build
```

### Deploy
To export the static site:
```bash
npm run export
```

## Project Structure Overview
```
/src
  /app
    /api
    /components
    /config
    /pages
  /public
  /styles
  /utils
```

## Image Customization
To change any image on the site, edit `src/config/images.ts`. Each image slot is documented with comments explaining where it appears on the site.

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
### Colors
To change colors, edit the `tailwind.config.js` file.

### Fonts
To change fonts, modify the `layout.tsx` file to use different Google Fonts.

### Logo
To change the logo, update the image URL in `src/config/images.ts`.

## Environment Variables
No specific environment variables are required for this project.

## Deployment Instructions
To deploy on Vercel:
1. Push your code to GitHub.
2. Connect your GitHub repository to Vercel.
3. Follow the prompts to deploy your site.