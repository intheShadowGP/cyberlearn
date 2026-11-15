import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'b-ipv4-subnetting',
  questions: {
    'ipv4-q1': {
      type: 'single', correct: 'b',
      explanation: 'Une adresse IPv4 est un entier de 32 bits, soit 4 octets de 8 bits écrits en décimal pointé. 128 bits correspond à IPv6.',
      whyWrong: { d: '128 bits est la taille d’une adresse IPv6.', c: '64 bits est la taille habituelle de l’identifiant d’interface en IPv6, pas d’une adresse IPv4.' },
    },
    'ipv4-q2': {
      type: 'single', correct: 'c',
      explanation: '/20 = 8 + 8 + 4 bits. Le troisième octet contient 4 bits à 1 : 1111 0000 = 240. Le masque est donc 255.255.240.0.',
      whyWrong: { b: '224 correspond à 3 bits à 1 dans le troisième octet, donc à /19.', d: '255.255.255.240 correspond à /28.' },
    },
    'ipv4-q3': {
      type: 'short', accepted: ['30', '30 hotes', '30 hôtes', 'trente'],
      explanation: 'Un /27 laisse 32 − 27 = 5 bits d’hôte : 2⁵ = 32 adresses, moins l’adresse réseau et la diffusion, soit 30 hôtes utilisables.',
    },
    'ipv4-q4': {
      type: 'short', accepted: ['172.16.40.0', '172.16.40.0/21'],
      explanation: '/21 coupe dans le 3ᵉ octet avec un masque 248, donc une taille de bloc de 8. Les réseaux commencent en 0, 8, 16, 24, 32, 40, 48… 45 se situe entre 40 et 47 : le réseau est 172.16.40.0/21 (diffusion 172.16.47.255).',
    },
    'ipv4-q5': {
      type: 'short', accepted: ['192.168.10.127', '192.168.10.127/26'],
      explanation: '/26 → taille de bloc 64 dans le 4ᵉ octet. 77 appartient au bloc 64–127. La diffusion est la dernière adresse du bloc : 192.168.10.127.',
    },
    'ipv4-q6': {
      type: 'multi', correct: ['a', 'b', 'd'],
      explanation: 'La RFC 1918 définit 10.0.0.0/8, 172.16.0.0/12 (172.16 à 172.31) et 192.168.0.0/16. 172.20.1.1 est bien dans 172.16.0.0/12.',
      whyWrong: {
        c: '172.32.0.1 est juste après la fin de 172.16.0.0/12 (172.31.255.255) : c’est une adresse publique.',
        e: '100.64.0.0/10 est réservé au CGNAT par la RFC 6598, ce n’est pas une plage RFC 1918.',
        f: '169.254.0.0/16 est la plage de lien local (RFC 3927), distincte des plages privées.',
      },
    },
    'ipv4-q7': {
      type: 'truefalse', correct: true,
      explanation: 'En l’absence de réponse DHCP, Windows (APIPA) et de nombreux systèmes s’attribuent une adresse de lien local en 169.254.0.0/16. C’est un indicateur classique de panne ou d’attaque DHCP.',
    },
    'ipv4-q8': {
      type: 'truefalse', correct: false,
      explanation: 'La RFC 3021 autorise les /31 sur les liaisons point à point : les deux adresses sont utilisables car aucune diffusion n’est nécessaire entre deux équipements. Cela économise des adresses par rapport à un /30.',
    },
    'ipv4-q9': {
      type: 'single', correct: 'b',
      explanation: 'Il faut 2^(32−n) − 2 ≥ 500. Un /24 offre 254 hôtes (insuffisant), un /23 offre 2⁹ − 2 = 510 hôtes. /22 conviendrait aussi mais gaspille de l’espace : /23 est le préfixe le plus long qui convient.',
      whyWrong: { a: '/22 fonctionne (1022 hôtes) mais n’est pas le plus petit sous-réseau possible.', c: '/24 n’offre que 254 hôtes.' },
    },
    'ipv4-q10': {
      type: 'single', correct: 'b',
      explanation: '/25 découpe le dernier octet en deux blocs de 128 : 0–127 et 128–255. .100 est dans 192.168.1.0/25, .130 dans 192.168.1.128/25. Ce sont deux réseaux distincts : un routeur est nécessaire.',
      whyWrong: { a: 'Le /24 n’est pas pertinent : seul le préfixe configuré (/25) compte.', d: 'La diffusion de 192.168.1.128/25 est .255, pas .130.' },
    },
    'ipv4-q11': {
      type: 'multi', correct: ['a', 'b', 'd'],
      explanation: 'Les sous-réseaux créent des frontières logiques ; ce sont les équipements de filtrage placés entre elles qui appliquent la politique. Un plan documenté permet de repérer toute adresse inattendue.',
      whyWrong: { c: 'Un réseau plat en /16 étend au contraire le domaine de diffusion à 65 534 hôtes et facilite le mouvement latéral.' },
    },
    'ipv4-q12': {
      type: 'open',
      model: 'Tri par taille : 60 postes → /26 (62 hôtes) = 192.168.100.0/26 ; 28 serveurs → /27 (30) = 192.168.100.64/27 ; 12 caméras → /28 (14) = 192.168.100.96/28 ; WAN → /30 = 192.168.100.112/30 (ou /31). Espace libre à partir de .116. Filtrage : les caméras (équipements IoT peu sûrs) ne doivent joindre que l’enregistreur vidéo ; les postes n’accèdent aux serveurs que sur les ports nécessaires ; aucune zone n’accède à l’administration des caméras hormis un poste d’administration dédié.',
      criteria: [
        'Les préfixes choisis sont les plus longs possibles pour chaque besoin.',
        'Les blocs sont alloués du plus grand au plus petit, alignés et sans chevauchement.',
        'Les caméras IoT sont isolées dans leur propre sous-réseau avec un filtrage restrictif.',
        'Le filtrage inter-zones est justifié par le principe du moindre privilège.',
      ],
      explanation: 'Le VLSM permet d’ajuster chaque sous-réseau à son besoin. L’intérêt sécurité est de pouvoir appliquer des règles de filtrage différentes par zone : les équipements IoT, souvent vulnérables, ne doivent jamais partager le segment des postes ou des serveurs.',
    },
    'ipv4-q13': {
      type: 'single', correct: 'a',
      explanation: 'Le masque /22 est 255.255.252.0. Le wildcard est son complément : 255.255.255.255 − 255.255.252.0 = 0.0.3.255.',
      whyWrong: { c: '255.255.252.0 est le masque, pas le wildcard : l’utiliser dans une ACL Cisco inverserait la correspondance.', b: '0.0.1.255 correspond à un /23.', d: '0.0.7.255 correspond à un /21.' },
    },
    'ipv4-q14': {
      type: 'short', accepted: ['4', 'quatre', '4 sous-reseaux', '4 sous-réseaux'],
      explanation: 'Passer de /24 à /26 emprunte 2 bits : 2² = 4 sous-réseaux (.0, .64, .128, .192), chacun de 64 adresses.',
    },
    'ipv4-q15': {
      type: 'single', correct: 'a',
      explanation: '10.10.0.0/22 couvre le 3ᵉ octet de 0 à 3 (taille de bloc 4), soit 10.10.0.0 à 10.10.3.255. Seule 10.10.3.200 est dans cette plage. Ce type de vérification est essentiel lors d’un audit de règles.',
      whyWrong: { b: '10.10.4.1 appartient au bloc suivant, 10.10.4.0/22.', c: '10.11.0.1 a un deuxième octet différent.', d: '10.10.8.10 appartient à 10.10.8.0/22.' },
    },
    'ipv4-q16': {
      type: 'truefalse', correct: true,
      explanation: '0.0.0.0/0 a un préfixe de longueur 0 : aucun bit n’est fixé, toutes les adresses IPv4 correspondent. C’est la route par défaut ou « any » dans une règle. Une règle « autoriser 0.0.0.0/0 » mérite toujours une justification.',
    },
    'ipv4-q17': {
      type: 'open',
      model: '`10.0.0.0/8` couvre 16 777 214 adresses : tout le plan interne, y compris le Wi-Fi invité, les équipements IoT et les postes utilisateurs, peut joindre la console des sauvegardes. Or ces sauvegardes sont la dernière ligne de défense contre un rançongiciel. Règle corrigée : autoriser uniquement le sous-réseau d’administration (par exemple `10.30.250.0/28`) ou mieux l’adresse du bastion (`10.30.250.5/32`) vers `10.30.5.10` TCP/443, puis une règle explicite de refus journalisée pour le reste.',
      criteria: [
        'Le nombre d’adresses couvertes par /8 et l’étendue réelle du périmètre sont identifiés.',
        'Le lien avec la protection des sauvegardes (rançongiciel, mouvement latéral) est expliqué.',
        'La source corrigée est un sous-réseau d’administration restreint ou un bastion en /32.',
        'Le refus par défaut et la journalisation sont mentionnés.',
      ],
      explanation: 'Une règle trop large est l’une des erreurs les plus fréquentes relevées en audit. Le préfixe d’une source doit correspondre exactement à la population qui a besoin de l’accès, conformément au principe du moindre privilège.',
    },
  },
};
