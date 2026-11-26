import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'l-conteneurs-kubernetes',
  lesson: {
    intro:
      "Les conteneurs ont changé la façon de déployer les applications, mais leur isolation est souvent surestimée. Un conteneur n'est pas une machine virtuelle : c'est un processus de l'hôte, partageant son noyau, dont la vue du système est restreinte. Quelques options de configuration suffisent à transformer un conteneur compromis en accès root à l'hôte, puis à tout le cluster.",
    sections: [
      {
        id: 'isolation',
        title: 'Ce qui isole un conteneur',
        blocks: [
          { t: 'diagram', id: 'k8s-isolation', caption: 'Les conteneurs d’un pod sont isolés par des mécanismes du noyau (namespaces, cgroups, capacités, seccomp, MAC) mais partagent le noyau de l’hôte : l’isolation est plus fine, non équivalente à celle d’une machine virtuelle.', alt: 'Schéma emboîté : un cluster contient un nœud au noyau partagé, qui contient un pod, qui contient deux conteneurs, isolés par namespaces, cgroups, capacités, seccomp et contrôle d’accès obligatoire.' },
          {
            t: 'table',
            head: ['Mécanisme Linux', 'Rôle'],
            rows: [
              ['**Espaces de noms** (namespaces)', 'Vue séparée des processus, du réseau, des points de montage, des utilisateurs, du nom d’hôte'],
              ['**cgroups**', 'Limites de ressources (CPU, mémoire, nombre de processus)'],
              ['**Capacités** (capabilities)', 'Découpage des privilèges de root ; un conteneur n’en reçoit qu’une partie'],
              ['**seccomp**', 'Filtrage des appels système autorisés'],
              ['**AppArmor / SELinux**', 'Contrôle d’accès obligatoire'],
            ],
          },
          { t: 'def', term: 'Conteneur', text: "Processus (ou groupe de processus) de l'hôte exécuté dans des espaces de noms dédiés, avec des limites de ressources et des privilèges réduits. Tous les conteneurs d'un hôte partagent le **même noyau**." },
          { t: 'def', term: 'Évasion de conteneur', text: "Obtention d'un accès à l'hôte depuis un conteneur, par une vulnérabilité du noyau ou du moteur, ou plus souvent par une **configuration trop permissive**." },
          {
            t: 'table',
            caption: 'Configurations dangereuses',
            head: ['Option', 'Pourquoi'],
            rows: [
              ['`--privileged` / `privileged: true`', 'Toutes les capacités, accès aux périphériques de l’hôte : quasi équivalent à root sur l’hôte'],
              ['Montage de `/var/run/docker.sock`', 'Contrôle du moteur Docker : lancer un conteneur privilégié montant `/` de l’hôte'],
              ['`hostPID`, `hostNetwork`, `hostPath: /`', 'Accès aux processus, au réseau ou aux fichiers de l’hôte'],
              ['Capacité `CAP_SYS_ADMIN`', 'Très large : montage de systèmes de fichiers, nombreuses voies d’évasion'],
            ],
          },
          { t: 'callout', kind: 'key', text: "Pour isoler des charges non fiables (code de clients, multi-locataire), le conteneur seul ne suffit pas : on ajoute une frontière plus forte (machines virtuelles légères, sandbox comme gVisor ou Kata Containers, nœuds dédiés)." },
        ],
      },
      {
        id: 'images',
        title: 'Construire des images sûres',
        blocks: [
          { t: 'code', lang: 'dockerfile', caption: 'Dockerfile multi-étapes durci', code: '# Étape de construction\nFROM node:24-bookworm-slim AS build\nWORKDIR /app\nCOPY package.json package-lock.json ./\nRUN npm ci --ignore-scripts\nCOPY . .\nRUN npm run build\n\n# Image finale minimale, utilisateur non root\nFROM gcr.io/distroless/nodejs24-debian12\nWORKDIR /app\nCOPY --from=build /app/dist ./dist\nUSER nonroot\nCMD ["dist/server.js"]' },
          { t: 'list', items: ['**Image de base minimale** (distroless, slim) : moins de paquets, moins de vulnérabilités, pas de shell pour l’attaquant.', '**Utilisateur non root** et système de fichiers en lecture seule.', '**Aucun secret** dans l’image : les couches sont lisibles par quiconque récupère l’image (`docker history`).', '**Versions de base figées** (idéalement par empreinte `@sha256:…`) et reconstruction régulière pour intégrer les correctifs.', '**Analyse** de l’image en CI (Trivy, Grype) et **signature** (cosign).'] },
          {
            t: 'example',
            title: 'Un secret dans une couche',
            blocks: [{ t: 'p', text: "Un Dockerfile fait `COPY .env /app/` puis `RUN rm /app/.env`. Le fichier n'apparaît plus dans le conteneur, mais il reste dans la couche créée par le `COPY` : n'importe qui peut extraire l'image et lire le fichier. Les secrets se fournissent à l'exécution (secrets Kubernetes, coffre), ou via les secrets de build (`--mount=type=secret`), jamais par copie." }],
          },
        ],
      },
      {
        id: 'kubernetes',
        title: 'Durcir Kubernetes',
        blocks: [
          { t: 'def', term: 'RBAC Kubernetes', text: "Contrôle d'accès par rôles : `Role`/`ClusterRole` décrivent des verbes sur des ressources, `RoleBinding`/`ClusterRoleBinding` les attribuent à des utilisateurs ou des comptes de service. Les droits `*`, `create pods`, `get secrets` et `escalate`/`bind` sont particulièrement sensibles." },
          { t: 'code', lang: 'yaml', caption: 'Pod conforme au profil « restricted »', code: 'apiVersion: v1\nkind: Pod\nmetadata:\n  name: api\nspec:\n  automountServiceAccountToken: false\n  securityContext:\n    runAsNonRoot: true\n    seccompProfile: { type: RuntimeDefault }\n  containers:\n    - name: api\n      image: registre.exemple.fr/api@sha256:3b1f…\n      securityContext:\n        allowPrivilegeEscalation: false\n        readOnlyRootFilesystem: true\n        capabilities: { drop: ["ALL"] }\n      resources:\n        limits: { memory: "256Mi", cpu: "500m" }' },
          { t: 'list', items: ['**Pod Security Admission** : appliquer le profil `restricted` (ou `baseline` au minimum) par espace de noms.', '**NetworkPolicy** : par défaut, tous les pods peuvent se parler ; poser une politique de refus par défaut puis ouvrir les flux nécessaires.', '**Secrets** : chiffrement au repos dans etcd, accès RBAC restreint, idéalement un coffre externe ; un Secret Kubernetes n’est qu’encodé en Base64.', '**Jeton de compte de service** non monté quand il n’est pas utile.', '**Serveur d’API** non exposé à Internet, journaux d’audit activés, mises à jour régulières du cluster.'] },
          { t: 'callout', kind: 'tip', text: "Le CIS Kubernetes Benchmark et des outils comme kube-bench ou Kubescape permettent d'évaluer un cluster. La documentation officielle de Kubernetes décrit les Pod Security Standards." },
        ],
      },
      {
        id: 'execution',
        title: 'À l’exécution : audit, détection et réponse',
        blocks: [
          { t: 'p', text: 'Le durcissement réduit les risques, il ne les supprime pas. Il faut aussi **voir** ce qui se passe dans le cluster et **réagir** sans détruire les preuves. Trois sources se complètent : le **journal d’audit** de l’API, la **détection à l’exécution** (appels système) et les **journaux** des applications et des nœuds.' },
          {
            t: 'table',
            head: ['Signal', 'Pourquoi c’est suspect', 'Source'],
            rows: [
              ['`kubectl exec` inattendu dans un pod de production', 'Prise de contrôle ou curiosité malveillante', 'Journal d’audit'],
              ['Création d’un pod privilégié ou avec `hostPath`', 'Tentative d’évasion ou abus de droits', 'Journal d’audit, admission'],
              ['Lecture de Secrets par un compte inhabituel', 'Vol d’identifiants', 'Journal d’audit'],
              ['Shell ou outil réseau lancé dans un conteneur applicatif', 'Exécution de commandes par un attaquant', 'Détection à l’exécution (par exemple Falco)'],
              ['Connexions sortantes inattendues d’un pod', 'Commande et contrôle, exfiltration', 'Journaux réseau, NetworkPolicy en mode journalisation'],
              ['Nouveau compte de service avec des droits étendus', 'Persistance et élévation', 'Journal d’audit'],
            ],
          },
          { t: 'def', term: 'Détection à l’exécution', text: 'Surveillance du comportement des conteneurs au niveau du noyau (appels système) selon des règles : un conteneur applicatif qui ouvre un shell ou lit des fichiers sensibles déclenche une alerte. Falco est un exemple libre.' },
          { t: 'list', ordered: true, items: ['**Isoler** le pod par une NetworkPolicy plus stricte (sans le supprimer).', '**Préserver** : journaux du pod et du nœud, liste des processus, copie du système de fichiers, évènements d’audit liés, empreintes.', '**Contenir** : révoquer les jetons de compte de service exposés, **cordonner** le nœud pour qu’il ne reçoive plus de nouveaux pods.', '**Investiguer** : d’où vient l’image, quels droits avait le pod, quels autres pods ont été touchés.', '**Éradiquer** : reconstruire à partir d’images saines, faire pivoter les secrets, corriger la cause (image, configuration, droits).'] },
          { t: 'callout', kind: 'warn', text: 'Supprimer un pod compromis efface des preuves, et l’orchestrateur peut le recréer à partir de la même image vulnérable. On isole d’abord, on supprime ensuite.' },
        ],
      },
      {
        id: 'admission',
        title: 'Contrôler ce qui s’exécute : registre, signature et admission',
        blocks: [
          { t: 'p', text: 'La sécurité d’un cluster dépend de ce qu’on y **admet**. L’idée est de ne laisser entrer que des images **connues, analysées et signées**, et des pods **conformes** à une politique.' },
          {
            t: 'table',
            head: ['Contrôle', 'Rôle', 'Outil ou mécanisme'],
            rows: [
              ['**Registre privé**', 'Limiter les sources d’images', 'Registre d’entreprise avec droits restreints'],
              ['**Analyse de vulnérabilités**', 'Repérer les composants vulnérables', 'Trivy, Grype, en CI et en continu sur le registre'],
              ['**Signature d’image**', 'Prouver origine et intégrité', 'cosign et vérification à l’admission'],
              ['**Nomenclature (SBOM)**', 'Savoir quels composants contient l’image', 'Génération en CI, stockage avec l’image'],
              ['**Politique d’admission**', 'Refuser les pods non conformes', 'Pod Security Admission, Kyverno, Gatekeeper'],
            ],
          },
          { t: 'def', term: 'Contrôleur d’admission', text: 'Composant qui intercepte les requêtes à l’API Kubernetes avant que l’objet soit enregistré, pour les valider ou les modifier. Une politique peut par exemple refuser un pod privilégié, exiger l’exécution non root ou n’accepter que des images signées d’un registre approuvé.' },
          { t: 'list', items: ['**Épingler par empreinte** et exiger la signature pour que le contenu déployé soit celui qui a été analysé.', '**Reconstruire régulièrement** : une image saine aujourd’hui peut être vulnérable demain.', '**Analyser en continu** les images déjà déployées, pas seulement à la construction.', '**Séparer les rôles** : l’équipe qui écrit les politiques n’est pas celle qui déploie.'] },
          {
            t: 'example',
            title: 'Une image non signée refusée',
            blocks: [
              { t: 'p', text: 'Un développeur tente de déployer une image tirée d’un registre public, non signée. La politique d’admission exige une signature valide d’un registre approuvé : la requête est refusée avec un message explicite. Il doit passer par la CI, qui construit, analyse, signe et publie l’image.' },
              { t: 'p', text: 'Le contrôle a empêché à la fois une image potentiellement compromise et un contournement du processus.' },
            ],
          },
        ],
      },
      {
        id: 'dockerfile-avant-apres',
        title: "Une image plus sûre : Dockerfile avant et après",
        blocks: [
          { t: 'code', lang: "dockerfile", caption: "Avant : pratiques à risque", code: "FROM python:latest\nCOPY . /app\nRUN pip install -r /app/requirements.txt\nENV API_KEY=sk-1234-secret\nCMD [\"python\", \"/app/main.py\"]" },
          { t: 'code', lang: "dockerfile", caption: "Après : image épinglée, utilisateur non privilégié, aucun secret", code: "FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nRUN useradd --system --no-create-home appuser\nUSER appuser\nCMD [\"python\", \"main.py\"]" },
          {
            t: 'table',
            head: ["Changement", "Risque réduit"],
            rows: [
              ["`python:latest` devient `python:3.12-slim`", "Version imprévisible d’une construction à l’autre ; surface plus petite avec une image allégée (on peut aller plus loin en épinglant le condensat de l’image)"],
              ["`ENV API_KEY=...` supprimé", "Un secret écrit dans une couche reste lisible dans l’image par quiconque la récupère : il doit être fourni à l’exécution par la plateforme"],
              ["`USER appuser`", "Sans cela le processus tourne en root dans le conteneur : une faille donne des privilèges élevés"],
              ["`requirements.txt` copié avant le code", "Meilleur usage du cache de construction et dépendances identifiables"],
            ],
          },
        ],
      },
      {
        id: 'securitycontext',
        title: "Durcir un pod avec securityContext",
        blocks: [
          { t: 'p', text: "Kubernetes permet de restreindre ce qu’un conteneur peut faire directement dans le manifeste du pod. Voici un contexte de sécurité courant pour une application web ordinaire." },
          { t: 'code', lang: "yaml", caption: "Extrait d’un manifeste de déploiement", code: "spec:\n  containers:\n    - name: web\n      image: registre.exemple.org/web:1.4.2\n      securityContext:\n        runAsNonRoot: true\n        allowPrivilegeEscalation: false\n        readOnlyRootFilesystem: true\n        capabilities:\n          drop: [\"ALL\"]\n        seccompProfile:\n          type: RuntimeDefault" },
          {
            t: 'table',
            head: ["Paramètre", "Effet"],
            rows: [
              ["`runAsNonRoot: true`", "Kubernetes refuse de démarrer un conteneur dont l’utilisateur est root"],
              ["`allowPrivilegeEscalation: false`", "Un processus ne peut pas obtenir plus de droits que son parent (par exemple via un binaire SUID)"],
              ["`readOnlyRootFilesystem: true`", "Le système de fichiers est en lecture seule : un attaquant ne peut pas y déposer d’outil (prévoir un volume pour les écritures légitimes)"],
              ["`capabilities.drop: [\"ALL\"]`", "Retire toutes les capacités Linux ; on ne rajoute que celles qui sont nécessaires"],
              ["`seccompProfile: RuntimeDefault`", "Applique le filtre d’appels système par défaut du moteur de conteneurs"],
            ],
          },
          { t: 'callout', kind: 'tip', text: "Un conteneur « privilégié » (`privileged: true`) ou monté avec le socket du moteur de conteneurs équivaut à un accès administrateur sur la machine hôte. Ces cas doivent être des exceptions documentées et approuvées." },
        ],
      },
    ],
    useCases: [
      'Revue des manifestes Kubernetes d’une application avant sa mise en production.',
      'Investigation : un pod compromis peut-il atteindre l’hôte ou d’autres espaces de noms ?',
      'Définir l’image de base standard et les contrôles CI des images d’une organisation.',
    ],
    commonMistakes: [
      "Utiliser l’étiquette `latest` pour une image de production.",
      "Écrire un secret dans une instruction `ENV` ou `ARG` du Dockerfile.",
      'Considérer qu’un conteneur isole aussi fortement qu’une machine virtuelle.',
      'Lancer des conteneurs privilégiés ou monter le socket Docker « pour que ça marche ».',
      'Copier des secrets dans une image puis les supprimer dans une couche suivante.',
      'Laisser le réseau du cluster entièrement ouvert entre pods.',
      'Croire qu’un Secret Kubernetes est chiffré parce qu’il est en Base64.',
    ],
    bestPractices: [
      'Images minimales, non root, versions figées, analysées et signées.',
      'Profil Pod Security « restricted », capacités supprimées, système de fichiers en lecture seule.',
      'RBAC minimal, jetons de compte de service non montés par défaut.',
      'NetworkPolicy de refus par défaut.',
      'Chiffrement des secrets au repos et coffre externe.',
    ],
    keyPoints: [
      "Image épinglée, utilisateur non root, aucun secret dans les couches ; securityContext restrictif par défaut.",
      'Un conteneur partage le noyau de l’hôte : l’isolation repose sur namespaces, cgroups, capacités, seccomp.',
      '`privileged`, socket Docker et `hostPath` ouvrent la voie à l’hôte.',
      'Une image ne doit contenir aucun secret, même supprimé dans une couche ultérieure.',
      'Kubernetes : RBAC, Pod Security, NetworkPolicy, secrets chiffrés.',
    ],
  },
  practice: [
    {
      id: 'revue-manifeste',
      kind: 'analysis',
      labId: 'k8s-manifest-lab',
      title: 'Revue d’un manifeste de déploiement',
      context: [{ t: 'code', lang: 'yaml', code: "spec:\n  hostNetwork: true\n  containers:\n    - name: agent\n      image: monregistre/agent:latest\n      securityContext:\n        privileged: true\n      volumeMounts:\n        - name: docker\n          mountPath: /var/run/docker.sock\n  volumes:\n    - name: docker\n      hostPath: { path: /var/run/docker.sock }" }],
      steps: ['Lister chaque risque.', 'Décrire comment un attaquant ayant compromis ce conteneur atteint l’hôte.', 'Proposer une version durcie ou une alternative.'],
    },
    {
      id: 'netpol',
      kind: 'guided',
      title: 'Écrire une NetworkPolicy',
      context: [{ t: 'p', text: 'Espace de noms `boutique` : le pod `front` doit joindre le pod `api` sur le port 8080 ; `api` doit joindre `db` sur 5432 ; rien d’autre.' }],
      steps: ['Écrire une politique de refus par défaut.', 'Ouvrir front → api et api → db.', 'Vérifier ce qui reste interdit.'],
    },
    {
      id: 'audit-k8s',
      kind: 'analysis',
      title: 'Analyse : un extrait du journal d’audit Kubernetes',
      context: [
        { t: 'code', lang: 'text', code: 'Heure (UTC)  Utilisateur / compte                       Action                                             Ressource\n03:02:11     system:serviceaccount:boutique:web      create pods/exec                                   pod web-5c9d (espace boutique)\n03:03:40     system:serviceaccount:boutique:web      get secrets (liste complète)                       espace boutique\n03:05:12     system:serviceaccount:boutique:web      create pods                                        pod « maintenance » (privileged: true, hostPath: /)\n03:07:55     system:serviceaccount:boutique:web      create clusterrolebindings                         binding « maintenance-admin » (cluster-admin)\n03:09:30     (nœud worker-3)                         connexion sortante du pod maintenance              198.51.100.77:443\n\nLe compte de service « web » a normalement le droit de lire une seule ConfigMap.' },
      ],
      steps: ['Décrire l’enchaînement et ce qu’il révèle des droits du compte de service.', 'Indiquer ce qu’on préserve, puis les actions de confinement, dans l’ordre.', 'Proposer les mesures qui auraient évité ou détecté l’incident.'],
    },
  ],
  questions,
  resources: [
    { title: 'Pod Security Standards', source: 'Documentation Kubernetes', url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/' },
    { title: 'CIS Kubernetes Benchmark', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/benchmark/kubernetes' },
    { title: 'Kubernetes Hardening Guide', source: 'NSA / CISA', url: 'https://media.defense.gov/2022/Aug/29/2003066362/-1/-1/0/CTR_KUBERNETES_HARDENING_GUIDANCE_1.2_20220829.PDF' },
    { title: 'Recommandations de sécurité relatives au déploiement de conteneurs Docker', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-au-deploiement-de-conteneurs-docker' },
  ],
};
