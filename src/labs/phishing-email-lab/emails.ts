/** Six courriels FICTIFS signalés à la boîte de signalement (domaines réservés à la documentation). */

export type Auth = 'pass' | 'fail' | 'none';

export interface Email {
  id: number;
  fromName: string;
  fromAddr: string;
  subject: string;
  /** Texte du lien affiché dans le message ; vide s'il n'y a pas de lien. */
  linkShown: string;
  /** Véritable adresse de destination du lien ; vide s'il n'y a pas de lien. */
  linkUrl: string;
  attachment: string;
  auth: Auth;
  dangerous: boolean;
}

export const EMAILS: Email[] = [
  { id: 1, fromName: 'Service Paie', fromAddr: 'paie@societe.example', subject: 'Votre bulletin de mars est disponible', linkShown: 'Intranet - Paie', linkUrl: 'https://intranet.societe.example/paie', attachment: '', auth: 'pass', dangerous: false },
  { id: 2, fromName: 'Banque Lumière', fromAddr: 'alerte@banque-verif.example', subject: 'Compte bloqué : confirmez sous 24 h', linkShown: 'www.banque-lumiere.example', linkUrl: 'https://banque-verif.example/login', attachment: '', auth: 'fail', dangerous: true },
  { id: 3, fromName: 'Jean Martin (PDG)', fromAddr: 'j.martin.pdg@mail.example.org', subject: 'Virement confidentiel urgent', linkShown: '', linkUrl: '', attachment: '', auth: 'none', dangerous: true },
  { id: 4, fromName: 'Colis Express', fromAddr: 'suivi@colis-express.example', subject: 'Votre colis est en attente', linkShown: '', linkUrl: '', attachment: 'suivi_colis.pdf.exe', auth: 'fail', dangerous: true },
  { id: 5, fromName: 'Papeterie Centrale', fromAddr: 'news@news.papeterie.example', subject: 'Catalogue de printemps', linkShown: 'Voir le catalogue', linkUrl: 'https://news.papeterie.example/catalogue', attachment: '', auth: 'pass', dangerous: false },
  { id: 6, fromName: 'Support Informatique', fromAddr: 'support@societe-it.example', subject: 'Réinitialisation de votre mot de passe', linkShown: 'Réinitialiser', linkUrl: 'https://societe.example.com.reset-portal.example/login', attachment: '', auth: 'pass', dangerous: true },
];

/** Nom d'hôte d'une adresse web (sans schéma, port ni chemin). Retourne null si la saisie n'est pas une adresse exploitable. */
export function hostOf(url: string): string | null {
  const m = /^(?:[a-z][a-z0-9+.-]*:\/\/)?([^/?#:\s]+)/i.exec(url.trim());
  if (!m) return null;
  const host = m[1]!.toLowerCase();
  return host.includes('.') ? host : null;
}

/** Domaine qui compte : les deux derniers libellés du nom d'hôte (simplification pédagogique, sans liste des suffixes publics). */
export function registrableDomain(host: string): string {
  const parts = host.split('.');
  return parts.slice(-2).join('.');
}

export function linkDomain(url: string): string | null {
  const h = hostOf(url);
  return h ? registrableDomain(h) : null;
}
