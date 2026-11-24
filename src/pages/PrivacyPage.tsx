import { Link } from 'react-router-dom';
import { DB_NAME, STORES } from '../lib/db';
import { Inline } from '../components/Inline';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type MsgKey } from '../i18n';

export default function PrivacyPage() {
  const { t } = useI18n();
  usePageTitle(t('footer.privacy'));
  return (
    <div className="prose">
      <h1>{t('priv.title')}</h1>
      <p className="lead">{t('priv.lead')}</p>

      <h2>{t('priv.noAccount')}</h2>
      <p>{t('priv.noAccountText')}</p>

      <h2>{t('priv.stored')}</h2>
      <p>{t('priv.storedText', { db: DB_NAME })}</p>
      <div className="table-wrap">
        <table>
          <thead><tr><th scope="col">{t('priv.col.store')}</th><th scope="col">{t('priv.col.purpose')}</th></tr></thead>
          <tbody>
            {Object.keys(STORES).map((k) => <tr key={k}><td className="mono">{k}</td><td>{t(`priv.store.${k}` as MsgKey)}</td></tr>)}
          </tbody>
        </table>
      </div>
      <p><Inline text={t('priv.prefs')} /></p>
      <p>{t('priv.purpose')}</p>

      <h2>{t('priv.noTransmission')}</h2>
      <ul>
        <li>{t('priv.nt1')}</li>
        <li>{t('priv.nt2')}</li>
        <li>{t('priv.nt3')}</li>
        <li>{t('priv.nt4')}</li>
      </ul>

      <h2>{t('priv.hosting')}</h2>
      <p>{t('priv.hostingText')}</p>

      <h2>{t('priv.links')}</h2>
      <p><Inline text={t('priv.linksText')} /></p>

      <h2>{t('priv.offline')}</h2>
      <p>{t('priv.offlineText')}</p>

      <h2>{t('priv.limits')}</h2>
      <ul>
        <li>{t('priv.l1')}</li>
        <li>{t('priv.l2')}</li>
        <li>{t('priv.l3')}</li>
        <li>{t('priv.l4')}</li>
      </ul>

      <h2>{t('priv.rights')}</h2>
      <p>
        {t('priv.rightsText')} <Link to="/parametres">{t('priv.rightsLink')}</Link>.
      </p>
    </div>
  );
}
