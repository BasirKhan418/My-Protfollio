# Basir Khan Portfolio

Modern personal portfolio built with Next.js to showcase my work in full-stack engineering, cloud-native systems, and SaaS product development.

## Live Profile
- LinkedIn: https://linkedin.com/in/basirkhan418
- GitHub: https://github.com/BasirKhan418
- Email: khanbasir5555@gmail.com

## Features
- Responsive portfolio website with animated sidebar and section transitions
- Resume-focused content (experience, projects, achievements, skills)
- Project cards with conditional Live and GitHub links
- Revamped About, Contact, and Tech Stack sections
- Hashnode blog integration with preview images
- SEO optimization with metadata, JSON-LD, robots, and sitemap routes

## Tech Stack
- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX
- React Icons

## Main Routes
- / -> Home
- /about -> About
- /projects -> Projects
- /resume -> Resume
- /blog -> Blog (Hashnode feed)
- /contact -> Contact

## Environment Variables
Create or update .env.local with:

NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CALCOM_URL=https://cal.com/your-handle
HASHNODE_PUBLICATION_HOST=your-publication.hashnode.dev
NEXT_PUBLIC_HASHNODE_URL=https://your-publication.hashnode.dev

## Getting Started
1. Install dependencies:

	npm install

2. Start development server:

	npm run dev

3. Build for production:

	npm run build

4. Run lint checks:

	npm run lint

## SEO Notes
- Global metadata configured in src/app/layout.tsx
- Page-level metadata on major routes
- robots.txt route: src/app/robots.ts
- sitemap.xml route: src/app/sitemap.ts
- Blog structured data (JSON-LD) included for better search indexing

## Contact
If you want to collaborate on SaaS products, scalable web platforms, or cloud architecture:
- Email: khanbasir5555@gmail.com
- LinkedIn: https://linkedin.com/in/basirkhan418
