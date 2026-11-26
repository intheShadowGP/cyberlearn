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
    'vol-session': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Événement', 'Lecture'],
          rows: [
            ['08:55', 'Connexion normale avec passkey sur un appareil géré', 'Référence : usage habituel'],
            ['09:40', 'Connexion depuis un hébergeur à l’étranger avec un code MFA, nouvel appareil', '**Voyage impossible** et facteur non résistant : vol d’identifiants et de code par un proxy d’hameçonnage probable'],
            ['09:44', 'Règle de transfert des messages « facture » vers l’extérieur', '**Persistance** et collecte d’informations financières'],
            ['09:50', 'Autorisation d’une application malveillante (Mail.Read, offline_access)', '**Consentement abusif** : accès durable, indépendant du mot de passe'],
            ['10:05', 'Courriel de changement de coordonnées bancaires', '**Fraude au faux virement** à partir de la boîte légitime'],
          ],
        },
        { t: 'list', ordered: true, items: ['**Révoquer** les sessions et jetons de rafraîchissement du compte, **supprimer** le consentement de l’application et la règle de transfert.', '**Réinitialiser** le mot de passe et les facteurs, ré-enrôler une passkey.', '**Prévenir** la comptabilité et les destinataires du courriel frauduleux ; bloquer tout changement de coordonnées sans vérification par rappel.', '**Rechercher** les autres comptes touchés par le même modèle (règles, applications, connexions de l’hébergeur).', '**Préserver** les journaux et déclarer l’incident selon les obligations.'] },
        { t: 'list', items: ['**Prévention** : facteurs résistants à l’hameçonnage (passkeys, FIDO2) imposés, consentement des applications réservé aux administrateurs, jetons courts liés à l’appareil.', '**Détection** : alertes sur le voyage impossible, les nouvelles règles de transfert, les autorisations d’applications et les connexions depuis des hébergeurs.'] },
      ],
    },
  },
};
