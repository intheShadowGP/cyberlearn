import { lazy, Suspense, type ReactNode } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ErrorBoundary } from './components/ErrorBoundary';

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
const PathsPage = lazy(() => import('./pages/PathsPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export function App() {
  return (
    <HashRouter>
      <Layout>
        <RoutedBoundary>
          <Suspense fallback={<p className="loading" role="status">Chargement…</p>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tableau-de-bord" element={<DashboardPage />} />
              <Route path="/catalogue" element={<CatalogPage />} />
              <Route path="/module/:id" element={<ModulePage />} />
              <Route path="/cours/:id" element={<CoursePage />} />
              <Route path="/laboratoires" element={<LabsPage />} />
              <Route path="/laboratoires/:id" element={<LabPage />} />
              <Route path="/evaluations" element={<AssessmentsPage />} />
              <Route path="/evaluations/:id" element={<ExamPage />} />
              <Route path="/parcours" element={<PathsPage />} />
              <Route path="/parcours/:id" element={<PathsPage />} />
              <Route path="/parametres" element={<SettingsPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </RoutedBoundary>
      </Layout>
    </HashRouter>
  );
}

/** La frontière d'erreur est réinitialisée à chaque changement de page. */
function RoutedBoundary({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <ErrorBoundary key={pathname}>{children}</ErrorBoundary>;
}
