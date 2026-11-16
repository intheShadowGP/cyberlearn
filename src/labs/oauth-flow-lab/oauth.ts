// Moteur pur (testé) du laboratoire de sécurité d'un flux OAuth 2.0 / OpenID Connect.
// L'apprenant inspecte la configuration d'une application cliente et corrige les défauts.

export interface OAuthConfig {
  flow: 'implicit' | 'code'; // flux implicite (jeton dans l'URL) ou code d'autorisation
  pkce: boolean; // PKCE activé (indispensable pour un client public)
  state: boolean; // paramètre state (anti-CSRF du callback)
  redirectExact: boolean; // redirect_uri comparé en correspondance exacte
  redirectHttps: boolean; // redirect_uri en HTTPS
  scopeLeastPrivilege: boolean; // portées limitées au besoin
}

export interface Finding {
  code: string;
  severity: 'haute' | 'moyenne' | 'faible';
  message: string;
}

export function analyzeOAuth(cfg: OAuthConfig): Finding[] {
  const f: Finding[] = [];
  if (cfg.flow === 'implicit') {
    f.push({ code: 'implicit', severity: 'haute', message: 'Flux implicite : le jeton transite par l’URL (historique, journaux, référent) et est exposé. Préférer le code d’autorisation avec PKCE.' });
  }
  if (!cfg.pkce) {
    f.push({ code: 'no-pkce', severity: 'haute', message: 'PKCE absent : un code d’autorisation intercepté peut être échangé par un attaquant (surtout pour un client public).' });
  }
  if (!cfg.redirectExact) {
    f.push({ code: 'redirect-loose', severity: 'haute', message: 'redirect_uri non vérifié en correspondance exacte (joker ou préfixe) : risque de redirection ouverte et de vol du code.' });
  }
  if (!cfg.redirectHttps) {
    f.push({ code: 'redirect-http', severity: 'haute', message: 'redirect_uri en HTTP : le code ou le jeton peut être intercepté en clair.' });
  }
  if (!cfg.state) {
    f.push({ code: 'no-state', severity: 'moyenne', message: 'Paramètre state absent : le callback n’est pas protégé contre la falsification de requête (CSRF).' });
  }
  if (!cfg.scopeLeastPrivilege) {
    f.push({ code: 'broad-scope', severity: 'faible', message: 'Portées (scopes) trop larges : demander uniquement ce dont l’application a besoin.' });
  }
  const order = { haute: 0, moyenne: 1, faible: 2 };
  return f.sort((a, b) => order[a.severity] - order[b.severity]);
}

export function isSecure(cfg: OAuthConfig): boolean {
  return analyzeOAuth(cfg).length === 0;
}

export const PRESETS: readonly { id: string; label: string; cfg: OAuthConfig }[] = [
  { id: 'robuste', label: 'Client robuste (code + PKCE)', cfg: { flow: 'code', pkce: true, state: true, redirectExact: true, redirectHttps: true, scopeLeastPrivilege: true } },
  { id: 'implicite', label: 'Flux implicite hérité', cfg: { flow: 'implicit', pkce: false, state: true, redirectExact: true, redirectHttps: true, scopeLeastPrivilege: true } },
  { id: 'faible', label: 'Client mal configuré', cfg: { flow: 'code', pkce: false, state: false, redirectExact: false, redirectHttps: false, scopeLeastPrivilege: false } },
];
