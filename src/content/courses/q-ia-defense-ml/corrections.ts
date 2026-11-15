import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'q-ia-defense-ml',
  questions: {
    'aiml-q1': { type: 'single', correct: 'a', explanation: 'L’apprentissage supervisé ajuste le modèle à partir d’exemples dont la bonne réponse est connue. Le non supervisé travaille sans étiquettes, en regroupant ou en repérant les écarts.' },
    'aiml-q2': { type: 'truefalse', correct: true, explanation: 'Le modèle exploite toute corrélation présente dans les données, même accidentelle (source, date, taille). C’est pourquoi la constitution et la vérification des données d’entraînement sont essentielles.' },
    'aiml-q3': { type: 'short', accepted: ['features', 'feature'], explanation: 'Les « features » (caractéristiques) sont les grandeurs mesurées sur chaque exemple : leur choix conditionne ce que le modèle peut apprendre et ce qu’un attaquant peut manipuler.' },
    'aiml-q4': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Détecter des écarts à une ligne de base et regrouper des éléments similaires ne nécessitent pas d’étiquettes : ce sont des usages classiques du non supervisé.', whyWrong: { d: 'Vérifier une signature est une opération cryptographique déterministe, sans apprentissage.' } },
    'aiml-q5': { type: 'single', correct: 'a', explanation: 'La précision rapporte les vrais positifs au total des alertes. Le rappel (option b) rapporte les vrais positifs au total des événements malveillants.' },
    'aiml-q6': { type: 'truefalse', correct: false, explanation: 'Si 0,1 % des événements sont malveillants, un modèle qui ne détecte jamais rien atteint déjà 99,9 % d’exactitude. Il faut examiner la précision, le rappel et le taux de faux positifs.' },
    'aiml-q7': { type: 'short', accepted: ['drift', 'data drift', 'concept drift'], explanation: 'La dérive (drift) fait baisser les performances d’un modèle à mesure que les usages, les logiciels et les techniques d’attaque évoluent ; elle se surveille en production.' },
    'aiml-q8': {
      type: 'open',
      model: 'Vrais positifs : 95 % de 20, soit environ 19 attaques détectées par jour. Faux positifs : 0,5 % d’environ 2 000 000 événements légitimes, soit environ 10 000 fausses alertes par jour. Précision : 19 / (19 + 10 000), soit environ 0,2 %. Les analystes devraient examiner plus de 500 alertes pour en trouver une vraie : c’est ingérable, et les vraies attaques seraient noyées. Le taux de faux positifs doit être beaucoup plus bas, ou le détecteur utilisé comme un signal parmi d’autres (corrélation, score cumulé) plutôt que comme source d’alertes directes.',
      criteria: ['Le nombre de vrais positifs (environ 19) est calculé.', 'Le nombre de faux positifs (environ 10 000) est calculé.', 'La précision très faible et son effet sur le SOC sont commentés.', 'Une piste d’amélioration ou d’usage adapté est proposée.'],
      explanation: 'C’est le paradoxe du taux de base : quand les événements recherchés sont rares, même un faible taux de faux positifs domine le volume d’alertes.',
    },
    'aiml-q9': { type: 'single', correct: 'a', explanation: 'L’IA propose et justifie, l’analyste décide : les erreurs du modèle sont rattrapées avant d’avoir un effet. Les autres options laissent le modèle prendre seul des décisions à fort impact.' },
    'aiml-q10': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Regroupement, enrichissement, résumé et aide à la recherche sont des tâches volumineuses où l’IA fait gagner du temps sans décider à la place de l’analyste.', whyWrong: { d: 'Une décision qui touche une personne exige une analyse humaine, des garanties et relève aussi du droit du travail et du RGPD.' } },
    'aiml-q11': { type: 'truefalse', correct: true, explanation: 'Sans les éléments de preuve, l’analyste ne peut que croire ou ignorer la suggestion. Avec eux, il la vérifie vite et repère les erreurs du modèle.' },
    'aiml-q12': { type: 'single', correct: 'a', explanation: 'L’empoisonnement corrompt l’apprentissage lui-même, par exemple en faisant étiqueter comme légitimes des exemples malveillants. L’évasion, elle, vise un modèle déjà entraîné.' },
    'aiml-q13': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Moins d’information par réponse, moins de requêtes possibles et un entraînement qui limite la mémorisation des cas individuels réduisent ce que l’attaquant peut déduire.', whyWrong: { d: 'Publier les données d’entraînement exposerait directement les informations que ces attaques cherchent à obtenir.' } },
    'aiml-q14': { type: 'truefalse', correct: true, explanation: 'Le format pickle peut contenir des instructions exécutées au chargement. On préfère des formats de poids qui ne contiennent que des données (par exemple safetensors) et on vérifie la provenance et la signature des modèles.' },
    'aiml-q15': {
      type: 'open',
      model: 'Il s’agit d’une attaque par évasion : l’attaquant modifie le fichier (ajout de données sans effet, réorganisation, chiffrement partiel) pour changer les caractéristiques vues par le modèle sans changer le comportement du programme. Mesures : 1) fonder la détection sur des caractéristiques difficiles à modifier sans casser le programme (comportement à l’exécution, appels système) plutôt que sur des caractéristiques superficielles ; 2) combiner plusieurs détecteurs indépendants (signatures, analyse dynamique, EDR comportemental) pour qu’un contournement unique ne suffise pas ; 3) réentraîner le modèle avec les variantes modifiées découvertes (entraînement antagoniste) et surveiller les baisses de performance. On peut aussi limiter l’accès de l’attaquant au score du modèle, qui l’aide à ajuster ses modifications.',
      criteria: ['L’attaque est identifiée comme une évasion.', 'Au moins trois mesures distinctes sont proposées.', 'L’idée de caractéristiques robustes ou de défense en profondeur est présente.'],
      explanation: 'Aucun modèle n’est infaillible face à un attaquant adaptatif : la robustesse vient de la combinaison des approches et de leur mise à jour.',
    },
    'aiml-q16': { type: 'short', accepted: ['ATLAS', 'MITRE ATLAS'], explanation: 'MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) recense tactiques, techniques et études de cas d’attaques contre des systèmes d’IA.' },
  },
};
