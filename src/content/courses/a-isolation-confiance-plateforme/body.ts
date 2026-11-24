import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'a-isolation-confiance-plateforme',
  lesson: {
    intro:
      "Les cours précédents du module ont montré comment une machine démarre, comment un programme s'exécute et comment on l'isole. Ce cours prend la place de l'architecte : à qui, et à quoi, fait-on confiance ? Quelle frontière arrête quelle menace ? Que reste-t-il exposé quand tout fonctionne comme prévu ? Il rassemble les notions qui structurent la conception d'une plateforme sûre : base de confiance, modèles de contrôle d'accès, chaîne de confiance matérielle, limites de l'isolation et principes de conception éprouvés. Il prépare les modules sur le cloud (L), l'identité (O) et la recherche (P).",
    sections: [
      {
        id: 'tcb',
        title: 'La base de confiance et le moniteur de référence',
        blocks: [
          { t: 'p', text: "Toute sécurité repose sur des éléments auxquels on est obligé de faire confiance. Les identifier, puis les réduire, est la première tâche d'un architecte." },
          { t: 'def', term: 'Base de confiance (TCB)', text: "Ensemble des composants matériels, micrologiciels et logiciels dont la défaillance peut compromettre la politique de sécurité du système. Ce qui n'en fait pas partie ne peut pas, en principe, la violer. La TCB dépend de la propriété visée : pour un conteneur, elle inclut le noyau de l'hôte." },
          { t: 'def', term: 'Moniteur de référence', text: "Mécanisme qui arbitre chaque accès d'un sujet (processus, utilisateur) à un objet (fichier, périphérique). Il doit être **toujours invoqué** (médiation complète), **inviolable** et **assez petit pour être vérifié**. Le noyau et son module de sécurité en tiennent le rôle." },
          {
            t: 'table',
            caption: 'Deux philosophies de noyau',
            head: ['Approche', 'Principe', 'Conséquence pour la TCB'],
            rows: [
              ['Noyau monolithique', 'Pilotes, systèmes de fichiers et réseau dans le noyau', 'TCB très grande : une faille de pilote compromet tout'],
              ['Micro-noyau', 'Noyau minimal ; le reste en services isolés en espace utilisateur', 'TCB réduite, plus facile à vérifier'],
            ],
          },
          { t: 'callout', kind: 'key', text: "Le micro-noyau seL4, d'une dizaine de milliers de lignes de code, a fait l'objet d'une preuve formelle de conformité à sa spécification. Il montre ce que peut donner une TCB assez petite pour être vérifiée, au prix d'un écosystème moins riche." },
        ],
      },
      {
        id: 'modeles',
        title: 'Les modèles de contrôle d’accès',
        blocks: [
          { t: 'p', text: "Un modèle de contrôle d'accès exprime qui peut faire quoi sur quoi. Le choix du modèle détermine ce qu'un compte compromis peut obtenir." },
          {
            t: 'table',
            head: ['Modèle', 'Principe', 'Exemple'],
            rows: [
              ['DAC (discrétionnaire)', 'Le propriétaire d’un objet décide qui y accède', 'Permissions Unix, ACL Windows'],
              ['MAC (obligatoire)', 'Une politique centrale s’impose, même au propriétaire', 'SELinux, AppArmor'],
              ['RBAC (par rôles)', 'Les droits sont attachés à des rôles, affectés aux utilisateurs', 'Rôles d’une base de données, d’un cloud'],
              ['Capacités', 'Détenir une référence infalsifiable vers l’objet vaut autorisation', 'Descripteurs de fichiers, systèmes à capacités'],
            ],
          },
          { t: 'def', term: 'Bell-LaPadula', text: "Modèle de **confidentialité** : un sujet ne lit pas des informations d'un niveau supérieur au sien et n'écrit pas vers un niveau inférieur (« pas de lecture vers le haut, pas d'écriture vers le bas »). Il empêche qu'une information secrète fuite vers un niveau moins protégé." },
          { t: 'def', term: 'Biba', text: "Modèle d'**intégrité**, dual du précédent : pas de lecture vers le bas, pas d'écriture vers le haut. Il empêche qu'une source peu fiable corrompe des données de confiance." },
          {
            t: 'example',
            title: 'Un contexte SELinux',
            blocks: [
              { t: 'code', lang: 'text', code: '-rw-r--r--. root root system_u:object_r:httpd_sys_content_t:s0 index.html' },
              { t: 'p', text: "Le contexte se lit « utilisateur : rôle : type : niveau ». Le **type** `httpd_sys_content_t` désigne un contenu web. La politique autorise le processus du serveur web (type `httpd_t`) à lire ce type, mais pas, par exemple, les fichiers d'un utilisateur ou de la base de données, même si les permissions Unix le permettraient." },
            ],
          },
          { t: 'callout', kind: 'info', text: "Le MAC ajoute une couche au DAC, il ne le remplace pas. Il limite les dégâts d'un service compromis, même exécuté en administrateur, parce que la politique le confine à ce que sa fonction exige." },
        ],
      },
      {
        id: 'confiance-demarrage',
        title: 'La chaîne de confiance matérielle',
        blocks: [
          { t: 'p', text: "Une plateforme n'est digne de confiance que si l'on sait dans quel état elle a démarré. La **chaîne de confiance** part d'une **racine de confiance** minimale, souvent un code non modifiable du processeur, qui vérifie le composant suivant, qui vérifie le suivant, jusqu'au système d'exploitation." },
          {
            t: 'table',
            head: ['Mécanisme', 'Ce qu’il apporte', 'Limite'],
            rows: [
              ['Secure Boot', 'Refuse d’exécuter ce qui n’est pas signé par une clé de confiance', 'Un composant signé mais vulnérable reste accepté tant qu’il n’est pas révoqué'],
              ['Démarrage mesuré (TPM)', 'Enregistre des empreintes de chaque étape dans des registres (PCR)', 'Enregistre sans bloquer : il faut un vérifieur'],
              ['Attestation à distance', 'Prouve à un tiers l’état mesuré de la machine', 'Dépend de la qualité des valeurs de référence'],
              ['Environnements d’exécution de confiance (TEE)', 'Isolent du code et des données du système, y compris de l’hôte', 'Ne corrigent pas les failles applicatives ; exposés aux canaux auxiliaires'],
            ],
          },
          { t: 'def', term: 'PCR (registre de configuration de plateforme)', text: "Registre du TPM qui ne peut qu'être **étendu** : la nouvelle valeur est le hachage de l'ancienne concaténée à la nouvelle mesure. Un logiciel ne peut donc ni effacer ni falsifier l'historique du démarrage." },
          { t: 'def', term: 'Attestation à distance', text: "Le TPM signe les mesures avec une clé d'attestation. Un vérifieur les compare à des valeurs attendues avant d'accorder un secret, un jeton ou l'accès au réseau." },
          { t: 'callout', kind: 'warn', text: "En 2023, le bootkit BlackLotus a contourné Secure Boot en exploitant un gestionnaire de démarrage signé mais vulnérable. La confiance se maintient par la **révocation** des composants vulnérables (liste dbx), et pas seulement par la vérification des signatures." },
        ],
      },
      {
        id: 'isolation-avancee',
        title: 'Isolation matérielle et canaux auxiliaires',
        blocks: [
          { t: 'p', text: "Les frontières logicielles s'appuient sur des protections du matériel. Quand le matériel est partagé, il devient lui-même un canal de fuite." },
          {
            t: 'table',
            head: ['Protection', 'Rôle'],
            rows: [
              ['MMU', 'Isole les espaces d’adressage des processus et contrôle les droits de chaque page'],
              ['IOMMU', 'Restreint les accès mémoire directs (DMA) des périphériques, comme une MMU pour les périphériques'],
              ['SMEP / SMAP', 'Empêchent le noyau d’exécuter du code (SMEP) ou d’accéder à des données (SMAP) situés en espace utilisateur'],
              ['Processus en bac à sable', 'Un navigateur confine chaque site dans un processus aux droits restreints'],
              ['Landlock, seccomp', 'Un processus restreint lui-même ses accès aux fichiers ou aux appels système'],
            ],
          },
          { t: 'def', term: 'Canal auxiliaire', text: "Fuite d'information par un effet physique partagé (temps d'accès aux caches, consommation, exécution spéculative) plutôt que par une interface logicielle. Spectre et Meltdown (2018) en sont les exemples les plus connus : ils lisent des données auxquelles le programme n'a pas droit en observant les caches." },
          { t: 'callout', kind: 'warn', text: "Une isolation logicielle parfaite ne suffit pas si la victime et l'attaquant partagent un cœur ou un cache. En cloud, on réserve des cœurs ou des machines aux charges sensibles, on applique les correctifs de micrologiciel et de système et l'on accepte un coût en performance." },
        ],
      },
      {
        id: 'architecture',
        title: 'Principes de conception d’une architecture sûre',
        blocks: [
          { t: 'p', text: "En 1975, Saltzer et Schroeder ont dégagé des principes de conception qui restent la référence. Ils servent de grille de lecture pour juger une architecture." },
          {
            t: 'table',
            head: ['Principe', 'Idée'],
            rows: [
              ['Économie de mécanisme', 'Garder les mécanismes simples et petits'],
              ['Protection par défaut', 'Refuser tant que l’accès n’est pas explicitement accordé'],
              ['Médiation complète', 'Vérifier chaque accès à chaque objet'],
              ['Conception ouverte', 'La sécurité ne repose pas sur le secret du mécanisme, seulement sur celui des clés'],
              ['Séparation des privilèges', 'Exiger plusieurs conditions pour une action sensible'],
              ['Moindre privilège', 'N’accorder que les droits nécessaires à la tâche'],
              ['Mécanisme commun minimal', 'Limiter ce que les composants partagent (noyau, bibliothèques, état)'],
              ['Acceptabilité psychologique', 'Une protection trop pénible est contournée par ses utilisateurs'],
            ],
          },
          { t: 'def', term: 'Défense en profondeur', text: "Empilement de protections indépendantes, de sorte que la défaillance d'une seule ne donne pas accès à tout. C'est la conséquence pratique du principe de mécanisme commun minimal et de l'idée que toute frontière peut tomber." },
          {
            t: 'example',
            title: 'Héberger du code de clients inconnus',
            blocks: [
              { t: 'list', items: ['**Frontière** : une micro-VM par client, avec son propre noyau, plutôt qu’un noyau partagé.', '**Clés** : dans un module matériel ou un service de signature sur un hôte séparé, avec une interface minimale.', '**Chaîne de confiance** : démarrage vérifié et mesuré, attestation avant l’admission d’un hôte.', '**Réseau** : segmentation, aucun accès des charges clientes au plan d’administration.', '**Supervision** : journaux d’hyperviseur, détection des évasions, rotation des clés.'] },
              { t: 'p', text: "Chaque choix applique un principe : mécanisme commun minimal (noyaux séparés), moindre privilège (aucun accès à l'administration), protection par défaut (rien n'est joignable sans règle explicite) et défense en profondeur." },
            ],
          },
        ],
      },
      {
        id: 'menaces',
        title: 'Modéliser la menace et arbitrer les compromis',
        blocks: [
          { t: 'p', text: "Aucune architecture n'est sûre dans l'absolu : elle l'est face à une menace précise. Le **modèle de menace** liste ce que l'on protège (actifs), qui l'attaque (capacités supposées), par quels chemins (surface d'attaque) et où passent les frontières de confiance." },
          {
            t: 'table',
            caption: 'Attaque, barrière franchie et réponse',
            head: ['Attaque', 'Barrière franchie', 'Réponses'],
            rows: [
              ['Évasion d’un conteneur par faille du noyau', 'Noyau partagé', 'Correctifs, micro-VM ou noyau intercepté, réduction des appels système'],
              ['Évasion d’une machine virtuelle', 'Hyperviseur', 'Correctifs, moins de périphériques virtuels, segmentation'],
              ['Bootkit signé mais vulnérable', 'Chaîne de démarrage', 'Révocation, démarrage mesuré, attestation'],
              ['Périphérique malveillant (DMA)', 'Bus de périphériques', 'IOMMU, contrôle des ports'],
              ['Canal auxiliaire entre locataires', 'Matériel partagé', 'Cœurs ou machines dédiés, correctifs'],
            ],
          },
          { t: 'def', term: 'Compromis de sécurité', text: "Renforcer l'isolation coûte de la performance, de la mémoire, de la compatibilité et de la complexité d'exploitation. Un architecte justifie chaque couche par la menace qu'elle arrête et accepte de ne pas tout couvrir." },
          { t: 'callout', kind: 'key', text: "Raisonnement type : quel actif ? quel adversaire ? quelle frontière l'arrête ? qu'est-ce qui fait partie de la TCB ? que se passe-t-il si cette frontière tombe ? La réponse à la dernière question dit s'il faut une seconde barrière." },
        ],
      },
    ],
    useCases: [
      "Concevoir l'hébergement de charges de clients différents : choisir les frontières d'isolation, la protection des clés et la chaîne de confiance.",
      'Évaluer une proposition d’architecture en identifiant sa TCB et ce que devient la sécurité si un composant tombe.',
      'Configurer un contrôle d’accès obligatoire (SELinux, AppArmor) pour confiner un service exposé.',
    ],
    commonMistakes: [
      'Confondre vérifier les signatures (Secure Boot) et enregistrer l’état du démarrage (démarrage mesuré).',
      'Oublier que le noyau de l’hôte fait partie de la TCB d’un conteneur.',
      'Croire qu’une isolation logicielle forte arrête les canaux auxiliaires.',
      'Faire reposer la sécurité sur le secret du mécanisme plutôt que sur celui des clés.',
      'Placer des clés sensibles sur le même noyau que du code moins fiable.',
      'Empiler les protections sans modèle de menace, au prix d’une complexité qui crée de nouvelles failles.',
    ],
    bestPractices: [
      'Délimiter la TCB, la réduire et y placer ce qui est sensible, séparé du code moins fiable.',
      'Appliquer un contrôle d’accès obligatoire en complément des permissions classiques.',
      'Combiner Secure Boot, démarrage mesuré, attestation et révocation des composants vulnérables.',
      'Réserver du matériel dédié aux charges sensibles quand les canaux auxiliaires font partie du modèle de menace.',
      'Appliquer les principes de Saltzer et Schroeder et documenter le modèle de menace.',
    ],
    keyPoints: [
      'La TCB est ce dont la défaillance compromet la sécurité ; la réduire est le premier levier.',
      'DAC, MAC, RBAC et capacités n’ont pas les mêmes garanties ; Bell-LaPadula protège la confidentialité, Biba l’intégrité.',
      'Secure Boot bloque, le démarrage mesuré enregistre, l’attestation prouve ; la révocation maintient la confiance.',
      'Les canaux auxiliaires contournent l’isolation logicielle en exploitant le matériel partagé.',
      'Une architecture se juge face à une menace précise, avec des compromis assumés.',
    ],
  },
  practice: [
    {
      id: 'identifier-tcb',
      kind: 'analysis',
      title: 'Délimiter et réduire la base de confiance',
      context: [
        { t: 'p', text: 'Une plateforme exécute sur un même serveur : le service de signature des certificats de la société, une application web interne et des conteneurs de partenaires externes, sous un noyau Linux et un moteur de conteneurs partagés.' },
      ],
      steps: ['Lister ce qui fait partie de la TCB du service de signature dans cette configuration.', 'Expliquer comment un partenaire malveillant pourrait atteindre les clés.', 'Proposer une architecture qui réduit la TCB du service de signature.'],
    },
    {
      id: 'chaine-attestee',
      kind: 'case',
      title: 'Cas pratique : une chaîne de démarrage attestée',
      context: [{ t: 'p', text: 'Une société veut qu’aucun serveur ne reçoive de secrets (clés de base de données, jetons) s’il a démarré dans un état non conforme.' }],
      steps: ['Décrire les mécanismes de démarrage à activer (vérification et mesure).', 'Décrire le déroulement d’une attestation avant de délivrer un secret.', 'Indiquer comment traiter la découverte d’un composant de démarrage signé mais vulnérable.'],
    },
  ],
  questions,
  resources: [
    { title: 'NIST SP 800-193 — Platform Firmware Resiliency Guidelines', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/193/final' },
    { title: 'The Protection of Information in Computer Systems (Saltzer et Schroeder, 1975)', source: 'Proceedings of the IEEE', url: 'https://www.cs.virginia.edu/~evans/cs551/saltzer/' },
    { title: 'TPM 2.0 Library Specification', source: 'Trusted Computing Group', url: 'https://trustedcomputinggroup.org/resource/tpm-library-specification/' },
    { title: 'seL4 microkernel', source: 'seL4 Foundation', url: 'https://sel4.systems/' },
  ],
};
