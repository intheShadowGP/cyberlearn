import { Suspense, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { COURSE_BY_ID, LAB_BY_ID, getCourse, getLab, loadLabBody, loadLabCorrections } from '../content/registry';
import type { Block, LabBody, LabMeta } from '../content/types';
import { CATEGORY_KEYS, LAB_COMPONENTS } from '../labs';
import { LevelBadge } from '../components/Badges';
import { Blocks } from '../components/Blocks';
import { Hints } from '../components/Hints';
import { Inline } from '../components/Inline';
import { Quiz } from '../components/Quiz';
import { recordLabAttempt } from '../lib/progress';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n } from '../i18n';
import NotFoundPage from './NotFoundPage';

export default function LabPage() {
  const { id = '' } = useParams();
  const { lang } = useI18n();
  const meta = LAB_BY_ID.has(id) ? getLab(id, lang) : undefined;
  if (!meta) return <NotFoundPage what="lab" />;
  return <LabView key={`${meta.id}-${lang}`} meta={meta} />;
}

function LabView({ meta }: { meta: LabMeta }) {
  const { t, lang } = useI18n();
  usePageTitle(meta.title);
  const Component = Object.hasOwn(LAB_COMPONENTS, meta.id) ? LAB_COMPONENTS[meta.id] : undefined;
  const [body, setBody] = useState<LabBody | null>(null);
  const [debrief, setDebrief] = useState<Block[] | null>(null);
  const [round, setRound] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const skillLabels = useMemo(
    () =>
      Object.fromEntries(
        meta.relatedCourses.flatMap((c) => getCourse(c, lang)?.skills.map((s) => [s.id, s.label] as const) ?? []),
      ),
    [meta.relatedCourses, lang],
  );

  useEffect(() => {
    let alive = true;
    loadLabBody(meta.id, lang)
      .then((b) => alive && (b ? setBody(b) : setLoadError(true)))
      .catch(() => alive && setLoadError(true));
    return () => {
      alive = false;
    };
  }, [meta.id, lang]);

  return (
    <article>
      <nav aria-label={t('lab.breadcrumb')} className="breadcrumb">
        <Link to="/laboratoires">{t('labs.title')}</Link> › <span aria-current="page">{meta.title}</span>
      </nav>
      <header className="panel">
        <p className="eyebrow">{t('lab.eyebrow', { category: t(CATEGORY_KEYS[meta.category]) })}</p>
        <h1>{meta.title}</h1>
        <ul className="meta-row">
          <li><LevelBadge level={meta.level} /></li>
          <li>{t('lab.duration', { n: meta.durationMin })}</li>
          {meta.relatedCourses.map((c) => (
            <li key={c}>
              {t('lab.related')} <Link to={`/cours/${c}`}>{COURSE_BY_ID.has(c) ? getCourse(c, lang)?.title : c}</Link>
            </li>
          ))}
        </ul>
        {meta.offensive && (
          <p className="callout callout-legal"><Inline text={t('lab.ethics')} /></p>
        )}
        <h2 className="h3">{t('lab.context')}</h2>
        <p>{meta.context}</p>
        <h2 className="h3">{t('lab.objective')}</h2>
        <p>{meta.objective}</p>
        <h2 className="h3">{t('lab.steps')}</h2>
        <ol>{meta.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      </header>

      <section aria-labelledby="ws-h">
        <h2 id="ws-h">{t('lab.workspace')}</h2>
        {Component ? (
          <Suspense fallback={<p role="status">{t('lab.loading')}</p>}>
            <Component />
          </Suspense>
        ) : (
          <p className="error">{t('lab.missing')}</p>
        )}
      </section>

      {body?.hints && body.hints.length > 0 && <Hints hints={body.hints} />}

      <section aria-labelledby="lq-h">
        <h2 id="lq-h">{t('lab.questions')}</h2>
        {body ? (
          <Quiz
            key={round}
            sessionKey={`${meta.id}-${round}`}
            questions={body.questions}
            skillLabels={skillLabels}
            loadCorrections={async () => {
              const c = await loadLabCorrections(meta.id, lang);
              if (!c) throw new Error('corrections absentes');
              setDebrief(c.debrief);
              return c.questions;
            }}
            onFinished={(score, d) => recordLabAttempt(meta.id, score, d)}
            retryLabel={t('lab.retry')}
            onRetry={() => {
              setDebrief(null);
              setRound((r) => r + 1);
            }}
          />
        ) : loadError ? (
          <p role="alert" className="error">{t('lab.loadError')}</p>
        ) : (
          <p role="status">{t('lab.loadingShort')}</p>
        )}
      </section>

      {debrief && (
        <section className="panel" aria-labelledby="debrief-h">
          <h2 id="debrief-h">{t('lab.debrief')}</h2>
          <Blocks blocks={debrief} />
        </section>
      )}
    </article>
  );
}
