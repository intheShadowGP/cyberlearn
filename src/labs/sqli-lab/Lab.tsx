import { useId, useState } from 'react';
import { runParameterized, runVulnerable, type QueryResult } from './engine';

export default function SqliLab() {
  const ids = { l: useId(), p: useId() };
  const [login, setLogin] = useState('claire');
  const [password, setPassword] = useState('');
  const [safe, setSafe] = useState(false);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [history, setHistory] = useState<{ mode: string; login: string; ok: boolean }[]>([]);

  function submit() {
    const r = safe ? runParameterized(login, password) : runVulnerable(login, password);
    setResult(r);
    setHistory((h) => [{ mode: safe ? 'corrigé' : 'vulnérable', login, ok: r.rows.length > 0 }, ...h].slice(0, 10));
  }

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="app-h">
        <h3 id="app-h">Application fictive « Intranet Médiathèque »</h3>
        <div className="sim-browser">
          <div className="sim-browser-bar">
            <span aria-hidden="true">🔒</span> https://intranet.mediatheque.example/login
            <label className="check" style={{ margin: 0, marginLeft: 'auto' }}>
              <input type="checkbox" checked={safe} onChange={(e) => setSafe(e.target.checked)} /> Version corrigée (requête paramétrée)
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
              <label htmlFor={ids.l}>Identifiant</label>
              <input id={ids.l} className="input" value={login} maxLength={120} autoComplete="off" spellCheck={false} onChange={(e) => setLogin(e.target.value)} />
              <label htmlFor={ids.p}>Mot de passe</label>
              <input id={ids.p} className="input" type="text" value={password} maxLength={120} autoComplete="off" spellCheck={false} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-row">
              <button type="submit" className="btn btn-primary">Se connecter</button>
            </div>
          </form>
        </div>
        <p className="muted">
          Le champ mot de passe est volontairement visible pour faciliter l’exercice. Par simplicité, cette application fictive compare le
          mot de passe en clair : une seconde faille à relever.
        </p>
      </section>

      {result && (
        <section className="panel" aria-labelledby="res-h" aria-live="polite">
          <h3 id="res-h">Ce que le serveur exécute</h3>
          <pre tabIndex={0}><code>{result.sql}</code></pre>
          {result.comment && (
            <p className="callout callout-warn">
              Tout ce qui suit <code>{result.comment.slice(0, 2)}</code> est un <strong>commentaire</strong> ignoré par le moteur :{' '}
              <code>{result.comment}</code>
            </p>
          )}
          {result.union && <p className="callout callout-warn">Clause <code>UNION</code> détectée : sur un vrai moteur, elle permettrait d’ajouter au résultat des lignes d’une autre table (extraction de données).</p>}
          {result.error ? (
            <p className="error">Erreur SQL : {result.error}. <span className="muted">(Un message d’erreur détaillé renvoyé à l’utilisateur est en soi une fuite d’information.)</span></p>
          ) : result.rows.length ? (
            <>
              <p className="success"><strong>Connexion acceptée</strong> en tant que <code>{result.rows[0]?.login}</code> ({result.rows[0]?.role}).</p>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only">Lignes renvoyées</caption>
                  <thead><tr><th scope="col">id</th><th scope="col">login</th><th scope="col">role</th></tr></thead>
                  <tbody>{result.rows.map((r) => <tr key={r.id}><td>{r.id}</td><td>{r.login}</td><td>{r.role}</td></tr>)}</tbody>
                </table>
              </div>
            </>
          ) : (
            <p>Aucune ligne : connexion refusée.</p>
          )}
        </section>
      )}

      {history.length > 0 && (
        <section className="panel" aria-labelledby="hist-h">
          <h3 id="hist-h">Journal de vos essais</h3>
          <ul>
            {history.map((h, i) => (
              <li key={i}>
                [{h.mode}] identifiant <code>{h.login}</code> → {h.ok ? 'accepté' : 'refusé'}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
