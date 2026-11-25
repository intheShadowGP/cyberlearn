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
    'revue-injections': {
      blocks: [
        {
          t: 'table',
          head: ['Extrait', 'Injection et charge', 'Correction'],
          rows: [
            ['1', '**Injection de commande** : `hote = 1.1.1.1; cat /etc/passwd`', 'Appel sans shell (`subprocess.run(["traceroute", hote])`) et validation stricte (adresse IP ou nom conforme)'],
            ['2', '**Injection NoSQL** : `{"login": "admin", "mdp": {"$ne": null}}` contourne le mot de passe', 'Vérifier que `login` et `mdp` sont des **chaînes**, comparer ensuite l’empreinte du mot de passe'],
            ['3', '**Injection de gabarit (SSTI)** : `nom = {{7*7}}` affiche 49, puis exécution de code', 'Passer la valeur comme variable : `render_template_string("<h1>Bonjour {{ nom }}</h1>", nom=nom)`'],
            ['4', '**Injection SQL dans ORDER BY** : un paramètre lié est impossible sur un identifiant', 'Liste blanche de colonnes autorisées, puis insertion de la colonne choisie dans la requête'],
          ],
        },
        { t: 'p', text: 'Mesures communes : compte de base aux droits minimaux, exécution du service avec un utilisateur sans privilège, journalisation des erreurs, alertes sur les motifs d’injection (`;`, `$ne`, `{{`, `UNION`) et tests de non-régression qui rejouent chaque charge après correction.' },
      ],
    },
  },
};
