import { useId, useState } from 'react';
import { ACCOUNT, PRINCIPALS, evaluate, type Decision } from './evaluator';

const PRESETS: { p: string; a: string; r: string }[] = [
  { p: 'role-app', a: 's3:GetObject', r: 'arn:aws:s3:::factures-prod/2026/F-0042.pdf' },
  { p: 'role-app', a: 's3:DeleteObject', r: 'arn:aws:s3:::factures-prod/2026/F-0042.pdf' },
  { p: 'role-app', a: 's3:GetObject', r: 'arn:aws:s3:::factures-test/a.pdf' },
  { p: 'role-ci', a: 'lambda:UpdateFunctionCode', r: `arn:aws:lambda:eu-west-3:${ACCOUNT}:function:api-catalogue` },
  { p: 'role-ci', a: 'lambda:UpdateFunctionCode', r: `arn:aws:lambda:eu-west-3:${ACCOUNT}:function:api-paiement` },
  { p: 'user-stagiaire', a: 'iam:AttachUserPolicy', r: `arn:aws:iam::${ACCOUNT}:user/stagiaire-data` },
];

const LABEL: Record<Decision, string> = {
  ALLOW: 'Autorisé',
  EXPLICIT_DENY: 'Refusé (refus explicite)',
  IMPLICIT_DENY: 'Refusé (refus implicite)',
};

export default function IamPolicyLab() {
  const ids = { p: useId(), a: useId(), r: useId() };
  const [p, setP] = useState('role-app');
  const [a, setA] = useState('s3:GetObject');
  const [r, setR] = useState('arn:aws:s3:::factures-prod/2026/F-0042.pdf');
  const [log, setLog] = useState<{ p: string; a: string; r: string; d: Decision }[]>([]);
  const principal = PRINCIPALS.find((x) => x.id === p) ?? PRINCIPALS[0]!;

  function run(pp = p, aa = a, rr = r) {
    const pr = PRINCIPALS.find((x) => x.id === pp);
    if (!pr) return;
    const d = evaluate(pr, aa.trim(), rr.trim());
    setLog((l) => [{ p: pp, a: aa.trim(), r: rr.trim(), d }, ...l].slice(0, 15));
  }

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="pol-h">
        <h3 id="pol-h">Politiques du compte {ACCOUNT} (fictif)</h3>
        {PRINCIPALS.map((pr) => (
          <details key={pr.id} open={pr.id === p}>
            <summary><strong>{pr.label}</strong></summary>
            <pre tabIndex={0}><code>{JSON.stringify({ Version: '2012-10-17', Statement: pr.statements.map((s) => ({ Sid: s.sid, Effect: s.effect, Action: s.action, Resource: s.resource })) }, null, 2)}</code></pre>
          </details>
        ))}
      </section>
      <section className="panel" aria-labelledby="req-h">
        <h3 id="req-h">Composer une requête</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            run();
          }}
        >
          <div className="form-grid">
            <label htmlFor={ids.p}>Principal</label>
            <select id={ids.p} className="input" value={p} onChange={(e) => setP(e.target.value)}>
              {PRINCIPALS.map((x) => <option key={x.id} value={x.id}>{x.label}</option>)}
            </select>
            <label htmlFor={ids.a}>Action</label>
            <input id={ids.a} className="input mono" value={a} maxLength={80} onChange={(e) => setA(e.target.value)} />
            <label htmlFor={ids.r}>Ressource (ARN)</label>
            <input id={ids.r} className="input mono" value={r} maxLength={200} onChange={(e) => setR(e.target.value)} />
          </div>
          <div className="button-row">
            <button type="submit" className="btn btn-primary">Évaluer pour {principal.id}</button>
          </div>
        </form>
        <p className="muted">Requêtes prêtes à l’emploi (prédisez le résultat avant de cliquer) :</p>
        <ul className="link-list">
          {PRESETS.map((x, i) => (
            <li key={i}>
              <button type="button" className="btn btn-small" onClick={() => { setP(x.p); setA(x.a); setR(x.r); run(x.p, x.a, x.r); }}>
                Tester
              </button>{' '}
              <code>{x.p}</code> → <code>{x.a}</code> sur <code>{x.r.replace(`:${ACCOUNT}:`, ':…:')}</code>
            </li>
          ))}
        </ul>
      </section>
      {log.length > 0 && (
        <section className="panel" aria-labelledby="dec-h" aria-live="polite">
          <h3 id="dec-h">Décisions</h3>
          <ul>
            {log.map((l, i) => (
              <li key={i}>
                <span className={`badge ${l.d === 'ALLOW' ? 'badge-ok' : 'badge-warn'}`}>{LABEL[l.d]}</span> <code>{l.p}</code> · <code>{l.a}</code> · <code className="bin">{l.r}</code>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
