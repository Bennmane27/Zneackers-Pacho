import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
    title: "Les MEILLEURES VENTES UGG",
    subtitle: "ESSENTIELS POUR TOUTES LES SAISONS",
    description: "Des classiques confortables aux styles tendance, découvrez les UGG faits pour durer.",
    buttonText: "ACHETEZ MAINTENANT"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
    title: "NOUVELLES JORDAN",
    subtitle: "NOS SILHOUETTES LES PLUS POPULAIRES",
    description: "Les modèles les plus recherchés, les coloris exclusifs et les éditions limitées.",
    buttonText: "ACHETEZ MAINTENANT"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
    title: "COLLECTION EXCLUSIVE",
    subtitle: "ÉDITION LIMITÉE",
    description: "Découvrez notre nouvelle collection exclusive disponible uniquement sur LACED.",
    buttonText: "DÉCOUVRIR"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide w-full ${
            index === currentSlide ? 'block' : 'hidden'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-2">{slide.title}</h2>
              <p className="text-white text-xl md:text-2xl font-medium mb-6">{slide.subtitle}</p>
              <p className="text-white text-base md:text-lg mb-8 max-w-xl mx-auto">{slide.description}</p>
              <button className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition duration-300">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Contrôles du slider */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;