import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'protocoles',
        title: 'Autres protocoles industriels et filtrage',
        blocks: [
          { t: 'p', text: 'Modbus n’est qu’un protocole parmi d’autres. Chaque secteur a les siens, nés à une époque où les réseaux industriels étaient isolés. Beaucoup n’intègrent ni authentification ni chiffrement : la protection repose sur le **cloisonnement** et le **filtrage**.' },
          {
            t: 'table',
            head: ['Protocole', 'Usage typique', 'Sécurité native'],
            rows: [
              ['**Modbus TCP / RTU**', 'Petits automates, instrumentation', 'Aucune (version TLS en option)'],
              ['**DNP3**', 'Énergie, eau, postes électriques', 'Authentification sécurisée (SA) optionnelle'],
              ['**Profinet**', 'Automatisme d’usine, Siemens', 'Dépend du profil, souvent faible'],
              ['**EtherNet/IP**', 'Automatisme d’usine, Rockwell', 'Extension CIP Security optionnelle'],
              ['**OPC UA**', 'Interopérabilité, remontée de données', 'Authentification, signature, chiffrement'],
            ],
          },
          { t: 'def', term: 'Inspection approfondie (DPI)', text: 'Analyse du contenu applicatif d’un protocole (code fonction, plage d’adresses, valeur) par un pare-feu industriel. Elle permet de n’autoriser que les lectures, ou les écritures depuis la seule station de supervision.' },
          { t: 'list', items: ['**Filtrer par source** : seule la supervision envoie des commandes.', '**Filtrer par code fonction** : bloquer écritures et téléchargements de programme depuis les autres sources.', '**Limiter les plages** : n’autoriser que les registres utiles.', '**Limite** : le filtrage ne juge pas la cohérence de la valeur écrite ; la supervision doit la contrôler.'] },
          { t: 'callout', kind: 'tip', text: 'Un bus série isolé réduit l’exposition réseau mais n’apporte aucune authentification : un accès local au bus suffit pour émettre des commandes.' },
        ],
      },
      {
        id: 'detection',
        title: 'Détection et réponse en environnement industriel',
        blocks: [
          { t: 'p', text: 'La détection en OT s’appuie sur l’**écoute passive** du trafic. La réponse se **coordonne avec l’exploitation** : une action de sécurité brutale peut elle-même créer un danger.' },
          {
            t: 'table',
            head: ['Signal', 'Pourquoi c’est suspect', 'Première action'],
            rows: [
              ['Écriture Modbus depuis un poste qui n’est pas le SCADA', 'Commande non légitime', 'Alerter l’exploitation, vérifier la valeur écrite'],
              ['Téléchargement de programme sur un automate', 'Modification de la logique de contrôle', 'Comparer à la dernière sauvegarde de référence'],
              ['Nouvel équipement sur le réseau de contrôle', 'Machine inconnue ou poste de maintenance non déclaré', 'Identifier et valider ou isoler'],
              ['Scan ou balayage depuis un poste de gestion', 'Reconnaissance', 'Bloquer le flux au pare-feu'],
              ['Accès distant hors plage prévue', 'Compromission d’un compte fournisseur', 'Fermer l’accès, vérifier la session enregistrée'],
            ],
          },
          { t: 'list', ordered: true, items: ['**Prévenir** l’exploitation et la sûreté de fonctionnement : état réel du procédé.', '**Qualifier** : source, destination, code fonction, valeur, équipement.', '**Contenir** sans perdre la supervision : filtrer le flux, isoler le poste source.', '**Préserver** : captures, journaux, copie du programme de l’automate.', '**Rétablir** : programme de référence, fonctionnement en mode dégradé si nécessaire.', '**Corriger** la cause : segmentation, accès distants.'] },
          { t: 'def', term: 'Mode dégradé', text: 'Fonctionnement volontairement réduit d’un procédé (pilotage manuel, supervision locale) maintenu pendant un incident, pour garantir la sûreté et l’essentiel de la production.' },
          { t: 'callout', kind: 'warn', text: 'Couper le réseau de supervision « pour être sûr » peut aveugler les opérateurs et provoquer un incident. La réponse se décide avec l’exploitation.' },
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
    {
      id: 'incident-ot',
      kind: 'analysis',
      title: 'Analyse : alertes de la sonde passive d’une station de pompage',
      context: [
        { t: 'code', lang: 'text', code: 'Heure  Source          Destination     Protocole   Événement\n02:14  10.2.1.15       10.3.0.21       Modbus      lecture registres 0-20 (SCADA)\n02:15  10.2.1.15       10.3.0.21       Modbus      lecture registres 0-20 (SCADA)\n02:41  172.16.8.44     10.3.0.21       Modbus      écriture registre 16 = 0 (fonction 0x06)\n02:42  172.16.8.44     10.3.0.22       Modbus      écriture registre 16 = 0 (fonction 0x06)\n02:44  172.16.8.44     10.3.0.21       S7          téléchargement de programme\n02:50  (nouveau)       10.3.0.0/24     ARP         balayage d’adresses\n\nLa station SCADA est 10.2.1.15. Le réseau 172.16.8.0/24 est celui de la bureautique. La pompe 10.3.0.21 est alimentée en continu.' },
      ],
      steps: ['Décrire l’enchaînement et ce qu’il révèle.', 'Indiquer, dans l’ordre, la réponse en tenant compte des contraintes OT.', 'Proposer les mesures de prévention et de détection à ajouter.'],
    },
  ],
  questions,
  resources: [
    { title: 'Cybersécurité des systèmes industriels : méthode de classification et mesures', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/la-cybersecurite-des-systemes-industriels' },
    { title: 'NIST SP 800-82 Rev. 3 — Guide to OT Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final' },
    { title: 'MITRE ATT&CK for ICS', source: 'MITRE', url: 'https://attack.mitre.org/matrices/ics/' },
    { title: 'Modbus Application Protocol Specification', source: 'Modbus Organization', url: 'https://modbus.org/specs.php' },
  ],
};
