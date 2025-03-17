import React, { useState } from 'react';
import { ShoppingBag, Search, ChevronLeft, ChevronRight, User, Heart, Menu, X } from 'lucide-react';
import './App.css';

// Composants
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Trending from './components/Trending';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Bannière promotionnelle */}
      <div className="bg-black text-white py-2 text-center text-sm">
        Ce site n'est qu'une conception et n'est pas destiné à la vente.
      </div>
      
      {/* Navigation */}
      <Navbar setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Menu mobile */}
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
      
      {/* Contenu principal */}
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Trending />
        <Newsletter />
      </main>
      
      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default App;