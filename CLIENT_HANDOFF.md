# Client Handoff Document

## What Was Built
We have created a modern, responsive website for your business that includes the following pages:
- **Home**: Features a hero section, services overview, and testimonials.
- **About**: Provides information about your company and team.
- **Services**: Details the services you offer with pricing.
- **Contact**: Contains a contact form for inquiries.
- **FAQ**: Answers common questions from customers.

## Changing Images
All images on the site are controlled from one file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site. 

To swap an image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change.
3. Replace the `src` URL with your own image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats
You can use any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.). For best results, use images at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, you can change it in `src/config/images.ts` similarly to other images.

## Changing Colors
To modify the colors used throughout the site, you can edit the `tailwind.config.js` file.

## Changing Fonts
To swap the Google Font used in the site, update the import in `layout.tsx`.

## Updating Text Content
You can update the text content for each page by editing the respective `page.tsx` files in the `src/app` directory.

## Requesting Changes
For any changes or updates, please reach out to Pegrio support.

## Hosting and Maintenance Info
Your website is hosted on Vercel, which handles deployment and scaling. Regular updates and maintenance can be requested through Pegrio support.

## Contact
For support, please contact Pegrio at support@pegrio.com.