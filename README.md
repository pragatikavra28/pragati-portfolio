# Portfolio (Next.js)

<a href="https://pragati-portfolio-steel.vercel.app">
  <img src="https://img.shields.io/badge/Portfolio-Live%20Demo-00C853?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

A single-page developer portfolio: hero, bento intro, projects, achievements, experience, approach and contact.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Customise
Edit `data.json`: all text, links, projects and education live there. Put your resume at `public/resume.pdf`. Replace the LinkedIn and LeetCode placeholder URLs. Colours are CSS variables at the top of `app/globals.css`.
To use a real photo, put it in `public/` and swap the `.avatar` div in `app/page.tsx` for an `<img>` or `next/image`.

## Deploy
Push to GitHub, then import the repo on Vercel or Netlify (framework: Next.js, no extra settings).


