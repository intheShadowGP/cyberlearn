import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-commutation-vlan-ipv6',
  practice: {
    'plan-vlan': {
      blocks: [
        {
          t: 'table',
          head: ['VLAN', 'Contenu', 'Raison'],
          rows: [
            ['Postes', 'Les 40 postes de travail', 'Population nombreuse, cible fréquente d’hameçonnage : à isoler du reste'],
            ['Téléphonie', 'Les 20 téléphones IP', 'Trafic temps réel, équipements peu maîtrisés ; séparation de la qualité de service et de la sécurité'],
            ['Serveurs', 'Les 5 serveurs internes', 'Ressources sensibles, accès à filtrer finement'],
            ['Administration', 'Les 10 équipements réseau', 'Donne accès à la configuration : à isoler strictement des postes'],
            ['Invités', 'La borne Wi-Fi invités', 'Non fiable : accès Internet uniquement, aucun accès interne'],
            ['Caméras', 'Les caméras IP', 'Équipements souvent vulnérables et rarement mis à jour : à cloisonner'],
          ],
        },
        { t: 'list', items: ['Autoriser : postes → serveurs sur les seuls services nécessaires ; administration → équipements réseau.', 'Bloquer : invités et caméras vers tout réseau interne ; postes vers le VLAN d’administration ; caméras vers Internet sauf si requis.', 'Protections de couche 2 sur les ports d’accès : mode accès forcé (pas de négociation de trunk), port security, DHCP snooping et inspection ARP ; VLAN natif dédié et inutilisé sur les liens d’agrégation.'] },
      ],
    },
    'diagnostic-l2': {
      blocks: [
        { t: 'p', text: 'Deux attaques expliquent les symptômes : une **saturation de la table MAC** (l’analyseur voit le trafic des autres parce que le commutateur inonde les trames inconnues) et une **usurpation ARP** (les réponses ARP associant la passerelle à une MAC inhabituelle détournent le trafic vers l’attaquant, en intercepteur).' },
        { t: 'list', items: ['Les distinguer : une table MAC anormalement pleine et un grand nombre d’adresses MAC vues sur un seul port pointent vers la saturation ; des réponses ARP gratuites nombreuses et un couple IP/MAC de la passerelle qui change pointent vers l’usurpation ARP. Les deux peuvent coexister.', 'Protections : contre la saturation, le port security (limite d’adresses MAC par port) ; contre l’usurpation ARP, le DHCP snooping couplé à l’inspection dynamique ARP (DAI), qui rejette les réponses ARP incohérentes avec les baux DHCP.'] },
        { t: 'callout', kind: 'warn', text: 'Dans l’immédiat : localiser le port d’origine (nombre d’adresses MAC, volume ARP), l’isoler, puis activer les protections sur l’ensemble des commutateurs d’accès.' },
      ],
    },
  },
};
