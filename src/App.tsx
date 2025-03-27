import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { useThemeStore } from './store/themeStore';

function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200`}>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;