This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Prerequisites
- Vercel account
- Domain: versalabs.dev
- Resend account for email

### Environment Variables
Create `.env.local` with:
```
NEXT_PUBLIC_GA_ID=your_google_analytics_id
RESEND_API_KEY=your_resend_api_key
```

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Configure domain: versalabs.dev
3. Add environment variables in Vercel dashboard
4. Configure Resend domain verification for versalabs.dev
5. Deploy automatically on push to main branch

### Production Checklist
- [ ] Static generation enabled for project pages
- [ ] Images optimized with Next.js Image component
- [ ] SEO meta tags and structured data added
- [ ] Google Analytics integrated
- [ ] Sitemap.xml generated
- [ ] Error boundaries implemented
- [ ] Loading states added
- [ ] Cross-browser tested
- [ ] Mobile responsive validated
- [ ] Accessibility audited (WCAG AA)
- [ ] Lighthouse score >95

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
