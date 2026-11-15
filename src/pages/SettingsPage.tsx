import { useEffect, useId, useRef, useState } from 'react';
import { applyBackup, exportBackup, ImportError, parseBackupFile } from '../lib/backup';
import { clearAll, requestPersistence } from '../lib/db';
import { DataControls } from '../components/DataControls';
import { notify, type Snapshot } from '../lib/progress';
import { resetPrefs, setPrefs, usePrefs, type Prefs } from '../lib/prefs';
import { usePageTitle } from '../lib/usePageTitle';

export default function SettingsPage() {
  usePageTitle('Paramètres');
  const prefs = usePrefs();
  const ids = { theme: useId(), font: useId(), file: useId() };
  const [msg, setMsg] = useState<{ kind: 'ok' | 'error'; text: string } | null>(null);
  const [pending, setPending] = useState<Snapshot | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [persisted, setPersisted] = useState<boolean | null>(null);
  const [usage, setUsage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    void navigator.storage?.persisted?.().then(setPersisted).catch(() => setPersisted(null));
    void navigator.storage?.estimate?.().then((e) => {
      if (e.usage != null) setUsage(`${(e.usage / 1024 / 1024).toFixed(1)} Mo utilisés`);
    }).catch(() => undefined);
  }, []);

  async function doExport() {
    try {
      const json = await exportBackup();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cyberacademie-progression-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setMsg({ kind: 'ok', text: 'Sauvegarde exportée.' });
    } catch {
      setMsg({ kind: 'error', text: 'L’export a échoué.' });
    }
  }

  async function onFile(f: File | undefined) {
    setMsg(null);
    setPending(null);
    if (!f) return;
    try {
      const snap = await parseBackupFile(f);
      setPending(snap);
    } catch (e) {
      setMsg({ kind: 'error', text: e instanceof ImportError ? e.message : 'Fichier illisible.' });
    } finally {
      if (fileRef.current) fileRef.current.value = '';
    }
  }

  const set = <K extends keyof Prefs>(k: K, v: Prefs[K]) => setPrefs({ [k]: v } as Partial<Prefs>);

  return (
    <div className="settings">
      <h1>Paramètres et données</h1>

      <section className="panel" aria-labelledby="disp-h">
        <h2 id="disp-h">Affichage</h2>
        <div className="form-grid">
          <label htmlFor={ids.theme}>Thème</label>
          <select id={ids.theme} className="input" value={prefs.theme} onChange={(e) => set('theme', e.target.value as Prefs['theme'])}>
            <option value="dark">Sombre</option>
            <option value="light">Clair</option>
            <option value="system">Selon le système</option>
          </select>
          <label htmlFor={ids.font}>Taille du texte</label>
          <select id={ids.font} className="input" value={prefs.fontScale} onChange={(e) => set('fontScale', Number(e.target.value) as Prefs['fontScale'])}>
            <option value={1}>Normale</option>
            <option value={1.125}>Grande</option>
            <option value={1.25}>Très grande</option>
          </select>
        </div>
        <label className="check">
          <input type="checkbox" checked={prefs.reduceMotion} onChange={(e) => set('reduceMotion', e.target.checked)} />
          Réduire les animations
        </label>
      </section>

      <section className="panel" aria-labelledby="ped-h">
        <h2 id="ped-h">Pédagogie</h2>
        <label className="check">
          <input type="checkbox" checked={prefs.freeMode} onChange={(e) => set('freeMode', e.target.checked)} />
          Mode libre : ignorer les prérequis et déverrouiller toutes les évaluations
        </label>
        <p className="muted">Recommandé uniquement si vous possédez déjà les bases des cours prérequis.</p>
      </section>

      <section className="panel" aria-labelledby="data-h">
        <h2 id="data-h">Vos données</h2>
        <p>
          Toute votre progression est stockée <strong>uniquement dans ce navigateur</strong> (IndexedDB). Aucune donnée n’est
          transmise à un serveur. Effacer les données du site dans votre navigateur supprime votre progression : exportez-la
          régulièrement.
        </p>
        <p className="muted">
          Stockage persistant : {persisted === null ? 'inconnu' : persisted ? 'accordé' : 'non accordé (le navigateur peut évincer les données en cas de manque d’espace)'}
          {usage ? ` · ${usage}` : ''}.{' '}
          {!persisted && (
            <button type="button" className="btn btn-small" onClick={() => void requestPersistence().then(setPersisted)}>
              Demander le stockage persistant
            </button>
          )}
        </p>
        <div className="button-row">
          <button type="button" className="btn btn-primary" onClick={doExport}>Exporter ma progression (JSON)</button>
          <input id={ids.file} ref={fileRef} type="file" accept="application/json,.json" className="sr-only file-input" onChange={(e) => void onFile(e.target.files?.[0])} />
          <label htmlFor={ids.file} className="btn">Importer une sauvegarde…</label>
        </div>
        {pending && (
          <div className="callout callout-warn" role="alertdialog" aria-labelledby="imp-h">
            <p id="imp-h" className="callout-title">Confirmer l’import</p>
            <p>
              Ce fichier contient {pending.progress.length} cours suivis, {pending.attempts.length} tentatives et{' '}
              {pending.goals.length} objectifs. L’import <strong>remplace</strong> toute la progression actuelle.
            </p>
            <div className="button-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  try {
                    await applyBackup(pending);
                    setMsg({ kind: 'ok', text: 'Sauvegarde importée.' });
                  } catch {
                    setMsg({ kind: 'error', text: 'L’import a échoué : aucune donnée n’a été modifiée.' });
                  }
                  setPending(null);
                }}
              >
                Remplacer ma progression
              </button>
              <button type="button" className="btn" autoFocus onClick={() => setPending(null)}>Annuler</button>
            </div>
          </div>
        )}

        <DataControls />

        <h3 className="h4">Réinitialisation de la progression</h3>
        {!confirmReset ? (
          <button type="button" className="btn btn-danger" onClick={() => setConfirmReset(true)}>Effacer toute ma progression…</button>
        ) : (
          <div className="callout callout-warn" role="alertdialog" aria-labelledby="rst-h">
            <p id="rst-h" className="callout-title">Effacement définitif</p>
            <p>Tous les cours suivis, scores, compétences et objectifs seront supprimés de ce navigateur. Cette action est irréversible.</p>
            <div className="button-row">
              <button
                type="button"
                className="btn btn-danger"
                onClick={async () => {
                  await clearAll();
                  resetPrefs();
                  notify();
                  setConfirmReset(false);
                  setMsg({ kind: 'ok', text: 'Progression et préférences effacées.' });
                }}
              >
                Tout effacer
              </button>
              <button type="button" className="btn" autoFocus onClick={() => setConfirmReset(false)}>Annuler</button>
            </div>
          </div>
        )}
        {msg && (
          <p role={msg.kind === 'error' ? 'alert' : 'status'} className={msg.kind === 'error' ? 'error' : 'success'}>
            {msg.text}
          </p>
        )}
      </section>
    </div>
  );
}
