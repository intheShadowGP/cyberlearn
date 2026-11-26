import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'hex-header-lab',
  title: 'Lire l’hexadécimal : identifier un fichier par son en-tête',
  category: 'systeme',
  level: 1,
  durationMin: 20,
  module: 'A',
  offensive: false,
  context:
    "Quatre fichiers ont été déposés dans un dossier partagé, avec des extensions qui ne correspondent pas toujours à leur contenu. Vous disposez du début de chacun, affiché en hexadécimal, et d’un convertisseur. Votre mission : identifier ce que sont réellement ces fichiers.",
  objective: 'Lire un dump hexadécimal, reconnaître les signatures usuelles et convertir des octets en valeurs lisibles.',
  relatedCourses: ['a-systemes-fondamentaux', 'a-fichiers-programmes-ligne-commande', 'a-compilation-memoire-execution'],
  steps: [
    'Repérez les deux ou quatre premiers octets de chaque fichier.',
    'Lisez la colonne de caractères : une signature y est souvent lisible.',
    'Utilisez le convertisseur pour passer des octets aux valeurs décimales et aux caractères.',
    'Répondez aux questions et comparez avec le débriefing.',
  ],
};
