import { useId, useState } from 'react';
import { runParameterized, runVulnerable, type QueryResult } from './engine';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  appTitle: 'Application fictive « Intranet Médiathèque »', url: 'https://intranet.mediatheque.example/login',
  fixed: 'Version corrigée (requête paramétrée)', username: 'Identifiant', password: 'Mot de passe', submit: 'Se connecter',
  note: 'Le champ mot de passe est volontairement visible pour faciliter l’exercice. Par simplicité, cette application fictive compare le mot de passe en clair : une seconde faille à relever.',
  executed: 'Ce que le serveur exécute',
  afterComment: 'Tout ce qui suit', isComment: 'est un', commentWord: 'commentaire', ignored: 'ignoré par le moteur :',
  union: 'Clause {u} détectée : sur un vrai moteur, elle permettrait d’ajouter au résultat des lignes d’une autre table (extraction de données).',
  sqlError: 'Erreur SQL :', errorLeak: '(Un message d’erreur détaillé renvoyé à l’utilisateur est en soi une fuite d’information.)',
  accepted: 'Connexion acceptée', asUser: 'en tant que', rowsCaption: 'Lignes renvoyées', noRows: 'Aucune ligne : connexion refusée.',
  journal: 'Journal de vos essais', modeFixed: 'corrigé', modeVuln: 'vulnérable', loginLabel: 'identifiant', okText: 'accepté', koText: 'refusé',
  roles: { administrateur: 'administrateur', utilisateur: 'utilisateur' } as Record<string, string>,
};
const en: typeof fr = {
  appTitle: 'Fictional application “Library Intranet”', url: 'https://intranet.library.example/login',
  fixed: 'Fixed version (parameterized query)', username: 'Username', password: 'Password', submit: 'Log in',
  note: 'The password field is deliberately visible to make the exercise easier. For simplicity, this fictional application compares the password in clear text: a second flaw to spot.',
  executed: 'What the server executes',
  afterComment: 'Everything after', isComment: 'is a', commentWord: 'comment', ignored: 'ignored by the engine:',
  union: 'Clause {u} detected: on a real engine, it would let you add rows from another table to the result (data extraction).',
  sqlError: 'SQL error:', errorLeak: '(A detailed error message returned to the user is itself an information leak.)',
  accepted: 'Login accepted', asUser: 'as', rowsCaption: 'Returned rows', noRows: 'No rows: login refused.',
  journal: 'Log of your attempts', modeFixed: 'fixed', modeVuln: 'vulnerable', loginLabel: 'username', okText: 'accepted', koText: 'refused',
  roles: { administrateur: 'administrator', utilisateur: 'user' },
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function SqliLab() {
  const T = useLabTexts(TEXTS);
  const ids = { l: useId(), p: useId() };
  const [login, setLogin] = useState('claire');
  const [password, setPassword] = useState('');
  const [safe, setSafe] = useState(false);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [history, setHistory] = useState<{ fixed: boolean; login: string; ok: boolean }[]>([]);

  function submit() {
    const r = safe ? runParameterized(login, password) : runVulnerable(login, password);
    setResult(r);
    setHistory((h) => [{ fixed: safe, login, ok: r.rows.length > 0 }, ...h].slice(0, 10));
  }
  const role = (r: string) => T.roles[r] ?? r;
  const [uBefore, uAfter] = T.union.split('{u}');

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="app-h">
        <h3 id="app-h">{T.appTitle}</h3>
        <div className="sim-browser">
          <div className="sim-browser-bar">
            <span aria-hidden="true">🔒</span> {T.url}
            <label className="check" style={{ margin: 0, marginLeft: 'auto' }}>
              <input type="checkbox" checked={safe} onChange={(e) => setSafe(e.target.checked)} /> {T.fixed}
            </label>
          </div>
          <form
            className="sim-browser-body"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div className="form-grid">
              <label htmlFor={ids.l}>{T.username}</label>
              <input id={ids.l} className="input" value={login} maxLength={120} autoComplete="off" spellCheck={false} onChange={(e) => setLogin(e.target.value)} />
              <label htmlFor={ids.p}>{T.password}</label>
              <input id={ids.p} className="input" type="text" value={password} maxLength={120} autoComplete="off" spellCheck={false} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-row">
              <button type="submit" className="btn btn-primary">{T.submit}</button>
            </div>
          </form>
        </div>
        <p className="muted">{T.note}</p>
      </section>

      {result && (
        <section className="panel" aria-labelledby="res-h" aria-live="polite">
          <h3 id="res-h">{T.executed}</h3>
          <pre tabIndex={0}><code>{result.sql}</code></pre>
          {result.comment && (
            <p className="callout callout-warn">
              {T.afterComment} <code>{result.comment.slice(0, 2)}</code> {T.isComment} <strong>{T.commentWord}</strong> {T.ignored}{' '}
              <code>{result.comment}</code>
            </p>
          )}
          {result.union && <p className="callout callout-warn">{uBefore}<code>UNION</code>{uAfter}</p>}
          {result.error ? (
            <p className="error">{T.sqlError} {result.error}. <span className="muted">{T.errorLeak}</span></p>
          ) : result.rows.length ? (
            <>
              <p className="success"><strong>{T.accepted}</strong> {T.asUser} <code>{result.rows[0]?.login}</code> ({role(result.rows[0]?.role ?? '')}).</p>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only">{T.rowsCaption}</caption>
                  <thead><tr><th scope="col">id</th><th scope="col">login</th><th scope="col">role</th></tr></thead>
                  <tbody>{result.rows.map((r) => <tr key={r.id}><td>{r.id}</td><td>{r.login}</td><td>{role(r.role)}</td></tr>)}</tbody>
                </table>
              </div>
            </>
          ) : (
            <p>{T.noRows}</p>
          )}
        </section>
      )}

      {history.length > 0 && (
        <section className="panel" aria-labelledby="hist-h">
          <h3 id="hist-h">{T.journal}</h3>
          <ul>
            {history.map((h, i) => (
              <li key={i}>
                [{h.fixed ? T.modeFixed : T.modeVuln}] {T.loginLabel} <code>{h.login}</code> → {h.ok ? T.okText : T.koText}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

