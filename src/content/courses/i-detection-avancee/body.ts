import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'i-detection-avancee',
  lesson: {
    intro:
      'Un SOC mature ne se juge pas au nombre de règles ou d’alertes, mais à la **qualité mesurée** de sa détection et de sa réponse. Ce cours s’adresse à ceux qui conçoivent l’architecture de détection, la maintiennent comme un produit, la valident par des exercices et la pilotent par des indicateurs. Tout reste du côté de la **défense** et dans le cadre du droit.',
    sections: [
      {
        id: 'archi',
        title: 'Architecture de données de détection',
        blocks: [
          { t: 'p', text: 'Détecter, c’est d’abord disposer de la bonne donnée, au bon endroit, au bon coût. L’architecture de données détermine ce qu’on peut détecter, la vitesse des recherches et le budget.' },
          {
            t: 'table',
            head: ['Choix', 'Enjeu', 'Bonne pratique'],
            rows: [
              ['**Sources**', 'Couvrir les techniques prioritaires', 'Partir des techniques ATT&CK à couvrir, puis des sources qui les rendent visibles'],
              ['**Normalisation**', 'Écrire des règles indépendantes de la source', 'Schéma commun (utilisateur, hôte, processus, adresse), documenté et versionné'],
              ['**Stockage par niveaux**', 'Maîtriser le coût', 'Données récentes en accès rapide, historique en stockage économique interrogeable'],
              ['**Rétention**', 'Enquêter après coup, respecter le droit', 'Durée justifiée par source, alignée sur les besoins et sur la réglementation'],
              ['**Qualité**', 'Éviter les angles morts', 'Contrôles de complétude, d’horodatage, de silence anormal d’une source'],
            ],
          },
          { t: 'def', term: 'Schéma commun', text: 'Modèle de champs normalisés (par exemple utilisateur, hôte source, processus parent, ligne de commande) auquel toutes les sources sont rattachées. Il permet une règle unique valable pour plusieurs produits et réduit le coût de maintenance.' },
          { t: 'list', items: ['**Filtrer à la source** ce qui n’a aucune valeur de détection, plutôt que de tout stocker.', '**Enrichir à l’ingestion** (propriétaire du poste, criticité, identité) pour accélérer le triage.', '**Surveiller la santé des pipelines** : un silence est une alerte.', '**Documenter** chaque source : ce qu’elle contient, son propriétaire, sa rétention, les règles qui en dépendent.'] },
          { t: 'callout', kind: 'key', text: 'Une règle sans donnée est un faux sentiment de sécurité. La couverture se mesure sur le triplet **technique → source → règle testée**.' },
        ],
      },
      {
        id: 'code',
        title: 'Détection comme code : tests, revue et déploiement',
        blocks: [
          { t: 'p', text: 'Une règle est un logiciel : elle se versionne, se relit, se teste et se déploie par un processus maîtrisé. Cette approche (*detection as code*) rend les changements traçables et réversibles.' },
          { t: 'list', ordered: true, items: ['**Dépôt versionné** : chaque règle (par exemple en Sigma) est un fichier avec métadonnées (technique ATT&CK, gravité, source, propriétaire, date de revue).', '**Revue par un pair** avant fusion : logique, exclusions, impact attendu en volume.', '**Tests automatiques** : la règle se déclenche sur des événements d’exemple positifs et ne se déclenche pas sur des événements négatifs.', '**Test sur l’historique** : nombre d’alertes attendues par jour et échantillon examiné.', '**Déploiement progressif** : mode observation, puis alerte à faible priorité, puis priorité définitive.', '**Retour arrière** rapide si le bruit explose.'] },
          { t: 'code', lang: 'yaml', caption: 'Métadonnées d’une règle gérée comme du code (exemple)', code: 'title: Création d’une tâche planifiée par un compte non administrateur\nid: 8f2c1e5a-0000-4000-8000-000000000001\nstatus: test\nowner: ingenierie-detection\nlogsource:\n  product: windows\n  service: security\ndetection:\n  selection:\n    EventID: 4698\n  filter_admin:\n    SubjectUserName|endswith: \'-adm\'\n  condition: selection and not filter_admin\nlevel: medium\ntags:\n  - attack.persistence\n  - attack.t1053.005\nfalsepositives:\n  - Outils de déploiement logiciel (liste d’exclusions documentée)' },
          {
            t: 'table',
            head: ['Étape', 'Question à se poser'],
            rows: [
              ['Conception', 'Quelle technique, quelle donnée, quel comportement légitime peut ressembler ?'],
              ['Test', 'Que se passe-t-il avec des événements positifs, négatifs et des cas limites ?'],
              ['Déploiement', 'Quel volume d’alertes attendre ? Qui les traite ? Quel retour arrière ?'],
              ['Revue', 'La règle est-elle encore utile, précise, et rattachée à une technique à jour ?'],
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Une exclusion non documentée ou trop large est un **angle mort durable**. Chaque exclusion a un propriétaire, une justification, une date et une revue.' },
        ],
      },
      {
        id: 'valid',
        title: 'Valider la couverture : émulation et Purple Team',
        blocks: [
          { t: 'p', text: 'Une règle qui n’a jamais été confrontée à l’activité qu’elle vise est une hypothèse, pas une garantie. La validation consiste à **rejouer des comportements** dans un environnement autorisé et à vérifier que la détection se déclenche.' },
          { t: 'def', term: 'Émulation et exercice Purple Team', text: 'Rejeu contrôlé et autorisé de techniques d’attaquants (par exemple à partir de tests atomiques publiés), en collaboration entre équipe offensive et défense : chaque technique est rejouée, le résultat de détection est noté et les lacunes deviennent des chantiers.' },
          {
            t: 'table',
            head: ['Mesure', 'Définition', 'Usage'],
            rows: [
              ['**Taux de détection**', 'Part des techniques rejouées qui ont produit une alerte', 'Évaluer la couverture réelle'],
              ['**Délai de détection**', 'Temps entre le rejeu et l’alerte', 'Évaluer la réactivité'],
              ['**Qualité de la détection**', 'Alerte exploitable (contexte, gravité) ou simple trace dans un journal', 'Distinguer visibilité et détection'],
              ['**Robustesse**', 'La détection tient-elle face à des variantes de la même technique ?', 'Éviter une détection trop fragile'],
            ],
          },
          { t: 'list', items: ['**Niveaux de couverture** : aucune donnée, donnée sans règle, règle non testée, règle validée par rejeu.', '**Robustesse** : on cherche à détecter le **comportement** (et ses variantes) plutôt qu’une chaîne de caractères exacte, qu’un adversaire modifierait trivialement.', '**Environnement et cadre** : les rejeux se font dans un périmètre autorisé, avec des charges inoffensives, et le SOC peut être informé ou non selon l’objectif.', '**Boucle** : chaque rejeu non détecté devient une règle ou une source à ajouter, puis un nouveau rejeu.'] },
          {
            t: 'example',
            title: 'Exemple : un rejeu qui révèle une lacune',
            blocks: [
              { t: 'p', text: 'Une règle censée détecter PowerShell lancé par une application bureautique existe depuis un an. Lors d’un rejeu autorisé, aucune alerte n’apparaît : le champ « processus parent » n’était pas renseigné pour une partie des postes, car la télémétrie n’y était pas déployée.' },
              { t: 'p', text: 'Résultat : la couverture de cette technique passe de « règle non testée » à « lacune de données ». Le chantier est de déployer la télémétrie, puis de rejouer pour obtenir « règle validée ». Sans le rejeu, l’organisation aurait cru être couverte.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Suivez la couverture comme une carte (ATT&CK Navigator) avec quatre couleurs : pas de donnée, donnée seule, règle non testée, règle validée.' },
        ],
      },
      {
        id: 'stat',
        title: 'Détection statistique et évaluation',
        blocks: [
          { t: 'p', text: 'Les détections fondées sur la statistique ou l’apprentissage (analyse du comportement des utilisateurs et des entités, détection d’anomalies) complètent les règles, mais exigent une évaluation rigoureuse.' },
          {
            t: 'table',
            head: ['Mesure', 'Formule', 'Question à laquelle elle répond'],
            rows: [
              ['**Précision**', 'vrais positifs / (vrais positifs + faux positifs)', 'Quelle part des alertes est justifiée ?'],
              ['**Rappel**', 'vrais positifs / (vrais positifs + faux négatifs)', 'Quelle part des attaques est détectée ?'],
              ['**Taux de faux positifs par jour**', 'alertes injustifiées / jours', 'Quelle charge cela impose-t-il aux analystes ?'],
            ],
          },
          { t: 'list', items: ['**Ligne de base** : une anomalie n’a de sens que par rapport au comportement normal, qui évolue (dérive) : elle doit être recalculée.', '**Explicabilité** : un analyste doit comprendre **pourquoi** l’alerte a été levée pour la qualifier ; une note de risque sans explication se traite mal.', '**Données étiquetées rares** : les vraies attaques sont peu nombreuses ; on évalue avec des rejeux et des scénarios, pas seulement des statistiques globales.', '**Seuils** : le choix du seuil arbitre précision et rappel ; il se règle selon la capacité de traitement.', '**Supervision** : un modèle se surveille (dérive, qualité, contournement) comme une règle.'] },
          { t: 'callout', kind: 'warn', text: 'Une détection qui produit trop de faux positifs est ignorée, et une détection qui manque la plupart des attaques donne une fausse confiance. Aucune des deux ne remplace des règles précises sur des techniques connues.' },
          { t: 'callout', kind: 'legal', text: 'Analyser le comportement des utilisateurs touche à leur vie privée : finalité claire, information des personnes, proportionnalité et respect du RGPD sont nécessaires.' },
        ],
      },
      {
        id: 'reponse',
        title: 'Automatiser la réponse sous gouvernance',
        blocks: [
          { t: 'p', text: 'L’automatisation accélère la réponse et réduit les tâches répétitives, mais une action automatique erronée peut interrompre l’activité. La gouvernance fixe **ce qui peut être automatisé et avec quel contrôle**.' },
          {
            t: 'table',
            head: ['Niveau d’autonomie', 'Description', 'Exemple'],
            rows: [
              ['**1. Enrichissement**', 'Ajoute du contexte à l’alerte, sans action', 'Réputation d’une adresse, propriétaire du poste'],
              ['**2. Recommandation**', 'Propose une action à l’analyste', 'Suggérer l’isolement d’un poste'],
              ['**3. Action avec validation**', 'Exécute après accord humain', 'Isoler un serveur critique après approbation'],
              ['**4. Action automatique à faible risque**', 'Exécute seule, réversible, périmètre limité', 'Réinitialiser une session suspecte d’un compte standard'],
            ],
          },
          { t: 'list', items: ['**Réversibilité** : toute action automatique doit pouvoir être annulée (retour arrière documenté).', '**Garde-fous** : liste des actifs critiques exclus de l’automatisation, limites de volume et de fréquence.', '**Journalisation** : chaque action est tracée avec la règle, la décision, l’heure.', '**Tests** : les playbooks se testent en environnement de recette et par exercices.', '**Gestion de crise** : un canal de communication hors bande, des rôles clairs et une préparation à la conservation des preuves (*forensic readiness*).'] },
          { t: 'callout', kind: 'key', text: 'Plus l’impact d’une action est élevé, plus la validation humaine et la réversibilité sont exigées.' },
        ],
      },
      {
        id: 'pilotage',
        title: 'Piloter un SOC : indicateurs, maturité et conformité',
        blocks: [
          { t: 'p', text: 'Piloter, c’est choisir quelques indicateurs qui orientent des décisions, comparer à un référentiel de maturité et rendre compte à la direction.' },
          {
            t: 'table',
            head: ['Indicateur', 'Ce qu’il guide'],
            rows: [
              ['**MTTD** (délai moyen de détection)', 'Priorités de détection, sources à ajouter'],
              ['**MTTR** (délai moyen de réponse)', 'Automatisation, formation, procédures'],
              ['**Couverture ATT&CK validée**', 'Prochaines règles et prochains rejeux'],
              ['**Précision des règles**', 'Réglage, retrait des règles bruyantes'],
              ['**Charge par analyste**', 'Dimensionnement, risque d’épuisement'],
              ['**Incidents découverts par la chasse**', 'Valeur de la chasse, lacunes des règles'],
            ],
          },
          { t: 'list', items: ['**Maturité** : un référentiel comme SOC-CMM décrit les niveaux de maturité (personnes, processus, technologie, services) pour se positionner et planifier.', '**Capacité** : dimensionner les équipes selon le volume d’alertes, la couverture horaire et le temps de traitement.', '**Amélioration continue** : chaque incident et chaque exercice alimente un plan d’action suivi.', '**Rapport à la direction** : risque couvert et non couvert, progrès, besoins, sans jargon.'] },
          { t: 'callout', kind: 'legal', title: 'Conformité et éthique', text: 'La surveillance des salariés doit respecter le droit du travail et le RGPD : information préalable, finalité légitime, proportionnalité, accès restreint aux données. Les exigences de notification (RGPD, NIS2) imposent des procédures prêtes à l’avance.' },
          { t: 'callout', kind: 'tip', text: 'Un indicateur qui n’entraîne aucune décision est inutile. Pour chacun, nommez la décision qu’il éclaire.' },
        ],
      },
    ],
    useCases: [
      'Responsable de l’ingénierie de détection : mettre en place un dépôt de règles avec revue et tests automatiques.',
      'Responsable SOC : présenter à la direction la couverture validée et le plan de progression.',
      'Architecte sécurité : définir la rétention et les niveaux de stockage des journaux en maîtrisant le coût.',
      'Responsable de la réponse : définir les actions automatisables et celles qui exigent une validation.',
    ],
    commonMistakes: [
      'Mesurer un SOC au nombre de règles ou d’alertes plutôt qu’à la couverture validée.',
      'Déployer une règle sans test ni mode observation.',
      'Accumuler des exclusions sans propriétaire ni date de revue.',
      'Faire confiance à une note de risque sans explication.',
      'Automatiser une action irréversible sur des actifs critiques sans validation.',
      'Surveiller les salariés sans information ni finalité légitime.',
    ],
    bestPractices: [
      'Partir des techniques à couvrir, puis des sources, puis des règles, et mesurer la couverture validée.',
      'Gérer les règles comme du code : versions, revue, tests, déploiement progressif, retour arrière.',
      'Valider par rejeu autorisé, en boucle avec la défense.',
      'Évaluer les détections statistiques par précision, rappel et charge, et les superviser.',
      'Gouverner l’automatisation par niveaux d’autonomie et garde-fous.',
      'Piloter avec peu d’indicateurs, chacun relié à une décision, dans le respect du droit.',
    ],
    keyPoints: [
      'Une règle sans donnée n’est qu’une apparence de couverture.',
      'La détection comme code rend les changements testés, revus et réversibles.',
      'La couverture se prouve par rejeu, pas par déclaration.',
      'Précision, rappel et explicabilité évaluent une détection statistique.',
      'Plus l’impact est élevé, plus la validation humaine est exigée.',
      'Un SOC se pilote par des indicateurs reliés à des décisions, dans le cadre du droit.',
    ],
  },
  practice: [
    {
      id: 'pipeline-detection',
      kind: 'case',
      title: 'Cas pratique : mettre en place la détection comme code',
      context: [{ t: 'p', text: 'Les règles du SOC sont aujourd’hui modifiées directement dans la console du SIEM par plusieurs personnes, sans historique ni test. La semaine dernière, une exclusion trop large a masqué des alertes pendant deux jours. La direction demande un processus fiable.' }],
      steps: ['Décrire les étapes du processus proposé, de la rédaction au déploiement.', 'Définir les tests automatiques et le retour arrière.', 'Prévoir la gouvernance des exclusions (propriétaire, durée, revue).'],
    },
    {
      id: 'evaluer-regle',
      kind: 'analysis',
      title: 'Analyse : comparer deux règles de détection',
      context: [
        { t: 'code', lang: 'text', code: 'Banc de test : 40 techniques d’attaque rejouées en environnement autorisé\n\nRègle A (comportementale) : 200 alertes en un mois, dont 30 justifiées ; détecte 30 des 40 techniques\nRègle B (très spécifique) : 20 alertes en un mois, dont 16 justifiées ; détecte 16 des 40 techniques\n\nCapacité du SOC : environ 60 alertes traitées par jour pour toutes les règles' },
      ],
      steps: ['Calculer la précision et le rappel de chaque règle.', 'Dire laquelle déployer et sous quelle forme, en justifiant.', 'Proposer une amélioration pour chacune.'],
    },
    {
      id: 'plan-maturite',
      kind: 'case',
      title: 'Cas pratique : plan de progression d’un SOC',
      context: [{ t: 'p', text: 'Un SOC de douze personnes couvre les heures ouvrées. Il reçoit 900 alertes par jour, en clôt 85 % comme faux positifs, détecte les incidents en moyenne en 11 jours et n’a jamais rejoué de techniques pour valider ses règles. La direction vous demande un plan sur douze mois.' }],
      steps: ['Choisir quatre indicateurs de pilotage et leur cible à douze mois.', 'Ordonner les chantiers (données, règles, validation, automatisation) et justifier.', 'Identifier les risques juridiques et éthiques à traiter.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Sigma — règles de détection génériques', source: 'SigmaHQ', url: 'https://github.com/SigmaHQ/sigma' },
    { title: 'Alerting and Detection Strategy Framework', source: 'Palantir', url: 'https://github.com/palantir/alerting-detection-strategy-framework' },
    { title: 'SOC-CMM — modèle de maturité d’un SOC', source: 'SOC-CMM', url: 'https://www.soc-cmm.com/' },
    { title: 'NIST SP 800-61 Rev. 3 — Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
  ],
};
