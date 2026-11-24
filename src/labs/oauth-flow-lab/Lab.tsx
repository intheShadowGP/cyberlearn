import { useState } from 'react';
import { analyzeOAuth, PRESETS, type OAuthConfig } from './oauth';
import { useLabTexts, type LabTexts } from '../i18n';

const SEV: Record<string, string> = { haute: 'badge-warn', moyenne: 'badge', faible: 'badge-muted' };

const fr = {
  presets: { robuste: 'Client robuste (code + PKCE)', implicite: 'Flux implicite hérité', faible: 'Client mal configuré' } as Record<string, string>,
  severity: { haute: 'haute', moyenne: 'moyenne', faible: 'faible' } as Record<string, string>,
  messages: {
    implicit: 'Flux implicite : le jeton transite par l’URL (historique, journaux, référent) et est exposé. Préférer le code d’autorisation avec PKCE.',
    'no-pkce': 'PKCE absent : un code d’autorisation intercepté peut être échangé par un attaquant (surtout pour un client public).',
    'redirect-loose': 'redirect_uri non vérifié en correspondance exacte (joker ou préfixe) : risque de redirection ouverte et de vol du code.',
    'redirect-http': 'redirect_uri en HTTP : le code ou le jeton peut être intercepté en clair.',
    'no-state': 'Paramètre state absent : le callback n’est pas protégé contre la falsification de requête (CSRF).',
    'broad-scope': 'Portées (scopes) trop larges : demander uniquement ce dont l’application a besoin.',
  } as Record<string, string>,
  fixes: ['Utiliser le flux de code d’autorisation (au lieu du flux implicite)', 'Activer PKCE', 'Vérifier le redirect_uri en correspondance exacte', 'Imposer HTTPS sur le redirect_uri', 'Ajouter le paramètre state (anti-CSRF)', 'Limiter les portées au strict nécessaire'],
  title: 'Application cliente à auditer', config: 'Configuration', flow: 'Flux', code: 'code d’autorisation', implicit: 'implicite',
  pkce: 'PKCE', on: 'activé', absent: 'absent', state: 'state', present: 'présent', ru: 'redirect_uri', exact: 'correspondance exacte', loose: 'joker/préfixe', https: ', HTTPS', http: ', HTTP',
  scopes: 'Portées', minimal: 'minimales', broad: 'trop larges',
  findingsTitle: 'Défauts détectés', none: 'Aucun défaut : configuration OAuth conforme aux bonnes pratiques.', fixTitle: 'Corrections', fixNote: 'Corrigez les défauts jusqu’à une configuration conforme.',
};
const en: typeof fr = {
  presets: { robuste: 'Robust client (code + PKCE)', implicite: 'Legacy implicit flow', faible: 'Misconfigured client' },
  severity: { haute: 'high', moyenne: 'medium', faible: 'low' },
  messages: {
    implicit: 'Implicit flow: the token travels through the URL (history, logs, referrer) and is exposed. Prefer the authorization code with PKCE.',
    'no-pkce': 'PKCE missing: an intercepted authorization code can be exchanged by an attacker (especially for a public client).',
    'redirect-loose': 'redirect_uri not checked with an exact match (wildcard or prefix): risk of open redirect and code theft.',
    'redirect-http': 'redirect_uri over HTTP: the code or token can be intercepted in clear text.',
    'no-state': 'state parameter missing: the callback is not protected against request forgery (CSRF).',
    'broad-scope': 'Scopes too broad: request only what the application needs.',
  },
  fixes: ['Use the authorization code flow (instead of the implicit flow)', 'Enable PKCE', 'Check redirect_uri with an exact match', 'Enforce HTTPS on redirect_uri', 'Add the state parameter (anti-CSRF)', 'Limit scopes to the strict minimum'],
  title: 'Client application to audit', config: 'Configuration', flow: 'Flow', code: 'authorization code', implicit: 'implicit',
  pkce: 'PKCE', on: 'enabled', absent: 'absent', state: 'state', present: 'present', ru: 'redirect_uri', exact: 'exact match', loose: 'wildcard/prefix', https: ', HTTPS', http: ', HTTP',
  scopes: 'Scopes', minimal: 'minimal', broad: 'too broad',
  findingsTitle: 'Defects found', none: 'No defect: OAuth configuration compliant with good practices.', fixTitle: 'Fixes', fixNote: 'Fix the defects until the configuration is compliant.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function OAuthFlowLab() {
  const T = useLabTexts(TEXTS);
  const [presetId, setPresetId] = useState(PRESETS[2]!.id);
  const [cfg, setCfg] = useState<OAuthConfig>({ ...PRESETS[2]!.cfg });

  const load = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)!;
    setPresetId(id);
    setCfg({ ...p.cfg });
  };
  const findings = analyzeOAuth(cfg);

  const fixes: { done: boolean; apply: () => void }[] = [
    { done: cfg.flow === 'code', apply: () => setCfg((c) => ({ ...c, flow: 'code' })) },
    { done: cfg.pkce, apply: () => setCfg((c) => ({ ...c, pkce: true })) },
    { done: cfg.redirectExact, apply: () => setCfg((c) => ({ ...c, redirectExact: true })) },
    { done: cfg.redirectHttps, apply: () => setCfg((c) => ({ ...c, redirectHttps: true })) },
    { done: cfg.state, apply: () => setCfg((c) => ({ ...c, state: true })) },
    { done: cfg.scopeLeastPrivilege, apply: () => setCfg((c) => ({ ...c, scopeLeastPrivilege: true })) },
  ];

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="oa-sel-h">
        <h3 id="oa-sel-h">{T.title}</h3>
        <div className="form-row">
          <label htmlFor="oa-preset">{T.config}</label>
          <select id="oa-preset" className="input" value={presetId} onChange={(e) => load(e.target.value)}>
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{T.presets[p.id] ?? p.label}</option>)}
          </select>
        </div>
        <dl className="kv">
          <dt>{T.flow}</dt><dd>{cfg.flow === 'code' ? T.code : T.implicit}</dd>
          <dt>{T.pkce}</dt><dd>{cfg.pkce ? T.on : T.absent}</dd>
          <dt>{T.state}</dt><dd>{cfg.state ? T.present : T.absent}</dd>
          <dt>{T.ru}</dt><dd>{cfg.redirectExact ? T.exact : T.loose}{cfg.redirectHttps ? T.https : T.http}</dd>
          <dt>{T.scopes}</dt><dd>{cfg.scopeLeastPrivilege ? T.minimal : T.broad}</dd>
        </dl>
      </section>

      <section className="panel" aria-labelledby="oa-find-h">
        <h3 id="oa-find-h">{T.findingsTitle}</h3>
        {findings.length === 0 ? (
          <p className="callout callout-key" role="status">{T.none}</p>
        ) : (
          <ul className="lab-list" aria-live="polite">
            {findings.map((f) => (
              <li key={f.code}><span className={`badge ${SEV[f.severity]}`}>{T.severity[f.severity]}</span> {T.messages[f.code] ?? f.message}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel" aria-labelledby="oa-fix-h">
        <h3 id="oa-fix-h">{T.fixTitle}</h3>
        <ul className="lab-list">
          {fixes.map((fx, i) => (
            <li key={i}>
              <button type="button" className="btn btn-ghost" disabled={fx.done} onClick={fx.apply}>
                {fx.done ? '✓ ' : ''}{T.fixes[i]}
              </button>
            </li>
          ))}
        </ul>
        <p className="muted">{T.fixNote}</p>
      </section>
    </div>
  );
}
