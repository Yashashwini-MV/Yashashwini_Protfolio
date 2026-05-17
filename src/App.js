import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function Home({ theme, toggleTheme }) {
  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* HERO WITHOUT PARTICLES */}
      <Hero />

      {/* PARTICLES ONLY AFTER HERO */}
      <div className="site-particles">
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  };

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;