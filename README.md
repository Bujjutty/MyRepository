# PadmaPure Foods – Website

A static information website for PadmaPure Foods. It's plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Structure

```
index.html      Single-page site: Hero, About, Products, Why Us, Process, Contact
css/style.css   All styles (colour palette lives in :root variables)
js/main.js      Mobile menu, scroll animations, contact form (mailto)
images/         Logo, favicon and lotus illustration (SVG)
```

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Things to customise

Search the files for `[` placeholders and `TODO` comments:

- **About**: your real story, year established, product and customer counts
- **Products**: your actual product categories and descriptions
- **Contact**: address, phone, email, WhatsApp number (`index.html`) and `CONTACT_EMAIL` (`js/main.js`)
- **Footer**: FSSAI licence number
- **Images**: add product photos to `images/` and replace the emoji icons if you like

## Deploying (free options)

- **GitHub Pages**: Settings → Pages → deploy from your branch, root folder
- **Netlify / Cloudflare Pages**: connect the repo; no build command; publish directory `/`
