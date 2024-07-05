import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlagButton from './components/controls/FlagButton';
import LandingPage from './components/routes/LandingPage';
import EnLandingPage from './components/routes/EnLandingPage';
import EsLandingPage from './components/routes/EslandingPage';

function App() {
  return (
    <Router>
      <div>
        <FlagButton />
        <Routes>
          <Route path="/en" element={<EnLandingPage />} />
          <Route path="/es" element={<EsLandingPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
