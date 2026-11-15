# Sécurité de CyberAcadémie

Ce document décrit le modèle de menace de la plateforme, les mesures en place et leurs limites connues.

## Modèle de menace

CyberAcadémie est un site **statique** hébergé sur GitHub Pages. Il n’a ni serveur applicatif, ni compte utilisateur, ni base de données distante. Les principaux risques sont les suivants.

| Risque | Mesure |
| --- | --- |
| Injection de script (XSS) via le contenu ou un fichier importé | Aucun rendu de HTML brut (`dangerouslySetInnerHTML`, `innerHTML`, `eval` absents) ; le contenu est structuré en blocs et le texte inline passe par un analyseur qui ne produit que des nœuds React (`src/components/Inline.tsx`) ; CSP stricte |
| Script tiers compromis (chaîne d’approvisionnement) | Aucune ressource externe chargée à l’exécution (polices système, icônes SVG inline) ; CSP `default-src 'self'` ; `npm audit` bloquant en CI ; 0 vulnérabilité connue à la date de livraison |
| Fichier de sauvegarde malveillant | Taille plafonnée (5 Mo), analyse JSON neutralisant `__proto__`, `constructor`, `prototype`, validation champ par champ avec types, bornes et liste blanche d’identifiants, reconstruction d’objets neufs (`src/lib/backup.ts`), remplacement atomique en une transaction |
| Corruption ou perte de progression | Transactions IndexedDB atomiques pour chaque opération (`withTx`), schéma versionné avec migrations, demande de stockage persistant, export manuel |
| Fuite de données personnelles | Aucune donnée ne quitte le navigateur ; ni cookie ni mesure d’audience ; `Referrer-Policy: no-referrer` (balise meta) ; liens externes en `rel="noopener noreferrer"` |
| Service worker détournant des requêtes | Le SW n’intercepte que les requêtes GET de même origine dans son périmètre ; il ne met jamais en cache de réponse cross-origin |
| Usage malveillant des contenus offensifs | Laboratoires uniquement simulés (moteur SQL fictif, terminal en lecture seule, données fictives sur domaines `.example` et plages RFC 5737) ; rappels légaux ; débriefing défensif obligatoire (vérifié par le validateur) |

## Politique de sécurité du contenu

Injectée au build dans `index.html` (`vite.config.ts`) :

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;
font-src 'self'; connect-src 'self'; manifest-src 'self'; worker-src 'self';
object-src 'none'; base-uri 'self'; form-action 'none'
```

- Aucun script inline : le service worker est enregistré depuis le bundle (`src/sw/register.ts`).
- `style-src 'self'` sans `unsafe-inline` : les rares styles dynamiques (largeur des barres de progression) sont appliqués par React via le CSSOM, qui n’est pas soumis à cette directive.

### Limites dues à GitHub Pages

GitHub Pages ne permet pas de définir des en-têtes HTTP. La CSP est donc une balise `<meta>`, ce qui implique :

- `frame-ancestors` est **ignoré** en balise meta : la protection contre le détournement de clic (clickjacking) n’est pas assurée par la CSP. Le site ne contient aucune action sensible déclenchable en un clic depuis un tiers (pas de compte, pas de session), ce qui limite l’impact. Un hébergement permettant les en-têtes HTTP devrait ajouter `frame-ancestors 'none'`.
- `report-uri` / `report-to` et `sandbox` sont également ignorés.
- `Strict-Transport-Security`, `X-Content-Type-Options` et `Permissions-Policy` dépendent de GitHub Pages (HTTPS est imposé lorsque l’option « Enforce HTTPS » est activée).

## Séparation des réponses

Les bonnes réponses et explications ne sont **pas présentes dans l’interface avant validation** :

- `courses/<id>/body.ts` (leçon, questions) ne contient aucun champ de réponse ; le validateur (`src/content/validate.ts`) fait échouer le build si un champ `correct`, `accepted`, `explanation`, `whyWrong`, `model`, `criteria`, `solution` ou `answer` y apparaît.
- `corrections.ts` est un chunk séparé, **chargé dans la page** uniquement au clic sur « Valider ». Un test end-to-end vérifie que la page ne demande aucun chunk `corrections-*.js` et qu’aucune explication n’est dans le DOM avant validation. Attention : le service worker, lui, télécharge tous les fichiers (corrections comprises) dans le cache du navigateur à l’installation, pour le fonctionnement hors ligne.
- Les corrigés des exercices pratiques (`solutions.ts`) forment un troisième chunk, afin qu’afficher un corrigé ne charge pas les réponses du questionnaire.

**Limite assumée** : sur un site statique, tous les fichiers publiés sont téléchargeables. Un utilisateur déterminé peut lire les chunks de corrections. Cette séparation empêche la consultation accidentelle ; ce n’est pas un secret, et la plateforme ne délivre aucune certification dont l’intégrité en dépendrait.

## Dépendances

- Exécution : `react`, `react-dom`, `react-router-dom`, versions figées.
- `vite-plugin-pwa` a été écarté (dépendances de build vulnérables via `workbox-build`) au profit d’un service worker généré par un plugin Vite de 60 lignes (`vite.config.ts`, `src/sw/sw-template.js`).
- La CI exécute `npm audit --audit-level=high`. Pour renforcer la chaîne d’approvisionnement, il est recommandé d’épingler les actions GitHub par empreinte de commit (SHA) plutôt que par étiquette de version.

## Signaler une vulnérabilité

Merci de ne pas ouvrir de ticket public : utilisez la fonction « Report a vulnerability » (avis de sécurité privé) du dépôt GitHub.
