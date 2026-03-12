# Wagmore Dog Grooming Website Handoff

## Overview
We have built a modern, clean, and professional website for Wagmore Dog Grooming. This site showcases their pet care services and engages local customers effectively.

### Page-by-Page Overview
- **Home Page**: Features a hero section, services overview, testimonials, and a call-to-action.
- **About Page**: Introduces the team and shares the company story and mission.
- **Services Page**: Details the services offered, including pricing and FAQs.
- **Contact Page**: Includes a contact form, location map, and social media links.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., "hero").
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats
- Any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.).
- For best results, use images at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, follow the same steps as above to change the logo image in `src/config/images.ts`.

## Changing Colors
To modify the site colors, edit the `tailwind.config.js` file. Adjust the color values as needed.

## Changing Fonts
To swap the Google Font used in the site, update the `layout.tsx` file.

## Updating Text Content
To update text content, edit the respective page files in the `src/app/pages` directory.

## Requesting Changes
For any changes or updates, please contact Pegrio support.

## Hosting and Maintenance Info
The site is hosted on Vercel, which handles deployment and scaling. Regular updates and maintenance can be requested through Pegrio.

## Contact
For support, reach out to Pegrio at support@pegrio.com.