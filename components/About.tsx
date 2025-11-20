import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-nami-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-nami-earth rounded-sm opacity-50 transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
          <img 
            src="/images/sushi-chef.jpg" 
            alt="Chef preparing sushi" 
            className="relative w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out rounded-sm shadow-xl"
          />
        </div>
        
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-px w-12 bg-nami-wood"></div>
            <span className="text-nami-wood tracking-widest text-sm uppercase">L'Esprit Nami Kumo</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-nami-wood leading-tight">
            Silence, Art & <br/> <span className="italic text-nami-earth">Sérénité</span>
          </h2>
          
          <p className="text-nami-wood/80 leading-relaxed text-lg font-light">
            Chez Nami Kumo, nous croyons que la cuisine est une forme de méditation. 
            Inspirés par la simplicité du bois (Kumo) et la fluidité de la vague (Nami), 
            nous créons un espace hors du temps.
          </p>
          
          <p className="text-nami-wood/80 leading-relaxed text-lg font-light">
            Nos ingrédients sont sélectionnés avec rigueur, respectant les saisons et le savoir-faire artisanal. 
            Des sushis sculptés comme des bijoux aux bouillons mijotés pendant des heures, 
            chaque plat raconte une histoire de patience et d'équilibre.
          </p>

          <div className="pt-4">
             <div className="grid grid-cols-2 gap-8">
                <div>
                    <h4 className="font-serif text-2xl text-nami-wood mb-2">Omakase</h4>
                    <p className="text-sm text-nami-earth uppercase tracking-wider">Confiance au chef</p>
                </div>
                <div>
                    <h4 className="font-serif text-2xl text-nami-wood mb-2">Zen</h4>
                    <p className="text-sm text-nami-earth uppercase tracking-wider">Ambiance apaisée</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};