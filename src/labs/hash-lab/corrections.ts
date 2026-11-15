import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'hash-lab',
  questions: {
    'hlab-q1': { type: 'single', correct: 'c', explanation: 'L’effet avalanche fait changer chaque bit de sortie avec une probabilité d’environ 1/2 : on observe typiquement entre 110 et 145 bits différents sur 256.' },
    'hlab-q2': { type: 'truefalse', correct: false, explanation: 'Le HMAC dépend de la clé secrète. Sans elle, l’attaquant ne peut pas calculer le code correspondant au message modifié : le destinataire, qui recalcule le HMAC, détecte la falsification.' },
    'hlab-q3': { type: 'single', correct: 'b', explanation: 'Chaque dérivation utilise un sel aléatoire de 16 octets. Deux utilisateurs ayant le même mot de passe ont donc des empreintes différentes, et aucune table précalculée n’est utilisable.' },
    'hlab-q4': { type: 'short', accepted: ['password123'], explanation: 'Le décodage Base64 est immédiat et ne demande aucune clé : la valeur était en clair. Elle doit être retirée de la configuration et le mot de passe changé.' },
    'hlab-q5': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Le coût par essai est multiplié par le nombre d’itérations, le sel force une attaque compte par compte, et les recommandations d’itérations augmentent avec le temps (l’OWASP recommande aujourd’hui 600 000 pour PBKDF2-HMAC-SHA-256).', whyWrong: { c: 'L’irréversibilité n’empêche pas de tester des candidats. SHA-256 est si rapide qu’un GPU en teste des milliards par seconde.' } },
  },
  debrief: [
    { t: 'p', text: 'Ces mesures illustrent pourquoi l’on distingue les fonctions de hachage **rapides** (intégrité, HMAC, signatures) des fonctions **lentes** (mots de passe).' },
    { t: 'callout', kind: 'key', title: 'Décision recommandée', text: 'Mots de passe : Argon2id (ou PBKDF2 à 600 000 itérations ou plus si une contrainte FIPS l’impose), sel aléatoire unique. Webhooks : HMAC-SHA-256 avec une clé longue, comparaison à temps constant et horodatage signé pour empêcher le rejeu.' },
  ],
};
