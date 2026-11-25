import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-web-fondamentaux',
  practice: {
    'lire-requete': {
      blocks: [
        {
          t: 'table',
          head: ['Élément', 'Valeur'],
          rows: [
            ['Méthode', '`POST`'],
            ['Chemin', '`/connexion`'],
            ['Données envoyées', '`login=alice` et `mdp=Printemps2026` dans le corps de la requête'],
            ['Code de statut', '`302 Found` : redirection vers `/accueil`'],
            ['Cookie posé par le serveur', '`session=7f3a9c1e` avec `Path=/`'],
          ],
        },
        { t: 'p', text: 'Après une connexion réussie, le serveur redirige vers la page d’accueil et dépose un **cookie de session** : c’est lui qui permettra de vous reconnaître aux requêtes suivantes.' },
        { t: 'list', items: ['**Cookie sans `Secure` ni `HttpOnly`** : il peut circuler en clair sur une connexion non chiffrée et être lu par un script injecté ; ajouter `Secure; HttpOnly; SameSite=Lax`.', '**Identifiant de session court et simple** (`7f3a9c1e`) : devinable ; il faut un identifiant aléatoire long, généré par le framework.', 'Si la connexion se fait en HTTP, le mot de passe circule en clair : forcer HTTPS.'] },
      ],
    },
    'reperer-risques': {
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Risque', 'Correction de base'],
          rows: [
            ['(a) Réservation d’un autre client visible', '**Contrôle d’accès défaillant (IDOR)**', 'Vérifier côté serveur que la réservation appartient à l’utilisateur connecté'],
            ['(b) Script dans un commentaire exécuté', '**XSS stockée** (injection)', 'Encoder la sortie, afficher les commentaires comme du texte'],
            ['(c) Messages d’erreur différents', '**Énumération de comptes** (authentification défaillante)', 'Même message pour les deux cas, limitation des tentatives, MFA'],
            ['(d) Trace complète affichée', '**Mauvaise configuration**', 'Page d’erreur générique, détails dans les journaux'],
          ],
        },
        { t: 'p', text: 'Ordre de gravité : (a) puis (b) sont les plus graves, car elles exposent directement des données ou permettent d’agir au nom des visiteurs ; (c) facilite d’autres attaques ; (d) donne des informations qui aident l’attaquant mais n’ouvre pas d’accès par elle-même.' },
      ],
    },
    'revue-formulaire': {
      blocks: [
        {
          t: 'table',
          head: ['Point', 'Risque', 'Correction'],
          rows: [
            ['1', 'Le mot de passe circule en clair sur le réseau', 'HTTPS partout, redirection automatique de HTTP vers HTTPS'],
            ['2', 'Les identifiants apparaissent dans l’URL : historique, journaux, en-tête Referer', 'Méthode `POST`, données dans le corps de la requête'],
            ['3', 'Une fuite de la base expose tous les mots de passe', 'Stocker des empreintes lentes et salées (Argon2, bcrypt)'],
            ['4', 'Force brute et bourrage d’identifiants possibles', 'Limitation des tentatives, délais croissants, MFA'],
            ['5', 'Injection SQL : contournement de la connexion', 'Requêtes paramétrées'],
            ['6', 'Le cookie peut fuiter ou être lu par un script', 'Attributs `Secure`, `HttpOnly`, `SameSite`'],
          ],
        },
        { t: 'p', text: 'Priorités : d’abord 5 (contournement immédiat) et 1 (mot de passe en clair sur le réseau), puis 3 et 6, puis 4 et 2. Un mot de passe stocké en clair est également à corriger sans délai dès qu’une fuite est possible.' },
      ],
    },
  },
};
