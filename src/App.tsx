import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import IssueSummary from './pages/IssueSummary/IssueSummary';
import Preview from './pages/Preview/Preview';
import PageShell from './pages/PageShell/PageShell';

function App() {
  return (
    <div className="App">
      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/summary" element={<IssueSummary />} />
        </Routes>
      </PageShell>
    </div>
  );
}

export default App;
