import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'r-preparation-pratique',
  practice: {
    'plan-epreuve': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Heure 1** : lire les règles et le périmètre, noter les outils autorisés et interdits, préparer le modèle de notes et le plan de preuves.', '**Heures 2 à 5** : énumérer toutes les cibles et les services avant d’approfondir l’une d’elles, et classer les pistes par vraisemblance et coût.'] },
        { t: 'list', items: ['**Timeboxing** : une heure maximum par piste ; au-delà, on note l’état et ce qui reste à tester, puis on passe à la suivante.', '**Priorisation** : traiter d’abord ce qui rapporte le plus pour le moins de temps.'] },
        { t: 'p', text: 'Pauses courtes planifiées toutes les deux à trois heures, une vraie période de sommeil, et les quatre dernières heures réservées à la vérification des preuves et à la rédaction du rapport. Aucune assistance extérieure : les règles de l’organisme sont respectées à la lettre.' },
      ],
    },
    'relire-rapport': {
      blocks: [
        { t: 'p', text: '**Défauts** : constat vague (« vulnérable ») sans produit ni version ni contexte, aucune preuve minimale, impact flou, mots de passe reproduits en clair, aucune gravité, aucune étape de reproduction, recommandation inutilisable (« corriger »).' },
        { t: 'list', items: ['**Constat réécrit** : « Le serveur web de gestion (version X, hôte A) expose une page d’administration accessible sans authentification (capture jointe, horodatée). Un tiers non authentifié peut consulter la configuration. Gravité : élevée (exposition à Internet). Reproduction : étapes 1 à 3. »', '**Données sensibles** : les identifiants éventuellement rencontrés ne sont pas reproduits ; on indique leur existence et leur type.'] },
        { t: 'p', text: 'Recommandation : restreindre l’accès à la page aux adresses d’administration, imposer une authentification forte, retirer la page des environnements exposés et ajouter une alerte sur les accès.' },
      ],
    },
    'cadrage-mission': {
      blocks: [
        { t: 'list', ordered: true, items: ['**S’arrêter** : le second serveur n’est pas dans le périmètre autorisé, on ne le teste pas, même brièvement.', '**Informer** le commanditaire rapidement et par le canal convenu, avec ce qui a été observé sans insister.', '**Attendre** une autorisation écrite si le périmètre doit être étendu.'] },
        { t: 'p', text: 'Dans le rapport, on consigne l’observation (hôte, service apparemment exposé, date), le fait qu’aucune action n’a été menée sur cette machine et la recommandation de la tester dans un cadre autorisé.' },
      ],
    },
  },
};
