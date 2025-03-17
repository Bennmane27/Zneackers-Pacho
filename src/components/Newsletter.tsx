import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Rejoignez notre newsletter</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Inscrivez-vous pour recevoir les dernières actualités, les sorties exclusives et des offres spéciales directement dans votre boîte de réception.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="btn-primary whitespace-nowrap">
            S'inscrire
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          En vous inscrivant, vous acceptez de recevoir des emails marketing de Pacho. Vous pouvez vous désinscrire à tout moment.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;