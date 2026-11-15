import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'f-xxe-rfi-clickjacking-race',
  questions: {
    'xrc-q1': { type: 'single', correct: 'a', explanation: 'La XXE vient d’un analyseur XML qui résout les entités externes sur un document fourni par l’utilisateur : l’attaquant définit une entité pointant vers un fichier ou une URL que l’analyseur va charger.' },
    'xrc-q2': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Selon la configuration, une XXE permet de lire des fichiers, d’atteindre des services internes (comme une SSRF) ou de provoquer un déni de service par expansion d’entités.', whyWrong: { d: 'Une attaque ne « rend pas le serveur plus rapide » : c’est un distracteur.' } },
    'xrc-q3': { type: 'single', correct: 'a', explanation: 'La correction de référence est de désactiver la résolution des entités externes et le traitement des DTD dans l’analyseur. Le reste (mots de passe, port, HTTP) n’a aucun effet sur XXE.' },
    'xrc-q4': { type: 'single', correct: 'a', explanation: 'La LFI inclut un fichier présent sur le serveur (lecture de fichiers sensibles, parfois exécution) ; la RFI inclut un fichier depuis une URL externe, donc du code fourni par l’attaquant, ce qui est très grave.' },
    'xrc-q5': { type: 'truefalse', correct: true, explanation: 'Dès que le chemin inclut une valeur de l’utilisateur sans contrôle, celui-ci peut la détourner (`../`, URL) pour faire inclure un autre fichier : c’est la cause des inclusions LFI/RFI.' },
    'xrc-q6': { type: 'short', accepted: ['table de correspondance', 'correspondance', 'table de correspondances', 'liste d\'autorisation', 'liste d’autorisation', 'allowlist'], explanation: 'Associer chaque valeur attendue (par exemple `sujet=installation`) à un fichier connu via une table de correspondance supprime tout chemin piloté par l’utilisateur : la valeur ne sert que de clé.' },
    'xrc-q7': { type: 'single', correct: 'a', explanation: 'Le clickjacking superpose l’application réelle, dans un cadre invisible, à une page leurre : la victime croit cliquer sur le leurre mais agit sur l’application où elle est authentifiée.' },
    'xrc-q8': { type: 'short', accepted: ['frame-ancestors', 'frame ancestors'], explanation: '`frame-ancestors` (directive CSP) indique quels sites peuvent encadrer la page. `\'none\'` interdit tout encadrement ; elle remplace l’ancien `X-Frame-Options`.' },
    'xrc-q9': { type: 'multi', correct: ['a', 'b', 'c'], explanation: '`frame-ancestors`, `X-Frame-Options` (pour les vieux navigateurs) et la confirmation explicite des actions sensibles protègent du détournement de clic.', whyWrong: { d: 'Désactiver HTTPS n’a aucun rapport et dégrade la sécurité.' } },
    'xrc-q10': {
      type: 'open',
      model: 'TOCTOU (Time-Of-Check to Time-Of-Use) désigne une condition de course où la vérification d’un état et l’action qui en dépend ne sont pas atomiques : entre les deux, une requête concurrente modifie l’état, si bien que la vérification ne correspond plus à la réalité au moment de l’action. Exemple : un code de réduction « à usage unique ». L’application vérifie qu’il n’a pas servi, puis l’applique. En envoyant plusieurs requêtes exactement en même temps, plusieurs passent la vérification avant que la première n’ait marqué le code comme utilisé, et la réduction est appliquée plusieurs fois. Autres exemples : retirer plus que son solde, dépasser un quota, utiliser un jeton à usage unique deux fois.',
      criteria: ['TOCTOU est défini comme un écart non atomique entre vérification et action.', 'Le rôle des requêtes concurrentes est expliqué.', 'Un exemple concret de contournement de limite est donné.'],
      explanation: 'La correction consiste toujours à rendre l’ensemble vérification + action atomique (contrainte d’unicité, mise à jour conditionnelle, verrou, idempotence).',
    },
    'xrc-q11': { type: 'truefalse', correct: true, explanation: 'Si la vérification et l’action ne sont pas atomiques, plusieurs requêtes envoyées exactement en même temps peuvent toutes passer la vérification avant que la première n’ait mis l’état à jour.' },
    'xrc-q12': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Contrainte d’unicité, mise à jour conditionnelle atomique et verrou/transaction garantissent qu’une seule requête réussit, quelles que soient les concurrentes.', whyWrong: { d: 'Un message à l’utilisateur ne change rien au comportement du serveur face à des requêtes simultanées.' } },
    'xrc-q13': { type: 'single', correct: 'a', explanation: 'Le WSTG décrit une démarche de test structurée par catégories, à mener sur une cible autorisée. Ce n’est ni un outil de chiffrement ni un pare-feu.' },
    'xrc-q14': { type: 'truefalse', correct: false, explanation: 'Tester une application sans autorisation est illégal, indépendamment de l’intention. Un test se fait dans un périmètre autorisé par écrit ou sur un environnement d’entraînement prévu pour cela.' },
    'xrc-q15': { type: 'single', correct: 'a', explanation: 'L’ASVS définit les exigences de sécurité (le « quoi »), le WSTG explique comment les tester (le « comment »). Les deux se complètent.' },
    'xrc-q16': {
      type: 'open',
      model: 'Cadre d’abord : obtenir une autorisation écrite précisant le périmètre (l’application de recette et ses composants, pas la production), la fenêtre de test, les comptes fournis, les données autorisées (jeux de test, pas de données réelles sensibles) et les personnes à prévenir. Démarche : cartographier l’application (pages, points d’entrée, rôles, technologies) ; dérouler les catégories du WSTG (authentification, sessions, contrôle d’accès, validation des entrées dont XXE et inclusion, configuration, logique métier dont conditions de course) en consignant chaque test et son résultat ; reproduire les constats de façon fiable et évaluer leur impact ; rédiger un rapport (description, preuve, impact, correction) ; vérifier les correctifs après remédiation. Veiller à ne pas dégrader l’environnement de recette (données de test, pas d’action destructrice non prévue).',
      criteria: ['Les précautions de cadre (autorisation écrite, périmètre, données de test) sont explicites.', 'Une démarche structurée inspirée du WSTG est décrite.', 'La documentation et la vérification des correctifs sont mentionnées.'],
      explanation: 'Le cadre légal et la méthode comptent autant que la technique : un test non autorisé ou non documenté n’a pas de valeur et expose juridiquement.',
    },
  },
};
