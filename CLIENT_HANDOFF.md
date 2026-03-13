# Client Handoff Document for Pegrio Business Website

## What Was Built
We have created a modern, responsive website for your business that includes the following pages:
- **Home**: Features a hero section with a strong value proposition and call-to-action buttons.
- **About**: Provides information about your business's origin and mission.
- **Services**: Details your offerings with images and descriptions.
- **Contact**: Includes a contact form for potential clients to reach out.
- **FAQ**: Answers common questions from your clients.

## Changing Images
All images on the site are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site. 

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., "hero").
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats:
- Any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.).
- For best results, use images at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, you can swap it similarly in `src/config/images.ts`.

## Changing Colors
To modify colors, edit the `tailwind.config.js` file. You can define your primary color and other color settings there.

## Changing Fonts
To swap the Google Font used in the root layout, edit `layout.tsx` and update the font import.

## Updating Text Content
To update text content, edit the respective page files located in `src/app/pages/`.

## Requesting Changes
For any changes or updates, please contact Pegrio support.

## Hosting and Maintenance Info
Your website is hosted on Vercel. Regular updates and maintenance can be requested through Pegrio support.

## Contact
For support, reach out to Pegrio at support@pegrio.com.