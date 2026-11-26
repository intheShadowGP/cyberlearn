import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  "id": "dns-zone-lab",
  "title": "Auditer une zone DNS",
  "category": "reseau",
  "level": 2,
  "durationMin": 25,
  "module": "B",
  "offensive": false,
  "context": "Votre organisation gère elle-même la zone DNS de son domaine. Un audit de routine vous demande de relire les huit enregistrements : certains sont hérités de projets anciens. Vous devez repérer ce qui expose l’organisation à l’usurpation de courriel, à la prise de contrôle d’un sous-domaine ou à la fuite d’informations internes.",
  "objective": "Lire une zone DNS et repérer quatre défauts fréquents : SPF permissif, enregistrement orphelin, adresse privée publiée, DMARC absent.",
  "relatedCourses": [
    "b-routage-dns-dhcp-nat"
  ],
  "steps": [
    "Lisez les enregistrements : type, nom et valeur.",
    "Repérez ceux qui vous paraissent anormaux avant l’audit.",
    "Lancez l’audit et comparez.",
    "Répondez aux questions et comparez avec le débriefing."
  ]
};
