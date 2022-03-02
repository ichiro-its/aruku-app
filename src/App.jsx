/* eslint no-unused-vars: ["error", { "args": "none" }] */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Walk from './WalkSettings';
import Init from './InitSettings';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Walk />} />
        <Route path="/Init" element={<Init />} />
      </Routes>
    </Router>
  );
}

export default App;
