import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'q-securite-ia-avancee',
  lesson: {
    intro:
      'Un système d’IA d’entreprise assemble des modèles externes, des données, des bibliothèques, des outils et des agents. Chacun de ces éléments est une surface d’attaque. Ce cours expert traite la sécurité de bout en bout : d’où viennent les modèles et les données, comment concevoir des agents qui restent sûrs même trompés, comment évaluer la robustesse, comment conduire une analyse de risque et comment protéger la confidentialité. Tout est abordé du point de vue de la conception et de la défense.',
    sections: [
      {
        id: 'chaine',
        title: 'Chaîne d’approvisionnement de l’IA',
        blocks: [
          { t: 'p', text: 'Un système d’IA dépend de composants que l’organisation ne produit pas : modèles préentraînés, jeux de données, bibliothèques, dépôts de modèles. Comme tout composant logiciel tiers, ils doivent être vérifiés avant adoption.' },
          {
            t: 'table',
            head: ['Composant', 'Risque', 'Mesure'],
            rows: [
              ['**Modèle préentraîné**', 'Altéré, porte dérobée, code exécuté au chargement', 'Provenance, signature, format de poids seul, évaluation sur ses propres cas'],
              ['**Jeu de données**', 'Exemples piégés ou biaisés', 'Provenance tracée, contrôle des contributions, échantillonnage'],
              ['**Bibliothèque ou plugin**', 'Vulnérabilité ou paquet malveillant', 'Versions figées, analyse des dépendances'],
              ['**Dépôt public**', 'Usurpation de nom, modèle trompeur', 'Liste de dépôts autorisés, vérification des éditeurs'],
            ],
          },
          { t: 'def', term: 'Nomenclature IA (AIBOM)', text: 'Inventaire des modèles, des jeux de données, des bibliothèques et de leurs versions utilisés par un système d’IA. Elle permet de réagir vite quand un composant est compromis ou vulnérable.' },
          { t: 'def', term: 'Format de poids seul', text: 'Format de fichier qui ne contient que des valeurs numériques (par exemple safetensors) et ne peut pas exécuter de code à l’ouverture, contrairement à un format de sérialisation généraliste comme pickle.' },
          { t: 'list', items: ['**Vérifier** provenance et intégrité avant d’adopter un modèle externe.', '**Charger** dans un environnement isolé, sans accès au réseau ni aux secrets.', '**Évaluer** le modèle sur ses propres cas de test, y compris adverses.', '**Inventorier** les composants dans une nomenclature tenue à jour.'] },
          { t: 'callout', kind: 'warn', text: 'La popularité d’un modèle sur un dépôt public ne prouve ni son intégrité ni son innocuité : on vérifie comme pour toute dépendance.' },
        ],
      },
      {
        id: 'agents',
        title: 'Architecture sûre d’agents et d’outils',
        blocks: [
          { t: 'p', text: 'Un agent combine un modèle trompable et des outils réels. L’architecture doit supposer que le modèle sera parfois manipulé et limiter ce qu’il peut alors accomplir.' },
          {
            t: 'table',
            head: ['Contrôle', 'Principe', 'Exemple'],
            rows: [
              ['**Identité propre**', 'L’agent a un compte distinct, aux droits limités', 'Traçabilité et révocation faciles'],
              ['**Autorisation par action**', 'Chaque outil et chaque action sont autorisés selon le contexte', 'Lecture permise, envoi externe soumis à validation'],
              ['**Séparation planificateur / exécuteur**', 'Un composant propose, un autre vérifie et exécute', 'Contrôle de chaque action avant exécution'],
              ['**Isolation (bac à sable)**', 'Le code généré s’exécute sans accès aux secrets ni au réseau interne', 'Conteneur jetable, droits minimaux'],
            ],
          },
          { t: 'def', term: 'Combinaison à risque', text: 'Un agent qui cumule l’accès à des données privées, la lecture de contenu non fiable et la possibilité d’envoyer vers l’extérieur est particulièrement exposé à l’exfiltration. Retirer au moins l’un des trois éléments casse l’attaque.' },
          {
            t: 'example',
            title: 'Retirer un côté du triangle',
            blocks: [
              { t: 'p', text: 'Un assistant lit les courriels (contenu non fiable), a accès au CRM (données privées) et peut répondre à n’importe quelle adresse (canal de sortie). La refonte limite les destinataires à l’expéditeur authentifié du message et exige une validation pour tout autre envoi : le canal de sortie est fermé, une instruction cachée ne peut plus faire sortir de données.' },
            ],
          },
          { t: 'list', items: ['**Examiner** les serveurs d’outils tiers et leurs descriptions comme du code.', '**Plafonner** budget, durée et débit des actions d’un agent.', '**Journaliser** chaque appel avec le contexte qui l’a déclenché.', '**Confirmer** les actions irréversibles avec un affichage précis.'] },
          { t: 'callout', kind: 'key', text: 'On ne cherche pas un modèle impossible à tromper : on conçoit pour qu’un modèle trompé ne puisse pas causer de dommage grave.' },
        ],
      },
      {
        id: 'robustesse',
        title: 'Robustesse adverse, portes dérobées et empoisonnement',
        blocks: [
          { t: 'p', text: 'La robustesse d’un modèle se démontre face à un attaquant qui connaît les défenses et s’y adapte, pas seulement face à des cas moyens.' },
          {
            t: 'table',
            head: ['Menace', 'Description', 'Défenses'],
            rows: [
              ['**Évasion**', 'Entrée modifiée pour tromper un modèle déjà entraîné', 'Entraînement adverse, détecteurs indépendants, caractéristiques robustes'],
              ['**Empoisonnement**', 'Données d’entraînement ou de référence manipulées', 'Provenance, détection d’aberrations, comparaison des versions'],
              ['**Porte dérobée**', 'Comportement caché déclenché par une entrée particulière', 'Évaluation sur des déclencheurs plausibles, source de confiance, inspection'],
              ['**Attaque adaptative**', 'Attaquant qui contourne une défense connue', 'Évaluer chaque défense contre une attaque conçue pour elle'],
            ],
          },
          { t: 'def', term: 'Porte dérobée dans un modèle', text: 'Comportement caché introduit à l’entraînement : le modèle se comporte normalement jusqu’à ce qu’une entrée particulière (un motif, une expression) déclenche une réponse choisie par l’attaquant. Elle est difficile à repérer par les tests ordinaires.' },
          { t: 'def', term: 'Entraînement adverse', text: 'Entraînement qui inclut des exemples modifiés pour tromper le modèle, afin qu’il apprenne à y résister. Il améliore la robustesse sans la garantir face à tous les attaquants.' },
          { t: 'list', items: ['**Évaluer** les défenses avec des attaques adaptatives, pas seulement des attaques génériques.', '**Combiner** plusieurs détecteurs aux faiblesses différentes.', '**Comparer** chaque nouveau modèle au précédent avant la mise en production.', '**Surveiller** les dérives et les comportements inattendus.'] },
          { t: 'callout', kind: 'warn', text: 'Une défense qui n’a jamais été attaquée en test n’est pas une défense démontrée : elle est seulement non éprouvée.' },
        ],
      },
      {
        id: 'risque',
        title: 'Analyse de risque d’un système d’IA',
        blocks: [
          { t: 'p', text: 'Les référentiels donnent un vocabulaire commun pour analyser les risques. On les applique à un système concret : ses actifs, ses menaces, ses mesures et le risque résiduel.' },
          {
            t: 'table',
            head: ['Référentiel', 'Apport', 'Usage'],
            rows: [
              ['**MITRE ATLAS**', 'Tactiques et techniques d’attaque contre les systèmes d’IA', 'Construire des scénarios de menace'],
              ['**OWASP Top 10 for LLM Applications**', 'Risques applicatifs des systèmes à base de LLM', 'Vérifier une architecture, préparer des tests'],
              ['**NIST AI RMF**', 'Cadre de gestion des risques de l’IA', 'Gouverner, cartographier, mesurer, traiter'],
              ['**AI Act**', 'Obligations selon le niveau de risque', 'Exigences de robustesse et de documentation'],
            ],
          },
          { t: 'def', term: 'Actif d’un système d’IA', text: 'Élément à protéger : données d’entraînement, modèle et poids, prompts système, jeux de tests, outils et connecteurs, journaux. La cartographie des actifs précède toute analyse de risque.' },
          { t: 'list', ordered: true, items: ['**Cartographier** les actifs et les flux de données.', '**Décrire** des scénarios (source de menace, technique, actif visé, impact).', '**Évaluer** vraisemblance et gravité, en tenant compte des outils accessibles à l’agent.', '**Traiter** : mesures de prévention, détection, réponse ; accepter le risque résiduel de façon explicite.', '**Réviser** à chaque changement de modèle, d’outil ou de données.'] },
          { t: 'callout', kind: 'tip', text: 'Un même détournement a un impact très différent selon ce que l’agent peut faire : le risque dépend des outils, pas seulement du modèle.' },
        ],
      },
      {
        id: 'confidentialite',
        title: 'Confidentialité des modèles et des données',
        blocks: [
          { t: 'p', text: 'Un modèle et les données qui l’ont entraîné sont des actifs. Les réponses d’un modèle exposé peuvent en révéler une partie.' },
          {
            t: 'table',
            head: ['Menace', 'Ce que l’attaquant cherche', 'Mesures'],
            rows: [
              ['**Extraction de modèle**', 'Reproduire le modèle à partir de ses réponses', 'Limitation de débit, détection d’usage anormal, réponses minimales'],
              ['**Inférence d’appartenance**', 'Savoir si un enregistrement a servi à l’entraînement', 'Confidentialité différentielle, régularisation'],
              ['**Mémorisation**', 'Faire restituer des données d’entraînement', 'Déduplication, filtrage des sorties, tests de fuite'],
              ['**Divulgation du contexte**', 'Récupérer prompt système ou documents du contexte', 'Aucun secret dans le prompt, contrôle d’accès à la recherche'],
            ],
          },
          { t: 'def', term: 'Mémorisation', text: 'Tendance d’un modèle à retenir, et donc à pouvoir restituer, des exemples précis de son entraînement (données personnelles, secrets). Elle augmente avec la répétition des exemples et la taille du modèle.' },
          { t: 'list', items: ['**Minimiser** les données sensibles dans l’entraînement.', '**Tester** les fuites : demander des documents non autorisés, vérifier la restitution du contexte.', '**Filtrer** les sorties et limiter les requêtes.', '**Encadrer** par contrat l’usage des données par les fournisseurs.'] },
          { t: 'callout', kind: 'key', text: 'Moins un modèle a vu de données sensibles, moins il peut en restituer : la minimisation est la première mesure de confidentialité.' },
        ],
      },
      {
        id: 'red-team-ia',
        title: "Organiser une évaluation adverse d’un système d’IA",
        blocks: [
          { t: 'p', text: "Une évaluation adverse (« red teaming ») cherche à faire échouer le système comme le ferait un attaquant, mais dans un cadre autorisé. Elle ne se résume pas à quelques invites astucieuses : elle suit un plan écrit, fixe un périmètre et mesure des résultats. L’objectif est de documenter ce qui fonctionne, ce qui échoue et la facilité avec laquelle on y parvient, afin de hiérarchiser les corrections." },
          {
            t: 'table',
            head: ["Étape", "Contenu", "Livrable"],
            rows: [
              ["Cadrage", "Système testé, données et outils accessibles, interdits, autorisation écrite", "Lettre de mission et règles d’engagement"],
              ["Scénarios", "Menaces pertinentes : fuite de données, détournement d’outils, contenus interdits", "Catalogue de scénarios priorisés"],
              ["Exécution", "Essais reproductibles, entrées et sorties consignées", "Journal d’essais"],
              ["Mesure", "Taux de réussite des attaques par scénario, gravité", "Tableau de résultats"],
              ["Restitution", "Constats, preuves, corrections proposées, retest", "Rapport et plan de remédiation"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Comme les systèmes d’IA se comportent de façon variable, répétez chaque essai plusieurs fois et mesurez un **taux de réussite**, pas un résultat unique." },
        ],
      },
      {
        id: 'surveillance-ia',
        title: "Surveiller un système d’IA en production",
        blocks: [
          { t: 'p', text: "La sécurité d’un système d’IA ne s’arrête pas à la mise en service. Les usages réels diffèrent des tests, les attaquants s’adaptent et le comportement du modèle peut évoluer avec ses données ou ses mises à jour. Une surveillance continue repose sur des journaux exploitables, des indicateurs choisis à l’avance et un processus de réaction : sans lui, une alerte ne sert à rien." },
          { t: 'list', items: ["**Journaliser** les requêtes, les réponses et les appels d’outils, en protégeant ces journaux (ils contiennent des données sensibles) et en limitant leur durée de conservation.", "**Mesurer des indicateurs** : taux de refus anormal, longueur inhabituelle des requêtes, appels d’outils hors norme, retours négatifs des utilisateurs.", "**Détecter les dérives** : une baisse de qualité ou un changement de comportement après une mise à jour du modèle.", "**Prévoir un interrupteur** : pouvoir désactiver un outil ou l’assistant entier rapidement en cas d’abus.", "**Réexaminer régulièrement** le modèle de menace à la lumière des incidents observés."] },
          { t: 'callout', kind: 'tip', text: "Définissez à l’avance **qui** reçoit l’alerte et **quelle décision** elle déclenche : une alerte sans responsable reste lettre morte." },
        ],
      },
    ],
    useCases: [
      'Auditer la chaîne d’approvisionnement d’un système d’IA avant sa mise en production.',
      'Concevoir l’architecture d’un agent qui accède à des données privées et lit des contenus externes.',
      'Conduire l’analyse de risque d’un assistant interne avec ATLAS et l’OWASP Top 10 for LLM Applications.',
      'Préparer des tests de fuite et d’extraction avant l’exposition d’un modèle par API.',
    ],
    commonMistakes: [
      'Charger un modèle externe sans vérifier sa provenance ni son format.',
      'Cumuler données privées, contenu non fiable et canal de sortie dans un même agent.',
      'Évaluer une défense uniquement contre des attaques génériques.',
      'Analyser le risque du modèle sans tenir compte des outils qu’il peut utiliser.',
      'Placer des secrets dans les prompts ou dans les données d’entraînement.',
    ],
    bestPractices: [
      'Provenance, signature, format sûr et nomenclature des composants.',
      'Agents à identité propre, autorisation par action et isolation du code généré.',
      'Évaluation avec des attaques adaptatives, comparaison des versions.',
      'Analyse de risque fondée sur ATLAS, OWASP et le NIST AI RMF, révisée à chaque changement.',
      'Minimisation, filtrage des sorties, limitation des requêtes et tests de fuite.',
    ],
    keyPoints: [
      'Les modèles, données et dépendances tiers se vérifient comme toute chaîne logicielle.',
      'Données privées, contenu non fiable et canal de sortie : ne pas les cumuler.',
      'Une défense se démontre contre un attaquant adaptatif.',
      'Le risque d’un système d’IA dépend de ses outils autant que de son modèle.',
      'La confidentialité commence par la minimisation des données sensibles.',
    ],
  },
  practice: [
    {
      id: 'chaine-modele',
      kind: 'analysis',
      title: 'Analyse : la chaîne d’approvisionnement d’un projet d’IA',
      context: [
        {
          t: 'table',
          head: ['Composant', 'Situation'],
          rows: [
            ['Modèle de classification', 'Téléchargé depuis un dépôt public, fichier au format pickle, éditeur inconnu mais très populaire'],
            ['Jeu de données', 'Collecté automatiquement sur des forums publics, étiquettes par des contributeurs anonymes'],
            ['Bibliothèque d’inférence', 'Version non figée, mise à jour automatiquement à chaque déploiement'],
            ['Plugin de connexion à la messagerie', 'Fourni par un tiers, descriptions d’outils non relues'],
          ],
        },
      ],
      steps: ['Identifiez le risque de chaque composant.', 'Proposez la mesure correspondante.', 'Proposez le contenu d’une nomenclature pour ce projet.'],
    },
    {
      id: 'architecture-agent',
      kind: 'case',
      title: 'Cas : concevoir un agent de gestion des remboursements',
      context: [
        { t: 'p', text: 'Un agent doit lire les demandes de clients (texte libre et pièces jointes), consulter leur dossier dans le CRM, proposer un remboursement et envoyer une réponse. Le service finance craint une manipulation par des textes piégés.' },
      ],
      steps: ['Repérez les éléments de la combinaison à risque dans cette conception.', 'Proposez une architecture qui en retire au moins un et limite les autres.', 'Décrivez les contrôles d’autorisation, de confirmation et de journalisation.'],
    },
    {
      id: 'analyse-risque-ia',
      kind: 'guided',
      title: 'Conduire l’analyse de risque d’un assistant interne',
      context: [
        { t: 'p', text: 'Un assistant interne répond aux questions des salariés à partir du partage de documents, crée des tickets et peut envoyer des courriels. Il utilise un modèle hébergé par un fournisseur externe. L’organisation veut le mettre en production dans trois mois.' },
      ],
      steps: ['Cartographiez les actifs et les flux de données.', 'Décrivez trois scénarios de menace en utilisant ATLAS et l’OWASP Top 10 for LLM Applications.', 'Proposez les mesures et le risque résiduel à faire accepter.', 'Indiquez quand l’analyse sera révisée.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATLAS', source: 'MITRE', url: 'https://atlas.mitre.org/' },
    { title: 'OWASP Top 10 for LLM Applications', source: 'OWASP', url: 'https://genai.owasp.org/llm-top-10/' },
    { title: 'AI Risk Management Framework', source: 'NIST', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { title: 'Adversarial Machine Learning: A Taxonomy and Terminology (AI 100-2)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ai/100/2/e2025/final' },
  ],
};
