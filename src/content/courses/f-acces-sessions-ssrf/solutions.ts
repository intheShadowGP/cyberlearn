import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-acces-sessions-ssrf',
  practice: {
    'audit-api': {
      blocks: [
        {
          t: 'table',
          head: ['Ligne', 'Vulnérabilité', 'Gravité', 'Correction'],
          rows: [
            ['1', 'Comportement attendu', '—', '—'],
            ['2', 'IDOR : lecture des factures d’un autre client', 'Élevée (données personnelles et financières)', 'Ignorer l’identifiant de l’URL ou vérifier qu’il correspond au client de la session'],
            ['3', 'Affectation de masse : élévation au rôle admin', 'Critique', 'Liste explicite des champs modifiables par l’utilisateur ; le rôle ne se change que par une route d’administration'],
            ['4', 'SSRF vers le service de métadonnées', 'Critique (identifiants cloud)', 'Liste d’autorisation, vérification de l’adresse résolue, filtrage en sortie, IMDSv2'],
            ['5', 'CORS reflétant toute origine avec identifiants', 'Élevée', 'Liste fixe des origines autorisées'],
          ],
        },
        { t: 'code', lang: 'typescript', caption: 'Tests de non-régression', code: 'test(\'un client ne lit pas les factures d’un autre\', async () => {\n  const r = await api.as(clientA).get(\'/api/clients/18/factures\');\n  expect([403, 404]).toContain(r.status);\n});\n\ntest(\'le rôle n’est pas modifiable par le profil\', async () => {\n  await api.as(clientA).patch(\'/api/profil\', { role: \'admin\' });\n  expect((await api.as(clientA).get(\'/api/profil\')).body.role).toBe(\'client\');\n});' },
      ],
    },
    'exigences-asvs': {
      blocks: [
        { t: 'p', text: 'Niveau 2 : l’application traite des données de santé et des coordonnées bancaires ; le niveau 2 est recommandé pour les applications qui manipulent des données sensibles, le niveau 3 étant réservé aux applications les plus critiques.' },
        {
          t: 'table',
          head: ['Exigence', 'Vérification'],
          rows: [
            ['Un nouvel identifiant de session est émis à l’authentification et à la réauthentification', 'Test automatisé comparant les cookies avant et après connexion'],
            ['Les cookies de session portent `Secure`, `HttpOnly`, `SameSite=Lax` et le préfixe `__Host-`', 'Inspection des en-têtes en recette'],
            ['La session expire après 15 minutes d’inactivité et est invalidée côté serveur à la déconnexion', 'Rejeu d’un cookie après déconnexion : refus attendu'],
            ['Chaque accès à un remboursement ou un message vérifie que l’objet appartient à l’adhérent', 'Tests à deux comptes sur toutes les routes'],
            ['La modification du RIB exige une réauthentification ou une confirmation forte', 'Test fonctionnel et revue de code'],
            ['Toute requête qui modifie l’état exige un jeton anti-CSRF valide et une origine autorisée', 'Rejeu sans jeton et depuis une autre origine : refus attendu'],
          ],
        },
      ],
    },
    'revue-oauth': {
      blocks: [
        {
          t: 'table',
          head: ['Point', 'Faiblesse', 'Attaque'],
          rows: [
            ['1', '`redirect_uri` avec joker', 'L’attaquant redirige le code ou le jeton vers un chemin ou un domaine qu’il contrôle et se connecte à la place de la victime'],
            ['2', 'Flux implicite (`response_type=token`)', 'Le jeton figure dans l’URL : fuite par l’historique, le Referer ou un script tiers'],
            ['3', 'Pas de `state`, pas de PKCE', 'CSRF de connexion (la victime est connectée au compte de l’attaquant) et interception du code d’autorisation'],
            ['4', 'Jeton d’identité accepté sans vérification', 'N’importe quel jeton forgé, même d’un autre émetteur ou expiré, ouvre le compte de son choix'],
            ['5', 'Identifiant de session conservé après authentification', 'Fixation de session : l’identifiant imposé avant la connexion devient authentifié'],
          ],
        },
        { t: 'list', items: ['Flux par **code d’autorisation avec PKCE**, `redirect_uri` enregistrée et comparée **exactement**, `state` lié à la session, `nonce` dans la requête.', 'Validation du jeton d’identité : signature (clés publiées par le fournisseur), `iss`, `aud`, `exp`, `nonce` ; correspondance du compte sur l’identifiant stable (`sub`) plutôt que sur le seul courriel.', 'Nouvel identifiant de session à l’ouverture de session ; scopes minimaux.'] },
        { t: 'p', text: 'Tests : un test qui rejette une `redirect_uri` différente d’un seul caractère, et un test qui rejette un jeton d’identité dont la signature, l’audience ou l’expiration est altérée. Surveillance : alertes sur les échecs de validation de jeton et sur les `redirect_uri` inattendues.' },
      ],
    },
  },
};
