// Pre-rasterizes public/flame-ring.svg -> public/flame-ring.webp so the
// browser animates a plain bitmap texture: no vector rasterization at the
// animation's max scale on page load. Run after scripts/flame-ring.py:
//   node scripts/rasterize-flame.mjs
import sharp from "sharp"

const SIZE = 1024 // GPU-stretched to ~1408px at max scale on 2x screens; fire is soft, so this is plenty
const VIEWBOX = 100 // viewBox units of the generated SVG

await sharp("public/flame-ring.svg", { density: (72 * SIZE) / VIEWBOX })
  .resize(SIZE, SIZE)
  .webp({ quality: 92 })
  .toFile("public/flame-ring.webp")

console.log("wrote public/flame-ring.webp")
