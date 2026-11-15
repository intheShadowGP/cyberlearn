// Génère les icônes PNG de la PWA à partir des SVG (exécuté une fois, résultat versionné).
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [src, out, size] of [
  ['public/icons/icon.svg', 'public/icons/icon-192.png', 192],
  ['public/icons/icon.svg', 'public/icons/icon-512.png', 512],
  ['public/icons/maskable.svg', 'public/icons/maskable-512.png', 512],
]) {
  const svg = readFileSync(src, 'utf8');
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<style>html,body{margin:0;background:transparent}svg{width:${size}px;height:${size}px;display:block}</style>${svg}`);
  await page.screenshot({ path: out, omitBackground: true });
}
await browser.close();
console.log('icônes générées');
