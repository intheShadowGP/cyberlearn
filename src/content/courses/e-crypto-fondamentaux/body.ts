import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'e-crypto-fondamentaux',
  lesson: {
    intro:
      'Chaque fois que vous ouvrez un site avec un cadenas, envoyez un message chiffré ou déverrouillez un disque, la cryptographie travaille en silence. Elle ne rend pas un système « inviolable » : elle protège des propriétés précises, à condition d’être bien choisie et bien employée. Ce cours pose le vocabulaire et les idées de base, sans mathématiques, pour savoir ce que chaque outil garantit, ce qu’il ne garantit pas, et pourquoi la plupart des échecs viennent de l’usage plutôt que des algorithmes.',
    sections: [
      {
        id: 'objectifs',
        title: 'À quoi sert la cryptographie ?',
        blocks: [
          { t: 'p', text: 'La cryptographie répond à des besoins précis. Savoir **lequel** on cherche à satisfaire permet de choisir le bon outil.' },
          {
            t: 'table',
            head: ['Besoin', 'Question', 'Outil principal'],
            rows: [
              ['**Confidentialité**', 'Seules les personnes autorisées peuvent-elles lire ?', 'Chiffrement'],
              ['**Intégrité**', 'L’information a-t-elle été modifiée en chemin ?', 'Empreinte, code d’authentification'],
              ['**Authenticité**', 'De qui vient réellement l’information ?', 'Signature numérique, certificat'],
              ['**Non-répudiation**', 'L’auteur peut-il nier avoir signé ?', 'Signature numérique'],
            ],
          },
          { t: 'def', term: 'Chiffrement', text: 'Opération qui transforme un **texte clair** en un **texte chiffré** illisible, au moyen d’un algorithme et d’une **clé**. Seul qui possède la bonne clé peut revenir au texte clair (**déchiffrer**).' },
          { t: 'def', term: 'Principe de Kerckhoffs', text: 'La sécurité d’un système de chiffrement doit reposer sur le **secret de la clé**, pas sur le secret de l’algorithme. Les algorithmes sûrs sont **publics** et étudiés par des milliers de spécialistes ; garder un algorithme secret n’ajoute aucune garantie.' },
          {
            t: 'example',
            title: 'Le chiffre de César : un chiffrement trop faible',
            blocks: [
              { t: 'code', lang: 'text', code: 'Clé : décaler chaque lettre de 3 rangs\nclair   : BONJOUR\nchiffré : ERQMRXU' },
              { t: 'p', text: 'Il n’y a que **25 décalages possibles** : un ordinateur (ou une personne patiente) les essaie tous en un instant. Même un alphabet mélangé tombe par **analyse de fréquences** : dans un texte français, le « e » est la lettre la plus courante. Un bon algorithme doit résister à toute attaque connue, pas seulement être « difficile à deviner ».' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Chiffrer protège la **confidentialité**, pas l’intégrité : un message chiffré peut parfois être modifié en chemin sans que le destinataire s’en aperçoive. L’intégrité et l’authenticité demandent d’autres outils, vus plus loin.' },
        ],
      },
      {
        id: 'symetrique',
        title: 'Le chiffrement symétrique : une clé partagée',
        blocks: [
          { t: 'p', text: 'Dans le chiffrement **symétrique**, la **même clé** sert à chiffrer et à déchiffrer, comme un cadenas dont tout le monde possède un exemplaire de la clé. Il est **rapide** et convient aux grandes quantités de données.' },
          {
            t: 'table',
            head: ['Élément', 'À retenir'],
            rows: [
              ['Algorithme de référence', '**AES** (Advanced Encryption Standard), standard mondial'],
              ['Tailles de clé', '128, 192 ou 256 bits : plus la clé est longue, plus le nombre de clés possibles à essayer est immense'],
              ['Ordres de grandeur', 'Une clé de 128 bits offre 2¹²⁸ clés possibles : l’essai exhaustif est hors de portée'],
              ['Usages typiques', 'Disque chiffré, sauvegarde, trafic une fois la connexion établie'],
            ],
          },
          { t: 'def', term: 'Taille de clé', text: 'Nombre de bits de la clé. Chaque bit supplémentaire **double** le nombre de clés à essayer : une clé de 128 bits n’est pas deux fois plus sûre qu’une clé de 64 bits, mais 2⁶⁴ fois plus. Les clés de 56 bits (ancien DES) sont aujourd’hui cassées par recherche exhaustive.' },
          { t: 'callout', kind: 'warn', title: 'Le problème de la clé partagée', text: 'Comment transmettre la clé à son correspondant **sans qu’un tiers la lise** ? Si on l’envoie par le même canal que le message, un espion récupère les deux. C’est la difficulté que résout le chiffrement asymétrique.' },
          { t: 'p', text: 'Un bon chiffrement ne doit pas non plus révéler que deux messages sont **identiques** : le même message chiffré deux fois avec la même clé doit donner deux textes chiffrés différents (grâce à une valeur propre à chaque message, le **nonce** ou le vecteur d’initialisation). Un mode de chiffrement qui ne le fait pas, comme ECB, laisse voir les motifs.' },
        ],
      },
      {
        id: 'asymetrique',
        title: 'Le chiffrement asymétrique : clé publique et clé privée',
        blocks: [
          { t: 'p', text: 'Dans le chiffrement **asymétrique**, chaque personne possède une **paire de clés** liées mathématiquement : une **clé publique**, qu’on peut diffuser à tous, et une **clé privée**, qu’on garde secrète. Ce qui est chiffré avec l’une ne se déchiffre qu’avec l’autre.' },
          {
            t: 'table',
            head: ['Besoin', 'On utilise', 'Principe'],
            rows: [
              ['Écrire à Alice en secret', 'La **clé publique d’Alice**', 'Seule Alice, avec sa clé privée, peut lire'],
              ['Prouver qu’un message vient de moi', 'Ma **clé privée**', 'Tout le monde, avec ma clé publique, vérifie la signature'],
              ['Se mettre d’accord sur un secret commun', 'Un **échange de clés**', 'Deux parties obtiennent la même clé sans la transmettre'],
            ],
          },
          { t: 'def', term: 'Chiffrement hybride', text: 'Le chiffrement asymétrique est **lent** : on l’utilise pour convenir d’une clé de session, puis cette clé sert à un chiffrement **symétrique** rapide pour les données. C’est le fonctionnement de HTTPS et de la plupart des messageries.' },
          { t: 'list', items: ['**RSA** : repose sur la difficulté de factoriser de grands nombres ; clés d’au moins 2 048 bits.', '**Courbes elliptiques** (ECC) : même niveau de sécurité avec des clés beaucoup plus courtes.', 'La clé **privée** ne quitte jamais son propriétaire ; la clé **publique** peut être publiée sur un site ou envoyée par courriel.'] },
          { t: 'callout', kind: 'tip', text: 'Une analogie : la clé publique est une **boîte aux lettres** dont tout le monde connaît l’adresse et où chacun peut déposer un message ; la clé privée est la **clé de la boîte** : seul son propriétaire peut l’ouvrir.' },
        ],
      },
      {
        id: 'hachage-signature',
        title: 'Empreintes, signatures et certificats',
        blocks: [
          { t: 'p', text: 'Une **fonction de hachage** transforme n’importe quelle donnée en une **empreinte** de taille fixe. Elle sert à vérifier qu’une donnée n’a pas changé : la moindre modification, même d’un seul caractère, donne une empreinte totalement différente.' },
          { t: 'code', lang: 'text', caption: 'Une empreinte SHA-256', code: 'SHA-256("bonjour")  = 2cb4b1431b84ec15d35ed83bb927e27e8967d75f4bcd9cc4b25c8d879ae23e18\nSHA-256("Bonjour")  = 9172e8eec99f144f72eca9a568759580edadb2cfd154857f07e657569493bc44' },
          { t: 'list', items: ['**Non réversible** : on ne retrouve pas la donnée à partir de son empreinte.', '**Taille fixe** : 256 bits pour SHA-256, quelle que soit la taille de la donnée.', '**À éviter** : MD5 et SHA-1, cassés ; on utilise SHA-256 ou SHA-3.'] },
          { t: 'def', term: 'Signature numérique', text: 'Valeur calculée avec la **clé privée** de l’auteur sur l’empreinte d’un document. N’importe qui, avec la **clé publique**, peut vérifier que le document vient bien de l’auteur et n’a pas été modifié. Seul l’auteur peut signer, donc il ne peut pas nier l’avoir fait.' },
          { t: 'def', term: 'Code d’authentification (HMAC)', text: 'Empreinte calculée avec une **clé secrète partagée** : seuls les détenteurs de la clé peuvent la produire ou la vérifier. Elle prouve l’intégrité et l’origine entre deux parties qui se font confiance, sans signature publique.' },
          { t: 'def', term: 'Certificat', text: 'Document numérique qui lie une **clé publique** à une **identité** (un nom de site, une organisation), signé par une **autorité de certification** de confiance. Il répond à la question : « cette clé publique appartient-elle bien à ce site ? »' },
          { t: 'diagram', id: 'cert-chain', caption: 'Chaîne de confiance : l’AC racine (hors ligne) signe l’AC intermédiaire, qui signe le certificat du serveur ; le client vérifie la chaîne jusqu’à une racine de confiance.', alt: 'Schéma d’une chaîne de certificats : AC racine hors ligne qui signe une AC intermédiaire, laquelle signe le certificat du serveur portant le SAN www.exemple.fr.' },
          { t: 'callout', kind: 'warn', title: 'Une empreinte seule ne prouve pas l’origine', text: 'Comparer l’empreinte d’un fichier téléchargé avec celle publiée par l’éditeur détecte une corruption ou une substitution, à condition que l’empreinte vienne d’une source distincte et fiable. Une signature, elle, prouve l’origine.' },
        ],
      },
      {
        id: 'usages',
        title: 'La cryptographie dans la vie de tous les jours',
        blocks: [
          { t: 'p', text: 'Vous utilisez la cryptographie sans le voir. Connaître ce que chaque usage protège évite les fausses assurances.' },
          {
            t: 'table',
            head: ['Usage', 'Ce que la cryptographie fait', 'Ce qu’elle ne garantit pas'],
            rows: [
              ['**HTTPS** (cadenas du navigateur)', 'Chiffre la connexion et prouve que l’on parle au bon nom de domaine', 'Que le site soit honnête ou sûr : un site d’hameçonnage peut avoir un cadenas'],
              ['**Messagerie chiffrée de bout en bout**', 'Seuls les correspondants lisent les messages, pas l’opérateur', 'Rien contre un téléphone compromis ou une capture d’écran'],
              ['**Chiffrement du disque** (BitLocker, FileVault)', 'Protège les données si l’appareil est volé éteint', 'Rien contre un programme qui s’exécute pendant la session'],
              ['**Wi-Fi protégé** (WPA2, WPA3)', 'Chiffre les échanges entre l’appareil et la borne', 'Rien sur le trafic après la borne, ni sur un mot de passe Wi-Fi faible'],
              ['**VPN**', 'Chiffre le trafic entre l’appareil et le serveur VPN', 'L’anonymat total ; le fournisseur voit le trafic'],
              ['**Gestionnaire de mots de passe**', 'Chiffre le coffre avec un mot de passe maître', 'Rien si le mot de passe maître est faible'],
            ],
          },
          { t: 'def', term: 'TLS', text: 'Protocole qui sécurise HTTPS : le serveur prouve son identité par un **certificat**, les deux parties se mettent d’accord sur une clé de session (échange asymétrique), puis le trafic est chiffré en **symétrique**. Il rassemble toutes les notions de ce cours.' },
          { t: 'def', term: 'Chiffrement de bout en bout', text: 'Seuls l’expéditeur et le destinataire détiennent les clés : le service qui transporte le message ne peut pas le lire. Il se distingue d’un chiffrement « en transit » où le service déchiffre puis rechiffre.' },
          { t: 'callout', kind: 'tip', text: 'Quand on vous dit « c’est chiffré », demandez-vous : **contre qui**, **où** et **tant que** quoi ? Un disque chiffré ne protège pas un ordinateur allumé et infecté.' },
        ],
      },
      {
        id: 'pratiques',
        title: 'Bonnes pratiques et erreurs de débutant',
        blocks: [
          { t: 'list', items: ['**N’inventez jamais votre algorithme** : les algorithmes éprouvés ont été attaqués pendant des années par des spécialistes ; un algorithme « maison » est presque toujours cassé.', '**Encoder n’est pas chiffrer** : Base64 se décode instantanément, sans clé. Un mot de passe « encodé en Base64 » est un mot de passe en clair.', '**La clé fait la sécurité** : une clé écrite dans le code, envoyée avec le fichier ou stockée à côté des données ne protège rien.', '**Gardez des moyens de récupération** : un disque chiffré dont on perd la clé est perdu à jamais ; la clé de récupération se range en lieu sûr, à part.', '**Utilisez des outils éprouvés** (bibliothèques reconnues, fonctions du système) et **mettez-les à jour** : les corrections de failles et le retrait d’algorithmes dépassés passent par les mises à jour.', '**Les mots de passe se hachent, ils ne se chiffrent pas** : le serveur n’a pas besoin de les relire (voir le cours sur le hachage et le stockage).'] },
          {
            t: 'example',
            title: 'Envoyer un fichier confidentiel à un collègue',
            blocks: [
              { t: 'p', text: 'Mauvaise idée : joindre le fichier chiffré et écrire le mot de passe dans le même courriel. Meilleure approche : chiffrer le fichier avec une phrase de passe longue (ou avec la clé publique du collègue), puis communiquer la phrase de passe **par un autre canal**, par exemple par téléphone. Vérifier ensuite que le collègue peut bien ouvrir le fichier.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'La cryptographie sert à **réduire la confiance nécessaire** : on protège un secret par une clé plus petite et plus facile à garder que le secret lui-même. Tout le travail revient alors à **protéger, ranger et renouveler les clés**.' },
        ],
      },
    ],
    useCases: [
      'Comprendre l’affichage d’un navigateur : ce que signifie un cadenas et ce qu’il ne dit pas.',
      'Choisir l’outil adapté à un besoin : chiffrer un fichier, vérifier un téléchargement, signer un document.',
      'Lire un certificat et repérer les signes d’une anomalie (nom différent, certificat expiré).',
      'Sensibiliser des collègues : chiffrer sans partager la clé par le même canal, ne pas confondre encodage et chiffrement.',
    ],
    commonMistakes: [
      'Croire que le cadenas d’un site garantit que le site est honnête.',
      'Présenter un encodage (Base64) comme un chiffrement.',
      'Envoyer le fichier chiffré et la clé par le même canal.',
      'Inventer son propre algorithme ou garder un algorithme « secret » pour plus de sécurité.',
      'Chiffrer sans conserver de moyen de récupération de la clé.',
      'Confondre chiffrer (confidentialité) et signer (authenticité).',
    ],
    bestPractices: [
      'Distinguer le besoin (confidentialité, intégrité, authenticité) avant de choisir l’outil.',
      'AES pour chiffrer, clés asymétriques pour échanger et signer, SHA-256 pour les empreintes.',
      'Algorithmes publics et éprouvés, bibliothèques reconnues, mises à jour régulières.',
      'Clé séparée des données, accès limité, clé de récupération en lieu sûr.',
      'Vérifier l’identité du correspondant ou du site (certificat, empreinte de clé) avant de lui faire confiance.',
    ],
    keyPoints: [
      'Confidentialité, intégrité, authenticité : trois besoins, trois familles d’outils.',
      'Symétrique : une clé partagée, rapide ; asymétrique : paire de clés, lent, résout l’échange.',
      'Une empreinte vérifie qu’une donnée n’a pas changé ; une signature prouve en plus l’origine.',
      'Un certificat lie une clé publique à une identité, sous la garantie d’une autorité.',
      'Le cadenas prouve que la connexion est chiffrée vers le bon nom, pas que le site est fiable.',
      'La sécurité repose sur la clé : algorithmes publics, clés protégées et renouvelées.',
    ],
  },
  practice: [
    {
      id: 'cesar',
      kind: 'analysis',
      title: 'Casser un chiffre de César',
      context: [
        { t: 'p', text: 'Un message a été chiffré par décalage de lettres (chiffre de César) :' },
        { t: 'code', lang: 'text', code: 'ERQMRXU DGPLQ' },
        { t: 'p', text: 'On sait seulement que le texte est en français et que le premier mot est un salut courant.' },
      ],
      steps: ['Retrouver le décalage et le message d’origine.', 'Expliquer pourquoi ce chiffrement ne résiste à aucune attaque sérieuse.', 'Comparer avec AES : qu’est-ce qui rend l’essai de toutes les clés impossible ?'],
    },
    {
      id: 'choisir-outil',
      kind: 'case',
      title: 'Cas pratique : quel outil pour quel besoin ?',
      context: [{ t: 'p', text: 'Dans une petite association, on vous pose cinq questions : (a) envoyer à un partenaire un contrat dont il doit pouvoir vérifier l’origine, (b) vérifier qu’un logiciel téléchargé n’a pas été modifié, (c) protéger les sauvegardes stockées sur un disque externe, (d) échanger des messages confidentiels avec un correspondant que l’on n’a jamais rencontré, (e) savoir si on peut faire confiance à un site qui affiche un cadenas.' }],
      steps: ['Pour chaque situation, indiquer le besoin (confidentialité, intégrité, authenticité) et l’outil adapté.', 'Préciser pour (d) comment éviter de transmettre une clé sur un canal non sûr.', 'Expliquer ce que le cadenas garantit et ne garantit pas pour (e).'],
    },
    {
      id: 'lire-certificat',
      kind: 'analysis',
      title: 'Lire les informations d’un certificat',
      context: [
        { t: 'p', text: 'Vous consultez le certificat d’un site depuis votre navigateur :' },
        { t: 'code', lang: 'text', code: 'Émis pour (SAN) : paiement-banque-exemple.net\nÉmis par         : AC Exemple Intermédiaire\nValide du        : 2026-03-01 au 2026-05-30\nAujourd’hui      : 2026-11-24\nAdresse visitée  : https://www.banque-exemple.fr/connexion' },
      ],
      steps: ['Relever ce qui ne va pas dans ce certificat par rapport au site visité.', 'Dire ce que le navigateur devrait afficher et ce qu’il faut faire.', 'Expliquer pourquoi un certificat valide ne suffirait pas à prouver qu’un site est légitime.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide de sélection d’algorithmes cryptographiques', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
    { title: 'RFC 8446 — TLS 1.3', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc8446' },
    { title: 'Comment fonctionne Let’s Encrypt', source: 'Let’s Encrypt', url: 'https://letsencrypt.org/how-it-works/' },
    { title: 'Cryptographic Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html' },
  ],
};
