# PhiltinAnosike.com

Premium personal brand platform for Philtin Anosike, built with Next.js App Router and designed to communicate calm authority, disciplined leadership, and structured execution.

## Overview

- Editorial, premium personal brand website
- Structured content architecture powered by local TypeScript content files
- Production-ready contact and newsletter endpoints with validation and provider abstractions
- Vercel-friendly deployment surface with secure headers and function settings
- GitHub Actions workflows for CI and tagged releases

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Zod

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Environment Variables

Copy `.env.example` to `.env.local` for local development.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public canonical site URL |
| `APP_URL` | Server-side site URL fallback |
| `ALLOWED_FORM_ORIGIN` | Optional extra trusted form origin |
| `EMAIL_PROVIDER` | Contact delivery provider, currently `console` |
| `CONTACT_EMAIL_TO` | Destination inbox for contact submissions |
| `CONTACT_EMAIL_FROM` | From address for provider integrations |
| `RESEND_API_KEY` | Reserved for future Resend integration |
| `NEWSLETTER_PROVIDER` | Mailing list provider, currently `console` |
| `NEWSLETTER_LIST_ID` | Provider list or audience ID |
| `CONVERTKIT_API_KEY` | Reserved for future ConvertKit integration |
| `BEEHIIV_API_KEY` | Reserved for future Beehiiv integration |
| `MAILCHIMP_API_KEY` | Reserved for future Mailchimp integration |
| `MAILCHIMP_AUDIENCE_ID` | Mailchimp audience ID |
| `MAILCHIMP_SERVER_PREFIX` | Mailchimp datacenter prefix |
| `RATE_LIMIT_MODE` | `memory` for local use, swappable for a distributed provider later |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window length |
| `CONTACT_RATE_LIMIT_MAX` | Allowed contact submissions per window |
| `NEWSLETTER_RATE_LIMIT_MAX` | Allowed newsletter signups per window |

## Forms Architecture

- Contact submissions are handled by `app/api/contact/route.ts`
- Newsletter signups are handled by `app/api/newsletter/route.ts`
- Shared schemas live in `lib/forms.ts`
- Provider abstractions live in `lib/server/contact-service.ts` and `lib/server/newsletter-service.ts`
- Rate limiting is isolated in `lib/server/rate-limit.ts` so a distributed store can be added later without changing the route handlers

## Vercel Deployment

This project is ready for standard Vercel Git deployment.

### Recommended Setup

1. Import the GitHub repository into Vercel.
2. Keep the root directory as the repository root.
3. Allow Vercel to detect the framework as Next.js.
4. Add the production environment variables from `.env.example`.
5. Set `NEXT_PUBLIC_SITE_URL` and `APP_URL` to `https://philtinanosike.com` in production.
6. Configure preview environment variables as needed for testing provider integrations.

### Notes

- The project includes `vercel.json` function settings for the form endpoints.
- Secure response headers are configured in `next.config.ts`.
- Same-origin form submissions are accepted automatically, which keeps preview deployments functional on Vercel.

## CI and Release Workflow

Two GitHub Actions workflows are included:

- `ci.yml` runs linting, type-checking, and the production build on pushes to `main` and on pull requests.
- `release.yml` creates a GitHub Release whenever a semantic version tag is pushed.

### Create a Release

```bash
git tag v1.0.0
git push origin v1.0.0
```

That tag will trigger the release workflow, verify the app, and publish a GitHub Release with generated notes.

## Deployment Checklist

- Add production environment variables in Vercel
- Confirm the custom domain is attached
- Verify `/api/contact` and `/api/newsletter` with live provider credentials
- Review the release created from the latest semantic tag

## Repository

- GitHub: `https://github.com/BABAYAGAHH/Philtin-Anosike-Portfolio-.git`
