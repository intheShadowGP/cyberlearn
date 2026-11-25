import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'm-gouvernance-operationnelle',
  lesson: {
    intro:
      'Une politique de sécurité signée par la direction ne protège rien tant qu’elle n’est pas traduite en processus qui tournent tous les jours : savoir ce que l’on possède, quelles données sont sensibles, quelles failles restent ouvertes, à quels fournisseurs on confie quoi, et vérifier que tout cela fonctionne. Ce cours décrit ces processus de gouvernance opérationnelle et les référentiels qui aident à les structurer.',
    sections: [
      {
        id: 'actifs',
        title: 'Inventaire des actifs : on ne protège que ce que l’on connaît',
        blocks: [
          { t: 'p', text: 'Les deux premières mesures des **CIS Controls** sont l’inventaire des actifs matériels et l’inventaire des logiciels. Sans elles, impossible de savoir quels postes doivent être corrigés, quels serveurs sont exposés ou quel logiciel est concerné par une nouvelle vulnérabilité.' },
          {
            t: 'table',
            head: ['Information', 'Pourquoi elle compte'],
            rows: [
              ['Propriétaire métier et responsable technique', 'Qui décide, qui agit en cas d’incident ou de correctif'],
              ['Criticité (impact d’une indisponibilité ou d’une fuite)', 'Priorisation des correctifs et de la surveillance'],
              ['Exposition (Internet, réseau interne, isolé)', 'Probabilité d’attaque'],
              ['Logiciels et versions', 'Rapprochement avec les vulnérabilités publiées'],
              ['Données traitées et leur classification', 'Règles de protection applicables'],
            ],
          },
          { t: 'def', term: 'Shadow IT', text: 'Ressources utilisées sans être connues ni validées par la DSI : service en ligne souscrit par une équipe, serveur de test oublié, appareil personnel. Elles échappent aux correctifs, à la sauvegarde et à la surveillance.' },
          { t: 'callout', kind: 'tip', text: 'Un inventaire déclaratif vieillit vite. Il doit être alimenté automatiquement (outil de gestion de parc, agent EDR, découverte réseau, console cloud) puis rapproché des déclarations pour repérer les écarts.' },
        ],
      },
      {
        id: 'classification',
        title: 'Classification des données',
        blocks: [
          { t: 'p', text: 'Toutes les données n’appellent pas le même niveau de protection. La **classification** attribue à chaque donnée un niveau de sensibilité, auquel correspondent des règles concrètes : qui peut y accéder, où elle peut être stockée, si elle doit être chiffrée, comment elle est détruite.' },
          {
            t: 'table',
            caption: 'Exemple de schéma à quatre niveaux',
            head: ['Niveau', 'Exemples', 'Règles'],
            rows: [
              ['Public', 'Plaquette commerciale, offres d’emploi', 'Aucune restriction de diffusion'],
              ['Interne', 'Procédures, annuaire', 'Personnel et prestataires sous contrat'],
              ['Confidentiel', 'Contrats, données clients, paie', 'Accès selon le besoin d’en connaître, chiffrement en transit et au repos'],
              ['Secret', 'Projets de fusion, clés maîtresses', 'Liste nominative, stockage dédié, journalisation de chaque accès'],
            ],
          },
          { t: 'def', term: 'Propriétaire de la donnée', text: 'Responsable métier qui fixe la classification d’un ensemble de données et valide les accès. La DSI applique les mesures, mais ne décide pas seule de la sensibilité.' },
          { t: 'callout', kind: 'warn', text: 'Un schéma trop détaillé n’est pas appliqué. Trois ou quatre niveaux, des exemples concrets et un marquage simple (en-tête de document, étiquette dans la messagerie) valent mieux qu’une politique parfaite que personne ne comprend.' },
        ],
      },
      {
        id: 'vulnerabilites',
        title: 'Gestion des vulnérabilités',
        blocks: [
          { t: 'p', text: 'La gestion des vulnérabilités est un **cycle continu** : découvrir les failles, les prioriser, les corriger ou les atténuer, puis vérifier. Le but n’est pas d’atteindre zéro vulnérabilité, mais de traiter d’abord celles qui créent le plus de risque.' },
          { t: 'list', ordered: true, items: ['**Découvrir** : scans authentifiés, inventaire logiciel rapproché des avis de sécurité (CERT-FR, éditeurs), tests d’intrusion.', '**Prioriser** : gravité technique (CVSS), mais aussi exploitation avérée (catalogue KEV de la CISA), exposition et criticité de l’actif.', '**Traiter** : correctif, mesure de contournement, ou acceptation formelle du risque par le propriétaire.', '**Vérifier** : nouveau scan, suivi des délais, indicateurs.'] },
          {
            t: 'example',
            title: 'Politique de délais fondée sur le risque',
            blocks: [
              {
                t: 'table',
                head: ['Situation', 'Délai cible'],
                rows: [
                  ['Vulnérabilité exploitée activement, actif exposé sur Internet', '48 heures (ou atténuation immédiate)'],
                  ['Critique ou élevée, actif exposé', '7 jours'],
                  ['Critique ou élevée, actif interne', '30 jours'],
                  ['Moyenne ou faible', 'Cycle de correctifs mensuel ou trimestriel'],
                ],
              },
              { t: 'p', text: 'Les valeurs sont un exemple : chaque organisation les fixe selon ses risques. L’important est qu’elles soient écrites, mesurées, et que tout dépassement donne lieu à une décision documentée.' },
            ],
          },
          { t: 'def', term: 'Acceptation du risque', text: 'Décision, prise par le propriétaire de l’actif et non par l’équipe technique, de ne pas corriger une vulnérabilité pendant une durée donnée, avec une justification et une date de réexamen.' },
        ],
      },
      {
        id: 'fournisseurs',
        title: 'Fournisseurs et tiers',
        blocks: [
          { t: 'p', text: 'Une partie croissante des incidents passe par un tiers : prestataire d’infogérance, éditeur de logiciel, service en ligne. Confier un traitement ne transfère pas la responsabilité : l’organisation doit **évaluer**, **encadrer** et **suivre** ses fournisseurs, en proportion de leur accès.' },
          {
            t: 'table',
            head: ['Étape', 'Contenu'],
            rows: [
              ['Évaluation avant contrat', 'Questionnaire de sécurité, certifications (ISO 27001, qualification SecNumCloud), rapports d’audit, localisation des données'],
              ['Clauses contractuelles', 'Exigences de sécurité, notification des incidents dans un délai fixé, droit d’audit, sous-traitance encadrée, réversibilité et restitution des données'],
              ['Suivi', 'Revue périodique selon la criticité, surveillance des incidents publics, revue des accès accordés'],
              ['Fin de contrat', 'Retrait des accès, restitution ou destruction attestée des données'],
            ],
          },
          { t: 'def', term: 'Gestion des tiers par niveau', text: 'Classement des fournisseurs selon l’accès qu’ils ont (données sensibles, accès à distance au réseau, rôle critique dans la production). Un fournisseur de fournitures de bureau et un infogérant ne reçoivent pas le même questionnaire.' },
          { t: 'callout', kind: 'legal', text: 'La directive NIS2 demande aux entités concernées de prendre en compte la sécurité de leur chaîne d’approvisionnement, et le RGPD impose un contrat encadrant tout sous-traitant qui traite des données personnelles (article 28).' },
        ],
      },
      {
        id: 'pilotage',
        title: 'Sensibilisation, référentiels et audits',
        blocks: [
          { t: 'p', text: 'La **sensibilisation** vise des comportements précis : signaler un courriel suspect, verrouiller son poste, vérifier une demande de virement inhabituelle par un autre canal. Elle se mesure par des indicateurs, pas par le nombre de vidéos regardées.' },
          { t: 'list', items: ['Indicateurs utiles : taux de **signalement** des exercices d’hameçonnage (plus parlant que le taux de clic), délai de signalement, signalements réels reçus par le SOC.', 'Formats courts et réguliers, adaptés aux métiers (comptabilité, RH, développeurs, direction).', 'Culture du signalement sans sanction : une personne qui signale son propre clic aide à contenir l’incident.'] },
          {
            t: 'table',
            head: ['Référentiel', 'Apport'],
            rows: [
              ['CIS Controls', 'Mesures techniques priorisées en groupes de mise en œuvre (IG1 à IG3)'],
              ['NIST SP 800-53', 'Catalogue détaillé de mesures de sécurité et de confidentialité'],
              ['NIST SP 800-30 et 800-61', 'Méthode d’appréciation des risques ; gestion des incidents'],
              ['Guide d’hygiène informatique de l’ANSSI', '42 mesures de base, adaptées au contexte français'],
            ],
          },
          { t: 'def', term: 'Audit', text: 'Vérification indépendante et documentée qu’un dispositif est conforme à un référentiel et fonctionne réellement. L’auditeur s’appuie sur des **preuves** (journaux, captures de configuration, comptes rendus de revue), pas sur des déclarations.' },
          { t: 'callout', kind: 'key', text: 'Préparer un audit, c’est surtout conserver les preuves au fil de l’eau : comptes rendus de revues d’accès, rapports de scans, tickets de correctifs, résultats d’exercices. Les reconstituer la veille de l’audit est coûteux et peu convaincant.' },
        ],
      },
      {
        id: 'acces',
        title: 'Gestion des accès et mouvements du personnel',
        blocks: [
          { t: 'p', text: 'Les droits d’accès suivent les personnes tout au long de leur parcours : arrivée, changement de poste, absence prolongée, départ. Sans processus, ils s’accumulent et des comptes oubliés restent actifs : ce sont des portes d’entrée classiques.' },
          {
            t: 'table',
            head: ['Événement', 'Action de sécurité', 'Preuve'],
            rows: [
              ['**Arrivée**', 'Création des comptes sur demande validée, droits du profil du poste', 'Ticket de demande et de validation'],
              ['**Mutation**', 'Ajout des droits du nouveau poste et **retrait** des anciens', 'Revue des droits à la date de mutation'],
              ['**Absence longue**', 'Suspension ou restriction des accès', 'Ticket de suspension'],
              ['**Départ**', 'Retrait des accès le jour même, récupération du matériel', 'Liste de contrôle de départ signée'],
              ['**Revue périodique**', 'Les responsables valident les droits de leur équipe, surtout les comptes à privilèges', 'Compte rendu daté et validé'],
            ],
          },
          { t: 'def', term: 'Accumulation de droits (privilege creep)', text: 'Phénomène par lequel une personne conserve les droits de ses postes successifs et cumule des accès qu’aucun poste ne justifie. La revue lors des mutations et la revue périodique le corrigent.' },
          { t: 'def', term: 'Compte à privilèges', text: 'Compte disposant de droits d’administration. Sa compromission donne un contrôle étendu : on limite leur nombre, on exige une authentification renforcée, on sépare les comptes d’administration des comptes de bureautique et on journalise leurs actions.' },
          { t: 'callout', kind: 'warn', text: 'Les comptes partagés détruisent la traçabilité : impossible de savoir qui a fait quoi. Chaque personne a un compte nominatif ; les comptes de service ont un propriétaire identifié.' },
        ],
      },
      {
        id: 'incidents',
        title: 'Gestion des incidents et retour d’expérience',
        blocks: [
          { t: 'p', text: 'Malgré les mesures préventives, des incidents surviennent. Ce qui distingue les organisations, c’est la rapidité avec laquelle elles les **détectent**, les **contiennent** et en **tirent des enseignements**. Le NIST SP 800-61 décrit un cycle de gestion des incidents que la plupart des organisations reprennent.' },
          {
            t: 'table',
            head: ['Phase', 'Contenu', 'Exemple'],
            rows: [
              ['**Préparation**', 'Procédures, rôles, contacts, outils de journalisation', 'Annuaire de crise, procédure de signalement'],
              ['**Détection et analyse**', 'Qualifier l’alerte, estimer le périmètre et la gravité', 'Corrélation de journaux, fiche d’incident'],
              ['**Confinement**', 'Limiter la propagation sans détruire les preuves', 'Isolement réseau, désactivation de comptes'],
              ['**Éradication et rétablissement**', 'Supprimer la cause, restaurer les services', 'Reconstruction de postes, rotation de secrets'],
              ['**Retour d’expérience**', 'Identifier les causes et les améliorations', 'Réunion sans recherche de coupable, plan d’action'],
            ],
          },
          { t: 'def', term: 'Retour d’expérience', text: 'Analyse conduite après l’incident pour comprendre les causes profondes, les défauts de détection et de réponse, et décider d’actions d’amélioration suivies. Elle ne cherche pas de coupable : une culture de sanction pousse à cacher les erreurs.' },
          { t: 'list', items: ['**Registre des incidents** : même les incidents mineurs sont consignés (chronologie, actifs concernés, décisions) pour repérer les tendances et prouver le traitement.', '**Escalade** : la direction est informée dès qu’un incident est significatif, pas seulement à la fin.', '**Notifications** : selon le cas, la CNIL (violation de données), l’autorité NIS2, les clients ou l’assureur.'] },
          { t: 'callout', kind: 'tip', text: 'Les preuves se conservent : journaux, copies de disque, messages. Effacer les traces « pour nettoyer » empêche de comprendre et de prouver.' },
        ],
      },
    ],
    useCases: [
      'Lancement d’un programme de sécurité dans une PME : inventaire automatisé, classification simple, cycle mensuel de correctifs, puis CIS Controls IG1.',
      'Responsable de la sécurité d’un groupe : politique de délais de correction et tableau de bord par filiale.',
      'Achats : évaluation de sécurité d’un nouvel infogérant avant signature et clauses de notification d’incident.',
    ],
    commonMistakes: [
      'Gérer les vulnérabilités par le seul score CVSS, sans tenir compte de l’exploitation réelle ni de l’exposition.',
      'Tenir un inventaire manuel dans un tableur jamais mis à jour.',
      'Laisser l’équipe technique accepter seule un risque à la place du propriétaire métier.',
      'Évaluer un fournisseur une fois à la signature, puis ne plus jamais revoir ses accès.',
      'Mesurer la sensibilisation au taux de participation plutôt qu’aux comportements.',
    ],
    bestPractices: [
      'Inventaire alimenté automatiquement et rapproché régulièrement des déclarations.',
      'Classification en trois ou quatre niveaux, avec propriétaires de données identifiés.',
      'Priorisation des vulnérabilités par l’exploitation, l’exposition et la criticité ; délais écrits et mesurés.',
      'Fournisseurs classés par niveau d’accès, clauses de sécurité, revue périodique et retrait des accès en fin de contrat.',
      'Preuves conservées au fil de l’eau ; indicateurs de comportement pour la sensibilisation.',
    ],
    keyPoints: [
      'L’inventaire des actifs conditionne toutes les autres mesures.',
      'La classification relie chaque donnée à des règles concrètes, fixées par son propriétaire.',
      'Gestion des vulnérabilités : découvrir, prioriser selon le risque, traiter, vérifier.',
      'Confier un traitement à un fournisseur ne transfère pas la responsabilité.',
      'Un audit s’appuie sur des preuves, qui se conservent en continu.',
    ],
  },
  practice: [
    {
      id: 'priorisation-vulns',
      kind: 'analysis',
      title: 'Prioriser une liste de vulnérabilités',
      context: [
        { t: 'p', text: 'Extrait du dernier rapport de scan :' },
        {
          t: 'table',
          head: ['#', 'Actif', 'Exposition', 'CVSS', 'Exploitée activement (KEV)'],
          rows: [
            ['1', 'Passerelle VPN', 'Internet', '9.8', 'Oui'],
            ['2', 'Serveur de fichiers interne', 'Interne', '9.1', 'Non'],
            ['3', 'Site vitrine', 'Internet', '6.1', 'Non'],
            ['4', 'Poste de la comptabilité', 'Interne', '7.8', 'Oui'],
            ['5', 'Serveur de test oublié', 'Internet', '7.5', 'Non'],
          ],
        },
      ],
      steps: ['Classer les cinq éléments par ordre de traitement et justifier.', 'Indiquer pour chacun le délai cible selon la politique d’exemple.', 'Repérer le problème de gouvernance révélé par la ligne 5.'],
    },
    {
      id: 'fournisseur-infogerance',
      kind: 'case',
      title: 'Cas pratique : encadrer un nouvel infogérant',
      context: [{ t: 'p', text: 'Votre entreprise confie l’administration de ses serveurs à un infogérant, avec un accès à distance permanent et des droits d’administrateur. Les serveurs hébergent des données clients.' }],
      steps: ['Lister les éléments à évaluer avant la signature.', 'Proposer cinq clauses contractuelles de sécurité.', 'Décrire les contrôles à mettre en place pendant le contrat.'],
    },
    {
      id: 'revue-comptes',
      kind: 'analysis',
      title: 'Analyse : une revue des comptes après un départ',
      context: [
        {
          t: 'table',
          head: ['Compte', 'Situation', 'Dernière connexion'],
          rows: [
            ['a.martin', 'Comptable parti il y a 4 mois', 'Hier, depuis une adresse extérieure'],
            ['svc-sauvegarde', 'Compte de service sans propriétaire connu, droits d’administration', 'Quotidienne'],
            ['j.leroy', 'Muté de la comptabilité à la logistique il y a 8 mois, droits des deux postes', 'Hier, depuis le poste de logistique'],
            ['admin-partage', 'Compte administrateur utilisé par trois personnes', 'Hier'],
            ['p.durand', 'Stagiaire dont le stage a pris fin il y a 2 semaines', 'Il y a 2 semaines'],
          ],
        },
      ],
      steps: ['Classer ces comptes par urgence de traitement en justifiant.', 'Indiquer l’action de correction pour chacun.', 'Proposer les changements de processus pour éviter que cela se reproduise.'],
    },
  ],
  questions,
  resources: [
    { title: 'CIS Critical Security Controls', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/controls' },
    { title: 'Guide d’hygiène informatique', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'SP 800-53 Rev. 5 — Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
    { title: 'Known Exploited Vulnerabilities Catalog', source: 'CISA', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    { title: 'Avis de sécurité', source: 'CERT-FR', url: 'https://www.cert.ssi.gouv.fr/avis/' },
  ],
};
