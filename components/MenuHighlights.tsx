import React from 'react';
import { MenuItem } from '../types';

interface MenuHighlightsProps {
  onSeeAllClick: () => void;
}

const dishes: MenuItem[] = [
  {
    id: 1,
    name: "Donburi Wagyu",
    description: "Bœuf Wagyu A5, riz vinaigré tiède, jaune d'œuf confit au soja, truffe noire.",
    price: "45€",
    image: "/images/donburi-wagyu.jpg",
    category: "Signature"
  },
  {
    id: 2,
    name: "Sushis Créatifs",
    description: "Sélection de 8 pièces. Saumon brûlé, Saint-Jacques yuzu, Thon toro fumé.",
    price: "32€",
    image: "/images/sushi.jpg",
    category: "Sushi"
  },
  {
    id: 3,
    name: "Mochis Glacés Maison",
    description: "Thé vert matcha, Sésame noir, Fleur de cerisier. Servis avec thé Genmaicha.",
    price: "14€",
    image: "/images/mochi.jpg",
    category: "Dessert"
  }
];

export const MenuHighlights: React.FC<MenuHighlightsProps> = ({ onSeeAllClick }) => {
  return (
    <section id="menu" className="py-24 px-6 bg-nami-sand/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-nami-wood tracking-[0.2em] text-sm uppercase block mb-4">Le Goût de l'Excellence</span>
          <h2 className="font-serif text-4xl md:text-5xl text-nami-wood">Plats Signatures</h2>
          <div className="w-24 h-px bg-nami-earth mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dishes.map((dish) => (
            <div key={dish.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6 shadow-md">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              <div className="text-center px-4">
                <span className="text-xs text-nami-earth uppercase tracking-widest mb-2 block">{dish.category}</span>
                <h3 className="font-serif text-2xl text-nami-wood mb-3 group-hover:text-nami-earth transition-colors">{dish.name}</h3>
                <p className="text-nami-wood/70 font-light mb-4 leading-relaxed text-sm h-16 overflow-hidden">
                  {dish.description}
                </p>
                <span className="text-lg font-medium text-nami-wood border-b border-nami-earth/30 pb-1">
                  {dish.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button 
            onClick={onSeeAllClick}
            className="text-nami-wood uppercase tracking-widest text-sm border-b border-transparent hover:border-nami-wood transition-all pb-1"
          >
            Voir la carte complète
          </button>
        </div>
      </div>
    </section>
  );
};