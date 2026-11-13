# ClearThread Technologies marketing site

Pre-launch marketing site for ClearThread Technologies LLC, a Phoenix-area website service.

Live preview: https://chukwuemekakalu1905.github.io/clearthread-technologies-site/

## Pages

- `index.html` — home, including the current plan cards
- `subscribe.html` — the same plans, with call and text buttons to get started
- `portfolio.html` — concept redesigns, clearly labeled as concepts
- `contact.html` — contact details and a form that does not send messages
- `client.html` — client portal notice (no login form)
- `terms.html` / `privacy.html` — current public notes; a complete agreement and privacy policy will be provided before work starts

## Public plans

Prices match the internal pricing guide:

- DIY Self-Edit — $79 setup, $19/month, or $190 a year. Self-editing is marked Coming soon.
- Starter — $99 setup, $39/month, or $390 a year. Up to 3 pages, 2 included edits a month.
- Standard (Most popular) — $249 setup, $49/month, or $490 a year. Up to 5 pages, 4 included edits a month.
- Plus — $399 setup, $69/month, or $690 a year. Up to 8 pages, 6 included edits a month, bilingual site and a custom domain included.

Extra edits are $40 each on every plan, or a 3-pack for $99. DIY, Starter, and Standard use a custom domain at $5 a month for a public web address. Plus includes a custom domain.

To get started, call or text (346) 977-1698, or email clearthreadtechnologies@gmail.com.

## Local preview

The site is static HTML, CSS, and JavaScript. Open the files locally or serve the folder with any static server. There is no build step.

## Security

The pages use a strict Content-Security-Policy meta tag (`default-src 'self'`, no third-party scripts, `connect-src 'none'`, `form-action 'none'`). `robots.txt` disallows crawling, and each page is marked `noindex, nofollow`.
