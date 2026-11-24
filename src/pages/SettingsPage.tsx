import { useEffect, useId, useRef, useState } from 'react';
import { applyBackup, exportBackup, ImportError, parseBackupFile } from '../lib/backup';
import { clearAll, requestPersistence } from '../lib/db';
import { DataControls } from '../components/DataControls';
import { notify, type Snapshot } from '../lib/progress';
import { resetPrefs, setPrefs, usePrefs, type Prefs } from '../lib/prefs';
import { OnboardingStatus } from '../components/Onboarding';
import { Inline } from '../components/Inline';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n } from '../i18n';

export default function SettingsPage() {
  const { t, lang } = useI18n();
  usePageTitle(t('nav.settings'));
  const prefs = usePrefs();
  const { data } = useSnapshot();
  const onboarding = data.profile[0]?.onboarding;
  const ids = { lang: useId(), theme: useId(), font: useId(), file: useId() };
  const [msg, setMsg] = useState<{ kind: 'ok' | 'error'; text: string } | null>(null);
  const [pending, setPending] = useState<Snapshot | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [persisted, setPersisted] = useState<boolean | null>(null);
  const [usageMb, setUsageMb] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    void navigator.storage?.persisted?.().then(setPersisted).catch(() => setPersisted(null));
    void navigator.storage?.estimate?.().then((e) => {
      if (e.usage != null) setUsageMb((e.usage / 1024 / 1024).toFixed(1));
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
      setMsg({ kind: 'ok', text: t('settings.exported') });
    } catch {
      setMsg({ kind: 'error', text: t('settings.exportFail') });
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
      setMsg({ kind: 'error', text: e instanceof ImportError ? e.localized(lang) : t('settings.unreadable') });
    } finally {
      if (fileRef.current) fileRef.current.value = '';
    }
  }

  const set = <K extends keyof Prefs>(k: K, v: Prefs[K]) => setPrefs({ [k]: v } as Partial<Prefs>);
  const persistText = persisted === null ? t('settings.persist.unknown') : persisted ? t('settings.persist.yes') : t('settings.persist.no');

  return (
    <div className="settings">
      <h1>{t('settings.title')}</h1>

      <section className="panel" aria-labelledby="disp-h">
        <h2 id="disp-h">{t('settings.display')}</h2>
        <div className="form-grid">
          <label htmlFor={ids.lang}>{t('settings.language')}</label>
          <select id={ids.lang} className="input" value={lang} onChange={(e) => set('lang', e.target.value as Prefs['lang'])} data-testid="lang-select">
            <option value="fr" lang="fr">Français</option>
            <option value="en" lang="en">English</option>
          </select>
          <label htmlFor={ids.theme}>{t('settings.theme')}</label>
          <select id={ids.theme} className="input" value={prefs.theme} onChange={(e) => set('theme', e.target.value as Prefs['theme'])}>
            <option value="dark">{t('settings.theme.dark')}</option>
            <option value="light">{t('settings.theme.light')}</option>
            <option value="system">{t('settings.theme.system')}</option>
          </select>
          <label htmlFor={ids.font}>{t('settings.font')}</label>
          <select id={ids.font} className="input" value={prefs.fontScale} onChange={(e) => set('fontScale', Number(e.target.value) as Prefs['fontScale'])}>
            <option value={1}>{t('settings.font.normal')}</option>
            <option value={1.125}>{t('settings.font.large')}</option>
            <option value={1.25}>{t('settings.font.xlarge')}</option>
          </select>
        </div>
        <p className="muted">{t('settings.language.help')}</p>
        <label className="check">
          <input type="checkbox" checked={prefs.reduceMotion} onChange={(e) => set('reduceMotion', e.target.checked)} />
          {t('settings.motion')}
        </label>
      </section>

      <OnboardingStatus onboarding={onboarding} />

      <section className="panel" aria-labelledby="data-h">
        <h2 id="data-h">{t('settings.data')}</h2>
        <p><Inline text={t('settings.data.text')} /></p>
        <p className="muted">
          {t('settings.persist')} {persistText}
          {usageMb ? ` · ${t('settings.usage', { mb: usageMb })}` : ''}.{' '}
          {!persisted && (
            <button type="button" className="btn btn-small" onClick={() => void requestPersistence().then(setPersisted)}>
              {t('settings.persist.ask')}
            </button>
          )}
        </p>
        <div className="button-row">
          <button type="button" className="btn btn-primary" onClick={doExport}>{t('settings.export')}</button>
          <input id={ids.file} ref={fileRef} type="file" accept="application/json,.json" className="sr-only file-input" onChange={(e) => void onFile(e.target.files?.[0])} />
          <label htmlFor={ids.file} className="btn">{t('settings.import')}</label>
        </div>
        {pending && (
          <div className="callout callout-warn" role="alertdialog" aria-labelledby="imp-h">
            <p id="imp-h" className="callout-title">{t('settings.import.title')}</p>
            <p>
              <Inline text={t('settings.import.text', { courses: pending.progress.length, attempts: pending.attempts.length, goals: pending.goals.length })} />
            </p>
            <div className="button-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  try {
                    await applyBackup(pending);
                    setMsg({ kind: 'ok', text: t('settings.import.ok') });
                  } catch {
                    setMsg({ kind: 'error', text: t('settings.import.fail') });
                  }
                  setPending(null);
                }}
              >
                {t('settings.import.confirm')}
              </button>
              <button type="button" className="btn" autoFocus onClick={() => setPending(null)}>{t('settings.cancel')}</button>
            </div>
          </div>
        )}

        <DataControls />

        <h3 className="h4">{t('settings.reset.title')}</h3>
        {!confirmReset ? (
          <button type="button" className="btn btn-danger" onClick={() => setConfirmReset(true)}>{t('settings.reset.btn')}</button>
        ) : (
          <div className="callout callout-warn" role="alertdialog" aria-labelledby="rst-h">
            <p id="rst-h" className="callout-title">{t('settings.reset.h')}</p>
            <p>{t('settings.reset.text')}</p>
            <div className="button-row">
              <button
                type="button"
                className="btn btn-danger"
                onClick={async () => {
                  await clearAll();
                  resetPrefs();
                  notify();
                  setConfirmReset(false);
                  setMsg({ kind: 'ok', text: t('settings.reset.done') });
                }}
              >
                {t('settings.reset.confirm')}
              </button>
              <button type="button" className="btn" autoFocus onClick={() => setConfirmReset(false)}>{t('settings.cancel')}</button>
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
