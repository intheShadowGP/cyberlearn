import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'hash-lab',
  title: 'Atelier empreintes, HMAC et dérivation de clés',
  category: 'crypto',
  level: 2,
  durationMin: 25,
  module: 'E',
  offensive: false,
  context:
    "Votre équipe doit choisir comment stocker les mots de passe d'une nouvelle application et comment authentifier les webhooks d'un prestataire de paiement. Avant de trancher, vous mesurez concrètement le comportement des primitives avec l'API Web Crypto de votre navigateur.",
  objective: 'Observer l’effet avalanche, le rôle de la clé dans un HMAC et le coût d’une fonction de dérivation.',
  relatedCourses: ['e-hachage-mots-de-passe'],
  steps: [
    'Comparez les empreintes de deux textes ne différant que d’un caractère.',
    'Calculez un HMAC, puis modifiez le message et observez le résultat.',
    'Mesurez PBKDF2 à 1 000 puis 600 000 itérations.',
    'Décodez la valeur « chiffrée » trouvée dans une configuration.',
    'Répondez aux questions.',
  ],
};
