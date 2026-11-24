import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-perimetre-vpn-wifi',
  practice: {
    'archi-perimetre': {
      blocks: [
        {
          t: 'table',
          head: ['Zone', 'Contenu', 'Flux autorisés'],
          rows: [
            ['DMZ', 'Serveur web, relais de messagerie entrant', 'Internet → DMZ sur 443/25 ; DMZ → interne uniquement vers les services précis requis'],
            ['Interne', 'Les 60 postes, serveurs internes', 'Interne → Internet via proxy ; pas d’accès entrant direct'],
            ['Administration', 'Gestion des équipements réseau et serveurs', 'Accès via poste d’administration dédié / rebond, isolé des postes'],
          ],
        },
        { t: 'list', items: ['Reverse proxy (avec WAF) devant le serveur web, dans ou devant la DMZ ; proxy sortant pour les postes, avec filtrage d’URL et journalisation ; IDS/IPS sur le lien Internet et à l’entrée de la DMZ.', 'VPN d’accès distant à jour, authentification multifacteur, tunnel complet pour contrôler le trafic des télétravailleurs.', 'Wi-Fi salariés en WPA2/WPA3-Entreprise avec 802.1X et RADIUS (VLAN selon l’utilisateur) ; Wi-Fi visiteurs sur un VLAN isolé, accès Internet seulement.'] },
      ],
    },
    'revue-regles': {
      blocks: [
        { t: 'p', text: 'Trois défauts apparaissent. La règle 1 autorise **tout le sortant** sur tous les ports : c’est un angle mort pour l’exfiltration et le rappel vers un serveur de commande. La règle 3 refuse tout de la DMZ vers l’interne **avant** la règle 4 : comme le pare-feu applique la première règle qui correspond, la règle 4 (accès à la base) n’est jamais atteinte et le service est en réalité coupé. Enfin, rien n’est journalisé.' },
        { t: 'table', head: ['N°', 'Règle corrigée', 'Remarque'], rows: [
          ['1', 'autoriser interne -> Internet sur 80, 443 et 53 (via proxy et résolveur)', 'Sortant limité aux services nécessaires'],
          ['2', 'autoriser Internet -> DMZ sur 443', 'Service publié inchangé'],
          ['3', 'autoriser DMZ -> serveur de base précis sur 3306', 'Flux précis placé avant le refus'],
          ['4', 'refuser DMZ -> interne', 'Tout autre flux de la DMZ vers l’interne est bloqué'],
          ['5', 'refuser tout -> tout', 'Politique par défaut, avec journalisation'],
        ] },
        { t: 'list', items: ['Journaliser les refus (surtout DMZ → interne et le sortant inattendu), les connexions acceptées depuis la DMZ vers la base et les modifications de la liste de règles.', 'Une série de refus DMZ → interne est le signe qu’un serveur exposé est peut-être compromis et cherche à rebondir.'] },
      ],
    },
    'capture-balise': {
      blocks: [
        { t: 'p', text: 'La régularité (toutes les 60 s ± 2 s), le volume quasi constant et la permanence 24 h/24 évoquent une **balise de commande et contrôle** : un humain ou une application ordinaire ne produit pas ce rythme métronomique. Le chiffrement n’empêche pas ce constat, qui repose sur la forme du trafic.' },
        { t: 'list', items: ['Filtres : `ip.addr == <destination> && tls` ; examiner la périodicité (horodatages), le SNI du handshake (`tls.handshake.extensions_server_name`), le certificat et, si possible, l’empreinte JA3/JA4 ; recouper avec `dns` pour le nom résolu.', 'Mesures : créer une règle de détection sur les connexions périodiques vers une destination unique ; vérifier la réputation et l’âge du domaine ; bloquer la destination au pare-feu et au proxy ; isoler et analyser le poste source (processus à l’origine des connexions via l’EDR).'] },
      ],
    },
  },
};
