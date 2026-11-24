import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n } from '../i18n';

export type NotFoundKind = 'page' | 'course' | 'exam' | 'lab' | 'module' | 'path' | 'scenario';

export default function NotFoundPage({ what = 'page' }: { what?: NotFoundKind }) {
  const { t } = useI18n();
  usePageTitle(t('nf.document'));
  return (
    <div className="panel">
      <h1>{t(`nf.title.${what}` as const)}</h1>
      <p>{t('nf.text')}</p>
      <p>
        <Link className="btn btn-primary" to="/">{t('nf.home')}</Link> <Link className="btn" to="/catalogue">{t('nf.courses')}</Link>
      </p>
    </div>
  );
}
