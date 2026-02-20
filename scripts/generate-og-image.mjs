import sharp from "sharp";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const INPUT = join(root, "public/images/og-image.jpg");
const OUTPUT = join(root, "public/images/og-image.jpg");

const WIDTH = 1200;
const HEIGHT = 630;

// Dark gradient overlay + text as SVG
const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="black" stop-opacity="0"/>
      <stop offset="60%" stop-color="black" stop-opacity="0"/>
      <stop offset="100%" stop-color="black" stop-opacity="0.78"/>
    </linearGradient>
  </defs>

  <!-- Gradient overlay -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grad)"/>

  <!-- Event name -->
  <text
    x="60"
    y="510"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="78"
    fill="white"
    letter-spacing="-1"
  >OpenClaw SD Weekend</text>

  <!-- Subtitle: dates and location -->
  <text
    x="60"
    y="572"
    font-family="Arial, Helvetica, sans-serif"
    font-weight="400"
    font-size="34"
    fill="rgba(255,255,255,0.88)"
  >February 28 \u2013 March 1, 2026  \u00b7  San Diego, CA</text>

  <!-- Watermark -->
  <text
    x="${WIDTH - 28}"
    y="${HEIGHT - 22}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="22"
    fill="rgba(255,255,255,0.45)"
    text-anchor="end"
  >sdopenclaw.org</text>
</svg>`;

const svgBuffer = Buffer.from(overlay);

const { width: srcWidth, height: srcHeight } = await sharp(INPUT).metadata();

await sharp(INPUT)
  .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
  .composite([{ input: svgBuffer, blend: "over" }])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(OUTPUT + ".tmp");

// Rename temp file over the original (sharp can't write in-place)
import { rename } from "fs/promises";
await rename(OUTPUT + ".tmp", OUTPUT);

console.log(`OG image written to ${OUTPUT} (${WIDTH}x${HEIGHT})`);
