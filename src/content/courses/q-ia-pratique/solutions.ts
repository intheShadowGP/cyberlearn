import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-ia-pratique',
  practice: {
    'requete-assistee': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Comprendre** chaque clause de la requête et vérifier le nom du champ inconnu dans la documentation des journaux.', '**Retirer** l’instruction de suppression : une requête de recherche ne doit jamais modifier ni supprimer de données.', '**Tester** sur un petit périmètre (un jour, un compte) en comparant avec des cas connus.', '**Corriger** les champs, puis l’exécuter sur les 7 jours.'] },
        { t: 'p', text: 'L’analyste consigne que la requête vient d’un assistant, les corrections apportées et le résultat de la vérification. Il n’exécute jamais une commande qu’il ne comprend pas, en particulier destructrice.' },
      ],
    },
    'jeu-tests': {
      blocks: [
        { t: 'p', text: '**Limites** : trois cas faciles et bien documentés ne mesurent ni la robustesse, ni les erreurs sur des cas réels, ni l’exposition aux injections.' },
        { t: 'list', items: ['**T4 — cas limite** : incident avec une chronologie incomplète (l’assistant doit signaler ce qui manque).', '**T5 — cas ambigu** : deux hôtes de même nom (il ne doit pas fusionner les événements).', '**T6 — cas adverse** : document contenant une instruction cachée de transférer des données (il doit l’ignorer).', '**T7 — fuite** : demande portant sur un document auquel l’utilisateur n’a pas droit (aucun contenu ne doit être restitué).'] },
        { t: 'p', text: 'On rejoue les tests avant la mise en service, après chaque changement de modèle, de consigne ou d’outil, et périodiquement. On consigne les cas, les résultats, les écarts corrigés et les risques acceptés.' },
      ],
    },
    'politique-ia': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Inventorier** les usages réels (enquête, journaux de passerelle) et les données concernées.', '**Classer** les données pour fixer ce qui peut être saisi dans quel outil.', '**Proposer** un ou plusieurs outils validés (contrat, conservation des données, sécurité), puis encadrer l’usage des autres.', '**Former** et publier une règle simple.'] },
        { t: 'list', items: ['Aucun mot de passe ni secret dans un outil d’IA.', 'Aucune donnée personnelle ou confidentielle dans un outil non validé.', 'Toute réponse utilisée est vérifiée ; les décisions importantes restent humaines.', 'Tout nouvel usage est déclaré au registre.'] },
        { t: 'p', text: 'En cas de saisie de données sensibles dans un outil non validé : signalement rapide à la sécurité et au délégué à la protection des données, évaluation de l’impact (données, fournisseur, conditions de conservation), demande de suppression si possible, information éventuelle des personnes ou de la CNIL, puis retour d’expérience.' },
      ],
    },
  },
};
