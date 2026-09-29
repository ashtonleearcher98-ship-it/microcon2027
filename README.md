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
- `news.html` — curated official announcements
- `contact.html` — organiser contact links
- `404.html` — missing page

Shared CSS and JavaScript live in `assets/`; images, the supplied MicroCon logo, and the North America WhatsApp QR are included locally. Delegation flag thumbnails reference the organisers’ image URLs and have built-in fallbacks. Tailwind CDN and Google Fonts are optional external enhancements; the site’s core styling lives in `assets/style.css`.

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Upload the **contents** of this folder to the repository root, keeping `index.html` at the root.
3. In the repository, open **Settings → Pages**. Set **Source** to **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Wait for GitHub to show the published URL. No configuration edits are needed for a normal project repository.

## Editing

Event details are written directly in the HTML pages. Keep dates, status, ticket prices, and linked announcements in sync with the official hosts. The itinerary switching and mobile menu are in `assets/app.js`. All imagery is included with the repository.

## Sources and status

Content checked against the official [North America](https://us.microcon27.com/) and [Europe](https://eu.microcon27.com/) sites on 28 September 2026. This is an independent guide. Ticket sales are handled by the organisers’ Stripe checkout pages, with status and terms on their official sites. The North America host listed limited conference seats on 28 September 2026; availability may change.
