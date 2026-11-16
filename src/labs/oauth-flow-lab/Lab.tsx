import { useState } from 'react';
import { analyzeOAuth, PRESETS, type OAuthConfig } from './oauth';

const SEV: Record<string, string> = { haute: 'badge-warn', moyenne: 'badge', faible: 'badge-muted' };

export default function OAuthFlowLab() {
  const [presetId, setPresetId] = useState(PRESETS[2]!.id);
  const [cfg, setCfg] = useState<OAuthConfig>({ ...PRESETS[2]!.cfg });

  const load = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)!;
    setPresetId(id);
    setCfg({ ...p.cfg });
  };
  const findings = analyzeOAuth(cfg);

  const fixes: { label: string; done: boolean; apply: () => void }[] = [
    { label: 'Utiliser le flux de code d’autorisation (au lieu du flux implicite)', done: cfg.flow === 'code', apply: () => setCfg((c) => ({ ...c, flow: 'code' })) },
    { label: 'Activer PKCE', done: cfg.pkce, apply: () => setCfg((c) => ({ ...c, pkce: true })) },
    { label: 'Vérifier le redirect_uri en correspondance exacte', done: cfg.redirectExact, apply: () => setCfg((c) => ({ ...c, redirectExact: true })) },
    { label: 'Imposer HTTPS sur le redirect_uri', done: cfg.redirectHttps, apply: () => setCfg((c) => ({ ...c, redirectHttps: true })) },
    { label: 'Ajouter le paramètre state (anti-CSRF)', done: cfg.state, apply: () => setCfg((c) => ({ ...c, state: true })) },
    { label: 'Limiter les portées au strict nécessaire', done: cfg.scopeLeastPrivilege, apply: () => setCfg((c) => ({ ...c, scopeLeastPrivilege: true })) },
  ];

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="oa-sel-h">
        <h3 id="oa-sel-h">Application cliente à auditer</h3>
        <div className="form-row">
          <label htmlFor="oa-preset">Configuration</label>
          <select id="oa-preset" className="input" value={presetId} onChange={(e) => load(e.target.value)}>
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
        </div>
        <dl className="kv">
          <dt>Flux</dt><dd>{cfg.flow === 'code' ? 'code d’autorisation' : 'implicite'}</dd>
          <dt>PKCE</dt><dd>{cfg.pkce ? 'activé' : 'absent'}</dd>
          <dt>state</dt><dd>{cfg.state ? 'présent' : 'absent'}</dd>
          <dt>redirect_uri</dt><dd>{cfg.redirectExact ? 'correspondance exacte' : 'joker/préfixe'}{cfg.redirectHttps ? ', HTTPS' : ', HTTP'}</dd>
          <dt>Portées</dt><dd>{cfg.scopeLeastPrivilege ? 'minimales' : 'trop larges'}</dd>
        </dl>
      </section>

      <section className="panel" aria-labelledby="oa-find-h">
        <h3 id="oa-find-h">Défauts détectés</h3>
        {findings.length === 0 ? (
          <p className="callout callout-key" role="status">Aucun défaut : configuration OAuth conforme aux bonnes pratiques.</p>
        ) : (
          <ul className="lab-list" aria-live="polite">
            {findings.map((f) => (
              <li key={f.code}><span className={`badge ${SEV[f.severity]}`}>{f.severity}</span> {f.message}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel" aria-labelledby="oa-fix-h">
        <h3 id="oa-fix-h">Corrections</h3>
        <ul className="lab-list">
          {fixes.map((fx, i) => (
            <li key={i}>
              <button type="button" className="btn btn-ghost" disabled={fx.done} onClick={fx.apply}>
                {fx.done ? '✓ ' : ''}{fx.label}
              </button>
            </li>
          ))}
        </ul>
        <p className="muted">Corrigez les défauts jusqu’à une configuration conforme.</p>
      </section>
    </div>
  );
}
