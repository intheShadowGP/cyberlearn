import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'tls-inspection-lab',
  title: 'Analyse d’une configuration TLS et d’une chaîne de certificats',
  category: 'crypto',
  level: 3,
  durationMin: 35,
  module: 'E',
  offensive: false,
  context:
    'Vous auditez la configuration TLS de plusieurs serveurs web d’une organisation. Pour chacun, un analyseur affiche le certificat (nom, SAN, expiration), l’état de la chaîne, les protocoles activés et la présence de HSTS, puis liste les défauts. Vous corrigez ensuite la configuration jusqu’à ne plus avoir d’anomalie.',
  objective: 'Savoir lire une configuration TLS, repérer les défauts courants (certificat expiré, nom non couvert, chaîne incomplète, protocoles obsolètes, HSTS absent) et les corriger.',
  relatedCourses: ['e-chiffrement-tls-pki'],
  steps: [
    'Sélectionnez une configuration serveur et lisez les défauts détectés, classés par gravité.',
    'Comprenez chaque défaut : certificat expiré, nom demandé absent du SAN, chaîne incomplète, protocole obsolète, HSTS manquant.',
    'Appliquez les corrections une à une et observez la disparition des anomalies.',
    'Répondez aux questions, puis lisez le débriefing sur une configuration TLS moderne.',
  ],
};
