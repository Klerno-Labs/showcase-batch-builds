# Deployment Guide

This guide covers deploying the Pegrio Solutions website to Vercel.

## Prerequisites

- A GitHub account with the project code pushed to a repository.
- A Vercel account (free tier is sufficient).

## Step 1: Connect Repository

1.  Log in to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your Git repository containing this project.

## Step 2: Configure Project

Vercel will automatically detect Next.js settings. Ensure the following:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default) - *Note: If using static export, this logic is handled by the config.*

## Step 3: Environment Variables

If you add any API keys (e.g., for Email or Analytics) in the future, add them here in the format `KEY_NAME=value`.

Currently, no environment variables are strictly required for the build.

## Step 4: Deploy

1.  Click **"Deploy"**.
2.  Wait for the build process to complete (usually takes 1-2 minutes).
3.  You will receive a live URL (e.g., `pegrio-solutions.vercel.app`).

## Domain Setup

1.  Go to the **Settings** tab of your project in Vercel.
2.  Click **Domains**.
3.  Enter your custom domain (e.g., `pegrio.com`).
4.  Update your DNS records according to the instructions provided by Vercel (usually an A record or CNAME).

## Post-Deploy Checklist

- [ ] Check that the contact form submits successfully (check server logs if using the built-in API).
- [ ] Verify Google Analytics is tracking if added.
- [ ] Test the site on mobile devices.
- [ ] Confirm SSL certificate is active (green padlock in browser).