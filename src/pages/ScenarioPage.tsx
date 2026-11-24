import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { COURSE_BY_ID, getCourse } from '../content/registry';
import { SCENARIO_BY_ID, getScenario, loadScenarioBody, loadScenarioCorrections, type ScenarioBody, type ScenarioMeta } from '../content/scenarios';
import type { Block } from '../content/types';
import { LevelBadge } from '../components/Badges';
import { Blocks } from '../components/Blocks';
import { Quiz } from '../components/Quiz';
import { recordExamAttempt } from '../lib/progress';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n } from '../i18n';
import NotFoundPage from './NotFoundPage';

export default function ScenarioPage() {
  const { id = '' } = useParams();
  const { lang } = useI18n();
  const meta = SCENARIO_BY_ID.has(id) ? getScenario(id, lang) : undefined;
  if (!meta) return <NotFoundPage what="scenario" />;
  return <ScenarioView key={`${meta.id}-${lang}`} meta={meta} />;
}

function ScenarioView({ meta }: { meta: ScenarioMeta }) {
  const { t, lang } = useI18n();
  usePageTitle(meta.title);
  const [body, setBody] = useState<ScenarioBody | null>(null);
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
    loadScenarioBody(meta.id, lang)
      .then((b) => alive && (b ? setBody(b) : setLoadError(true)))
      .catch(() => alive && setLoadError(true));
    return () => {
      alive = false;
    };
  }, [meta.id, lang]);

  return (
    <article>
      <nav aria-label={t('lab.breadcrumb')} className="breadcrumb">
        <Link to="/evaluations">{t('assess.title')}</Link> › <span aria-current="page">{meta.title}</span>
      </nav>
      <header className="panel">
        <p className="eyebrow">{t('scn.eyebrow')}</p>
        <h1>{meta.title}</h1>
        <ul className="meta-row">
          <li><LevelBadge level={meta.level} /></li>
          <li>{t('scn.duration', { n: meta.durationMin })}</li>
          {meta.relatedCourses.map((c) => (
            <li key={c}>
              {t('lab.related')} <Link to={`/cours/${c}`}>{COURSE_BY_ID.has(c) ? getCourse(c, lang)?.title : c}</Link>
            </li>
          ))}
        </ul>
        <h2 className="h3">{t('scn.situation')}</h2>
        <p>{meta.context}</p>
        <h2 className="h3">{t('scn.objective')}</h2>
        <p>{meta.objective}</p>
        <h2 className="h3">{t('scn.approach')}</h2>
        <ol>{meta.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      </header>

      <section className="panel" aria-labelledby="dossier-h">
        <h2 id="dossier-h">{t('scn.dossier')}</h2>
        {body ? (
          <Blocks blocks={body.dossier} />
        ) : loadError ? (
          <p role="alert" className="error">{t('scn.dossierError')}</p>
        ) : (
          <p role="status">{t('scn.dossierLoading')}</p>
        )}
      </section>

      <section aria-labelledby="sq-h">
        <h2 id="sq-h">{t('scn.questions')}</h2>
        {body ? (
          <Quiz
            key={round}
            sessionKey={`${meta.id}-${round}`}
            questions={body.questions}
            skillLabels={skillLabels}
            loadCorrections={async () => {
              const c = await loadScenarioCorrections(meta.id, lang);
              if (!c) throw new Error('corrections absentes');
              setDebrief(c.debrief);
              return c.questions;
            }}
            onFinished={(score, d) => recordExamAttempt(meta.id, score, d)}
            retryLabel={t('scn.retry')}
            onRetry={() => {
              setDebrief(null);
              setRound((r) => r + 1);
            }}
          />
        ) : loadError ? (
          <p role="alert" className="error">{t('scn.questionsError')}</p>
        ) : (
          <p role="status">{t('lab.loadingShort')}</p>
        )}
      </section>

      {debrief && (
        <section className="panel" aria-labelledby="debrief-h">
          <h2 id="debrief-h">{t('scn.debrief')}</h2>
          <Blocks blocks={debrief} />
        </section>
      )}
    </article>
  );
}
