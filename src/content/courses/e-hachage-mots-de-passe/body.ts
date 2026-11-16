import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'e-hachage-mots-de-passe',
  lesson: {
    intro:
      "Chaque année, des bases de données de mots de passe fuient. La différence entre une fuite anodine et une catastrophe tient souvent à une seule décision technique : la façon dont les mots de passe ont été stockés. Ce cours explique les fonctions de hachage, ce qu'elles garantissent et ce qu'elles ne garantissent pas, puis comment stocker correctement un mot de passe.",
    sections: [
      {
        id: 'proprietes',
        title: 'Qu’est-ce qu’une fonction de hachage cryptographique ?',
        blocks: [
          { t: 'def', term: 'Fonction de hachage', text: "Fonction qui transforme une donnée de taille quelconque en une **empreinte** (condensat, *digest*) de taille fixe : 256 bits pour SHA-256. Elle est déterministe : la même entrée donne toujours la même empreinte." },
          {
            t: 'table',
            head: ['Propriété', 'Signification', 'Ce qu’elle permet'],
            rows: [
              ['Résistance à la préimage', 'Impossible en pratique de retrouver une entrée à partir de l’empreinte', 'Empreintes publiables (vérification d’intégrité)'],
              ['Résistance à la seconde préimage', 'Impossible de trouver une autre entrée ayant la même empreinte qu’une entrée donnée', 'Un fichier ne peut pas être substitué'],
              ['Résistance aux collisions', 'Impossible de trouver deux entrées quelconques de même empreinte', 'Signatures numériques fiables'],
              ['Effet avalanche', 'Changer un bit de l’entrée change environ la moitié des bits de l’empreinte', 'Aucune information sur la proximité des entrées'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Effet avalanche (SHA-256)', code: 'SHA-256("bonjour")  = 2cb4b1431b84ec15d35ed83bb927e27e8967d75f4bcd9cc4b25c8d879ae23e18\nSHA-256("Bonjour")  = 9172e8eec99f144f72eca9a568759580edadb2cfd154857f07e657569493bc44' },
          {
            t: 'table',
            caption: 'Algorithmes',
            head: ['Algorithme', 'Statut', 'Usage'],
            rows: [
              ['MD5', '**Cassé** (collisions en secondes)', 'Aucun usage de sécurité'],
              ['SHA-1', '**Cassé** (collision démontrée en 2017)', 'À retirer'],
              ['SHA-256 / SHA-512 (SHA-2)', 'Sûr', 'Intégrité, signatures, HMAC'],
              ['SHA-3 (Keccak)', 'Sûr', 'Alternative de conception différente à SHA-2'],
            ],
          },
        ],
      },
      {
        id: 'distinctions',
        title: 'Hachage, chiffrement, encodage, HMAC : ne pas confondre',
        blocks: [
          {
            t: 'table',
            head: ['Opération', 'Clé ?', 'Réversible ?', 'Objectif', 'Exemple'],
            rows: [
              ['Encodage', 'Non', 'Oui, par tous', 'Représentation (aucune sécurité)', 'Base64, URL-encoding'],
              ['Chiffrement', 'Oui', 'Oui, avec la clé', 'Confidentialité', 'AES-GCM'],
              ['Hachage', 'Non', 'Non', 'Empreinte, intégrité (sans authenticité)', 'SHA-256'],
              ['HMAC', 'Oui (secrète)', 'Non', 'Intégrité **et** authenticité', 'HMAC-SHA-256'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Base64 n’est pas du chiffrement', text: "Une chaîne comme `cGFzc3dvcmQxMjM=` se décode instantanément en `password123`. Trouver des « mots de passe chiffrés en Base64 » dans une configuration revient à trouver des mots de passe en clair." },
          { t: 'def', term: 'HMAC', text: "Hash-based Message Authentication Code (RFC 2104) : `HMAC(K, m)` combine une clé secrète et une fonction de hachage. Seul un détenteur de la clé peut produire ou vérifier le code. Il sert par exemple à signer des cookies ou à authentifier des webhooks." },
          { t: 'p', text: "Pourquoi ne pas simplement calculer `SHA-256(clé || message)` ? Avec SHA-256, cette construction naïve est vulnérable à l'**extension de longueur** : un attaquant peut prolonger le message et calculer une empreinte valide sans connaître la clé. HMAC est conçu pour l'éviter." },
        ],
      },
      {
        id: 'mots-de-passe',
        title: 'Stocker des mots de passe',
        blocks: [
          { t: 'p', text: "Un serveur n'a jamais besoin de **relire** un mot de passe : il doit seulement vérifier qu'un mot de passe saisi est le bon. On stocke donc une valeur dérivée, non réversible." },
          { t: 'diagram', id: 'password-hash-flow', caption: 'Stockage et vérification : le mot de passe et un sel unique passent par une fonction de hachage lente ; l’empreinte stockée contient le sel, le coût et le condensat.', alt: 'Schéma : mot de passe plus sel aléatoire entrant dans une fonction de hachage lente Argon2id, produisant une empreinte stockée composée du sel, du coût et du condensat.' },
          { t: 'list', ordered: true, items: ['**Clair** : inacceptable.', '**Chiffré** : réversible si la clé fuit avec la base (et elle fuit souvent).', '**SHA-256 sans sel** : les mots de passe identiques ont la même empreinte ; tables précalculées (rainbow tables) applicables.', '**SHA-256 avec sel** : mieux, mais un GPU calcule des **milliards** de SHA-256 par seconde.', '**Fonction de dérivation lente, avec sel** (Argon2id, scrypt, bcrypt, PBKDF2) : **la bonne réponse**.'] },
          { t: 'def', term: 'Sel', text: "Valeur aléatoire, unique par utilisateur (au moins 16 octets), stockée avec l'empreinte. Il rend chaque empreinte unique et invalide les tables précalculées. Il n'est **pas** secret." },
          { t: 'def', term: 'Fonction de dérivation lente', text: "Fonction volontairement coûteuse en calcul (et en mémoire pour Argon2 et scrypt), paramétrable pour rester lente malgré les progrès du matériel. Le coût est négligeable pour une connexion, mais rédhibitoire pour un attaquant qui teste des milliards de candidats." },
          {
            t: 'example',
            title: 'Format d’une empreinte Argon2id',
            blocks: [
              { t: 'code', lang: 'text', code: '$argon2id$v=19$m=65536,t=3,p=4$c29tZXNhbHRzb21lc2FsdA$RdescudvJCsgt3ub+b+dWRWJTmaaJObG\n          │      │       │   │  └ sel (Base64)          └ empreinte\n          │      │       │   └ parallélisme\n          │      │       └ itérations\n          │      └ mémoire en Kio (64 Mio)\n          └ version' },
              { t: 'p', text: "Tous les paramètres sont stockés avec l'empreinte : on peut les augmenter plus tard et **re-hacher à la connexion suivante** de chaque utilisateur." },
            ],
          },
          { t: 'callout', kind: 'key', title: 'Recommandation actuelle', text: "**Argon2id** (au moins 19 Mio de mémoire, 2 itérations, selon l'OWASP) en premier choix ; **scrypt** ou **bcrypt** (coût ≥ 10) sinon ; **PBKDF2-HMAC-SHA-256** avec au moins 600 000 itérations si une conformité FIPS l'impose." },
        ],
      },
      {
        id: 'erreurs',
        title: 'Erreurs d’implémentation fréquentes',
        blocks: [
          { t: 'list', items: ['**Comparaison non constante** (`==` sur des chaînes) : le temps de réponse révèle la position de la première différence. Utiliser une comparaison à temps constant (`crypto.timingSafeEqual`, `hmac.compare_digest`).', '**Sel global** identique pour tous : n’apporte presque rien.', '**Aléa non cryptographique** (`Math.random()`) pour un sel, un jeton ou une clé : prévisible. Utiliser `crypto.getRandomValues` ou `secrets`.', '**Inventer sa propre construction** (« double MD5 + clé maison ») : jamais.', '**Troncature** silencieuse (bcrypt ignore au-delà de 72 octets) : à connaître.'] },
          { t: 'code', lang: 'python', caption: 'Python : vérification correcte avec argon2-cffi', code: 'from argon2 import PasswordHasher\nfrom argon2.exceptions import VerifyMismatchError\n\nph = PasswordHasher()               # Argon2id, paramètres OWASP par défaut\nstored = ph.hash("mot de passe")    # sel aléatoire inclus dans la chaîne\n\ndef verifier(stored: str, saisi: str) -> bool:\n    try:\n        ph.verify(stored, saisi)    # comparaison à temps constant\n    except VerifyMismatchError:\n        return False\n    if ph.check_needs_rehash(stored):\n        pass  # re-hacher avec les nouveaux paramètres et enregistrer\n    return True' },
        ],
      },
    ],
    useCases: [
      'Développement : choisir Argon2id et ses paramètres pour le module d’authentification d’une application.',
      "Audit de code : repérer `md5(password)`, `sha1(salt+password)` ou `Math.random()` utilisé pour générer des jetons.",
      'Réponse à une fuite : évaluer la gravité selon l’algorithme de stockage et décider d’une réinitialisation forcée.',
      'Intégrité : publier l’empreinte SHA-256 d’un fichier téléchargeable et vérifier les webhooks par HMAC.',
    ],
    commonMistakes: [
      'Présenter un encodage Base64 comme un chiffrement.',
      'Hacher les mots de passe avec SHA-256 « parce que c’est sûr » : c’est trop rapide pour cet usage.',
      'Utiliser un sel identique pour tous les utilisateurs ou le garder « secret » au lieu de le rendre unique.',
      'Comparer des empreintes ou des jetons avec un opérateur d’égalité classique.',
      'Utiliser MD5 ou SHA-1 pour une signature ou une vérification d’intégrité de sécurité.',
    ],
    bestPractices: [
      'Argon2id pour les mots de passe, avec sel aléatoire unique et paramètres stockés dans l’empreinte.',
      'HMAC-SHA-256 pour authentifier un message avec une clé partagée.',
      'Générateur cryptographique pour tout secret, sel ou jeton.',
      'Comparaisons à temps constant pour toute valeur secrète.',
      'Utiliser une bibliothèque reconnue plutôt que de composer soi-même les primitives.',
    ],
    keyPoints: [
      'Hachage : non réversible, sans clé ; chiffrement : réversible avec clé ; encodage : aucune sécurité.',
      'HMAC = intégrité + authenticité grâce à une clé secrète.',
      'Mots de passe : fonction lente + sel unique (Argon2id), jamais un simple SHA-256.',
      'MD5 et SHA-1 sont cassés pour les usages de sécurité.',
    ],
  },
  practice: [
    {
      id: 'labo-hash',
      kind: 'simulation',
      title: 'Manipulation : empreintes, HMAC et coût de PBKDF2',
      context: [{ t: 'p', text: 'Le laboratoire calcule réellement, dans votre navigateur, des empreintes SHA-256, des HMAC et des dérivations PBKDF2 avec l’API Web Crypto.' }],
      steps: ['Observer l’effet avalanche en changeant un seul caractère.', 'Comparer le temps de PBKDF2 à 1 000 puis 600 000 itérations.', 'Estimer le temps d’une attaque par dictionnaire dans chaque cas.'],
      labId: 'hash-lab',
    },
    {
      id: 'revue-stockage',
      kind: 'analysis',
      title: 'Revue de code : stockage des mots de passe',
      context: [
        { t: 'code', lang: 'javascript', code: "const SALT = 'MonAppli2019';\nfunction hashPassword(pw) {\n  return crypto.createHash('md5').update(SALT + pw).digest('hex');\n}\nfunction check(pw, stored) {\n  return hashPassword(pw) == stored;\n}\nfunction resetToken() {\n  return Math.random().toString(36).slice(2);\n}" },
      ],
      steps: ['Lister chaque faiblesse de ce code.', 'Proposer une version corrigée.', 'Expliquer comment migrer les comptes existants sans forcer tous les utilisateurs à changer de mot de passe.'],
    },
  ],
  questions: [
    { id: 'hash-q1', type: 'single', difficulty: 1, skills: ['e-hash-props'], prompt: 'Quelle est la taille de l’empreinte produite par SHA-256 ?', options: [{ id: 'a', text: '128 bits' }, { id: 'b', text: '256 bits' }, { id: 'c', text: 'Elle dépend de la taille de l’entrée' }, { id: 'd', text: '512 bits' }] },
    { id: 'hash-q2', type: 'truefalse', difficulty: 1, skills: ['e-hash-props'], prompt: 'Une fonction de hachage cryptographique permet de retrouver le message d’origine à partir de son empreinte si l’on connaît l’algorithme.' },
    { id: 'hash-q3', type: 'multi', difficulty: 2, skills: ['e-hash-props', 'e-crypto-errors'], prompt: 'Quels algorithmes ne doivent plus être utilisés pour des usages de sécurité ?', options: [{ id: 'a', text: 'MD5' }, { id: 'b', text: 'SHA-1' }, { id: 'c', text: 'SHA-256' }, { id: 'd', text: 'SHA3-256' }] },
    { id: 'hash-q4', type: 'short', difficulty: 1, skills: ['e-hash-props'], prompt: 'Comment appelle-t-on la propriété selon laquelle modifier un seul bit de l’entrée change environ la moitié des bits de l’empreinte ? (deux mots)' },
    { id: 'hash-q5', type: 'single', difficulty: 1, skills: ['e-hash-vs'], prompt: 'Une configuration contient `password: YWRtaW4xMjM=`. Que pouvez-vous en conclure ?', options: [{ id: 'a', text: 'Le mot de passe est chiffré en AES' }, { id: 'b', text: 'Le mot de passe est simplement encodé en Base64 : il est lisible' }, { id: 'c', text: 'C’est une empreinte SHA-256' }, { id: 'd', text: 'C’est un HMAC' }] },
    { id: 'hash-q6', type: 'single', difficulty: 2, skills: ['e-hash-vs'], prompt: 'Quel mécanisme garantit à la fois l’intégrité et l’authenticité d’un message entre deux parties partageant une clé secrète ?', options: [{ id: 'a', text: 'SHA-256 du message' }, { id: 'b', text: 'Base64 du message' }, { id: 'c', text: 'HMAC-SHA-256 du message' }, { id: 'd', text: 'MD5 du message' }] },
    { id: 'hash-q7', type: 'truefalse', difficulty: 2, skills: ['e-hash-vs', 'e-crypto-errors'], prompt: 'La construction `SHA-256(clé || message)` est équivalente à un HMAC et peut le remplacer sans risque.' },
    { id: 'hash-q8', type: 'single', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'Quel est le rôle principal du sel dans le stockage des mots de passe ?', options: [{ id: 'a', text: 'Rendre le mot de passe réversible' }, { id: 'b', text: 'Rendre chaque empreinte unique et invalider les tables précalculées' }, { id: 'c', text: 'Remplacer la fonction de hachage' }, { id: 'd', text: 'Chiffrer la base de données' }] },
    { id: 'hash-q9', type: 'truefalse', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'Le sel doit rester secret et ne jamais être stocké dans la même base que l’empreinte.' },
    { id: 'hash-q10', type: 'multi', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'Quels algorithmes sont adaptés au stockage de mots de passe ?', options: [{ id: 'a', text: 'Argon2id' }, { id: 'b', text: 'bcrypt' }, { id: 'c', text: 'SHA-512 sans sel' }, { id: 'd', text: 'PBKDF2-HMAC-SHA-256 avec un grand nombre d’itérations' }, { id: 'e', text: 'AES-256 avec une clé dans le code' }] },
    { id: 'hash-q11', type: 'short', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'Quelle variante d’Argon2 est recommandée pour le stockage des mots de passe ?', placeholder: 'Argon2…' },
    { id: 'hash-q12', type: 'single', difficulty: 2, skills: ['e-crypto-errors'], prompt: 'Pourquoi comparer deux jetons secrets avec `==` peut-il être dangereux ?', options: [{ id: 'a', text: 'Parce que `==` est lent' }, { id: 'b', text: 'Parce que le temps de comparaison peut révéler la position de la première différence' }, { id: 'c', text: 'Parce que `==` modifie les chaînes' }, { id: 'd', text: 'Ce n’est jamais dangereux' }] },
    { id: 'hash-q13', type: 'short', difficulty: 2, skills: ['e-crypto-errors'], prompt: 'Quelle fonction de l’API Web Crypto du navigateur permet d’obtenir des octets aléatoires cryptographiquement sûrs ? (nom de la méthode)' },
    { id: 'hash-q14', type: 'open', difficulty: 3, skills: ['e-pwd-storage', 'e-crypto-errors'], prompt: 'Une base contenant les empreintes `md5(sel_global + mot_de_passe)` de 200 000 clients vient de fuiter. Évaluez la gravité et décrivez votre plan d’action technique.' },
    { id: 'hash-q15', type: 'open', difficulty: 2, skills: ['e-hash-vs', 'e-hash-props'], prompt: 'Expliquez avec un exemple concret la différence entre vérifier l’intégrité d’un fichier téléchargé avec SHA-256 et authentifier un webhook avec HMAC.' },
    { id: 'hash-q16', type: 'multi', difficulty: 2, skills: ['e-crypto-errors', 'e-hash-vs'], prompt: 'Quelles pratiques sont incorrectes ?', options: [{ id: 'a', text: 'Générer un jeton de réinitialisation avec `Math.random()`' }, { id: 'b', text: 'Utiliser un sel unique et aléatoire par utilisateur' }, { id: 'c', text: 'Inventer une construction « double MD5 avec clé maison »' }, { id: 'd', text: 'Utiliser une bibliothèque reconnue pour Argon2id' }] },
  ],
  resources: [
    { title: 'Password Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' },
    { title: 'RFC 9106 — Argon2', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9106' },
    { title: 'RFC 2104 — HMAC', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2104' },
    { title: 'Guide de sélection d’algorithmes cryptographiques', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
  ],
};
