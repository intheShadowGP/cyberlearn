import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'p-recherche-initiation',
  lesson: {
    intro:
      'Chaque logiciel contient des défauts ; certains permettent de nuire. La recherche en sécurité consiste à les trouver avant les attaquants, à les comprendre et à les faire corriger. Ce cours, sans prérequis, présente le métier, quelques idées clés (confiance matérielle, fuzzing, quantique) et surtout les règles éthiques et légales qui encadrent cette activité. Tout est abordé du point de vue de la défense.',
    sections: [
      {
        id: 'panorama',
        title: 'Qu’est-ce que la recherche en sécurité ?',
        blocks: [
          { t: 'p', text: 'Un **défaut** est une erreur de conception ou de programmation. Quand il peut être utilisé pour porter atteinte à la sécurité, c’est une **vulnérabilité**. Un **exploit** est le moyen concret de l’utiliser. La recherche en sécurité vise à découvrir les vulnérabilités pour qu’elles soient corrigées avant d’être exploitées.' },
          {
            t: 'table',
            head: ['Terme', 'Sens', 'Exemple'],
            rows: [
              ['**Défaut (bug)**', 'Erreur dans le code ou la conception', 'Un calcul de taille incorrect'],
              ['**Vulnérabilité**', 'Défaut utilisable contre la sécurité', 'Le calcul faux permet d’écrire hors d’un tampon'],
              ['**Exploit**', 'Moyen concret d’exploiter la vulnérabilité', 'Un fichier piégé qui déclenche le défaut'],
              ['**Correctif**', 'Modification qui supprime le défaut', 'Mise à jour du logiciel'],
            ],
          },
          { t: 'def', term: 'CVE', text: 'Identifiant public unique d’une vulnérabilité connue (par exemple CVE-2024-12345). Il permet à tous de parler de la même faille et de suivre son correctif.' },
          { t: 'def', term: 'Chercheur en sécurité', text: 'Personne qui analyse des logiciels ou du matériel pour y trouver des vulnérabilités, les documenter et les signaler. Il agit avec autorisation : sur son propre code, du code libre testé en local, un programme de récompenses (bug bounty) ou une mission contractuelle.' },
          { t: 'list', items: ['**Chercher** : lire du code, tester, automatiser.', '**Comprendre** : mesurer l’impact et la cause.', '**Signaler** : prévenir l’éditeur par un canal officiel.', '**Aider à corriger** : proposer un correctif et vérifier qu’il fonctionne.'] },
          { t: 'callout', kind: 'key', text: 'Le but du chercheur est de réduire le risque pour les utilisateurs, pas de nuire ni de se faire valoir : la façon de signaler compte autant que la découverte.' },
        ],
      },
      {
        id: 'confiance',
        title: 'La confiance, du matériel à l’architecture',
        blocks: [
          { t: 'p', text: 'Un logiciel peut être altéré. Pour s’en prémunir, on s’appuie sur des éléments plus difficiles à modifier : des puces dédiées à la sécurité. Le **Zero Trust** complète l’approche en refusant de faire confiance à un réseau ou à un appareil par défaut.' },
          {
            t: 'table',
            head: ['Notion', 'En une phrase', 'À quoi ça sert'],
            rows: [
              ['**TPM**', 'Puce qui garde des clés et mesure le démarrage', 'Libérer un secret seulement si la machine est intègre'],
              ['**Secure Boot**', 'Vérifie la signature de chaque étape du démarrage', 'Empêcher l’exécution d’un code non approuvé'],
              ['**HSM**', 'Boîtier qui garde des clés sans jamais les exposer', 'Protéger les clés d’un service'],
              ['**Zero Trust**', 'Ne faire confiance à rien par défaut, tout vérifier', 'Limiter l’impact d’une intrusion'],
            ],
          },
          { t: 'def', term: 'Zero Trust', text: 'Approche qui ne considère aucun réseau ni appareil comme fiable par défaut : chaque accès est vérifié (qui, depuis quel appareil, pour quoi faire) avec les droits strictement nécessaires.' },
          { t: 'list', items: ['**Racine de confiance** : on part d’un élément matériel difficile à altérer.', '**Vérifier à chaque accès** plutôt que faire confiance à l’intérieur du réseau.', '**Limiter le rayon d’impact** : si une machine est compromise, le reste ne l’est pas.'] },
          { t: 'callout', kind: 'tip', text: 'Aucune technologie ne suffit seule : le matériel protège les clés, Zero Trust limite les accès, la mise à jour corrige les défauts.' },
        ],
      },
      {
        id: 'fuzzing',
        title: 'Trouver des défauts : le fuzzing',
        blocks: [
          { t: 'p', text: 'Le **fuzzing** consiste à envoyer à un programme un très grand nombre d’entrées inhabituelles, générées automatiquement, et à surveiller ce qu’il fait : un plantage ou une erreur signalée est le signe d’un défaut. C’est l’une des méthodes qui a révélé le plus de vulnérabilités.' },
          {
            t: 'table',
            head: ['Étape', 'Ce qui se passe', 'Pourquoi'],
            rows: [
              ['**Graines**', 'On part de quelques fichiers valides', 'Le programme les accepte et les traite'],
              ['**Mutation**', 'On modifie les entrées au hasard', 'Pour explorer des cas auxquels personne n’a pensé'],
              ['**Surveillance**', 'On observe plantages et erreurs mémoire', 'Pour repérer les défauts'],
              ['**Couverture**', 'On garde les entrées qui explorent du nouveau code', 'Pour aller plus loin à chaque tour'],
            ],
          },
          { t: 'def', term: 'Débordement de tampon', text: 'Défaut où un programme écrit ou lit au-delà de la zone mémoire prévue. Il peut provoquer un plantage ou, dans les cas graves, permettre à un attaquant de modifier le comportement du programme.' },
          {
            t: 'example',
            title: 'Un défaut trouvé automatiquement',
            blocks: [
              { t: 'p', text: 'Un lecteur d’images est testé avec des milliers de fichiers légèrement modifiés. L’un d’eux provoque une erreur mémoire : la taille déclarée dans l’en-tête ne correspond pas aux données. Le défaut est signalé à l’éditeur avec le fichier minimal qui le reproduit, puis corrigé.' },
            ],
          },
          { t: 'list', items: ['**Outils de détection** d’erreurs mémoire : ils rendent visibles les défauts qui ne font pas planter le programme.', '**Un fuzzing sans plantage ne prouve pas** l’absence de défaut : il prouve seulement qu’on n’en a pas trouvé.', '**Autorisation** : on teste son propre code, du code libre en local ou un programme autorisé.'] },
          { t: 'callout', kind: 'warn', text: 'Tester un service en ligne qui ne vous appartient pas, même « pour voir », est une infraction. Le fuzzing se fait en local ou avec une autorisation explicite.' },
        ],
      },
      {
        id: 'divulgation',
        title: 'Divulgation responsable et cadre légal',
        blocks: [
          { t: 'p', text: 'Découvrir une vulnérabilité crée une responsabilité : la manière de la signaler détermine si les utilisateurs seront protégés ou exposés.' },
          {
            t: 'table',
            head: ['Bonne pratique', 'Pourquoi'],
            rows: [
              ['Signaler par le canal officiel (fichier `security.txt`, programme de récompenses)', 'L’éditeur reçoit l’information au bon endroit'],
              ['Fournir une preuve minimale reproductible', 'Il peut corriger vite sans données sensibles'],
              ['Convenir d’un délai avant publication (souvent 90 jours)', 'Le correctif est prêt avant que le public ne soit informé'],
              ['Ne pas conserver ni diffuser de données de tiers', 'Respecter la vie privée et la loi'],
            ],
          },
          { t: 'def', term: 'Divulgation coordonnée', text: 'Démarche où le chercheur prévient l’éditeur en privé, laisse un délai pour corriger, puis publie les détails une fois le correctif disponible.' },
          { t: 'list', items: ['**Ne tester que ce qu’on a le droit de tester.**', '**Ne pas exploiter** la vulnérabilité au-delà de la preuve minimale.', '**Ne jamais** vendre ou publier une faille non corrigée sans prévenir l’éditeur.', '**En France**, l’ANSSI peut servir d’intermédiaire pour signaler une vulnérabilité.'] },
          { t: 'callout', kind: 'legal', text: 'L’accès non autorisé à un système informatique est puni par la loi, même sans intention de nuire. L’intention de bien faire ne remplace pas l’autorisation.' },
        ],
      },
      {
        id: 'horizons',
        title: 'Horizons : quantique, cryptographie avancée et lecture d’une fiche CVE',
        blocks: [
          { t: 'p', text: 'La recherche ne s’arrête pas aux bugs : elle prépare aussi l’avenir. Un ordinateur quantique assez puissant casserait les algorithmes à clé publique actuels ; la **cryptographie post-quantique** prépare déjà leur remplacement.' },
          {
            t: 'table',
            head: ['Sujet', 'Idée simple', 'Pourquoi c’est important'],
            rows: [
              ['**Menace quantique**', 'Une future machine pourrait casser RSA et les courbes elliptiques', 'Des données interceptées aujourd’hui pourraient être lues demain'],
              ['**Cryptographie post-quantique**', 'Nouveaux algorithmes résistants à ces machines', 'Se préparer sans attendre la machine'],
              ['**Chiffrement homomorphe**', 'Calculer sur des données chiffrées', 'Traiter sans exposer'],
              ['**Preuve à divulgation nulle**', 'Prouver sans révéler', 'Authentification et confidentialité'],
            ],
          },
          { t: 'def', term: 'Score de gravité (CVSS)', text: 'Note de 0 à 10 qui estime la gravité d’une vulnérabilité (facilité d’exploitation, impact). Elle aide à prioriser les correctifs mais ne remplace pas l’analyse du contexte.' },
          { t: 'list', items: ['**Lire une fiche CVE** : produit concerné, versions touchées, gravité, correctif disponible.', '**Prioriser** : une faille grave sur un service exposé à Internet passe avant une faille mineure sur un poste isolé.', '**Appliquer** le correctif ou, à défaut, une mesure de contournement.'] },
          { t: 'callout', kind: 'key', text: 'Pour un défenseur, l’essentiel est de suivre les alertes, de corriger vite et de préparer les migrations (notamment post-quantique) pour les données à longue durée de vie.' },
        ],
      },
    ],
    useCases: [
      'Lire une alerte de sécurité publiée par un éditeur et décider quoi corriger en premier.',
      'Signaler correctement une anomalie trouvée dans un produit utilisé par son organisation.',
      'Comprendre pourquoi un produit exige un démarrage vérifié ou une puce de sécurité.',
    ],
    commonMistakes: [
      'Tester un service qui ne nous appartient pas « juste pour voir ».',
      'Confondre défaut, vulnérabilité et exploit.',
      'Croire qu’un test sans résultat prouve l’absence de défaut.',
      'Publier une faille avant d’avoir prévenu l’éditeur.',
      'Ignorer une fiche CVE parce que le produit « semble peu exposé ».',
    ],
    bestPractices: [
      'Ne tester que ce qu’on a le droit de tester.',
      'Signaler par le canal officiel, avec une preuve minimale.',
      'Laisser à l’éditeur le temps de corriger.',
      'Appliquer vite les correctifs et suivre les alertes.',
      'Garder une longueur d’avance sur les migrations cryptographiques.',
    ],
    keyPoints: [
      'Défaut, vulnérabilité, exploit : trois notions distinctes.',
      'La confiance s’ancre dans le matériel ; Zero Trust vérifie chaque accès.',
      'Le fuzzing trouve des défauts mais ne prouve jamais leur absence.',
      'La divulgation responsable protège les utilisateurs ; l’autorisation est indispensable.',
      'La menace quantique justifie de préparer la cryptographie post-quantique.',
    ],
  },
  practice: [
    {
      id: 'classer-notions',
      kind: 'guided',
      title: 'Classer défaut, vulnérabilité et exploit',
      context: [
        { t: 'p', text: 'Trois situations : (a) un développeur remarque qu’un calcul de taille est faux dans un lecteur de fichiers ; (b) il montre qu’un fichier précis permet d’écrire hors du tampon ; (c) un tiers publie un fichier piégé qui exploite ce défaut sur des machines non corrigées.' },
      ],
      steps: ['Associez chaque situation à une notion (défaut, vulnérabilité, exploit).', 'Indiquez ce qui change quand on passe d’une situation à la suivante.', 'Décrivez la bonne réaction du développeur après la situation (b).'],
    },
    {
      id: 'lire-fiche',
      kind: 'analysis',
      title: 'Analyse : prioriser trois fiches de vulnérabilité',
      context: [
        {
          t: 'table',
          head: ['Fiche', 'Produit', 'Gravité', 'Situation'],
          rows: [
            ['A', 'Serveur web public de l’organisation', 'Élevée (8,8)', 'Correctif disponible, exploitation connue'],
            ['B', 'Imprimante isolée du réseau, non accessible de l’extérieur', 'Moyenne (5,3)', 'Correctif disponible'],
            ['C', 'Logiciel de bureautique d’un poste, nécessite l’ouverture d’un fichier piégé', 'Élevée (7,8)', 'Pas d’exploitation connue'],
          ],
        },
      ],
      steps: ['Classez les trois fiches par priorité de correction et justifiez.', 'Indiquez une mesure de contournement possible si le correctif n’est pas immédiatement applicable.', 'Précisez ce que le score de gravité ne dit pas.'],
    },
    {
      id: 'signalement',
      kind: 'case',
      title: 'Cas : signaler une faille découverte par hasard',
      context: [
        { t: 'p', text: 'En utilisant le site d’un fournisseur, vous remarquez qu’en modifiant un nombre dans l’adresse de la page, vous voyez des factures d’autres clients. Vous n’avez rien téléchargé.' },
      ],
      steps: ['Indiquez ce qu’il faut arrêter de faire immédiatement.', 'Décrivez comment signaler la faille et quelles informations fournir.', 'Précisez ce qu’il ne faut surtout pas faire.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations de signalement de vulnérabilités', source: 'ANSSI', url: 'https://cyber.gouv.fr/' },
    { title: 'RFC 9116 — security.txt', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9116' },
    { title: 'Post-Quantum Cryptography', source: 'NIST', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
  ],
};
