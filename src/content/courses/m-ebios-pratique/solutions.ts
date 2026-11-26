import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-ebios-pratique',
  practice: {
    'cadrage-clinique': {
      blocks: [
        {
          t: 'table',
          head: ['Valeur métier', 'Biens supports', 'Événement redouté', 'Gravité'],
          rows: [
            ['Prise en charge des patients', 'Dossier patient informatisé, serveurs, réseau, personnel soignant', 'Indisponibilité du dossier patient pendant plus de 24 h', 'Critique : risque pour la vie des patients, retards de soins'],
            ['Confidentialité des données de santé', 'Base du dossier patient, sauvegardes, postes', 'Fuite massive de dossiers de santé', 'Grave : atteinte aux personnes, sanctions, image'],
            ['Imagerie médicale', 'Réseau d’imagerie, consoles, stockage d’images', 'Altération d’images ou de comptes rendus', 'Critique : erreur de diagnostic possible'],
          ],
        },
        { t: 'p', text: 'Socle de sécurité à vérifier : guide d’hygiène informatique de l’ANSSI, exigences sectorielles de sécurité des systèmes d’information de santé, RGPD (données de santé), sauvegardes, comptes d’administration du prestataire. Les écarts relevés alimentent le plan de traitement.' },
      ],
    },
    ecosysteme: {
      blocks: [
        {
          t: 'table',
          head: ['Partie prenante', 'Menace ≈ (D × P) / (M × C)', 'Rang'],
          rows: [
            ['Infogérant', '(4 × 4) / (2 × 2) = 4,0', '1'],
            ['Éditeur du dossier patient', '(4 × 2) / (3 × 3) ≈ 0,9', '2'],
            ['Laboratoire d’analyses', '(2 × 2) / (3 × 3) ≈ 0,44', '4'],
            ['Prestataire de nettoyage', '(1 × 1) / (1 × 2) = 0,5', '3 (faible)'],
          ],
        },
        { t: 'p', text: 'Le chemin d’attaque le plus plausible passe par l’infogérant : dépendance et pénétration maximales, maturité et confiance moyennes. Mesures : accès via un bastion journalisé avec authentification multifacteur, comptes nominatifs et limités dans le temps, séparation des environnements d’administration et de production, exigences contractuelles (notification d’incident sous 24 heures, droit d’audit), surveillance des actions d’administration.' },
      ],
    },
    'plan-traitement': {
      blocks: [
        {
          t: 'table',
          head: ['Mesure', 'Responsable', 'Échéance'],
          rows: [
            ['Accès du prestataire par bastion journalisé, authentification multifacteur, droits limités dans le temps', 'RSSI et infogérant', '3 mois'],
            ['Segmentation entre réseau d’administration, production et imagerie', 'Direction des systèmes d’information', '6 mois'],
            ['Sauvegardes immuables du dossier patient, restauration testée chaque trimestre', 'Direction des systèmes d’information', '4 mois'],
            ['Détection des actions d’administration anormales et alerte au SOC', 'RSSI', '6 mois'],
            ['Avenant contractuel : notification d’incident, droit d’audit, sous-traitance encadrée', 'Achats et juridique', '3 mois'],
          ],
        },
        { t: 'list', items: ['**Stratégie** : réduire (vraisemblance et impact) ; le transfert partiel par assurance est complémentaire, sans dispenser des mesures.', '**Résiduel** : vraisemblance ramenée à significative (chemin plus difficile, détection), gravité ramenée à grave (reprise possible en quelques heures) ; risque présenté à la direction pour acceptation.', '**Suivi** : indicateurs (comptes du prestataire sans second facteur, restaurations réussies, délai de détection), revue semestrielle, révision à chaque changement de prestataire ou incident significatif.'] },
        { t: 'p', text: 'Décision demandée à la direction : valider le plan et son budget, accepter formellement les risques résiduels, désigner les responsables et approuver les échéances.' },
      ],
    },
  },
};
