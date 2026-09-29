# MicroCon 27 website

A responsive, static multi-page guide to MicroCon 2027 North America and Europe. No build process, database, or API key is required.

## Pages

- `index.html` — homepage
- `about.html` — event overview and site context
- `events.html` — compare the two events
- `north-america.html` — San Diego details
- `europe.html` — Aigues-Mortes details
- `programme.html` — interactive schedule tabs
- `delegations.html` — complete published registries with search and continent switcher
- `registration.html` — screenshot-inspired ticket selector with official checkout links and waitlist
- `experiences.html` — individual conference, excursion, social and gala details
- `travel.html` — venue addresses and arrival guidance
- `accommodations.html` — lodging guidance for both cities
- `faq.html` — booking, attendance and travel answers
- `policies.html` — policy overview with links to complete host terms
- `flag.html` — printed-programme flag enquiry
- `terms.html` and `privacy.html` — site information
- `news.html` — local announcement archive
- `contact.html` — organiser contact links
- `404.html` — missing page

Shared CSS and JavaScript live in `assets/`; images, the supplied MicroCon logo, and the North America WhatsApp QR are included locally. Delegation entries are local and use initial badges; source-hosted flag thumbnails would stop working after the old domains close. Tailwind CDN and Google Fonts are optional external enhancements; the site’s core styling lives in `assets/style.css`.

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Upload the **contents** of this folder to the repository root, keeping `index.html` at the root.
3. In the repository, open **Settings → Pages**. Set **Source** to **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Wait for GitHub to show the published URL. No configuration edits are needed for a normal project repository.

## Editing

Event details are written directly in the HTML pages. Keep dates, status, ticket prices, and announcements current with the organising teams. The itinerary switching, mobile menu, and on-site ticket preview window are in `assets/app.js`. The final payment step opens the supplied Stripe-hosted checkout in a separate tab; embedding payment fields would require a Stripe Checkout integration and backend. All imagery is included with the repository.

## Sources and status

Content consolidated from the two retiring organiser sites and supplied event materials on 29 September 2026. The repo contains no links or image dependencies on the retiring domains. Payment uses the supplied Stripe checkouts; newsletter, WhatsApp, and the two requested locked-card links remain external. The policy page paraphrases host conditions, and the local news page summarises selected announcements. Before retiring the original domains, the organisers should preserve any required legal text and historic article/media archive, verify ticket status, and configure the replacement domain.
