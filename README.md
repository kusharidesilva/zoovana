# ZOOVANA — Discover the Wild Within

## Project Overview

ZOOVANA is a fictional, Sri Lanka-inspired zoo and wildlife discovery website built as a portfolio-quality frontend project. It combines cinematic storytelling, accessible exploration, educational wildlife content, a visual gallery, and a realistic ticket-enquiry demo.

> ZOOVANA is not a real zoo or official booking service. Sample prices are not official, no payment is collected, and no admission ticket is issued.

## Design Concept

The visual system blends nature-documentary atmosphere with premium tourism editorial design: deep forest greens, warm cream, sunlight gold, restrained terracotta, large serif headlines, and immersive original wildlife artwork.

## Features

- Cinematic homepage with nature-led transitions and reduced-motion support
- Accessible wildlife cards and detail dialogs
- Educational Wildlife Explorer with map/list modes
- Filterable masonry gallery, Embla spotlight carousel, and keyboard lightbox
- Four-step ticket planning demo with date, quantity, details, totals, and email handoff
- Validated contact form with encoded `mailto:` drafts, focus-handoff detection, explicit acknowledgement, and copy fallback
- Responsive navigation and accessible mobile drawer
- Centralized zoo, animal, gallery, FAQ, and ticket data
- Static Next.js export for Cloudflare Pages

## Technology Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS, Radix UI, Lucide, Motion, GSAP ScrollTrigger, Embla Carousel, React Hook Form, Zod, Sonner, Vitest, React Testing Library, and Playwright.

## Pages

- `/` — Home, wildlife discovery, conservation, visit planning, and contact
- `/about` — Story, mission, values, biodiversity, and visitor vision
- `/gallery` — Spotlight carousel, filters, masonry grid, and lightbox
- `/tickets` — Frontend-only planning and enquiry workflow

## Wildlife Explorer

The explorer is a stylized educational visualization. Its markers represent broad habitat themes and are not an official distribution or population map.

## Gallery

All included hero and wildlife visuals are original AI-generated illustrative assets made for this demo. Before commercial use, review the final asset policy and project needs.

## Ticket Planning Demo

Pricing is stored as integer minor units in `src/data/tickets.ts`. Ticket types and limits are configurable. The interface does not accept payment, confirm availability, or generate admission credentials.

## Contact Email Handoff

Set `contactEmail` in `src/config/zoo.ts`. The form validates input, builds an encoded email draft, attempts a user-initiated `mailto:` handoff, and clears fields only after best-effort focus evidence or explicit visitor acknowledgement. If handoff cannot be verified, the visitor’s data remains available to copy or retry.

## Form Validation

React Hook Form and Zod enforce trimmed names, valid email, optional phone format, subject selection, and message length constraints. Ticket visitor details and planning dates are also validated.

## Responsiveness

Layouts use fluid type, touch targets, responsive image sizing, mobile-specific explorer controls, and breakpoint-aware compositions. Verify at 320, 360, 375, 390, 430, 640, 768, 1024, 1280, 1440, and 1920 px before production release.

## Animations

Motion handles component transitions and micro-interactions. GSAP ScrollTrigger powers the single desktop atmospheric sequence. Reduced-motion preferences disable non-essential movement.

## Accessibility

Semantic landmarks, skip navigation, visible focus treatment, accessible Radix dialogs/accordions, inline errors, keyboard lightbox controls, descriptive alt text, and WCAG-oriented contrast are included.

## Project Architecture

Content lives in `src/data` and business configuration in `src/config`. Reusable UI is organized by feature under `src/components`. Routes and metadata live in `src/app`.

## Installation

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Add the real email recipient and verified business details in `src/config/zoo.ts`.

## Running Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Testing

```bash
npm run typecheck
npm test
npm run test:e2e
```

Automated browser tests cannot prove that an external email application opened or that an email was sent; this must be checked manually on representative desktop and mobile devices.

## Production Build

```bash
npm run build
```

The static export is generated in `out/`.

## Cloudflare Deployment

1. Install Node.js and dependencies.
2. Configure branding and `contactEmail` in `src/config/zoo.ts`.
3. Run type checks, automated tests, and `npm run build`.
4. Confirm `out/` exists and test every exported route.
5. Create a GitHub repository and push this project.
6. In Cloudflare Dashboard, create a Pages application and connect the repository.
7. Choose the Next.js Static HTML Export preset (or its current equivalent).
8. Set build command to `npm run build` and output directory to `out`.
9. Deploy, open the `.pages.dev` URL, and test `/`, `/about`, `/gallery`, and `/tickets` directly and after refresh.
10. Test the gallery, planner, and email handoff on desktop and mobile.
11. Connect a custom domain if required.

## Live Demo

Cloudflare Pages production deployment: https://zoovana.pages.dev

## Image Credits and Licenses

Project wildlife images were generated specifically for this demonstration using OpenAI’s built-in image generation workflow. They are illustrative and should not be interpreted as documentary evidence of animals housed by ZOOVANA.

## Demo Disclaimer

This is a fictional Sri Lankan zoo concept. Business details remain clearly marked placeholders until verified. Contact forms prepare a draft in the visitor’s email application rather than sending from the website.

## Future Improvements

- Add verified operating hours, address, recipient email, and official ticket link
- Revalidate conservation statuses against current IUCN sources at launch
- Add complete English, Sinhala, and Tamil translation dictionaries
- Add a consent-aware analytics layer and automated accessibility audits
