import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'q-ia-pratique',
  lesson: {
    intro:
      'Savoir ce qu’est une IA ne suffit pas : encore faut-il s’en servir correctement au quotidien. Ce cours pratique montre comment formuler des demandes qui donnent de bons résultats sans exposer de données, comment intégrer un assistant aux opérations de sécurité, comment mesurer sa qualité, quels contrôles simples limitent les dégâts en cas d’erreur ou de détournement et comment formaliser les règles d’usage dans l’organisation.',
    sections: [
      {
        id: 'prompts',
        title: 'Formuler des demandes efficaces et sûres',
        blocks: [
          { t: 'p', text: 'La qualité de la réponse dépend de la qualité de la demande. Une bonne demande est précise, délimite les données et ne contient rien de sensible.' },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Exemple'],
            rows: [
              ['**Contexte**', 'Situer la demande', '« Tu aides un analyste de SOC »'],
              ['**Tâche**', 'Dire ce qui est attendu', '« Résume la chronologie ci-dessous en 5 points »'],
              ['**Format**', 'Cadrer la sortie', '« Tableau à trois colonnes »'],
              ['**Contraintes**', 'Limiter les dérives', '« Cite le passage utilisé, signale ce que tu ne sais pas »'],
            ],
          },
          { t: 'def', term: 'Délimiteur', text: 'Marque (balises, guillemets, séparateurs) qui encadre les données à traiter pour les distinguer des consignes. Elle réduit le risque que du texte contenu dans les données soit pris pour une consigne.' },
          { t: 'def', term: 'Prompt système', text: 'Consignes du développeur placées avant la conversation pour fixer le rôle et les limites de l’assistant. Il peut être divulgué : il ne doit jamais contenir de secret.' },
          { t: 'list', items: ['**Préciser et itérer** : reformuler améliore souvent le résultat.', '**Délimiter** les données fournies.', '**Demander** les sources ou les hypothèses, pour pouvoir vérifier.', '**Retirer** noms, identifiants et secrets avant d’envoyer.'] },
          { t: 'callout', kind: 'warn', text: 'Une demande longue et détaillée ne garantit pas une réponse exacte : la vérification reste nécessaire.' },
        ],
      },
      {
        id: 'assistants',
        title: 'Intégrer un assistant aux opérations de sécurité',
        blocks: [
          { t: 'p', text: 'Un assistant fait gagner du temps sur des tâches répétitives. Il propose, l’analyste vérifie et décide.' },
          {
            t: 'table',
            head: ['Tâche', 'Ce que propose l’assistant', 'Vérification humaine'],
            rows: [
              ['**Résumé d’incident**', 'Projet de chronologie et de synthèse', 'Relire, corriger, compléter avec les faits'],
              ['**Requête de recherche**', 'Proposition de requête à partir d’une question', 'Relire, tester sur un petit périmètre, jamais d’action destructrice'],
              ['**Enrichissement**', 'Contexte sur un actif ou un indicateur', 'Vérifier les sources'],
              ['**Regroupement**', 'Alertes liées à un même incident', 'Contrôler les liens proposés'],
            ],
          },
          {
            t: 'example',
            title: 'Une requête à ne pas exécuter telle quelle',
            blocks: [
              { t: 'p', text: 'Un assistant propose, pour retrouver des connexions inhabituelles, une requête qui filtre sur un champ « pays_source » alors que les journaux de l’organisation utilisent « geo.country ». Exécutée telle quelle, elle ne renvoie aucun résultat et laisse croire à l’absence d’anomalie. L’analyste qui relit la requête corrige le champ, la teste sur une journée connue, puis l’étend.' },
            ],
          },
          { t: 'def', term: 'Corrélation d’alertes', text: 'Regroupement des alertes qui concernent le même hôte, le même compte ou la même campagne, afin de traiter un incident plutôt qu’une pluie d’événements.' },
          { t: 'list', items: ['**Relire et tester** toute requête proposée avant de l’exécuter à grande échelle.', '**Ne jamais exécuter** une commande destructrice proposée sans la comprendre.', '**Garder la décision** de qualification et de réponse aux incidents importants.', '**Consigner** ce qui vient de l’assistant et ce qui a été vérifié.'] },
          { t: 'callout', kind: 'key', text: 'L’assistant raccourcit le chemin, il ne remplace pas la compréhension : un analyste qui ne comprend pas la requête ne doit pas l’exécuter.' },
        ],
      },
      {
        id: 'evaluation',
        title: 'Évaluer un assistant avec un jeu de tests',
        blocks: [
          { t: 'p', text: 'On ne juge pas un assistant à l’impression : on le mesure sur des cas connus, avant la mise en service et après chaque changement.' },
          {
            t: 'table',
            head: ['Mesure', 'Question', 'Exemple'],
            rows: [
              ['**Exactitude des faits**', 'Les faits restitués sont-ils vrais ?', 'Résumé comparé à un incident connu'],
              ['**Hallucination**', 'La réponse contient-elle des éléments inventés ?', 'Références citées vérifiées'],
              ['**Complétude**', 'Les éléments importants sont-ils présents ?', 'Chronologie sans oubli'],
              ['**Robustesse**', 'Résiste-t-il à une consigne glissée dans les données ?', 'Document contenant une instruction cachée'],
            ],
          },
          { t: 'def', term: 'Jeu de tests', text: 'Ensemble de cas représentatifs, de cas limites et de cas d’attaque, avec les résultats attendus, rejoués à chaque changement de modèle, de prompt ou d’outil.' },
          { t: 'list', items: ['**Représentatif** : cas issus des usages réels.', '**Difficile** : cas limites, ambigus ou mal formés.', '**Adverse** : injections et tentatives de fuite de données.', '**Relu** par des humains sur un échantillon de réponses.'] },
          { t: 'callout', kind: 'tip', text: 'Une bonne note sur un jeu de tests ne garantit pas la qualité sur des usages nouveaux : on enrichit le jeu de tests avec les erreurs rencontrées.' },
        ],
      },
      {
        id: 'controles',
        title: 'Contrôles simples : moindre privilège, confirmation, journalisation',
        blocks: [
          { t: 'p', text: 'Un assistant peut se tromper ou être détourné. Des contrôles simples limitent ce qu’une erreur peut causer.' },
          {
            t: 'table',
            head: ['Contrôle', 'Ce qu’il évite', 'Exemple'],
            rows: [
              ['**Moindre privilège**', 'Un assistant qui peut tout faire', 'Outils limités à la tâche, lecture seule par défaut'],
              ['**Confirmation humaine**', 'Une action irréversible déclenchée à tort', 'Envoi externe ou paiement validés par une personne'],
              ['**Journalisation**', 'Une enquête impossible', 'Appels d’outils tracés avec leur contexte'],
              ['**Séparation des environnements**', 'Un test qui touche la production', 'Recette et production distinctes'],
            ],
          },
          { t: 'def', term: 'Sortie non fiable', text: 'Principe selon lequel la réponse d’un assistant est traitée comme une donnée non vérifiée : elle est validée avant d’être exécutée, affichée comme code ou transmise à un autre système.' },
          { t: 'list', items: ['**Limiter** les outils au strict nécessaire.', '**Confirmer** les actions sensibles avec l’affichage exact de ce qui sera fait.', '**Tracer** les appels pour pouvoir enquêter.', '**Valider** les sorties avant exécution.'] },
          { t: 'callout', kind: 'warn', text: 'Un assistant doté de droits d’administrateur transforme toute erreur ou détournement en incident majeur.' },
        ],
      },
      {
        id: 'politique',
        title: 'Politique d’usage, RGPD et AI Act',
        blocks: [
          { t: 'p', text: 'Les règles d’usage de l’IA s’écrivent et s’expliquent. Elles précisent ce qui est permis, avec quels outils et sous quelle responsabilité.' },
          {
            t: 'table',
            head: ['Élément', 'Contenu', 'Remarque'],
            rows: [
              ['**Outils autorisés**', 'Liste des outils validés et de leurs usages', 'Mise à jour régulière'],
              ['**Données permises**', 'Classification : ce qui peut ou non être saisi', 'Secrets et données sensibles exclus des outils publics'],
              ['**Registre des usages**', 'Outils, données traitées, responsable', 'Base de l’analyse de risque'],
              ['**Incident IA**', 'Procédure en cas de fuite ou de comportement anormal', 'Signalement rapide'],
            ],
          },
          { t: 'def', term: 'AI Act', text: 'Règlement européen qui encadre les systèmes d’IA selon leur niveau de risque : certaines pratiques interdites, des obligations de robustesse, de documentation et de cybersécurité pour les systèmes à haut risque.' },
          { t: 'list', items: ['**Classer** les données pour décider ce qui peut être traité dans quel outil.', '**Proposer** des outils validés : l’interdiction seule pousse aux usages cachés.', '**Former** les utilisateurs aux limites et aux risques.', '**Respecter** le RGPD : base légale, information, sous-traitance, minimisation.'] },
          { t: 'callout', kind: 'key', text: 'Interdire sans proposer d’alternative ne supprime pas l’usage : il devient invisible. Mieux vaut un outil validé et une règle claire.' },
        ],
      },
    ],
    useCases: [
      'Rédiger une demande pour résumer un incident sans exposer de données personnelles.',
      'Faire proposer une requête de recherche par un assistant, la relire et la tester.',
      'Construire un jeu de tests pour valider un assistant avant sa mise en service.',
      'Rédiger la politique d’usage de l’IA d’une organisation.',
    ],
    commonMistakes: [
      'Exécuter une requête proposée par un assistant sans la comprendre.',
      'Donner à un assistant plus de droits qu’il n’en faut.',
      'Évaluer un assistant à l’impression plutôt que sur un jeu de tests.',
      'Interdire l’IA sans proposer d’outil validé.',
      'Ne pas rejouer les tests après un changement de modèle ou de consigne.',
    ],
    bestPractices: [
      'Demandes structurées, données délimitées, aucun secret.',
      'L’assistant propose, l’analyste vérifie et décide.',
      'Jeu de tests représentatif, difficile et adverse, rejoué à chaque changement.',
      'Moindre privilège, confirmation humaine, journalisation.',
      'Politique d’usage claire, registre des usages, outils validés, formation.',
    ],
    keyPoints: [
      'Une bonne demande est précise, délimitée et sans donnée sensible.',
      'Un assistant ne remplace pas la compréhension de l’analyste.',
      'Évaluer sur des cas connus, y compris des cas d’attaque.',
      'Des contrôles simples limitent l’impact d’une erreur ou d’un détournement.',
      'RGPD et AI Act cadrent l’usage ; une politique claire vaut mieux qu’une interdiction.',
    ],
  },
  practice: [
    {
      id: 'requete-assistee',
      kind: 'guided',
      title: 'Utiliser un assistant pour préparer une requête de recherche',
      context: [
        { t: 'p', text: 'Un analyste demande à un assistant une requête pour repérer les connexions réussies de comptes administrateurs depuis un pays inhabituel au cours des 7 derniers jours. L’assistant renvoie une requête qui utilise un nom de champ que l’analyste ne reconnaît pas et se termine par une instruction de suppression des résultats « pour nettoyer ».' },
      ],
      steps: ['Décrivez les vérifications à faire avant d’exécuter la requête.', 'Indiquez sur quel périmètre la tester et comment la corriger.', 'Précisez ce que l’analyste consigne et ce qu’il ne fait jamais avec une requête proposée.'],
    },
    {
      id: 'jeu-tests',
      kind: 'analysis',
      title: 'Analyse : un jeu de tests suffisant ?',
      context: [
        {
          t: 'table',
          head: ['Cas prévu', 'Description'],
          rows: [
            ['T1', 'Résumer un incident simple, bien documenté'],
            ['T2', 'Résumer un autre incident simple, bien documenté'],
            ['T3', 'Rédiger une requête de recherche pour une question courante'],
          ],
        },
      ],
      steps: ['Indiquez les limites de ce jeu de tests.', 'Proposez au moins quatre cas à ajouter (limites, ambigus, adverses).', 'Précisez quand rejouer les tests et ce que l’on consigne.'],
    },
    {
      id: 'politique-ia',
      kind: 'case',
      title: 'Cas : rédiger les bases d’une politique d’usage de l’IA',
      context: [
        { t: 'p', text: 'Dans une entreprise de 300 personnes, de nombreux salariés utilisent des assistants publics pour résumer des documents et rédiger des messages, sans cadre. La direction hésite entre interdire et encadrer.' },
      ],
      steps: ['Proposez la démarche (inventaire, classification, outils validés).', 'Listez les règles essentielles pour les salariés.', 'Décrivez la procédure en cas de saisie de données sensibles dans un outil non validé.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations de sécurité pour un système d’IA générative', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-pour-un-systeme-dia-generative' },
    { title: 'Intelligence artificielle : les conseils de la CNIL', source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
    { title: 'AI Risk Management Framework', source: 'NIST', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  ],
};
