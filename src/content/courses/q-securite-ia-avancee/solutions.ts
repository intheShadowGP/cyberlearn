import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-securite-ia-avancee',
  practice: {
    'chaine-modele': {
      blocks: [
        {
          t: 'table',
          head: ['Composant', 'Risque', 'Mesure'],
          rows: [
            ['Modèle téléchargé en pickle', 'Exécution de code au chargement, modèle altéré ou avec porte dérobée', 'Format de poids seul, provenance et signature, chargement isolé, évaluation sur ses propres cas'],
            ['Jeu de données collecté en ligne', 'Exemples piégés, étiquettes manipulées, biais', 'Provenance tracée, échantillonnage et contrôle des étiquettes, comparaison des versions de modèle'],
            ['Bibliothèque non figée', 'Mise à jour malveillante ou régression', 'Versions figées, analyse des dépendances, déploiement contrôlé'],
            ['Plugin tiers non relu', 'Instructions cachées dans les descriptions, droits excessifs', 'Revue du code et des descriptions d’outils, droits minimaux, liste de plugins autorisés'],
          ],
        },
        { t: 'p', text: 'La nomenclature liste pour chaque composant : nom, version, éditeur, source, empreinte, format, licence, date de vérification et propriétaire, afin de réagir vite à une alerte.' },
      ],
    },
    'architecture-agent': {
      blocks: [
        { t: 'p', text: '**Combinaison à risque** : contenu non fiable (demandes et pièces jointes), données privées (dossiers CRM) et canal de sortie (réponses envoyées).' },
        { t: 'list', ordered: true, items: ['**Fermer le canal de sortie** : la réponse part uniquement à l’adresse authentifiée du client à l’origine de la demande ; tout autre envoi exige une validation.', '**Limiter les données** : l’agent ne lit que le dossier du client concerné, imposé par l’outil.', '**Séparer** le composant qui lit le texte libre de celui qui décide du remboursement.'] },
        { t: 'list', items: ['**Autorisation** par action : remboursement au-delà d’un plafond ou hors règles soumis à une validation humaine.', '**Confirmation** affichant montant, bénéficiaire et motif.', '**Journalisation** de chaque appel d’outil avec la demande qui l’a déclenché, et alertes sur les volumes ou montants anormaux.'] },
      ],
    },
    'analyse-risque-ia': {
      blocks: [
        { t: 'list', items: ['**Actifs** : documents du partage (dont RH et juridique), prompts système, modèle hébergé, outils de tickets et de messagerie, journaux. **Flux** : documents vers l’index, requêtes vers le fournisseur, courriels sortants.'] },
        {
          t: 'table',
          head: ['Scénario', 'Référence', 'Mesure'],
          rows: [
            ['Injection indirecte via un document du partage qui provoque l’envoi de données', 'ATLAS (injection de prompt), OWASP LLM01', 'Confirmation des envois, destinataires limités, contenus non fiables isolés'],
            ['Fuite de documents non autorisés par la recherche', 'OWASP (divulgation d’informations sensibles)', 'Droits d’accès conservés dans l’index et filtrage à la recherche'],
            ['Compromission d’un composant tiers (modèle, plugin)', 'ATLAS (chaîne d’approvisionnement)', 'Provenance, signature, nomenclature, revue des plugins'],
          ],
        },
        { t: 'p', text: 'Risque résiduel : injections nouvelles ou contournement des filtres, accepté par la direction avec surveillance et tests adverses réguliers. Révision à chaque changement de modèle, d’outil ou de périmètre de données, et au moins annuelle.' },
      ],
    },
  },
};
