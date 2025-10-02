import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <div className="container">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  );
}
