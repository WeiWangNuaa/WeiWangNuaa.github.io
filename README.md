# Wei Wang — academic website

A ready-to-publish, responsive academic website for **WeiWangNuaa**.

**Target URL:** https://weiwangnuaa.github.io/  
**GitHub repository:** https://github.com/WeiWangNuaa/WeiWangNuaa.github.io

Inspired by the clean, content-first structure of an academic lab homepage, but with original layout and design. The site is pure HTML/CSS/JavaScript: no npm, Python, Jekyll or build step required.

## Important: review before publishing

- The `WeiWangNuaa.github.io` repository **already exists** and currently contains a placeholder `index.html`. This package is a **proposed replacement**, and has NOT been uploaded to your account.
- Confirm and update the academic dates and biography on `people/index.html`.
- `contact/index.html`, the header/footer where applicable, and the home footer use `weiwangnuaa@gmail.com`, which is publicly listed in a published article. Change it if you prefer another email.
- `people/index.html` contains a stylized `WW` portrait **placeholder**. Replace it with your own photo before publishing if desired.
- The publications page is a **selected bibliography**, with title, author list, journal and DOI checked against published article pages. You can add more papers.
- No future appointments or unconfirmed open positions are presented as facts.

## Folder layout

```
index.html
research/index.html
publications/index.html
people/index.html
news/index.html
contact/index.html
assets/styles.css
assets/site.js
assets/trajectory.svg
assets/favicon.svg
.nojekyll
robots.txt
sitemap.xml
```

## Upload to your existing GitHub repository

**Make a backup first.** Your repository has an `index.html` already; the copy here replaces it.

### Option A — using the GitHub website

1. Open https://github.com/WeiWangNuaa/WeiWangNuaa.github.io
2. Download this package and **extract the ZIP file** locally. Do not upload the ZIP as one file.
3. Use **Add file → Upload files** to upload the contents of the extracted website folder (including the `research`, `assets`, etc. directory structure). If your browser does not preserve folders when uploading, use Option B.
4. Commit changes to `main`. Confirm that `index.html` is in the repository root.
5. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
6. Open https://weiwangnuaa.github.io/ after Pages has published.

### Option B — using Git (reliable for subfolders)

```bash
git clone https://github.com/WeiWangNuaa/WeiWangNuaa.github.io.git
cd WeiWangNuaa.github.io
# Copy the CONTENTS of this extracted website folder here.
# The content of index.html will be replaced, so back up as needed.
git add -A
git commit -m "Create academic website"
git push origin main
```

If you want to preview locally, open `index.html` for the home page, or from a terminal run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000/ . This lets you test all subpages.

## How to edit content

- About and academic history: `people/index.html`
- Research topics: `research/index.html`
- Publications (and author lists): `publications/index.html` and featured papers in `index.html`
- News: `news/index.html` and recent news in `index.html`
- Contact: `contact/index.html`
- Site colors, spacing and typography: `assets/styles.css`
- Menu behavior and publication filters: `assets/site.js`

All pages have mobile-responsive layouts, keyboard focus styling, and no analytics or trackers.

## Credits

Original template and trajectory illustration generated for this website. Publication metadata from the official publisher links embedded in each entry.
