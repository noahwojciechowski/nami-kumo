import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nami-cream py-16 px-6 border-t border-nami-earth/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div className="space-y-4">
          <h3 className="font-serif text-2xl text-nami-wood">NAMI KUMO</h3>
          <p className="text-sm text-nami-wood/70 leading-relaxed">
            Une expérience culinaire japonaise<br/>au cœur de la ville.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-nami-earth">Contact</h4>
          <p className="text-nami-wood/80 text-sm">
            12 Rue de la Sérénité<br/>
            75001 Paris, France
          </p>
          <p className="text-nami-wood/80 text-sm mt-2">
            contact@namikumo.fr<br/>
            01 23 45 67 89
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-nami-earth">Horaires</h4>
          <p className="text-nami-wood/80 text-sm">
            Mar - Sam : 12h00 - 14h30<br/>
            Mar - Dim : 19h00 - 22h30
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="#" className="text-nami-earth hover:text-nami-wood transition-colors text-xs uppercase tracking-wider">Instagram</a>
            <a href="#" className="text-nami-earth hover:text-nami-wood transition-colors text-xs uppercase tracking-wider">Facebook</a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center text-xs text-nami-earth/60">
        &copy; {new Date().getFullYear()} Nami Kumo.
      </div>
    </footer>
  );
};