import type { CourseBody } from '../../types';

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
    ],
    useCases: [
      'Revue des manifestes Kubernetes d’une application avant sa mise en production.',
      'Investigation : un pod compromis peut-il atteindre l’hôte ou d’autres espaces de noms ?',
      'Définir l’image de base standard et les contrôles CI des images d’une organisation.',
    ],
    commonMistakes: [
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
  ],
  questions: [
    { id: 'k8s-q1', type: 'single', difficulty: 1, skills: ['l-k8s-isolation'], prompt: 'Quelle différence fondamentale distingue un conteneur d’une machine virtuelle ?', options: [{ id: 'a', text: 'Le conteneur partage le noyau de l’hôte' }, { id: 'b', text: 'Le conteneur a son propre noyau' }, { id: 'c', text: 'La machine virtuelle n’a pas de système d’exploitation' }, { id: 'd', text: 'Aucune' }] },
    { id: 'k8s-q2', type: 'multi', difficulty: 2, skills: ['l-k8s-isolation'], prompt: 'Quels mécanismes du noyau Linux participent à l’isolation des conteneurs ?', options: [{ id: 'a', text: 'Les espaces de noms' }, { id: 'b', text: 'Les cgroups' }, { id: 'c', text: 'seccomp' }, { id: 'd', text: 'Le BIOS' }] },
    { id: 'k8s-q3', type: 'truefalse', difficulty: 2, skills: ['l-k8s-isolation'], prompt: 'Monter le socket Docker de l’hôte dans un conteneur permet à ce conteneur de prendre le contrôle de l’hôte.' },
    { id: 'k8s-q4', type: 'short', difficulty: 2, skills: ['l-k8s-isolation'], prompt: 'Quel paramètre de securityContext donne à un conteneur quasiment tous les privilèges de l’hôte ? (un mot)' },
    { id: 'k8s-q5', type: 'single', difficulty: 2, skills: ['l-k8s-images'], prompt: 'Un Dockerfile copie un fichier .env puis le supprime dans l’instruction suivante. Le secret est-il protégé ?', options: [{ id: 'a', text: 'Oui, il a été supprimé' }, { id: 'b', text: 'Non, il reste lisible dans la couche créée par la copie' }, { id: 'c', text: 'Oui, si l’image est privée' }, { id: 'd', text: 'Oui, car les couches sont chiffrées' }] },
    { id: 'k8s-q6', type: 'multi', difficulty: 2, skills: ['l-k8s-images'], prompt: 'Quelles pratiques améliorent la sécurité d’une image ?', options: [{ id: 'a', text: 'Image de base minimale (distroless, slim)' }, { id: 'b', text: 'Utilisateur non root' }, { id: 'c', text: 'Étiquette `latest` pour avoir toujours la dernière version' }, { id: 'd', text: 'Analyse des vulnérabilités en CI' }] },
    { id: 'k8s-q7', type: 'truefalse', difficulty: 1, skills: ['l-k8s-images'], prompt: 'Épingler une image par son empreinte `@sha256:…` garantit que le même contenu est déployé à chaque fois.' },
    { id: 'k8s-q8', type: 'short', difficulty: 2, skills: ['l-k8s-images'], prompt: 'Quelle commande Docker affiche l’historique des couches d’une image ? (deux mots)' },
    { id: 'k8s-q9', type: 'single', difficulty: 2, skills: ['l-k8s-cluster'], prompt: 'Par défaut, sans NetworkPolicy, quels pods d’un cluster Kubernetes peuvent communiquer entre eux ?', options: [{ id: 'a', text: 'Aucun' }, { id: 'b', text: 'Tous' }, { id: 'c', text: 'Seulement ceux du même nœud' }, { id: 'd', text: 'Seulement ceux du même espace de noms' }] },
    { id: 'k8s-q10', type: 'truefalse', difficulty: 2, skills: ['l-k8s-cluster'], prompt: 'Un objet Secret Kubernetes est chiffré par défaut puisque ses valeurs sont en Base64.' },
    { id: 'k8s-q11', type: 'multi', difficulty: 3, skills: ['l-k8s-cluster'], prompt: 'Quelles permissions RBAC sont particulièrement sensibles ?', options: [{ id: 'a', text: '`get` sur les `secrets`' }, { id: 'b', text: '`create` sur les `pods`' }, { id: 'c', text: '`get` sur les `configmaps` d’un espace de noms de démonstration' }, { id: 'd', text: '`bind` ou `escalate` sur les rôles' }] },
    { id: 'k8s-q12', type: 'short', difficulty: 3, skills: ['l-k8s-cluster'], prompt: 'Quel est le nom du profil Pod Security Standards le plus strict ?' },
    { id: 'k8s-q13', type: 'single', difficulty: 3, skills: ['l-k8s-cluster', 'l-k8s-isolation'], prompt: 'Pourquoi `create pods` dans un espace de noms est-il dangereux même sans accès aux Secrets ?', options: [{ id: 'a', text: 'Parce qu’un pod peut monter les Secrets et utiliser les comptes de service de cet espace de noms' }, { id: 'b', text: 'Parce que cela consomme du CPU' }, { id: 'c', text: 'Ce n’est pas dangereux' }, { id: 'd', text: 'Parce que cela supprime les journaux' }] },
    { id: 'k8s-q14', type: 'open', difficulty: 3, skills: ['l-k8s-isolation', 'l-k8s-cluster'], prompt: 'Analysez le manifeste (hostNetwork, privileged, socket Docker monté, image `latest`) : risques, chemin d’évasion et version durcie.' },
    { id: 'k8s-q15', type: 'open', difficulty: 3, skills: ['l-k8s-cluster'], prompt: 'Décrivez les NetworkPolicy nécessaires pour que front joigne api:8080 et api joigne db:5432, et rien d’autre, dans l’espace de noms `boutique`.' },
    { id: 'k8s-q16', type: 'single', difficulty: 1, skills: ['l-k8s-images', 'l-k8s-cluster'], prompt: 'Quel réglage empêche un processus du conteneur d’obtenir plus de privilèges que son parent (setuid) ?', options: [{ id: 'a', text: '`allowPrivilegeEscalation: false`' }, { id: 'b', text: '`hostPID: true`' }, { id: 'c', text: '`privileged: true`' }, { id: 'd', text: '`replicas: 1`' }] },
  ],
  resources: [
    { title: 'Pod Security Standards', source: 'Documentation Kubernetes', url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/' },
    { title: 'CIS Kubernetes Benchmark', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/benchmark/kubernetes' },
    { title: 'Kubernetes Hardening Guide', source: 'NSA / CISA', url: 'https://media.defense.gov/2022/Aug/29/2003066362/-1/-1/0/CTR_KUBERNETES_HARDENING_GUIDANCE_1.2_20220829.PDF' },
    { title: 'Recommandations de sécurité relatives au déploiement de conteneurs Docker', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-au-deploiement-de-conteneurs-docker' },
  ],
};
