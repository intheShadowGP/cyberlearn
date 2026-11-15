import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'a-fichiers-programmes-ligne-commande',
  questions: {
    'fpc-q1': { type: 'single', correct: 'a', explanation: 'Le système de fichiers conserve le nom (dans un répertoire), les métadonnées (droits, propriétaire, dates) et le contenu (les données). Ces trois éléments sont distincts : on peut par exemple changer le nom sans toucher au contenu.' },
    'fpc-q2': { type: 'single', correct: 'a', explanation: 'Un chemin absolu part de la racine du système de fichiers (`/`, ou `C:\\`) et désigne le même emplacement quel que soit le répertoire courant. Un chemin relatif part, lui, du répertoire courant.' },
    'fpc-q3': { type: 'truefalse', correct: false, explanation: 'L’extension n’est qu’une indication : renommer un fichier ne change pas son contenu. En sécurité, on vérifie le type réel (par exemple un exécutable déguisé en document).' },
    'fpc-q4': { type: 'short', accepted: ['chemin relatif', 'relatif', 'relative'], explanation: 'Un chemin relatif part du répertoire courant ; `..` remonte d’un niveau. Les `..` dans un chemin fourni par un utilisateur sont à l’origine des attaques par traversée de répertoires.' },
    'fpc-q5': { type: 'single', correct: 'a', explanation: 'La compilation traduit l’ensemble du code source en code exécutable avant l’exécution ; l’interprétation lit et exécute le code au fur et à mesure, à chaque lancement. Certains langages combinent les deux via un format intermédiaire.' },
    'fpc-q6': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Les dépendances sont des bibliothèques externes embarquées dans le logiciel ; une dépendance vulnérable affecte l’application, d’où la nécessité d’en tenir l’inventaire et de les mettre à jour.', whyWrong: { d: 'Au contraire, les dépendances font partie du logiciel livré et de sa surface de sécurité.' } },
    'fpc-q7': { type: 'single', correct: 'a', explanation: 'Le code source est le texte écrit par le développeur dans un langage de programmation, lisible par un humain. Il doit être compilé ou interprété pour être exécuté par la machine.' },
    'fpc-q8': { type: 'single', correct: 'a', explanation: 'Dans le modèle client-serveur, le client envoie des requêtes et le serveur les traite puis renvoie les réponses. C’est le modèle du Web : navigateur (client) et serveur web.' },
    'fpc-q9': { type: 'truefalse', correct: false, explanation: 'Le code côté client peut être modifié par l’utilisateur : un contrôle qui n’existe que là se contourne. Les contrôles de sécurité qui comptent se font côté serveur, que l’on maîtrise.' },
    'fpc-q10': { type: 'short', accepted: ['frontière de confiance', 'frontiere de confiance', 'confiance'], explanation: 'La frontière de confiance sépare une zone maîtrisée d’une zone qui ne l’est pas. Les données qui la franchissent (du client vers le serveur) doivent être vérifiées du côté maîtrisé.' },
    'fpc-q11': {
      type: 'open',
      model: 'Le code et les données qui viennent du client (navigateur, application sur le poste de l’utilisateur) échappent au contrôle de celui qui exploite le service : l’utilisateur, ou un attaquant, peut modifier ce code, forger des requêtes, ignorer les vérifications affichées. Donc tout contrôle de sécurité (validité des données, droits d’accès, limites) doit être refait côté serveur, qui est le seul côté maîtrisé. Exemple : un formulaire qui vérifie en JavaScript qu’un champ « montant » est positif ne protège pas ; il suffit d’envoyer directement une requête avec un montant négatif. Le serveur doit revalider le montant. Autre exemple : masquer un bouton d’administration côté client ne protège pas la route, qui reste appelable.',
      criteria: ['L’idée que le code/les données du client sont modifiables est exprimée.', 'La nécessité de revérifier côté serveur est énoncée.', 'Un exemple concret est donné.'],
      explanation: 'C’est l’un des principes les plus transversaux de la sécurité applicative, repris dans les cours Web et code.',
    },
    'fpc-q12': { type: 'single', correct: 'a', explanation: 'Une boucle (`pour`, `tant que`) répète des instructions, par exemple pour parcourir tous les éléments d’une liste. Une variable, elle, stocke une valeur.' },
    'fpc-q13': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Une liste est une suite ordonnée de valeurs, un dictionnaire associe une clé à une valeur, et une variable est une valeur nommée modifiable.', whyWrong: { d: 'Une boucle répète des instructions ; elle n’a rien à voir avec le chiffrement.' } },
    'fpc-q14': { type: 'truefalse', correct: true, explanation: 'La ligne de commande rend chaque action explicite et rejouable : on voit exactement ce qui est demandé, et on peut l’automatiser, ce qui est précieux en administration et en analyse.' },
    'fpc-q15': { type: 'short', accepted: ['shell', 'un shell', 'le shell'], explanation: 'Le shell (Bash, PowerShell, Zsh…) interprète les commandes tapées, les enchaîne et automatise des tâches. Sa maîtrise est approfondie dans les modules Linux et Windows.' },
    'fpc-q16': {
      type: 'open',
      model: 'La ligne de commande est utile parce qu’elle est précise et reproductible : on voit exactement la commande exécutée, on peut la copier, la documenter et la rejouer à l’identique, ce qui évite les erreurs des manipulations à la souris et facilite l’analyse d’incident. Elle est aussi automatisable (scripts, tâches planifiées) et souvent le seul moyen d’administrer un serveur distant, qui n’a pas d’interface graphique. On peut ajouter qu’elle donne accès à des outils et des informations que l’interface graphique ne montre pas toujours.',
      criteria: ['La précision ou la reproductibilité est citée.', 'L’automatisation ou l’administration à distance est citée.'],
      explanation: 'Ces avantages expliquent pourquoi l’administration de serveurs et beaucoup d’outils de sécurité passent par la ligne de commande.',
    },
  },
};
