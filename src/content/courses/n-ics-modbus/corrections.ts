import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'n-ics-modbus',
  questions: {
    'ics-q1': { type: 'single', correct: 'a', explanation: 'L’automate programmable exécute en boucle son programme : lecture des entrées (capteurs), calcul, écriture des sorties (actionneurs).' },
    'ics-q2': { type: 'truefalse', correct: true, explanation: 'Un arrêt intempestif ou une commande erronée peut provoquer un accident ou une pollution. La sûreté des personnes et la continuité du procédé dominent les arbitrages OT.' },
    'ics-q3': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Longévité, difficulté de mise à jour et fragilité de certaines piles réseau anciennes sont des caractéristiques majeures de l’OT.', whyWrong: { c: 'C’est l’inverse : les automates restent souvent en service plusieurs décennies.' } },
    'ics-q4': { type: 'short', accepted: ['502', 'tcp/502', '502/tcp'], explanation: 'Modbus TCP utilise le port 502. La version sécurisée sur TLS utilise le port 802.' },
    'ics-q5': { type: 'single', correct: 'b', explanation: '0x06 (Write Single Register) écrit un registre de maintien. 0x03 lit des registres, 0x01 lit des bobines, 0x04 lit des registres d’entrée.' },
    'ics-q6': { type: 'truefalse', correct: false, explanation: 'Modbus TCP ne comporte aucune authentification : tout équipement capable d’atteindre le port 502 peut envoyer des commandes. La protection repose sur la segmentation et le filtrage.' },
    'ics-q7': { type: 'single', correct: 'b', explanation: 'Unité 02, fonction 05 (écrire une bobine), adresse 0x0003, valeur 0xFF00 qui signifie ON (0x0000 signifie OFF). Une telle commande peut démarrer une pompe ou ouvrir une vanne.' },
    'ics-q8': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'OPC UA intègre l’authentification et le chiffrement ; Modbus/TCP Security encapsule Modbus dans TLS avec certificats ; DNP3-SA authentifie les commandes critiques.', whyWrong: { c: 'Modbus RTU sur liaison série n’a pas davantage de sécurité que Modbus TCP.' } },
    'ics-q9': { type: 'short', accepted: ['iec 62443', 'cei 62443', '62443', 'isa/iec 62443', 'isa 62443'], explanation: 'La série ISA/IEC 62443 couvre les exigences pour les exploitants, les intégrateurs et les fabricants, avec les notions de zones, conduits et niveaux de sécurité (SL).' },
    'ics-q10': { type: 'single', correct: 'b', explanation: 'La DMZ industrielle sert d’intermédiaire : l’historique est répliqué depuis l’OT vers la DMZ, où l’IT le consulte, sans flux direct entre IT et automates.' },
    'ics-q11': { type: 'truefalse', correct: false, explanation: 'Certains automates anciens plantent sous l’effet de paquets inattendus. L’inventaire se fait de préférence par écoute passive, documentation et relevés sur site ; les requêtes actives sont limitées, ciblées et planifiées.' },
    'ics-q12': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Bastion avec MFA et enregistrement, accès à la demande et périmètre restreint permettent de contrôler et tracer chaque intervention.', whyWrong: { c: 'Un logiciel de prise en main permanent est une porte d’entrée majeure ; c’est un vecteur fréquent d’incidents industriels.' } },
    'ics-q13': {
      type: 'open',
      model: '1) Alerter immédiatement les responsables d’exploitation et de sûreté du procédé, qui vérifient l’état physique (concentrations, consignes) et peuvent basculer en mode manuel ou sûr. 2) Identifier la valeur écrite et le registre concerné, comparer aux consignes attendues. 3) Bloquer le flux entre le poste bureautique et le réseau OT au pare-feu (le flux ne devrait de toute façon pas exister), sans couper la supervision légitime. 4) Isoler le poste source et ouvrir une investigation (compromission ? usage d’un outil par un technicien ?). 5) Vérifier l’intégrité du programme de l’automate et rechercher d’autres écritures. 6) Corriger la segmentation qui a permis ce flux.',
      criteria: ['La sûreté du procédé est traitée en premier avec les équipes d’exploitation.', 'La commande écrite est analysée (registre, valeur).', 'Le flux est bloqué et la source isolée.', 'Le défaut de segmentation est identifié comme cause à corriger.'],
      explanation: 'En OT, la réponse à incident se coordonne avec l’exploitation : une action de sécurité brutale (couper le réseau de supervision) peut elle-même créer un danger.',
    },
    'ics-q14': { type: 'single', correct: 'a', explanation: 'Triton (ou Trisis) visait des contrôleurs de sûreté Schneider Electric Triconex, conçus pour mettre le procédé en sécurité en cas d’anomalie. Son but probable était de neutraliser cette protection.' },
    'ics-q15': {
      type: 'open',
      model: 'Les IHM et serveurs SCADA sont souvent certifiés par l’éditeur avec une version précise du système : un correctif non validé peut casser le logiciel de supervision ; leur redémarrage peut nécessiter un arrêt du procédé, planifié lors des arrêts techniques ; certaines versions ne sont plus supportées. Mesures compensatoires : segmentation stricte et absence d’accès Internet, liste blanche d’applications, désactivation des ports USB et services inutiles, comptes nominatifs sans droits d’administration, supervision passive, application des correctifs validés par l’éditeur lors des arrêts programmés, sauvegardes et procédure de restauration testées.',
      criteria: ['La validation par l’éditeur et le risque de dysfonctionnement sont expliqués.', 'La contrainte d’arrêt de production est mentionnée.', 'Au moins trois mesures compensatoires pertinentes sont proposées.'],
      explanation: 'Quand le correctif ne peut pas être appliqué vite, on réduit l’exposition et on améliore la détection : c’est la logique des mesures compensatoires.',
    },
    'ics-q16': { type: 'short', accepted: ['passive', 'passif'], explanation: 'La supervision passive analyse une copie du trafic (port miroir ou TAP) sans jamais émettre : elle n’a aucun impact sur le procédé.' },
  },
};
