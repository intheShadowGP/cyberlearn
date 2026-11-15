import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { countAll, deleteDatabase, STORES, type StoreName } from '../lib/db';
import { notify } from '../lib/progress';
import { resetPrefs } from '../lib/prefs';
import { subscribe } from '../lib/progress';

/** Consultation des données conservées et suppression complète du profil local. */
export function DataControls() {
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
      <h3 className="h4" id="donnees-conservees">Données conservées sur cet appareil</h3>
      {counts ? (
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Nombre d’enregistrements par magasin IndexedDB</caption>
            <thead><tr><th scope="col">Magasin IndexedDB</th><th scope="col">Enregistrements</th></tr></thead>
            <tbody>
              {(Object.keys(STORES) as StoreName[]).map((k) => <tr key={k}><td className="mono">{k}</td><td>{counts[k]}</td></tr>)}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="muted">Stockage indisponible.</p>
      )}
      <p className="muted">
        localStorage : {lsKeys.length ? lsKeys.map((k) => <code key={k}>{k} </code>) : 'aucune clé'}. Le contenu complet est visible dans
        le fichier d’export. Détail de chaque magasin : <Link to="/confidentialite">politique de confidentialité</Link>.
      </p>

      <h3 className="h4">Suppression complète du profil local</h3>
      <p>Détruit la base IndexedDB et les préférences : progression, résultats, révisions, profil, objectifs. Le cache des fichiers du site (sans aucune donnée personnelle) est conservé pour le fonctionnement hors ligne.</p>
      {!confirm ? (
        <button type="button" className="btn btn-danger" onClick={() => setConfirm(true)}>Supprimer complètement le profil local…</button>
      ) : (
        <div className="callout callout-warn" role="alertdialog" aria-labelledby="del-h">
          <p id="del-h" className="callout-title">Suppression définitive</p>
          <p>Toutes les données de CyberAcadémie seront supprimées de ce navigateur. Cette action est irréversible ; exportez d’abord vos données si vous souhaitez les conserver.</p>
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
                  setMsg({ ok: true, text: 'Profil local supprimé.' });
                  notify();
                } catch (e) {
                  setMsg({ ok: false, text: e instanceof Error ? e.message : 'Suppression impossible.' });
                }
              }}
            >
              Tout supprimer définitivement
            </button>
            <button type="button" className="btn" autoFocus onClick={() => setConfirm(false)}>Annuler</button>
          </div>
        </div>
      )}
      {msg && <p role={msg.ok ? 'status' : 'alert'} className={msg.ok ? 'success' : 'error'}>{msg.text}</p>}
    </>
  );
}
