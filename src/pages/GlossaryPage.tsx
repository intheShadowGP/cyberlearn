import { useEffect, useId, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getModule, getModules } from '../content/catalog';
import { getCourse } from '../content/registry';
import type { ModuleId } from '../content/types';
import { Inline } from '../components/Inline';
import { loadGlossary, type GlossaryEntry } from '../lib/contentIndex';
import { normalizeShort } from '../lib/quiz';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n } from '../i18n';

const PAGE = 60;

export default function GlossaryPage() {
  const { t, tp, lang } = useI18n();
  usePageTitle(t('gloss.title'));
  const [loaded, setLoaded] = useState<{ lang: string; entries: GlossaryEntry[] } | null>(null);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const cat = (params.get('discipline') ?? '') as ModuleId | '';
  const onlyAcronyms = params.get('sigles') === '1';
  const focus = params.get('terme');
  const ids = { q: useId(), c: useId() };
  // Affichage progressif : la liste complète compte plus de 1 000 notions (DOM lourd).
  const [pageState, setPageState] = useState({ key: '', limit: PAGE });
  const filterKey = `${lang}|${q}|${cat}|${onlyAcronyms}`;
  const baseLimit = pageState.key === filterKey ? pageState.limit : PAGE;
  // Les données ne sont valables que pour la langue pour laquelle elles ont été chargées.
  const entries = loaded?.lang === lang ? loaded.entries : null;

  useEffect(() => {
    let alive = true;
    loadGlossary(lang).then((e) => alive && setLoaded({ lang, entries: e })).catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, [lang]);

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
  const focusIndex = focus ? list.findIndex((e) => e.id === focus) : -1;
  const limit = Math.max(baseLimit, focusIndex + 1);
  const showUpTo = (n: number) => setPageState({ key: filterKey, limit: Math.max(limit, n) });
  const visible = list.slice(0, limit);

  // Le terme ciblé fait partie de la page affichée (voir `limit`) ; on le fait défiler dans la vue.
  useEffect(() => {
    if (!focus || !entries) return;
    document.getElementById(`terme-${focus}`)?.scrollIntoView({ block: 'center' });
  }, [focus, entries, limit]);
  const letters = [...new Set(list.map((e) => normalizeShort(e.term).charAt(0).toUpperCase()))];

  return (
    <div>
      <h1>{t('gloss.title')}</h1>
      <p className="lead">{t('gloss.lead', { count: entries ? tp('gloss.count', entries.length) : t('gloss.notions') })}</p>
      <form className="filters panel" role="search" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor={ids.q}>{t('gloss.search')}</label>
          <input id={ids.q} className="input" type="search" value={q} maxLength={80} onChange={(e) => update('q', e.target.value)} />
        </div>
        <div>
          <label htmlFor={ids.c}>{t('gloss.category')}</label>
          <select id={ids.c} className="input" value={cat} onChange={(e) => update('discipline', e.target.value)}>
            <option value="">{t('gloss.all')}</option>
            {getModules(lang).map((m) => (
              <option key={m.id} value={m.id}>{m.id} — {m.title}</option>
            ))}
          </select>
        </div>
        <label className="check">
          <input type="checkbox" checked={onlyAcronyms} onChange={(e) => update('sigles', e.target.checked ? '1' : '')} />
          {t('gloss.acronyms')}
        </label>
      </form>
      {error && <p role="alert" className="error">{t('gloss.error')}</p>}
      {!entries && !error && <p role="status">{t('gloss.building')}</p>}
      {entries && (
        <>
          <p role="status" className="muted">{tp('gloss.count', list.length)}.</p>
          {letters.length > 1 && (
            <nav aria-label={t('gloss.letters')} className="button-row">
              {letters.map((l) => (
                <a key={l} className="btn btn-small" href={`#lettre-${l}`} onClick={(e) => {
                    e.preventDefault();
                    const idx = list.findIndex((x) => normalizeShort(x.term).charAt(0).toUpperCase() === l);
                    if (idx >= limit) showUpTo(idx + 1);
                    setTimeout(() => document.getElementById(`lettre-${l}`)?.scrollIntoView(), 0);
                  }}>{l}</a>
              ))}
            </nav>
          )}
          <dl className="glossary">
            {visible.map((e, i) => {
              const letter = normalizeShort(e.term).charAt(0).toUpperCase();
              const first = i === 0 || normalizeShort(visible[i - 1]?.term ?? '').charAt(0).toUpperCase() !== letter;
              return (
                <div key={e.id} id={`terme-${e.id}`} className={`definition ${focus === e.id ? 'focused' : ''}`}>
                  <dt>
                    {first && <span id={`lettre-${letter}`} className="sr-only">{letter} </span>}
                    {e.term} {e.acronym && <span className="badge">{t('gloss.acronym')}</span>}{' '}
                    <span className="muted">— {getModule(e.module, lang).short}</span>
                  </dt>
                  <dd>
                    <Inline text={e.definition} />
                    <br />
                    <span className="muted">
                      {t('gloss.definedIn')}{' '}
                      {e.courseIds.map((c, k) => (
                        <span key={c}>
                          {k > 0 && ' · '}
                          <Link to={`/cours/${c}`}>{getCourse(c, lang)?.title ?? c}</Link>
                        </span>
                      ))}
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>
          {list.length > limit && (
            <div className="button-row">
              <p role="status" className="muted">{t('gloss.shown', { shown: limit, total: list.length })}</p>
              <button type="button" className="btn" onClick={() => showUpTo(limit + PAGE)}>{t('gloss.more', { n: Math.min(PAGE, list.length - limit) })}</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
