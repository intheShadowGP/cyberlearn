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
  },
};
