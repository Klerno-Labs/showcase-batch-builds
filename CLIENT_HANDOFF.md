# Client Handoff Guide

Welcome to your new website! This document will help you manage and maintain your online presence.

## What Was Built

We have built a complete, responsive website for Pegrio consisting of 5 main pages:

1.  **Home**: An overview of your business with a hero section, services preview, testimonials, and a contact form.
2.  **About Us**: Details about your company history, core values, and leadership team.
3.  **Services**: A detailed breakdown of your offerings with pricing and features.
4.  **FAQ**: Answers to common questions to help customers quickly.
5.  **Contact**: A full contact page with a form, map location, and business details.

The site is fully responsive (works on phones, tablets, and desktops), optimized for search engines (SEO), and designed to load incredibly fast.

## How to Change Images

All images on this site are controlled from **ONE single file**. You do not need to hunt through code to swap a photo.

### Steps to Change an Image:

1.  Find the file named `images.ts` inside the `src/config` folder.
2.  Open the file. You will see a list of "slots" (e.g., "hero", "about", "service-1").
3.  Find the slot you want to change.
4.  Replace the URL inside the quotes for `src` with the link to your new image.
5.  Update the text inside `alt` to describe your new image (this helps with Google/Accessibility).
6.  Save the file.

**Where do I get image URLs?**
You can upload images to a service like Cloudinary, Imgur, or Amazon S3 and copy the direct link. For best results, use landscape images that are at least 1200 pixels wide.

### Image Slot Reference:
- `hero`: The main big photo on the homepage.
- `about`: The photo on the About page.
- `service-1`, `service-2`, `service-3`: The photos for your service cards.
- `gallery-1`, `gallery-2`, `gallery-3`: Miscellaneous photos used around the site.

## How to Change Text Content

Most of the text (headlines, paragraphs, button labels) is located directly in the files inside the `src/app` folder.

- **Home Page Text**: Open `src/app/page.tsx`.
- **About Page Text**: Open `src/app/about/page.tsx`.
- **Services & Pricing**: Open `src/app/services/page.tsx`.

Simply look for the text you want to change inside the quotes and update it. Be careful not to delete the curly brackets `{` `}` or the HTML tags like `<h1>` or `<p>`.

## How to Change Colors

We set your primary color to a professional **Blue**. To change this to match your branding:

1.  Open `tailwind.config.ts` (in the main project folder).
2.  Find `colors.primary`.
3.  Update the Hex codes (e.g., `#2563eb`) to your brand color.

## How to Change the Logo

Currently, the logo displays a simple "P" in a box. To use your own logo image:

1.  Place your logo image file in the `public` folder.
2.  Open `src/components/layout/Navbar.tsx`.
3.  Replace the `<div className="w-8...">P</div>` section with:
    ```jsx
    <Image
      src="/your-logo-filename.png"
      alt="Pegrio Logo"
      width={40}
      height={40}
    />
    ```
4.  Save the file.

## Email & Forms

When a user fills out the contact form, the site sends the data to an internal system. Currently, the system logs the submission to the developer console for testing. To receive actual emails, we need to connect an email service (like SendGrid or Resend).

**To request this feature:**
Please contact Pegrio support and ask for "Email Integration for the Contact Form." We will need to set up an API key and configure the backend for you.

## Hosting & Maintenance

Your website is currently hosted on **Vercel**. This is a premium, high-speed hosting platform.

- **Billing**: You may receive a billing email from Vercel. Their free tier is usually sufficient for this size of website.
- **Backups**: Vercel automatically handles backups and updates to the server infrastructure.
- **Updates**: Occasionally, we may send you updates for software patches or new features.

## Need Help?

If you need to make major changes, break something, or want new features, please reach out to the Pegrio team.

**Contact:** Pegrio Support
**Email:** support@pegrio.com (or your designated support channel)

Thank you for choosing us for your business needs!