# Summit Electric Website Handoff

## Overview
We have built a modern, clean, and professional website for Summit Electric, designed to generate leads and establish trust with local customers. Below is a page-by-page overview of the site.

### Home Page
- Features a hero section with a strong value proposition and dual CTA buttons.
- Showcases services offered in a grid format.
- Includes testimonials from satisfied customers.
- Ends with a call-to-action banner and footer with contact information.

### About Page
- Contains a hero section with a background image.
- Describes the company's history and mission.
- Introduces the team with bios and images.

### Services Page
- Displays a detailed grid of services offered.
- Includes trust signals to build credibility.
- Provides FAQs to address common customer inquiries.

### Contact Page
- Features a contact form for inquiries.
- Integrates a map for location visibility.
- Lists additional contact information.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., `hero`).
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats:
- Any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.).
- For best results, use images at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, update the logo URL in the `src/config/images.ts` file.

## Changing Colors
To modify the site's colors, edit the `tailwind.config.js` file.

## Changing Fonts
To swap the Google Font used in the site, update the `layout.tsx` file in the `/src/app` directory.

## Updating Text Content
To update text content, edit the respective page files in the `/src/app` directory.

## Requesting Changes
For any changes or updates, please reach out to Pegrio support.

## Hosting and Maintenance
The site is hosted on Vercel. Regular maintenance includes checking for updates and ensuring all forms are functioning correctly.

## Contact
For support, please contact Pegrio at support@pegrio.com.