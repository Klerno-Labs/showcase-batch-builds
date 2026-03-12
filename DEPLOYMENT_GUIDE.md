# Deployment Guide for Core Strength CrossFit Website

## Step-by-Step Vercel Deployment

1. **Create a Vercel Account**
   - Go to [Vercel](https://vercel.com) and sign up for an account.

2. **Import Project**
   - Click on "New Project" and import your GitHub repository.

3. **Configure Environment Variables**
   - In the Vercel dashboard, navigate to your project settings.
   - Under the "Environment Variables" section, add the following:
     - `NEXT_PUBLIC_API_URL`: Your API URL.

4. **Set Up Domain**
   - In the Vercel dashboard, go to the "Domains" section.
   - Add your custom domain or use the default Vercel domain.

5. **Deploy**
   - Click on "Deploy" to build and deploy your project.

## Post-Deploy Checklist
- Ensure SSL is enabled for your domain.
- Check that all links are functioning correctly.
- Verify that analytics are set up and tracking properly.