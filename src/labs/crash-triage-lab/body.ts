import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'crash-triage-lab',
  hints: [
    'Plusieurs entrées peuvent déclencher **le même défaut** : la signature de pile les rapproche.',
    'Une **écriture** hors limites est plus grave qu’une lecture ou qu’un arrêt propre : elle peut corrompre des données de contrôle.',
    'Un plantage non reproductible demande d’abord à être confirmé avant d’y investir du temps.',
  ],
  questions: [
    { id: 'crashlab-q1', type: 'short', difficulty: 1, skills: ['p-triage'], prompt: 'Combien de défauts distincts le lot contient-il après regroupement par signature de pile ?', placeholder: 'nombre' },
    { id: 'crashlab-q2', type: 'single', difficulty: 2, skills: ['p-triage'], prompt: 'Quel défaut traiter en premier ?', options: [{ id: 'a', text: 'Le dépassement de tampon en lecture dans read_chunk' }, { id: 'b', text: 'Le dépassement de tampon en écriture dans parse_header, reproductible' }, { id: 'c', text: 'La récursion non bornée dans parse_nested' }, { id: 'd', text: 'Le délai dépassé dans decode_run, reproduit une fois sur trois' }] },
    { id: 'crashlab-q3', type: 'truefalse', difficulty: 1, skills: ['p-triage'], prompt: 'Douze plantages correspondent forcément à douze défauts distincts.' },
    { id: 'crashlab-q4', type: 'multi', difficulty: 3, skills: ['p-triage', 'p-fuzz'], prompt: 'Quelles actions suivent pour le défaut prioritaire ?', options: [{ id: 'a', text: 'Minimiser l’entrée et confirmer la reproductibilité sur la version courante' }, { id: 'b', text: 'Corriger et ajouter l’entrée au corpus comme test de non-régression' }, { id: 'c', text: 'Publier les détails immédiatement, avant toute correction' }, { id: 'd', text: 'Supprimer l’entrée du corpus pour que le fuzzer ne la rejoue plus' }] },
    { id: 'crashlab-q5', type: 'single', difficulty: 2, skills: ['p-triage'], prompt: 'Quel est l’impact probable du déréférencement de pointeur nul reproductible dans load_index ?', options: [{ id: 'a', text: 'Exécution de code à distance certaine' }, { id: 'b', text: 'Déni de service par arrêt du programme, à corriger mais moins urgent qu’une écriture hors limites' }, { id: 'c', text: 'Aucun impact, à ignorer' }, { id: 'd', text: 'Divulgation de clés cryptographiques' }] },
    { id: 'crashlab-q6', type: 'single', difficulty: 3, skills: ['p-disclosure'], prompt: 'Le même défaut est découvert dans une bibliothèque tierce. Que faire ?', options: [{ id: 'a', text: 'Le signaler en privé au mainteneur, avec une entrée minimale, selon sa politique de divulgation' }, { id: 'b', text: 'Publier l’entrée sur un forum public pour obtenir de l’aide' }, { id: 'c', text: 'Le garder secret pour l’utiliser contre des concurrents' }, { id: 'd', text: 'Corriger localement sans jamais prévenir personne' }] },
  ],
};
