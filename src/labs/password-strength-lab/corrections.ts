import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'password-strength-lab',
  questions: {
    'pws-q1': { type: 'single', correct: 'c', explanation: 'La phrase de passe longue a l’entropie la plus élevée : c’est surtout sa longueur qui compte. `azerty123` et `motdepasse` sont des variantes de mots courants (très faibles) ; `P@ss1` est trop court malgré ses symboles.', whyWrong: { a: 'Dérivé d’un mot courant, repéré par les listes.', b: 'Trop court : peu d’entropie, cassé vite.' } },
    'pws-q2': { type: 'truefalse', correct: true, explanation: 'Les attaquants testent d’abord les listes de mots de passe connus (fuites, dictionnaires). Un mot figurant dans ces listes tombe immédiatement, quelle que soit sa longueur : l’estimateur le classe très faible.' },
    'pws-q3': { type: 'single', correct: 'a', explanation: 'Le cassage hors ligne consiste à essayer un très grand nombre de candidats. Un hachage lent (Argon2, bcrypt, PBKDF2 bien paramétrés) rend chaque essai coûteux : au lieu de milliards d’essais par seconde, l’attaquant n’en fait que quelques milliers, ce qui multiplie le temps de cassage.', whyWrong: { c: 'Le hachage n’est pas du chiffrement : il n’est pas réversible.' } },
    'pws-q4': { type: 'single', correct: 'a', explanation: 'L’entropie vaut longueur × log2(taille du jeu de caractères) : allonger le mot de passe l’augmente le plus sûrement. Ajouter un chiffre à un mot courant ne trompe pas les listes ; tout en majuscules réduit même le jeu de caractères.' },
    'pws-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'MFA, hachage lent et salé côté serveur, et unicité des mots de passe entre services sont les mesures qui protègent réellement.', whyWrong: { d: 'Les changements forcés très fréquents, sans autre mesure, poussent à des mots de passe plus faibles et prévisibles ; les recommandations récentes (NIST) les déconseillent.' } },
    'pws-q6': {
      type: 'open',
      model: 'La présence d’une majuscule, d’un chiffre et d’un symbole n’est pas ce qui compte : ce qui compte est l’entropie (longueur × taille du jeu de caractères) et le fait que le mot ne soit pas prévisible. `Soleil2024!` suit un schéma extrêmement courant (mot du dictionnaire capitalisé + année + `!`) que les attaquants testent en priorité : l’estimateur montre une entropie modeste et un temps de cassage faible, surtout avec un hachage rapide. Une phrase de passe longue et imprévisible, même sans symbole, obtient une bien meilleure entropie. Il faut aussi rappeler que la vraie protection dépend du service (hachage lent et salé) et de la MFA, et qu’il ne faut pas réutiliser ce mot de passe ailleurs.',
      criteria: ['La distinction entre « complexité apparente » et entropie réelle est faite.', 'Le caractère prévisible du schéma mot+année+symbole est relevé.', 'La longueur et/ou l’imprévisibilité sont présentées comme ce qui compte.', 'Une mesure côté service ou la MFA est mentionnée.'],
      explanation: 'Les règles de « complexité » classiques donnent une fausse impression de sécurité : l’entropie et l’imprévisibilité priment.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Longueur et imprévisibilité** font l’essentiel de l’entropie ; une phrase de passe longue bat un mot court « complexe ».', '**Les listes de mots courants** tombent immédiatement, quelle que soit la longueur.', '**Le stockage côté service** (hachage lent et salé : Argon2, bcrypt, PBKDF2) décide du coût d’un cassage hors ligne.'] },
    { t: 'callout', kind: 'key', title: 'Bonnes pratiques', text: 'Phrases de passe longues, uniques par service, gérées par un gestionnaire de mots de passe ; MFA résistante à l’hameçonnage ; côté serveur, hachage lent et salé et limitation des tentatives. On préfère des mots de passe longs à des changements fréquents imposés.' },
    { t: 'callout', kind: 'info', text: 'Les durées affichées sont des ordres de grandeur pédagogiques : elles illustrent l’effet du hachage et de l’entropie, pas une mesure exacte. Elles supposent un cassage hors ligne, c’est-à-dire que l’attaquant a déjà récupéré les empreintes.' },
  ],
};
