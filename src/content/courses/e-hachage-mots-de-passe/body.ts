import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'def', term: 'Collision', text: 'Deux entrées **différentes** qui produisent la même empreinte. Elles existent forcément (les entrées sont infiniment plus nombreuses que les empreintes) ; la résistance aux collisions garantit qu’on ne peut pas en **trouver** en pratique. Pour MD5 et SHA-1, c’est devenu possible : on peut fabriquer deux documents d’empreinte identique.' },
          { t: 'callout', kind: 'warn', title: 'Une empreinte ne prouve pas l’origine', text: 'Publier le fichier et son empreinte SHA-256 sur le même serveur ne garantit pas son authenticité : qui remplace le fichier remplace aussi l’empreinte. Il faut une source distincte de confiance, ou mieux une **signature numérique**.' },
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
          { t: 'def', term: 'Signature numérique', text: 'Valeur calculée sur l’empreinte d’un document avec la **clé privée** de son auteur, vérifiable par n’importe qui avec la **clé publique**. Elle prouve l’origine et l’intégrité sans secret partagé ; un HMAC, lui, ne se vérifie qu’avec la clé secrète.' },
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
          { t: 'def', term: 'Poivre (pepper)', text: 'Secret **commun** à tous les mots de passe, conservé **hors de la base** (variable protégée, module matériel) et ajouté avant le hachage. Si seule la base fuit, l’attaquant ne peut pas tester de candidats sans lui. Il complète le sel, qui n’est pas secret.' },
          {
            t: 'table',
            caption: 'Les trois réglages d’Argon2',
            head: ['Paramètre', 'Effet', 'Pourquoi'],
            rows: [
              ['Mémoire (m)', 'Quantité de mémoire par calcul', 'Limite le parallélisme sur GPU et circuits dédiés'],
              ['Itérations (t)', 'Nombre de passes', 'Augmente le temps de calcul'],
              ['Parallélisme (p)', 'Nombre de fils', 'Adapte le calcul aux cœurs du serveur'],
            ],
          },
          { t: 'callout', kind: 'info', title: 'Migrer sans forcer tout le monde', text: '**Envelopper** chaque ancienne empreinte dans un hachage lent (`argon2id(md5(...))`) protège toute la base dès le premier jour ; à la connexion suivante, on vérifie, puis on **re-hache** le mot de passe en Argon2id direct. On note l’algorithme et ses paramètres dans l’empreinte pour savoir comment vérifier.' },
          { t: 'callout', kind: 'key', title: 'Recommandation actuelle', text: "**Argon2id** (au moins 19 Mio de mémoire, 2 itérations, selon l'OWASP) en premier choix ; **scrypt** ou **bcrypt** (coût ≥ 10) sinon ; **PBKDF2-HMAC-SHA-256** avec au moins 600 000 itérations si une conformité FIPS l'impose." },
        ],
      },
      {
        id: 'erreurs',
        title: 'Erreurs d’implémentation fréquentes',
        blocks: [
          { t: 'list', items: ['**Comparaison non constante** (`==` sur des chaînes) : le temps de réponse révèle la position de la première différence. Utiliser une comparaison à temps constant (`crypto.timingSafeEqual`, `hmac.compare_digest`).', '**Sel global** identique pour tous : n’apporte presque rien.', '**Aléa non cryptographique** (`Math.random()`) pour un sel, un jeton ou une clé : prévisible. Utiliser `crypto.getRandomValues` ou `secrets`.', '**Inventer sa propre construction** (« double MD5 + clé maison ») : jamais.', '**Troncature** silencieuse (bcrypt ignore au-delà de 72 octets) : à connaître.'] },
          { t: 'callout', kind: 'warn', title: 'Les mots de passe ne vont pas dans les journaux', text: 'Journaux d’erreur, traces de débogage, outils de supervision : ils sont lus par beaucoup de monde, copiés vers des services tiers et conservés longtemps. Y écrire un mot de passe annule tous les efforts de hachage. On ne journalise jamais les champs sensibles.' },
          { t: 'p', text: 'Deux autres pièges : hacher deux fois avec SHA-256 ne rend rien plus sûr (chaque tour reste ultra-rapide), et bcrypt ignore les octets au-delà de 72 : deux phrases de passe qui ne diffèrent qu’après cette limite donnent la même empreinte.' },
          { t: 'code', lang: 'python', caption: 'Python : vérification correcte avec argon2-cffi', code: 'from argon2 import PasswordHasher\nfrom argon2.exceptions import VerifyMismatchError\n\nph = PasswordHasher()               # Argon2id, paramètres OWASP par défaut\nstored = ph.hash("mot de passe")    # sel aléatoire inclus dans la chaîne\n\ndef verifier(stored: str, saisi: str) -> bool:\n    try:\n        ph.verify(stored, saisi)    # comparaison à temps constant\n    except VerifyMismatchError:\n        return False\n    if ph.check_needs_rehash(stored):\n        pass  # re-hacher avec les nouveaux paramètres et enregistrer\n    return True' },
        ],
      },
      {
        id: 'attaques',
        title: 'Politique de mots de passe et attaques en ligne',
        blocks: [
          { t: 'p', text: 'Bien stocker les mots de passe limite les dégâts d’une fuite ; mais la plupart des compromissions viennent d’**attaques en ligne** et de **réutilisation** : le mot de passe d’un service fuit, puis sert ailleurs. La politique d’authentification vise donc à rendre ces attaques inefficaces.' },
          {
            t: 'table',
            head: ['Attaque', 'Principe', 'Parade'],
            rows: [
              ['Force brute en ligne', 'Nombreux essais sur un même compte', 'Verrouillage ou ralentissement, MFA'],
              ['**Pulvérisation** (password spraying)', 'Un mot de passe courant testé sur beaucoup de comptes', 'Détection par source et par nombre de comptes, MFA'],
              ['**Bourrage d’identifiants** (credential stuffing)', 'Identifiants volés ailleurs, testés en masse', 'Mots de passe uniques, MFA, limitation de débit, listes de mots de passe compromis'],
              ['Cassage hors ligne', 'Candidats testés contre une base d’empreintes volée', 'Fonction lente et salée (Argon2id)'],
              ['Hameçonnage', 'Le mot de passe est livré par la victime', 'Clés d’accès (passkeys), formation, MFA résistant'],
            ],
          },
          { t: 'def', term: 'Bourrage d’identifiants', text: 'Essai **automatisé** d’identifiants (adresse et mot de passe) issus de fuites passées sur d’autres services. Il réussit à cause de la **réutilisation** des mots de passe, pas d’une faiblesse du service visé.' },
          { t: 'def', term: 'Clé d’accès (passkey)', text: 'Méthode d’authentification fondée sur une **paire de clés** : le service ne stocke que la clé publique, et l’appareil signe un défi lié au **domaine** du site. Sur un faux site, le domaine diffère et la signature n’est pas produite : il n’y a aucun secret à saisir ni à divulguer.' },
          { t: 'list', items: ['**Longueur d’abord** : phrases de passe longues plutôt que règles de composition ; **vérification** contre des listes de mots de passe compromis ; **collage autorisé** pour les gestionnaires de mots de passe.', '**Pas de changement périodique forcé** sans soupçon de compromission : il pousse à des variantes prévisibles.', '**MFA** pour les comptes sensibles, **limitation de débit** et **détection** des essais massifs, messages d’erreur neutres (ne révélant pas si un compte existe).'] },
          { t: 'callout', kind: 'tip', text: 'Les recommandations actuelles (par exemple NIST SP 800-63B) privilégient la longueur, les listes de mots de passe compromis et le MFA sur les règles de complexité et les renouvellements imposés.' },
        ],
      },
      {
        id: 'cles-alea',
        title: 'Dériver des clés et générer de l’aléa',
        blocks: [
          { t: 'p', text: 'La cryptographie dépend de deux ingrédients invisibles : des **clés** de bonne qualité et un **aléa** imprévisible. Une erreur sur l’un d’eux annule les meilleurs algorithmes.' },
          { t: 'def', term: 'Dérivation de clé (KDF)', text: 'Fonction qui produit une ou plusieurs clés cryptographiques à partir d’un secret. **PBKDF2**, **scrypt** et **Argon2** rendent coûteux le test de mots de passe ; **HKDF** (RFC 5869) étend et sépare un secret déjà fort en plusieurs clés indépendantes (chiffrement, authentification).' },
          { t: 'def', term: 'Générateur d’aléa cryptographique (CSPRNG)', text: 'Source dont la sortie est **imprévisible** même si l’on connaît les sorties passées, alimentée par l’entropie du système (événements matériels). Un générateur de simulation comme `Math.random()` peut être reconstitué à partir de quelques sorties.' },
          {
            t: 'table',
            head: ['Contexte', 'À utiliser', 'À éviter'],
            rows: [
              ['Navigateur', '`crypto.getRandomValues()`', '`Math.random()`'],
              ['Node.js', '`crypto.randomBytes()`', '`Math.random()`'],
              ['Python', '`secrets`, `os.urandom()`', '`random`'],
              ['Linux', '`/dev/urandom`, `getrandom()`', 'Une graine tirée de l’heure'],
              ['Java', '`SecureRandom`', '`java.util.Random`'],
            ],
          },
          {
            t: 'example',
            title: 'Un jeton de réinitialisation correct',
            blocks: [
              { t: 'code', lang: 'python', code: 'import secrets, hashlib\n\njeton = secrets.token_urlsafe(32)                 # 256 bits issus du CSPRNG\nempreinte = hashlib.sha256(jeton.encode()).hexdigest()\n# envoyer le jeton par courriel ; stocker seulement l’empreinte + expiration (15 min)\n# à la réception : recalculer l’empreinte, comparer en temps constant, invalider le jeton' },
              { t: 'p', text: 'Le jeton est imprévisible, long, à **usage unique** et de **durée courte**, et le serveur n’en conserve que l’empreinte : une fuite de la base ne donne aucun jeton utilisable.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Dériver un jeton de l’identifiant de l’utilisateur et de l’heure, ou utiliser l’heure comme graine d’un générateur, produit des valeurs devinables : l’attaquant les reconstitue sans rien casser.' },
        ],
      },
    ],
    useCases: [
      'Développement : choisir Argon2id et ses paramètres pour le module d’authentification d’une application.',
      "Audit de code : repérer `md5(password)`, `sha1(salt+password)` ou `Math.random()` utilisé pour générer des jetons.",
      'Réponse à une fuite : évaluer la gravité selon l’algorithme de stockage et décider d’une réinitialisation forcée.',
      'Intégrité : publier l’empreinte SHA-256 d’un fichier téléchargeable et vérifier les webhooks par HMAC.',
      'Conception de l’authentification d’une application : stockage, politique de mots de passe, MFA ou clés d’accès, protections en ligne.',
      'Génération de jetons, de sels et de clés avec un générateur cryptographique, et dérivation de clés par KDF.',
    ],
    commonMistakes: [
      'Présenter un encodage Base64 comme un chiffrement.',
      'Hacher les mots de passe avec SHA-256 « parce que c’est sûr » : c’est trop rapide pour cet usage.',
      'Utiliser un sel identique pour tous les utilisateurs ou le garder « secret » au lieu de le rendre unique.',
      'Comparer des empreintes ou des jetons avec un opérateur d’égalité classique.',
      'Utiliser MD5 ou SHA-1 pour une signature ou une vérification d’intégrité de sécurité.',
      'Imposer des règles de composition et un changement tous les trente jours, au lieu de la longueur et du MFA.',
      'Écrire des mots de passe ou des jetons dans les journaux d’erreur.',
      'Dériver un jeton ou une clé de valeurs connues (identifiant, heure) au lieu d’un générateur cryptographique.',
    ],
    bestPractices: [
      'Argon2id pour les mots de passe, avec sel aléatoire unique et paramètres stockés dans l’empreinte.',
      'HMAC-SHA-256 pour authentifier un message avec une clé partagée.',
      'Générateur cryptographique pour tout secret, sel ou jeton.',
      'Comparaisons à temps constant pour toute valeur secrète.',
      'Utiliser une bibliothèque reconnue plutôt que de composer soi-même les primitives.',
      'Longueur de mot de passe et vérification contre les mots de passe compromis ; MFA ou clés d’accès pour les comptes sensibles.',
      'Limitation de débit, détection du bourrage d’identifiants et de la pulvérisation, messages d’erreur neutres.',
      'Jetons de 128 bits ou plus issus d’un CSPRNG, à usage unique, de durée courte, stockés sous forme hachée.',
    ],
    keyPoints: [
      'Hachage : non réversible, sans clé ; chiffrement : réversible avec clé ; encodage : aucune sécurité.',
      'HMAC = intégrité + authenticité grâce à une clé secrète.',
      'Mots de passe : fonction lente + sel unique (Argon2id), jamais un simple SHA-256.',
      'MD5 et SHA-1 sont cassés pour les usages de sécurité.',
      'Une empreinte ne prouve pas l’origine : il faut un canal distinct ou une signature numérique.',
      'La plupart des compromissions viennent de la réutilisation et des attaques en ligne : longueur, MFA, détection.',
      'Clés et jetons viennent d’un CSPRNG ou d’une KDF, jamais d’une valeur devinable.',
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
    {
      id: 'conception-auth',
      kind: 'case',
      title: 'Cas pratique : concevoir l’authentification d’une application',
      context: [{ t: 'p', text: 'Vous concevez une application web destinée au grand public, avec des comptes utilisateurs, une réinitialisation de mot de passe par courriel et un espace réservé aux administrateurs. Elle doit résister à une fuite de sa base de données et aux attaques en ligne.' }],
      steps: ['Définir le stockage des mots de passe (algorithme, paramètres, sel, poivre).', 'Définir la politique de mots de passe et les protections contre les attaques en ligne.', 'Définir la génération, le stockage et la durée de vie des jetons de réinitialisation.'],
    },
  ],
  questions,
  resources: [
    { title: 'Password Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' },
    { title: 'RFC 9106 — Argon2', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9106' },
    { title: 'RFC 2104 — HMAC', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc2104' },
    { title: 'Digital Identity Guidelines — Authentication (SP 800-63B)', source: 'NIST', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' },
    { title: 'RFC 5869 — HKDF', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc5869' },
    { title: 'Crypto.getRandomValues()', source: 'MDN', url: 'https://developer.mozilla.org/docs/Web/API/Crypto/getRandomValues' },
    { title: 'Guide de sélection d’algorithmes cryptographiques', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
  ],
};
