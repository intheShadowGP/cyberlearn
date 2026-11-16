import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'password-strength-lab',
  questions: [
    { id: 'pws-q1', type: 'single', difficulty: 1, skills: ['e-pwd-storage'], prompt: 'Parmi ces mots de passe, lequel l’estimateur juge-t-il le plus robuste ?', options: [{ id: 'a', text: '`azerty123`' }, { id: 'b', text: '`P@ss1`' }, { id: 'c', text: 'une phrase de passe longue de type `cheval-bleu-ancre-42-rivière`' }, { id: 'd', text: '`motdepasse`' }] },
    { id: 'pws-q2', type: 'truefalse', difficulty: 1, skills: ['e-pwd-storage'], prompt: 'Un mot de passe qui figure dans une liste de mots très répandus est considéré comme très faible, même s’il est assez long.' },
    { id: 'pws-q3', type: 'single', difficulty: 2, skills: ['e-hash-props', 'e-pwd-storage'], prompt: 'Pour un même mot de passe, pourquoi le temps de cassage est-il bien plus long avec un « hachage lent » qu’avec un « hachage rapide » ?', options: [{ id: 'a', text: 'Le hachage lent réduit le nombre d’essais possibles par seconde, donc augmente le temps de cassage hors ligne' }, { id: 'b', text: 'Le hachage lent allonge automatiquement le mot de passe' }, { id: 'c', text: 'Le hachage lent chiffre le mot de passe' }, { id: 'd', text: 'Il n’y a aucune différence réelle' }] },
    { id: 'pws-q4', type: 'single', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'Qu’est-ce qui augmente le plus efficacement l’entropie d’un mot de passe ?', options: [{ id: 'a', text: 'Augmenter sa longueur' }, { id: 'b', text: 'Ajouter seulement un chiffre à la fin d’un mot courant' }, { id: 'c', text: 'Le remplacer par un mot du dictionnaire plus court' }, { id: 'd', text: 'L’écrire tout en majuscules' }] },
    { id: 'pws-q5', type: 'multi', difficulty: 2, skills: ['e-pwd-storage'], prompt: 'Quelles pratiques protègent réellement les comptes, au-delà du choix du mot de passe ?', options: [{ id: 'a', text: 'Activer l’authentification multifacteur (MFA)' }, { id: 'b', text: 'Stocker les mots de passe avec un hachage lent et salé (Argon2, bcrypt, PBKDF2)' }, { id: 'c', text: 'Ne pas réutiliser le même mot de passe sur plusieurs services' }, { id: 'd', text: 'Imposer un changement de mot de passe toutes les semaines sans autre mesure' }] },
    { id: 'pws-q6', type: 'open', difficulty: 2, skills: ['e-pwd-storage', 'e-hash-props'], prompt: 'Un collègue dit : « mon mot de passe `Soleil2024!` est robuste, il a une majuscule, un chiffre et un symbole ». À l’aide de l’estimateur, expliquez pourquoi ce raisonnement est trompeur et ce qui compte vraiment.' },
  ],
};
