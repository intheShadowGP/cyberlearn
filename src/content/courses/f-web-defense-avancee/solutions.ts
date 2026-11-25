import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-web-defense-avancee',
  practice: {
    'modele-menace': {
      blocks: [
        { t: 'list', items: ['**Acteurs** : visiteur, client connecté, employé du back-office, prestataire de paiement, fournisseur d’audience.', '**Composants et données** : site public, API, base de données (profils, commandes), page de paiement hébergée par le prestataire, back-office.', '**Frontières de confiance** : internet → site/API ; site → base ; site → prestataire de paiement ; employé → back-office ; page → script d’audience tiers.'] },
        {
          t: 'table',
          head: ['Flux', 'Menace STRIDE', 'Contrôle', 'Test'],
          rows: [
            ['Client → API (consultation de commandes)', '**I**nformation disclosure (IDOR)', 'Autorisation par objet vérifiée à chaque requête', 'Test à deux comptes : le client A reçoit 404 sur la commande de B'],
            ['Navigateur → retour du paiement', '**T**ampering (montant ou statut modifié)', 'Statut de paiement confirmé par un appel serveur à serveur signé, jamais par le navigateur', 'Rejeu d’un retour avec un montant modifié : refus attendu'],
            ['Employé → back-office', '**S**poofing / **E**levation', 'MFA résistante à l’hameçonnage, accès par réseau d’administration, droits minimaux', 'Tentative d’accès sans MFA, puis avec un rôle insuffisant : refus attendus'],
          ],
        },
        { t: 'p', text: 'Niveau ASVS : **niveau 2** (données personnelles et historiques de commandes, exposition publique, pas de numéro de carte stocké) ; le niveau 3 serait justifié si la plateforme stockait des données de santé ou de paiement. Risques acceptés : par exemple le script d’audience tiers (propriétaire : responsable marketing ; mesure compensatoire : CSP et SRI, revue trimestrielle) et la dépendance au prestataire de paiement (propriétaire : responsable sécurité ; clause contractuelle et surveillance).' },
      ],
    },
    'revue-proxy-cache': {
      blocks: [
        {
          t: 'table',
          head: ['Point', 'Attaque', 'Correction'],
          rows: [
            ['1', '**Tromperie de cache** : `/compte/profil/x.css` fait stocker une page privée, lisible ensuite par d’autres', 'Cache fondé sur le type réel de la réponse et non sur l’extension ; `Cache-Control: private` ou `no-store` sur le contenu dynamique ; routage strict'],
            ['2', '**Désynchronisation HTTP** (CL.TE) : proxy et serveur découpent différemment une requête ambiguë', 'HTTP/2 de bout en bout, rejet des requêtes portant à la fois `Content-Length` et `Transfer-Encoding`, composants à jour'],
            ['3', '**Injection de l’en-tête Host** : lien de réinitialisation envoyé à la victime vers le domaine de l’attaquant', 'Nom de domaine fixé par la configuration ; liste d’hôtes autorisés'],
            ['4', '**Redirection ouverte** : lien légitime menant vers un site contrôlé par l’attaquant', 'Liste d’adresses autorisées ou chemins relatifs uniquement'],
            ['5', '**Empoisonnement de cache** : une entrée hors clé de cache est reflétée dans une page mise en cache', 'Ne pas refléter `X-Forwarded-Host`, ou l’inclure dans la clé de cache ; ne pas mettre en cache une page qui en dépend'],
          ],
        },
        { t: 'p', text: 'Tests et détection : rejouer l’accès à `/compte/profil/x.css` sans cookie et vérifier qu’aucun contenu privé n’est renvoyé ; envoyer une requête avec `Host` modifié à la fonction de réinitialisation et vérifier que le lien garde le domaine officiel ; alerter sur les requêtes comportant les deux en-têtes de longueur ou sur les réponses 400 anormalement nombreuses du serveur.' },
      ],
    },
    'durcir-csp': {
      blocks: [
        {
          t: 'table',
          head: ['Faiblesse', 'Conséquence'],
          rows: [
            ['`unsafe-inline` dans `script-src`', 'Tout script injecté en ligne s’exécute : la CSP n’arrête plus la XSS'],
            ['Liste d’hôtes (`cdn.exemple`, `*.analytics.exemple`)', 'Un point d’entrée hébergé (ancienne bibliothèque, JSONP) ou un sous-domaine compromis suffit à contourner la politique'],
            ['`img-src *`', 'Exfiltration de données par requêtes d’images vers n’importe quel domaine'],
            ['Pas de `object-src`, `base-uri`, `frame-ancestors`', 'Détournement de la base des URL, intégration dans un cadre (clickjacking)'],
            ['Pas de Fetch Metadata', 'Aucune isolation côté serveur des requêtes intersites'],
          ],
        },
        { t: 'code', lang: 'text', caption: 'Politique cible', code: "Content-Security-Policy:\n  script-src 'nonce-<aléatoire par réponse>' 'strict-dynamic'; object-src 'none';\n  base-uri 'none'; frame-ancestors 'none'; img-src 'self' https://cdn.exemple;\n  require-trusted-types-for 'script'; report-to csp-rapports" },
        { t: 'list', items: ['Code : déplacer les trois gestionnaires `onclick` vers `addEventListener` ; ajouter le nonce aux balises de script légitimes ; ajouter `integrity` aux bibliothèques du CDN ; charger le script d’audience par un script approuvé (ou le supprimer de la page de paiement).', 'Serveur : générer un nonce différent à chaque réponse ; refuser par défaut les requêtes intersites qui modifient l’état (`Sec-Fetch-Site`) ; cookie `__Host-session; Secure; HttpOnly; SameSite=Lax`.', 'Déploiement : politique d’abord en `Content-Security-Policy-Report-Only`, collecte des rapports, correction des violations légitimes, puis mode bloquant, avec rapports conservés pour détecter régressions et attaques.'] },
        { t: 'callout', kind: 'tip', text: 'Pour une page de paiement, le meilleur script tiers est celui qu’on n’y charge pas : déplacer la mesure d’audience hors de cette page réduit durablement la surface d’attaque.' },
      ],
    },
  },
};
