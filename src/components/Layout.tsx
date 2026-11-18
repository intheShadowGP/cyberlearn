import { useEffect, useRef, useState, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { onUpdateAvailable } from '../sw/register';
import { Logo } from './Logo';
import { NavMenu, type NavMenuItem } from './NavMenu';

// « Formation » regroupe les fonctionnalités d'apprentissage. Le catalogue (Formations)
// y figure en tête pour rester accessible malgré la simplification de la barre principale.
const FORMATION: NavMenuItem[] = [
  { to: '/catalogue', label: 'Catalogue des cours' },
  { to: '/laboratoires', label: 'Laboratoires' },
  { to: '/evaluations', label: 'Évaluations' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/revisions', label: 'Révisions' },
  { to: '/glossaire', label: 'Glossaire' },
];

const PROFIL: NavMenuItem[] = [
  { to: '/profil', label: 'Mon profil', end: true },
  { to: '/competences', label: 'Compétences' },
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
              <li>
                <NavLink to="/" end onClick={() => setMenuOpen(false)}>Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/tableau-de-bord" onClick={() => setMenuOpen(false)}>Tableau de bord</NavLink>
              </li>
              <NavMenu label="Formation" items={FORMATION} onNavigate={() => setMenuOpen(false)} />
              <NavMenu label="Profil" items={PROFIL} onNavigate={() => setMenuOpen(false)} />
              <li>
                <NavLink to="/parametres" className="nav-settings" onClick={() => setMenuOpen(false)}>Paramètres</NavLink>
              </li>
              <li className="nav-search-item">
                <NavLink to="/recherche" className="nav-search" aria-label="Rechercher" title="Rechercher" onClick={() => setMenuOpen(false)}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
                  </svg>
                  <span className="nav-search-text">Rechercher</span>
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
            <Link to="/documentation">Documentation</Link> · <Link to="/confidentialite">Confidentialité</Link> · <Link to="/a-propos">À propos et éthique</Link> · <Link to="/parametres">Données et paramètres</Link>
          </nav>
          <p className="muted" data-testid="build-id">Version {__BUILD_ID__}</p>
        </div>
      </footer>
    </>
  );
}
