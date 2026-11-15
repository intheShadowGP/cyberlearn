import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'q-ia-defense-ml',
  lesson: {
    intro:
      'L’apprentissage automatique est présent dans la plupart des outils de défense : filtres anti-spam, EDR, détection d’anomalies, aide au tri des alertes. Bien utilisé, il repère des signaux qu’aucune règle écrite à la main ne verrait. Mal évalué, il noie les analystes sous les faux positifs ou donne une fausse impression de sécurité. Et les modèles sont eux-mêmes des cibles. Ce cours donne les bases pour comprendre, évaluer et protéger ces systèmes.',
    sections: [
      {
        id: 'bases',
        title: 'Les bases : apprendre à partir d’exemples',
        blocks: [
          { t: 'p', text: 'Un modèle d’**apprentissage automatique** n’est pas programmé règle par règle : il ajuste ses paramètres à partir d’exemples pour reproduire une décision. La qualité du résultat dépend avant tout de la qualité et de la représentativité des données.' },
          {
            t: 'table',
            head: ['Famille', 'Principe', 'Exemple en sécurité'],
            rows: [
              ['**Supervisé**', 'Exemples étiquetés (malveillant / légitime)', 'Classer des courriels ou des fichiers'],
              ['**Non supervisé**', 'Pas d’étiquettes : regrouper ou repérer ce qui s’écarte', 'Détecter un comportement de connexion inhabituel'],
              ['**Apprentissage profond**', 'Réseaux de neurones à nombreuses couches, apprenant eux-mêmes leurs caractéristiques', 'Analyse de binaires, de textes ou de trafic à grande échelle'],
            ],
          },
          { t: 'def', term: 'Caractéristiques (features)', text: 'Grandeurs mesurées sur chaque exemple et fournies au modèle : taille d’un fichier, nombre de connexions par heure, entropie d’un nom de domaine. Le choix des caractéristiques détermine ce que le modèle peut apprendre, et ce qu’un attaquant peut manipuler.' },
          { t: 'callout', kind: 'warn', text: 'Un modèle apprend ce qui distingue les exemples, pas forcément ce que l’on croit. Si tous les fichiers malveillants de l’entraînement viennent d’une même source, il peut apprendre à reconnaître la source plutôt que la malveillance.' },
        ],
      },
      {
        id: 'evaluation',
        title: 'Évaluer un détecteur : au-delà de l’exactitude',
        blocks: [
          { t: 'p', text: 'En sécurité, les événements malveillants sont **rares**. Un modèle qui répond toujours « légitime » sur un flux où 0,1 % des événements sont malveillants a une exactitude de 99,9 %, et ne détecte rien. Il faut donc d’autres mesures.' },
          {
            t: 'table',
            head: ['Mesure', 'Question posée'],
            rows: [
              ['**Précision**', 'Parmi les alertes levées, quelle part est réellement malveillante ?'],
              ['**Rappel** (taux de détection)', 'Parmi les événements malveillants, quelle part a été détectée ?'],
              ['**Taux de faux positifs**', 'Parmi les événements légitimes, quelle part déclenche une alerte ?'],
            ],
          },
          {
            t: 'example',
            title: 'Le piège du taux de base',
            blocks: [
              { t: 'p', text: 'Un détecteur a un rappel de 99 % et un taux de faux positifs de 1 %. Sur 1 000 000 d’événements dont 100 malveillants, il détecte 99 attaques, mais lève aussi environ 10 000 fausses alertes. Sa **précision** n’est que d’environ 1 % : 99 alertes utiles sur plus de 10 000. Un taux de faux positifs qui paraît faible devient ingérable à grande échelle.' },
            ],
          },
          { t: 'def', term: 'Dérive (drift)', text: 'Évolution des données réelles par rapport aux données d’entraînement : nouveaux logiciels, nouveaux usages, nouvelles techniques d’attaque. Un modèle non réentraîné et non surveillé perd progressivement en performance.' },
          { t: 'callout', kind: 'key', text: 'Évaluer sur des données **postérieures** à celles d’entraînement (découpage temporel), et non sur un échantillon aléatoire du même lot, donne une estimation bien plus réaliste des performances en production.' },
        ],
      },
      {
        id: 'soc',
        title: 'L’IA dans le SOC : assister sans décider seule',
        blocks: [
          { t: 'p', text: 'L’IA apporte le plus de valeur sur les tâches volumineuses et répétitives : regrouper des alertes liées, enrichir un incident, résumer une chronologie, proposer une requête de recherche. Les décisions à fort impact restent sous contrôle humain.' },
          { t: 'list', items: ['**Tri et regroupement** : corréler des alertes qui concernent le même hôte ou la même campagne.', '**Enrichissement** : réputation, contexte de l’actif, historique, résumé lisible pour l’analyste.', '**Détection comportementale** : écarts par rapport à la ligne de base d’un utilisateur ou d’un hôte.', '**Automatisation** : actions de réponse proposées, exécutées après validation (ou automatiquement seulement pour des actions réversibles et à faible impact).'] },
          { t: 'def', term: 'Humain dans la boucle', text: 'Organisation dans laquelle une personne valide les décisions importantes proposées par le système, avec les éléments qui les justifient. Elle limite l’impact des erreurs du modèle et permet de les corriger.' },
          { t: 'callout', kind: 'tip', text: 'Une suggestion de l’IA doit toujours venir avec ses éléments de preuve (événements, champs, raisons), pour que l’analyste puisse la vérifier rapidement au lieu de la croire sur parole.' },
        ],
      },
      {
        id: 'menaces',
        title: 'Menaces contre les modèles',
        blocks: [
          { t: 'p', text: 'Un modèle de détection est un composant que l’attaquant cherche à tromper ou à exploiter. L’**apprentissage automatique antagoniste** étudie ces attaques ; le référentiel MITRE ATLAS les recense sur le modèle d’ATT&CK.' },
          {
            t: 'table',
            head: ['Attaque', 'Principe', 'Défenses'],
            rows: [
              ['**Évasion**', 'Modifier une entrée pour qu’elle soit mal classée, sans changer son effet', 'Caractéristiques difficiles à manipuler, combinaison de plusieurs détecteurs, entraînement avec des exemples modifiés'],
              ['**Empoisonnement**', 'Introduire des exemples piégés dans les données d’entraînement', 'Contrôle de la provenance des données, détection des exemples aberrants, réentraînement maîtrisé'],
              ['**Inversion de modèle**', 'Reconstituer des caractéristiques des données d’entraînement à partir des réponses du modèle', 'Limiter les informations renvoyées (pas de scores détaillés), confidentialité différentielle'],
              ['**Inférence d’appartenance**', 'Déterminer si un enregistrement précis faisait partie des données d’entraînement', 'Régularisation, confidentialité différentielle, limitation des requêtes'],
            ],
          },
          { t: 'def', term: 'Confidentialité différentielle', text: 'Technique qui ajoute un bruit calibré pendant l’entraînement ou dans les réponses, de sorte que la présence ou l’absence d’une personne dans les données change très peu le résultat. Elle limite les fuites d’information individuelles, au prix d’une légère perte de précision.' },
          { t: 'callout', kind: 'legal', text: 'Un modèle entraîné sur des données personnelles peut en laisser fuiter une partie : il entre dans le champ du RGPD, et le règlement européen sur l’IA (AI Act) impose des obligations supplémentaires selon le niveau de risque du système.' },
        ],
      },
      {
        id: 'cycle',
        title: 'Sécuriser le cycle de vie d’un modèle',
        blocks: [
          { t: 'p', text: 'Un modèle se protège comme un logiciel, avec en plus ses données et ses poids.' },
          { t: 'list', ordered: true, items: ['**Données** : provenance tracée, accès restreint, contrôle des contributions externes (étiquetage participatif, retours utilisateurs).', '**Entraînement** : environnement isolé, versions des données et du code enregistrées, résultats reproductibles.', '**Modèle** : poids stockés et signés comme un artefact de production ; formats de sérialisation sûrs (un fichier de modèle au format pickle peut exécuter du code au chargement).', '**Déploiement** : API authentifiée, limitation de débit, réponses minimales, journalisation des requêtes.', '**Exploitation** : surveillance de la dérive et des performances, réentraînement planifié, procédure de retour à la version précédente.'] },
          { t: 'def', term: 'Carte de modèle (model card)', text: 'Document qui décrit un modèle : usage prévu, données d’entraînement, performances mesurées (dont les faux positifs), limites connues et conditions de réévaluation. Elle aide les utilisateurs à ne pas l’employer hors de son domaine de validité.' },
          { t: 'callout', kind: 'info', text: 'Le NIST AI Risk Management Framework et les recommandations de l’ANSSI sur la sécurité des systèmes d’IA générative proposent des démarches pour gouverner ces risques tout au long du cycle de vie.' },
        ],
      },
    ],
    useCases: [
      'Choix d’un outil de détection fondé sur l’IA : exiger précision, rappel et taux de faux positifs mesurés sur des données comparables aux siennes.',
      'SOC : regroupement automatique des alertes et résumé des incidents, validés par les analystes.',
      'Équipe de data science : protéger le pipeline d’entraînement d’un modèle anti-fraude contre l’empoisonnement.',
    ],
    commonMistakes: [
      'Juger un détecteur sur son exactitude alors que les attaques sont rares.',
      'Évaluer sur un échantillon aléatoire du même lot que l’entraînement.',
      'Laisser un modèle déclencher seul des actions irréversibles.',
      'Charger un fichier de modèle d’origine inconnue dans un format qui peut exécuter du code.',
      'Exposer une API de modèle qui renvoie des scores détaillés sans limitation de requêtes.',
    ],
    bestPractices: [
      'Mesurer précision, rappel et taux de faux positifs sur des données récentes et représentatives.',
      'Garder l’humain dans la boucle pour les décisions à fort impact, avec les éléments de preuve affichés.',
      'Tracer la provenance des données et versionner données, code et modèles.',
      'Formats de modèle sûrs, artefacts signés, API authentifiée et limitée.',
      'Surveiller la dérive et prévoir le réentraînement et le retour arrière.',
    ],
    keyPoints: [
      'Supervisé, non supervisé, profond : des familles adaptées à des problèmes différents.',
      'Avec des attaques rares, la précision et le taux de faux positifs comptent plus que l’exactitude.',
      'L’IA assiste le SOC ; l’humain valide les décisions importantes.',
      'Évasion, empoisonnement, inversion et inférence d’appartenance visent les modèles eux-mêmes.',
      'Un modèle se sécurise sur tout son cycle de vie, des données à l’exploitation.',
    ],
  },
  practice: [
    {
      id: 'evaluer-detecteur',
      kind: 'analysis',
      title: 'Évaluer la proposition d’un éditeur',
      context: [
        { t: 'p', text: 'Un éditeur présente son détecteur d’hameçonnage : « exactitude de 99,5 % ». Vous obtenez la matrice de confusion mesurée sur un mois de vos propres courriels :' },
        { t: 'table', head: ['', 'Détecté malveillant', 'Détecté légitime'], rows: [['Réellement malveillant (500)', '400', '100'], ['Réellement légitime (199 500)', '900', '198 600']] },
      ],
      steps: ['Calculer la précision, le rappel et le taux de faux positifs.', 'Expliquer pourquoi l’exactitude annoncée est trompeuse ici.', 'Dire ce que cela représente pour votre SOC et quelles questions poser à l’éditeur.'],
    },
    {
      id: 'proteger-pipeline',
      kind: 'case',
      title: 'Cas pratique : protéger un modèle anti-fraude',
      context: [{ t: 'p', text: 'Une banque entraîne chaque semaine un modèle de détection de fraude sur les transactions de la semaine écoulée, en utilisant les signalements des clients comme étiquettes. Le modèle est exposé par une API interne qui renvoie un score de 0 à 1 avec le détail des facteurs.' }],
      steps: ['Identifier trois menaces contre ce système.', 'Proposer une mesure pour chacune.', 'Proposer un indicateur de surveillance en production.'],
    },
  ],
  questions: [
    { id: 'aiml-q1', type: 'single', difficulty: 1, skills: ['q-ml-bases'], prompt: 'Quel type d’apprentissage utilise des exemples étiquetés « malveillant » ou « légitime » ?', options: [{ id: 'a', text: 'L’apprentissage supervisé' }, { id: 'b', text: 'L’apprentissage non supervisé' }, { id: 'c', text: 'Le chiffrement symétrique' }, { id: 'd', text: 'La compression' }] },
    { id: 'aiml-q2', type: 'truefalse', difficulty: 2, skills: ['q-ml-bases'], prompt: 'Un modèle peut apprendre une caractéristique sans rapport avec la malveillance si elle distingue par hasard les exemples d’entraînement.' },
    { id: 'aiml-q3', type: 'short', difficulty: 1, skills: ['q-ml-bases'], prompt: 'Comment appelle-t-on, en anglais, les grandeurs mesurées sur chaque exemple et fournies au modèle ?' },
    { id: 'aiml-q4', type: 'multi', difficulty: 2, skills: ['q-ml-bases', 'q-ml-soc'], prompt: 'Quels usages relèvent typiquement de l’apprentissage non supervisé en sécurité ?', options: [{ id: 'a', text: 'Repérer un comportement de connexion qui s’écarte de l’habitude' }, { id: 'b', text: 'Regrouper des alertes similaires sans étiquettes' }, { id: 'c', text: 'Détecter un volume de transfert anormal pour un hôte' }, { id: 'd', text: 'Vérifier une signature numérique' }] },
    { id: 'aiml-q5', type: 'single', difficulty: 2, skills: ['q-ml-eval'], prompt: 'Que mesure la précision d’un détecteur ?', options: [{ id: 'a', text: 'La part des alertes levées qui sont réellement malveillantes' }, { id: 'b', text: 'La part des attaques détectées' }, { id: 'c', text: 'La vitesse d’exécution du modèle' }, { id: 'd', text: 'Le nombre de paramètres du modèle' }] },
    { id: 'aiml-q6', type: 'truefalse', difficulty: 2, skills: ['q-ml-eval'], prompt: 'Sur un flux où les attaques sont très rares, une exactitude de 99,9 % garantit un bon détecteur.' },
    { id: 'aiml-q7', type: 'short', difficulty: 2, skills: ['q-ml-eval'], prompt: 'Comment appelle-t-on l’évolution des données réelles par rapport aux données d’entraînement ? (mot anglais)' },
    { id: 'aiml-q8', type: 'open', difficulty: 3, skills: ['q-ml-eval'], prompt: 'Un détecteur a un rappel de 95 % et un taux de faux positifs de 0,5 %. Votre SIEM reçoit 2 millions d’événements par jour, dont environ 20 malveillants. Calculez l’ordre de grandeur des alertes par jour et commentez.' },
    { id: 'aiml-q9', type: 'single', difficulty: 2, skills: ['q-ml-soc'], prompt: 'Quelle utilisation de l’IA dans un SOC respecte le principe de l’humain dans la boucle ?', options: [{ id: 'a', text: 'L’IA propose l’isolement d’un serveur avec les éléments qui le justifient, un analyste valide' }, { id: 'b', text: 'L’IA supprime automatiquement les comptes qu’elle juge suspects' }, { id: 'c', text: 'L’IA ferme seule les incidents sans trace' }, { id: 'd', text: 'L’IA modifie les règles du pare-feu de production sans validation' }] },
    { id: 'aiml-q10', type: 'multi', difficulty: 2, skills: ['q-ml-soc'], prompt: 'Sur quelles tâches l’IA apporte-t-elle le plus de valeur à un SOC ?', options: [{ id: 'a', text: 'Regrouper des alertes liées' }, { id: 'b', text: 'Enrichir et résumer un incident' }, { id: 'c', text: 'Proposer une requête de recherche à partir d’une question' }, { id: 'd', text: 'Décider seule des sanctions contre un salarié' }] },
    { id: 'aiml-q11', type: 'truefalse', difficulty: 1, skills: ['q-ml-soc'], prompt: 'Une suggestion d’un outil d’IA doit être accompagnée des éléments qui permettent à l’analyste de la vérifier.' },
    { id: 'aiml-q12', type: 'single', difficulty: 2, skills: ['q-ml-robustesse'], prompt: 'Comment appelle-t-on l’attaque qui consiste à introduire des exemples piégés dans les données d’entraînement ?', options: [{ id: 'a', text: 'L’empoisonnement' }, { id: 'b', text: 'L’évasion' }, { id: 'c', text: 'L’inférence d’appartenance' }, { id: 'd', text: 'Le phishing' }] },
    { id: 'aiml-q13', type: 'multi', difficulty: 3, skills: ['q-ml-robustesse'], prompt: 'Quelles mesures limitent les risques d’inversion de modèle et d’inférence d’appartenance ?', options: [{ id: 'a', text: 'Ne renvoyer que la décision, sans scores détaillés' }, { id: 'b', text: 'Limiter le nombre de requêtes par client' }, { id: 'c', text: 'Entraîner avec la confidentialité différentielle' }, { id: 'd', text: 'Publier les données d’entraînement pour plus de transparence' }] },
    { id: 'aiml-q14', type: 'truefalse', difficulty: 2, skills: ['q-ml-robustesse'], prompt: 'Charger un fichier de modèle au format pickle provenant d’une source inconnue peut exécuter du code sur la machine.' },
    { id: 'aiml-q15', type: 'open', difficulty: 3, skills: ['q-ml-robustesse', 'q-ml-eval'], prompt: 'Un détecteur de logiciels malveillants fondé sur l’apprentissage automatique est contourné par des fichiers légèrement modifiés. Expliquez de quel type d’attaque il s’agit et proposez trois mesures.' },
    { id: 'aiml-q16', type: 'short', difficulty: 2, skills: ['q-ml-robustesse'], prompt: 'Quel référentiel de MITRE recense les techniques d’attaque contre les systèmes d’IA, sur le modèle d’ATT&CK ?' },
  ],
  resources: [
    { title: 'MITRE ATLAS', source: 'MITRE', url: 'https://atlas.mitre.org/' },
    { title: 'AI Risk Management Framework', source: 'NIST', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { title: 'Adversarial Machine Learning: A Taxonomy and Terminology (AI 100-2)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ai/100/2/e2025/final' },
    { title: 'Recommandations de sécurité pour un système d’IA générative', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-pour-un-systeme-dia-generative' },
  ],
};
