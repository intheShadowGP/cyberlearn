import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-verification-avancee',
  practice: {
    'choisir-methode': {
      blocks: [
        {
          t: 'table',
          head: ['Composant', 'Méthodes', 'Ce qu’elles ne garantissent pas'],
          rows: [
            ['Analyseur d’images', 'Fuzzing continu avec sanitizers, revue, langage sûr pour les nouveaux modules', 'Absence totale de défaut, couverture incomplète'],
            ['Protocole d’authentification', 'Vérification symbolique (ProVerif, Tamarin) puis revue de l’implémentation', 'Absence de défaut de code, canaux auxiliaires'],
            ['Chargeur de démarrage', 'Revue approfondie, exécution symbolique ciblée, preuve si possible', 'Défauts matériels, hypothèses sur la puce'],
            ['Interface web d’administration', 'Revue des contrôles d’accès, tests de scénarios, analyse statique', 'Logique non décrite par les tests'],
          ],
        },
        { t: 'p', text: 'Ordre conseillé : fuzzing et revue en premier (faible coût), analyse symbolique du protocole (court, critique), preuve ou exécution symbolique ciblée du chargeur (petit et critique), puis tests de scénarios pour l’interface.' },
      ],
    },
    'modele-attaquant': {
      blocks: [
        { t: 'list', items: ['**Adversaire** : il écoute, modifie, supprime, rejoue et injecte des messages sur le réseau ; il peut aussi se faire passer pour l’équipement ou pour le serveur.'] },
        { t: 'list', items: ['**Confidentialité** de la clé de session.', '**Authentification** mutuelle (le serveur prouve son identité, l’équipement aussi).', '**Fraîcheur** : un ancien échange ne peut pas être rejoué.', '**Confidentialité persistante** si une clé durable est compromise.'] },
        { t: 'p', text: 'Défauts à rechercher : l’équipement n’est pas authentifié par une preuve (identifiant et nonce seulement) ; un nonce prévisible ou réutilisé permettrait le rejeu ; la négociation de version non authentifiée permettrait un repli. Chacun se vérifie en modélisant l’échange dans un outil symbolique et en cherchant un scénario de contre-exemple.' },
      ],
    },
    'revue-demarrage': {
      blocks: [
        {
          t: 'table',
          head: ['Constat', 'Appréciation'],
          rows: [
            ['Mises à jour signées', 'Rassurant : à confirmer (algorithme, protection contre le retour en arrière)'],
            ['Port série de maintenance accessible', 'Faiblesse : désactivation ou protection à exiger en production'],
            ['Compte « support » au mot de passe commun', 'Faiblesse majeure : compromission d’un appareil = compromission de la flotte'],
          ],
        },
        { t: 'list', items: ['Le démarrage est-il vérifié depuis une racine de confiance matérielle ?', 'Les secrets sont-ils uniques par appareil ?', 'Quelle durée de support et quel délai de correction ?', 'Une nomenclature des composants est-elle fournie ?'] },
        { t: 'p', text: 'Recommandation : ne pas acheter en l’état. Condition : suppression du compte commun, port de maintenance protégé, démarrage vérifié confirmé et engagement de support.' },
      ],
    },
  },
};
