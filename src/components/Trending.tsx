import React from 'react';

const clothing = [
  {
    id: 1,
    name: "Hoodie Essential Gris",
    brand: "Essentials",
    price: 89,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Sweatshirt Noir Premium",
    brand: "Stone Island",
    price: 195,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Hoodie Broken Planet",
    brand: "Broken Planet",
    price: 120,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Hoodie Space Trails",
    brand: "Space Trails",
    price: 110,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Hoodie Supreme Box Logo",
    brand: "Supreme",
    price: 250,
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const Trending: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">VÊTEMENTS</h2>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clothing.map((item) => (
            <div key={item.id} className="product-card group">
              <a href={`/vetement/${item.id}`} className="block">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-semibold">{item.brand}</p>
                  <h3 className="text-sm text-gray-700 mb-1">{item.name}</h3>
                  <p className="font-semibold">{item.price}€</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="/tous-les-vetements" className="btn-outline inline-block">
            Voir tous les vêtements
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trending;