import { useEffect, useId, useState } from 'react';
import { bitDiff, decodeBase64, digest, hmacSha256, pbkdf2, randomSalt, toHex } from './crypto';

function useAsync<T>(fn: () => Promise<T>, deps: unknown[]): T | null {
  const [v, setV] = useState<T | null>(null);
  useEffect(() => {
    let alive = true;
    fn().then((r) => alive && setV(r)).catch(() => alive && setV(null));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return v;
}

const ITERATIONS = [1_000, 10_000, 100_000, 600_000];

export default function HashLab() {
  const ids = { a: useId(), b: useId(), k: useId(), m: useId(), p: useId(), it: useId(), b64: useId() };
  const [a, setA] = useState('bonjour');
  const [b, setB] = useState('Bonjour');
  const ha = useAsync(() => digest('SHA-256', a), [a]);
  const hb = useAsync(() => digest('SHA-256', b), [b]);

  const [key, setKey] = useState('clé-partagée-du-webhook');
  const [msg, setMsg] = useState('{"commande":42,"montant":"19.90"}');
  const mac = useAsync(() => hmacSha256(key, msg), [key, msg]);

  const [pw, setPw] = useState('soleil2026');
  const [iters, setIters] = useState(100_000);
  const [pb, setPb] = useState<{ hex: string; ms: number; iters: number; salt: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const [b64, setB64] = useState('cGFzc3dvcmQxMjM=');
  const decoded = decodeBase64(b64);

  async function runPbkdf2() {
    setBusy(true);
    const salt = randomSalt();
    const r = await pbkdf2(pw, salt, iters);
    setPb({ ...r, iters, salt: toHex(salt.buffer) });
    setBusy(false);
  }

  const perSec = pb ? 1000 / pb.ms : 0;
  const dictionary = 10_000_000;

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="av-h">
        <h3 id="av-h">1. Effet avalanche (SHA-256)</h3>
        <div className="form-grid">
          <label htmlFor={ids.a}>Texte A</label>
          <input id={ids.a} className="input" value={a} maxLength={200} onChange={(e) => setA(e.target.value)} />
          <label htmlFor={ids.b}>Texte B</label>
          <input id={ids.b} className="input" value={b} maxLength={200} onChange={(e) => setB(e.target.value)} />
        </div>
        <dl className="kv" aria-live="polite">
          <dt>SHA-256(A)</dt><dd><code className="bin">{ha ?? '…'}</code></dd>
          <dt>SHA-256(B)</dt><dd><code className="bin">{hb ?? '…'}</code></dd>
          <dt>Bits différents</dt><dd>{ha && hb ? `${bitDiff(ha, hb)} / 256` : '…'}</dd>
        </dl>
      </section>

      <section className="panel" aria-labelledby="hm-h">
        <h3 id="hm-h">2. HMAC-SHA-256 d’un webhook</h3>
        <div className="form-grid">
          <label htmlFor={ids.k}>Clé secrète</label>
          <input id={ids.k} className="input" value={key} maxLength={200} onChange={(e) => setKey(e.target.value)} />
          <label htmlFor={ids.m}>Message</label>
          <input id={ids.m} className="input" value={msg} maxLength={400} onChange={(e) => setMsg(e.target.value)} />
        </div>
        <dl className="kv" aria-live="polite">
          <dt>HMAC</dt><dd><code className="bin">{mac ?? '…'}</code></dd>
        </dl>
        <p className="muted">Modifiez « 19.90 » en « 1.90 » : sans la clé, impossible de produire le nouveau HMAC valide.</p>
      </section>

      <section className="panel" aria-labelledby="pb-h">
        <h3 id="pb-h">3. Coût de PBKDF2-HMAC-SHA-256</h3>
        <div className="form-grid">
          <label htmlFor={ids.p}>Mot de passe de test</label>
          <input id={ids.p} className="input" value={pw} maxLength={100} onChange={(e) => setPw(e.target.value)} />
          <label htmlFor={ids.it}>Itérations</label>
          <select id={ids.it} className="input" value={iters} onChange={(e) => setIters(Number(e.target.value))}>
            {ITERATIONS.map((n) => <option key={n} value={n}>{n.toLocaleString('fr-FR')}</option>)}
          </select>
        </div>
        <div className="button-row">
          <button type="button" className="btn btn-primary" onClick={runPbkdf2} disabled={busy}>
            {busy ? 'Calcul en cours…' : 'Dériver la clé (sel aléatoire)'}
          </button>
        </div>
        {pb && (
          <dl className="kv" aria-live="polite">
            <dt>Sel (16 octets)</dt><dd><code className="bin">{pb.salt}</code></dd>
            <dt>Clé dérivée</dt><dd><code className="bin">{pb.hex}</code></dd>
            <dt>Durée</dt><dd>{pb.ms.toFixed(1)} ms pour {pb.iters.toLocaleString('fr-FR')} itérations</dd>
            <dt>Dictionnaire de 10 M mots</dt>
            <dd>≈ {formatDuration(dictionary / perSec)} sur ce navigateur, pour un seul compte</dd>
          </dl>
        )}
        <p className="muted">Relancez : le sel change, donc la clé dérivée aussi, même pour un mot de passe identique.</p>
      </section>

      <section className="panel" aria-labelledby="b64-h">
        <h3 id="b64-h">4. Encodage n’est pas chiffrement</h3>
        <div className="form-grid">
          <label htmlFor={ids.b64}>Valeur « chiffrée » trouvée dans une configuration</label>
          <input id={ids.b64} className="input" value={b64} maxLength={200} onChange={(e) => setB64(e.target.value)} />
        </div>
        <p aria-live="polite">Décodage Base64 : {decoded !== null ? <code>{decoded}</code> : <span className="muted">non décodable</span>}</p>
      </section>
    </div>
  );
}

function formatDuration(sec: number): string {
  if (!Number.isFinite(sec)) return '—';
  if (sec < 120) return `${Math.round(sec)} s`;
  if (sec < 7200) return `${Math.round(sec / 60)} min`;
  if (sec < 172800) return `${Math.round(sec / 3600)} h`;
  return `${Math.round(sec / 86400)} jours`;
}
