import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'sqli-lab',
  questions: {
    'sqlab-q1': { type: 'single', correct: 'b', explanation: 'L’apostrophe ferme prématurément la chaîne SQL et laisse une chaîne non terminée : l’erreur prouve que la saisie modifie la syntaxe de la requête. C’est le premier test de tout auditeur.' },
    'sqlab-q2': { type: 'multi', correct: ['a', 'b', 'd'], explanation: "`admin' -- ` et `admin'#` ferment la chaîne puis mettent en commentaire la condition sur le mot de passe ; `admin' OR '1'='1` ajoute une condition toujours vraie qui, par la priorité de AND sur OR, renvoie la ligne admin. D’autres variantes existent : le simulateur permet de vérifier chacune.", whyWrong: { c: 'Sans apostrophe, la saisie reste une simple valeur : il faut alors le bon mot de passe.', e: 'La chaîne SQL est délimitée par des apostrophes simples : un guillemet double ne la ferme pas.' } },
    'sqlab-q3': { type: 'truefalse', correct: true, explanation: 'Avec une requête paramétrée, le moteur reçoit la structure de la requête et les valeurs séparément. La saisie est comparée littéralement à la colonne login : aucun utilisateur ne s’appelle « admin\' -- ».' },
    'sqlab-q4': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Stockage en clair (une fuite expose tous les mots de passe), messages d’erreur détaillés (aide à l’attaquant) et absence de limitation des tentatives (force brute) sont trois faiblesses distinctes de l’injection.', whyWrong: { c: 'HTTPS est une bonne pratique : il protège la confidentialité des échanges, mais n’a aucun effet sur l’injection.' } },
    'sqlab-q5': { type: 'single', correct: 'b', explanation: "La condition devient `login = 'x' OR '1'='1' AND password = 'x' OR '1'='1'`. Comme `'1'='1'` est toujours vrai, toutes les lignes sont renvoyées ; l’application prend la première, ici admin. C’est pourquoi l’ordre de la table rend cette attaque si dangereuse." },
  },
  debrief: [
    { t: 'h', text: 'Ce qu’il faut retenir' },
    { t: 'list', items: ['La saisie change la **structure** de la requête : c’est la définition d’une injection.', 'Le commentaire `--` ou `#` neutralise la suite de la requête.', 'La **requête paramétrée** rend l’attaque impossible, quelle que soit la charge.'] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives complètes', text: 'Requêtes paramétrées ; mots de passe hachés avec Argon2id et vérifiés par la bibliothèque ; messages d’erreur génériques côté utilisateur et détaillés uniquement dans les journaux ; limitation des tentatives et MFA ; compte de base de données sans droits d’administration ; détection des motifs d’injection dans les journaux du WAF.' },
    { t: 'p', text: 'Signature dans les journaux : apostrophes, `--`, `OR 1=1`, `UNION SELECT` ou `SLEEP(` dans les paramètres, et pics d’erreurs SQL côté serveur.' },
  ],
};
