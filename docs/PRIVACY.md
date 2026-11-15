# Politique de confidentialité

La version affichée dans l’application est la page `#/confidentialite` (`src/pages/PrivacyPage.tsx`). Ce document en reprend le contenu et indique comment chaque affirmation est vérifiée.

| Affirmation | Mise en œuvre | Vérification |
| --- | --- | --- |
| Aucun compte, aucune authentification | Aucune page ni code d’inscription ou de connexion | Revue du code (aucune route d’authentification) |
| Données uniquement sur l’appareil | IndexedDB `cyberacademie` (9 magasins) + `localStorage` (`cyberacademie.prefs.v1`) | Test e2e « confidentialité vérifiée » : une session complète ne produit **aucune requête** vers une autre origine |
| Aucun cookie | Aucun appel à `document.cookie` | Test e2e : `context.cookies()` vide |
| Aucune ressource tierce | CSP `default-src 'self'` (balise meta) ; polices système | Test e2e d’origine ; inspection de `dist/index.html` |
| Pas de synchronisation | Aucun appel réseau sortant hors fichiers du site | Même test |
| Données de progression jamais transmises à GitHub | Le service worker ne fait que des requêtes GET de fichiers statiques | Code de `sw-template.js` |
| Contrôle utilisateur | Export JSON versionné (format 2, empreinte SHA-256), import validé avec confirmation, réinitialisation, suppression complète de la base | Tests unitaires `backup.test.ts`, `storage-v2.test.ts` ; e2e sauvegarde et suppression |

## Ce que GitHub reçoit

GitHub Pages sert les fichiers du site : comme tout hébergeur, il reçoit l’adresse IP et les en-têtes HTTP du navigateur lors du téléchargement. Ces journaux relèvent de la politique de confidentialité de GitHub. Ils ne contiennent aucune donnée de progression.

## Limites

- Données non chiffrées par l’application, lisibles par quiconque accède à la session du navigateur.
- Données perdues si le stockage du site est effacé (navigation privée, nettoyage, éviction sans stockage persistant).
- Le pseudonyme est facultatif et nettoyé (lettres, chiffres, ponctuation simple, 40 caractères) ; ne pas y mettre son nom réel.
- L’empreinte d’un export détecte une altération accidentelle, pas une falsification délibérée.
