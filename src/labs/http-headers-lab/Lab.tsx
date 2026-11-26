import { useId, useMemo, useState } from 'react';
import { SAMPLE_RESPONSE, audit, type IssueCode } from './audit';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Réponse HTTP d’un site (fictive, modifiable)',
  label: 'Réponse HTTP à auditer (vous pouvez la modifier)',
  note: 'Modifiez les en-têtes pour voir l’audit se mettre à jour : ajoutez par exemple `Strict-Transport-Security: max-age=31536000`.',
  reset: 'Rétablir la réponse d’origine',
  auditTitle: 'Résultat de l’audit',
  none: 'Aucun défaut détecté.',
  count: 'Défauts détectés',
  issues: {
    'no-hsts': 'Strict-Transport-Security absent : le navigateur n’impose pas HTTPS',
    'no-csp': 'Content-Security-Policy absente : aucune limite sur les scripts exécutables',
    'no-nosniff': 'X-Content-Type-Options: nosniff absent : le navigateur peut deviner le type des fichiers',
    'no-referrer': 'Referrer-Policy absente : l’adresse complète peut fuiter vers d’autres sites',
    'cookie-secure': 'Cookie sans attribut Secure : transmissible en HTTP clair',
    'cookie-httponly': 'Cookie sans attribut HttpOnly : lisible par un script injecté',
    'cookie-samesite': 'Cookie sans attribut SameSite : envoyé dans des requêtes inter-sites',
    'server-version': 'En-tête Server indiquant une version : aide à cibler les failles connues',
    'powered-by': 'En-tête X-Powered-By présent : révèle la technologie utilisée',
  } as Record<IssueCode, string>,
};
const en: typeof fr = {
  title: 'A site’s HTTP response (fictional, editable)',
  label: 'HTTP response to audit (you can edit it)',
  note: 'Edit the headers to see the audit update: for example add `Strict-Transport-Security: max-age=31536000`.',
  reset: 'Restore the original response',
  auditTitle: 'Audit result',
  none: 'No flaw detected.',
  count: 'Flaws detected',
  issues: {
    'no-hsts': 'Strict-Transport-Security missing: the browser does not enforce HTTPS',
    'no-csp': 'Content-Security-Policy missing: no limit on executable scripts',
    'no-nosniff': 'X-Content-Type-Options: nosniff missing: the browser may guess file types',
    'no-referrer': 'Referrer-Policy missing: the full address may leak to other sites',
    'cookie-secure': 'Cookie without the Secure attribute: can travel over plain HTTP',
    'cookie-httponly': 'Cookie without the HttpOnly attribute: readable by an injected script',
    'cookie-samesite': 'Cookie without the SameSite attribute: sent in cross-site requests',
    'server-version': 'Server header showing a version: helps target known flaws',
    'powered-by': 'X-Powered-By header present: reveals the technology used',
  },
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function HttpHeadersLab() {
  const T = useLabTexts(TEXTS);
  const [raw, setRaw] = useState(SAMPLE_RESPONSE);
  const id = useId();
  const issues = useMemo(() => audit(raw), [raw]);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="hh-t">
        <h3 id="hh-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <label htmlFor={id}>{T.label}</label>
        <textarea id={id} className="mono" rows={10} value={raw} onChange={(e) => setRaw(e.target.value)} spellCheck={false} />
        <button type="button" className="btn btn-ghost" onClick={() => setRaw(SAMPLE_RESPONSE)}>{T.reset}</button>
      </section>
      <section className="panel" aria-labelledby="hh-a">
        <h3 id="hh-a">{T.auditTitle}</h3>
        <div aria-live="polite">
          <p><strong>{T.count}</strong> : {issues.length}</p>
          {issues.length === 0 ? <p>{T.none}</p> : <ul>{issues.map((c, i) => <li key={`${c}-${i}`}>{T.issues[c]}</li>)}</ul>}
        </div>
      </section>
    </div>
  );
}
