import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

const sourceSvgPath = path.join(publicDir, 'favicon.svg');

const outputs = [
  { file: 'favicon-16.png', size: 16 },
  { file: 'favicon-32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'favicon-192.png', size: 192 },
  { file: 'favicon-512.png', size: 512 },
];

async function main() {
  const svg = await fs.readFile(sourceSvgPath);

  for (const { file, size } of outputs) {
    const resvg = new Resvg(svg, {
      fitTo: {
        mode: 'width',
        value: size,
      },
      font: {
        loadSystemFonts: false,
      },
    });

    const pngData = resvg.render().asPng();
    await fs.writeFile(path.join(publicDir, file), pngData);
  }

  // Keep the old Talent Scope favicon around in case something references it,
  // but the site will use the new assets via index.html.
  console.log(`Generated ${outputs.length} favicon PNGs in ${publicDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
