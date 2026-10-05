import React from 'react';
import { MapPin, Phone, Mail, Clock, ShoppingBag, Coffee, Bed, Package, Wifi, Bike, Smartphone, Sun, Heart, Users, Home } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: siteConfig.colors.beigeChaud }}>
      {/* Hero Section */}
      <header className="relative overflow-hidden" style={{ 
        background: `linear-gradient(135deg, ${siteConfig.colors.orangeDoux} 0%, ${siteConfig.colors.jauneMiel} 100%)`
      }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, ${siteConfig.colors.blanc} 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-6 animate-bounce-slow">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-4" style={{ backgroundColor: siteConfig.colors.blanc, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <img 
                  src="/logo-epicerie.png"
                  alt="L'Épicerie"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight" style={{ 
                color: siteConfig.colors.blanc,
                fontFamily: "'Playfair Display', serif",
                textShadow: '3px 3px 6px rgba(0,0,0,0.2)'
              }}>
                L'ÉPICERIE
              </h1>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: siteConfig.colors.blanc }}>
                {siteConfig.tagline}
              </p>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg" style={{ 
              backgroundColor: siteConfig.colors.blanc,
              color: siteConfig.colors.rougeTerroir
            }}>
              <Heart className="w-5 h-5 fill-current" />
              <span>Ouvert 7j/7 pour vous servir !</span>
            </div>

            {/* Location */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-lg font-semibold" style={{ color: siteConfig.colors.blanc }}>
                <MapPin className="w-5 h-5" />
                <span>{siteConfig.contact.commune} • {siteConfig.contact.department}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="px-10 py-5 rounded-full text-lg font-black transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center gap-3"
                style={{ 
                  backgroundColor: siteConfig.colors.rougeTerroir,
                  color: siteConfig.colors.blanc
                }}
              >
                <Phone className="w-6 h-6" />
                {siteConfig.contact.phone}
              </a>

              <a 
                href="#horaires"
                className="px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-110 flex items-center gap-3"
                style={{ 
                  backgroundColor: siteConfig.colors.blanc,
                  color: siteConfig.colors.orangeDoux
                }}
              >
                <Clock className="w-6 h-6" />
                Nos horaires
              </a>
            </div>
          </div>
        </div>

        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z" fill={siteConfig.colors.beigeChaud}/>
          </svg>
        </div>
      </header>

      {/* Bienvenue Section */}
      <section className="py-20" style={{ backgroundColor: siteConfig.colors.blanc }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 rounded-full mb-6" style={{ backgroundColor: siteConfig.colors.jauneMiel }}>
            <Sun className="w-12 h-12" style={{ color: siteConfig.colors.blanc }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6" style={{ 
            color: siteConfig.colors.marron,
            fontFamily: "'Playfair Display', serif"
          }}>
            {siteConfig.presentation.title}
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto" style={{ color: siteConfig.colors.noirTexte }}>
            {siteConfig.presentation.description}
          </p>
        </div>
      </section>

      {/* Produits Section */}
      <section className="py-20" style={{ backgroundColor: siteConfig.colors.beigeChaud }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ 
              color: siteConfig.colors.marron,
              fontFamily: "'Playfair Display', serif"
            }}>
              {siteConfig.products.title}
            </h2>
            <p className="text-xl" style={{ color: siteConfig.colors.noirTexte }}>
              Du pain frais aux produits du terroir breton
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.products.categories.map((category, idx) => (
              <div 
                key={idx}
                className="rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  backgroundColor: siteConfig.colors.blanc,
                  border: `4px solid ${siteConfig.colors.orangeDoux}`
                }}
              >
                <div className="text-6xl mb-4">{category.emoji}</div>
                <h3 className="text-2xl font-black mb-4" style={{ color: siteConfig.colors.rougeTerroir }}>
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-lg">
                      <span style={{ color: siteConfig.colors.orangeDoux }}>•</span>
                      <span style={{ color: siteConfig.colors.noirTexte }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: siteConfig.colors.blanc }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full mb-4" style={{ backgroundColor: siteConfig.colors.vertNature }}>
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ 
              color: siteConfig.colors.marron,
              fontFamily: "'Playfair Display', serif"
            }}>
              {siteConfig.services.title}
            </h2>
            <p className="text-xl" style={{ color: siteConfig.colors.noirTexte }}>
              Pour faciliter votre quotidien
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.list.map((service, idx) => (
              <div 
                key={idx}
                className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: siteConfig.colors.beigeChaud }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-black mb-2" style={{ color: siteConfig.colors.rougeTerroir }}>
                  {service.name}
                </h3>
                <p style={{ color: siteConfig.colors.noirTexte }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terrasse Section */}
      <section className="py-20" style={{ 
        background: `linear-gradient(135deg, ${siteConfig.colors.vertNature} 0%, ${siteConfig.colors.jauneMiel} 100%)`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-full mb-4" style={{ backgroundColor: siteConfig.colors.blanc }}>
              <Coffee className="w-10 h-10" style={{ color: siteConfig.colors.orangeDoux }} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ 
              color: siteConfig.colors.blanc,
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}>
              {siteConfig.terrasse.title}
            </h2>
            <p className="text-2xl font-bold" style={{ color: siteConfig.colors.blanc }}>
              {siteConfig.terrasse.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-3xl p-8" style={{ backgroundColor: siteConfig.colors.blanc }}>
              <h3 className="text-2xl font-black mb-6" style={{ color: siteConfig.colors.rougeTerroir }}>
                {siteConfig.terrasse.boissons.title}
              </h3>
              <div className="space-y-6">
                {siteConfig.terrasse.boissons.categories.map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-lg mb-2" style={{ color: siteConfig.colors.marron }}>
                      {cat.name}
                    </h4>
                    <p style={{ color: siteConfig.colors.noirTexte }}>{cat.items.join(' • ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8" style={{ backgroundColor: siteConfig.colors.blanc }}>
              <h3 className="text-2xl font-black mb-6" style={{ color: siteConfig.colors.rougeTerroir }}>
                Nos Atouts
              </h3>
              <div className="space-y-4">
                {siteConfig.terrasse.atouts.map((atout, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: siteConfig.colors.jauneMiel }}>
                      <span style={{ color: siteConfig.colors.blanc }}>✓</span>
                    </div>
                    <span className="text-lg" style={{ color: siteConfig.colors.noirTexte }}>{atout}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-bold" style={{ color: siteConfig.colors.blanc }}>
              {siteConfig.hours.terrasse}
            </p>
          </div>
        </div>
      </section>

      {/* Hébergement Section */}
      <section className="py-20" style={{ backgroundColor: siteConfig.colors.blanc }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-full mb-4" style={{ backgroundColor: siteConfig.colors.orangeDoux }}>
              <Bed className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ 
              color: siteConfig.colors.marron,
              fontFamily: "'Playfair Display', serif"
            }}>
              {siteConfig.hebergement.title}
            </h2>
            <p className="text-xl" style={{ color: siteConfig.colors.noirTexte }}>
              {siteConfig.hebergement.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {siteConfig.hebergement.chambres.map((chambre, idx) => (
              <div 
                key={idx}
                className="rounded-3xl p-8"
                style={{ backgroundColor: siteConfig.colors.beigeChaud }}
              >
                <h3 className="text-2xl font-black mb-4" style={{ color: siteConfig.colors.rougeTerroir }}>
                  {chambre.type}
                </h3>
                <p className="text-3xl font-black mb-6" style={{ color: siteConfig.colors.orangeDoux }}>
                  {chambre.tarif}
                </p>
                <ul className="space-y-2">
                  {chambre.equipements.map((equip, equipIdx) => (
                    <li key={equipIdx} className="flex items-center gap-2">
                      <span style={{ color: siteConfig.colors.vertNature }}>✓</span>
                      <span style={{ color: siteConfig.colors.noirTexte }}>{equip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 text-center" style={{ backgroundColor: siteConfig.colors.jauneMiel }}>
            <h3 className="text-2xl font-black mb-4" style={{ color: siteConfig.colors.blanc }}>
              Services Inclus
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {siteConfig.hebergement.services.map((service, idx) => (
                <span key={idx} className="text-lg font-semibold" style={{ color: siteConfig.colors.blanc }}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horaires Section */}
      <section id="horaires" className="py-20" style={{ backgroundColor: siteConfig.colors.beigeChaud }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl shadow-2xl p-10" style={{ 
            backgroundColor: siteConfig.colors.blanc,
            border: `5px solid ${siteConfig.colors.orangeDoux}`
          }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-black text-2xl mb-4" style={{ 
                backgroundColor: siteConfig.colors.rougeTerroir,
                color: siteConfig.colors.blanc
              }}>
                <Clock className="w-8 h-8" />
                <span>HORAIRES</span>
              </div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {Object.entries(siteConfig.hours.schedule).map(([day, hours]) => (
                <div 
                  key={day}
                  className="flex items-center justify-between px-8 py-5 rounded-2xl font-bold text-lg"
                  style={{ 
                    backgroundColor: siteConfig.colors.beigeChaud,
                    color: siteConfig.colors.marron
                  }}
                >
                  <span className="text-xl">{day}</span>
                  <span className="text-xl">{hours}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 pt-6 border-t-4" style={{ borderColor: siteConfig.colors.orangeDoux }}>
              <p className="text-2xl font-black" style={{ color: siteConfig.colors.rougeTerroir }}>
                {siteConfig.hours.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20" style={{ backgroundColor: siteConfig.colors.blanc }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ 
              color: siteConfig.colors.marron,
              fontFamily: "'Playfair Display', serif"
            }}>
              Venez nous voir !
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-3xl p-8 shadow-xl" style={{ backgroundColor: siteConfig.colors.beigeChaud }}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: siteConfig.colors.rougeTerroir }}>
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2" style={{ color: siteConfig.colors.marron }}>Adresse</h3>
                      <p className="text-lg" style={{ color: siteConfig.colors.noirTexte }}>{siteConfig.contact.address}</p>
                      <p className="mt-2 font-semibold" style={{ color: siteConfig.colors.orangeDoux }}>
                        {siteConfig.localisation.acces}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: siteConfig.colors.rougeTerroir }}>
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2" style={{ color: siteConfig.colors.marron }}>Téléphone</h3>
                      <a 
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                        className="text-2xl font-black hover:underline"
                        style={{ color: siteConfig.colors.orangeDoux }}
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: siteConfig.colors.rougeTerroir }}>
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2" style={{ color: siteConfig.colors.marron }}>Email</h3>
                      <a 
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-lg font-bold hover:underline break-all"
                        style={{ color: siteConfig.colors.orangeDoux }}
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-6 text-center" style={{ 
                backgroundColor: siteConfig.colors.jauneMiel,
                color: siteConfig.colors.blanc
              }}>
                <h3 className="text-xl font-black mb-2">{siteConfig.localisation.titre}</h3>
                <p className="font-semibold mb-4">{siteConfig.localisation.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {siteConfig.localisation.proximite.map((lieu, idx) => (
                    <span key={idx} className="font-bold">
                      {lieu.ville} • {lieu.distance}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]" style={{ 
              border: `5px solid ${siteConfig.colors.orangeDoux}`
            }}>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.5!2d${siteConfig.contact.location.lng}!3d${siteConfig.contact.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEwJzAwLjEiTiAywrA1NScwMC4xIlc!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation L'Épicerie Le Quillio"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ 
        background: `linear-gradient(135deg, ${siteConfig.colors.marron} 0%, ${siteConfig.colors.orangeDoux} 100%)`,
        color: siteConfig.colors.blanc
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-4xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {siteConfig.name}
              </h3>
              <p className="text-xl">{siteConfig.tagline}</p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-sm">{siteConfig.contact.address}</p>
                <p className="font-bold text-lg">{siteConfig.contact.phone}</p>
                <p className="text-sm">{siteConfig.contact.email}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4">Horaires</h4>
              <p className="font-semibold">{siteConfig.hours.note}</p>
              <p className="text-sm mt-2">Lun-Sam : 7h-13h • 16h-20h</p>
              <p className="text-sm">Dim : 8h-13h</p>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm" style={{ borderColor: siteConfig.colors.jauneMiel }}>
            <p className="font-semibold">&copy; {new Date().getFullYear()} {siteConfig.fullName}. Tous droits réservés.</p>
            <p className="mt-2">{siteConfig.localisation.description}</p>
            <p className="mt-4">
              Site créé par <a href="https://www.avalon-stratege.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold transition-colors duration-200">Avalon Stratège</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Animations CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@400;600;700;900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;