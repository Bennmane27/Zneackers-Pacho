import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">À propos de LACED</h3>
            <ul className="space-y-2">
              <li><a href="/a-propos" className="text-gray-300 hover:text-white text-sm">À propos de nous</a></li>
              <li><a href="/comment-ca-marche" className="text-gray-300 hover:text-white text-sm">Comment ça marche</a></li>
              <li><a href="/authenticite" className="text-gray-300 hover:text-white text-sm">Garantie d'authenticité</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
              <li><a href="/carriere" className="text-gray-300 hover:text-white text-sm">Carrières</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Aide</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-300 hover:text-white text-sm">FAQ</a></li>
              <li><a href="/livraison" className="text-gray-300 hover:text-white text-sm">Livraison & Retours</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white text-sm">Contact</a></li>
              <li><a href="/conditions" className="text-gray-300 hover:text-white text-sm">Conditions générales</a></li>
              <li><a href="/confidentialite" className="text-gray-300 hover:text-white text-sm">Politique de confidentialité</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Catégories populaires</h3>
            <ul className="space-y-2">
              <li><a href="/nike" className="text-gray-300 hover:text-white text-sm">Nike</a></li>
              <li><a href="/adidas" className="text-gray-300 hover:text-white text-sm">Adidas</a></li>
              <li><a href="/jordan" className="text-gray-300 hover:text-white text-sm">Jordan</a></li>
              <li><a href="/new-balance" className="text-gray-300 hover:text-white text-sm">New Balance</a></li>
              <li><a href="/yeezy" className="text-gray-300 hover:text-white text-sm">Yeezy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
            
            <h3 className="text-lg font-bold mb-4">Téléchargez notre application</h3>
            <div className="flex space-x-4">
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 LACED. Tous droits réservés.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;