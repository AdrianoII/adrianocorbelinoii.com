#!/usr/bin/env bash
#
# Renders the CV from the single Quarto source (cv.qmd) into the two committed
# artifacts the site serves:
#   ../public/cv_adrianoii.pdf          → download link
#   ../src/content/cv.generated.html → injected into the /cv page
#
# Requires the Quarto CLI (https://quarto.org); Quarto bundles pandoc + TeX.
# Run it after editing cv.qmd, then commit the regenerated artifacts.
set -euo pipefail
cd "$(dirname "$0")"

echo "→ Rendering PDF (Quarto + LaTeX)…"
quarto render cv.qmd --to pdf --output cv_adrianoii.pdf
mv -f cv_adrianoii.pdf ../public/cv_adrianoii.pdf

echo "→ Rendering body-only HTML fragment (pandoc, with citations)…"
quarto pandoc cv.qmd \
  --from markdown --to html \
  --citeproc --bibliography publications.bib --csl numeric.csl \
  --metadata link-citations=true \
  --shift-heading-level-by=1 \
  --wrap=none \
  --output ../src/content/cv.generated.html

echo "✓ Wrote ../public/cv_adrianoii.pdf and ../src/content/cv.generated.html"
