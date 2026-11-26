import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'static-triage-lab',
  title: 'Triage statique d’un échantillon suspect',
  category: 'malware',
  level: 2,
  durationMin: 25,
  module: 'K',
  offensive: false,
  context:
    "Un salarié du service comptable a reçu un courriel avec une pièce jointe « facture_2026.pdf.exe ». Le fichier a été isolé. Vous disposez du rapport de triage produit sur une machine d’analyse sans réseau : métadonnées, sections, imports et chaînes lisibles. Rien n’a été exécuté.",
  objective: 'Relever des indicateurs, repérer les comportements probables sans exécuter l’échantillon et choisir la suite de l’analyse.',
  relatedCourses: ['k-malware-analyse', 'k-malware-initiation'],
  steps: [
    'Examinez les métadonnées et l’entropie des sections.',
    'Parcourez les imports et repérez les combinaisons évocatrices.',
    'Filtrez les chaînes lisibles : adresses, chemins, clés de registre, commandes.',
    'Répondez aux questions et comparez avec le débriefing.',
  ],
};
