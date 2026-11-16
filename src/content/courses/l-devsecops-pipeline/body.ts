import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'l-devsecops-pipeline',
  lesson: {
    intro:
      "Une organisation qui livre plusieurs fois par jour ne peut plus faire auditer chaque version à la main. Le DevSecOps intègre des contrôles automatiques dans le pipeline et traite ce pipeline lui-même comme un système critique : les attaques SolarWinds (2020), Codecov (2021) ou la porte dérobée de xz-utils (2024) ont montré qu'un attaquant qui compromet la chaîne de construction atteint d'un coup tous les utilisateurs du logiciel.",
    sections: [
      {
        id: 'controles',
        title: 'Les contrôles automatisés du pipeline',
        blocks: [
          {
            t: 'table',
            head: ['Contrôle', 'Ce qu’il analyse', 'Quand', 'Exemples d’outils'],
            rows: [
              ['**Détection de secrets**', 'Clés, jetons, mots de passe dans le code et l’historique', 'Avant le commit (hook) et dans la CI', 'gitleaks, détection native des forges'],
              ['**SAST**', 'Code source : injections, mauvais usages d’API', 'À chaque demande de fusion', 'CodeQL, Semgrep'],
              ['**SCA**', 'Dépendances : vulnérabilités connues, licences', 'À chaque build et en continu', 'npm audit, OWASP Dependency-Check, Dependabot'],
              ['**Analyse d’IaC**', 'Terraform, Kubernetes, Dockerfile : mauvaises configurations', 'Avant le déploiement', 'Checkov, tfsec / Trivy'],
              ['**Analyse d’images**', 'Paquets vulnérables des images de conteneurs', 'Après le build de l’image', 'Trivy, Grype'],
              ['**DAST**', 'Application en fonctionnement : comportement réel', 'En préproduction', 'OWASP ZAP'],
            ],
          },
          { t: 'def', term: 'SAST', text: "Static Application Security Testing : analyse du code sans l'exécuter. Rapide et précis sur la localisation, mais sujet aux faux positifs et aveugle aux erreurs de configuration d'exécution." },
          { t: 'def', term: 'SCA', text: "Software Composition Analysis : inventaire des composants tiers (directs et transitifs) et rapprochement avec les bases de vulnérabilités (CVE, avis GitHub, OSV)." },
          { t: 'callout', kind: 'key', text: "Un contrôle qui produit des centaines d'alertes non triées est contourné ou désactivé. On commence par **bloquer** sur un petit nombre de règles sûres (secrets, vulnérabilités critiques exploitées) et on **informe** sur le reste, puis on durcit progressivement." },
          { t: 'diagram', id: 'devsecops-pipeline', caption: 'Chaque étape du pipeline porte un contrôle de sécurité (barrière) : les règles critiques sont bloquantes, les autres informent.', alt: 'Pipeline en cinq étapes — Commit, Build, Test, Pré-prod, Déploiement — avec sous chacune sa barrière de sécurité : analyse de secrets, SCA/SBOM, SAST, DAST, analyse d’IaC et signature.' },
        ],
      },
      {
        id: 'chaine',
        title: 'La chaîne d’approvisionnement logicielle',
        blocks: [
          {
            t: 'table',
            head: ['Attaque', 'Principe', 'Contre-mesure'],
            rows: [
              ['**Typosquatting**', 'Paquet malveillant au nom proche d’un paquet populaire', 'Revue des nouvelles dépendances, registres internes approuvés'],
              ['**Confusion de dépendances**', 'Paquet public portant le nom d’un paquet interne, résolu en priorité', 'Espaces de noms réservés, registre configuré explicitement'],
              ['**Compte de mainteneur compromis**', 'Version malveillante publiée sur un paquet légitime', 'Fichier de verrouillage, versions figées, mise à jour délibérée'],
              ['**Compromission du système de build**', 'Code injecté pendant la construction', 'Build isolé et reproductible, provenance signée'],
              ['**Scripts d’installation**', 'Code exécuté automatiquement à l’installation (`postinstall`)', 'Désactiver les scripts quand c’est possible, revue'],
            ],
          },
          { t: 'def', term: 'SBOM', text: "Software Bill of Materials : inventaire normalisé (formats SPDX ou CycloneDX) des composants d'un logiciel. Il permet de répondre en minutes à la question « sommes-nous concernés par cette vulnérabilité ? »." },
          { t: 'def', term: 'SLSA', text: "Supply-chain Levels for Software Artifacts : cadre qui définit des niveaux d'exigence pour la provenance des artefacts (qui les a construits, à partir de quelle source, sur quelle plateforme), attestée et signée." },
          {
            t: 'example',
            title: 'Le fichier de verrouillage',
            blocks: [
              { t: 'p', text: "Un `package.json` qui déclare `\"react\": \"^19.0.0\"` accepte toute version 19.x future. Le fichier `package-lock.json` fige les versions exactes et leurs empreintes d'intégrité ; `npm ci` refuse d'installer si le verrou et le manifeste divergent. Résultat : une version malveillante publiée demain n'entre pas silencieusement dans le prochain build." },
            ],
          },
        ],
      },
      {
        id: 'ci',
        title: 'Durcir le pipeline lui-même',
        blocks: [
          { t: 'code', lang: 'yaml', caption: 'Workflow GitHub Actions durci (extrait)', code: "permissions:\n  contents: read            # moindre privilège par défaut\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@<SHA complet du commit>   # action épinglée par empreinte\n        with:\n          persist-credentials: false                      # le jeton n'est pas conservé\n      - run: npm ci                                      # installation conforme au verrou\n      - run: npm audit --audit-level=high\n  deploy:\n    needs: build\n    permissions:\n      id-token: write       # fédération OIDC : aucun secret statique de cloud\n      contents: read\n    environment: production # approbation manuelle et secrets isolés" },
          { t: 'list', items: ['**Permissions minimales** du jeton de workflow, élevées seulement dans le job qui en a besoin.', '**Actions tierces épinglées par empreinte de commit** : une étiquette (`@v4`) peut être déplacée vers du code malveillant.', '**Fédération OIDC** vers le cloud plutôt que des clés d’accès stockées en secrets.', 'Ne **jamais** exécuter avec des secrets du code provenant d’une demande de fusion externe (déclencheur `pull_request_target` mal utilisé).', '**Environnements protégés** : approbation, branches autorisées, secrets séparés par environnement.', 'Protection des branches : revue obligatoire, contrôles requis, historique non réécrivable.'] },
          { t: 'callout', kind: 'warn', text: "Un secret qui apparaît une seule fois dans l'historique Git doit être considéré comme compromis : le supprimer du dernier commit ne suffit pas, il faut le **révoquer** puis le remplacer." },
        ],
      },
      {
        id: 'iac',
        title: 'Infrastructure as Code',
        blocks: [
          { t: 'code', lang: 'hcl', caption: 'Terraform à corriger', code: 'resource "aws_s3_bucket_public_access_block" "logs" {\n  bucket                  = aws_s3_bucket.logs.id\n  block_public_acls       = false\n  restrict_public_buckets = false\n}\n\nresource "aws_security_group_rule" "ssh" {\n  type        = "ingress"\n  from_port   = 22\n  to_port     = 22\n  protocol    = "tcp"\n  cidr_blocks = ["0.0.0.0/0"]\n  security_group_id = aws_security_group.admin.id\n}' },
          { t: 'p', text: "Un analyseur d'IaC signale ici l'accès public autorisé sur le compartiment et l'ouverture de SSH à tout Internet, **avant** que ces ressources n'existent. La correction se fait dans le code, revu et versionné : c'est l'un des grands bénéfices de l'IaC pour la sécurité." },
          { t: 'list', items: ['Fichiers d’état Terraform : ils contiennent souvent des secrets en clair ; les stocker chiffrés, avec accès restreint.', 'Détection de dérive : comparer l’infrastructure réelle au code pour repérer les modifications manuelles.'] },
        ],
      },
    ],
    useCases: [
      'Mettre en place un pipeline qui bloque la fusion en cas de secret détecté ou de vulnérabilité critique exploitée.',
      'Répondre à une alerte « vulnérabilité critique dans une bibliothèque » grâce au SBOM de chaque application.',
      'Supprimer toutes les clés d’accès cloud des secrets de CI au profit de la fédération OIDC.',
    ],
    commonMistakes: [
      'Épingler les actions tierces par étiquette de version plutôt que par empreinte de commit.',
      'Donner au jeton de workflow des droits d’écriture globaux.',
      'Supprimer un secret commité sans le révoquer.',
      'Activer tous les analyseurs en mode bloquant d’emblée, puis les désactiver face au bruit.',
      'Installer les dépendances avec `npm install` en CI, sans respect strict du verrou.',
    ],
    bestPractices: [
      'Contrôles automatiques progressifs : bloquer peu mais sûr, informer sur le reste.',
      'Verrouillage des versions, revue des nouvelles dépendances, registre maîtrisé.',
      'Permissions minimales, actions épinglées, OIDC, environnements protégés.',
      'SBOM et provenance signée des artefacts.',
      'Analyse de l’IaC avant déploiement et protection des fichiers d’état.',
    ],
    keyPoints: [
      'SAST (code), SCA (dépendances), secrets, IaC, images, DAST (exécution) : chacun couvre un angle.',
      'La chaîne de construction est une cible : la sécuriser comme un système de production.',
      'Verrou de dépendances, actions épinglées, moindre privilège, OIDC.',
      'SBOM et SLSA rendent la provenance vérifiable.',
    ],
  },
  practice: [
    {
      id: 'revue-workflow',
      kind: 'analysis',
      title: 'Revue d’un workflow de CI',
      context: [
        { t: 'code', lang: 'yaml', code: "on: [pull_request_target]\npermissions: write-all\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          ref: ${{ github.event.pull_request.head.sha }}\n      - uses: un-auteur/super-action@main\n      - run: npm install && npm test\n        env:\n          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_KEY }}" },
      ],
      steps: ['Lister les risques.', 'Expliquer le scénario d’attaque le plus grave.', 'Proposer une version corrigée.'],
    },
    {
      id: 'pipeline-cible',
      kind: 'case',
      title: 'Cas pratique : concevoir le pipeline sécurisé d’une API',
      context: [{ t: 'p', text: 'Une équipe de 6 développeurs livre une API Node.js conteneurisée sur Kubernetes, avec infrastructure en Terraform. Aucun contrôle de sécurité automatisé n’existe aujourd’hui.' }],
      steps: ['Ordonner les contrôles à introduire et leur mode (bloquant ou informatif).', 'Indiquer comment gérer les secrets de déploiement.', 'Définir les indicateurs de suivi.'],
    },
  ],
  questions: [
    { id: 'dso-q1', type: 'single', difficulty: 1, skills: ['l-dso-pipeline'], prompt: 'Quel contrôle analyse les dépendances tierces pour détecter des vulnérabilités connues ?', options: [{ id: 'a', text: 'SAST' }, { id: 'b', text: 'SCA' }, { id: 'c', text: 'DAST' }, { id: 'd', text: 'Un pare-feu applicatif' }] },
    { id: 'dso-q2', type: 'truefalse', difficulty: 1, skills: ['l-dso-pipeline'], prompt: 'Le DAST teste l’application en fonctionnement, alors que le SAST analyse le code sans l’exécuter.' },
    { id: 'dso-q3', type: 'multi', difficulty: 2, skills: ['l-dso-pipeline'], prompt: 'Quels contrôles peuvent détecter un problème avant tout déploiement ?', options: [{ id: 'a', text: 'Analyse des secrets' }, { id: 'b', text: 'Analyse de l’IaC (Terraform)' }, { id: 'c', text: 'SAST' }, { id: 'd', text: 'Supervision des journaux de production' }] },
    { id: 'dso-q4', type: 'short', difficulty: 2, skills: ['l-dso-supply'], prompt: 'Quel sigle désigne l’inventaire normalisé des composants d’un logiciel ?' },
    { id: 'dso-q5', type: 'single', difficulty: 2, skills: ['l-dso-supply'], prompt: 'Un attaquant publie sur le registre public un paquet portant le nom d’une bibliothèque interne de l’entreprise. Comment s’appelle cette attaque ?', options: [{ id: 'a', text: 'Typosquatting' }, { id: 'b', text: 'Confusion de dépendances' }, { id: 'c', text: 'Injection SQL' }, { id: 'd', text: 'Hameçonnage' }] },
    { id: 'dso-q6', type: 'truefalse', difficulty: 2, skills: ['l-dso-supply'], prompt: 'Avec un fichier de verrouillage et `npm ci`, une nouvelle version publiée d’une dépendance est automatiquement intégrée au prochain build.' },
    { id: 'dso-q7', type: 'multi', difficulty: 3, skills: ['l-dso-supply'], prompt: 'Quelles mesures réduisent le risque de compromission par une dépendance ?', options: [{ id: 'a', text: 'Revue des nouvelles dépendances' }, { id: 'b', text: 'Versions figées par un fichier de verrouillage' }, { id: 'c', text: 'Accepter automatiquement toute mise à jour majeure' }, { id: 'd', text: 'Registre interne ou miroir approuvé' }] },
    { id: 'dso-q8', type: 'short', difficulty: 3, skills: ['l-dso-supply'], prompt: 'Quel cadre définit des niveaux d’exigence de provenance pour les artefacts logiciels ? (sigle)' },
    { id: 'dso-q9', type: 'single', difficulty: 2, skills: ['l-dso-ci'], prompt: 'Pourquoi épingler une action tierce par empreinte de commit plutôt que par étiquette `@v4` ?', options: [{ id: 'a', text: 'Pour accélérer le build' }, { id: 'b', text: 'Parce qu’une étiquette peut être déplacée vers un autre code, éventuellement malveillant' }, { id: 'c', text: 'Parce que les étiquettes sont interdites' }, { id: 'd', text: 'Pour réduire la taille du dépôt' }] },
        { id: 'dso-q10', type: 'truefalse', difficulty: 2, skills: ['l-dso-ci'], prompt: 'Un secret a été poussé par erreur sur la branche principale d’un dépôt distant. Le supprimer dans un nouveau commit, quelques minutes plus tard, suffit à le protéger.' },
    { id: 'dso-q11', type: 'multi', difficulty: 3, skills: ['l-dso-ci'], prompt: 'Quelles pratiques durcissent un workflow de CI ?', options: [{ id: 'a', text: 'Permissions `contents: read` par défaut' }, { id: 'b', text: 'Fédération OIDC vers le cloud' }, { id: 'c', text: '`permissions: write-all` pour éviter les erreurs' }, { id: 'd', text: 'Environnement protégé avec approbation pour la production' }] },
    { id: 'dso-q12', type: 'short', difficulty: 2, skills: ['l-dso-ci'], prompt: 'Quelle commande npm installe les dépendances en respectant strictement le fichier de verrouillage ?' },
    { id: 'dso-q13', type: 'single', difficulty: 2, skills: ['l-dso-pipeline', 'l-dso-ci'], prompt: 'Un analyseur Terraform signale `cidr_blocks = ["0.0.0.0/0"]` sur le port 22. Quelle est la bonne réaction ?', options: [{ id: 'a', text: 'Ignorer : le serveur a un mot de passe' }, { id: 'b', text: 'Corriger dans le code en limitant la source au VPN ou au bastion, puis redéployer' }, { id: 'c', text: 'Corriger à la main dans la console cloud' }, { id: 'd', text: 'Désactiver l’analyseur' }] },
    { id: 'dso-q14', type: 'open', difficulty: 3, skills: ['l-dso-ci', 'l-dso-supply'], prompt: 'Analysez le workflow `pull_request_target` avec `write-all`, une action épinglée sur `@main` et une clé AWS en variable d’environnement : risques, scénario d’attaque et correction.' },
    { id: 'dso-q15', type: 'open', difficulty: 3, skills: ['l-dso-pipeline', 'l-dso-supply'], prompt: 'Proposez l’ordre d’introduction des contrôles de sécurité dans le pipeline d’une équipe qui n’en a aucun, en précisant le mode bloquant ou informatif de chacun.' },
    { id: 'dso-q16', type: 'single', difficulty: 1, skills: ['l-dso-pipeline', 'l-dso-ci'], prompt: 'Où les secrets détectés dans un dépôt doivent-ils être recherchés ?', options: [{ id: 'a', text: 'Uniquement dans la dernière version des fichiers' }, { id: 'b', text: 'Dans le code et dans tout l’historique Git' }, { id: 'c', text: 'Uniquement dans les fichiers .env' }, { id: 'd', text: 'Nulle part, les forges les masquent' }] },
  ],
  resources: [
    { title: 'SLSA — Supply-chain Levels for Software Artifacts', source: 'OpenSSF', url: 'https://slsa.dev/' },
    { title: 'Security hardening for GitHub Actions', source: 'GitHub Docs', url: 'https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions' },
    { title: 'OWASP Top 10 CI/CD Security Risks', source: 'OWASP', url: 'https://owasp.org/www-project-top-10-ci-cd-security-risks/' },
    { title: 'NIST SP 800-218 — Secure Software Development Framework (SSDF)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
  ],
};
