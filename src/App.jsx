import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Scroll to top upon route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [heroMode, setHeroMode] = useState('home-1');

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#FFF8ED] text-[#152A40] selection:bg-[#F7C95E] selection:text-[#06335F]">
      <ScrollToTop />
      <Header heroMode={heroMode} setHeroMode={setHeroMode} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home heroMode={heroMode} />} />
          <Route path="*" element={<Home heroMode={heroMode} />} />
        </Routes>
      </main>
      <Footer setHeroMode={setHeroMode} />
    </div>
  );
}
