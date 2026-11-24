import { useEffect, useRef, useState, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { onUpdateAvailable } from '../sw/register';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { LanguageSwitch } from './LanguageSwitch';
import { useI18n, type MsgKey } from '../i18n';

// « Formation » regroupe les fonctionnalités d'apprentissage. Le catalogue (Formations)
// y figure en tête pour rester accessible malgré la simplification de la barre principale.
const FORMATION: { to: string; key: MsgKey; end?: boolean }[] = [
  { to: '/catalogue', key: 'nav.catalog' },
  { to: '/laboratoires', key: 'nav.labs' },
  { to: '/evaluations', key: 'nav.assessments' },
  { to: '/parcours', key: 'nav.paths' },
  { to: '/revisions', key: 'nav.review' },
  { to: '/glossaire', key: 'nav.glossary' },
];

const PROFIL: { to: string; key: MsgKey; end?: boolean }[] = [
  { to: '/profil', key: 'nav.myProfile', end: true },
  { to: '/competences', key: 'nav.skills' },
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
  const { t } = useI18n();
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
        {t('skip.content')}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label={t('brand.aria')}>
            <Logo />
            <span>{t('app.name')}</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{t('menu.toggle')}</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <nav id="main-nav" aria-label={t('nav.main.aria')} className={menuOpen ? 'open' : ''}>
            <ul>
              <li>
                <NavLink to="/" end onClick={() => setMenuOpen(false)}>{t('nav.home')}</NavLink>
              </li>
              <li>
                <NavLink to="/tableau-de-bord" onClick={() => setMenuOpen(false)}>{t('nav.dashboard')}</NavLink>
              </li>
              <NavMenu label={t('nav.training')} items={FORMATION.map((i) => ({ to: i.to, label: t(i.key), end: i.end }))} onNavigate={() => setMenuOpen(false)} />
              <NavMenu label={t('nav.profile')} items={PROFIL.map((i) => ({ to: i.to, label: t(i.key), end: i.end }))} onNavigate={() => setMenuOpen(false)} />
              <li>
                <NavLink to="/parametres" className="nav-settings" onClick={() => setMenuOpen(false)}>{t('nav.settings')}</NavLink>
              </li>
              <li className="nav-search-item">
                <NavLink to="/recherche" className="nav-search" aria-label={t('nav.search')} title={t('nav.search')} onClick={() => setMenuOpen(false)}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
                  </svg>
                  <span className="nav-search-text">{t('nav.search')}</span>
                </NavLink>
              </li>
              <li className="nav-lang-item">
                <LanguageSwitch />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {(!online || applyUpdate) && (
        <div className="status-bar" role="status">
          {!online && <span>{t('status.offline')}</span>}
          {applyUpdate && (
            <span>
              {t('status.update')}{' '}
              <button type="button" className="btn btn-small" onClick={() => applyUpdate()}>
                {t('status.updateBtn')}
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
            <strong>{t('app.name')}</strong> — {t('footer.tagline')}
          </p>
          <p className="muted">{t('footer.legal')}</p>
          <nav aria-label={t('footer.links.aria')}>
            <Link to="/documentation">{t('footer.docs')}</Link> · <Link to="/confidentialite">{t('footer.privacy')}</Link> · <Link to="/a-propos">{t('footer.about')}</Link> · <Link to="/parametres">{t('footer.data')}</Link>
          </nav>
          <p className="muted" data-testid="app-version">{t('footer.version', { v: __APP_VERSION__ })}</p>
          <p className="muted" data-testid="build-id">{t('footer.build', { id: __BUILD_ID__ })}</p>
        </div>
      </footer>
    </>
  );
}
