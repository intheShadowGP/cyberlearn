import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'televersement',
        title: 'Téléversement de fichiers et désérialisation',
        blocks: [
          { t: 'p', text: 'Deux fonctionnalités banales font entrer des **octets contrôlés par l’utilisateur** dans le serveur : le téléversement d’un fichier (avatar, justificatif) et la reconstitution d’objets à partir de données reçues (cookie, message, fichier de session). Mal traitées, elles conduisent à l’exécution de code.' },
          {
            t: 'table',
            head: ['Risque', 'Mécanisme', 'Parade'],
            rows: [
              ['**Exécution d’un script téléversé**', 'Un fichier `.php` ou `.jsp` déposé dans un répertoire servi et exécuté par le serveur', 'Stocker **hors de la racine web** (ou sur un stockage d’objets), jamais en exécution'],
              ['**Contournement de contrôle**', '`shell.php.jpg`, double extension, type MIME envoyé par le client falsifié', 'Liste blanche d’extensions, vérification du **contenu réel** (signature du fichier), renommage aléatoire'],
              ['**Nom de fichier piégé**', '`../../config` dans le nom envoyé : traversée de répertoires', 'Ignorer le nom du client, générer le sien'],
              ['**Fichier actif**', 'SVG ou HTML contenant un script : XSS stockée', 'Servir avec un type forcé et un en-tête `Content-Disposition`, domaine séparé, CSP'],
              ['**Épuisement de ressources**', 'Fichier énorme, archive qui se décompresse en gigaoctets', 'Limites de taille et de nombre, quotas, analyse en bac à sable'],
            ],
          },
          {
            t: 'example',
            title: 'Enregistrer un avatar de façon sûre',
            blocks: [
              { t: 'code', lang: 'python', code: 'import secrets\n\nAUTORISEES = {"jpeg": ".jpg", "png": ".png"}\n\ndef enregistrer_avatar(fichier):\n    contenu = fichier.read(2_000_001)\n    if len(contenu) > 2_000_000:\n        raise Refus("fichier trop gros")\n    type_reel = detecter_format(contenu)       # signature des premiers octets, pas le nom\n    if type_reel not in AUTORISEES:\n        raise Refus("format non autorisé")\n    nom = secrets.token_hex(16) + AUTORISEES[type_reel]   # nom choisi par le serveur\n    ecrire(f"/srv/avatars/{nom}", contenu)        # hors de la racine web\n    return nom' },
            ],
          },
          { t: 'def', term: 'Désérialisation non sûre', text: 'Reconstruire un objet à partir de données non fiables avec un mécanisme qui peut **instancier des classes arbitraires** ou appeler du code pendant la reconstruction (`pickle` en Python, `ObjectInputStream` en Java, `unserialize` en PHP, `BinaryFormatter` en .NET). Une charge fabriquée déclenche l’exécution de code **avant** que l’application n’examine l’objet obtenu.' },
          { t: 'list', items: ['**Ne jamais désérialiser** des données non fiables avec un format qui exécute du code.', 'Échanger des données dans un **format simple** (JSON) validé par un schéma ; les objets sont reconstruits par l’application, pas par le format.', 'Si la sérialisation native est inévitable, **signer** (HMAC) les données et vérifier la signature avant toute désérialisation, avec une liste blanche de classes.', 'Garder les bibliothèques à jour : de nombreuses chaînes d’exploitation visent des composants connus.'] },
          { t: 'callout', kind: 'warn', text: 'Un cookie contenant un objet sérialisé (préférences, panier) et lu avec `pickle.loads` offre à l’utilisateur l’exécution de code sur le serveur : il contrôle le contenu du cookie.' },
        ],
      },
      {
        id: 'logique',
        title: 'Logique métier et restitution des résultats',
        blocks: [
          { t: 'p', text: 'Certaines failles n’ont aucune signature technique : l’application fait exactement ce qu’elle a été programmée à faire, mais dans un enchaînement que personne n’avait prévu. Les scanners ne les trouvent pas : elles se découvrent par la compréhension du métier et par des **cas d’abus**.' },
          { t: 'def', term: 'Faille de logique métier', text: 'Défaut dans les règles de gestion d’une application (ordre des étapes, calcul d’un prix, droits associés à un état) qui permet d’obtenir un avantage non prévu en utilisant des fonctions **légitimes** de manière détournée.' },
          {
            t: 'table',
            head: ['Cas d’abus', 'Faille', 'Parade'],
            rows: [
              ['Le prix est envoyé par le navigateur dans le formulaire de paiement', 'Confiance dans une donnée contrôlée par le client', 'Recalculer prix, remises et totaux côté serveur'],
              ['Passer directement à l’étape « confirmation » sans payer', 'Parcours non imposé par le serveur', 'Machine à états côté serveur : chaque étape vérifie les précédentes'],
              ['Quantité `-1` : le total diminue, la ligne devient un crédit', 'Absence de bornes sur les valeurs', 'Validation des plages et des signes'],
              ['Remboursement demandé plusieurs fois pour une même commande', 'Opération non idempotente', 'Statut de commande vérifié et modifié de façon atomique'],
              ['Création de nombreux comptes pour cumuler un bonus de parrainage', 'Absence de limite par personne', 'Limites, détection d’abus, vérification d’identité'],
            ],
          },
          {
            t: 'example',
            title: 'Un cas d’abus devenu test',
            blocks: [
              { t: 'code', lang: 'text', code: 'Cas d’abus : ajouter au panier « -3 articles à 10 € » puis payer\nAttendu     : refus (quantité invalide)\nObservé     : total = 70 € au lieu de 100 €, réduction non prévue\n\nTest        : POST /panier {"article": 12, "quantite": -3}  →  422' },
            ],
          },
          { t: 'p', text: 'Un test n’a de valeur que s’il aboutit à une **restitution** exploitable. Chaque constat est décrit de façon à être reproduit et corrigé, et sa gravité est évaluée de façon homogène.' },
          { t: 'def', term: 'CVSS', text: 'Système de notation qui exprime la **gravité technique** d’une vulnérabilité sur une échelle de 0 à 10, à partir de critères (vecteur d’attaque, complexité, privilèges requis, impact sur la confidentialité, l’intégrité et la disponibilité). Il est complété par le contexte métier pour prioriser.' },
          { t: 'list', items: ['**Fiche de constat** : titre, description, étapes de reproduction, preuve, impact, gravité (CVSS), correction proposée.', '**Priorisation** : gravité technique, exposition, valeur des données, facilité d’exploitation.', '**Confidentialité** : le rapport décrit des failles non corrigées ; il est diffusé à un cercle restreint, sans données réelles inutiles ni mots de passe en clair.', '**Contre-vérification** après correction, avec le test d’origine.'] },
          { t: 'callout', kind: 'tip', text: 'Écrire le cas d’abus avant de coder la fonction (« et si l’utilisateur envoie… ? ») coûte quelques minutes ; le découvrir en production coûte beaucoup plus cher.' },
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
    {
      id: 'revue-upload',
      kind: 'analysis',
      title: 'Revue de code : téléversement et préférences sérialisées',
      context: [
        { t: 'code', lang: 'python', code: '# 1 : téléversement d’un avatar\n@app.post("/avatar")\ndef avatar():\n    f = request.files["fichier"]\n    if f.filename.endswith(".jpg"):\n        f.save("/var/www/html/images/" + f.filename)\n        return "ok"\n\n# 2 : lecture des préférences de l’utilisateur\nprefs = pickle.loads(base64.b64decode(request.cookies["prefs"]))\n\n# 3 : commande du panier\ntotal = sum(l["prix"] * l["quantite"] for l in request.json["lignes"])' },
      ],
      steps: ['Nommer la vulnérabilité de chaque extrait et décrire une attaque.', 'Écrire la correction de chaque extrait.', 'Proposer un cas d’abus à transformer en test automatisé pour l’extrait 3.'],
    },
  ],
  questions,
  resources: [
    { title: 'XML External Entity Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html' },
    { title: 'File Upload / Path Traversal & LFI (Testing Guide)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { title: 'Clickjacking Defense Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html' },
    { title: 'Content-Security-Policy: frame-ancestors', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors' },
    { title: 'Web Security Testing Guide (WSTG)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
  ],
};
