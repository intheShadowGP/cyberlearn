import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'subnet-lab',
  questions: {
    'sublab-q1': { type: 'short', accepted: ['10.20.1.0'], explanation: '/25 découpe le 4ᵉ octet en blocs de 128 : 0–127 et 128–255. 77 est dans le premier bloc : le réseau est 10.20.1.0/25. Le prestataire a noté une adresse d’hôte à la place de l’adresse réseau, ce qui est une source d’erreurs dans les règles de filtrage.' },
    'sublab-q2': { type: 'single', correct: 'b', explanation: 'Le Wi-Fi public est déclaré en 10.20.8.0/22 (10.20.8.0 à 10.20.11.255) et les agents de la médiathèque en 10.20.10.0/24, qui est inclus dans ce /22. Les deux zones, de niveaux de confiance très différents, se chevauchent : le routage et le filtrage deviennent imprévisibles.', whyWrong: { a: '10.20.1.0/25 (0–127) et 10.20.1.128/26 (128–191) sont contigus mais disjoints.', c: '10.20.1.128/26 et 10.20.2.0/27 sont disjoints.' } },
    'sublab-q3': { type: 'short', accepted: ['/26', '26'], explanation: 'Un /27 n’offre que 30 hôtes. Un /26 offre 62 hôtes, ce qui couvre 40 caméras avec une marge de croissance.' },
    'sublab-q4': { type: 'truefalse', correct: false, explanation: 'Le /16 couvre les 65 534 adresses du plan, y compris le Wi-Fi public et la vidéoprotection. L’interface d’administration d’un hyperviseur ne doit être joignable que depuis le sous-réseau d’administration, idéalement via un bastion.' },
    'sublab-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Il faut supprimer le chevauchement, restreindre la règle hyperviseur à la zone d’administration et dimensionner correctement la vidéoprotection. Fusionner les sous-réseaux irait à l’encontre de la segmentation.', whyWrong: { d: 'Un /22 unique supprimerait les frontières entre postes, serveurs et administration : c’est l’inverse de l’objectif de segmentation.' } },
  },
  debrief: [
    { t: 'h', text: 'Synthèse des erreurs du plan' },
    { t: 'list', items: [
      '**Adresse d’hôte au lieu d’adresse réseau** (10.20.1.77/25) : à normaliser en 10.20.1.0/25.',
      '**Chevauchement** Wi-Fi public / agents : le Wi-Fi public doit être déplacé (par exemple 10.20.12.0/22).',
      '**Sous-dimensionnement** de la vidéoprotection : /27 → /26.',
      '**Règle trop large** vers l’hyperviseur : source /16 → sous-réseau d’administration uniquement.',
    ] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Tenir le plan dans un IPAM, faire valider automatiquement l’absence de chevauchement, et exiger une revue à deux personnes de toute règle de pare-feu dont la source dépasse un /24.' },
  ],
};
