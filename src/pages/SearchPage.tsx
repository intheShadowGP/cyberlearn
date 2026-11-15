import { useEffect, useId, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { loadSearchIndex, searchDocs, type SearchDoc, type SearchKind } from '../lib/contentIndex';
import { usePageTitle } from '../lib/usePageTitle';

const KIND_LABEL: Record<SearchKind, string> = {
  cours: 'Cours',
  section: 'Sections de leçon',
  notion: 'Notions (glossaire)',
  laboratoire: 'Laboratoires',
  parcours: 'Parcours',
};

export default function SearchPage() {
  usePageTitle('Recherche');
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const [docs, setDocs] = useState<SearchDoc[] | null>(null);
  const [error, setError] = useState(false);
  const inputId = useId();

  useEffect(() => {
    let alive = true;
    loadSearchIndex().then((d) => alive && setDocs(d)).catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);

  const results = useMemo(() => (docs ? searchDocs(docs, q) : []), [docs, q]);
  const groups = (Object.keys(KIND_LABEL) as SearchKind[]).map((k) => [k, results.filter((r) => r.kind === k)] as const).filter(([, r]) => r.length);

  return (
    <div>
      <h1>Recherche</h1>
      <form role="search" className="panel" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={inputId}>Cours, notions, définitions, laboratoires, parcours</label>
        <input
          id={inputId}
          className="input"
          type="search"
          value={q}
          maxLength={100}
          placeholder="ex. Kerberoasting, sous-réseau, CSP…"
          onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })}
        />
      </form>
      {error && <p role="alert" className="error">L’index de recherche n’a pas pu être construit.</p>}
      {!docs && !error && <p role="status">Construction de l’index…</p>}
      {docs && q.trim().length > 1 && (
        <p role="status" className="muted">
          {results.length} résultat{results.length > 1 ? 's' : ''} pour « {q} » (recherche locale, aucune requête envoyée).
        </p>
      )}
      {groups.map(([kind, list]) => (
        <section key={kind} aria-labelledby={`r-${kind}`}>
          <h2 id={`r-${kind}`}>{KIND_LABEL[kind]}</h2>
          <ul className="reco-list">
            {list.map((r, i) => (
              <li key={`${r.href}-${i}`}>
                <Link to={r.href}>{r.title}</Link>
                <span className="muted">{r.context.length > 160 ? `${r.context.slice(0, 160)}…` : r.context}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
