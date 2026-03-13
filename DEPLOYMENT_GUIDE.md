# Deployment Guide for Pegrio Business Website

## Step-by-Step Vercel Deployment
1. **Create a Vercel Account**: Sign up at [Vercel](https://vercel.com).
2. **Import Project**: Click on "New Project" and import your GitHub repository.
3. **Configure Environment Variables**:
   - Go to the "Settings" tab of your project.
   - Under "Environment Variables", add the following:
     - `NEXT_PUBLIC_API_URL`: Your API URL.

## Domain Setup Instructions
1. In the Vercel dashboard, go to the "Domains" section.
2. Add your custom domain and follow the instructions to configure DNS settings.

## Post-Deploy Checklist
- **SSL**: Ensure SSL is enabled for your domain.
- **Redirects**: Set up any necessary redirects in the Vercel dashboard.
- **Analytics**: Integrate analytics tools if required.