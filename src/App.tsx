import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { OnboardingWelcome } from './components/Onboarding';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useI18n, useLang } from './i18n';
import { isEnglishTextLoaded, loadEnglishText } from './content/registry';

// HashRouter : les routes vivent après « # », donc aucune réécriture serveur
// n'est nécessaire sur GitHub Pages, quel que soit le sous-chemin du dépôt.
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const ModulePage = lazy(() => import('./pages/ModulePage'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const LabsPage = lazy(() => import('./pages/LabsPage'));
const LabPage = lazy(() => import('./pages/LabPage'));
const AssessmentsPage = lazy(() => import('./pages/AssessmentsPage'));
const ExamPage = lazy(() => import('./pages/ExamPage'));
const ScenarioPage = lazy(() => import('./pages/ScenarioPage'));
const PathsPage = lazy(() => import('./pages/PathsPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const ReviewPage = lazy(() => import('./pages/ReviewPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PositioningTestPage = lazy(() => import('./pages/PositioningTestPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const DocumentationPage = lazy(() => import('./pages/DocumentationPage'));

/**
 * Les textes anglais des métadonnées sont chargés à la demande : tant qu'ils ne sont pas là,
 * l'interface anglaise n'est pas affichée (aucun texte français ne s'y glisse).
 */
function EnglishTextGate({ children }: { children: ReactNode }) {
  const lang = useLang();
  const [ready, setReady] = useState(isEnglishTextLoaded());
  useEffect(() => {
    if (lang === 'en' && !isEnglishTextLoaded()) {
      let live = true;
      void loadEnglishText().then(() => live && setReady(true));
      return () => { live = false; };
    }
    return undefined;
  }, [lang]);
  if (lang === 'en' && !(ready || isEnglishTextLoaded())) return <p className="loading" role="status">Loading…</p>;
  return <>{children}</>;
}

export function App() {
  const { t } = useI18n();
  return (
    <EnglishTextGate>
    <HashRouter>
      <Layout>
        <RoutedBoundary>
          <Suspense fallback={<p className="loading" role="status">{t('app.loading')}</p>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bienvenue" element={<OnboardingWelcome />} />
              <Route path="/positionnement" element={<PositioningTestPage />} />
              <Route path="/tableau-de-bord" element={<DashboardPage />} />
              <Route path="/catalogue" element={<CatalogPage />} />
              <Route path="/module/:id" element={<ModulePage />} />
              <Route path="/cours/:id" element={<CoursePage />} />
              <Route path="/laboratoires" element={<LabsPage />} />
              <Route path="/laboratoires/:id" element={<LabPage />} />
              <Route path="/evaluations" element={<AssessmentsPage />} />
              <Route path="/evaluations/:id" element={<ExamPage />} />
              <Route path="/epreuve/:id" element={<ScenarioPage />} />
              <Route path="/parcours" element={<PathsPage />} />
              <Route path="/parcours/:id" element={<PathsPage />} />
              <Route path="/parametres" element={<SettingsPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/glossaire" element={<GlossaryPage />} />
              <Route path="/recherche" element={<SearchPage />} />
              <Route path="/revisions" element={<ReviewPage />} />
              <Route path="/competences" element={<SkillsPage />} />
              <Route path="/profil" element={<ProfilePage />} />
              <Route path="/confidentialite" element={<PrivacyPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </RoutedBoundary>
      </Layout>
    </HashRouter>
    </EnglishTextGate>
  );
}

/** La frontière d'erreur est réinitialisée à chaque changement de page. */
function RoutedBoundary({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <ErrorBoundary key={pathname}>{children}</ErrorBoundary>;
}
