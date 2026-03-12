# Aspen Dental Studio Website Handoff

## Overview
We have built a modern, responsive website for Aspen Dental Studio, designed to showcase your services and values while generating leads. Below is a page-by-page overview of the site.

### Home Page
- Features a hero section with a compelling value proposition and a sticky "Book Now" button.
- Includes an overview of services and a testimonials section to build trust.

### About Page
- Introduces the practice's mission and values.
- Showcases the team with individual bios to connect with potential patients.

### Services Page
- Provides an overview of service categories with detailed descriptions.
- Includes a before/after gallery for cosmetic services to highlight results.

### Contact Page
- Contains a contact form with real-time validation.
- Displays the location on a Google Map and includes office hours.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site. To swap an image:
1. Open `src/config/images.ts`.
2. Replace the `src` URL with your desired image URL.
3. Update the `alt` text to describe the new image.
4. Save the file — changes will appear on every page that uses that image.

### Supported Formats
- Any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.).
- For best results, use images at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, follow the same steps as above to update the logo image URL in `src/config/images.ts`.

## Changing Colors
To modify colors, edit the `tailwind.config.js` file. You can change the primary, secondary, and accent colors as needed.

## Changing Fonts
To swap the Google Font used in the root layout, update the `layout.tsx` file.

## Updating Text Content
To update text content, edit the respective page files in the `src/app/pages` directory.

## Requesting Changes
For any changes or updates, please contact Pegrio support.

## Hosting and Maintenance
The website is hosted on Vercel, which provides automatic deployments and SSL certificates.

## Contact
For support, reach out to Pegrio at support@pegrio.com.