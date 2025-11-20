import React, { useState, useEffect, useRef } from 'react';

interface MenuCategoryProps {
  title: string;
  items: { name: string; description: string; price: string; image?: string }[];
  id?: string;
}

interface AnimatedMenuItemProps {
  item: { name: string; description: string; price: string; image?: string };
  index: number;
}

const AnimatedMenuItem: React.FC<AnimatedMenuItemProps> = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`flex gap-6 group items-start transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
       {item.image && (
         <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
           <img 
             src={item.image} 
             alt={item.name} 
             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
             loading="lazy"
           />
         </div>
       )}
      <div className="flex-grow flex flex-col md:flex-row justify-between md:items-start w-full border-b border-nami-earth/10 pb-6 min-h-[6rem]">
        <div className="md:w-3/4">
          <h4 className="text-xl font-serif text-nami-wood group-hover:text-nami-earth transition-colors">{item.name}</h4>
          <p className="text-nami-wood/70 text-sm font-light mt-2 leading-relaxed">{item.description}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="text-lg font-medium text-nami-wood">{item.price}</span>
        </div>
      </div>
    </div>
  );
};

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items, id }) => (
  <div id={id} className="mb-16 scroll-mt-28">
    <h3 className="font-serif text-3xl text-nami-wood mb-8 text-center md:text-left border-b border-nami-earth/30 pb-4 inline-block pr-12">{title}</h3>
    <div className="space-y-8">
      {items.map((item, index) => (
        <AnimatedMenuItem key={index} item={item} index={index} />
      ))}
    </div>
  </div>
);

export const MenuPage: React.FC = () => {
  const menuData = {
    starters: [
      { 
        name: "Edamame à la Truffe", 
        description: "Fèves de soja vapeur, huile de truffe blanche, sel de Guérande.", 
        price: "9€",
        image: "/images/edamame.jpg"
      },
      { 
        name: "Tataki de Bœuf", 
        description: "Filet de bœuf saisi, sauce ponzu, oignons frits, micro-pousses.", 
        price: "18€",
        image: "/images/tataki.jpg"
      },
      { 
        name: "Gyoza Maison", 
        description: "Raviolis grillés au poulet et légumes, sauce soja sésame (5 pièces).", 
        price: "12€",
        image: "/images/gyoza.jpg"
      },
      { 
        name: "Soupe Miso Royale", 
        description: "Bouillon dashi, tofu soyeux, algues wakame, champignons shiitake, crabe.", 
        price: "14€",
        image: "/images/miso.jpg"
      }
    ],
    sushi: [
      { 
        name: "Plateau Omakase", 
        description: "Sélection du chef : 6 nigiris, 6 makis, 4 sashimis.", 
        price: "42€",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=300&auto=format&fit=crop"
      },
      { 
        name: "Dragon Roll", 
        description: "Tempura de crevette, avocat, concombre, anguille grillée, tobiko.", 
        price: "24€",
        image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=300&auto=format&fit=crop"
      },
      { 
        name: "Sashimi Moriawase", 
        description: "Assortiment de poissons crus (15 pièces) : Saumon, Thon, Daurade, Maquereau.", 
        price: "36€",
        image: "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=300&auto=format&fit=crop"
      },
      { 
        name: "Chirashi Nami", 
        description: "Bol de riz vinaigré, tranches de poissons variés, avocat, omelette japonaise.", 
        price: "28€",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=300&auto=format&fit=crop"
      }
    ],
    main: [
      { 
        name: "Saumon Teriyaki", 
        description: "Pavé de saumon grillé, sauce teriyaki maison, riz blanc, légumes de saison.", 
        price: "26€",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=300&auto=format&fit=crop"
      },
      { 
        name: "Katsu Curry", 
        description: "Porc pané panko, curry japonais doux, riz, pickles.", 
        price: "24€",
        image: "/images/katsu-curry.jpg"
      },
      { 
        name: "Udon Tempura", 
        description: "Bouillon chaud, nouilles épaisses, tempura de crevettes et légumes.", 
        price: "22€",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=300&auto=format&fit=crop"
      },
      { 
        name: "Black Cod Miso", 
        description: "Cabillaud mariné au miso blanc pendant 48h, cuit au four.", 
        price: "38€",
        image: "/images/black-cod-miso.jpg"
      }
    ],
    desserts: [
      { 
        name: "Mochis Glacés", 
        description: "Duo de mochis : Thé vert et Sésame noir.", 
        price: "10€",
        image: "/images/mochi.jpg"
      },
      { 
        name: "Cheesecake Yuzu", 
        description: "Cheesecake léger au citron yuzu, base sablée spéculoos.", 
        price: "12€",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=300&auto=format&fit=crop"
      },
      { 
        name: "Perles du Japon", 
        description: "Tapioca au lait de coco, mangue fraîche, coulis passion.", 
        price: "11€",
        image: "/images/perles-japon.jpg"
      }
    ],
    drinks: [
      {
        name: "Junmai Daiginjo (Saké)",
        description: "Saké premium frais, notes florales élégantes et texture soyeuse (12cl).",
        price: "16€",
        image: "/images/sake.jpg"
      },
      {
        name: "Thé Vert Sencha",
        description: "Thé vert japonais traditionnel, notes végétales et iodées, servi chaud.",
        price: "6€",
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=300&auto=format&fit=crop"
      },
      {
        name: "Matcha Latte",
        description: "Poudre de matcha cérémoniel, lait velouté, légère touche de miel.",
        price: "7€",
        image: "/images/matcha-latte.jpg"
      },
      {
        name: "Whisky Japonais",
        description: "Nikka From The Barrel, servi sec ou sur glace sculptée à la main (4cl).",
        price: "14€",
        image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=300&auto=format&fit=crop"
      }
    ]
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-nami-cream">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-nami-wood tracking-[0.3em] text-sm uppercase block mb-4">Notre Carte</span>
          <h1 className="font-serif text-5xl md:text-6xl text-nami-wood mb-8">Menu Dégustation</h1>
          <p className="text-nami-wood/80 max-w-2xl mx-auto font-light leading-relaxed">
            Une exploration des saveurs japonaises, préparée avec soin et respect des traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
          <div>
            <MenuCategory id="starters" title="Zensai (Entrées)" items={menuData.starters} />
            <MenuCategory id="sushi" title="Sushi & Sashimi" items={menuData.sushi} />
            <MenuCategory id="drinks" title="Nos Boissons" items={menuData.drinks} />
          </div>
          <div>
            <MenuCategory id="mains" title="Plats Principaux" items={menuData.main} />
            <MenuCategory id="desserts" title="Desserts" items={menuData.desserts} />
            
            <div className="mb-16 p-8 bg-nami-sand/20 border border-nami-earth/20 rounded-sm text-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
               <h3 className="font-serif text-2xl text-nami-wood mb-4">Accords Mets & Vins</h3>
               <p className="text-nami-wood/80 text-sm mb-4">Laissez notre sommelier vous guider avec une sélection de Sakés et Vins.</p>
               <p className="font-medium text-nami-wood">Accord 3 verres - 25€</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};