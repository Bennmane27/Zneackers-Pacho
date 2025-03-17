import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  setMobileMenuOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setMobileMenuOpen }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">LACED.</h2>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Menu principal</h3>
            <div className="space-y-3">
              <a href="/nouveautes" className="block py-2 text-base">Nouveautés</a>
              <a href="/meilleures-ventes" className="block py-2 text-base">Meilleures ventes</a>
              <a href="/naviguer" className="block py-2 text-base">Naviguer</a>
              <a href="/vendre" className="block py-2 text-base">Vendre</a>
              <a href="/compte" className="block py-2 text-base">Mon compte</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Catégories populaires</h3>
            <div className="space-y-3">
              <a href="/air-jordan-1" className="block py-2 text-base">Air Jordan 1</a>
              <a href="/nike-dunk" className="block py-2 text-base">Nike Dunk</a>
              <a href="/new-balance" className="block py-2 text-base">New Balance</a>
              <a href="/yeezy" className="block py-2 text-base">Yeezy</a>
              <a href="/air-jordan-4" className="block py-2 text-base">Air Jordan 4</a>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <a href="/vendre-article" className="block w-full py-3 text-center bg-black text-white font-medium rounded-md">
              Vendre un article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;