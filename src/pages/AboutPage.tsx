import { getModules } from '../content/catalog';
import { COURSES, LABS } from '../content/registry';
import { Inline } from '../components/Inline';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n } from '../i18n';

export default function AboutPage() {
  const { t, lang } = useI18n();
  usePageTitle(t('footer.about'));
  const modules = getModules(lang);
  const covered = new Set(COURSES.flatMap((c) => c.topics)).size;
  const total = modules.reduce((n, m) => n + m.topics.length, 0);
  const questions = COURSES.reduce((n, c) => n + c.questionCount, 0);

  return (
    <div className="prose">
      <h1>{t('about.title')}</h1>
      <p className="lead">{t('about.lead')}</p>

      <h2>{t('about.state')}</h2>
      <p>
        <Inline text={t('about.stateText', { version: __APP_VERSION__, courses: COURSES.length, labs: LABS.length, questions, topics: total, modules: modules.length, covered })} />
      </p>

      <h2>{t('about.ethics')}</h2>
      <p>{t('about.ethicsText')}</p>

      <h2>{t('about.certs')}</h2>
      <p>{t('about.certsText')}</p>

      <h2>{t('about.privacy')}</h2>
      <ul>
        <li>{t('about.privacy1')}</li>
        <li>{t('about.privacy2')}</li>
        <li>{t('about.privacy3')}</li>
      </ul>

      <h2>{t('about.security')}</h2>
      <ul>
        <li>{t('about.security1')}</li>
        <li>{t('about.security2')}</li>
        <li>{t('about.security3')}</li>
        <li>{t('about.security4')}</li>
      </ul>
    </div>
  );
}
