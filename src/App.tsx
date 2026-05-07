import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuditPage from './pages/AuditPage';
import ResultPage from './pages/ResultPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="audit" element={<AuditPage />} />
        <Route path="result/:id" element={<ResultPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
