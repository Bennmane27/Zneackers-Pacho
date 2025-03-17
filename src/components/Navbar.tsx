import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

interface NavbarProps {
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setMobileMenuOpen }) => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <button className="md:hidden mr-4" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <a href="/" className="text-2xl font-bold">PACHO.</a>
        </div>
        
        {/* Navigation principale - cachée sur mobile */}
        <div className="hidden md:flex space-x-8">
          <a href="/nouveautes" className="text-sm font-medium hover:text-gray-600">Nouveautés</a>
          <a href="/meilleures-ventes" className="text-sm font-medium hover:text-gray-600">Meilleures ventes</a>
          <a href="/naviguer" className="text-sm font-medium hover:text-gray-600">Naviguer</a>
          <a href="/vendre" className="text-sm font-medium hover:text-gray-600">Vendre</a>
        </div>
        
        {/* Icônes à droite */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-sm">€ EUR</span>
          </div>
          <button className="hover:text-gray-600">
            <Search size={20} />
          </button>
          <a href="/compte" className="hover:text-gray-600">
            <User size={20} />
          </a>
          <a href="/panier" className="hover:text-gray-600 relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </a>
        </div>
      </div>
      
      {/* Catégories populaires - cachées sur mobile */}
      <div className="hidden md:block border-t border-gray-200 mt-4">
        <div className="max-w-7xl mx-auto py-2 overflow-x-auto">
          <div className="flex space-x-6 whitespace-nowrap px-4">
            <a href="/vendre-article" className="text-xs font-medium hover:text-gray-600 border border-gray-300 rounded-full px-4 py-2">Vendre l'article</a>
            <a href="/air-jordan-1" className="text-xs font-medium hover:text-gray-600">Air Jordan 1</a>
            <a href="/nike-dunk" className="text-xs font-medium hover:text-gray-600">Nike Dunk</a>
            <a href="/new-balance" className="text-xs font-medium hover:text-gray-600">New Balance</a>
            <a href="/yeezy" className="text-xs font-medium hover:text-gray-600">Yeezy</a>
            <a href="/air-jordan-4" className="text-xs font-medium hover:text-gray-600">Air Jordan 4</a>
            <a href="/air-jordan-1-low" className="text-xs font-medium hover:text-gray-600">Air Jordan 1 Low</a>
            <a href="/yeezy-350" className="text-xs font-medium hover:text-gray-600">Yeezy 350</a>
            <a href="/yeezy-slides" className="text-xs font-medium hover:text-gray-600">Yeezy Slides</a>
            <a href="/dunk-high" className="text-xs font-medium hover:text-gray-600">Dunk High</a>
            <a href="/yeezy-700" className="text-xs font-medium hover:text-gray-600">Yeezy 700</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;