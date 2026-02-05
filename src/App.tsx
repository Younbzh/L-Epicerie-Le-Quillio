import React, { useState, useEffect } from 'react';
import { ChefHat, MapPin, Phone, Mail, Clock, Heart, Wheat, Coffee, Utensils, Star, Navigation } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const ChezJustineApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-sky-50">
      
      {/* Hero Section - Impact visuel fort */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>

        {/* Animated wheat pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          {[...Array(20)].map((_, i) => (
            <Wheat 
              key={i}
              className="absolute text-amber-800"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        <div className={`relative z-10 text-center px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo */}
          <div className="mb-12 animate-fadeIn">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-amber-500/20 blur-2xl animate-pulse"></div>
              <img 
                src="/api/placeholder/400/300" 
                alt="Chez Justine Logo" 
                className="relative w-[400px] h-auto mx-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-teal-700 font-serif italic mb-4 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            {siteConfig.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <span className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-teal-800 font-medium border-2 border-teal-600/20 shadow-lg">
              <ChefHat className="inline w-5 h-5 mr-2 text-amber-600" />
              100% Fait Maison
            </span>
            <span className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-teal-800 font-medium border-2 border-amber-500/20 shadow-lg">
              <Wheat className="inline w-5 h-5 mr-2 text-amber-600" />
              Recettes Traditionnelles
            </span>
            <span className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-teal-800 font-medium border-2 border-teal-600/20 shadow-lg">
              <Heart className="inline w-5 h-5 mr-2 text-amber-600" />
              Accueil Chaleureux
            </span>
          </div>

          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-700 to-teal-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 animate-fadeIn"
            style={{animationDelay: '0.9s'}}
          >
            Réserver votre table
            <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-teal-600/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-teal-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire de Justine */}
      <section className="py-24 px-6 bg-gradient-to-br from-teal-900 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 100px)`
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
            <Star className="w-8 h-8 text-amber-400 animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif text-center mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
            {siteConfig.story.title}
          </h2>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="text-teal-50/90 text-center max-w-3xl mx-auto font-light">
              {siteConfig.story.intro}
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
              <p className="text-white/90 text-xl italic font-serif leading-loose">
                {siteConfig.story.philosophy}
              </p>
            </div>

            {/* Valeurs */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {siteConfig.story.values.map((value, idx) => (
                <div 
                  key={idx}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
                  style={{animationDelay: `${idx * 0.2}s`}}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    {idx === 0 && <ChefHat className="w-8 h-8 text-white" />}
                    {idx === 1 && <Wheat className="w-8 h-8 text-white" />}
                    {idx === 2 && <Heart className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-300 mb-4">{value.title}</h3>
                  <p className="text-teal-50/80 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance & Lieu */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-teal-900 mb-6">
              {siteConfig.ambiance.title}
            </h2>
            <p className="text-xl text-teal-700 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.ambiance.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.ambiance.features.map((feature, idx) => (
              <div 
                key={idx}
                className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-teal-600/20"
              >
                <div className="w-3 h-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300 shadow-lg"></div>
                <p className="text-lg text-teal-800 leading-relaxed flex-1">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Carte */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Utensils className="w-16 h-16 mx-auto mb-6 text-amber-600" />
            <h2 className="text-5xl md:text-6xl font-serif text-teal-900 mb-6">
              {siteConfig.offering.title}
            </h2>
          </div>

          <div className="space-y-12">
            {siteConfig.offering.sections.map((section, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-white to-teal-50/30 rounded-3xl p-10 shadow-xl border-2 border-teal-600/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl"
              >
                <h3 className="text-3xl font-bold text-teal-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-12 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></span>
                  {section.name}
                </h3>
                <p className="text-xl text-teal-700 mb-4 italic">{section.description}</p>
                {section.highlight && (
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold shadow-lg">
                    {section.highlight}
                  </div>
                )}
                {section.items && (
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg text-teal-800">
                        <Coffee className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Spécialités */}
          <div className="mt-12 bg-gradient-to-r from-teal-700 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
            <h4 className="text-2xl font-bold mb-6 text-amber-300">Et aussi...</h4>
            <div className="flex flex-wrap gap-3">
              {siteConfig.offering.specialties.map((specialty, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 px-6 bg-gradient-to-br from-teal-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-teal-900 mb-4">
              Ils ont adoré
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-teal-600/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-lg text-teal-800 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-teal-600 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-teal-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Clock className="w-16 h-16 mx-auto mb-6 text-teal-700" />
            <h2 className="text-5xl md:text-6xl font-serif text-teal-900 mb-4">
              Horaires d'ouverture
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Saison */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  ☀️
                </span>
                {siteConfig.hours.saison.label}
              </h3>
              <div className="space-y-4">
                {siteConfig.hours.saison.schedule.map((slot, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="font-medium">{slot.days}</span>
                    <span className="text-xl font-bold">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hors saison */}
            <div className="bg-gradient-to-br from-teal-700 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  🍂
                </span>
                {siteConfig.hours.horsSaison.label}
              </h3>
              <div className="space-y-4">
                {siteConfig.hours.horsSaison.schedule.map((slot, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="font-medium">{slot.days}</span>
                    <span className="text-xl font-bold">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="inline-block px-8 py-4 bg-amber-100 text-amber-900 rounded-full font-semibold text-lg border-2 border-amber-300 shadow-lg">
              ⭐ {siteConfig.hours.note}
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Localisation */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h2 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              {siteConfig.location.title}
            </h2>
            <p className="text-2xl text-teal-100">{siteConfig.location.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Infos contact */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-amber-300">Nous contacter</h3>
                
                <div className="space-y-5">
                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-200">Téléphone</p>
                      <p className="text-xl font-bold">{siteConfig.contact.phone}</p>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-200">Email</p>
                      <p className="text-xl font-bold break-all">{siteConfig.contact.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-200">Adresse</p>
                      <p className="text-xl font-bold">
                        {siteConfig.contact.address}<br />
                        {siteConfig.contact.postalCode} {siteConfig.contact.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* À proximité */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-xl font-bold mb-4 text-amber-300">À proximité</h4>
                <ul className="space-y-3">
                  {siteConfig.location.nearbyAttractions.map((attraction, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-teal-100">
                      <Navigation className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      {attraction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.5!2d${siteConfig.contact.coordinates.lng}!3d${siteConfig.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM3JzUyLjAiTiAywrAyNyc1MS44Ilc!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-950 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-serif text-amber-400 mb-2">{siteConfig.name}</h3>
            <p className="text-teal-300">{siteConfig.tagline}</p>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-teal-600 to-transparent mb-6"></div>
          
          <p className="text-teal-400 text-sm">
            {siteConfig.contact.address} - {siteConfig.contact.postalCode} {siteConfig.contact.city}
          </p>
          <p className="text-teal-400 text-sm mt-2">
            {siteConfig.contact.phone} - {siteConfig.contact.email}
          </p>
          
          <p className="text-teal-600 text-xs mt-8">
            © 2025 {siteConfig.name} - Tous droits réservés
          </p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>
    </div>
  );
};

export default ChezJustineApp;