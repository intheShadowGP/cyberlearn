import type { ScenarioCorrections } from '../../scenarios';

export const corrections: ScenarioCorrections = {
  scenarioId: 'web-appsec-intrusion',
  questions: {
    'sc-web-q1': {
      type: 'single',
      correct: 'a',
      explanation:
        "La charge `1' OR '1'='1` modifie la logique de la requête SQL, et l'**erreur de syntaxe SQL** du journal applicatif confirme que l'entrée atteint directement la base : c'est une **injection SQL**. Le paramètre `id`, attendu numérique, est concaténé sans échappement ni requête paramétrée.",
      whyWrong: {
        b: "Un XSS s'exécute dans le navigateur de la victime ; il ne provoque pas d'erreur de syntaxe SQL côté serveur.",
        c: "La SSRF force le serveur à émettre des requêtes vers d'autres systèmes, ce qui n'est pas le cas ici.",
        d: "La force brute multiplie les tentatives d'authentification ; on n'en voit aucune trace.",
      },
      refs: ['OWASP Top 10 2021 — A03 Injection'],
    },
    'sc-web-q2': {
      type: 'short',
      accepted: ['200', 'http 200', 'code 200'],
      explanation:
        "Le code **200** accompagne les requêtes d'injection ayant renvoyé une page (dont la requête `UNION` de 48 907 octets). Le `500` (10:02:19) correspond à l'essai qui a provoqué une erreur. Distinguer 200 et 500 permet de séparer ce qui a abouti de ce qui a échoué.",
      refs: ['Source 2 (journal d’accès HTTP) : codes de statut'],
    },
    'sc-web-q3': {
      type: 'single',
      correct: 'a',
      explanation:
        "La séquence `../../../` qui remonte l'arborescence pour atteindre `/etc/passwd` est une **traversée de répertoires** (path traversal) : l'application utilise une entrée utilisateur comme chemin de fichier sans la contraindre à un répertoire autorisé.",
      whyWrong: {
        b: "Une injection de commande exécuterait un programme, pas la lecture d'un fichier par un chemin relatif.",
        c: "Un IDOR manipule un identifiant d'objet (ex. numéro de commande), pas un chemin de fichier.",
        d: "Une redirection ouverte détourne la navigation de l'utilisateur, sans lire de fichier serveur.",
      },
      refs: ['CWE-22 : Improper Limitation of a Pathname to a Restricted Directory (Path Traversal)'],
    },
    'sc-web-q4': {
      type: 'truefalse',
      correct: true,
      explanation:
        "La réutilisation du cookie/jeton de session de l'administrateur depuis une adresse externe inhabituelle (203.0.113.45, au lieu de 10.0.0.12) est caractéristique d'un **détournement de session** : l'attaquant rejoue un identifiant de session valide. D'où l'importance d'invalider les sessions lors du confinement.",
      refs: ['Détournement de session (session hijacking) ; source 3, ligne AUTH'],
    },
    'sc-web-q5': {
      type: 'single',
      correct: 'a',
      explanation:
        "La preuve d'une **exfiltration réussie** est la réponse volumineuse à la requête `UNION` corroborée par les **1 482 lignes** de la table « utilisateurs » renvoyées au journal applicatif : des données sont réellement sorties. Une IP externe, une erreur 500 ou la méthode GET n'établissent, isolément, qu'une tentative.",
      whyWrong: {
        b: "Des requêtes répétées depuis une IP externe signalent une attaque, mais pas qu'elle a extrait des données.",
        c: "Une erreur 500 indique au contraire un essai qui a échoué.",
        d: "La méthode GET est sans rapport avec le succès de l'extraction.",
      },
      refs: ['Sources 2 et 3 recoupées : taille de réponse et nombre de lignes'],
    },
    'sc-web-q6': {
      type: 'multi',
      correct: ['a', 'b', 'c'],
      explanation:
        "Le confinement combine : couper l'accès de l'attaquant (blocage de l'adresse, mise hors service du point d'entrée vulnérable), invalider les sessions et changer les secrets qui ont pu être exposés, et **préserver** les journaux comme preuves. Effacer les journaux détruirait les preuves et relèverait d'une entrave à l'investigation.",
      whyWrong: {
        d: "Effacer les journaux d'accès détruit les preuves de l'incident et empêche de mesurer sa portée.",
      },
      refs: ['NIST SP 800-61r2, phase « Confinement, éradication, rétablissement »'],
    },
    'sc-web-q7': {
      type: 'single',
      correct: 'a',
      explanation:
        "La défense durable contre l'injection SQL est l'usage de **requêtes préparées (paramétrées)** : la structure de la requête est figée et les données sont transmises séparément, si bien qu'elles ne peuvent plus altérer la logique SQL. Un WAF, le masquage des erreurs ou la limitation des réponses ne sont que des mesures complémentaires.",
      whyWrong: {
        b: "Un WAF filtre certaines charges mais se contourne ; seul, il ne corrige pas la vulnérabilité.",
        c: "Masquer les messages d'erreur gêne l'attaquant sans empêcher l'injection.",
        d: "Limiter la taille des réponses ne corrige pas la faille, elle freine seulement l'exfiltration.",
      },
      refs: ['OWASP Top 10 2021 — A03 Injection : requêtes préparées comme défense principale'],
    },
  },
  debrief: [
    {
      t: 'p',
      text: "**Reconstitution.** Un attaquant externe (203.0.113.45) sonde le paramètre `id` de `/produits` (10:02), déclenche une erreur SQL, puis exfiltre la table « utilisateurs » par une requête `UNION` (réponse de 48 907 octets, 1 482 lignes — source 3). Il réutilise ensuite une session administrateur depuis la même adresse (10:05) et tente une traversée de répertoires vers `/etc/passwd` (10:06).",
    },
    {
      t: 'list',
      ordered: true,
      items: [
        '**Accès / exfiltration** : injection SQL sur un paramètre concaténé sans requête préparée (OWASP A03).',
        '**Portée** : extraction confirmée (taille de réponse + nombre de lignes), données personnelles concernées.',
        '**Rebond** : détournement de session administrateur, puis traversée de répertoires (CWE-22).',
        '**Démarche** : qualifier (technique, succès, portée) avant de confiner, sans effacer les preuves.',
      ],
    },
    {
      t: 'callout',
      kind: 'key',
      text: "Lire les journaux ne suffit pas : il faut **distinguer tentative et succès** (codes de statut, taille des réponses, lignes renvoyées), puis agir proportionnellement — couper l'accès, invalider les sessions, préserver les preuves — et corriger la cause (requêtes préparées), pas seulement le symptôme.",
    },
    {
      t: 'p',
      text: "**Durcissement** : requêtes préparées systématiques, validation stricte des entrées (type attendu pour `id`), confinement des chemins de fichiers à un répertoire autorisé, cookies de session `HttpOnly`/`Secure`/`SameSite` et liaison de session renforcée, journalisation préservée et supervisée.",
    },
  ],
};
