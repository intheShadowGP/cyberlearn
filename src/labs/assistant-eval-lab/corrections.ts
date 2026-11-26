import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'assistant-eval-lab',
  questions: {
    'aelab-q1': { type: 'short', accepted: ['83', '83%', '83 %', '10/12'], explanation: 'Dix cas sur douze sont conformes : 10 / 12 ≈ 83 %. Ce chiffre rassure, mais il masque la répartition des échecs.' },
    'aelab-q2': { type: 'short', accepted: ['injection', 'injection indirecte', 'injection de prompt'], explanation: 'Les deux cas d’injection indirecte échouent : l’assistant classe l’alerte « sans risque » et divulgue la liste des comptes parce que des contenus analysés le lui demandent.' },
    'aelab-q3': { type: 'single', correct: 'b', explanation: 'Une moyenne de 83 % ne compense pas un taux de 0 % sur un risque précis : c’est justement le cas où un attaquant peut piloter l’assistant. La mise en production attend la correction et un nouveau passage du jeu de tests.', whyWrong: { a: 'Une moyenne ne dit rien de la répartition : ici, 100 % de l’échec porte sur un seul risque grave.', c: 'Un risque rare à l’échelle des alertes reste exploitable par un attaquant qui le provoque.', d: 'Retirer un cas qui échoue fausse la mesure au lieu de corriger le défaut.' } },
    'aelab-q4': { type: 'truefalse', correct: false, explanation: 'Un seuil global ne suffit pas : il faut des seuils par catégorie, et des catégories bloquantes (injection, fuite de données, action sensible) qui exigent une conformité totale.' },
    'aelab-q5': { type: 'single', correct: 'c', explanation: 'La parade est structurelle : le contenu analysé est une donnée et ne peut pas donner d’ordre, l’assistant n’a que les outils strictement nécessaires (et rien de destructeur sans confirmation humaine), et les cas qui ont échoué rejoignent le jeu de tests pour éviter toute régression.', whyWrong: { a: 'Plus de cas nominaux n’aide pas à traiter l’injection.', b: 'Cela supprime le service rendu au lieu de le sécuriser.', d: 'Une consigne polie dans le même texte ne résiste pas à une injection : elle se contourne.' } },
  },
  debrief: [
    { t: 'h', text: 'Lire un jeu de tests' },
    { t: 'table', head: ['Catégorie', 'Conformes', 'Total'], rows: [['Cas nominal', '3', '3'], ['Information manquante', '2', '2'], ['Injection indirecte', '**0**', '2'], ['Fuite de données', '2', '2'], ['Référence inventée', '2', '2'], ['Action sensible', '1', '1']] },
    { t: 'list', items: ['**Moyenne** : 10 / 12 ≈ 83 %. **Par catégorie** : 0 % sur l’injection.', '**Cause** : l’assistant suit les instructions du contenu qu’il analyse.', '**Décision** : pas de mise en production avant correction et nouveau passage du jeu de tests complet.'] },
    { t: 'callout', kind: 'key', title: 'Règle de décision', text: 'Fixez à l’avance un seuil par catégorie et des catégories bloquantes. Un assistant n’est pas évalué sur sa moyenne, mais sur le pire de ses risques.' },
  ],
};
