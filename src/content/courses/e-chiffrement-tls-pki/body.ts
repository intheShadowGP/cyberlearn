import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'e-chiffrement-tls-pki',
  lesson: {
    intro:
      'Le hachage protège l’intégrité ; le chiffrement protège la confidentialité. Les algorithmes modernes sont solides : les failles réelles viennent presque toujours de leur utilisation (mode inadapté, nonce réutilisé, clé stockée à côté des données, certificat mal vérifié). Ce cours part des primitives, symétriques et asymétriques, puis montre comment elles s’assemblent dans TLS et dans une PKI, avant d’aborder la gestion des secrets et l’arrivée des algorithmes post-quantiques.',
    sections: [
      {
        id: 'symetrique',
        title: 'Chiffrement symétrique : AES et modes authentifiés',
        blocks: [
          { t: 'p', text: 'Le chiffrement **symétrique** utilise la même clé pour chiffrer et déchiffrer. Il est rapide et sert à protéger les volumes de données. **AES** chiffre des blocs de 128 bits avec une clé de 128, 192 ou 256 bits ; le **mode d’opération** décide comment enchaîner les blocs, et c’est là que se jouent la plupart des erreurs.' },
          {
            t: 'table',
            head: ['Mode', 'Propriétés', 'Verdict'],
            rows: [
              ['**ECB**', 'Chaque bloc chiffré indépendamment : deux blocs clairs identiques donnent deux blocs chiffrés identiques', 'À proscrire : laisse voir la structure des données'],
              ['**CBC**', 'Chaînage avec un vecteur d’initialisation imprévisible ; aucune intégrité', 'Ancien ; exposé aux attaques par oracle de remplissage s’il n’est pas combiné à un MAC'],
              ['**GCM**', 'Chiffrement **authentifié** (AEAD) : confidentialité + intégrité, nonce de 96 bits', 'Recommandé, à condition de ne **jamais** réutiliser un nonce avec la même clé'],
              ['**ChaCha20-Poly1305**', 'AEAD par flot, rapide sans accélération matérielle', 'Recommandé, notamment sur mobile'],
            ],
          },
          { t: 'def', term: 'AEAD', text: 'Chiffrement authentifié avec données associées : le texte chiffré est accompagné d’une étiquette qui détecte toute modification. Les données associées (en-têtes, identifiants) sont authentifiées sans être chiffrées.' },
          { t: 'callout', kind: 'warn', title: 'Nonce réutilisé', text: 'Avec AES-GCM, réutiliser un nonce sous la même clé révèle le XOR des deux textes clairs et permet de forger des messages authentifiés. Utilisez un compteur ou un nonce aléatoire avec une limite stricte du nombre de messages par clé, ou un mode résistant à la réutilisation (AES-GCM-SIV).' },
        ],
      },
      {
        id: 'asymetrique',
        title: 'Asymétrique : RSA, courbes elliptiques, signatures',
        blocks: [
          { t: 'p', text: 'Le chiffrement **asymétrique** utilise une paire de clés : la clé publique se diffuse, la clé privée reste secrète. Il est lent, donc on l’emploie pour trois usages précis, jamais pour chiffrer de gros volumes.' },
          {
            t: 'table',
            head: ['Usage', 'Principe', 'Algorithmes courants'],
            rows: [
              ['**Échange de clés**', 'Deux parties calculent un secret commun sans le transmettre', 'ECDHE (X25519, P-256), Diffie-Hellman'],
              ['**Signature**', 'Prouver qu’un message vient du détenteur de la clé privée et n’a pas été modifié', 'ECDSA, Ed25519, RSA-PSS'],
              ['**Chiffrement de clé**', 'Chiffrer une clé symétrique pour un destinataire', 'RSA-OAEP'],
            ],
          },
          { t: 'def', term: 'Cryptographie sur les courbes elliptiques (ECC)', text: 'Famille d’algorithmes dont la sécurité repose sur le logarithme discret sur une courbe elliptique. À sécurité comparable, les clés sont bien plus courtes qu’en RSA : une clé de 256 bits sur courbe offre une sécurité voisine d’une clé RSA de 3 072 bits.' },
          { t: 'list', items: ['RSA : module d’au moins 2 048 bits ; 3 072 bits pour une protection prévue au-delà de 2030 (recommandations de l’ANSSI).', 'Remplissage : **OAEP** pour le chiffrement, **PSS** pour la signature ; le remplissage PKCS#1 v1.5 en chiffrement est exposé aux attaques de type Bleichenbacher.', 'Ne jamais réutiliser la même paire de clés pour signer et chiffrer.'] },
        ],
      },
      {
        id: 'pki',
        title: 'Certificats X.509 et PKI',
        blocks: [
          { t: 'p', text: 'Une clé publique seule ne dit pas **à qui** elle appartient. Le **certificat** lie une clé publique à une identité (un nom de domaine, une personne, un service) et il est signé par une **autorité de certification** (AC). La **PKI** est l’ensemble des AC, politiques et procédures qui rendent cette chaîne de confiance vérifiable.' },
          { t: 'diagram', id: 'cert-chain', caption: 'Chaîne de confiance : l’AC racine (hors ligne) signe l’AC intermédiaire, qui signe le certificat du serveur ; le client vérifie la chaîne jusqu’à une racine de confiance.', alt: 'Schéma d’une chaîne de certificats : AC racine hors ligne qui signe une AC intermédiaire, laquelle signe le certificat du serveur portant le SAN www.exemple.fr.' },
          { t: 'code', lang: 'text', caption: 'Chaîne de certificats d’un site', code: 'AC racine (dans le magasin de confiance du système ou du navigateur)\n└─ AC intermédiaire (signée par la racine)\n   └─ Certificat du serveur : SAN = www.exemple.fr, exemple.fr\n      validité : 2026-09-01 → 2027-02-28, usage : authentification serveur' },
          {
            t: 'example',
            title: 'Diagnostiquer une erreur de certificat',
            blocks: [
              { t: 'code', lang: 'bash', code: 'openssl s_client -connect www.exemple.fr:443 -servername www.exemple.fr -showcerts\n# Verify return code: 21 (unable to verify the first certificate)' },
              { t: 'p', text: 'Le serveur n’envoie que son propre certificat sans l’intermédiaire : certains clients complètent la chaîne, d’autres échouent. La correction consiste à configurer le serveur avec la **chaîne complète** (certificat + intermédiaires). Les autres causes fréquentes : nom absent du champ SAN, certificat expiré, AC non reconnue (AC interne non déployée sur les postes).' },
            ],
          },
          { t: 'def', term: 'Certificate Transparency', text: 'Journaux publics, en ajout seul, où les AC publiques enregistrent les certificats qu’elles émettent. Un propriétaire de domaine peut ainsi détecter un certificat émis à son nom sans son accord.' },
          { t: 'callout', kind: 'info', text: 'La durée de validité maximale des certificats TLS publics diminue par étapes, ce qui impose d’automatiser leur renouvellement (protocole ACME). Les dates exactes sont fixées par le CA/Browser Forum et figurent dans la fiche de vérification du cours.' },
        ],
      },
      {
        id: 'tls',
        title: 'TLS 1.3 et confidentialité persistante',
        blocks: [
          { t: 'p', text: '**TLS** protège les échanges sur le réseau : il authentifie le serveur (et parfois le client) par certificat, établit une clé de session par échange de clés, puis chiffre le trafic avec un AEAD. **TLS 1.3** (RFC 8446) a supprimé les options faibles des versions précédentes.' },
          { t: 'list', ordered: true, items: ['**ClientHello** : versions et suites prises en charge, part de clé éphémère (par exemple X25519), nom du serveur (SNI).', '**ServerHello** : choix de la suite, part de clé éphémère du serveur. Le secret partagé est calculé ; tout ce qui suit est chiffré.', 'Le serveur envoie son **certificat** et une **signature** de la négociation avec sa clé privée.', 'Le client vérifie la chaîne et la signature, puis les deux parties échangent des messages « Finished ». Une seule aller-retour suffit.'] },
          { t: 'def', term: 'Confidentialité persistante (PFS)', text: 'Propriété selon laquelle la compromission ultérieure de la clé privée du serveur ne permet pas de déchiffrer les sessions passées, car chaque session utilise une clé éphémère détruite ensuite. En TLS 1.3, tous les échanges de clés sont éphémères.' },
          { t: 'callout', kind: 'tip', text: 'Configuration recommandée : TLS 1.2 et 1.3 uniquement, suites AEAD avec échange ECDHE, HSTS pour interdire le retour en HTTP. Le mode 0-RTT de TLS 1.3 accélère la reprise de session mais ses données peuvent être rejouées : à réserver aux requêtes sans effet de bord.' },
        ],
      },
      {
        id: 'secrets-pq',
        title: 'Gestion des secrets et transition post-quantique',
        blocks: [
          { t: 'p', text: 'Un chiffrement n’est jamais plus solide que la protection de sa clé. Une clé stockée dans le code source, dans une variable d’environnement journalisée ou à côté de la base qu’elle protège ne protège rien.' },
          { t: 'list', items: ['**Coffre de secrets** (Vault, gestionnaire de secrets du fournisseur cloud) : accès contrôlé et journalisé, secrets dynamiques à courte durée de vie.', '**KMS et HSM** : la clé maîtresse ne sort jamais du module ; on lui demande de chiffrer ou de déchiffrer.', '**Chiffrement d’enveloppe** : chaque donnée est chiffrée par une clé de données, elle-même chiffrée par la clé maîtresse du KMS.', '**Rotation** planifiée et procédure de révocation d’urgence ; détection des secrets dans le code (analyse des dépôts).'] },
          { t: 'def', term: 'Menace quantique', text: 'Un ordinateur quantique suffisamment puissant exécutant l’algorithme de Shor casserait RSA, Diffie-Hellman et les courbes elliptiques. Le chiffrement symétrique et le hachage sont bien moins affectés (l’algorithme de Grover réduit de moitié la sécurité effective : AES-256 reste adapté).' },
          { t: 'callout', kind: 'key', title: '« Collecter maintenant, déchiffrer plus tard »', text: 'Un attaquant peut enregistrer aujourd’hui du trafic chiffré pour le déchiffrer quand il disposera d’un ordinateur quantique. Les données qui doivent rester confidentielles longtemps justifient dès maintenant un échange de clés **hybride** (classique + post-quantique, par exemple X25519 combiné à ML-KEM), comme le recommandent l’ANSSI et d’autres agences. Le NIST a normalisé ML-KEM (FIPS 203), ML-DSA (FIPS 204) et SLH-DSA (FIPS 205) en 2024.' },
        ],
      },
    ],
    useCases: [
      'Revue de conception : vérifier qu’une application chiffre ses données sensibles avec un AEAD et que les clés sont gérées par un KMS.',
      'Exploitation : diagnostiquer une erreur de certificat et automatiser le renouvellement avec ACME.',
      'Stratégie : inventorier les usages de RSA et ECC pour préparer la migration post-quantique (agilité cryptographique).',
    ],
    commonMistakes: [
      'Utiliser AES en mode ECB, ou CBC sans contrôle d’intégrité.',
      'Réutiliser un nonce AES-GCM avec la même clé.',
      'Désactiver la vérification des certificats « pour que ça marche » (par exemple `verify=False`).',
      'Stocker les clés de chiffrement dans le dépôt Git ou dans la même base que les données chiffrées.',
      'Écrire sa propre implémentation cryptographique au lieu d’utiliser une bibliothèque éprouvée.',
    ],
    bestPractices: [
      'Utiliser une bibliothèque de haut niveau (libsodium, Tink, les API de la plateforme) qui choisit des paramètres sûrs.',
      'AEAD pour tout chiffrement de données ; nonces gérés par la bibliothèque.',
      'TLS 1.2 minimum, 1.3 de préférence, HSTS, renouvellement automatique des certificats, surveillance de Certificate Transparency.',
      'Clés dans un KMS ou un HSM, chiffrement d’enveloppe, rotation et journalisation des accès.',
      'Inventaire cryptographique et agilité : pouvoir changer d’algorithme sans réécrire l’application.',
    ],
    keyPoints: [
      'Symétrique pour les données (AES-GCM, ChaCha20-Poly1305), asymétrique pour l’échange de clés et la signature.',
      'Le nonce d’un AEAD ne doit jamais être réutilisé avec la même clé.',
      'Un certificat lie une clé à une identité ; la chaîne remonte à une racine de confiance.',
      'TLS 1.3 : échanges éphémères, donc confidentialité persistante pour toutes les sessions.',
      'Post-quantique : migrer d’abord l’échange de clés en mode hybride, à cause de la collecte immédiate du trafic.',
    ],
  },
  practice: [
    {
      id: 'revue-crypto',
      kind: 'analysis',
      title: 'Revue de code : chiffrement d’un champ sensible',
      context: [
        { t: 'p', text: 'Extrait d’un service qui chiffre les numéros de sécurité sociale avant stockage :' },
        { t: 'code', lang: 'python', code: 'KEY = b"0123456789abcdef"          # défini dans settings.py, versionné\nIV = b"\\x00" * 16\n\ndef chiffrer(nss: str) -> bytes:\n    cipher = AES.new(KEY, AES.MODE_CBC, IV)\n    return cipher.encrypt(pad(nss.encode(), 16))\n\ndef appeler_api(url, data):\n    return requests.post(url, json=data, verify=False)' },
      ],
      steps: ['Lister chaque faiblesse et sa conséquence.', 'Proposer une version corrigée (principes, sans forcément de code complet).', 'Indiquer comment gérer la clé et sa rotation.'],
    },
    {
      id: 'audit-tls',
      kind: 'case',
      title: 'Cas pratique : durcir la configuration TLS d’un portail',
      context: [{ t: 'p', text: 'Un scan du portail client révèle : TLS 1.0 et 1.1 activés, suites avec échange RSA statique et CBC, certificat valide mais chaîne incomplète, pas d’en-tête HSTS. Le portail traite des données de santé qui doivent rester confidentielles au moins 15 ans.' }],
      steps: ['Proposer la configuration cible.', 'Expliquer le risque lié à l’échange RSA statique pour des données conservées longtemps.', 'Proposer une mesure post-quantique et son calendrier.'],
    },
  ],
  questions: [
    { id: 'crypt-q1', type: 'single', difficulty: 1, skills: ['e-sym'], prompt: 'Pourquoi le mode ECB est-il à proscrire pour chiffrer des données ?', options: [{ id: 'a', text: 'Deux blocs clairs identiques donnent deux blocs chiffrés identiques, ce qui révèle la structure des données' }, { id: 'b', text: 'Il est trop lent' }, { id: 'c', text: 'Il n’accepte que des clés de 56 bits' }, { id: 'd', text: 'Il ne peut pas être déchiffré' }] },
    { id: 'crypt-q2', type: 'truefalse', difficulty: 2, skills: ['e-sym'], prompt: 'Avec AES-GCM, réutiliser un nonce sous la même clé compromet à la fois la confidentialité et l’intégrité des messages concernés.' },
    { id: 'crypt-q3', type: 'multi', difficulty: 2, skills: ['e-sym'], prompt: 'Quels modes ou constructions fournissent un chiffrement authentifié (AEAD) ?', options: [{ id: 'a', text: 'AES-GCM' }, { id: 'b', text: 'ChaCha20-Poly1305' }, { id: 'c', text: 'AES-ECB' }, { id: 'd', text: 'AES-CBC seul, sans MAC' }] },
    { id: 'crypt-q4', type: 'short', difficulty: 1, skills: ['e-sym'], prompt: 'Quelle est la taille, en bits, d’un bloc AES ?', placeholder: 'nombre' },
    { id: 'crypt-q5', type: 'single', difficulty: 2, skills: ['e-asym'], prompt: 'Dans TLS, à quoi sert principalement la cryptographie asymétrique ?', options: [{ id: 'a', text: 'À établir une clé de session et à authentifier le serveur par signature' }, { id: 'b', text: 'À chiffrer tout le trafic applicatif' }, { id: 'c', text: 'À compresser les données' }, { id: 'd', text: 'À remplacer les fonctions de hachage' }] },
    { id: 'crypt-q6', type: 'multi', difficulty: 2, skills: ['e-asym'], prompt: 'Quelles affirmations sur RSA et les courbes elliptiques sont exactes ?', options: [{ id: 'a', text: 'Une clé de 256 bits sur courbe elliptique offre une sécurité voisine d’une clé RSA de 3 072 bits' }, { id: 'b', text: 'Le remplissage OAEP est recommandé pour le chiffrement RSA' }, { id: 'c', text: 'Une clé RSA de 1 024 bits reste recommandée pour les nouveaux systèmes' }, { id: 'd', text: 'Ed25519 est un algorithme de signature sur courbe elliptique' }] },
    { id: 'crypt-q7', type: 'truefalse', difficulty: 2, skills: ['e-asym'], prompt: 'Il est recommandé d’utiliser la même paire de clés RSA à la fois pour signer et pour chiffrer.' },
    { id: 'crypt-q8', type: 'open', difficulty: 3, skills: ['e-asym', 'e-pki-tls'], prompt: 'Expliquez à un développeur la différence entre chiffrer avec une clé publique et signer avec une clé privée, et donnez un exemple d’usage de chacun.' },
    { id: 'crypt-q9', type: 'single', difficulty: 2, skills: ['e-pki-tls'], prompt: 'Un client signale « unable to verify the first certificate » alors que le certificat du serveur est valide et non expiré. Quelle est la cause la plus probable ?', options: [{ id: 'a', text: 'Le serveur n’envoie pas le certificat intermédiaire de la chaîne' }, { id: 'b', text: 'La clé AES est trop courte' }, { id: 'c', text: 'Le pare-feu bloque le port 80' }, { id: 'd', text: 'Le DNS est en IPv6' }] },
    { id: 'crypt-q10', type: 'short', difficulty: 2, skills: ['e-pki-tls'], prompt: 'Quel champ d’un certificat X.509 liste les noms de domaine pour lesquels il est valide ? (sigle)', placeholder: 'sigle' },
    { id: 'crypt-q11', type: 'truefalse', difficulty: 2, skills: ['e-pki-tls'], prompt: 'Avec TLS 1.3, la compromission future de la clé privée du serveur permet de déchiffrer les sessions enregistrées par le passé.' },
    { id: 'crypt-q12', type: 'multi', difficulty: 3, skills: ['e-pki-tls'], prompt: 'Quelles mesures font partie d’une configuration TLS moderne pour un site public ?', options: [{ id: 'a', text: 'Désactiver TLS 1.0 et 1.1' }, { id: 'b', text: 'Envoyer l’en-tête HSTS' }, { id: 'c', text: 'Privilégier les suites AEAD avec échange ECDHE' }, { id: 'd', text: 'Accepter les certificats auto-signés des clients sans vérification' }] },
    { id: 'crypt-q13', type: 'single', difficulty: 2, skills: ['e-secrets-pq'], prompt: 'Où une application doit-elle conserver la clé maîtresse qui protège les données chiffrées de sa base ?', options: [{ id: 'a', text: 'Dans un KMS ou un HSM, d’où elle ne sort pas, avec des accès journalisés' }, { id: 'b', text: 'Dans un fichier de configuration versionné avec le code' }, { id: 'c', text: 'Dans une colonne de la même base de données' }, { id: 'd', text: 'En commentaire dans le code source' }] },
    { id: 'crypt-q14', type: 'short', difficulty: 3, skills: ['e-secrets-pq'], prompt: 'Quel algorithme d’encapsulation de clés post-quantique le NIST a-t-il normalisé dans FIPS 203 ?', placeholder: 'sigle' },
    { id: 'crypt-q15', type: 'open', difficulty: 3, skills: ['e-secrets-pq', 'e-pki-tls'], prompt: 'Expliquez la menace « collecter maintenant, déchiffrer plus tard » et ce qu’elle implique pour une organisation qui échange des données devant rester confidentielles quinze ans.' },
    { id: 'crypt-q16', type: 'single', difficulty: 2, skills: ['e-secrets-pq', 'e-sym'], prompt: 'Quel est l’effet attendu d’un ordinateur quantique sur AES-256 ?', options: [{ id: 'a', text: 'Une réduction de la sécurité effective (algorithme de Grover), AES-256 restant considéré comme adapté' }, { id: 'b', text: 'Un cassage immédiat, comme pour RSA' }, { id: 'c', text: 'Aucun effet sur aucun algorithme' }, { id: 'd', text: 'AES-256 devient plus solide' }] },
  ],
  resources: [
    { title: 'Guide de sélection d’algorithmes cryptographiques', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
    { title: 'RFC 8446 — TLS 1.3', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc8446' },
    { title: 'Transport Layer Security Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html' },
    { title: 'Post-Quantum Cryptography — standards FIPS 203, 204, 205', source: 'NIST', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
    { title: 'Key Management Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html' },
  ],
};
