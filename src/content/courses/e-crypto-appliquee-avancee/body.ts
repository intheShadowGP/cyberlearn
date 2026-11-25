import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'e-crypto-appliquee-avancee',
  lesson: {
    intro:
      'Les primitives modernes (AES, SHA-256, X25519, signatures sur courbes elliptiques) sont solides ; les systèmes réels cèdent presque toujours ailleurs : mauvais modèle de menace, protocole mal composé, implémentation qui fuit, clé mal gardée, migration oubliée. Ce cours adopte le point de vue de l’architecte et de l’auditeur : dimensionner, composer, vérifier et faire évoluer la cryptographie d’un système, sans jamais inventer de primitive.',
    sections: [
      {
        id: 'menaces',
        title: 'Modèle d’attaquant et dimensionnement de la sécurité',
        blocks: [
          { t: 'p', text: 'Une protection cryptographique n’est « forte » que **par rapport à un attaquant** : ce qu’il observe (écoute passive), ce qu’il peut faire (modifier, rejouer, interroger un oracle), le calcul dont il dispose et la durée pendant laquelle la donnée reste sensible. Le modèle de menace précède le choix des algorithmes.' },
          { t: 'def', term: 'Niveau de sécurité', text: 'Une primitive offre **n bits de sécurité** si la meilleure attaque connue demande de l’ordre de 2ⁿ opérations. AES-128 vise 128 bits ; une empreinte de n bits offre seulement **n/2 bits** contre les collisions (paradoxe des anniversaires) : SHA-256 résiste aux collisions à hauteur de 128 bits.' },
          {
            t: 'table',
            head: ['Sécurité visée', 'Symétrique', 'RSA / Diffie-Hellman', 'Courbe elliptique', 'Collisions d’empreinte'],
            rows: [
              ['112 bits (minimum historique)', '3DES (2 clés, à proscrire)', 'RSA 2 048 bits', 'Courbe de 224 bits', 'SHA-224'],
              ['128 bits (cible usuelle)', 'AES-128', 'RSA 3 072 bits', 'Courbe de 256 bits (P-256, X25519)', 'SHA-256'],
              ['192 bits', 'AES-192', 'RSA 7 680 bits', 'Courbe de 384 bits', 'SHA-384'],
              ['256 bits', 'AES-256', 'RSA 15 360 bits', 'Courbe de 512 bits (P-521)', 'SHA-512'],
            ],
          },
          { t: 'def', term: 'Enregistrer maintenant, déchiffrer plus tard', text: 'Un adversaire qui capture aujourd’hui du trafic chiffré avec un échange de clés RSA ou à courbes elliptiques peut attendre un ordinateur quantique capable de les casser (algorithme de Shor). La menace concerne les données dont la **confidentialité doit durer** plus longtemps que la sécurité de l’algorithme.' },
          {
            t: 'example',
            title: 'Le raisonnement de Mosca',
            blocks: [
              { t: 'p', text: 'Soit **x** la durée pendant laquelle la donnée doit rester secrète, **y** le temps nécessaire pour migrer le système et **z** le délai estimé avant qu’un ordinateur quantique casse l’algorithme. Si **x + y > z**, le risque est déjà présent.' },
              { t: 'code', lang: 'text', code: 'Dossiers médicaux : x = 30 ans, y = 5 ans, z = 15 ans (hypothèse)\n30 + 5 = 35 > 15  →  à migrer en priorité (échange hybride dès maintenant)\nJeton de session : x = 1 heure  →  aucune urgence particulière' },
            ],
          },
          { t: 'list', items: ['**Attaquant passif ou actif** : écoute seule, ou capable de modifier, supprimer, rejouer, réordonner les messages.', '**Oracle** : l’attaquant peut-il soumettre des textes chiffrés ou des signatures et observer la réponse (erreur, durée) ? C’est le cadre des attaques à chiffré choisi, que les modes authentifiés (AEAD) neutralisent.', '**Hors ligne ou en ligne** : une empreinte de mot de passe volée se casse hors ligne sans limite de tentatives ; une API limitée en débit ne s’attaque qu’en ligne.', '**Durée de vie** : une clé de signature de firmware vit des années, une clé de session des minutes.'] },
          { t: 'callout', kind: 'key', text: 'Un chiffrement sûr contre l’écoute (confidentialité) ne dit rien de l’**intégrité** : une construction qui n’authentifie pas le texte chiffré peut être modifiée ou servir d’oracle. Visez toujours un **chiffrement authentifié**.' },
        ],
      },
      {
        id: 'protocoles',
        title: 'Protocoles authentifiés et jetons',
        blocks: [
          { t: 'p', text: 'Composer des primitives sûres ne donne pas un protocole sûr : il faut spécifier **qui s’authentifie auprès de qui**, ce qui est lié à la session, ce qui empêche le rejeu et ce qui reste protégé si une clé fuit plus tard. Mieux vaut réutiliser un protocole éprouvé (TLS 1.3, Noise, Signal) que d’en assembler un.' },
          {
            t: 'table',
            head: ['Protocole', 'Échange de clés et authentification', 'Particularités à retenir'],
            rows: [
              ['**TLS 1.3**', 'ECDHE éphémère, serveur authentifié par certificat, client par certificat (mTLS) si exigé', 'Confidentialité persistante par défaut ; la reprise **0-RTT** envoie des données rejouables et sans confidentialité persistante complète'],
              ['**Noise** (dont WireGuard)', 'Échanges de clés Curve25519 ; les pairs sont identifiés par leur **clé publique statique**', 'Schémas nommés par motifs ; ChaCha20-Poly1305 ; peu de code à auditer'],
              ['**Signal**', 'Accord initial (X3DH, puis PQXDH hybride), puis **double ratchet** renouvelant les clés à chaque message', 'Confidentialité persistante et **rétablissement après compromission** : une fuite de clé n’expose que quelques messages'],
            ],
          },
          { t: 'def', term: 'Confidentialité persistante (forward secrecy)', text: 'Propriété selon laquelle la fuite future d’une clé à long terme (clé privée du serveur) ne permet pas de déchiffrer les sessions passées. Elle repose sur des clés de session **éphémères**, détruites après usage.' },
          { t: 'def', term: 'Rejeu', text: 'Réémission par un attaquant d’un message valide déjà observé. On le neutralise par des nonces ou compteurs vérifiés, des horodatages avec fenêtre courte, ou en rendant l’opération **idempotente**. Les requêtes à effet de bord (paiement) n’ont pas leur place dans de la donnée 0-RTT.' },
          { t: 'p', text: 'Les **jetons** (JWT) concentrent des erreurs classiques. Un jeton signé prouve l’origine et l’intégrité de ses revendications, à condition que le serveur **impose lui-même** l’algorithme et la clé de vérification.' },
          {
            t: 'table',
            head: ['Faiblesse', 'Mécanisme', 'Parade'],
            rows: [
              ['`alg: none`', 'Le serveur accepte un jeton déclaré « sans signature »', 'Liste blanche d’algorithmes côté serveur, jamais lue dans l’en-tête'],
              ['Confusion HS256 / RS256', 'L’attaquant signe en HMAC avec la **clé publique RSA** utilisée comme secret', 'Une clé de vérification associée à **un seul** algorithme'],
              ['`kid` non maîtrisé', 'Le champ désignant la clé sert à charger un fichier ou une requête', 'Table de clés fermée, aucune interprétation du `kid`'],
              ['Revendications ignorées', 'Jeton expiré, émis pour un autre service', 'Vérifier `exp`, `nbf`, `iss` et `aud` à chaque réception'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'MAC et signature ne sont pas équivalents', text: 'Un HMAC est calculé avec une clé **partagée** : quiconque peut le vérifier peut aussi le produire, il ne fournit donc **pas de non-répudiation**. Seule une signature asymétrique prouve qu’un détenteur unique de la clé privée a signé.' },
        ],
      },
      {
        id: 'implementation',
        title: 'Attaques d’implémentation et parades',
        blocks: [
          { t: 'p', text: 'Les failles les plus fréquentes ne cassent pas l’algorithme : elles exploitent **ce que fait le programme autour** — messages d’erreur, durées de calcul, aléa, taille des données. Une primitive sûre mal employée reste vulnérable.' },
          {
            t: 'table',
            head: ['Attaque', 'Principe', 'Parade'],
            rows: [
              ['**Oracle de remplissage** (CBC)', 'La distinction « remplissage invalide / MAC invalide » permet de déchiffrer octet par octet', 'AEAD ; vérifier l’authentification **avant** tout déchiffrement ; erreur unique'],
              ['**Bleichenbacher / ROBOT** (RSA PKCS#1 v1.5)', 'Un oracle indiquant si le remplissage est valide permet de déchiffrer ou de signer', 'RSA-OAEP ou, mieux, un échange éphémère ; correctifs de la bibliothèque'],
              ['**Comparaison non constante**', 'Le temps de comparaison d’un MAC dépend du premier octet différent', 'Fonction de comparaison en temps constant'],
              ['**Réutilisation de nonce**', 'En GCM ou en ChaCha20-Poly1305, deux messages sous le même couple clé/nonce révèlent le XOR des clairs et permettent de forger des étiquettes', 'Compteur ou nonce aléatoire long ; mode résistant au mésusage (AES-GCM-SIV)'],
              ['**Nonce ECDSA faible ou réutilisé**', 'Deux signatures avec le même nonce révèlent la clé privée', 'Nonce déterministe (RFC 6979) ou signature EdDSA'],
              ['**Fuite par compression** (CRIME, BREACH)', 'Compresser avant de chiffrer rend la **taille** dépendante du contenu', 'Ne pas compresser les secrets avec du contenu contrôlé par l’attaquant ; masquage des jetons'],
              ['**Aléa prévisible**', 'Graine devinable (horloge, PID), générateur défaillant', 'Générateur cryptographique du système (`getrandom`, `/dev/urandom`, `secrets`)'],
            ],
          },
          {
            t: 'example',
            title: 'Comparer un MAC en temps constant',
            blocks: [
              { t: 'code', lang: 'python', code: 'import hmac\n\n# À éviter : le temps dépend de la position du premier octet différent\n# if tag == attendu: ...\n\nif hmac.compare_digest(tag, attendu):\n    traiter(message)\nelse:\n    raise ErreurAuthentification()  # message unique, sans détail' },
              { t: 'p', text: 'Un attaquant en ligne qui mesure des milliers de réponses reconstruit l’étiquette octet par octet avec une comparaison naïve. Même un écart de quelques nanosecondes devient exploitable en moyennant de nombreuses mesures.' },
            ],
          },
          { t: 'def', term: 'Canal auxiliaire', text: 'Fuite d’information par un effet **physique ou temporel** de l’exécution (durée, accès au cache, consommation, rayonnement) plutôt que par la sortie du programme. La parade est un code à **temps et accès mémoire indépendants des secrets** ; on évite d’écrire soi-même ces primitives.' },
          { t: 'list', items: ['Utiliser une **bibliothèque de haut niveau** (libsodium, Tink) qui impose des défauts sûrs, plutôt que des primitives brutes.', 'Rejouer les **vecteurs de test** de référence (Wycheproof) qui visent les cas limites connus.', 'Faire **relire** le code cryptographique par un spécialiste ; tracer les versions de bibliothèques pour appliquer les correctifs.', 'Ne **jamais** implémenter soi-même une primitive pour la production.'] },
        ],
      },
      {
        id: 'cles',
        title: 'Gestion avancée des clés',
        blocks: [
          { t: 'p', text: 'La cryptographie déplace le problème : on protège un secret volumineux par une clé petite, qu’il faut alors **générer, stocker, utiliser, renouveler et détruire** correctement. La plupart des incidents viennent de cette chaîne, rarement d’un algorithme cassé.' },
          { t: 'def', term: 'Hiérarchie de clés et chiffrement d’enveloppe', text: 'Une **clé racine** (dans un HSM ou un KMS) protège des **clés de chiffrement de clés** (KEK), qui protègent des **clés de données** (DEK) propres à chaque jeu de données. Seules les DEK chiffrées sont stockées avec les données ; la rotation de la racine ne demande que de rechiffrer les clés, pas les données.' },
          { t: 'def', term: 'HSM (module de sécurité matériel)', text: 'Équipement qui génère, stocke et utilise des clés **sans jamais les exporter en clair**, avec contrôle d’accès, journalisation et résistance physique (certifications FIPS 140-3 ou Critères communs). Il protège la clé, mais pas contre une application compromise qui peut lui demander de signer.' },
          { t: 'def', term: 'Partage de secret de Shamir', text: 'Un secret est découpé en **n parts** dont **k** (le seuil) suffisent à le reconstituer ; **k − 1 parts n’apprennent rien** sur le secret. Un schéma 3 sur 5 supporte la perte de deux parts et exige la coopération de trois personnes.' },
          {
            t: 'example',
            title: 'Cérémonie de génération d’une clé racine',
            blocks: [
              { t: 'list', items: ['Salle contrôlée, HSM hors ligne, **script de cérémonie** validé à l’avance, témoins et enregistrement.', 'Clé générée **dans** le HSM ; la sauvegarde se fait par parts de Shamir (par exemple 3 sur 5) confiées à des personnes différentes, rangées dans des coffres distincts.', '**Double contrôle** : aucune personne seule ne peut utiliser ou restaurer la clé.', 'Journal signé de la cérémonie, empreintes de la clé publique publiées et vérifiées.'] },
            ],
          },
          {
            t: 'table',
            head: ['Cycle de vie', 'Pratique'],
            rows: [
              ['**Génération**', 'Aléa cryptographique, dans le HSM ou le KMS ; une clé par usage'],
              ['**Rotation**', 'Selon la cryptopériode et après tout incident ; anciennes versions gardées pour déchiffrer pendant la migration'],
              ['**Révocation**', 'Distincte de la rotation : retirer immédiatement une clé compromise (liste de révocation, désactivation dans le KMS)'],
              ['**Destruction**', 'Effacer la clé rend les données inutilisables : **crypto-shredding**, utile pour le droit à l’effacement et les supports retirés'],
              ['**Contrôle**', 'Séparation des rôles (qui administre, qui utilise), alertes sur usages anormaux, journaux immuables'],
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Les modèles **BYOK / HYOK** (apporter ou garder sa propre clé chez un fournisseur cloud) déplacent la confiance : vérifiez qui peut réellement utiliser la clé, et ce qui se passe si le fournisseur la perd ou refuse l’accès.' },
        ],
      },
      {
        id: 'agilite',
        title: 'Agilité cryptographique et transition post-quantique',
        blocks: [
          { t: 'p', text: 'Aucun algorithme n’est éternel : tailles de clés relevées, primitives affaiblies (MD5, SHA-1, RSA 1 024), protocoles abandonnés, ordinateurs quantiques à venir. L’**agilité cryptographique** est la capacité de remplacer un algorithme sans refondre le système.' },
          { t: 'def', term: 'Agilité cryptographique', text: 'Conception qui isole les choix d’algorithmes (identifiants de version, négociation, configuration, abstraction dans la bibliothèque) pour pouvoir les changer vite. Elle ne signifie pas **tout** négocier : une négociation libre ouvre la porte aux attaques par repli ; on propose peu de suites, récentes et sûres.' },
          { t: 'def', term: 'Cryptographie post-quantique', text: 'Algorithmes à clé publique réputés résistants à un ordinateur quantique : **ML-KEM** (échange de clés, FIPS 203), **ML-DSA** (signature, FIPS 204) et **SLH-DSA** (signature à base de hachage, FIPS 205). L’algorithme de **Shor** casse RSA, Diffie-Hellman et courbes elliptiques ; celui de **Grover** n’affaiblit que de moitié la sécurité des clés symétriques.' },
          {
            t: 'table',
            head: ['Primitive', 'Effet d’un ordinateur quantique', 'Réponse'],
            rows: [
              ['RSA, Diffie-Hellman, courbes elliptiques', '**Cassés** par Shor', 'Migrer vers ML-KEM et ML-DSA (ou SLH-DSA)'],
              ['AES-128', 'Sécurité ramenée à environ 64 bits (Grover)', 'Préférer AES-256, jugé suffisant'],
              ['AES-256', 'Environ 128 bits effectifs', 'Conserver'],
              ['SHA-256, SHA-3', 'Résistance aux préimages divisée par deux, collisions peu affectées', 'Conserver, éventuellement des empreintes plus longues'],
            ],
          },
          { t: 'p', text: 'En pratique, on déploie un **échange hybride** (par exemple X25519 combiné à ML-KEM-768) : la clé de session reste sûre si **l’un des deux** mécanismes résiste, ce qui protège à la fois contre un défaut du nouvel algorithme, encore jeune, et contre l’ordinateur quantique. L’urgence porte d’abord sur la **confidentialité à long terme** ; les signatures suivent selon la durée de vie des certificats et du matériel signé.' },
          { t: 'list', items: ['**Inventorier** : algorithmes, bibliothèques, certificats, clés, protocoles, avec la durée de sensibilité des données associées (une « nomenclature cryptographique »).', '**Prioriser** par le raisonnement de Mosca, puis migrer d’abord les échanges de clés exposés à l’enregistrement.', '**Tester** les tailles de messages plus grandes (certificats, handshakes) et les performances.', '**Suivre** les calendriers officiels (NIST, ANSSI) : ils évoluent.'] },
          { t: 'callout', kind: 'warn', text: 'Ne pas attendre un ordinateur quantique pour commencer : l’inventaire et l’agilité prennent des années, et la menace d’enregistrement est déjà active.' },
        ],
      },
      {
        id: 'avancees',
        title: 'Primitives avancées et leurs limites',
        blocks: [
          { t: 'p', text: 'Au-delà du chiffrement et de la signature, des constructions permettent de **calculer ou prouver sans révéler**. Elles répondent à des besoins précis, avec un coût et des hypothèses qu’il faut connaître avant de s’y engager.' },
          {
            t: 'table',
            head: ['Primitive', 'Ce qu’elle permet', 'Limites'],
            rows: [
              ['**Chiffrement homomorphe**', 'Calculer sur des données **restées chiffrées** : le serveur additionne ou multiplie sans les voir', 'Complet (FHE) : très coûteux ; partiel : opérations limitées'],
              ['**Preuve à divulgation nulle** (ZK)', 'Prouver qu’une affirmation est vraie (âge, solde suffisant) **sans révéler** la donnée', 'Circuits complexes, risque d’erreurs de spécification, configuration initiale pour certains systèmes'],
              ['**Calcul multipartite** (MPC)', 'Plusieurs parties calculent une fonction commune sans révéler leurs entrées', 'Coût de communication, hypothèse sur le nombre de parties malveillantes'],
              ['**Signature à seuil**', 'Une signature n’est produite que si k parties coopèrent, sans jamais reconstituer la clé', 'Protocoles complexes, implémentation délicate'],
              ['**Chiffrement préservant l’ordre / cherchable**', 'Comparer ou chercher dans des données chiffrées', '**Fuites** (ordre, fréquences) exploitées par inférence : déconseillé pour des données sensibles'],
            ],
          },
          { t: 'def', term: 'Chiffrement homomorphe', text: 'Schéma où une opération sur les textes chiffrés correspond à une opération sur les clairs. Un schéma **partiellement** homomorphe (ex. addition) est utile et efficace ; le **chiffrement totalement homomorphe** permet des calculs arbitraires mais reste lent.' },
          { t: 'def', term: 'Preuve à divulgation nulle de connaissance', text: 'Protocole où un prouveur convainc un vérificateur qu’il connaît un secret ou qu’une affirmation est vraie, sans rien révéler d’autre. Il est **correct** (on ne prouve pas le faux), **complet** et **à divulgation nulle**.' },
          {
            t: 'example',
            title: 'Choisir une technique pour un besoin',
            blocks: [
              { t: 'list', items: ['**Vérifier qu’un utilisateur est majeur sans voir sa date de naissance** : preuve à divulgation nulle ou justificatif à divulgation sélective.', '**Deux hôpitaux veulent des statistiques communes sans partager leurs dossiers** : calcul multipartite ou agrégation avec confidentialité différentielle.', '**Un service calcule une somme sur des valeurs chiffrées** : chiffrement partiellement homomorphe (additif).', '**Chiffrer un champ pour pouvoir le trier** : à éviter ; revoir plutôt l’architecture.'] },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Face à un produit qui promet une « cryptographie révolutionnaire », exigez : un **algorithme public**, une **preuve de sécurité ou une analyse indépendante**, des implémentations éprouvées et un modèle de menace explicite. Sans cela, ne l’adoptez pas.' },
        ],
      },
    ],
    useCases: [
      'Auditer l’authentification par jeton d’une API (algorithmes, clés, revendications, rejeu).',
      'Dimensionner la protection de données à très longue durée de vie et décider de la migration post-quantique.',
      'Concevoir la hiérarchie de clés d’un service (KMS, HSM, rotation, destruction) et préparer une cérémonie de clé racine.',
      'Relire du code cryptographique : mode, nonce, aléa, comparaisons, messages d’erreur.',
      'Évaluer une offre commerciale annonçant une primitive « nouvelle » ou des calculs sur données chiffrées.',
    ],
    commonMistakes: [
      'Choisir l’algorithme avant d’avoir défini le modèle d’attaquant et la durée de confidentialité.',
      'Laisser le jeton indiquer l’algorithme ou la clé avec lequel il doit être vérifié.',
      'Réutiliser un nonce, ou le tirer sur trop peu de bits, avec un mode de chiffrement authentifié.',
      'Comparer des MAC ou des jetons avec une égalité ordinaire ; distinguer les erreurs de remplissage et d’authentification.',
      'Ranger la clé avec les données, ou confier une clé racine à une seule personne.',
      'Confondre rotation et révocation, ou oublier de conserver d’anciennes clés pour déchiffrer.',
      'Reporter la migration post-quantique faute d’inventaire.',
    ],
    bestPractices: [
      'Réutiliser des protocoles et bibliothèques éprouvés ; ne jamais écrire sa primitive.',
      'Chiffrement authentifié partout ; nonces gérés par la bibliothèque ou par compteur.',
      'Algorithmes imposés côté serveur, vérification complète des revendications des jetons.',
      'Hiérarchie de clés avec KMS ou HSM, séparation des rôles, journalisation, cérémonies documentées.',
      'Inventaire cryptographique à jour, échange hybride pour les données à longue durée de vie.',
      'Exiger publicité de l’algorithme et analyse indépendante avant d’adopter une primitive avancée.',
    ],
    keyPoints: [
      'La sécurité est relative à un attaquant : modèle de menace, niveau de sécurité et durée de vie d’abord.',
      'Mosca : si x + y > z, la migration est urgente ; l’enregistrement des échanges est déjà possible.',
      'Un protocole éprouvé (TLS 1.3, Noise, Signal) vaut mieux qu’un assemblage maison ; les jetons exigent algorithme et clé imposés.',
      'Les attaques d’implémentation (oracles, temps, nonce, aléa, compression) causent la plupart des échecs.',
      'La gestion des clés (hiérarchie, HSM, Shamir, rotation, destruction) est le cœur du système.',
      'Agilité et hybride : préparer la transition post-quantique par l’inventaire, maintenant.',
      'Les primitives avancées répondent à des besoins précis, avec des coûts et des fuites à évaluer.',
    ],
  },
  practice: [
    {
      id: 'revue-jeton',
      kind: 'analysis',
      title: 'Revue de la validation d’un jeton JWT',
      context: [
        { t: 'p', text: 'Extrait d’une API qui authentifie les requêtes par jeton :' },
        { t: 'code', lang: 'python', code: 'SECRET = "changeme"            # défini dans le dépôt\n\ndef verifier(jeton):\n    entete, charge, signature = decoder(jeton)\n    alg = entete["alg"]\n    cle = SECRET if alg.startswith("HS") else CLE_PUBLIQUE_RSA\n    if alg == "none":\n        return charge\n    attendu = signer(alg, cle, entete, charge)\n    if attendu == signature:\n        return charge\n    raise Refus("signature invalide")' },
      ],
      steps: ['Lister les faiblesses de cette validation et l’attaque rendue possible par chacune.', 'Écrire les règles de vérification correctes (algorithme, clé, revendications, comparaison).', 'Proposer un schéma de gestion des clés de signature (rotation, publication, séparation émetteur et vérificateur).'],
    },
    {
      id: 'plan-migration-pq',
      kind: 'case',
      title: 'Cas pratique : prioriser la migration post-quantique',
      context: [{ t: 'p', text: 'Une organisation hospitalière gère : (1) un portail patient en HTTPS dont les échanges contiennent des dossiers médicaux à conserver 30 ans, (2) des sauvegardes chiffrées en AES-128 envoyées vers un site distant par un tunnel VPN IPsec (échange de clés Diffie-Hellman sur groupe MODP), (3) des jetons de session valables 15 minutes, (4) la signature de mises à jour de firmware d’équipements de santé, déployés pour 15 ans, avec une clé RSA 2 048 bits. Un prestataire estime qu’un ordinateur quantique capable de casser RSA n’apparaîtra pas avant 15 ans (hypothèse prudente).' }],
      steps: ['Appliquer le raisonnement de Mosca à chaque élément et classer les priorités.', 'Proposer pour chaque élément la mesure adaptée (échange hybride, AES-256, signature post-quantique ou hybride, rien de particulier).', 'Décrire les étapes de l’inventaire et les risques de la migration (taille des messages, compatibilité, repli).'],
    },
    {
      id: 'hierarchie-cles',
      kind: 'case',
      title: 'Cas pratique : hiérarchie de clés et cérémonie de racine',
      context: [{ t: 'p', text: 'Une plateforme de paiement doit chiffrer en base les numéros de carte (champs), signer ses relevés et pouvoir supprimer à la demande toutes les données d’un client. Elle dispose d’un KMS cloud et d’un HSM sur site. Les ingénieurs souhaitent « une seule clé AES dans une variable d’environnement pour aller vite ».' }],
      steps: ['Proposer une hiérarchie de clés (racine, KEK, DEK) et dire où chaque niveau est conservé.', 'Décrire la cérémonie de génération de la clé racine (rôles, partage de secret, preuves).', 'Expliquer comment satisfaire la suppression à la demande (crypto-shredding), la rotation et la détection d’usages anormaux.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide de sélection d’algorithmes cryptographiques', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
    { title: 'FIPS 203 — Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/fips/203/final' },
    { title: 'Project Wycheproof', source: 'C2SP', url: 'https://github.com/C2SP/wycheproof' },
    { title: 'JSON Web Token Best Current Practices (RFC 8725)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc8725' },
    { title: 'Key Management Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html' },
    { title: 'The Noise Protocol Framework', source: 'noiseprotocol.org', url: 'https://noiseprotocol.org/noise.html' },
  ],
};
