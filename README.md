# ClearThread Technologies

Pre-launch marketing site for ClearThread Technologies LLC, a Phoenix metro studio that builds and maintains websites for local shops and clinics.

Live preview (hidden from search engines): https://chukwuemekakalu1905.github.io/clearthread-technologies-site/

## Pages

- `index.html` — landing page
- `portfolio.html` — concept redesigns (not client work)
- `subscribe.html` — plan cards and placeholder Stripe links
- `client.html` — client portal placeholder (no login form)
- `contact.html` — mock contact form
- `terms.html` / `privacy.html` — legal placeholders

## Before launch

1. Choose a company domain, then replace the placeholder email (`hello@[your-domain]`). The business phone is already listed as (346) 977-1698.
2. Add Stripe Payment Links in `js/config.js` (`STRIPE_LINKS`). Leave a value as `#` to keep the “Payments coming soon” state.
3. Have a lawyer review the terms and privacy pages.
4. Point a custom domain at GitHub Pages when ready. This project uses relative paths and does not include a `CNAME` file yet.
5. Remove `noindex` and update `robots.txt` when the site should appear in search.

Pricing in `js/config.js` is noted as draft in a code comment only.
