import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-defense-reseau-avancee',
  practice: {
    'audit-equipement': {
      blocks: [
        {
          t: 'table',
          head: ['Ligne', 'Défaut', 'Menace ouverte'],
          rows: [
            ['transport input telnet ssh', 'Telnet autorisé pour l’administration', 'Écoute des identifiants en clair sur le réseau des postes'],
            ['snmp-server community public RO', 'SNMP v2c, communauté par défaut, aucune restriction de source', 'Lecture de la configuration et de la topologie par n’importe quel poste'],
            ['network 10.0.0.0 0.255.255.255 area 0', 'OSPF sur toutes les interfaces, sans authentification', 'Un poste ou un équipement pirate peut injecter de fausses routes'],
            ['neighbor 192.0.2.1 remote-as 64501', 'Aucun filtre, aucune limite de préfixes, aucune validation d’origine', 'Détournement ou saturation de la table de routage par une annonce erronée'],
            ['(ensemble)', 'Administration joignable depuis le réseau des postes', 'Un poste compromis peut tenter d’atteindre l’équipement de bordure'],
          ],
        },
        { t: 'list', items: ['Priorité 1 : couper l’exposition de l’administration (ACL limitant les sources à un bastion, réseau d’administration dédié) et supprimer Telnet au profit de SSH.', 'Priorité 2 : remplacer SNMP v2c par SNMPv3 (authentification et chiffrement) ou le désactiver ; authentifier OSPF et le limiter aux seules interfaces utiles (interfaces passives ailleurs).', 'Priorité 3 : filtrer les préfixes BGP reçus et annoncés, fixer un maximum de préfixes, activer la validation RPKI, et ajouter GTSM si le voisin est directement connecté.'] },
        { t: 'p', text: 'Configuration cible : accès SSH seul depuis le bastion, authentification AAA centralisée, SNMPv3, OSPF authentifié et passif par défaut, BGP avec filtres, limite de préfixes et RPKI, CoPP en protection du processeur, configuration sauvegardée et comparée après chaque changement.' },
      ],
    },
    'plan-ddos': {
      blocks: [
        { t: 'p', text: 'Deux attaques coïncident. La première est **volumétrique** : une réflexion DNS dont les réponses saturent la **bande passante** du lien. La seconde est un **SYN flood** : les demandes de connexion incomplètes épuisent la **table d’états** du répartiteur de charge.' },
        { t: 'list', items: ['Le pare-feu local ne peut pas résoudre la première : le trafic a déjà rempli le lien d’accès avant d’arriver à lui. Il ne fait que saturer à son tour en tentant de traiter ce flux.', 'Immédiat : demander à l’opérateur ou au service de protection de dériver le trafic vers un centre de nettoyage ; filtrer les réponses DNS non sollicitées en amont ; activer les SYN cookies et réduire les délais d’expiration sur le répartiteur ; en dernier recours, RTBH sur l’adresse la plus visée, en sachant qu’elle devient inaccessible.', 'Durable : protection anti-DDoS contractualisée et testée, CDN ou anycast pour absorber, limitation de débit par source, WAF pour les requêtes applicatives, supervision avec seuils d’alerte, procédure de bascule écrite et répétée.'] },
        { t: 'callout', kind: 'info', text: 'On n’agit pas sur la ressource attaquée mais en amont d’elle : une parade placée après le goulot d’étranglement arrive trop tard.' },
      ],
    },
    'chasse-lateral': {
      blocks: [
        { t: 'p', text: 'Le poste **10.1.20.37** est anormal : il contacte 212 machines distinctes sur le port 445 (SMB) en une heure, avec de très petits échanges (190 octets en moyenne). C’est le motif d’un **balayage** ou d’une **propagation latérale** : un poste ordinaire parle à quelques serveurs de fichiers, pas à plus de deux cents machines. Le poste .12, avec quelques destinations et de gros volumes, ressemble à un usage de partage de fichiers normal ; le poste .54, sur RDP vers deux machines, peut être de l’administration.' },
        { t: 'list', items: ['Hypothèse : le poste 10.1.20.37 est compromis et recherche des partages ou tente de se propager par SMB. Données : journaux du pare-feu interne et de l’EDR du poste (processus à l’origine), journaux d’authentification des machines contactées (échecs ou réussites de connexion depuis cette source), flux antérieurs pour savoir depuis quand.', 'Confinement : isoler le poste (coupure du port ou quarantaine par VLAN) sans l’éteindre, conserver les journaux et l’image mémoire, vérifier les machines atteintes par une authentification réussie, changer les secrets exposés.', 'Détection durable : règle comportementale sur le nombre de destinations SMB par source et par minute (seuil issu de la ligne de base), filtrage est-ouest limitant SMB aux serveurs de fichiers, leurre SMB déclenchant une alerte à la première connexion.'] },
      ],
    },
  },
};
