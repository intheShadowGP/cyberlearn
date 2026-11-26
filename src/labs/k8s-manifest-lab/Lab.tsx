import { useMemo, useState } from 'react';
import { MANIFEST, render, review, type Severity } from './manifest';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Manifeste de déploiement à revoir (extrait fictif)',
  scanTitle: 'Revue automatique',
  note: 'Le vérificateur applique des règles simples, comme un contrôle d’admission ou un linter. Il ne remplace pas la lecture : essayez de repérer les défauts avant de l’utiliser.',
  scan: 'Lancer la revue', hide: 'Masquer le résultat',
  cols: ['Défaut', 'Gravité'],
  sev: { critical: 'critique', high: 'élevée', medium: 'moyenne' } as Record<Severity, string>,
  issues: { privileged: 'Conteneur privilégié', 'hostpath-socket': 'Socket du moteur de conteneurs monté depuis l’hôte', 'cap-sys-admin': 'Capacité SYS_ADMIN ajoutée', 'host-network': 'Réseau de l’hôte partagé', root: 'Exécution en root', 'secret-env': 'Secret en clair dans une variable d’environnement', 'latest-tag': 'Étiquette d’image mobile (latest)', 'no-limits': 'Aucune limite de ressources' } as Record<string, string>,
  count: 'Défauts détectés',
};
const en: typeof fr = {
  title: 'Deployment manifest to review (fictional excerpt)',
  scanTitle: 'Automatic review',
  note: 'The checker applies simple rules, like an admission control or a linter. It does not replace reading: try to spot the flaws before using it.',
  scan: 'Run the review', hide: 'Hide the result',
  cols: ['Flaw', 'Severity'],
  sev: { critical: 'critical', high: 'high', medium: 'medium' },
  issues: { privileged: 'Privileged container', 'hostpath-socket': 'Container engine socket mounted from the host', 'cap-sys-admin': 'SYS_ADMIN capability added', 'host-network': 'Host network shared', root: 'Running as root', 'secret-env': 'Clear-text secret in an environment variable', 'latest-tag': 'Movable image tag (latest)', 'no-limits': 'No resource limits' },
  count: 'Flaws detected',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function K8sManifestLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const text = useMemo(() => render(MANIFEST), []);
  const issues = useMemo(() => review(MANIFEST), []);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="k8-m">
        <h3 id="k8-m">{T.title}</h3>
        <pre className="mono" tabIndex={0} aria-label={T.title}>{text}</pre>
      </section>
      <section className="panel" aria-labelledby="k8-r">
        <h3 id="k8-r">{T.scanTitle}</h3>
        <p className="muted">{T.note}</p>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.scan}
        </button>
        {shown && (
          <>
            <p><strong>{T.count}</strong> : {issues.length}</p>
            <div className="table-wrap">
              <table>
                <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
                <tbody>
                  {issues.map((i) => (
                    <tr key={i.code}><td>{T.issues[i.code]}</td><td>{T.sev[i.severity]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
