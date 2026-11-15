import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'n-ics-modbus',
  lesson: {
    intro:
      "Les systèmes industriels pilotent des réseaux d'eau, d'électricité, des usines et des transports. Une attaque n'y vole pas seulement des données : elle peut arrêter une production, endommager des équipements ou mettre des personnes en danger. Ces systèmes ont été conçus pour la fiabilité et la longévité, souvent bien avant que la cybersécurité ne soit une préoccupation. Les sécuriser exige de comprendre leurs contraintes.",
    sections: [
      {
        id: 'composants',
        title: 'Composants et architecture',
        blocks: [
          { t: 'def', term: 'Automate (PLC)', text: "Programmable Logic Controller : calculateur industriel qui lit des capteurs et commande des actionneurs (vannes, moteurs) selon un programme, en temps réel." },
          { t: 'def', term: 'SCADA', text: "Supervisory Control And Data Acquisition : système de supervision qui collecte les données des automates, les affiche aux opérateurs (IHM) et permet d'envoyer des consignes." },
          { t: 'diagram', id: 'purdue-model', caption: 'Modèle de Purdue simplifié', alt: 'Niveaux 0 à 5, du procédé physique jusqu’au système d’information de gestion, avec une DMZ industrielle entre IT et OT.' },
          {
            t: 'table',
            caption: 'Priorités IT et OT',
            head: ['', 'IT (informatique de gestion)', 'OT (informatique industrielle)'],
            rows: [
              ['Priorité', 'Confidentialité, intégrité, disponibilité', '**Sûreté des personnes**, disponibilité, intégrité'],
              ['Durée de vie', '3 à 5 ans', '15 à 30 ans'],
              ['Correctifs', 'Mensuels', 'Rares : arrêt de production, requalification'],
              ['Redémarrage', 'Acceptable', 'Parfois impossible sans arrêt du procédé'],
              ['Analyse active (scan)', 'Courante', '**Risquée** : un scan peut faire planter un automate ancien'],
            ],
          },
        ],
      },
      {
        id: 'modbus',
        title: 'Modbus : un protocole sans sécurité',
        blocks: [
          { t: 'p', text: "Modbus (1979) reste omniprésent. Sa version **Modbus TCP** (port **502**) n'a **ni authentification, ni chiffrement, ni contrôle d'intégrité**. Tout équipement capable de joindre le port 502 d'un automate peut lire et **écrire** ses registres." },
          {
            t: 'table',
            head: ['Code fonction', 'Signification', 'Type'],
            rows: [['0x01', 'Lire des bobines (coils)', 'Lecture'], ['0x03', 'Lire des registres de maintien', 'Lecture'], ['0x05', 'Écrire une bobine', '**Écriture**'], ['0x06', 'Écrire un registre', '**Écriture**'], ['0x0F', 'Écrire plusieurs bobines', '**Écriture**'], ['0x10', 'Écrire plusieurs registres', '**Écriture**']],
          },
          {
            t: 'example',
            title: 'Décoder une trame Modbus TCP',
            blocks: [
              { t: 'code', lang: 'text', code: '00 2A  00 00  00 06  01  06  00 10  00 64\n└──┬┘  └──┬┘  └──┬┘  └┬┘ └┬┘ └──┬┘  └──┬┘\n   │      │      │    │   │     │      └ valeur : 0x0064 = 100\n   │      │      │    │   │     └ adresse du registre : 0x0010 = 16\n   │      │      │    │   └ code fonction 0x06 : écrire un registre\n   │      │      │    └ identifiant d\'unité (esclave) : 1\n   │      │      └ longueur des octets suivants : 6\n   │      └ identifiant de protocole : 0 (Modbus)\n   └ identifiant de transaction : 42' },
              { t: 'p', text: "Cette trame écrit la valeur 100 dans le registre 16 de l'unité 1, par exemple une consigne de température ou de vitesse. Si elle provient d'un poste qui n'est pas la station SCADA, c'est un événement critique." },
            ],
          },
          { t: 'p', text: "Des protocoles plus récents intègrent la sécurité : **OPC UA** (authentification, signature et chiffrement), **Modbus/TCP Security** (sur TLS, port 802), DNP3 Secure Authentication. Leur adoption reste progressive en raison de la durée de vie des équipements." },
          { t: 'callout', kind: 'warn', text: "Les attaques Stuxnet (2010), Industroyer (2016, réseau électrique ukrainien) et Triton (2017, systèmes de sûreté) ont démontré que des attaquants savent manipuler directement les protocoles industriels." },
        ],
      },
      {
        id: 'defense',
        title: 'Défendre un système industriel',
        blocks: [
          { t: 'def', term: 'Zones et conduits (IEC 62443)', text: "La norme IEC 62443 découpe le système en **zones** de même niveau de sécurité et définit des **conduits** contrôlés entre elles. Chaque zone reçoit un niveau de sécurité cible (SL 1 à 4)." },
          { t: 'list', items: ['**Segmentation** IT/OT stricte avec une **DMZ industrielle** : aucun flux direct entre la bureautique et les automates.', 'Accès distants des mainteneurs via un **bastion** dédié, avec MFA, enregistrement de session et ouverture à la demande.', 'Pare-feu industriels capables d’**inspecter Modbus** (n’autoriser que la lecture depuis certaines sources, l’écriture uniquement depuis la station SCADA).', '**Supervision passive** (sonde sur un port miroir) : détecte les nouvelles machines, les écritures inattendues, les changements de programme, sans perturber le procédé.', 'Inventaire précis des équipements, sauvegardes des programmes d’automates, procédure de fonctionnement en mode dégradé.'] },
          { t: 'callout', kind: 'legal', text: "En France, la cybersécurité des systèmes industriels des opérateurs d'importance vitale est encadrée par la loi de programmation militaire ; l'ANSSI publie une méthode de classification des systèmes industriels et des mesures détaillées. La directive NIS2 étend les obligations à de nombreux secteurs industriels." },
        ],
      },
    ],
    useCases: [
      'Analyste OT : qualifier une alerte de la sonde passive signalant une écriture Modbus depuis un poste inconnu.',
      'Architecte : concevoir la DMZ industrielle entre le réseau de gestion et la supervision d’une station d’épuration.',
      'Auditeur : évaluer un site selon la classification ANSSI ou la norme IEC 62443.',
    ],
    commonMistakes: [
      'Lancer un scan réseau actif sur un réseau d’automates en production.',
      'Relier directement le réseau bureautique au réseau de supervision « pour simplifier la maintenance ».',
      'Laisser un accès distant permanent (logiciel de prise en main) pour le fournisseur.',
      'Appliquer telles quelles les pratiques IT (redémarrage, correctifs immédiats) sans tenir compte du procédé.',
    ],
    bestPractices: [
      'Segmentation en zones et conduits, DMZ industrielle entre IT et OT.',
      'Accès distants via bastion, MFA, ouverture à la demande et enregistrement.',
      'Supervision passive et alertes sur les écritures et téléchargements de programmes.',
      'Inventaire, sauvegardes des configurations et exercices de reprise.',
      'Coopération étroite entre équipes sécurité, automatismes et sûreté de fonctionnement.',
    ],
    keyPoints: [
      'OT : la sûreté des personnes et la disponibilité priment.',
      'Modbus TCP (502) : aucune authentification ; codes 0x05, 0x06, 0x0F, 0x10 = écritures.',
      'Modèle de Purdue et IEC 62443 : zones, conduits, DMZ industrielle.',
      'Supervision passive plutôt que scans actifs en production.',
    ],
  },
  practice: [
    {
      id: 'labo-modbus',
      kind: 'simulation',
      title: 'Laboratoire : décodage de trames Modbus capturées',
      context: [{ t: 'p', text: 'Une sonde passive a capturé des trames Modbus TCP sur le réseau de supervision d’une station de pompage fictive. Décodez-les et identifiez l’anomalie.' }],
      steps: ['Décoder chaque trame.', 'Identifier les écritures et leur source.', 'Qualifier l’événement.'],
      labId: 'modbus-lab',
    },
    {
      id: 'segmenter',
      kind: 'case',
      title: 'Cas pratique : segmenter un site industriel',
      context: [{ t: 'p', text: 'Usine agroalimentaire : réseau unique 10.0.0.0/16 regroupant bureautique, serveur SCADA, IHM, 12 automates et un poste de maintenance du fournisseur équipé d’un logiciel de prise en main à distance.' }],
      steps: ['Définir les zones.', 'Définir les conduits et les flux autorisés.', 'Proposer une solution pour la maintenance à distance.'],
    },
  ],
  questions: [
    { id: 'ics-q1', type: 'single', difficulty: 1, skills: ['n-ics-arch'], prompt: 'Quel équipement lit des capteurs et commande des actionneurs en temps réel ?', options: [{ id: 'a', text: 'Un automate (PLC)' }, { id: 'b', text: 'Un serveur de messagerie' }, { id: 'c', text: 'Un proxy web' }, { id: 'd', text: 'Un contrôleur de domaine' }] },
    { id: 'ics-q2', type: 'truefalse', difficulty: 1, skills: ['n-ics-arch'], prompt: 'Dans un système industriel, la sûreté des personnes et la disponibilité sont généralement prioritaires sur la confidentialité.' },
    { id: 'ics-q3', type: 'multi', difficulty: 2, skills: ['n-ics-arch'], prompt: 'Quelles contraintes sont typiques de l’OT ?', options: [{ id: 'a', text: 'Équipements en service pendant 15 à 30 ans' }, { id: 'b', text: 'Correctifs difficiles à appliquer sans arrêt de production' }, { id: 'c', text: 'Remplacement des automates tous les ans' }, { id: 'd', text: 'Sensibilité de certains équipements aux scans réseau' }] },
    { id: 'ics-q4', type: 'short', difficulty: 1, skills: ['n-modbus'], prompt: 'Sur quel port TCP écoute Modbus TCP par défaut ? (nombre)' },
    { id: 'ics-q5', type: 'single', difficulty: 2, skills: ['n-modbus'], prompt: 'Quel code fonction Modbus correspond à l’écriture d’un registre unique ?', options: [{ id: 'a', text: '0x03' }, { id: 'b', text: '0x06' }, { id: 'c', text: '0x01' }, { id: 'd', text: '0x04' }] },
    { id: 'ics-q6', type: 'truefalse', difficulty: 1, skills: ['n-modbus'], prompt: 'Modbus TCP intègre nativement l’authentification de l’émetteur des commandes.' },
    { id: 'ics-q7', type: 'single', difficulty: 3, skills: ['n-modbus'], prompt: 'Que fait la trame `00 07 00 00 00 06 02 05 00 03 FF 00` ?', options: [{ id: 'a', text: 'Elle lit trois registres de l’unité 2' }, { id: 'b', text: 'Elle met à 1 (ON) la bobine 3 de l’unité 2' }, { id: 'c', text: 'Elle redémarre l’automate' }, { id: 'd', text: 'Elle écrit la valeur 3 dans le registre 255' }] },
    { id: 'ics-q8', type: 'multi', difficulty: 2, skills: ['n-modbus'], prompt: 'Quels protocoles ou versions intègrent des mécanismes de sécurité (authentification, chiffrement) ?', options: [{ id: 'a', text: 'OPC UA' }, { id: 'b', text: 'Modbus/TCP Security (sur TLS)' }, { id: 'c', text: 'Modbus RTU sur liaison série' }, { id: 'd', text: 'DNP3 Secure Authentication' }] },
    { id: 'ics-q9', type: 'short', difficulty: 2, skills: ['n-segment'], prompt: 'Quelle série de normes internationales définit les zones, les conduits et les niveaux de sécurité pour les systèmes industriels ? (ex. ISO 12345)' },
    { id: 'ics-q10', type: 'single', difficulty: 2, skills: ['n-segment'], prompt: 'Où placer le serveur historique répliqué consulté par les équipes de gestion ?', options: [{ id: 'a', text: 'Dans le réseau des automates' }, { id: 'b', text: 'Dans une DMZ industrielle entre IT et OT' }, { id: 'c', text: 'Directement sur Internet' }, { id: 'd', text: 'Sur le poste de l’opérateur' }] },
    { id: 'ics-q11', type: 'truefalse', difficulty: 2, skills: ['n-segment', 'n-ics-arch'], prompt: 'Un scan Nmap complet du réseau d’automates en production est la méthode recommandée pour réaliser l’inventaire OT.' },
    { id: 'ics-q12', type: 'multi', difficulty: 2, skills: ['n-segment'], prompt: 'Quelles mesures sécurisent la maintenance à distance par un fournisseur ?', options: [{ id: 'a', text: 'Bastion dédié avec MFA et enregistrement des sessions' }, { id: 'b', text: 'Ouverture de l’accès à la demande, pour une durée limitée' }, { id: 'c', text: 'Logiciel de prise en main installé en permanence sur l’IHM' }, { id: 'd', text: 'Accès limité aux seuls équipements du fournisseur' }] },
    { id: 'ics-q13', type: 'open', difficulty: 3, skills: ['n-segment', 'n-modbus'], prompt: 'Votre sonde passive signale une écriture Modbus (code 0x10) vers un automate de dosage chimique, depuis un poste de la bureautique. Décrivez votre réaction, en tenant compte des contraintes OT.' },
    { id: 'ics-q14', type: 'single', difficulty: 2, skills: ['n-ics-arch'], prompt: 'Quelle attaque de 2017 a visé des systèmes instrumentés de sécurité (SIS) d’un site pétrochimique ?', options: [{ id: 'a', text: 'Triton (Trisis)' }, { id: 'b', text: 'WannaCry' }, { id: 'c', text: 'Heartbleed' }, { id: 'd', text: 'Log4Shell' }] },
    { id: 'ics-q15', type: 'open', difficulty: 3, skills: ['n-segment', 'n-ics-arch'], prompt: 'Expliquez à un DSI habitué à l’IT pourquoi on ne peut pas appliquer les correctifs Windows des IHM industrielles chaque mois comme sur les postes bureautiques, et quelles mesures compensatoires vous proposez.' },
    { id: 'ics-q16', type: 'short', difficulty: 2, skills: ['n-modbus', 'n-segment'], prompt: 'Comment appelle-t-on une supervision de sécurité qui écoute le trafic sur un port miroir sans émettre de paquets ? (un adjectif)' },
  ],
  resources: [
    { title: 'Cybersécurité des systèmes industriels : méthode de classification et mesures', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/la-cybersecurite-des-systemes-industriels' },
    { title: 'NIST SP 800-82 Rev. 3 — Guide to OT Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final' },
    { title: 'MITRE ATT&CK for ICS', source: 'MITRE', url: 'https://attack.mitre.org/matrices/ics/' },
    { title: 'Modbus Application Protocol Specification', source: 'Modbus Organization', url: 'https://modbus.org/specs.php' },
  ],
};
