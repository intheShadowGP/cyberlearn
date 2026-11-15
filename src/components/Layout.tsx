import { useEffect, useRef, useState, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { onUpdateAvailable } from '../sw/register';
import { Logo } from './Logo';

const NAV = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/tableau-de-bord', label: 'Tableau de bord' },
  { to: '/catalogue', label: 'Formations' },
  { to: '/laboratoires', label: 'Laboratoires' },
  { to: '/evaluations', label: 'Évaluations' },
  { to: '/parcours', label: 'Parcours' },
];

function useOnline(): boolean {
  const [online, setOnline] = useState(() => navigator.onLine);
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);
  return online;
}

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [applyUpdate, setApplyUpdate] = useState<(() => void) | null>(null);
  const online = useOnline();
  const first = useRef(true);

  useEffect(() => onUpdateAvailable((apply) => setApplyUpdate(() => apply)), []);

  // Accessibilité : à chaque changement de page, le focus va au contenu principal.
  useEffect(() => {
    setMenuOpen(false);
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#contenu" onClick={(e) => { e.preventDefault(); mainRef.current?.focus(); }}>
        Aller au contenu
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="CyberAcadémie, accueil">
            <Logo />
            <span>CyberAcadémie</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <nav id="main-nav" aria-label="Navigation principale" className={menuOpen ? 'open' : ''}>
            <ul>
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.end ?? false}>
                    {n.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/parametres" className="nav-settings">
                  Paramètres
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {(!online || applyUpdate) && (
        <div className="status-bar" role="status">
          {!online && <span>Hors ligne — les contenus déjà en cache restent disponibles et votre progression est enregistrée localement.</span>}
          {applyUpdate && (
            <span>
              Une nouvelle version est disponible.{' '}
              <button type="button" className="btn btn-small" onClick={() => applyUpdate()}>
                Mettre à jour
              </button>
            </span>
          )}
        </div>
      )}

      <main id="contenu" ref={mainRef} tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>
            <strong>CyberAcadémie</strong> — plateforme libre d’apprentissage, sans compte ni traçage. Vos données restent dans ce
            navigateur.
          </p>
          <p className="muted">
            Les techniques offensives présentées sont destinées exclusivement à des environnements autorisés. Tester un système
            sans autorisation est une infraction pénale (articles 323-1 et suivants du Code pénal).
          </p>
          <nav aria-label="Liens secondaires">
            <Link to="/a-propos">À propos, éthique et confidentialité</Link> · <Link to="/parametres">Données et paramètres</Link>
          </nav>
          <p className="muted" data-testid="build-id">Version {__BUILD_ID__}</p>
        </div>
      </footer>
    </>
  );
}
