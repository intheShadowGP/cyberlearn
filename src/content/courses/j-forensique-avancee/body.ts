import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'j-forensique-avancee',
  lesson: {
    intro:
      'Au niveau avancé, la difficulté n’est plus seulement technique : elle tient au **pilotage** d’une investigation qui mêle de nombreuses sources, au **cloud** où l’on ne contrôle pas le matériel, aux **limites** de ce que les supports modernes permettent de prouver, et à la **défense** de ses conclusions face à un contradicteur. Ce cours est défensif et méthodologique : il apprend à conduire une enquête fiable, pas à contourner des protections.',
    sections: [
      {
        id: 'strategie',
        title: 'Piloter une investigation complexe',
        blocks: [
          { t: 'p', text: 'Une investigation de grande ampleur (plusieurs systèmes, plusieurs semaines, plusieurs équipes) ne se mène pas au fil de l’eau. Elle est **cadrée**, **hypothétique** et **priorisée**.' },
          {
            t: 'table',
            head: ['Étape', 'Contenu'],
            rows: [
              ['**Cadrage**', 'Questions posées, périmètre, autorisation, contraintes juridiques, délais, parties prenantes'],
              ['**Hypothèses**', 'Plusieurs scénarios concurrents (compromission externe, abus interne, erreur) et ce qui les départagerait'],
              ['**Priorisation**', 'Sources les plus utiles, les plus fragiles et les plus rapides à exploiter en premier'],
              ['**Exécution**', 'Collecte, analyse, tenue d’un journal de bord, points d’avancement'],
              ['**Restitution**', 'Conclusions argumentées, niveau de confiance, limites, recommandations'],
            ],
          },
          { t: 'list', items: ['**Hypothèses concurrentes** : on cherche ce qui **infirme** une hypothèse autant que ce qui la confirme, pour éviter le biais de confirmation.', '**Fragilité des sources** : on collecte d’abord ce qui peut disparaître (mémoire, journaux à faible rétention, instantanés qui expirent).', '**Journal de bord** : chaque décision (pourquoi cette source, pourquoi pas celle-là) est consignée.', '**Communication** : la direction, le juridique, le SOC et les experts n’ont pas les mêmes besoins ; les points d’avancement sont ciblés et sobres.'] },
          {
            t: 'example',
            title: 'Un biais de confirmation évité',
            blocks: [
              { t: 'p', text: 'Un responsable est convaincu qu’un salarié a copié des plans sur une clé USB : l’historique des périphériques montre une clé branchée la veille. L’enquêteuse pose aussi l’hypothèse d’une sauvegarde légitime et cherche ce qui les départage : contenu copié (journaux de l’antivirus et de l’EDR), demande de sauvegarde dans le système de tickets, heure et poste.' },
              { t: 'p', text: 'La sauvegarde était planifiée par le service informatique et le salarié n’a branché la clé que pour y copier des fichiers personnels. L’hypothèse de départ était fausse : sans hypothèse concurrente, l’enquête aurait accusé à tort.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Le **biais de confirmation** est le premier ennemi : on cherche des éléments qui confirment l’hypothèse de départ et on néglige les contradictions. Formuler des hypothèses alternatives et chercher à les départager protège contre lui.' },
        ],
      },
      {
        id: 'cloud',
        title: 'Investiguer dans le cloud et les services en ligne',
        blocks: [
          { t: 'p', text: 'Dans le cloud, on ne possède ni le matériel ni toujours les journaux. Les preuves sont des **journaux d’activité** et des **objets** (instantanés, stockage) fournis par le prestataire, dans le cadre d’un **modèle de responsabilité partagée**.' },
          {
            t: 'table',
            head: ['Source', 'Ce qu’elle apprend', 'Point d’attention'],
            rows: [
              ['**Journaux d’identité** (connexions, changements de droits, consentements)', 'Qui s’est connecté, d’où, quels droits ont été accordés', 'Rétention limitée selon l’offre ; à exporter vers un stockage maîtrisé'],
              ['**Journaux d’activité de la plateforme** (appels d’API, création de ressources)', 'Qui a créé, modifié, supprimé quoi', 'Certaines catégories d’événements ne sont pas activées par défaut'],
              ['**Journaux d’accès au stockage et aux messages**', 'Lectures, téléchargements, partages, règles de transfert', 'Souvent facturés ou à activer à l’avance'],
              ['**Instantanés de disques et de machines**', 'État du disque à un instant', 'Ne contiennent pas la mémoire ; durée de vie à surveiller'],
            ],
          },
          { t: 'list', items: ['**Activer à l’avance** : la journalisation et sa rétention se décident avant l’incident.', '**Préserver avant d’agir** : exporter les journaux, faire des instantanés, copier les objets, calculer les empreintes.', '**Isoler plutôt que supprimer** : règles réseau et révocation de jetons avant toute suppression de ressource.', '**Cadre juridique** : le lieu de stockage des données, les contrats avec le fournisseur et le droit applicable (y compris pour les données personnelles) conditionnent ce qu’on peut collecter et transférer.', '**Temps** : les journaux sont horodatés par le fournisseur ; on vérifie les fuseaux et on corrèle avec les sources internes.'] },
          { t: 'callout', kind: 'key', text: 'Dans le cloud, la **demande au fournisseur** (conservation, export) est une étape de l’investigation : elle suit une procédure et prend du temps. Mieux vaut l’avoir préparée.' },
        ],
      },
      {
        id: 'flash',
        title: 'Supports flash, chiffrement et limites d’acquisition',
        blocks: [
          { t: 'p', text: 'Les supports modernes changent ce qu’une acquisition peut prouver. Il faut connaître ces limites pour ne pas conclure de façon abusive.' },
          {
            t: 'table',
            head: ['Sujet', 'Effet sur l’investigation'],
            rows: [
              ['**SSD et mémoire flash**', 'Le contrôleur gère lui-même l’emplacement des données et leur effacement : un fichier supprimé peut devenir irrécupérable rapidement (commande **TRIM**, ramasse-miettes) ; l’état du support peut évoluer même hors tension'],
              ['**Chiffrement intégral du disque**', 'Sans la clé, le contenu est inexploitable ; la clé peut se trouver en mémoire, dans l’annuaire (clé de récupération) ou sur un autre support'],
              ['**Appareils mobiles**', 'Chiffrement par défaut, verrouillage, effacement à distance : l’isolement (mode avion, cage de Faraday) précède l’examen, selon la procédure'],
              ['**Espace libre et fichiers supprimés**', 'La récupération est incertaine sur SSD ; son absence ne prouve pas l’absence d’action'],
            ],
          },
          { t: 'def', term: 'TRIM', text: 'Commande qui informe un SSD que certains blocs ne sont plus utilisés, afin qu’il puisse les effacer en arrière-plan. Elle réduit les chances de retrouver des données supprimées.' },
          { t: 'list', items: ['**Acquérir la clé avant d’éteindre** : mémoire, clé de récupération depuis l’annuaire, image logique du volume déverrouillé.', '**Ne pas conclure sur l’absence** : « aucun fichier récupérable » ne signifie pas « aucun fichier n’a existé ».', '**Documenter les limites** : le rapport indique ce que le support permettait ou non de prouver.', '**Corroborer** : journaux, sauvegardes, services en ligne et autres machines complètent ce que le support ne peut plus fournir.'] },
          { t: 'callout', kind: 'info', text: 'Sur un SSD, deux acquisitions successives d’un même support peuvent différer légèrement, sans qu’il y ait manipulation : le contrôleur continue de travailler. On documente ce constat.' },
        ],
      },
      {
        id: 'anti',
        title: 'Anti-forensique et fiabilité des preuves',
        blocks: [
          { t: 'p', text: 'Un adversaire peut chercher à rendre l’investigation plus difficile : effacer des journaux, antidater des fichiers, utiliser des outils présents sur le système. Connaître ces entraves permet d’évaluer la **fiabilité** de chaque preuve. L’objectif est défensif : détecter la manipulation et la contourner par le recoupement.' },
          {
            t: 'table',
            head: ['Entrave', 'Indices', 'Contre-mesure'],
            rows: [
              ['**Effacement de journaux**', 'Trou dans une série, événement de journal effacé, journal très court', 'Journaux envoyés à l’extérieur, autres sources (EDR, pare-feu, réseau)'],
              ['**Antidatage** (timestomping)', 'Incohérence entre attributs, fractions de seconde à zéro, `ctime` récent', 'Comparer les attributs, croiser avec les journaux et la chronologie du système de fichiers'],
              ['**Outils légitimes détournés**', 'Peu de fichiers nouveaux, activité par des outils d’administration', 'Télémétrie des processus et lignes de commande, comportement plutôt que fichiers'],
              ['**Chiffrement et dissimulation de données**', 'Conteneurs inconnus, fichiers à forte entropie', 'Clés en mémoire, métadonnées d’usage, autres traces d’accès'],
              ['**Suppression sécurisée**', 'Écrasement, outils d’effacement présents', 'Artefacts d’exécution des outils, sauvegardes, services en ligne'],
            ],
          },
          { t: 'list', items: ['**Valider ses outils** : un outil peut avoir des bogues ; on vérifie les résultats sur un jeu de test connu et on garde les versions.', '**Reconnaître l’absence** : l’absence de preuve n’est pas la preuve de l’absence ; on formule la limite.', '**Raisonner par recoupement** : une manipulation sur une source est rarement cohérente avec toutes les autres.', '**Rester défensif** : on ne reproduit pas ces techniques hors d’un cadre de test autorisé.'] },
          { t: 'callout', kind: 'key', text: 'Une preuve n’a de valeur que si l’on peut dire **ce qui pourrait la rendre fausse**. Évaluer ce risque fait partie de l’analyse.' },
        ],
      },
      {
        id: 'expertise',
        title: 'Expertise, rapport et normes',
        blocks: [
          { t: 'p', text: 'Un rapport d’expert est un document que l’on pourra **contester**. Il se rédige pour résister à la contradiction : méthode explicite, faits séparés de l’interprétation, limites assumées.' },
          {
            t: 'table',
            head: ['Exigence', 'Application'],
            rows: [
              ['**Indépendance et impartialité**', 'L’expert ne teste pas ce qu’il a construit ou administré ; il déclare ses liens éventuels'],
              ['**Reproductibilité**', 'Copie vérifiée par empreinte, outils et versions, commandes, paramètres : un tiers retrouve les résultats'],
              ['**Faits et interprétation**', 'Les constats sont rattachés à une preuve ; les déductions portent un niveau de confiance'],
              ['**Hypothèses alternatives**', 'Les scénarios non retenus sont mentionnés avec la raison'],
              ['**Limites**', 'Sources absentes, outils limités, supports flash, rétention insuffisante'],
              ['**Contradictoire**', 'Le rapport permet à la partie adverse de vérifier et de répondre'],
            ],
          },
          { t: 'def', term: 'Normes de référence', text: 'Des normes décrivent les bonnes pratiques de la preuve numérique : identification, collecte, acquisition et préservation (ISO/IEC 27037), analyse et interprétation (ISO/IEC 27042), garantie de la méthode (ISO/IEC 27041). Elles servent de grille pour justifier une démarche, sans remplacer le jugement de l’expert.' },
          { t: 'list', items: ['**Vocabulaire mesuré** : « les éléments sont compatibles avec », « tendent à montrer » plutôt que des certitudes sans fondement.', '**Traçabilité** : journal de bord, chaîne de conservation, empreintes de chaque pièce.', '**Questions du contradicteur** : se préparer à justifier chaque outil, chaque choix et chaque limite.', '**Cadre légal** : respect des données personnelles, du secret des correspondances, des procédures applicables.'] },
          { t: 'callout', kind: 'warn', text: 'Un rapport qui cache ses limites ou ses hypothèses alternatives affaiblit l’expert à la première question du contradicteur. L’honnêteté sur les limites est une force.' },
        ],
      },
      {
        id: 'echelle',
        title: 'Passer à l’échelle : triage, automatisation et validation',
        blocks: [
          { t: 'p', text: 'Sur des centaines de machines, on ne fait pas une image complète de chacune. On **trie** avec des collectes ciblées, on **automatise** les extractions et on **valide** les résultats pour garder la confiance.' },
          {
            t: 'table',
            head: ['Besoin', 'Approche', 'Précaution'],
            rows: [
              ['Savoir **quelles machines** sont touchées', 'Collecte ciblée d’artefacts (outils de triage, agents de collecte, requêtes sur l’EDR)', 'Périmètre et droits d’exécution validés ; impact sur la production évalué'],
              ['**Ordonner** des millions d’événements', 'Super-chronologie fusionnant disque, journaux et réseau', 'Fuseaux normalisés, dérives mesurées, filtres documentés'],
              ['**Répéter** une analyse', 'Scripts et pipelines versionnés', 'Tests sur un jeu connu, journal des versions et des paramètres'],
              ['**Prioriser** les machines à imager', 'Scores et indicateurs issus du triage', 'Le score oriente, il ne conclut pas ; revue humaine'],
            ],
          },
          { t: 'list', items: ['**Triage d’abord** : on décide d’une acquisition complète seulement pour les machines clés.', '**Collecte légère mais traçable** : ce qui est collecté, quand, par quel outil, avec quelle empreinte.', '**Automatisation validée** : un script mal testé peut produire des erreurs à grande échelle ; on le valide et on échantillonne les résultats.', '**Biais d’outil** : un outil ne voit que ce qu’il sait chercher ; on le complète par des vérifications indépendantes.', '**Données personnelles** : la collecte à grande échelle augmente le volume de données touchées ; la minimisation et les accès restreints s’appliquent.'] },
          { t: 'callout', kind: 'tip', text: 'À grande échelle, la fiabilité vient de la **reproductibilité** : mêmes entrées, même version, mêmes résultats. Un résultat qu’on ne peut pas refaire ne se défend pas.' },
        ],
      },
    ],
    useCases: [
      'Responsable d’investigation : piloter une enquête sur plusieurs mois, avec hypothèses concurrentes et points d’avancement.',
      'Investigation d’un compromis de compte cloud : journaux d’identité, activité de la plateforme, instantanés.',
      'Expert judiciaire : défendre un rapport face au contradictoire.',
      'Équipe de réponse à incident : triage de centaines de machines et super-chronologie.',
    ],
    commonMistakes: [
      'Se concentrer sur une seule hypothèse et ignorer ce qui la contredit.',
      'Supprimer une ressource cloud avant d’avoir exporté ses journaux et fait un instantané.',
      'Conclure à l’absence de fichiers sur un SSD parce que rien n’est récupérable.',
      'Faire confiance à un outil sans le valider.',
      'Présenter des interprétations comme des faits dans un rapport.',
      'Automatiser une collecte sans avoir évalué son impact sur la production.',
    ],
    bestPractices: [
      'Cadrer, poser des hypothèses concurrentes et tenir un journal de bord.',
      'Décider à l’avance de la journalisation et de la rétention du cloud.',
      'Acquérir la clé de chiffrement avant l’extinction et documenter les limites des supports flash.',
      'Évaluer ce qui pourrait rendre une preuve fausse et recouper les sources.',
      'Rédiger un rapport reproductible, avec niveaux de confiance et hypothèses alternatives.',
      'Valider les scripts et les outils, échantillonner les résultats, normaliser les fuseaux.',
    ],
    keyPoints: [
      'Le biais de confirmation se combat par des hypothèses concurrentes.',
      'Dans le cloud, préserver (export, instantané) avant d’agir ; isoler plutôt que supprimer.',
      'Sur SSD, TRIM et le contrôleur limitent la récupération : l’absence de trace n’est pas une preuve d’absence.',
      'Une preuve vaut ce que vaut sa résistance aux entraves possibles : on recoupe.',
      'Un rapport d’expert est reproductible, mesuré et ouvert à la contradiction.',
      'À grande échelle : trier, automatiser, valider, rester reproductible.',
    ],
  },
  practice: [
    {
      id: 'plan-investigation',
      kind: 'case',
      title: 'Cas pratique : cadrer une investigation à hypothèses concurrentes',
      context: [{ t: 'p', text: 'Un client d’un cabinet de conseil découvre que des documents de négociation confidentiels sont connus d’un concurrent. Trois pistes : une compromission externe de la messagerie, la fuite volontaire d’un collaborateur, ou l’erreur d’un partage de fichiers trop ouvert. La direction veut une réponse sous trois semaines.' }],
      steps: ['Rédiger le cadrage (questions, périmètre, autorisations, contraintes).', 'Formuler les hypothèses et ce qui permettrait de les départager.', 'Ordonner les sources à collecter en tenant compte de leur fragilité.'],
    },
    {
      id: 'cloud-identite',
      kind: 'analysis',
      title: 'Analyse : un compte cloud potentiellement compromis',
      context: [
        { t: 'code', lang: 'text', code: 'Journal d’identité (UTC), compte « m.vidal »\n02:11  Connexion réussie, pays inhabituel, MFA validée par notification\n02:14  Création d’une règle de transfert de la messagerie vers une adresse externe\n02:19  Consentement accordé à une application inconnue (lecture de la messagerie et des fichiers)\n02:26  Nouvelle méthode d’authentification ajoutée\n\nJournal de la plateforme (UTC)\n02:31  Création d’une clé d’accès pour le compte de service « sauvegarde-ext »\n02:35  Création d’une machine virtuelle de grande taille dans une région inhabituelle\n\nRétention des journaux d’identité : 30 jours ; instantanés automatiques : 7 jours' },
      ],
      steps: ['Décrire l’enchaînement et les hypothèses.', 'Dire ce qu’on préserve et dans quel ordre, compte tenu de la rétention.', 'Proposer le confinement sans détruire de preuve et les points juridiques à anticiper.'],
    },
    {
      id: 'contre-expertise',
      kind: 'case',
      title: 'Cas pratique : répondre à une contestation de rapport',
      context: [{ t: 'p', text: 'Votre rapport indique qu’un document a été supprimé le 12 mars par le compte d’un salarié. L’avocat adverse soutient que l’horloge du poste était fausse, que l’outil utilisé n’est pas validé, que d’autres personnes avaient accès au compte et que le disque est un SSD où la suppression ne peut pas être datée avec certitude.' }],
      steps: ['Répondre point par point en indiquant ce que vous aviez documenté.', 'Dire ce que vous reconnaissez comme limite et comment le rapport la formule.', 'Proposer des vérifications complémentaires.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 3227 — Guidelines for Evidence Collection and Archiving', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
    { title: 'NIST SP 800-86 — Integrating Forensic Techniques into Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'Velociraptor — documentation', source: 'Velocidex', url: 'https://docs.velociraptor.app/' },
    { title: 'plaso (log2timeline)', source: 'Projet plaso', url: 'https://plaso.readthedocs.io/' },
    { title: 'The Sleuth Kit & Autopsy', source: 'Basis Technology', url: 'https://www.sleuthkit.org/' },
  ],
};
