import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'n-automobile-profinet',
  lesson: {
    intro:
      'Les cours précédents du module N ont traité les systèmes industriels classiques (Modbus, SCADA) et les objets connectés. Deux domaines prolongent cette sécurité des systèmes cyber-physiques : les bus industriels temps réel comme Profinet, et surtout l’automobile, devenue un ordinateur roulant et connecté. Un véhicule moderne embarque des dizaines de calculateurs reliés par des bus, communique avec l’extérieur et reçoit des mises à jour : il relève désormais d’un cadre normatif et réglementaire dédié.',
    sections: [
      {
        id: 'profinet',
        title: 'Profinet : Ethernet industriel temps réel',
        blocks: [
          { t: 'p', text: '**Profinet** est un protocole de communication industriel fondé sur Ethernet, utilisé pour relier automates, capteurs et actionneurs avec des contraintes de **temps réel**. Comme Modbus, il a d’abord été conçu pour fonctionner sur un réseau de confiance, pas pour résister à un participant hostile.' },
          {
            t: 'table',
            head: ['Caractéristique', 'Conséquence de sécurité'],
            rows: [
              ['Fondé sur Ethernet standard', 'Partage l’infrastructure et les faiblesses de couche 2 (voir le cours réseau sur la commutation)'],
              ['Temps réel, faible latence', 'Peu de place pour des contrôles lourds ; la sécurité repose surtout sur l’architecture'],
              ['Peu ou pas d’authentification native selon les profils', 'Un équipement non autorisé sur le segment peut perturber le procédé'],
            ],
          },
          { t: 'def', term: 'Temps réel industriel', text: 'Garantie qu’un message arrive dans un délai borné et prévisible. Cette exigence prime sur la confidentialité : on ne peut pas ajouter n’importe quel traitement de sécurité sans risquer de violer les contraintes de temps du procédé.' },
          { t: 'callout', kind: 'key', text: 'Comme pour Modbus, la sécurité de Profinet repose avant tout sur la **segmentation** (réseaux OT isolés et cloisonnés), la **surveillance passive** du trafic et le contrôle strict des équipements raccordés, plutôt que sur le protocole lui-même.' },
        ],
      },
      {
        id: 'archi-auto',
        title: 'Architecture électronique d’un véhicule',
        blocks: [
          { t: 'p', text: 'Un véhicule moderne contient des dizaines de **calculateurs** (ECU) reliés par des **bus** internes (le plus connu étant le bus CAN), regroupés en domaines (motorisation, châssis, habitacle, infodivertissement) interconnectés par des **passerelles**.' },
          {
            t: 'table',
            head: ['Point d’entrée', 'Exemple'],
            rows: [
              ['Interfaces sans fil', 'Clé, pression des pneus, Bluetooth, Wi-Fi, cellulaire (télématique)'],
              ['Infodivertissement', 'Système multimédia connecté, ports USB'],
              ['Diagnostic', 'Prise OBD-II (accès au bus de diagnostic)'],
              ['Chaîne d’approvisionnement', 'Calculateurs et logiciels de fournisseurs tiers'],
              ['Services dématérialisés', 'Application mobile, serveurs du constructeur, mises à jour à distance'],
            ],
          },
          { t: 'def', term: 'Bus CAN', text: 'Bus de terrain historique reliant les calculateurs d’un véhicule. Conçu pour la fiabilité, pas pour la sécurité : les messages n’y sont ni authentifiés ni chiffrés par défaut. Un accès au bus permet d’injecter des messages ; d’où l’importance de segmenter les domaines et de contrôler les passerelles.' },
          { t: 'callout', kind: 'warn', text: 'Le risque majeur est qu’un point d’entrée peu critique (infodivertissement, interface sans fil) communique trop librement avec les domaines critiques (freinage, direction). La défense repose sur le cloisonnement entre domaines et une passerelle qui filtre strictement.' },
        ],
      },
      {
        id: 'defense-auto',
        title: 'Défense embarquée des véhicules',
        blocks: [
          { t: 'p', text: 'Sécuriser un véhicule, c’est appliquer la défense en profondeur à un système embarqué qui doit rester sûr de fonctionnement (safety) : une mesure de sécurité ne doit jamais compromettre la sécurité physique.' },
          {
            t: 'table',
            head: ['Mesure', 'Rôle'],
            rows: [
              ['Segmentation interne par domaines', 'Isoler l’infodivertissement et les interfaces externes des fonctions critiques'],
              ['Passerelle sécurisée', 'Filtrer et contrôler les échanges entre domaines, autoriser le strict nécessaire'],
              ['Démarrage et code signés', 'Secure Boot et firmware signé sur les calculateurs (voir le cours sur le firmware)'],
              ['Détection d’intrusion embarquée', 'Surveiller le trafic des bus et alerter sur les messages anormaux'],
              ['Authentification des messages', 'Mécanismes de message authentifié sur les bus critiques, dans la limite du temps réel'],
            ],
          },
          { t: 'def', term: 'Safety et security', text: 'La sûreté de fonctionnement (safety) protège les personnes des défaillances du système ; la cybersécurité (security) protège le système des actes malveillants. En automobile, les deux sont liées : une faille de sécurité peut devenir un problème de sûreté, donc la sécurité fait partie de la conception dès l’origine.' },
          {
            t: 'example',
            title: 'Une passerelle qui casse le chemin d’attaque',
            blocks: [
              { t: 'p', text: 'Un attaquant compromet le système d’infodivertissement via une faille Bluetooth. Sans cloisonnement, il atteindrait le même bus que le freinage. Avec une architecture par domaines, l’infodivertissement est sur un domaine séparé, et la passerelle n’autorise entre domaines que quelques messages précis (par exemple « vitesse courante » en lecture).' },
              { t: 'p', text: 'Résultat : l’attaquant reste confiné à l’infodivertissement ; il ne peut pas envoyer de commande au domaine critique, car la passerelle rejette tout message non prévu.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Les mises à jour logicielles à distance (OTA) sont à la fois une mesure de sécurité (corriger vite une vulnérabilité sur tout un parc) et une surface à protéger (signature des paquets, authentification des serveurs) : c’est l’objet du règlement sur les mises à jour, vu plus loin.' },
        ],
      },
      {
        id: 'iso21434',
        title: 'ISO/SAE 21434 : l’ingénierie de cybersécurité',
        blocks: [
          { t: 'p', text: 'La norme **ISO/SAE 21434** « Road vehicles — Cybersecurity engineering » (2021) définit comment intégrer la cybersécurité dans tout le **cycle de vie** d’un véhicule et de ses composants : conception, développement, production, exploitation, mise hors service, en incluant les fournisseurs.' },
          { t: 'list', items: ['Elle demande une **analyse de risques** propre au domaine (TARA : analyse des menaces et évaluation des risques) pour chaque fonction.', 'Elle couvre la **chaîne d’approvisionnement** : constructeur et fournisseurs se répartissent les responsabilités de cybersécurité.', 'Elle impose une **gestion continue** : veille sur les vulnérabilités, réponse aux incidents, pendant toute la vie du véhicule.', 'Elle est **orientée processus** : elle décrit ce qu’il faut organiser, pas une liste figée de mesures techniques.'] },
          { t: 'def', term: 'TARA', text: 'Threat Analysis and Risk Assessment : méthode d’analyse des menaces et d’évaluation des risques propre à l’automobile, qui identifie les biens à protéger, les scénarios de menace et leur impact (y compris sur la sécurité physique) pour prioriser les mesures.' },
          { t: 'callout', kind: 'info', text: 'ISO/SAE 21434 est la réponse « ingénierie » (le « comment ») ; elle est le cadre technique habituel pour satisfaire les exigences de la réglementation, qui en fixe le « quoi ».' },
        ],
      },
      {
        id: 'unece',
        title: 'Réglementation : UNECE R155 et R156',
        blocks: [
          { t: 'p', text: 'Au niveau réglementaire, deux règlements des Nations unies (groupe WP.29) encadrent la cybersécurité des véhicules et conditionnent leur homologation sur de nombreux marchés, dont l’Union européenne.' },
          {
            t: 'table',
            head: ['Règlement', 'Objet', 'Système exigé'],
            rows: [
              ['**UNECE R155**', 'Cybersécurité du véhicule', 'Un **CSMS** (Cyber Security Management System) : le constructeur doit prouver qu’il gère la cybersécurité sur tout le cycle de vie'],
              ['**UNECE R156**', 'Mises à jour logicielles', 'Un **SUMS** (Software Update Management System) : gérer les mises à jour, y compris à distance, de façon sûre et traçable'],
            ],
          },
          { t: 'def', term: 'CSMS et SUMS', text: 'Le CSMS (R155) est le système de management de la cybersécurité : organisation, processus, gestion des risques et des incidents. Le SUMS (R156) est le système de management des mises à jour logicielles : identification des logiciels, validation, déploiement sûr et traçabilité, en particulier pour les mises à jour à distance.' },
          { t: 'callout', kind: 'legal', text: 'Ces règlements sont **orientés objectifs** : ils disent ce qu’il faut démontrer pour obtenir l’homologation, sans imposer une solution technique unique. ISO/SAE 21434 sert de cadre reconnu pour y répondre. Le calendrier d’application dépend des marchés et des types de véhicules ; dans l’UE, ils conditionnent l’homologation des nouveaux véhicules depuis le milieu des années 2020.' },
        ],
      },
      {
        id: 'communications',
        title: 'Communications et accès du véhicule',
        blocks: [
          { t: 'p', text: 'Un véhicule dialogue avec son environnement par de nombreux canaux. Chacun doit être **authentifié** et **cloisonné** par rapport aux fonctions critiques.' },
          {
            t: 'table',
            head: ['Canal', 'Usage', 'Risque', 'Mesure'],
            rows: [
              ['**Clé sans contact**', 'Ouverture et démarrage', 'Attaque par relais : le signal de la clé est prolongé', 'Mouvement de la clé, mesure de distance, mise en veille'],
              ['**Prise de diagnostic (OBD-II)**', 'Maintenance en atelier', 'Un outil branché peut envoyer des commandes', 'Authentification de l’outil, filtrage par la passerelle, journalisation'],
              ['**Télématique cellulaire**', 'Services, mises à jour, localisation', 'Accès distant au véhicule', 'Authentification mutuelle, chiffrement, séparation des domaines'],
              ['**V2X**', 'Échanges avec l’infrastructure et d’autres véhicules', 'Messages falsifiés', 'Certificats et signature des messages'],
              ['**Recharge** (véhicule électrique)', 'Communication avec la borne', 'Borne ou câble malveillant', 'Authentification de la borne et du véhicule'],
            ],
          },
          { t: 'def', term: 'Attaque par relais', text: 'Technique par laquelle un attaquant prolonge le signal d’une clé sans contact (pour que le véhicule la croie proche) afin de déverrouiller ou démarrer sans la clé. Les parades limitent la portée ou détectent la distance réelle.' },
          { t: 'def', term: 'V2X', text: 'Ensemble des communications entre le véhicule et son environnement (autres véhicules, infrastructure, réseau). Les messages doivent être signés et vérifiés pour qu’une information falsifiée ne provoque pas de réaction dangereuse.' },
          { t: 'callout', kind: 'tip', text: 'Aucun canal externe ne doit communiquer directement avec les domaines critiques : tout passe par la passerelle, qui n’autorise que les messages prévus.' },
        ],
      },
      {
        id: 'cycle-vie',
        title: 'Cycle de vie : veille, supervision et données',
        blocks: [
          { t: 'p', text: 'Un véhicule circule quinze ans ou plus. La cybersécurité se joue donc **après la vente** : veille sur les vulnérabilités, supervision des événements, correctifs et gestion des données collectées.' },
          {
            t: 'table',
            head: ['Activité', 'Contenu', 'Exigence associée'],
            rows: [
              ['**Veille**', 'Suivre les vulnérabilités des composants et des fournisseurs', 'ISO/SAE 21434 (gestion continue)'],
              ['**Supervision**', 'Un centre de supervision (VSOC) collecte et analyse les événements', 'CSMS (R155)'],
              ['**Réponse à incident**', 'Qualifier, contenir, corriger, informer', 'CSMS (R155)'],
              ['**Correctifs**', 'Mises à jour signées, validées, tracées', 'SUMS (R156)'],
              ['**Données personnelles**', 'Finalité, minimisation, sécurité, conservation limitée', 'RGPD'],
              ['**Fin de vie**', 'Effacement des données, désappairage des comptes', 'Procédure de revente et de recyclage'],
            ],
          },
          { t: 'def', term: 'VSOC', text: 'Vehicle Security Operations Center : centre de supervision de la sécurité d’un parc de véhicules. Il collecte les alertes, analyse les incidents et déclenche la réponse avec les équipes d’ingénierie.' },
          { t: 'list', items: ['**Surveiller** les événements de sécurité du parc, pas seulement d’un véhicule.', '**Réagir** vite : qualifier, contenir (par exemple désactiver une fonction à distance), corriger.', '**Informer** les autorités, les clients et les fournisseurs selon les obligations.', '**Protéger les données** : géolocalisation et habitudes de conduite sont des données personnelles.'] },
          { t: 'callout', kind: 'warn', text: 'Une réponse qui dégrade la sûreté est inacceptable : une mesure de sécurité (désactiver une fonction) ne doit jamais mettre en danger les occupants.' },
        ],
      },
    ],
    useCases: [
      'Architecte sécurité chez un équipementier : intégrer la cybersécurité au cycle de développement d’un calculateur selon ISO/SAE 21434.',
      'Sécurisation d’un réseau d’usine utilisant Profinet : segmentation OT, surveillance passive, contrôle des raccordements.',
      'Mise en conformité d’un constructeur : CSMS (R155) et SUMS (R156) pour l’homologation.',
    ],
    commonMistakes: [
      'Traiter Profinet comme un protocole sûr parce qu’il est sur Ethernet « interne ».',
      'Laisser l’infodivertissement ou les interfaces sans fil communiquer librement avec les domaines critiques.',
      'Ajouter des contrôles de sécurité qui violent les contraintes de temps réel ou la sûreté de fonctionnement.',
      'Confondre R155 (management de la cybersécurité) et R156 (mises à jour logicielles).',
      'Croire qu’ISO/SAE 21434 fournit une liste de mesures toute faite, alors qu’elle décrit des processus.',
    ],
    bestPractices: [
      'Profinet : segmentation OT, surveillance passive, contrôle strict des équipements raccordés.',
      'Automobile : cloisonnement par domaines, passerelle sécurisée, démarrage et code signés, détection embarquée.',
      'Sécurité intégrée dès la conception et sur tout le cycle de vie (ISO/SAE 21434), fournisseurs inclus.',
      'Mises à jour à distance signées et authentifiées, gérées par un SUMS.',
      'Démonstration de conformité : CSMS (R155) et SUMS (R156) pour l’homologation.',
    ],
    keyPoints: [
      'Profinet est un Ethernet industriel temps réel : sa sécurité repose sur l’architecture, pas sur le protocole.',
      'Un véhicule = des dizaines de calculateurs sur des bus (CAN) non authentifiés, reliés par des passerelles.',
      'Défense : cloisonner les domaines, filtrer à la passerelle, signer le code, détecter les messages anormaux.',
      'ISO/SAE 21434 décrit l’ingénierie de cybersécurité sur tout le cycle de vie (le « comment »).',
      'R155 exige un CSMS (cybersécurité), R156 un SUMS (mises à jour logicielles) pour l’homologation.',
    ],
  },
  practice: [
    {
      id: 'surface-vehicule',
      kind: 'analysis',
      title: 'Cartographier la surface d’attaque d’un véhicule',
      context: [
        { t: 'p', text: 'Un véhicule connecté dispose : d’un système d’infodivertissement avec Bluetooth, Wi-Fi et une application mobile ; d’une connexion cellulaire pour la télématique et les mises à jour à distance ; d’une prise OBD-II ; de calculateurs de freinage et de direction reliés aux autres par une passerelle.' },
      ],
      steps: ['Classer les points d’entrée du plus exposé au plus critique.', 'Indiquer le principe de défense qui protège les fonctions critiques des points d’entrée exposés.', 'Citer deux mesures embarquées complémentaires.'],
    },
    {
      id: 'conformite-auto',
      kind: 'case',
      title: 'Cas pratique : feuille de route de conformité',
      context: [{ t: 'p', text: 'Un constructeur veut homologuer un nouveau modèle connecté et recevant des mises à jour à distance. On vous demande de structurer la démarche de cybersécurité et de conformité.' }],
      steps: ['Indiquer ce que couvre ISO/SAE 21434 dans cette démarche.', 'Expliquer ce que doivent démontrer le CSMS (R155) et le SUMS (R156).', 'Proposer deux activités continues à mettre en place après la mise sur le marché.'],
    },
    {
      id: 'incident-vehicule',
      kind: 'case',
      title: 'Cas pratique : une faille signalée sur le système d’infodivertissement',
      context: [{ t: 'p', text: 'Un chercheur signale à un constructeur qu’une faille du Bluetooth de l’infodivertissement permet d’exécuter du code à distance sur 200 000 véhicules en circulation. L’architecture ne cloisonne pas totalement ce domaine : certains messages de commande peuvent encore atteindre la passerelle. Le constructeur dispose d’un VSOC et d’un système de mise à jour à distance, mais le modèle n’a jamais fait l’objet d’une mise à jour de sécurité.' }],
      steps: ['Décrire la réponse dans les premiers jours (qualification, atténuation, communication).', 'Proposer le correctif, son déploiement et les contrôles de sûreté associés.', 'Définir les actions structurelles pour limiter la récurrence (architecture, processus, conformité).'],
    },
  ],
  questions,
  resources: [
    { title: 'ISO/SAE 21434:2021 — Road vehicles — Cybersecurity engineering', source: 'ISO', url: 'https://www.iso.org/standard/70918.html' },
    { title: 'UN Regulation No. 155 (cybersecurity and CSMS)', source: 'UNECE', url: 'https://unece.org/transport/documents/2021/03/standards/un-regulation-no-155-cyber-security-and-cyber-security' },
    { title: 'UN Regulation No. 156 (software update and SUMS)', source: 'UNECE', url: 'https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update' },
    { title: 'Profinet Security Guideline', source: 'PROFIBUS & PROFINET International', url: 'https://www.profibus.com/technology/profinet' },
    { title: 'NIST SP 800-82 — Guide to Operational Technology (OT) Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final' },
  ],
};
