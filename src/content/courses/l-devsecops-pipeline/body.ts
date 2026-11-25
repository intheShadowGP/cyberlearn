import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'gouvernance',
        title: 'Gouverner les vulnérabilités : priorités, exceptions et VEX',
        blocks: [
          { t: 'p', text: 'Un pipeline qui détecte beaucoup produit vite des centaines d’alertes. Sans règle de tri, les équipes s’épuisent ou ignorent tout. La **gouvernance** décide ce qui bloque une livraison, ce qui se corrige sous un délai, et ce qui peut être accepté pour un temps.' },
          { t: 'def', term: 'Priorisation par le risque', text: 'On combine la **gravité** (score CVSS), l’**exploitation** connue (catalogues comme le KEV de la CISA, probabilité EPSS), l’**exposition** du composant (accessible depuis Internet ou non) et la **criticité** de l’application. Une faille moyenne exploitée sur un service exposé passe avant une faille critique non atteignable.' },
          {
            t: 'table',
            head: ['Situation', 'Décision type', 'Délai indicatif'],
            rows: [
              ['Faille exploitée activement, composant exposé', 'Bloquer la livraison, corriger ou isoler', 'Immédiat à quelques jours'],
              ['Gravité élevée, non exploitée, composant interne', 'Corriger dans le cycle normal', 'Quelques semaines'],
              ['Gravité faible, composant non atteignable', 'Documenter avec une déclaration VEX', 'Revue périodique'],
              ['Correction impossible à court terme', 'Exception datée avec mesure compensatoire', 'Jusqu’à l’échéance fixée'],
            ],
          },
          { t: 'def', term: 'VEX', text: 'Une déclaration VEX (Vulnerability Exploitability eXchange) accompagne un SBOM et indique, pour une vulnérabilité donnée, si le produit est **affecté**, **non affecté** ou **corrigé**. Elle évite de corriger ou de signaler ce qui n’est pas atteignable.' },
          { t: 'list', items: ['**Une exception** précise : la justification, le propriétaire, la mesure compensatoire, la date d’expiration.', '**Des indicateurs** simples : délai moyen de correction par gravité, nombre d’exceptions échues, part des dépôts couverts.', '**Un blocage mesuré** : seules les règles à forte confiance et à fort impact bloquent ; le reste informe.'] },
          { t: 'callout', kind: 'warn', text: 'Une exception sans propriétaire ni échéance devient une dette invisible. Une alerte supprimée sans trace fait perdre à la fois la preuve et la décision.' },
        ],
      },
      {
        id: 'incident',
        title: 'Incident sur la chaîne de livraison : détecter et répondre',
        blocks: [
          { t: 'p', text: 'Le pipeline détient des secrets, produit ce que les clients exécutent et peut modifier la production : c’est une cible de choix. Il faut donc le **journaliser**, **repérer** les comportements anormaux et savoir **répondre** quand un secret, un runner ou une dépendance est compromis.' },
          {
            t: 'table',
            head: ['Signal', 'Pourquoi c’est suspect', 'Où le voir'],
            rows: [
              ['Modification d’un workflow par un compte inhabituel', 'Prise de contrôle du pipeline ou étape ajoutée', 'Historique de la forge, journal d’audit'],
              ['Job qui télécharge puis exécute un script externe', 'Chargement de code non contrôlé', 'Journaux de build'],
              ['Connexion sortante inattendue depuis un runner', 'Exfiltration de secrets', 'Journaux réseau du runner'],
              ['Utilisation d’un secret de déploiement hors pipeline', 'Secret volé réutilisé', 'Journaux du fournisseur cloud'],
              ['Artefact publié sans provenance ou sans signature valide', 'Contournement du circuit de livraison', 'Registre, vérification à l’admission'],
            ],
          },
          { t: 'list', ordered: true, items: ['**Contenir** : révoquer les secrets accessibles au pipeline, suspendre les déploiements, isoler le runner.', '**Préserver** : journaux de build, historique de la forge, attestations de provenance, empreintes des artefacts.', '**Mesurer** : quels builds ont tourné pendant la période, quels artefacts ont été publiés, quels secrets étaient disponibles.', '**Reconstruire** sur un environnement sain depuis un état connu, puis vérifier les artefacts.', '**Communiquer** : versions touchées, empreintes vérifiables, mesures à prendre côté clients.'] },
          { t: 'def', term: 'Runner éphémère', text: 'Machine d’exécution créée pour un seul job puis détruite. Elle ne conserve ni cache ni secret d’un job à l’autre : une compromission ne persiste pas.' },
          { t: 'callout', kind: 'warn', text: 'Reconstruire sur le runner compromis ou effacer les journaux de build détruit les preuves et peut laisser l’attaquant en place.' },
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
    {
      id: 'incident-ci',
      kind: 'analysis',
      title: 'Analyse : un pipeline compromis par un script de dépendance',
      context: [
        { t: 'code', lang: 'text', code: 'Heure (UTC)  Source                    Événement\n09:12        forge                     demande de fusion #482 ouverte par un nouveau compte (modifie package.json)\n09:14        job « tests »             npm install (et non npm ci) ; script postinstall d’une dépendance ajoutée\n09:14        runner partagé            connexion sortante vers 203.0.113.50:443 (12 Ko)\n09:31        cloud                     utilisation de la clé de déploiement depuis une adresse extérieure au pipeline\n09:33        cloud                     création d’un utilisateur « svc-backup » avec droits d’administration\n\nLe workflow utilise pull_request_target, un runner partagé et une clé de déploiement stockée comme secret du dépôt.' },
      ],
      steps: ['Reconstituer l’enchaînement et les erreurs de conception du pipeline.', 'Indiquer ce qu’on préserve et les actions de confinement, dans l’ordre.', 'Proposer les mesures qui auraient évité ou détecté l’incident.'],
    },
  ],
  questions,
  resources: [
    { title: 'SLSA — Supply-chain Levels for Software Artifacts', source: 'OpenSSF', url: 'https://slsa.dev/' },
    { title: 'Security hardening for GitHub Actions', source: 'GitHub Docs', url: 'https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions' },
    { title: 'OWASP Top 10 CI/CD Security Risks', source: 'OWASP', url: 'https://owasp.org/www-project-top-10-ci-cd-security-risks/' },
    { title: 'NIST SP 800-218 — Secure Software Development Framework (SSDF)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
  ],
};
