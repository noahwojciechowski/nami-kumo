import React from 'react';

interface HeroProps {
  onMenuClick: () => void;
  onReservationClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onMenuClick, onReservationClick }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-nami-cream/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nami-cream"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <span className="block text-nami-wood tracking-[0.3em] text-sm md:text-base mb-6 uppercase animate-fade-in-up">
          Cuisine Japonaise Contemporaine
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-nami-wood mb-8 leading-tight tracking-wide">
          NAMI <span className="italic font-light">KUMO</span>
        </h1>
        <p className="text-nami-wood/90 text-lg md:text-xl font-light max-w-lg mx-auto mb-12 leading-relaxed">
          L'harmonie entre tradition et modernité. Une expérience culinaire où chaque détail respire le calme.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onReservationClick}
              className="px-8 py-3 bg-nami-wood text-nami-cream tracking-widest text-sm uppercase hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver une table
            </button>
            <button 
              onClick={onMenuClick}
              className="px-8 py-3 border border-nami-wood text-nami-wood tracking-widest text-sm uppercase hover:bg-nami-wood hover:text-nami-cream transition-all duration-300"
            >
              Découvrir le menu
            </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-nami-wood opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};