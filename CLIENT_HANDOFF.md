# Client Handoff Document for Pegrio Business Website

## What Was Built
We have created a modern and professional website designed to generate leads for your business. The website includes the following pages:
- **Home**: Features a hero section with a clear value proposition and call-to-action buttons.
- **About**: Provides information about your business's origin and mission.
- **Services**: Details the services you offer with descriptions and images.
- **Contact**: Includes a contact form for potential clients to reach out.
- **FAQ**: Answers common questions about your services.

## Changing Images
All images on the site are controlled from one file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site. To swap an image:
1. Open `src/config/images.ts`.
2. Find the slot you want to change (e.g., "hero").
3. Replace the `src` URL with your new image URL and update the `alt` text.
4. Save the file. The change will appear on every page that uses that image.

### Supported Formats
You can use any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.). For best results, use images that are at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, you can swap it by updating the image URL in `src/config/images.ts`.

## Changing Colors
To modify the primary color or other colors, edit the `tailwind.config.js` file.

## Changing Fonts
To swap the Google Font used in the site, update the font settings in `src/app/layout.tsx`.

## Updating Text Content
To update text content, edit the respective page files located in the `src/pages` directory.

## Requesting Changes
For any changes or updates, please reach out to Pegrio support.

## Hosting and Maintenance Info
Your website is hosted on Vercel, which provides automatic deployments on code changes. Regularly check for updates and maintain your content.

## Contact
For support, please contact Pegrio at support@pegrio.com.