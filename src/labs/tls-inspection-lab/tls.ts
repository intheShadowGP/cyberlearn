// Moteur pur (testé) du laboratoire d'analyse d'une configuration TLS / chaîne de certificats.
// L'apprenant inspecte des configurations serveur et identifie les défauts à corriger.

export interface TlsConfig {
  hostname: string;
  certCN: string;
  certSAN: string[];
  notAfter: string; // ISO (date d'expiration)
  chainComplete: boolean; // l'intermédiaire est-il envoyé ?
  protocols: string[]; // ex. ['TLS1.0','TLS1.2','TLS1.3']
  hsts: boolean;
}

export interface Finding {
  code: string;
  severity: 'haute' | 'moyenne' | 'faible';
  message: string;
}

/** Date de référence de l'atelier (le « maintenant » simulé). */
export const NOW = '2026-11-16';

const OBSOLETE = ['TLS1.0', 'TLS1.1', 'SSL3.0'];

/** Le nom demandé est-il couvert par le certificat (SAN, avec gestion d'un joker *.) ? */
export function hostnameCovered(hostname: string, san: string[]): boolean {
  const h = hostname.toLowerCase();
  return san.some((entry) => {
    const e = entry.toLowerCase();
    if (e.startsWith('*.')) {
      const suffix = e.slice(1); // ".exemple.fr"
      const firstDot = h.indexOf('.');
      return firstDot > 0 && h.slice(firstDot) === suffix;
    }
    return e === h;
  });
}

/** Analyse une configuration et renvoie les défauts, du plus grave au moins grave. */
export function analyzeTls(cfg: TlsConfig, now: string = NOW): Finding[] {
  const findings: Finding[] = [];
  if (cfg.notAfter < now) {
    findings.push({ code: 'expired', severity: 'haute', message: `Certificat expiré le ${cfg.notAfter}.` });
  }
  if (!hostnameCovered(cfg.hostname, cfg.certSAN)) {
    findings.push({ code: 'name-mismatch', severity: 'haute', message: `Le nom demandé (${cfg.hostname}) n’est pas couvert par le champ SAN du certificat.` });
  }
  const obsolete = cfg.protocols.filter((p) => OBSOLETE.includes(p));
  if (obsolete.length) {
    findings.push({ code: 'weak-protocol', severity: 'haute', message: `Protocoles obsolètes activés : ${obsolete.join(', ')} (RFC 8996).` });
  }
  if (!cfg.chainComplete) {
    findings.push({ code: 'incomplete-chain', severity: 'moyenne', message: 'Chaîne incomplète : le certificat intermédiaire n’est pas envoyé ; certains clients échoueront.' });
  }
  if (!cfg.hsts) {
    findings.push({ code: 'no-hsts', severity: 'faible', message: 'En-tête HSTS absent : le retour en HTTP n’est pas empêché.' });
  }
  const order = { haute: 0, moyenne: 1, faible: 2 };
  return findings.sort((a, b) => order[a.severity] - order[b.severity]);
}

export function isSecure(cfg: TlsConfig, now: string = NOW): boolean {
  return analyzeTls(cfg, now).length === 0;
}

/** Configurations proposées à l'analyse. */
export const PRESETS: readonly { id: string; label: string; cfg: TlsConfig }[] = [
  {
    id: 'ok',
    label: 'Serveur correctement configuré',
    cfg: { hostname: 'www.exemple.fr', certCN: 'www.exemple.fr', certSAN: ['exemple.fr', 'www.exemple.fr'], notAfter: '2027-02-28', chainComplete: true, protocols: ['TLS1.2', 'TLS1.3'], hsts: true },
  },
  {
    id: 'expire',
    label: 'Certificat expiré',
    cfg: { hostname: 'www.exemple.fr', certCN: 'www.exemple.fr', certSAN: ['www.exemple.fr'], notAfter: '2026-09-01', chainComplete: true, protocols: ['TLS1.2', 'TLS1.3'], hsts: true },
  },
  {
    id: 'mismatch',
    label: 'Nom non couvert + chaîne incomplète',
    cfg: { hostname: 'boutique.exemple.fr', certCN: 'www.exemple.fr', certSAN: ['www.exemple.fr'], notAfter: '2027-02-28', chainComplete: false, protocols: ['TLS1.2', 'TLS1.3'], hsts: true },
  },
  {
    id: 'legacy',
    label: 'Protocoles obsolètes et pas de HSTS',
    cfg: { hostname: 'portail.exemple.fr', certCN: 'portail.exemple.fr', certSAN: ['*.exemple.fr'], notAfter: '2027-02-28', chainComplete: true, protocols: ['TLS1.0', 'TLS1.1', 'TLS1.2'], hsts: false },
  },
];
