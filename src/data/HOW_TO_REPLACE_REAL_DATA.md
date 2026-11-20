# Plug-and-Play Real Content Replacement Guide
**KHAIRA Atelier — Praweena NS Digital Portfolio**

This portfolio operates on a **zero-database, static JSON architecture**. You can update any project, founder bio, academic milestone, or journal article in under 60 seconds by editing the corresponding JSON file under `src/data/`. No React or TypeScript knowledge is required.

---

## 1. Directory Overview

```
src/data/
├── profile.json       # Founder bio, tagline, location, emails, education, Floral Fusion
├── portfolio.json     # All 6 collection projects, lookbooks, fabrics, and descriptions
├── journal.json       # Editorial essays and journal chronicles
└── HOW_TO_REPLACE_REAL_DATA.md  # This guide
```

---

## 2. Replacing Projects (`src/data/portfolio.json`)

To add, edit, or swap a collection, open `src/data/portfolio.json`. Each entry follows this exact structure:

```json
{
  "id": "my-collection-slug",
  "title": "Collection Title: Subtitle",
  "category": "Indo-Western Designs",
  "coverImage": "/images/portfolio/my-cover.jpg",
  "images": [
    "/images/portfolio/look-1.jpg",
    "/images/portfolio/look-2.jpg",
    "/images/portfolio/look-3.jpg",
    "/images/portfolio/look-4.jpg"
  ],
  "description": "2-3 sentence overview of the collection's architectural silhouette and emotional tone.",
  "year": "2026",
  "objective": "A 1-sentence design mission (e.g. 'To harmonize tailored suiting with bias-cut silk drape').",
  "inspiration": "Artistic, historical, or geological provenance (e.g. 'Grecian drapery, Banarasi pit looms').",
  "materials": [
    "Ahimsa Silk",
    "Hand-pleated Organza",
    "Recycled Brass Boning",
    "Raw Linen Gauze"
  ]
}
```

### Tips:
- **`id`**: Becomes the URL slug (`/portfolio/my-collection-slug`). Use lowercase with hyphens.
- **`category`**: Generates an interactive filter pill automatically on the `/portfolio` catalog.
- **`coverImage` & `images`**: Place your `.png` or `.jpg` files in `public/images/portfolio/` and reference them as `/images/portfolio/filename.jpg`. External HTTPS image URLs (e.g., Unsplash) are also supported out-of-the-box.

---

## 3. Replacing Journal Articles (`src/data/journal.json`)

To publish a new essay or editorial reflection, add an entry to `src/data/journal.json`:

```json
{
  "id": "silk-textile-philosophy",
  "slug": "silk-textile-philosophy",
  "title": "The Quiet Luxury of Ahimsa Silk: Redefining Purity",
  "date": "January 18, 2026",
  "category": "Textile Philosophy",
  "readTime": "5 min read",
  "coverImage": "/images/journal/essay-cover.jpg",
  "excerpt": "A short 1-2 sentence lead teaser that appears on the magazine cards.",
  "content": "### Section Heading\n\nParagraph text written from Praweena's perspective.\n\n> \"A pull-quote that renders with an elegant serif border.\"\n\nNext paragraph text..."
}
```

### Formatting Inside `content`:
- Use `### Heading Title` for section dividers.
- Use `> "Pull quote text"` for styled blockquotes.
- Separate paragraphs with double newlines (`\n\n`).

---

## 4. Updating Founder Info & Socials (`src/data/profile.json`)

To update Praweena's personal bio, emails, or Instagram handles:

```json
{
  "name": "Praweena NS",
  "shortName": "Praweena",
  "tagline": "Poetry in Thread, Modern in Silhouette.",
  "logoUrl": "/brand/khaira-logo.png",
  "bio": "First-person biographical narrative...",
  "portraitImage": "/images/founder/praweena-about.png",
  "email": "thekhaira.atelier@gmail.com",
  "personalEmail": "praweenans05@gmail.com",
  "location": "Coimbatore & Tiruppur, Tamil Nadu • Private Atelier & Virtual Consultations Worldwide",
  "socialLinks": {
    "instagram": "https://www.instagram.com/praweena._.05",
    "linkedin": "https://www.linkedin.com/in/praweena-ns/",
    "behance": "https://www.behance.net/praweena-ns",
    "floralFusion": "https://www.instagram.com/floral_fusion.in"
  }
}
```

---

## 5. Dropping Local Images

Store high-resolution photography directly inside `public/`:

- **Main Brand Logo**: `public/brand/khaira-logo.png`
- **Hero Portrait (3:4)**: `public/images/founder/praweena-hero.png`
- **About Portrait (3:4)**: `public/images/founder/praweena-about.png`
- **Collection Photos**: `public/images/portfolio/`
- **Journal Photos**: `public/images/journal/`

After saving changes to any JSON file, run:
```bash
npm run build
```
Next.js will automatically regenerate all static HTML pages in seconds!
