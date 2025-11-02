# DevEvent: AFG Web Crawler

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server/Client Components)
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS 4, PostCSS
- **Database:** MongoDB (via Mongoose ODM)
- **ORM:** [Mongoose](https://mongoosejs.com/)
- **Image Hosting:** [Cloudinary](https://cloudinary.com/)
- **Animation/Graphics:** [OGL](https://oframe.github.io/ogl/), [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)
- **Logging/Analytics:** [PostHog](https://posthog.com/) (client & server)
- **Linting/Formatting:** [Biome](https://biomejs.dev/)
- **Font Optimization:** [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist, Schibsted Grotesk, Martian Mono)
- **API Routes:** RESTful endpoints using Next.js API routes
- **Deployment:** [Vercel](https://vercel.com/) (recommended)

### Notable Packages

- `mongoose` for MongoDB ODM
- `cloudinary` for image uploads
- `posthog-js` and `posthog-node` for analytics
- `slugify` for URL slugs
- `@vercel/speed-insights` for performance monitoring

### Project Structure

- `app/` — Main Next.js app directory (routing, pages, API endpoints)
- `componets/` — React components (UI, forms, cards, etc.)
- `database/` — Mongoose models for MongoDB
- `lib/` — Utility libraries (e.g., MongoDB connection, actions)
- `public/` — Static assets (icons, images)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), as well as Schibsted Grotesk and Martian Mono.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
