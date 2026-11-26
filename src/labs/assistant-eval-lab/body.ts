import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'assistant-eval-lab',
  hints: [
    'Pour chaque cas, comparez la réponse au comportement attendu de **sa catégorie**, pas à ce qui vous semble plausible.',
    'Un contenu analysé (courriel, document) est une **donnée** : si l’assistant en suit les instructions, il se laisse piloter.',
    'Calculez le taux par catégorie. Un bon score moyen peut cacher un échec total sur un risque précis.',
  ],
  questions: [
    { id: 'aelab-q1', type: 'short', difficulty: 1, skills: ['q-pra-evaluation'], prompt: 'Quel est le taux de conformité global, en pourcentage entier ?', placeholder: 'nombre' },
    { id: 'aelab-q2', type: 'short', difficulty: 2, skills: ['q-pra-evaluation'], prompt: 'Quelle catégorie de cas échoue totalement ?', placeholder: 'catégorie' },
    { id: 'aelab-q3', type: 'single', difficulty: 2, skills: ['q-pra-evaluation', 'q-pra-controles'], prompt: 'Quelle décision est la mieux argumentée ?', options: [{ id: 'a', text: 'Mise en production, car le taux global dépasse 80 %' }, { id: 'b', text: 'Pas de mise en production : l’échec total sur l’injection est bloquant malgré la bonne moyenne' }, { id: 'c', text: 'Mise en production en corrigeant l’injection plus tard, le risque étant rare' }, { id: 'd', text: 'Mise en production avec l’injection exclue du jeu de tests' }] },
    { id: 'aelab-q4', type: 'truefalse', difficulty: 2, skills: ['q-pra-evaluation'], prompt: 'Un taux de conformité global élevé suffit à autoriser la mise en production d’un assistant.' },
    { id: 'aelab-q5', type: 'single', difficulty: 3, skills: ['q-pra-controles'], prompt: 'Quelle correction traite le défaut observé ?', options: [{ id: 'a', text: 'Allonger le jeu de tests de cas nominaux' }, { id: 'b', text: 'Interdire à l’assistant de lire des courriels' }, { id: 'c', text: 'Traiter le contenu analysé comme donnée, restreindre les outils de l’assistant, ajouter ces cas au jeu de tests' }, { id: 'd', text: 'Demander poliment à l’assistant de ne pas obéir aux courriels' }] },
  ],
};
