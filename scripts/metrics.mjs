// Régénère docs/QUALITY_METRICS.md à partir du contenu (multiplateforme).
import { execSync } from 'node:child_process';
execSync('npx vitest run src/content/metrics.test.ts', { stdio: 'inherit', env: { ...process.env, UPDATE_METRICS: '1' } });
