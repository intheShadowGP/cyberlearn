import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'def', term: 'Nonce', text: 'Valeur utilisée **une seule fois** par message avec une clé donnée. Elle n’est pas secrète (elle voyage avec le message) ; ce qui compte, c’est de ne **jamais** la réutiliser sous la même clé. On la génère par un compteur ou de façon aléatoire, en limitant le nombre de messages par clé.' },
          { t: 'p', text: 'À la réception, la bibliothèque vérifie l’**étiquette d’authentification** avant de rendre le texte : en cas d’échec, le message est rejeté sans être traité. On n’exploite jamais des données déchiffrées dont l’étiquette n’a pas été validée, et on n’emploie pas CBC ou CTR seuls.' },
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
          { t: 'def', term: 'ECDHE', text: 'Échange de clés de Diffie-Hellman **éphémère** sur courbe elliptique : chaque partie envoie une valeur publique, puis calcule le **même secret** à partir de la sienne et de celle de l’autre, sans qu’il circule. Les clés étant éphémères, enregistrer le trafic ne suffit pas à le retrouver plus tard. **X25519** est la courbe la plus répandue.' },
          { t: 'callout', kind: 'warn', title: 'Aléa et signatures', text: 'Une signature ECDSA utilise une valeur aléatoire secrète : réutilisée ou prévisible, elle révèle la **clé privée**. Ed25519 la dérive de façon déterministe pour écarter ce risque. Dans tous les cas, la qualité de l’aléa conditionne la sécurité des clés.' },
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
          { t: 'def', term: 'Certificat validé par domaine (DV)', text: 'Certificat délivré après la preuve que le demandeur **contrôle le domaine** (fichier ou enregistrement DNS). Il garantit le chiffrement et l’appartenance du nom, **pas** la légitimité du site : un site d’hameçonnage peut en avoir un. Les niveaux OV et EV vérifient en plus l’organisation.' },
          { t: 'list', ordered: true, items: ['La **chaîne** remonte à une racine présente dans le magasin de confiance, et chaque signature est valide.', 'Le **nom** demandé figure dans le champ SAN.', 'Le certificat est dans sa **période de validité** et son usage autorise l’authentification de serveur.', 'Selon la politique, l’**état de révocation** (CRL, OCSP) est vérifié.'] },
          { t: 'callout', kind: 'warn', title: 'Épinglage et auto-signés', text: 'L’**épinglage** (pinning) fige la confiance dans un certificat ou une clé : un renouvellement imprévu coupe le service. Un certificat **auto-signé** n’est fiable que si son empreinte a été vérifiée par un canal distinct, ou s’il est déployé dans le magasin de confiance des seuls clients concernés.' },
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
          { t: 'def', term: 'HSTS', text: 'En-tête `Strict-Transport-Security` par lequel le serveur demande au navigateur de n’utiliser que **HTTPS** pour ce site pendant une durée donnée : un attaquant ne peut plus rétrograder la connexion en HTTP. Il se complète par le préchargement dans la liste des navigateurs.' },
          { t: 'def', term: 'TLS mutuel (mTLS)', text: 'Le serveur **et** le client s’authentifient par certificat. On l’emploie entre services, pour des API sensibles ou des accès distants. L’émission et la révocation des certificats clients doivent être automatisées.' },
          {
            t: 'table',
            head: ['Erreur de configuration', 'Conséquence'],
            rows: [
              ['TLS 1.0 et 1.1 actifs', 'Protocoles obsolètes, exposés à des attaques connues'],
              ['Échange RSA statique, suites CBC', 'Pas de confidentialité persistante ; exposition aux oracles de remplissage'],
              ['Chaîne incomplète', 'Erreurs chez certains clients seulement, difficiles à reproduire'],
              ['Pas de HSTS ni de redirection', 'Rétrogradation possible vers HTTP'],
              ['Certificats non renouvelés', 'Panne le jour de l’expiration'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Diagnostiquer une connexion TLS', code: 'openssl s_client -connect www.exemple.fr:443 -servername www.exemple.fr -showcerts\nopenssl s_client -connect www.exemple.fr:443 -tls1_2 </dev/null | head -20   # force TLS 1.2\ncurl -sI https://www.exemple.fr | grep -i strict-transport' },
          { t: 'callout', kind: 'tip', text: 'Configuration recommandée : TLS 1.2 et 1.3 uniquement, suites AEAD avec échange ECDHE, HSTS pour interdire le retour en HTTP. Le mode 0-RTT de TLS 1.3 accélère la reprise de session mais ses données peuvent être rejouées : à réserver aux requêtes sans effet de bord.' },
        ],
      },
      {
        id: 'donnees-repos',
        title: 'Chiffrer les données au repos et gérer les clés',
        blocks: [
          { t: 'p', text: 'Chiffrer des données au repos ne veut rien dire sans préciser **contre quelle menace** : le vol d’un disque, la lecture d’une base par un administrateur, une injection SQL, une sauvegarde volée. Chaque niveau de chiffrement répond à une menace différente, et aucun ne suffit seul.' },
          {
            t: 'table',
            head: ['Niveau', 'Protège contre', 'Ne protège pas contre'],
            rows: [
              ['**Volume** (disque, machine virtuelle)', 'Vol ou perte du support, disque retiré', 'Programme ou utilisateur actif sur le système en service'],
              ['**Base de données** (chiffrement transparent)', 'Vol des fichiers de la base ou de ses sauvegardes', 'Requêtes SQL légitimes, administrateur de la base'],
              ['**Champ ou colonne**, par l’application', 'Lecture de la base sans la clé : administrateur, sauvegarde volée, injection', 'Compromission de l’application elle-même'],
              ['**Client** (chiffrement de bout en bout)', 'Le fournisseur et ses administrateurs', 'Perte de la clé par l’utilisateur ; limites de recherche'],
            ],
          },
          { t: 'def', term: 'Chiffrement d’enveloppe', text: 'Chaque donnée est chiffrée par une **clé de données**, elle-même chiffrée par une **clé maîtresse** conservée dans un KMS. Pour renouveler la clé maîtresse, on ne rechiffre que les clés de données (peu nombreuses et petites), pas les données elles-mêmes ; on limite aussi les appels au KMS.' },
          { t: 'def', term: 'HSM', text: 'Module matériel dédié (Hardware Security Module) qui génère et conserve des clés et réalise les opérations de chiffrement et de signature **sans jamais exposer la clé en clair**. Les KMS des fournisseurs de cloud s’appuient sur de tels modules.' },
          { t: 'code', lang: 'text', caption: 'Chiffrement d’enveloppe d’un enregistrement', code: 'clé de données (aléatoire, 256 bits) → chiffre l’enregistrement (AES-256-GCM, nonce unique)\nclé maîtresse (KMS/HSM)               → chiffre la clé de données\nstocké : [clé de données chiffrée | nonce | texte chiffré | étiquette]\ndonnées associées : identifiant de l’enregistrement (empêche l’échange entre lignes)' },
          { t: 'list', items: ['**Séparer** les clés par usage, par jeu de données et par environnement : une clé de production ne sert jamais en test.', '**Faire tourner** les clés selon un calendrier et après tout incident ; garder les anciennes versions pour le déchiffrement le temps de la migration.', '**Limiter et journaliser** l’accès au KMS ; alerter sur les usages anormaux.', '**Sauvegarder** les clés (ou leur moyen de récupération) : une base chiffrée dont la clé est perdue est perdue ; **tester** la restauration avec les clés.'] },
          { t: 'callout', kind: 'warn', text: 'Une clé stockée dans la même base que les données qu’elle protège, ou dans le dépôt de code, ne protège rien : quiconque obtient les données obtient la clé.' },
        ],
      },
      {
        id: 'secrets-pq',
        title: 'Gestion des secrets et transition post-quantique',
        blocks: [
          { t: 'p', text: 'Un chiffrement n’est jamais plus solide que la protection de sa clé. Une clé stockée dans le code source, dans une variable d’environnement journalisée ou à côté de la base qu’elle protège ne protège rien.' },
          { t: 'list', items: ['**Coffre de secrets** (Vault, gestionnaire de secrets du fournisseur cloud) : accès contrôlé et journalisé, secrets dynamiques à courte durée de vie.', '**KMS et HSM** : la clé maîtresse ne sort jamais du module ; on lui demande de chiffrer ou de déchiffrer.', '**Chiffrement d’enveloppe** : chaque donnée est chiffrée par une clé de données, elle-même chiffrée par la clé maîtresse du KMS.', '**Rotation** planifiée et procédure de révocation d’urgence ; détection des secrets dans le code (analyse des dépôts).'] },
          { t: 'def', term: 'Menace quantique', text: 'Un ordinateur quantique suffisamment puissant exécutant l’algorithme de Shor casserait RSA, Diffie-Hellman et les courbes elliptiques. Le chiffrement symétrique et le hachage sont bien moins affectés (l’algorithme de Grover réduit de moitié la sécurité effective : AES-256 reste adapté).' },
          { t: 'def', term: 'Agilité cryptographique', text: 'Capacité de **remplacer un algorithme** sans réécrire l’application : les algorithmes sont identifiés par des paramètres, isolés derrière une bibliothèque et inventoriés. Une migration (par exemple vers le post-quantique) devient une opération planifiée.' },
          { t: 'callout', kind: 'key', title: '« Collecter maintenant, déchiffrer plus tard »', text: 'Un attaquant peut enregistrer aujourd’hui du trafic chiffré pour le déchiffrer quand il disposera d’un ordinateur quantique. Les données qui doivent rester confidentielles longtemps justifient dès maintenant un échange de clés **hybride** (classique + post-quantique, par exemple X25519 combiné à ML-KEM), comme le recommandent l’ANSSI et d’autres agences. Le NIST a normalisé ML-KEM (FIPS 203), ML-DSA (FIPS 204) et SLH-DSA (FIPS 205) en 2024.' },
        ],
      },
    ],
    useCases: [
      'Revue de conception : vérifier qu’une application chiffre ses données sensibles avec un AEAD et que les clés sont gérées par un KMS.',
      'Exploitation : diagnostiquer une erreur de certificat et automatiser le renouvellement avec ACME.',
      'Stratégie : inventorier les usages de RSA et ECC pour préparer la migration post-quantique (agilité cryptographique).',
      'Architecture de protection des données : choisir entre chiffrement du volume, de la base et des champs, et organiser les clés avec un KMS.',
      'Diagnostic TLS : openssl s_client, contrôle de la chaîne, du SAN, de HSTS et des protocoles activés.',
    ],
    commonMistakes: [
      'Utiliser AES en mode ECB, ou CBC sans contrôle d’intégrité.',
      'Réutiliser un nonce AES-GCM avec la même clé.',
      'Désactiver la vérification des certificats « pour que ça marche » (par exemple `verify=False`).',
      'Stocker les clés de chiffrement dans le dépôt Git ou dans la même base que les données chiffrées.',
      'Écrire sa propre implémentation cryptographique au lieu d’utiliser une bibliothèque éprouvée.',
      'Chiffrer le disque et croire protéger les données contre un administrateur ou une injection SQL.',
      'Épingler un certificat sans plan de renouvellement, ou accepter un certificat auto-signé sans vérifier son empreinte.',
      'Utiliser la même clé pour tous les environnements ou ne jamais la renouveler.',
    ],
    bestPractices: [
      'Utiliser une bibliothèque de haut niveau (libsodium, Tink, les API de la plateforme) qui choisit des paramètres sûrs.',
      'AEAD pour tout chiffrement de données ; nonces gérés par la bibliothèque.',
      'TLS 1.2 minimum, 1.3 de préférence, HSTS, renouvellement automatique des certificats, surveillance de Certificate Transparency.',
      'Clés dans un KMS ou un HSM, chiffrement d’enveloppe, rotation et journalisation des accès.',
      'Inventaire cryptographique et agilité : pouvoir changer d’algorithme sans réécrire l’application.',
      'Chiffrer au bon niveau selon la menace (volume, base, champ) avec un chiffrement d’enveloppe ; clés séparées par usage et par environnement.',
      'mTLS entre services sensibles ; HSTS ; tests réguliers de la configuration TLS.',
    ],
    keyPoints: [
      'Symétrique pour les données (AES-GCM, ChaCha20-Poly1305), asymétrique pour l’échange de clés et la signature.',
      'Le nonce d’un AEAD ne doit jamais être réutilisé avec la même clé.',
      'Un certificat lie une clé à une identité ; la chaîne remonte à une racine de confiance.',
      'TLS 1.3 : échanges éphémères, donc confidentialité persistante pour toutes les sessions.',
      'Post-quantique : migrer d’abord l’échange de clés en mode hybride, à cause de la collecte immédiate du trafic.',
      'Chaque niveau de chiffrement répond à une menace précise ; la gestion des clés détermine la valeur de l’ensemble.',
      'Un certificat DV prouve le contrôle du domaine, pas la légitimité du site ; HSTS et mTLS complètent TLS.',
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
      labId: 'tls-inspection-lab',
      title: 'Cas pratique : durcir la configuration TLS d’un portail',
      context: [{ t: 'p', text: 'Un scan du portail client révèle : TLS 1.0 et 1.1 activés, suites avec échange RSA statique et CBC, certificat valide mais chaîne incomplète, pas d’en-tête HSTS. Le portail traite des données de santé qui doivent rester confidentielles au moins 15 ans.' }],
      steps: ['Proposer la configuration cible.', 'Expliquer le risque lié à l’échange RSA statique pour des données conservées longtemps.', 'Proposer une mesure post-quantique et son calendrier.'],
    },
    {
      id: 'plan-chiffrement',
      kind: 'case',
      title: 'Cas pratique : protéger les dossiers d’une application de santé',
      context: [{ t: 'p', text: 'Une application stocke des dossiers patients dans une base de données gérée par une équipe d’administrateurs, avec des sauvegardes quotidiennes envoyées chez un prestataire. Les services internes communiquent entre eux, et des API sont exposées à des partenaires. L’exigence est de protéger les données contre le vol de sauvegardes, la lecture par un administrateur et la compromission d’un service.' }],
      steps: ['Choisir les niveaux de chiffrement (transit, volume, base, champs) et justifier chacun par une menace.', 'Décrire la gestion des clés : stockage, séparation, rotation, accès.', 'Prévoir les sauvegardes, la récupération des clés et les points de vigilance.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide de sélection d’algorithmes cryptographiques', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
    { title: 'RFC 8446 — TLS 1.3', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc8446' },
    { title: 'Transport Layer Security Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html' },
    { title: 'Post-Quantum Cryptography — standards FIPS 203, 204, 205', source: 'NIST', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
    { title: 'Cryptographic Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html' },
    { title: 'Mozilla SSL Configuration Generator', source: 'Mozilla', url: 'https://ssl-config.mozilla.org/' },
    { title: 'Key Management Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html' },
  ],
};
