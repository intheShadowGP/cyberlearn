import { useEffect, useId, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { loadSearchIndex, searchDocs, type SearchDoc, type SearchKind } from '../lib/contentIndex';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type MsgKey } from '../i18n';

const KINDS: SearchKind[] = ['cours', 'section', 'notion', 'laboratoire', 'parcours', 'epreuve'];

export default function SearchPage() {
  const { t, tp, lang } = useI18n();
  usePageTitle(t('search.title'));
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const [loaded, setLoaded] = useState<{ lang: string; docs: SearchDoc[] } | null>(null);
  const [error, setError] = useState(false);
  const inputId = useId();
  const docs = loaded?.lang === lang ? loaded.docs : null;

  useEffect(() => {
    let alive = true;
    loadSearchIndex(lang).then((d) => alive && setLoaded({ lang, docs: d })).catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, [lang]);

  const results = useMemo(() => (docs ? searchDocs(docs, q, 60, lang) : []), [docs, q, lang]);
  const groups = KINDS.map((k) => [k, results.filter((r) => r.kind === k)] as const).filter(([, r]) => r.length);

  return (
    <div>
      <h1>{t('search.title')}</h1>
      <form role="search" className="panel" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={inputId}>{t('search.label')}</label>
        <input
          id={inputId}
          className="input"
          type="search"
          value={q}
          maxLength={100}
          placeholder={t('search.placeholder')}
          onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })}
        />
      </form>
      {error && <p role="alert" className="error">{t('search.error')}</p>}
      {!docs && !error && <p role="status">{t('search.building')}</p>}
      {docs && q.trim().length > 1 && (
        <p role="status" className="muted">{tp('search.results', results.length, { q })}</p>
      )}
      {groups.map(([kind, list]) => (
        <section key={kind} aria-labelledby={`r-${kind}`}>
          <h2 id={`r-${kind}`}>{t(`search.kind.${kind}` as MsgKey)}</h2>
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
