import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Campus from './pages/Campus';
import Contact from './pages/Contact';
import Events from './pages/Events';
import StudentLife from './pages/StudentLife';

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
  const location = useLocation();

  // Sync heroMode state with route path
  useEffect(() => {
    if (location.pathname === '/home-2') {
      setHeroMode('home-2');
    } else if (location.pathname === '/home-1') {
      setHeroMode('home-1');
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-[#111827] selection:bg-[#DC2626] selection:text-white">
      <ScrollToTop />
      <Header heroMode={heroMode} setHeroMode={setHeroMode} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home heroMode={heroMode} />} />
          <Route path="/home-1" element={<Home heroMode="home-1" />} />
          <Route path="/home-2" element={<Home heroMode="home-2" />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="*" element={<Home heroMode={heroMode} />} />
        </Routes>
      </main>
      <Footer setHeroMode={setHeroMode} />
    </div>
  );
}
