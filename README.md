# Abhiram HK: Portfolio

Personal portfolio website built with React, TypeScript and Vite.

## Run it locally

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

## Update the content

All of the text lives in [`src/content/profile.ts`](src/content/profile.ts): experience, projects, skills, awards and contact details.

| To change | Do this |
| --- | --- |
| Resume download | Replace `public/resume/Abhiram-HK-Resume.pdf`, keeping the same file name |
| Portrait | Add `src/assets/portrait.jpg` (or `.png` / `.webp`) and it replaces the AH monogram automatically |
| Colors | Edit the variables at the top of `src/styles/global.css` |

## Publish to GitHub Pages

1. On GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to the `main` branch.

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to `https://abhiramhk1.github.io/MyWebsite/`.

If you later use a custom domain or rename the repository, update the address in the `canonical`, `og:url`, `og:image` and JSON-LD entries in `index.html` so that link previews keep working.
