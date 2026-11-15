import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'i-threat-hunting',
  practice: {
    'balise-zeek': {
      blocks: [
        { t: 'p', text: '**198.51.100.23** est la destination la plus suspecte : 1 438 connexions en une journée, soit environ une toutes les 60 secondes, avec un écart type très faible (1,9 s) et un volume constant d’environ 420 octets. Un humain ou une application ordinaire ne produit pas une telle régularité ; c’est la signature d’une balise. La première ligne (volumes très variables, intervalle aléatoire) ressemble à un service en ligne utilisé normalement ; le trafic DNS vers le résolveur interne est normal ; les trois connexions vers 203.0.113.80 restent à vérifier, mais sans régularité.' },
        { t: 'list', items: ['`dns.log` : quel nom a été résolu vers 198.51.100.23, depuis quand (domaine récent ?).', '`ssl.log` : SNI, certificat (auto-signé, émis récemment ?), empreinte JA3/JA4 comparée aux outils connus.', 'EDR : quel processus du poste ouvre ces connexions, son emplacement, sa signature, son parent.', 'Les autres postes contactent-ils la même destination ?'] },
        { t: 'code', lang: 'text', caption: 'Logique de détection durable', code: 'Pour chaque couple (hôte interne, destination externe) sur 24 h :\n  nombre de connexions ≥ 100\n  ET coefficient de variation des intervalles < 10 %\n  ET destination absente de la liste des services autorisés (mises à jour, SaaS de l’entreprise)\n→ alerte de priorité moyenne, enrichie du processus (EDR) et de l’âge du domaine' },
      ],
    },
    'plan-chasse': {
      blocks: [
        {
          t: 'table',
          head: ['Hypothèse', 'Données', 'Méthode'],
          rows: [
            ['H1 : des comptes VPN légitimes ont été utilisés depuis des lieux ou à des heures inhabituels', 'Journaux du concentrateur VPN, journaux d’authentification (MFA), géolocalisation des adresses', 'Ligne de base par compte, empilement des pays et fournisseurs d’accès, connexions simultanées impossibles'],
            ['H2 : un outil d’accès à distance a été installé comme service sur des serveurs', 'Événements 7045 (installation de service) et 4697, Sysmon 1, inventaire logiciel de l’EDR', 'Empilement des services installés et des binaires d’accès à distance, comparaison avec les outils autorisés'],
            ['H3 (bonus) : des volumes importants sont partis vers un stockage cloud grand public', 'Proxy, Zeek `ssl.log` (SNI), DLP', 'Volume sortant par hôte et par destination, comparé à la ligne de base'],
          ],
        },
        { t: 'callout', kind: 'info', text: 'TLP:AMBER : le rapport et vos résultats qui en reprennent le contenu peuvent être partagés au sein de votre organisation et avec vos clients qui en ont besoin, pas au-delà. Pour un partage plus large (par exemple avec l’ISAC du secteur), demander l’accord de l’émetteur ou partager uniquement vos propres observations sous un marquage adapté.' },
      ],
    },
  },
};
