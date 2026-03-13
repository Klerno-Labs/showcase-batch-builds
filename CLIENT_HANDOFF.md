# Client Handoff: Pegrio Solutions Website

Welcome to your new website! This document explains how to manage and update your content without needing a developer.

## What Was Built

We have delivered a complete, modern website consisting of:

- **Home Page**: A high-impact introduction to your business.
- **About Page**: Your story, values, and team.
- **Services Page**: A detailed list of what you offer.
- **Contact Page**: A professional form for leads to reach you.
- **FAQ Page**: Common questions answered.

The site is fully responsive (looks great on phones) and optimized for search engines (SEO).

## Changing Images

All images on the site are controlled from **ONE SINGLE FILE**. You do not need to hunt through code to find them.

1.  Open the file: `src/config/images.ts`
2.  You will see a list of slots like `"hero"`, `"about"`, `"service-1"`.
3.  Find the slot you want to change.
4.  Replace the `src: "..."` URL with a link to your new image.
    *   *Tip: You can use images from Unsplash, Cloudinary, or any other web address.*
5.  Update the `alt: "..."` text to describe the new image.
6.  Save the file. The site updates instantly.

**Example**:
```typescript
"hero": {
  src: "https://images.unsplash.com/photo-XXXXX?w=1200&h=800&fit=crop", // Paste your link here
  alt: "Modern office space",
  width: 1200,
  height: 800,
},
```

## Changing Text Content

To update the text on your pages:

1.  Open the folder `src/app`.
2.  Inside, you will see folders for each page (`about`, `services`, etc.).
3.  Open the `page.tsx` file inside the folder you want to edit.
4.  Look for the text between the tags `<h1>`, `<p>`, etc.
5.  Edit the text just like you would in a Word document.
6.  Save the file.

## Changing Colors and Fonts

- **Colors**: Open `tailwind.config.ts`. Look for `colors` -> `primary`. Change the hex code (e.g., `#2563eb`) to your brand color.
- **Fonts**: Open `src/app/layout.tsx`. Change the import at the top to a different Google Font.

## Hosting & Maintenance

Your website is hosted on Vercel.
- **Updates**: When you make changes to the code, they will automatically deploy to your live site.
- **Backups**: Your code is stored in Git, so you never lose previous versions.

## Support

If you need major structural changes or encounter any technical issues, please contact Pegrio Support.

Enjoy your new website!