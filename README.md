# sayednadim.github.io

Personal website of **S M Nadim Uddin** (Sayed Nadim) — Senior AI/ML Researcher in computer vision.

Built with [Astro](https://astro.build). Static site, deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data/        # site config + CV content (experience, projects, publications, …)
  layouts/     # Base layout (head/SEO, status bar, nav, footer)
  pages/       # index, publications, work, cv, writing, 404
  content/     # blog posts (Astro content collection, Markdown)
  styles/      # global.css (terminal theme)
public/        # static assets (photo, CV pdf, blog images, robots.txt)
```

## Adding a blog post

Create a Markdown file in `src/content/blog/`, e.g. `my-post.md`:

```markdown
---
title: My new post
date: 2026-06-25
description: One-line summary.
tags: deep-learning
---

Your content here. Images go in `public/img/blog/` and are
referenced as `![alt](/img/blog/picture.jpg)`.
```

It appears automatically at `/writing/my-post`.

## Editing content

- **CV / experience / projects / publications:** edit `src/data/content.ts`.
- **Profile, socials, nav, stats:** edit `src/data/site.ts`.
- **CV PDF:** replace `public/S_M_Nadim_Uddin.pdf`.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. Repository **Settings → Pages → Source** must
be set to **GitHub Actions**.
