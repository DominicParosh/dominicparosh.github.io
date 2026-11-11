# dominicparosh.github.io

Personal site. Astro + MDX, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build && npm run check   # static build + checks (content in HTML, internal links, TODO count)
```

- Case studies: `src/content/work/*.mdx` (use `<Todo>…</Todo>` for missing content)
- Everything else (experience, papers, archive, the "Ask this page" demo): `src/data/site.ts`

One-time setup on GitHub: Settings → Pages → Source: **GitHub Actions**.
