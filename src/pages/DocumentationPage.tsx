import { Link } from 'react-router-dom';
import { getModules } from '../content/catalog';
import { COURSES, LABS, coursesOfModule } from '../content/registry';
import { PATHS } from '../content/paths';
import { MASTERY, MIN_EVIDENCE, LEVEL_COVERAGE } from '../lib/levels';
import { PASS_THRESHOLD } from '../lib/quiz';
import { LEITNER_DAYS } from '../lib/progress';
import { XP_RULES } from '../lib/gamification';
import { Inline } from '../components/Inline';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type MsgKey } from '../i18n';

const SECTIONS = ['fonctionnement', 'methodologie', 'disciplines', 'sources', 'referentiels', 'stockage', 'confidentialite', 'limites'] as const;
const REFS = ['anssi', 'owasp', 'nist', 'mitre', 'ietf', 'iso', 'cis', 'eu'] as const;

export default function DocumentationPage() {
  const { t, lang } = useI18n();
  usePageTitle(t('doc.title'));
  const modules = getModules(lang);
  const questions = COURSES.reduce((n, c) => n + c.questionCount, 0);
  return (
    <div className="prose">
      <h1>{t('doc.title')}</h1>
      <nav aria-label={t('doc.toc')}>
        <ol>
          {SECTIONS.map((s) => (
            <li key={s}><a href={`#doc-${s}`} onClick={(e) => { e.preventDefault(); document.getElementById(`doc-${s}`)?.scrollIntoView(); }}>{t(`doc.toc.${s}` as MsgKey)}</a></li>
          ))}
        </ol>
      </nav>

      <h2 id="doc-fonctionnement">{t('doc.how')}</h2>
      <p>{t('doc.howText', { courses: COURSES.length, labs: LABS.length, paths: PATHS.length })}</p>

      <h2 id="doc-methodologie">{t('doc.method')}</h2>
      <ul>
        <li><Inline text={t('doc.m1')} /></li>
        <li><Inline text={t('doc.m2', { pass: PASS_THRESHOLD })} /></li>
        <li><Inline text={t('doc.m3', { mastery: Math.round(MASTERY * 100), evidence: MIN_EVIDENCE, coverage: Math.round(LEVEL_COVERAGE * 100) })} /></li>
        <li><Inline text={t('doc.m4')} /></li>
        <li><Inline text={t('doc.m5', { days: Object.values(LEITNER_DAYS).join(', ') })} /></li>
        <li><Inline text={t('doc.m6', { section: XP_RULES.section, course: XP_RULES.courseValidated, lab: XP_RULES.labCompleted })} /></li>
        <li><Inline text={t('doc.m7')} /></li>
      </ul>

      <h2 id="doc-disciplines">{t('doc.disciplines')}</h2>
      <p>{t('doc.disciplinesText', { modules: modules.length, questions })}</p>
      <div className="table-wrap">
        <table>
          <thead><tr><th scope="col">{t('doc.col.discipline')}</th><th scope="col">{t('doc.col.courses')}</th><th scope="col">{t('doc.col.topics')}</th></tr></thead>
          <tbody>
            {modules.map((m) => <tr key={m.id}><th scope="row"><Link to={`/module/${m.id}`}>{m.id}. {m.title}</Link></th><td>{coursesOfModule(m.id).length}</td><td>{m.topics.length}</td></tr>)}
          </tbody>
        </table>
      </div>

      <h2 id="doc-sources">{t('doc.sources')}</h2>
      <p>{t('doc.sourcesText')}</p>

      <h2 id="doc-referentiels">{t('doc.referentials')}</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th scope="col">{t('doc.col.org')}</th><th scope="col">{t('doc.col.docs')}</th></tr></thead>
          <tbody>{REFS.map((r) => <tr key={r}><th scope="row">{t(`doc.ref.${r}.org` as MsgKey)}</th><td>{t(`doc.ref.${r}.docs` as MsgKey)}</td></tr>)}</tbody>
        </table>
      </div>
      <p>{t('doc.glossaryNote')} <Link to="/glossaire">{t('doc.glossaryLink')}</Link></p>

      <h2 id="doc-stockage">{t('doc.storage')}</h2>
      <p>{t('doc.storageText')} <Link to="/parametres">{t('settings.title')}</Link>.</p>

      <h2 id="doc-confidentialite">{t('footer.privacy')}</h2>
      <p>{t('doc.privacyText')} <Link to="/confidentialite">{t('doc.privacyLink')}</Link>.</p>

      <h2 id="doc-limites">{t('doc.limits')}</h2>
      <ul>
        <li>{t('doc.lim1')}</li>
        <li><Inline text={t('doc.lim2')} /></li>
        <li>{t('doc.lim3')}</li>
        <li>{t('doc.lim4')}</li>
        <li>{t('doc.lim5')}</li>
        <li>{t('doc.lim6')}</li>
      </ul>
    </div>
  );
}
