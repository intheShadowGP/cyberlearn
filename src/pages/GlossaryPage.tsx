import { useEffect, useId, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MODULES, MODULE_BY_ID } from '../content/catalog';
import { COURSE_BY_ID } from '../content/registry';
import type { ModuleId } from '../content/types';
import { Inline } from '../components/Inline';
import { loadGlossary, type GlossaryEntry } from '../lib/contentIndex';
import { normalizeShort } from '../lib/quiz';
import { usePageTitle } from '../lib/usePageTitle';

export default function GlossaryPage() {
  usePageTitle('Glossaire');
  const [entries, setEntries] = useState<GlossaryEntry[] | null>(null);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const cat = (params.get('discipline') ?? '') as ModuleId | '';
  const onlyAcronyms = params.get('sigles') === '1';
  const focus = params.get('terme');
  const ids = { q: useId(), c: useId() };

  useEffect(() => {
    let alive = true;
    loadGlossary().then((e) => alive && setEntries(e)).catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!focus || !entries) return;
    document.getElementById(`terme-${focus}`)?.scrollIntoView({ block: 'center' });
  }, [focus, entries]);

  const update = (k: string, v: string) => {
    const n = new URLSearchParams(params);
    if (v) n.set(k, v);
    else n.delete(k);
    n.delete('terme');
    setParams(n, { replace: true });
  };

  const nq = normalizeShort(q);
  const list = (entries ?? []).filter(
    (e) =>
      (!cat || e.module === cat) &&
      (!onlyAcronyms || e.acronym) &&
      (!nq || normalizeShort(`${e.term} ${e.definition}`).includes(nq)),
  );
  const letters = [...new Set(list.map((e) => normalizeShort(e.term).charAt(0).toUpperCase()))];

  return (
    <div>
      <h1>Glossaire</h1>
      <p className="lead">
        {entries ? `${entries.length} notions` : 'Notions'} extraites des définitions des leçons, avec un lien vers chaque cours qui les
        définit.
      </p>
      <form className="filters panel" role="search" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor={ids.q}>Rechercher une notion</label>
          <input id={ids.q} className="input" type="search" value={q} maxLength={80} onChange={(e) => update('q', e.target.value)} />
        </div>
        <div>
          <label htmlFor={ids.c}>Catégorie (discipline)</label>
          <select id={ids.c} className="input" value={cat} onChange={(e) => update('discipline', e.target.value)}>
            <option value="">Toutes</option>
            {MODULES.map((m) => (
              <option key={m.id} value={m.id}>{m.id} — {m.title}</option>
            ))}
          </select>
        </div>
        <label className="check">
          <input type="checkbox" checked={onlyAcronyms} onChange={(e) => update('sigles', e.target.checked ? '1' : '')} />
          Sigles et acronymes uniquement
        </label>
      </form>
      {error && <p role="alert" className="error">Le glossaire n’a pas pu être chargé (contenu non disponible hors ligne ?).</p>}
      {!entries && !error && <p role="status">Construction du glossaire…</p>}
      {entries && (
        <>
          <p role="status" className="muted">{list.length} notion{list.length > 1 ? 's' : ''}.</p>
          {letters.length > 1 && (
            <nav aria-label="Lettres" className="button-row">
              {letters.map((l) => (
                <a key={l} className="btn btn-small" href={`#lettre-${l}`} onClick={(e) => { e.preventDefault(); document.getElementById(`lettre-${l}`)?.scrollIntoView(); }}>{l}</a>
              ))}
            </nav>
          )}
          <dl className="glossary">
            {list.map((e, i) => {
              const letter = normalizeShort(e.term).charAt(0).toUpperCase();
              const first = i === 0 || normalizeShort(list[i - 1]?.term ?? '').charAt(0).toUpperCase() !== letter;
              return (
                <div key={e.id} id={`terme-${e.id}`} className={`definition ${focus === e.id ? 'focused' : ''}`}>
                  <dt>
                    {first && <span id={`lettre-${letter}`} className="sr-only">{letter} </span>}
                    {e.term} {e.acronym && <span className="badge">sigle</span>}{' '}
                    <span className="muted">— {MODULE_BY_ID[e.module].short}</span>
                  </dt>
                  <dd>
                    <Inline text={e.definition} />
                    <br />
                    <span className="muted">
                      Défini dans :{' '}
                      {e.courseIds.map((c, k) => (
                        <span key={c}>
                          {k > 0 && ' · '}
                          <Link to={`/cours/${c}`}>{COURSE_BY_ID.get(c)?.title ?? c}</Link>
                        </span>
                      ))}
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>
        </>
      )}
    </div>
  );
}
