// Analyse statique : règles recommandées JavaScript/TypeScript et règles des hooks React.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['dist', 'dist-v1', 'dist-v2', 'node_modules', 'test-results', 'playwright-report', 'src/sw/sw-template.js'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { globals: { ...globals.browser } },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Sécurité : interdiction des puits d'exécution de code et d'injection HTML.
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-restricted-properties': ['error',
        { object: 'document', property: 'write', message: 'Interdit : injection HTML.' },
        { property: 'innerHTML', message: 'Interdit : utiliser textContent ou le rendu React.' },
        { property: 'outerHTML', message: 'Interdit : injection HTML.' },
      ],
      'no-restricted-syntax': ['error',
        { selector: "JSXAttribute[name.name='dangerouslySetInnerHTML']", message: 'Interdit : aucun HTML brut n’est rendu.' },
      ],
    },
  },
  {
    files: ['**/*.test.{ts,tsx}', 'tests/**/*.ts'],
    rules: { '@typescript-eslint/no-explicit-any': 'off', '@typescript-eslint/no-non-null-assertion': 'off' },
  },
  {
    files: ['*.{js,mjs}', 'scripts/**/*.mjs', 'tests/**/*.mjs'],
    languageOptions: { globals: { ...globals.node } },
  },
);
