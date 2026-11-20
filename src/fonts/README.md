# Haute-Couture Font Assets

This directory is designated for optional local high-fashion fonts:
- `Luxca-Regular.woff2` / `Luxca-Bold.woff2` (Mapped to `--font-luxca` for Couture Headings & Monograms)
- `Careny-Regular.woff2` / `Careny-Italic.woff2` (Mapped to `--font-careny` for Subheadings & Collection Titles)
- `Karimun-Regular.woff2` / `Karimun-Italic.woff2` (Mapped to `--font-karimun` for Romantic Italic Quotes)

### Zero-CLS Metric-Matched Fallbacks:
By default, the atelier portfolio uses Google Fonts `Italiana`, `Bodoni_Moda`, and `Cormorant_Garamond` with exact metric-matched fallback calculations (`adjustFontFallback: true`), guaranteeing 0.000 CLS and immediate server-rendered luxury typography.
When `.woff2` files are added here and activated in `src/app/layout.tsx`, they seamlessly augment the atelier aesthetic.
