# Deployment Guide - Pegrio Website

This guide covers deploying the Pegrio website to production using Vercel, the recommended platform for Next.js applications.

## 1. Pre-Deployment Checklist

Before deploying, ensure the following:

- [ ] All custom images are updated in `src/config/images.ts`.
- [ ] Contact details (phone, email, address) are updated in `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx`.
- [ ] Business hours are accurate.
- [ ] `metadataBase` in `src/app/layout.tsx` is set to the production domain (e.g., `https://pegrio.com`).
- [ ] `sitemap.ts` and `robots.ts` contain the correct domain URL.

## 2. Deploying to Vercel

Vercel provides the smoothest experience for Next.js apps.

### Step 1: Push to Git
Ensure your code is pushed to a GitHub, GitLab, or Bitbucket repository.

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** -> **"Project"**.
3. Select your repository from the list.
4. Click **"Import"**.

### Step 3: Configure Project
1. **Framework Preset**: Vercel should automatically detect "Next.js".
2. **Root Directory**: Leave as `./`.
3. **Build Command**: `npm run build` (Default).
4. **Output Directory**: `.next` (Default).

### Step 4: Environment Variables
If you have added any API keys (e.g., for analytics or email), add them here:
1. Go to the **Environment Variables** section.
2. Add key-value pairs (e.g., `SENDGRID_API_KEY`).
3. Click **Add**.

### Step 5: Deploy
Click the **"Deploy"** button. Vercel will build and deploy your site.

### Step 6: Domain Setup
Once deployment is complete:
1. Go to **Settings** > **Domains**.
2. Enter your domain (e.g., `pegrio.com`).
3. Follow the instructions to update your DNS records (A record or CNAME).

## 3. Static Export Alternative (Netlify/S3)

If you are not using Vercel, you can export the site as static HTML/CSS/JS.

### Configuration
1. Open `next.config.js` (create it if it doesn't exist):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export if not using a loader
  },
};
module.exports = nextConfig;
```

2. Run `npm run build`.
3. The `out/` folder will contain your static site. Upload this folder to your hosting provider (Netlify Drop, AWS S3, etc.).

## 4. Post-Deployment Checklist

- [ ] **SSL Certificate**: Ensure HTTPS is enabled (automatic on Vercel/Netlify).
- [ ] **Redirects**: Set up `www` to non-www (or vice versa) redirects in Vercel settings if needed.
- [ ] **Analytics**: Install Google Analytics or Vercel Analytics.
- [ ] **Form Testing**: Submit a test message via the contact form to ensure the API route works.
- [ ] **Mobile Test**: Check the site on a mobile device to ensure responsiveness and menu functionality.
- [ ] **SEO Check**: Verify meta tags and Open Graph images using the Facebook Sharing Debugger or Twitter Card Validator.

## Troubleshooting

**Build Error: "Module not found"**
- Run `npm install` locally and ensure there are no uncommitted changes in `package-lock.json`.

**Images not loading**
- Ensure `images.unsplash.com` URLs are valid.
- If using static export, set `images: { unoptimized: true }` in `next.config.js` or configure a loader.

**Contact Form not working**
- Check the browser console for errors.
- Ensure `/api/contact/route.ts` is deployed correctly.
- Check that your email service provider API keys are set in Environment Variables.