# Deployment Guide for Summit Electric Website

## Step-by-Step Vercel Deployment
1. **Create a Vercel Account**: If you don't have one, sign up at [vercel.com](https://vercel.com).

2. **Import Project**:
   - Go to your Vercel dashboard.
   - Click on "New Project".
   - Import your GitHub repository containing the Summit Electric website.

3. **Configure Environment Variables**:
   - In the Vercel dashboard, navigate to your project settings.
   - Under the "Environment Variables" section, add the following:
     - `NEXT_PUBLIC_API_URL`: Your API endpoint for form submissions.

4. **Deploy**:
   - Click on the "Deploy" button to start the deployment process.
   - Wait for Vercel to build and deploy your project.

## Domain Setup Instructions
1. In your Vercel dashboard, navigate to the "Domains" section.
2. Add your custom domain or use the default Vercel domain provided.
3. Follow the instructions to configure your domain's DNS settings if using a custom domain.

## Post-Deploy Checklist
- Ensure SSL is enabled for secure connections.
- Check that all links and forms are functioning correctly.
- Set up any necessary redirects in the Vercel dashboard.
- Integrate analytics tools if required (e.g., Google Analytics).