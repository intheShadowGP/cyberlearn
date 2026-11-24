import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { countAll, deleteDatabase, STORES, type StoreName } from '../lib/db';
import { notify } from '../lib/progress';
import { resetPrefs } from '../lib/prefs';
import { subscribe } from '../lib/progress';
import { useI18n } from '../i18n';

/** Consultation des données conservées et suppression complète du profil local. */
export function DataControls() {
  const { t } = useI18n();
  const [counts, setCounts] = useState<Record<StoreName, number> | null>(null);
  const [lsKeys, setLsKeys] = useState<string[]>([]);
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    const load = () => {
      countAll().then(setCounts).catch(() => setCounts(null));
      try {
        setLsKeys(Object.keys(localStorage).filter((k) => k.startsWith('cyberacademie')));
      } catch {
        setLsKeys([]);
      }
    };
    load();
    return subscribe(load);
  }, []);

  return (
    <>
      <h3 className="h4" id="donnees-conservees">{t('data.kept')}</h3>
      {counts ? (
        <div className="table-wrap">
          <table>
            <caption className="sr-only">{t('data.caption')}</caption>
            <thead><tr><th scope="col">{t('data.store')}</th><th scope="col">{t('data.records')}</th></tr></thead>
            <tbody>
              {(Object.keys(STORES) as StoreName[]).map((k) => <tr key={k}><td className="mono">{k}</td><td>{counts[k]}</td></tr>)}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="muted">{t('data.unavailable')}</p>
      )}
      <p className="muted">
        {t('data.ls')} {lsKeys.length ? lsKeys.map((k) => <code key={k}>{k} </code>) : t('data.noKey')}. {t('data.ls.after')} <Link to="/confidentialite">{t('data.privacyLink')}</Link>.
      </p>

      <h3 className="h4">{t('data.delete.title')}</h3>
      <p>{t('data.delete.text')}</p>
      {!confirm ? (
        <button type="button" className="btn btn-danger" onClick={() => setConfirm(true)}>{t('data.delete.btn')}</button>
      ) : (
        <div className="callout callout-warn" role="alertdialog" aria-labelledby="del-h">
          <p id="del-h" className="callout-title">{t('data.delete.h')}</p>
          <p>{t('data.delete.warn')}</p>
          <div className="button-row">
            <button
              type="button"
              className="btn btn-danger"
              onClick={async () => {
                try {
                  await deleteDatabase();
                  resetPrefs();
                  try {
                    for (const k of Object.keys(localStorage)) if (k.startsWith('cyberacademie')) localStorage.removeItem(k);
                  } catch {
                    /* stockage indisponible */
                  }
                  setConfirm(false);
                  setMsg({ ok: true, text: t('data.delete.done') });
                  notify();
                } catch (e) {
                  setMsg({ ok: false, text: e instanceof Error ? e.message : t('data.delete.fail') });
                }
              }}
            >
              {t('data.delete.confirm')}
            </button>
            <button type="button" className="btn" autoFocus onClick={() => setConfirm(false)}>{t('settings.cancel')}</button>
          </div>
        </div>
      )}
      {msg && <p role={msg.ok ? 'status' : 'alert'} className={msg.ok ? 'success' : 'error'}>{msg.text}</p>}
    </>
  );
}
