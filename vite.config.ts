/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

/**
 * Politique de sécurité du contenu injectée uniquement au build.
 * GitHub Pages ne permet pas d'en-têtes HTTP personnalisés : la CSP passe donc
 * par une balise <meta>. Limite connue : `frame-ancestors`, `report-uri` et
 * `sandbox` sont ignorés dans une balise meta (voir docs/SECURITY.md).
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ');

function securityHeadersPlugin(): Plugin {
  return {
    name: 'cyberacademie:csp',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        '<!--CSP-->',
        `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
      );
    },
  };
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

/**
 * Génère dist/sw.js avec la liste exhaustive des fichiers du build (y compris
 * tous les chunks chargés dynamiquement : cours, corrections, laboratoires),
 * afin que l'intégralité de la plateforme fonctionne hors ligne.
 * Les URL sont relatives : le SW fonctionne sous n'importe quel sous-chemin.
 */
function serviceWorkerPlugin(): Plugin {
  let outDir = 'dist';
  return {
    name: 'cyberacademie:sw',
    apply: 'build',
    configResolved(cfg) {
      outDir = cfg.build.outDir;
    },
    closeBundle() {
      const template = readFileSync('src/sw/sw-template.js', 'utf8');
      const files = walk(outDir)
        .map((f) => relative(outDir, f).split(sep).join('/'))
        .filter((f) => f !== 'sw.js' && !f.endsWith('.map') && f !== '.nojekyll' && f !== '404.html');
      const hash = createHash('sha256');
      for (const f of files.sort()) {
        hash.update(f);
        hash.update(readFileSync(join(outDir, f)));
      }
      const version = hash.digest('hex').slice(0, 16);
      const precache = ['./', ...files];
      const sw = template
        .replace('__PRECACHE__', JSON.stringify(precache))
        .replace('__VERSION__', JSON.stringify(version));
      writeFileSync(join(outDir, 'sw.js'), sw);
    },
  };
}

export default defineConfig({
  // Chemins relatifs : compatible avec https://user.github.io/<depot>/ sans configuration.
  base: './',
  plugins: [react(), securityHeadersPlugin(), serviceWorkerPlugin()],
  define: {
    __BUILD_ID__: JSON.stringify(process.env.BUILD_ID ?? new Date().toISOString().slice(0, 10)),
    // Version de publication : source unique = « version » de package.json.
    __APP_VERSION__: JSON.stringify(
      (JSON.parse(readFileSync('package.json', 'utf8')) as { version: string }).version,
    ),
  },
  build: {
    target: 'es2022',
    sourcemap: false,
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 700,
  },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    setupFiles: ['src/test-setup.ts'],
  },
});
