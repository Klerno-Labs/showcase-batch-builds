# Client Handoff for Core Strength CrossFit Website

## What Was Built
We have created a modern, clean, and professional website for Core Strength CrossFit. Below is a page-by-page overview:

### Home Page
- **Hero Section**: Features a full-screen image with a call-to-action button.
- **Services Overview**: Highlights key services offered.
- **Testimonials**: Displays customer feedback.
- **CTA Banner**: Encourages visitors to take action.

### About Page
- **Mission and Vision**: Clearly states the purpose and goals of Core Strength CrossFit.
- **Team Introduction**: Introduces the team members with their bios.
- **Community Involvement**: Showcases the gym's engagement with the local community.

### Services Page
- **Service Descriptions**: Detailed information about each service offered.
- **Pricing Information**: Transparent pricing for services.
- **FAQ Section**: Answers to common questions.

### Contact Page
- **Contact Form**: Allows visitors to reach out directly.
- **Map Integration**: Shows the location of the gym.
- **Social Media Links**: Connects visitors to social media profiles.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site. To swap an image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., "hero").
3. Replace the `src` URL with your new image URL and update the `alt` text.
4. Save the file — the change will appear on every page that uses that image.

### Supported Formats
- Any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.).
- For best results: use images at least 1200px wide, landscape orientation for heroes.

## Changing Logo
If a logo slot exists, you can change it in the `src/config/images.ts` file similarly to the other images.

## Changing Colors
To modify the Tailwind config, edit the `tailwind.config.js` file. 

## Changing Fonts
To swap the Google Font, update the `layout.tsx` file.

## Updating Text Content
To update text content, edit the respective page files in the `src/app/pages` directory.

## Requesting Changes
For any changes or updates, please contact Pegrio support.

## Hosting and Maintenance Info
The website is hosted on Vercel, which provides automatic deployments and SSL certificates.

## Contact
For support, reach out to Pegrio at support@pegrio.com.