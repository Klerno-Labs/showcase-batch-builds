# Pegrio Solutions Website

A high-performance, production-ready website built with Next.js 14, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (Static Export Compatible)

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI and section components.
- `src/config`: Configuration files (images, site metadata).
- `src/lib`: Utility functions.

## Image Customization

All images are centrally managed in `src/config/images.ts`. To swap any image on the site:

1.  Open `src/config/images.ts`.
2.  Locate the slot you want to change (e.g., `"hero"`, `"service-1"`).
3.  Replace the `src` URL with your new image link.
4.  Update the `alt` text for accessibility.
5.  Save the file. The changes will reflect immediately.

## Brand Customization

- **Colors**: Modify primary colors in `tailwind.config.ts`.
- **Fonts**: Change the font import in `src/app/layout.tsx`.
- **Content**: Update text content directly in the respective page files (e.g., `src/app/page.tsx`).
- **Site Info**: Edit business name, phone, and address in `src/config/site.ts`.

## Deployment

This site is optimized for Vercel. Simply connect your repository to Vercel, and it will build automatically. Ensure environment variables are set if you expand the API functionality.

## License

© 2024 Pegrio Solutions. All rights reserved.