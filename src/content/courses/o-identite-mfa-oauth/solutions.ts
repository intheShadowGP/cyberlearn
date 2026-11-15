import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-identite-mfa-oauth',
  practice: {
    'choix-mfa': {
      blocks: [
        { t: 'p', text: 'Le faux portail a relayé en temps réel mot de passe et code SMS, puis récupéré le cookie de session : la MFA par SMS n’est pas liée à l’origine.' },
        { t: 'list', items: ['**Administrateurs** : deux clés FIDO2 matérielles chacun, accès conditionnel exigeant FIDO2 pour les rôles d’administration.', '**Collaborateurs** : passkeys (application d’authentification ou Windows Hello), appareil géré exigé pour les données clients.', '**Nomades** : passkeys sur smartphone géré, sessions de durée limitée.', '**Récupération** : vérification d’identité par le support avec rappel au numéro de l’annuaire et validation par le manager, puis code d’accès temporaire à usage unique.'] },
      ],
    },
    'revue-oauth': {
      blocks: [
        { t: 'code', lang: 'text', code: 'GET https://idp.exemple.fr/authorize?response_type=code\n  &client_id=app-notes\n  &redirect_uri=https://notes.exemple.fr/callback\n  &scope=openid profile notes.readwrite\n  &state=8f1c…(aléatoire)\n  &code_challenge=E9Melhoa…&code_challenge_method=S256' },
        { t: 'list', items: ['Serveur : redirect_uri enregistrée exacte, flux implicite désactivé, PKCE obligatoire.', 'Scopes de messagerie et de fichiers retirés.', 'Jetons stockés en mémoire (ou via un back-end « BFF »), jamais en localStorage.'] },
      ],
    },
  },
};
