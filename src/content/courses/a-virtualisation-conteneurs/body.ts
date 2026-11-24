import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'a-virtualisation-conteneurs',
  lesson: {
    intro:
      "Isoler des charges de travail est l'une des idées les plus utiles de l'informatique moderne : plusieurs services partagent une même machine sans se gêner, et sans qu'un incident sur l'un ne se propage aux autres. Deux techniques dominent : la **virtualisation**, qui simule des machines entières, et la **conteneurisation**, qui isole des processus sur un même noyau. Ce cours explique ce que chacune protège, ce qu'elle laisse exposé, et comment éviter les configurations qui annulent l'isolation. Il prépare les cours sur le cloud (module L) et sur Linux (module C).",
    sections: [
      {
        id: 'virtualisation',
        title: 'Machines virtuelles et hyperviseurs',
        blocks: [
          { t: 'p', text: "La **virtualisation** permet de faire fonctionner plusieurs machines virtuelles (VM) sur un même matériel. Chaque VM croit disposer d'un ordinateur complet : elle a son système d'exploitation invité, avec **son propre noyau**, ses applications et ses disques virtuels. Le logiciel qui crée et contrôle ces machines est l'**hyperviseur**." },
          { t: 'def', term: 'Hyperviseur', text: "Logiciel (ou fonction du noyau) qui répartit le processeur, la mémoire, les disques et le réseau entre des machines virtuelles, et les isole les unes des autres. Les processeurs modernes l'aident par des extensions matérielles (Intel VT-x, AMD-V)." },
          {
            t: 'table',
            caption: 'Deux familles d’hyperviseurs',
            head: ['Type', 'Position', 'Exemples', 'Remarque de sécurité'],
            rows: [
              ['Type 1', 'Directement sur le matériel', 'VMware ESXi, Microsoft Hyper-V, Xen, KVM', 'Surface réduite ; la frontière entre les deux types est parfois discutée (KVM fait du noyau Linux un hyperviseur)'],
              ['Type 2', 'Application sur un système hôte', 'VirtualBox, VMware Workstation', 'Hérite des failles du système hôte, qui s’ajoutent à celles de l’hyperviseur'],
            ],
          },
          { t: 'def', term: 'Instantané (snapshot)', text: "Sauvegarde de l'état d'une VM à un instant donné (disque et, souvent, mémoire vive). Pratique pour revenir en arrière, mais le contenu de la mémoire (clés, mots de passe) y est enregistré : un instantané se protège comme une donnée sensible." },
          { t: 'def', term: 'Évasion de machine virtuelle', text: "Attaque dans laquelle un code exécuté dans une VM exploite une faille de l'hyperviseur ou de ses périphériques virtuels pour atteindre l'hôte ou les autres VM. Rare mais grave ; exemple historique : VENOM (2015), faille dans le contrôleur de disquette virtuel de QEMU." },
          { t: 'callout', kind: 'warn', text: "L'hyperviseur et sa console d'administration sont des cibles de très haute valeur : qui les contrôle peut arrêter, copier ou lire toutes les machines hébergées. L'administration se fait depuis un réseau dédié, avec authentification forte et journalisation." },
        ],
      },
      {
        id: 'conteneurs',
        title: 'Les conteneurs : isoler sans machine virtuelle',
        blocks: [
          { t: 'p', text: "Un **conteneur** n'est pas une petite machine virtuelle : c'est un ou plusieurs **processus** ordinaires, que le noyau isole des autres grâce à des fonctions dédiées. Il n'embarque **pas de noyau** : il utilise celui de l'hôte. Cela le rend léger (démarrage en une fraction de seconde, quelques mégaoctets) mais change profondément la nature de l'isolation." },
          {
            t: 'table',
            caption: 'Machine virtuelle et conteneur',
            head: ['Critère', 'Machine virtuelle', 'Conteneur'],
            rows: [
              ['Noyau', 'Propre à chaque VM', 'Partagé avec l’hôte'],
              ['Poids et démarrage', 'Gigaoctets, secondes à minutes', 'Mégaoctets, fraction de seconde'],
              ['Frontière d’isolation', 'L’hyperviseur', 'Le noyau de l’hôte'],
              ['Système invité différent de l’hôte', 'Possible', 'Non (même noyau)'],
            ],
          },
          { t: 'def', term: 'Conteneur', text: "Processus isolé, avec sa vue privée des ressources (processus, réseau, fichiers) et des limites de consommation, mais sur le noyau de l'hôte. Sous Windows, on peut aussi isoler un conteneur dans une micro-VM (isolation Hyper-V)." },
          { t: 'callout', kind: 'key', text: "Parce que le noyau est partagé, une faille du noyau exploitable depuis un conteneur atteint l'hôte et tous les autres conteneurs. L'isolation d'un conteneur est donc plus fragile que celle d'une VM : on la durcit, et on adapte le choix à la confiance accordée au code." },
        ],
      },
      {
        id: 'isolation',
        title: 'Les mécanismes d’isolation du noyau',
        blocks: [
          { t: 'p', text: "L'isolation d'un conteneur est la somme de plusieurs mécanismes du noyau Linux. Aucun ne suffit seul ; c'est leur combinaison, correctement configurée, qui protège." },
          {
            t: 'table',
            head: ['Mécanisme', 'Rôle', 'Exemple'],
            rows: [
              ['Namespaces', 'Donnent au processus une vue privée d’une catégorie de ressources', 'PID, réseau, montages, utilisateurs'],
              ['cgroups', 'Mesurent et plafonnent les ressources consommées', 'Limite de mémoire ou de processeur'],
              ['Capabilities', 'Découpent les pouvoirs de root en privilèges distincts', 'Lier un port bas, configurer le réseau'],
              ['seccomp', 'Filtre les appels système autorisés', 'Interdire un appel rarement utile'],
              ['Contrôle d’accès obligatoire (SELinux, AppArmor)', 'Applique une politique centrale que le processus ne peut pas modifier', 'Restreindre l’accès à certains fichiers'],
            ],
          },
          { t: 'def', term: 'Mode privilégié', text: "Lancement d'un conteneur avec presque tous les droits et l'accès aux périphériques de l'hôte (`--privileged`). Il supprime l'essentiel des protections : un code malveillant sort facilement du conteneur." },
          { t: 'def', term: 'Socket du démon', text: "Point d'entrée par lequel on pilote le moteur de conteneurs (`/var/run/docker.sock`). Le monter dans un conteneur donne à celui-ci le contrôle du moteur, donc, de fait, les droits root de l'hôte." },
          {
            t: 'example',
            title: 'Lancement durci d’un conteneur',
            blocks: [
              { t: 'code', lang: 'bash', code: 'docker run --read-only --cap-drop ALL \\\n  --security-opt no-new-privileges \\\n  --user 10001:10001 --memory 256m \\\n  -p 127.0.0.1:8080:8080 \\\n  registry.example.org/app@sha256:<digest>' },
              { t: 'p', text: "Ce lancement applique plusieurs principes : système de fichiers en lecture seule, aucune capability, interdiction de gagner des privilèges, utilisateur non root, mémoire plafonnée, port lié à l'interface locale et image référencée par son digest. On n'ajoute une permission que si l'application en a démontré le besoin." },
            ],
          },
          { t: 'callout', kind: 'tip', text: "Le mode « rootless » (Podman, Docker rootless) fait tourner le moteur lui-même sans les droits root : même une évasion n'offre alors que les droits d'un utilisateur ordinaire." },
        ],
      },
      {
        id: 'images',
        title: 'Images, registres et chaîne d’approvisionnement',
        blocks: [
          { t: 'p', text: "Un conteneur naît d'une **image** : un modèle en lecture seule, composé de **couches** empilées (système de base, bibliothèques, application). Les images sont publiées dans un **registre**, puis téléchargées et exécutées. Comme tout logiciel téléchargé, elles font partie de la chaîne d'approvisionnement." },
          { t: 'def', term: 'Tag et digest', text: "Le **tag** (`app:1.4`, `app:latest`) est une étiquette que son propriétaire peut déplacer vers une autre image. Le **digest** (`app@sha256:…`) est l'empreinte du contenu : il identifie une image précise et immuable." },
          { t: 'def', term: 'SBOM', text: "Inventaire détaillé des composants et dépendances d'un logiciel ou d'une image (formats SPDX, CycloneDX). Il permet de retrouver rapidement les images touchées quand une vulnérabilité est annoncée sur une bibliothèque." },
          {
            t: 'example',
            title: 'Le secret qui reste dans l’image',
            blocks: [
              { t: 'code', lang: 'text', code: 'COPY .env /app/.env      # couche 1 : le secret est ajouté\nRUN npm ci               # couche 2\nRUN rm /app/.env         # couche 3 : le fichier disparaît de la vue finale' },
              { t: 'p', text: "Le fichier a disparu de l'image finale, mais il existe toujours dans la couche 1, que n'importe qui peut extraire. Un secret copié dans une image doit être considéré comme **compromis** : on le révoque et on le fournit désormais à l'exécution, par un mécanisme dédié." },
            ],
          },
          { t: 'list', items: ["Partir d'une image de base **minimale** et officielle, mise à jour régulièrement.", 'Référencer les images par leur **digest** et reconstruire régulièrement pour appliquer les correctifs.', 'Analyser les images avec un **scanner de vulnérabilités** et produire une **SBOM**.', 'Signer les images et vérifier la signature avant le déploiement (par exemple avec Sigstore).', "Ne jamais inclure de secret ; fournir les secrets à l'exécution."] },
        ],
      },
      {
        id: 'orchestration',
        title: 'Orchestration et réseau des conteneurs',
        blocks: [
          { t: 'p', text: "Quand les conteneurs se comptent par dizaines ou par milliers, on les confie à un **orchestrateur**. Il décide où lancer chaque conteneur, les redémarre en cas de panne, les met à l'échelle et gère leur réseau et leurs secrets. Le plus répandu est Kubernetes, étudié en détail dans le module L." },
          { t: 'def', term: 'Orchestrateur', text: "Logiciel qui planifie et supervise des conteneurs sur un ensemble de machines. Il possède sa propre surface d'attaque : API d'administration, droits des composants, secrets, réseau interne." },
          { t: 'def', term: 'Port publié', text: "Port d'un conteneur rendu accessible sur l'interface de la machine hôte (`-p 8080:8080`). Sans filtrage ni liaison à `127.0.0.1`, le service est joignable depuis tout le réseau." },
          {
            t: 'table',
            head: ['Bonne pratique', 'Pourquoi'],
            rows: [
              ['Segmenter les conteneurs par réseaux ou politiques', 'Limiter les déplacements latéraux après une compromission'],
              ['N’exposer que les ports nécessaires', 'Réduire la surface d’attaque'],
              ['Limiter les ressources (mémoire, processeur)', 'Empêcher l’épuisement des ressources de l’hôte'],
              ['Journaliser et surveiller l’exécution', 'Détecter un comportement anormal d’un conteneur'],
            ],
          },
          { t: 'callout', kind: 'info', text: "Un orchestrateur ne remplace pas le durcissement de chaque conteneur : il s'y ajoute. Une plateforme est aussi sûre que son maillon le moins bien configuré." },
        ],
      },
      {
        id: 'choix',
        title: 'Choisir l’isolation adaptée',
        blocks: [
          { t: 'p', text: "Il n'existe pas de meilleure technique en soi : le choix dépend de la **confiance accordée au code** exécuté et du coût que l'on accepte. Plus le code est inconnu ou hostile, plus la frontière doit être forte." },
          {
            t: 'table',
            head: ['Situation', 'Isolation recommandée', 'Raison'],
            rows: [
              ['Application interne développée par l’équipe', 'Conteneur durci', 'Code maîtrisé, légèreté et rapidité de déploiement'],
              ['Code de clients inconnus (multi-locataire)', 'VM ou micro-VM par client', 'Frontière plus forte que le noyau partagé'],
              ['Analyse d’un malware', 'VM jetable, isolée du réseau de production', 'Restauration facile, pas de contact avec la production'],
              ['Service exposé et critique', 'Conteneurs dans des VM, segmentés', 'Défense en profondeur : plusieurs frontières successives'],
            ],
          },
          { t: 'def', term: 'Micro-VM et noyau intercepté', text: "Approches intermédiaires qui rapprochent la légèreté des conteneurs de l'isolation des VM : micro-VM (Firecracker, Kata Containers) avec un noyau dédié, ou noyau applicatif intercepté (gVisor)." },
          { t: 'callout', kind: 'key', text: "Aucune isolation n'est absolue. On combine les couches (conteneur durci, VM, segmentation réseau, supervision) pour qu'une défaillance unique ne donne pas accès à tout." },
        ],
      },
    ],
    useCases: [
      "Construire un laboratoire d'analyse de malware dans des machines virtuelles jetables, sans accès au réseau de production.",
      'Examiner un lancement de conteneur (`docker run`) et repérer les options qui annulent l’isolation.',
      "Choisir une isolation pour héberger le code de plusieurs clients ou pour déployer une application interne.",
    ],
    commonMistakes: [
      'Croire qu’un conteneur est aussi isolé qu’une machine virtuelle.',
      'Lancer un conteneur en mode privilégié ou monter le socket du démon « par commodité ».',
      'Exécuter les applications du conteneur en root et avec toutes les capabilities.',
      'Utiliser l’étiquette `latest` ou une image d’origine inconnue.',
      'Copier un secret dans une image, en pensant qu’une suppression ultérieure l’efface.',
      'Publier tous les ports d’un conteneur sans filtrage.',
    ],
    bestPractices: [
      'Choisir l’isolation selon la confiance accordée au code (conteneur durci, VM, micro-VM).',
      'Retirer les capabilities inutiles, exécuter en utilisateur non root, système de fichiers en lecture seule.',
      'Référencer les images par digest, les analyser, les signer, produire une SBOM et les reconstruire régulièrement.',
      'Fournir les secrets à l’exécution, jamais dans l’image.',
      'Protéger l’hyperviseur et l’orchestrateur : réseau d’administration, authentification forte, journalisation.',
      'Segmenter le réseau et n’exposer que les ports nécessaires.',
    ],
    keyPoints: [
      'Une VM a son propre noyau ; un conteneur partage celui de l’hôte.',
      'L’isolation d’un conteneur repose sur namespaces, cgroups, capabilities, seccomp et contrôle d’accès obligatoire.',
      'Le mode privilégié et le socket du démon annulent l’isolation.',
      'Une image est une chaîne d’approvisionnement : tag, digest, secrets, SBOM, analyse.',
      'Plus le code est hostile, plus la frontière d’isolation doit être forte ; on combine les couches.',
    ],
  },
  practice: [
    {
      id: 'analyser-docker-run',
      kind: 'analysis',
      title: 'Auditer un lancement de conteneur',
      context: [
        { t: 'p', text: 'Un collègue vous soumet cette commande de déploiement pour une application web interne :' },
        { t: 'code', lang: 'bash', code: 'docker run -d --privileged \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v /:/hote \\\n  -p 8080:8080 \\\n  registry.example.org/app:latest' },
      ],
      steps: ['Repérer au moins quatre éléments dangereux et dire pourquoi.', 'Expliquer ce qu’un attaquant qui compromet l’application peut faire.', 'Proposer une version durcie de la commande, avec une justification pour chaque changement.'],
    },
    {
      id: 'choisir-isolation',
      kind: 'case',
      title: 'Cas pratique : choisir l’isolation',
      context: [{ t: 'p', text: 'Une société héberge trois charges : (A) le site vitrine développé en interne, (B) une plateforme qui exécute des scripts envoyés par des clients inconnus, (C) un poste d’analyse de pièces jointes suspectes pour le SOC.' }],
      steps: ['Choisir une isolation pour chacune des trois charges et justifier le choix.', 'Indiquer, pour chacune, une mesure complémentaire de défense en profondeur.', 'Dire quelle surveillance vous mettriez en place.'],
    },
  ],
  questions,
  resources: [
    { title: 'NIST SP 800-125 — Guide to Security for Full Virtualization Technologies', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/125/final' },
    { title: 'NIST SP 800-190 — Application Container Security Guide', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/190/final' },
    { title: 'Docker security', source: 'Docker Documentation', url: 'https://docs.docker.com/engine/security/' },
    { title: 'namespaces(7) — Linux manual page', source: 'man7.org', url: 'https://man7.org/linux/man-pages/man7/namespaces.7.html' },
  ],
};
