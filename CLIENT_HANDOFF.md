# Summit Real Estate Website Handoff

## Overview of What Was Built
We have created a modern and professional website for Summit Real Estate, which includes the following pages:

### Home Page
- Features a full-screen hero section with a clear call to action.
- Showcases featured properties, services overview, and client testimonials.

### About Page
- Contains a hero section with the company history and team member profiles.

### Services Page
- Lists services in an accordion format and includes case studies.

### Contact Page
- Includes a contact form and an interactive map for easy navigation.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., `hero`).
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats
You can use any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.). For best results, use images at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, you can swap it in the same way as images by updating the URL in `src/config/images.ts`.

## Changing Colors
To modify colors, edit the `tailwind.config.js` file. You can change the primary, secondary, and accent colors as needed.

## Changing Fonts
To swap the Google Font used in the root layout, modify the `layout.tsx` file.

## Updating Text Content
You can update text content directly in the respective page files located in `src/app/pages`.

## Requesting Changes
For any changes or updates, please reach out to Pegrio support.

## Hosting and Maintenance Info
The website is hosted on Vercel, which provides automatic deployments on code changes.

## Contact
For support, please contact Pegrio at support@pegrio.com.