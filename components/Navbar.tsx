import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isMenuPage?: boolean;
  onNavigateHome: () => void;
  onNavigateMenu: () => void;
  onNavigateReservation: () => void;
  onNavigateAbout: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isMenuPage,
  onNavigateHome, 
  onNavigateMenu, 
  onNavigateReservation,
  onNavigateAbout,
  onNavigateSection
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 flex justify-between items-center
    ${scrolled ? 'bg-nami-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`;

  const handleSectionClick = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    }
  };

  return (
    <nav className={navClasses}>
      <button onClick={onNavigateHome} className="text-2xl font-serif font-medium tracking-widest text-nami-wood cursor-pointer focus:outline-none">
        NAMI KUMO
      </button>
      <div className="hidden md:flex space-x-8 items-center">
        {isMenuPage ? (
          <>
            <button onClick={() => handleSectionClick('starters')} className="text-nami-wood/80 hover:text-nami-wood text-sm tracking-widest uppercase transition-colors focus:outline-none">
              Entrées
            </button>
            <button onClick={() => handleSectionClick('sushi')} className="text-nami-wood/80 hover:text-nami-wood text-sm tracking-widest uppercase transition-colors focus:outline-none">
              Sushi
            </button>
            <button onClick={() => handleSectionClick('mains')} className="text-nami-wood/80 hover:text-nami-wood text-sm tracking-widest uppercase transition-colors focus:outline-none">
              Plats
            </button>
             <button onClick={() => handleSectionClick('desserts')} className="text-nami-wood/80 hover:text-nami-wood text-sm tracking-widest uppercase transition-colors focus:outline-none">
              Desserts
            </button>
            <button onClick={() => handleSectionClick('drinks')} className="text-nami-wood/80 hover:text-nami-wood text-sm tracking-widest uppercase transition-colors focus:outline-none">
              Boissons
            </button>
          </>
        ) : (
          <>
            <button onClick={onNavigateAbout} className="text-nami-wood/80 hover:text-nami-wood text-sm tracking-widest uppercase transition-colors focus:outline-none">
              À propos
            </button>
            <button onClick={onNavigateMenu} className="text-nami-wood/80 hover:text-nami-wood text-sm tracking-widest uppercase transition-colors focus:outline-none">
              Menu
            </button>
          </>
        )}
        
        <button 
          onClick={onNavigateReservation} 
          className="px-6 py-2 border border-nami-wood text-nami-wood hover:bg-nami-wood hover:text-nami-cream transition-all duration-300 text-sm tracking-widest uppercase focus:outline-none"
        >
          Réserver
        </button>
      </div>
      {/* Mobile Menu Button placeholder */}
      <button className="md:hidden text-nami-wood">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};