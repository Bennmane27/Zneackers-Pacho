import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Adidas SL 72 OG Leopard Print Womens",
    brand: "Adidas",
    price: 154,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Nike P-6000 Anthracite Smoke Grey",
    brand: "Nike",
    price: 164,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Adidas Samba OG Preloved Red Leopard Womens",
    brand: "Adidas",
    price: 185,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "adidas Handball Spezial Earth Strata Femme",
    brand: "Adidas",
    price: 124,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Air Jordan 4 Retro Fear",
    brand: "Air Jordan",
    price: 261,
    image: "https://images.unsplash.com/photo-1602033693132-485d76b22e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Produits populaires</h2>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <a href={`/produit/${product.id}`} className="block">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-semibold">{product.brand}</p>
                  <h3 className="text-sm text-gray-700 mb-1">{product.name}</h3>
                  <p className="font-semibold">{product.price}€</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="/tous-les-produits" className="btn-outline inline-block">
            Voir tous les produits
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;