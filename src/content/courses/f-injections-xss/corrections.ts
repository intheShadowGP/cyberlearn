import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'f-injections-xss',
  questions: {
    'web-q1': { type: 'single', correct: 'b', explanation: 'Qu’il s’agisse de SQL, de HTML, de commandes shell ou de requêtes NoSQL, l’injection survient quand une donnée change la structure d’une instruction interprétée. La correction consiste à séparer structurellement code et données.' },
    'web-q2': { type: 'truefalse', correct: false, explanation: 'La validation côté client améliore l’ergonomie mais se contourne trivialement : l’attaquant envoie sa requête directement (curl, proxy). Toute validation de sécurité doit être faite côté serveur.' },
    'web-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Tout ce qui provient de l’extérieur du code serveur est contrôlable par un attaquant, directement (en-têtes, cookies) ou indirectement (API tierce compromise).', whyWrong: { d: 'Une constante du code source est maîtrisée par les développeurs ; elle n’est pas une entrée externe.' } },
    'web-q4': { type: 'single', correct: 'b', explanation: 'L’apostrophe ferme la chaîne du login et `-- ` met le reste de la requête en commentaire, supprimant la condition sur le mot de passe.', whyWrong: { c: 'Une balise script vise une XSS, pas une injection SQL ; ici elle serait traitée comme un identifiant inexistant.' } },
    'web-q5': { type: 'short', accepted: ['requetes parametrees', 'requêtes paramétrées', 'requetes preparees', 'requêtes préparées', 'requete parametree', 'requête paramétrée', 'prepared statements'], explanation: 'Avec une requête paramétrée (ou préparée), le texte SQL et les valeurs sont transmis séparément au moteur : une valeur ne peut jamais modifier la structure de la requête.' },
    'web-q6': { type: 'truefalse', correct: false, explanation: 'Les paramètres liés ne peuvent représenter que des valeurs, pas des identifiants (tables, colonnes) ni des mots-clés (ASC/DESC). Il faut alors comparer l’entrée à une liste blanche de colonnes autorisées.' },
    'web-q7': { type: 'single', correct: 'a', explanation: 'La page ne renvoie pas le résultat de la requête, mais son temps de réponse dépend d’une condition injectée : c’est une injection aveugle temporelle. Elle permet d’extraire des données bit par bit.' },
    'web-q8': { type: 'single', correct: 'c', explanation: 'La charge provient du fragment d’URL (après #), qui n’est même pas envoyé au serveur ; elle est insérée par le JavaScript de la page dans un puits dangereux (innerHTML). C’est une XSS DOM.' },
    'web-q9': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Le script s’exécute avec l’origine du site : il lit le DOM, émet des requêtes authentifiées (les cookies sont joints automatiquement) et peut modifier l’affichage pour piéger l’utilisateur.', whyWrong: { c: 'L’attribut HttpOnly rend le cookie inaccessible à JavaScript. Le script peut néanmoins agir au nom de l’utilisateur : HttpOnly limite l’impact sans le supprimer.' } },
    'web-q10': { type: 'short', accepted: ['textcontent', '.textcontent', 'innertext'], explanation: '`textContent` insère la valeur comme texte : les balises sont affichées telles quelles et jamais interprétées. `innerText` a le même effet de sécurité.' },
    'web-q11': { type: 'truefalse', correct: false, explanation: 'Une URL `javascript:alert(1)` ne contient aucun caractère HTML spécial : l’encodage HTML la laisse passer. Il faut valider le schéma (http/https uniquement) en plus de l’encodage d’attribut.' },
    'web-q12': { type: 'single', correct: 'b', explanation: "`'unsafe-inline'` autorise tout script inline, y compris celui injecté par l’attaquant. On le remplace par des nonces ou des empreintes pour les scripts inline légitimes." },
    'web-q13': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Une CSP stricte bloque l’exécution des scripts injectés, HttpOnly empêche le vol direct des cookies de session, et les nonces permettent d’éviter unsafe-inline.', whyWrong: { c: 'Base64 est un encodage de transport, sans aucun effet sur l’exécution de scripts dans la page.' } },
    'web-q14': {
      type: 'open',
      model: 'Doubler les apostrophes est un échappement manuel, dépendant du SGBD et du contexte : il ne protège pas un paramètre numérique non entouré de guillemets (`WHERE id = 1 OR 1=1`), peut être contourné selon les encodages et jeux de caractères, et doit être pensé à chaque endroit, donc sera oublié quelque part. Recommandation : requêtes paramétrées partout (y compris via l’ORM), liste blanche pour les identifiants dynamiques, compte de base aux droits minimaux, et tests automatisés (SAST) détectant toute concaténation dans une requête.',
      criteria: ['Au moins une limite de l’échappement manuel est expliquée (contexte numérique, encodage, oubli).', 'Les requêtes paramétrées sont recommandées comme correction structurelle.', 'Une mesure complémentaire (moindre privilège en base, SAST, liste blanche) est proposée.'],
      explanation: 'L’échappement manuel traite le symptôme ; la requête paramétrée supprime la cause.',
    },
    'web-q15': {
      type: 'open',
      model: '1) Déployer d’abord la politique en `Content-Security-Policy-Report-Only` avec un point de collecte des rapports, pour mesurer sans bloquer. 2) Inventorier les scripts inline et les déplacer dans des fichiers externes ; pour ceux qui doivent rester inline, utiliser un nonce généré à chaque réponse. 3) Remplacer les gestionnaires `onclick=` par `addEventListener`. 4) Lister les domaines tiers réellement nécessaires. 5) Itérer jusqu’à n’avoir plus de violations légitimes, puis basculer en mode bloquant, en gardant les rapports actifs pour détecter les régressions et les tentatives d’attaque.',
      criteria: ['Le mode Report-Only est utilisé avant l’application.', 'Les scripts inline sont externalisés ou protégés par nonce ou empreinte.', 'Le passage en mode bloquant est progressif et surveillé.'],
      explanation: 'Une CSP appliquée brutalement casse souvent l’application et finit désactivée. Le mode Report-Only permet un déploiement sans risque.',
    },
    'web-q16': { type: 'single', correct: 'b', explanation: '`frame-ancestors` indique quels sites peuvent intégrer la page dans un cadre (iframe). `frame-ancestors \'none\'` empêche toute intégration, et donc le détournement de clic. Il remplace l’ancien en-tête X-Frame-Options.' },
  },
};
