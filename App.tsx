import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuHighlights } from './components/MenuHighlights';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { MenuPage } from './components/MenuPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateMenu = () => {
    setCurrentPage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateReservation = () => {
    // If on menu page, switch to home first
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for render then scroll
      setTimeout(() => {
        const section = document.getElementById('reservation');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on home, just scroll
      const section = document.getElementById('reservation');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateAbout = () => {
     if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const section = document.getElementById('about');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById('about');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleNavigateSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-nami-cream text-nami-wood font-sans selection:bg-nami-earth selection:text-nami-cream">
      <Navbar 
        isMenuPage={currentPage === 'menu'}
        onNavigateHome={handleNavigateHome}
        onNavigateMenu={handleNavigateMenu}
        onNavigateReservation={handleNavigateReservation}
        onNavigateAbout={handleNavigateAbout}
        onNavigateSection={handleNavigateSection}
      />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero 
              onMenuClick={handleNavigateMenu} 
              onReservationClick={handleNavigateReservation} 
            />
            <About />
            <MenuHighlights onSeeAllClick={handleNavigateMenu} />
            <Reservation />
          </>
        ) : (
          <MenuPage />
        )}
      </main>
      <Footer />
    </div>
  );
}