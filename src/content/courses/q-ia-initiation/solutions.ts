import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-ia-initiation',
  practice: {
    'classer-usages': {
      blocks: [
        {
          t: 'table',
          head: ['Proposition', 'Verdict', 'Raison'],
          rows: [
            ['(a) Résumer un journal pour l’analyste', '**Raisonnable**', 'Tâche volumineuse, l’analyste relit et vérifie'],
            ['(b) Supprimer seule des comptes jugés suspects', '**À éviter**', 'Action difficile à annuler, erreur possible du modèle'],
            ['(c) Proposer une requête relue par l’analyste', '**Raisonnable**', 'L’humain valide avant l’exécution'],
            ['(d) Coller un export de clients dans un assistant public', '**À éviter**', 'Données personnelles envoyées à un tiers, RGPD'],
          ],
        },
        { t: 'p', text: 'Règle simple : plus l’action est difficile à annuler ou concerne des données sensibles, plus une personne doit la valider avec les éléments qui la justifient.' },
      ],
    },
    'donnees-prompt': {
      blocks: [
        {
          t: 'table',
          head: ['Demande', 'Verdict', 'Action'],
          rows: [
            ['1 — Fonctionnement du DNS', 'Autorisée', 'Aucune donnée sensible'],
            ['2 — Mot de passe de l’administrateur', 'Interdite', 'Ne jamais saisir un secret ; demander des critères de robustesse sans le mot de passe'],
            ['3 — Contrat client complet', 'À modifier', 'Retirer noms et adresses, ou utiliser un outil validé par l’organisation'],
            ['4 — Bonnes pratiques de mot de passe', 'Autorisée', 'Question générale'],
          ],
        },
        { t: 'p', text: 'Réécriture de la demande 3 : « Résume ce contrat dont les noms et adresses ont été remplacés par [CLIENT] et [ADRESSE] : … ». Règle générale : ne jamais saisir de secret ni de donnée confidentielle dans un outil public, et minimiser le reste.' },
      ],
    },
    'verifier-reponse': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Ne pas agir** tant que l’identifiant n’est pas retrouvé.', '**Chercher** l’identifiant dans la base officielle des vulnérabilités et dans l’avis de sécurité publié par le constructeur.', '**Vérifier** le produit, les versions touchées et le correctif sur le site du constructeur.'] },
        { t: 'p', text: 'Une information est fiable quand elle se retrouve dans une source officielle (avis du constructeur, base de vulnérabilités reconnue) avec le même identifiant, les mêmes versions et un correctif.' },
        { t: 'p', text: 'Si la source reste introuvable, la note indique que l’information n’a pas pu être confirmée, ne recommande pas d’action urgente fondée sur elle, et demande une vérification auprès du constructeur.' },
      ],
    },
  },
};
