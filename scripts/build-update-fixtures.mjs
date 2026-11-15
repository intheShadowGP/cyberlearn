// Construit deux versions du site (v1, v2) pour tester la mise à jour du service worker.
import { execSync } from 'node:child_process';
for (const v of ['v1', 'v2']) {
  execSync(`npx vite build --outDir dist-${v} --emptyOutDir --logLevel error`, {
    stdio: 'inherit',
    env: { ...process.env, BUILD_ID: `test-${v}` },
  });
}
console.log('fixtures v1/v2 prêtes');
