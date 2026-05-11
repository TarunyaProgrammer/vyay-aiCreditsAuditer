import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuditPage from './pages/AuditPage';
import ResultPage from './pages/ResultPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import PricingPage from './pages/PricingPage';
import NotFoundPage from './pages/NotFoundPage';
import MethodologyPage from './pages/MethodologyPage';
import TermsPage from './pages/TermsPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="audit" element={<AuditPage />} />
        <Route path="result/:id" element={<ResultPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="methodology" element={<MethodologyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
