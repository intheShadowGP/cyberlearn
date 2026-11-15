// Régénère docs/CURRICULUM.md à partir du contenu (multiplateforme).
import { execSync } from 'node:child_process';
execSync('npx vitest run src/content/inventory.test.ts', { stdio: 'inherit', env: { ...process.env, UPDATE_INVENTORY: '1' } });
