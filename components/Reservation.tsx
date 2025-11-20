import React, { useState } from 'react';
import { DatePicker } from './DatePicker';

export const Reservation: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate) {
      // In a real app, show a proper error state
      return; 
    }

    // Simulate API processing
    setIsSubmitted(true);
  };

  return (
    <section id="reservation" className="py-24 px-6 bg-nami-wood text-nami-cream relative overflow-hidden">
       {/* Decorative elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-nami-sand opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-nami-earth opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-nami-cream mb-6">Réserver une Table</h2>
          <p className="text-nami-cream/80 font-light max-w-xl mx-auto">
            Pour garantir le calme et la qualité de service, nous accueillons un nombre limité de convives chaque soir.
          </p>
        </div>

        <div className="bg-nami-cream p-8 md:p-12 rounded-sm shadow-2xl max-w-3xl mx-auto min-h-[400px] flex flex-col justify-center transition-all duration-500">
          {isSubmitted ? (
            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-nami-wood/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-nami-wood" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl text-nami-wood mb-4">Demande Reçue</h3>
              <p className="text-nami-wood/80 mb-8 max-w-md mx-auto leading-relaxed">
                Merci de votre confiance. Notre équipe a bien reçu votre demande de réservation et vous contactera très prochainement pour la confirmer.
              </p>
              <button 
                onClick={() => { setIsSubmitted(false); setSelectedDate(null); }}
                className="text-nami-earth hover:text-nami-wood underline text-sm tracking-widest uppercase transition-colors"
              >
                Effectuer une autre réservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-nami-wood mb-2">Nom</label>
                  <input required type="text" className="bg-transparent border-b border-nami-earth py-2 text-nami-wood focus:outline-none focus:border-nami-wood transition-colors" placeholder="Votre nom" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-nami-wood mb-2">Téléphone</label>
                  <input required type="tel" className="bg-transparent border-b border-nami-earth py-2 text-nami-wood focus:outline-none focus:border-nami-wood transition-colors" placeholder="06..." />
                </div>
                <div className="flex flex-col z-20">
                  <label className="text-xs uppercase tracking-widest text-nami-wood mb-2">Date</label>
                  <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
                </div>
                <div className="flex flex-col z-10">
                  <label className="text-xs uppercase tracking-widest text-nami-wood mb-2">Invités</label>
                  <select className="bg-transparent border-b border-nami-earth py-2 text-nami-wood focus:outline-none focus:border-nami-wood transition-colors cursor-pointer">
                    <option>2 Personnes</option>
                    <option>3 Personnes</option>
                    <option>4 Personnes</option>
                    <option>5+ (Nous contacter)</option>
                  </select>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <button type="submit" className="px-12 py-4 bg-nami-wood text-nami-cream text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-md w-full md:w-auto">
                  Confirmer la demande
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};