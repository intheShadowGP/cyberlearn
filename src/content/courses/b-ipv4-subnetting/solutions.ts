import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-ipv4-subnetting',
  practice: {
    'calc-27': {
      blocks: [
        { t: 'list', items: ['/27 → masque `255.255.255.224`.', 'Taille de bloc : 256 − 224 = 32 (réseaux en .0, .32, .64, .96, .128, .160…).', '140 est entre 128 et 159 → réseau `192.168.50.128`, diffusion `192.168.50.159`.', 'Hôtes de `.129` à `.158`, soit 30 hôtes.'] },
        { t: 'callout', kind: 'tip', text: 'Pour l’analyste : les 29 autres hôtes potentiellement exposés au même segment sont dans `.129–.158`. C’est le premier périmètre à examiner pour un mouvement latéral.' },
      ],
    },
    'vlsm-pme': {
      blocks: [
        {
          t: 'table',
          head: ['Besoin', 'Préfixe', 'Sous-réseau', 'Plage'],
          rows: [
            ['200 postes', '/24 (254)', '10.50.0.0/24', '10.50.0.1 – 10.50.0.254'],
            ['100 Wi-Fi invités', '/25 (126)', '10.50.1.0/25', '10.50.1.1 – 10.50.1.126'],
            ['50 serveurs', '/26 (62)', '10.50.1.128/26', '10.50.1.129 – 10.50.1.190'],
            ['20 administration', '/27 (30)', '10.50.1.192/27', '10.50.1.193 – 10.50.1.222'],
            ['Liaison 1', '/30', '10.50.1.224/30', '.225 – .226'],
            ['Liaison 2', '/30', '10.50.1.228/30', '.229 – .230'],
          ],
        },
        { t: 'p', text: 'Espace restant : `10.50.1.232` à `10.50.1.255` (trois /29). Le bloc des postes est déjà à 79 % : documentez ce point pour la croissance.' },
        { t: 'p', text: 'Règle de principe : *refuser* tout trafic de `10.50.1.0/25` (invités) vers `10.50.1.128/26` (serveurs) et vers `10.50.1.192/27` (administration) ; n’autoriser pour les invités que la sortie Internet (HTTP/HTTPS, DNS vers le résolveur interne).' },
      ],
    },
    'lab-subnet': {
      blocks: [{ t: 'p', text: 'La correction détaillée de chaque défi est affichée à la fin du laboratoire « Atelier sous-réseaux ».' }, { t: 'p', text: 'Comparez votre démarche à la méthode en quatre étapes vue dans la leçon.' }],
    },
  },
};
