# Deployment Guide for Vercel

## Step-by-Step Vercel Deployment

1. **Create a Vercel Account**
   - Go to [Vercel](https://vercel.com) and sign up for an account.

2. **Import Your Project**
   - Click on "New Project" and select your Git repository.

3. **Configure Environment Variables**
   - In the Vercel dashboard, navigate to your project settings.
   - Under the "Environment Variables" section, add the following:
     - `NEXT_PUBLIC_API_URL`: Your API base URL.

4. **Domain Setup**
   - In the Vercel dashboard, go to the "Domains" section.
   - Add your custom domain or use the default Vercel domain.

5. **Post-Deploy Checklist**
   - Ensure SSL is enabled for your domain.
   - Set up any necessary redirects.
   - Integrate analytics if required.

6. **Test Your Deployment**
   - Visit your deployed site to ensure everything is functioning as expected.