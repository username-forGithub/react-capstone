import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Listing from './pages/Listing';
import Single from './pages/Single';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/details/:Id" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
