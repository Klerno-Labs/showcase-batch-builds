# Deployment Guide for Wagmore Dog Grooming Website

## Step-by-Step Vercel Deployment

1. **Create a Vercel Account**
   - Go to [Vercel](https://vercel.com) and sign up for an account.

2. **Import Project**
   - Click on "New Project" and import your GitHub repository.

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
   - Integrate analytics tools if required.

6. **Visit Your Live Site**
   - Once deployed, visit your site using the provided Vercel URL or your custom domain.