import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-injections-xss',
  practice: {
    'labo-sqli': {
      blocks: [
        { t: 'p', text: "En mode vulnérable, `admin' -- ` (avec l'espace final) transforme la condition sur le mot de passe en commentaire. En mode corrigé, la même chaîne est transmise comme valeur : la base cherche littéralement un utilisateur nommé « admin' -- », qui n'existe pas." },
        { t: 'p', text: 'Le débriefing du laboratoire détaille les variantes (UNION, aveugle) et leurs signatures dans les journaux.' },
      ],
    },
    'revue-xss': {
      blocks: [
        {
          t: 'table',
          head: ['Ligne', 'Verdict', 'Correction'],
          rows: [
            ['1', '**XSS réfléchie (DOM)** : paramètre d’URL dans innerHTML', '`textContent`'],
            ['2', '**Vulnérable** si siteWeb vaut `javascript:…`', 'Accepter uniquement les URL `http:`/`https:` (via `new URL()` et vérification du protocole)'],
            ['3', 'Sûr', '—'],
            ['4', '**XSS stockée** si le corps contient du HTML non assaini', 'Assainir avec DOMPurify à l’affichage, ou stocker du Markdown rendu de façon sûre'],
            ['5', 'Sûr : React encode le texte', '—'],
          ],
        },
      ],
    },
  },
};
