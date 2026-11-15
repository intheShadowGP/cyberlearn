import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-devsecops-pipeline',
  practice: {
    'revue-workflow': {
      blocks: [
        { t: 'list', items: ['`pull_request_target` + checkout du code de la contribution : code externe exécuté avec les secrets.', '`write-all` : le jeton peut modifier le dépôt.', 'Action épinglée sur `@main` : contenu modifiable à tout moment.', '`npm install` : scripts d’installation exécutés, verrou non respecté.', 'Clé AWS statique exposée à tout le job.'] },
        { t: 'code', lang: 'yaml', code: "on: [pull_request]\npermissions:\n  contents: read\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@<SHA>\n        with:\n          persist-credentials: false\n      - run: npm ci --ignore-scripts && npm test\n# Le déploiement, sur main uniquement, utilise OIDC (id-token: write) dans un environnement protégé." },
      ],
    },
    'pipeline-cible': {
      blocks: [
        { t: 'list', ordered: true, items: ['Secrets (bloquant).', 'SCA : bloquant sur critique/exploitée, informatif sinon.', 'IaC (Checkov/Trivy) : liste courte bloquante.', 'Image de conteneur : bloquant sur critique.', 'SAST : informatif puis bloquant sur règles sûres.', 'DAST en préproduction : informatif.'] },
        { t: 'p', text: 'Secrets de déploiement : fédération OIDC vers le cloud et vers le registre, environnement protégé. Indicateurs : délai moyen de correction des vulnérabilités critiques, nombre d’exceptions actives, part des dépôts couverts.' },
      ],
    },
  },
};
