import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home'; // ✅ Home includes Hero
import Features from './component/Features';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
