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
    'incident-ci': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Événement', 'Lecture'],
          rows: [
            ['09:12', 'Demande de fusion d’un nouveau compte modifiant `package.json`', 'Vecteur d’entrée : une contribution externe non fiable'],
            ['09:14', '`npm install` et script `postinstall` d’une dépendance ajoutée', 'Du code arbitraire s’exécute dans le job ; `npm ci` et `--ignore-scripts` limiteraient le risque'],
            ['09:14', 'Connexion sortante du runner vers une adresse externe', 'Exfiltration du secret de déploiement (petit volume, compatible avec une clé)'],
            ['09:31', 'Utilisation de la clé depuis une adresse extérieure au pipeline', 'Le secret volé est **rejoué** : confirmation de la compromission'],
            ['09:33', 'Création d’un utilisateur d’administration', '**Persistance** dans le cloud'],
          ],
        },
        { t: 'p', text: 'Les erreurs de conception : `pull_request_target` donne les secrets du dépôt à du code issu d’une contribution, la clé de déploiement est **statique et durable**, le runner est **partagé** et sans filtrage sortant, et l’installation n’est pas figée par le fichier de verrouillage.' },
        { t: 'list', ordered: true, items: ['**Contenir** : révoquer la clé de déploiement, supprimer l’utilisateur `svc-backup` et ses sessions, suspendre les déploiements, isoler le runner.', '**Préserver** : journaux de build du job, historique de la demande de fusion #482, journaux du fournisseur cloud, empreintes des artefacts produits depuis 09:12.', '**Mesurer** : actions faites avec la clé et avec le compte créé, artefacts publiés pendant la période, autres secrets accessibles au job.', '**Reconstruire** sur un runner sain depuis un état connu, vérifier les artefacts, faire pivoter les secrets exposés.'] },
        { t: 'list', items: ['**Prévention** : `pull_request` pour les contributions externes, `npm ci`, scripts d’installation désactivés, permissions minimales, fédération OIDC à la place de la clé statique, déploiement dans un environnement protégé et approuvé, runners éphémères avec filtrage sortant.', '**Détection** : alerte sur l’usage de la clé hors des adresses du pipeline, sur la création d’utilisateurs d’administration et sur les connexions sortantes inattendues des runners.', '**Gouvernance** : revue obligatoire des nouvelles dépendances et des modifications de workflows, protection des branches.'] },
      ],
    },
  },
};
