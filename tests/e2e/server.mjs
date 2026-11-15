// Serveur statique de test : sert le build sous un sous-chemin, comme GitHub Pages (https://user.github.io/<depot>/).
// Mode SWITCHABLE=1 : sert dist-v1 ou dist-v2, bascule via GET /__switch?to=v2 (test de mise à jour du service worker).
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, normalize, extname, resolve } from 'node:path';

const BASE = '/cyberacademie/';
const PORT = Number(process.env.PORT ?? 4173);
const SWITCHABLE = process.env.SWITCHABLE === '1';
let root = resolve(SWITCHABLE ? 'dist-v1' : 'dist');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml', '.png': 'image/png',
};

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost');
  if (SWITCHABLE && url.pathname === '/__switch') {
    const to = url.searchParams.get('to');
    if (to === 'v1' || to === 'v2') root = resolve(`dist-${to}`);
    res.writeHead(200).end(`root=${root}`);
    return;
  }
  if (!url.pathname.startsWith(BASE)) { res.writeHead(404).end('not found'); return; }
  const rel = decodeURIComponent(url.pathname.slice(BASE.length)) || 'index.html';
  const file = normalize(join(root, rel));
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  try {
    const s = await stat(file);
    const target = s.isDirectory() ? join(file, 'index.html') : file;
    const body = await readFile(target);
    res.writeHead(200, { 'content-type': TYPES[extname(target)] ?? 'application/octet-stream', 'cache-control': 'no-cache' });
    res.end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
}).listen(PORT, () => console.log(`http://localhost:${PORT}${BASE}`));
