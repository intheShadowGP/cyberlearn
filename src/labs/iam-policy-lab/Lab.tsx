import { useId, useState } from 'react';
import { ACCOUNT, PRINCIPALS, evaluate, type Decision } from './evaluator';
import { fill, useLabTexts, type LabTexts } from '../i18n';

const PRESETS: { p: string; a: string; r: string }[] = [
  { p: 'role-app', a: 's3:GetObject', r: 'arn:aws:s3:::factures-prod/2026/F-0042.pdf' },
  { p: 'role-app', a: 's3:DeleteObject', r: 'arn:aws:s3:::factures-prod/2026/F-0042.pdf' },
  { p: 'role-app', a: 's3:GetObject', r: 'arn:aws:s3:::factures-test/a.pdf' },
  { p: 'role-ci', a: 'lambda:UpdateFunctionCode', r: `arn:aws:lambda:eu-west-3:${ACCOUNT}:function:api-catalogue` },
  { p: 'role-ci', a: 'lambda:UpdateFunctionCode', r: `arn:aws:lambda:eu-west-3:${ACCOUNT}:function:api-paiement` },
  { p: 'user-stagiaire', a: 'iam:AttachUserPolicy', r: `arn:aws:iam::${ACCOUNT}:user/stagiaire-data` },
];

const fr = {
  labels: {
    'role-app': 'Rôle de l’application web (role/app-factures)',
    'user-stagiaire': 'Utilisateur IAM user/stagiaire-data',
    'role-ci': 'Rôle de déploiement CI (role/ci-deploy)',
  } as Record<string, string>,
  decisions: { ALLOW: 'Autorisé', EXPLICIT_DENY: 'Refusé (refus explicite)', IMPLICIT_DENY: 'Refusé (refus implicite)' } as Record<Decision, string>,
  policies: 'Politiques du compte {account} (fictif)', compose: 'Composer une requête', principal: 'Principal', action: 'Action', resource: 'Ressource (ARN)',
  evaluate: 'Évaluer pour {id}', presets: 'Requêtes prêtes à l’emploi (prédisez le résultat avant de cliquer) :', test: 'Tester', on: 'sur', decisionsTitle: 'Décisions',
};
const en: typeof fr = {
  labels: {
    'role-app': 'Web application role (role/app-factures)',
    'user-stagiaire': 'IAM user user/stagiaire-data',
    'role-ci': 'CI deployment role (role/ci-deploy)',
  },
  decisions: { ALLOW: 'Allowed', EXPLICIT_DENY: 'Denied (explicit deny)', IMPLICIT_DENY: 'Denied (implicit deny)' },
  policies: 'Policies of account {account} (fictional)', compose: 'Compose a request', principal: 'Principal', action: 'Action', resource: 'Resource (ARN)',
  evaluate: 'Evaluate for {id}', presets: 'Ready-made requests (predict the result before clicking):', test: 'Test', on: 'on', decisionsTitle: 'Decisions',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function IamPolicyLab() {
  const T = useLabTexts(TEXTS);
  const ids = { p: useId(), a: useId(), r: useId() };
  const [p, setP] = useState('role-app');
  const [a, setA] = useState('s3:GetObject');
  const [r, setR] = useState('arn:aws:s3:::factures-prod/2026/F-0042.pdf');
  const [log, setLog] = useState<{ p: string; a: string; r: string; d: Decision }[]>([]);
  const principal = PRINCIPALS.find((x) => x.id === p) ?? PRINCIPALS[0]!;
  const label = (id: string, fallback: string) => T.labels[id] ?? fallback;

  function run(pp = p, aa = a, rr = r) {
    const pr = PRINCIPALS.find((x) => x.id === pp);
    if (!pr) return;
    const d = evaluate(pr, aa.trim(), rr.trim());
    setLog((l) => [{ p: pp, a: aa.trim(), r: rr.trim(), d }, ...l].slice(0, 15));
  }

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="pol-h">
        <h3 id="pol-h">{fill(T.policies, { account: ACCOUNT })}</h3>
        {PRINCIPALS.map((pr) => (
          <details key={pr.id} open={pr.id === p}>
            <summary><strong>{label(pr.id, pr.label)}</strong></summary>
            <pre tabIndex={0}><code>{JSON.stringify({ Version: '2012-10-17', Statement: pr.statements.map((s) => ({ Sid: s.sid, Effect: s.effect, Action: s.action, Resource: s.resource })) }, null, 2)}</code></pre>
          </details>
        ))}
      </section>
      <section className="panel" aria-labelledby="req-h">
        <h3 id="req-h">{T.compose}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            run();
          }}
        >
          <div className="form-grid">
            <label htmlFor={ids.p}>{T.principal}</label>
            <select id={ids.p} className="input" value={p} onChange={(e) => setP(e.target.value)}>
              {PRINCIPALS.map((x) => <option key={x.id} value={x.id}>{label(x.id, x.label)}</option>)}
            </select>
            <label htmlFor={ids.a}>{T.action}</label>
            <input id={ids.a} className="input mono" value={a} maxLength={80} onChange={(e) => setA(e.target.value)} />
            <label htmlFor={ids.r}>{T.resource}</label>
            <input id={ids.r} className="input mono" value={r} maxLength={200} onChange={(e) => setR(e.target.value)} />
          </div>
          <div className="button-row">
            <button type="submit" className="btn btn-primary">{fill(T.evaluate, { id: principal.id })}</button>
          </div>
        </form>
        <p className="muted">{T.presets}</p>
        <ul className="link-list">
          {PRESETS.map((x, i) => (
            <li key={i}>
              <button type="button" className="btn btn-small" onClick={() => { setP(x.p); setA(x.a); setR(x.r); run(x.p, x.a, x.r); }}>
                {T.test}
              </button>{' '}
              <code>{x.p}</code> → <code>{x.a}</code> {T.on} <code>{x.r.replace(`:${ACCOUNT}:`, ':…:')}</code>
            </li>
          ))}
        </ul>
      </section>
      {log.length > 0 && (
        <section className="panel" aria-labelledby="dec-h" aria-live="polite">
          <h3 id="dec-h">{T.decisionsTitle}</h3>
          <ul>
            {log.map((l, i) => (
              <li key={i}>
                <span className={`badge ${l.d === 'ALLOW' ? 'badge-ok' : 'badge-warn'}`}>{T.decisions[l.d]}</span> <code>{l.p}</code> · <code>{l.a}</code> · <code className="bin">{l.r}</code>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
