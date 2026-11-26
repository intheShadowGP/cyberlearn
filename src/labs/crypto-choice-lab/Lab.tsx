import { useState } from 'react';
import { NEEDS, type Verdict } from './choices';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Six besoins, trois choix chacun (données fictives)',
  note: 'Pour chaque besoin, choisissez mentalement la meilleure option avant d’afficher l’évaluation. « Dépassé » désigne un choix encore utilisé mais déconseillé pour un nouveau projet.',
  cols: ['N°', 'Besoin', 'Option A', 'Option B', 'Option C'],
  needs: { passwords: 'Stocker les mots de passe d’une application', disk: 'Chiffrer le disque d’un portable', web: 'Protéger les échanges d’un site web', 'file-integrity': 'Vérifier qu’un fichier téléchargé n’a pas été altéré', signature: 'Signer une mise à jour logicielle', 'secret-share': 'Envoyer un secret à un correspondant lointain' } as Record<string, string>,
  opts: { md5: 'Empreinte MD5', 'sha256-plain': 'SHA-256 sans sel ni coût', argon2: 'Argon2 avec sel (fonction de dérivation lente)', xor: 'XOR avec une clé courte répétée', 'aes-xts': 'AES en mode XTS', 'aes-ecb': 'AES en mode ECB', tls10: 'TLS 1.0', tls12: 'TLS 1.2 avec des suites de chiffrement anciennes autorisées', tls13: 'TLS 1.3', crc32: 'Somme de contrôle CRC32', sha256: 'Empreinte SHA-256 publiée par l’éditeur', 'rsa512': 'Signature RSA avec une clé de 512 bits', ed25519: 'Signature Ed25519 avec clé privée protégée', 'hash-only': 'Simple empreinte jointe à la mise à jour', 'email-clear': 'L’envoyer en clair par courriel', pubkey: 'Le chiffrer avec la clé publique du destinataire', base64: 'L’encoder en base64' } as Record<string, string>,
  verdict: { good: 'Bon choix', weak: 'Dépassé', wrong: 'À écarter' } as Record<Verdict, string>,
  reveal: 'Afficher l’évaluation', hide: 'Masquer l’évaluation',
};
const en: typeof fr = {
  title: 'Six needs, three choices each (fictional data)',
  note: 'For each need, mentally pick the best option before showing the evaluation. “Outdated” designates a choice still in use but discouraged for a new project.',
  cols: ['No.', 'Need', 'Option A', 'Option B', 'Option C'],
  needs: { passwords: 'Store an application’s passwords', disk: 'Encrypt a laptop’s disk', web: 'Protect a website’s exchanges', 'file-integrity': 'Check that a downloaded file was not altered', signature: 'Sign a software update', 'secret-share': 'Send a secret to a distant correspondent' },
  opts: { md5: 'MD5 hash', 'sha256-plain': 'SHA-256 with no salt or cost', argon2: 'Argon2 with salt (slow derivation function)', xor: 'XOR with a short repeated key', 'aes-xts': 'AES in XTS mode', 'aes-ecb': 'AES in ECB mode', tls10: 'TLS 1.0', tls12: 'TLS 1.2 with old cipher suites allowed', tls13: 'TLS 1.3', crc32: 'CRC32 checksum', sha256: 'SHA-256 hash published by the vendor', rsa512: 'RSA signature with a 512-bit key', ed25519: 'Ed25519 signature with a protected private key', 'hash-only': 'A plain hash attached to the update', 'email-clear': 'Send it in clear text by email', pubkey: 'Encrypt it with the recipient’s public key', base64: 'Encode it in base64' },
  verdict: { good: 'Good choice', weak: 'Outdated', wrong: 'To rule out' },
  reveal: 'Show the evaluation', hide: 'Hide the evaluation',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function CryptoChoiceLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="cc-t">
        <h3 id="cc-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {NEEDS.map((n) => (
                <tr key={n.id}>
                  <td>{n.id}</td>
                  <td>{T.needs[n.key]}</td>
                  {n.options.map((o) => (
                    <td key={o.id}>{T.opts[o.id]}{shown ? <><br /><strong>{T.verdict[o.verdict]}</strong></> : null}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.reveal}
        </button>
      </section>
    </div>
  );
}
