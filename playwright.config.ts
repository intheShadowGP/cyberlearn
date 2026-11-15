import { defineConfig, devices } from '@playwright/test';

/**
 * - chromium : suite complète (y compris accessibilité, installabilité, mise à jour du SW).
 * - firefox / webkit : tests marqués @cross (parcours principaux, sauvegarde, hors ligne).
 */
export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4173/cyberacademie/',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] }, grep: /@cross/ },
    { name: 'webkit', use: { ...devices['Desktop Safari'] }, grep: /@cross/ },
  ],
  webServer: [
    {
      command: 'node tests/e2e/server.mjs',
      url: 'http://localhost:4173/cyberacademie/',
      reuseExistingServer: false,
    },
    {
      command: 'node scripts/build-update-fixtures.mjs && node tests/e2e/server.mjs',
      url: 'http://localhost:4174/cyberacademie/',
      reuseExistingServer: false,
      timeout: 180_000,
      env: { PORT: '4174', SWITCHABLE: '1' },
    },
  ],
});
