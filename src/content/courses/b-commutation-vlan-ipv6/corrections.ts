import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'b-commutation-vlan-ipv6',
  questions: {
    'cvi-q1': { type: 'single', correct: 'a', explanation: 'Le commutateur lit l’adresse MAC **source** de chaque trame entrante et retient qu’elle est joignable par le port d’arrivée. Il n’a besoin ni de DNS ni d’adresse IP pour commuter : il travaille en couche 2.' },
    'cvi-q2': { type: 'single', correct: 'a', explanation: 'Une destination inconnue déclenche l’inondation d’unicast inconnu : la trame part sur tous les ports sauf celui d’arrivée, dans l’espoir d’atteindre le destinataire, qui révélera alors sa position.', whyWrong: { b: 'La détruire couperait des communications légitimes vers des machines encore silencieuses.' } },
    'cvi-q3': { type: 'truefalse', correct: false, explanation: 'Un commutateur sépare les domaines de **collision** (un par port), mais pas les domaines de **diffusion** : par défaut, tout le réseau local n’en forme qu’un. Ce sont les VLAN qui le découpent.' },
    'cvi-q4': { type: 'short', accepted: ['CAM', 'table CAM', 'cam'], explanation: 'La table CAM (Content-Addressable Memory) associe adresses MAC et ports. Sa taille limitée est ce qu’exploite l’attaque par saturation.' },
    'cvi-q5': { type: 'single', correct: 'a', explanation: 'Un lien d’agrégation transporte plusieurs VLAN ; chaque trame est marquée d’une étiquette 802.1Q indiquant son VLAN, pour que le commutateur d’en face sache dans quel domaine la remettre.' },
    'cvi-q6': { type: 'short', accepted: ['12', '12 bits'], explanation: 'Le VID fait 12 bits, soit 4096 valeurs, dont 1 à 4094 utilisables (0 et 4095 sont réservés).' },
    'cvi-q7': { type: 'truefalse', correct: false, explanation: 'Deux VLAN sont deux réseaux logiques distincts : le trafic de l’un à l’autre doit passer par un équipement de couche 3 (routeur ou pare-feu), ce qui donne justement un point de filtrage.' },
    'cvi-q8': { type: 'multi', correct: ['a', 'b'], explanation: 'On attribue au VLAN natif un VLAN dédié et inutilisé, et on marque explicitement le trafic du trunk, pour empêcher le saut de VLAN par double marquage.', whyWrong: { c: 'Placer des postes sur le VLAN natif les expose précisément à cette attaque.', d: 'Laisser le VLAN 1 par défaut est une mauvaise pratique répandue.' } },
    'cvi-q9': {
      type: 'open',
      model: 'En émettant des milliers de fausses adresses MAC sources, l’attaquant remplit la table CAM du commutateur. Une fois la table saturée, les nouvelles adresses de destination ne peuvent plus y être apprises : le commutateur se met à inonder les trames d’unicast inconnu sur tous les ports (« fail open »). L’attaquant branché sur un port capte alors le trafic normalement destiné à d’autres machines, ce qui revient à transformer le commutateur en concentrateur. Protection : le port security, qui limite le nombre d’adresses MAC apprises par port et réagit au dépassement (blocage du port, rejet des trames, alerte), ce qui empêche un seul port de remplir la table.',
      criteria: ['La saturation de la table CAM est expliquée.', 'L’inondation des trames inconnues et la capture du trafic sont décrites.', 'Le port security (limite d’adresses MAC par port) est proposé comme protection.'],
      explanation: 'Cette attaque illustre pourquoi un commutateur n’est pas une protection de confidentialité en soi : sans port security, il retombe sur le comportement d’un concentrateur.',
    },
    'cvi-q10': { type: 'single', correct: 'a', explanation: 'Le port security fixe un nombre maximal d’adresses MAC apprises par port et réagit (blocage, alerte) au-delà : il contre la saturation de table et le branchement d’un équipement non prévu.' },
    'cvi-q11': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Le DHCP snooping rejette les réponses DHCP des ports non fiables et construit une table des baux (adresse MAC, IP, port). L’inspection ARP et le contrôle d’adresse IP source s’appuient sur cette table pour détecter les usurpations.', whyWrong: { c: 'Le chiffrement TLS agit en couche applicative, indépendamment du DHCP snooping.' } },
    'cvi-q12': { type: 'single', correct: 'a', explanation: 'IPv6 porte l’adresse sur 128 bits, contre 32 pour IPv4, ce qui offre un espace d’adressage pratiquement illimité et supprime la pénurie d’adresses.' },
    'cvi-q13': { type: 'short', accepted: ['fe80::/10', 'fe80::/10', 'fe80', 'fe80::'], explanation: 'Les adresses lien-local sont dans `fe80::/10`. Chaque interface IPv6 en possède une, utilisée pour le dialogue sur le lien (y compris la découverte de voisins).' },
    'cvi-q14': { type: 'single', correct: 'a', explanation: 'En SLAAC, la machine écoute les annonces de routeur (Router Advertisement, ICMPv6) qui portent le préfixe du réseau, puis compose son adresse. Aucun serveur n’est requis, contrairement à DHCP.', whyWrong: { b: 'L’ARP n’existe pas en IPv6 ; c’est NDP, fondé sur ICMPv6, qui le remplace.' } },
    'cvi-q15': { type: 'truefalse', correct: false, explanation: 'IPv6 est activé par défaut sur les systèmes modernes : au minimum l’adressage lien-local est actif. Un réseau « IPv4 seulement » a donc un plan IPv6 souvent ni filtré ni surveillé, exploitable (faux routeur, DHCPv6 pirate).' },
    'cvi-q16': {
      type: 'open',
      model: 'Risque : IPv6 étant actif sur les postes, un attaquant local peut émettre de fausses annonces de routeur pour se désigner passerelle IPv6 par défaut, ou monter un serveur DHCPv6 pirate, et intercepter le trafic ; comme le pare-feu et la journalisation ne couvrent qu’IPv4, cette activité passe inaperçue. Mesures : 1) activer RA Guard (et DHCPv6 Guard) sur les commutateurs pour n’accepter annonces et réponses que des ports légitimes ; 2) étendre les règles de filtrage et la journalisation à IPv6, au pare-feu comme sur les hôtes ; 3) inventorier l’usage réel d’IPv6 et bloquer les mécanismes de transition inutiles (Teredo, 6to4) sur les postes. On peut aussi superviser le trafic ICMPv6 de découverte de voisins pour détecter un faux routeur.',
      criteria: ['Le risque d’un faux routeur ou DHCPv6 pirate non détecté est expliqué.', 'RA Guard ou DHCPv6 Guard est proposé.', 'L’extension du filtrage et de la surveillance à IPv6 est proposée.', 'Une troisième mesure concrète est donnée (transition, inventaire, supervision ICMPv6).'],
      explanation: 'IPv6 non géré est un angle mort fréquent : la bonne réponse est de l’administrer, pas de prétendre qu’il n’existe pas.',
    },
  },
};
