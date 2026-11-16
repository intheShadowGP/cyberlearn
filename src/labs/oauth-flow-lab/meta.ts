import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'oauth-flow-lab',
  title: 'Sécurité d’un flux OAuth 2.0 : configuration d’un client',
  category: 'web',
  level: 3,
  durationMin: 35,
  module: 'O',
  offensive: false,
  context:
    'Vous auditez la configuration OAuth 2.0 / OpenID Connect d’applications clientes. Pour chacune, un analyseur indique le flux utilisé, la présence de PKCE et du paramètre state, la vérification du redirect_uri, l’usage de HTTPS et l’étendue des portées, puis liste les défauts. Vous corrigez jusqu’à une configuration conforme aux bonnes pratiques actuelles.',
  objective: 'Comprendre les défauts de configuration OAuth les plus courants (flux implicite, absence de PKCE ou de state, redirect_uri permissif, HTTP, portées trop larges) et les corriger.',
  relatedCourses: ['o-identite-mfa-oauth'],
  steps: [
    'Sélectionnez une application cliente et lisez les défauts détectés, classés par gravité.',
    'Comprenez chaque défaut : flux implicite, PKCE absent, redirect_uri non exact, HTTP, state manquant, portées trop larges.',
    'Appliquez les corrections et observez la configuration devenir conforme.',
    'Répondez aux questions, puis lisez le débriefing sur un client OAuth moderne.',
  ],
};
