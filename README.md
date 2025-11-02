DevEvent: AFG Web Crawler
This is a Next.js project bootstrapped with create-next-app.

Tech Stack
Framework: Next.js 16 (App Router, Server/Client Components)
Language: TypeScript, React 19
Styling: Tailwind CSS 4, PostCSS
Database: MongoDB (via Mongoose ODM)
ORM: Mongoose
Image Hosting: Cloudinary
Animation/Graphics: OGL, tw-animate-css
Logging/Analytics: PostHog (client & server)
Linting/Formatting: Biome
Font Optimization: next/font (Geist, Schibsted Grotesk, Martian Mono)
API Routes: RESTful endpoints using Next.js API routes
Deployment: Vercel (recommended)
Notable Packages
mongoose for MongoDB ODM
cloudinary for image uploads
posthog-js and posthog-node for analytics
slugify for URL slugs
@vercel/speed-insights for performance monitoring
Project Structure
app/ — Main Next.js app directory (routing, pages, API endpoints)
componets/ — React components (UI, forms, cards, etc.)
database/ — Mongoose models for MongoDB
lib/ — Utility libraries (e.g., MongoDB connection, actions)
public/ — Static assets (icons, images)
Getting Started
First, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, as well as Schibsted Grotesk and Martian Mono.

To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
