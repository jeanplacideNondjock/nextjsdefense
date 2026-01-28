"use client"

import React, { useState, useEffect, useRef } from 'react';

// Types TypeScript
interface CardItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  icon?: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
  sectionId: string;
}

const ViventIndoorPage: React.FC = () => {
  // États pour la navigation
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Références pour les sections
  const heroRef = useRef<HTMLElement>(null);
  const priestRef = useRef<HTMLElement>(null);
  const indoorRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Navigation items
  const navItems: NavItem[] = [
    { id: 'home', label: 'Accueil', icon: '🏠', sectionId: 'hero' },
    { id: 'priest', label: 'Philosophie', icon: '🔬', sectionId: 'priest-identity' },
    { id: 'stats', label: 'Résultats', icon: '📊', sectionId: 'stats-section' },
    { id: 'indoor', label: 'Solutions', icon: '🌿', sectionId: 'indoor-section' },
    { id: 'features', label: 'Fonctions', icon: '⚙️', sectionId: 'features-section' },
    { id: 'contact', label: 'Contact', icon: '📞', sectionId: 'contact-section' },
  ];

  // États pour les données
  const [indoorCards, setIndoorCards] = useState<CardItem[]>([
    {
      id: 1,
      title: "Contrôle Climatique Intérieur",
      description: "Système intelligent pour réguler température, humidité et CO2 dans vos espaces de culture intérieure.",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Éclairage LED Intelligent",
      description: "Systèmes d'éclairage LED programmables qui s'adaptent aux cycles de croissance des plantes.",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Hydroponie Automatisée",
      description: "Systèmes hydroponiques contrôlés automatiquement avec surveillance des nutriments en temps réel.",
      imageUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Surveillance 24/7",
      description: "Caméras et capteurs pour surveiller vos cultures à distance depuis votre smartphone.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ]);

  const [features, setFeatures] = useState<CardItem[]>([
    {
      id: 1,
      icon: "🌡️",
      title: "Contrôle Précis",
      description: "Maintenez des conditions parfaites pour chaque phase de croissance de vos plantes."
    },
    {
      id: 2,
      icon: "💡",
      title: "Économie d'Énergie",
      description: "Technologies LED avancées qui réduisent la consommation énergétique jusqu'à 60%."
    },
    {
      id: 3,
      icon: "🤖",
      title: "Automatisation Complète",
      description: "Programmez et oubliez : nos systèmes gèrent tout automatiquement."
    },
    {
      id: 4,
      icon: "📱",
      title: "Contrôle à Distance",
      description: "Gérez vos cultures depuis n'importe où avec notre application mobile."
    }
  ]);

  const [stats, setStats] = useState([
    { value: "+40%", label: "Croissance accélérée", icon: "📈" },
    { value: "-60%", label: "Économie d'eau", icon: "💧" },
    { value: "24/7", label: "Surveillance continue", icon: "👁️" },
    { value: "100%", label: "Contrôle automatisé", icon: "⚡" }
  ]);

  // Fonction pour faire défiler jusqu'à une section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Observateur d'intersection pour détecter la section active
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observer toutes les sections
    const sections = ['hero', 'priest-identity', 'stats-section', 'indoor-section', 'features-section', 'contact-section'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Effet pour détecter le scroll et le back-to-top
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
      
      // Barre de progression
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = scrolledPercent + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effet pour les animations
  useEffect(() => {
    const cards = document.querySelectorAll('.indoor-card, .feature-card, .stat-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="bg-[#0a1a0f] text-[#e8f5e9] min-h-screen overflow-x-hidden">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[rgba(0,255,100,0.1)] z-50">
        <div 
          id="progress-bar" 
          className="h-full `bg-gradient-to-r from-[#00cc66] to-[#00ff88] transition-all duration-300"
          style={{ width: '0%' }}
        />
      </div>
      
      {/* Back to Top Button */}
      <button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#00ff88] text-[#0a1a0f] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-40 shadow-lg shadow-[rgba(0,255,100,0.3)] hover:shadow-xl hover:shadow-[rgba(0,255,100,0.5)] hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef} 
        className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(rgba(10, 26, 15, 0.95), rgba(10, 26, 15, 0.9)),
              url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="container mx-auto px-5 md:px-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              IndoorGrowers Pro<br/>
              <span className="text-3xl md:text-4xl lg:text-5xl block mt-4">
                La Révolution de la Culture Intérieure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#b3e6b3] mb-10 animate-slide-up animation-delay-200 leading-relaxed">
              Transformez n`importe quel espace en environnement de culture optimal avec notre 
              système intelligent. Contrôle total, automatisation avancée et résultats garantis 
              pour des récoltes abondantes toute l`année.
            </p>
            
            <div className="animate-slide-up animation-delay-400">
              <button 
                className="`bg-gradient-to-r from-[#00cc66] to-[#00ff88] text-[#0a1a0f] font-semibold px-10 py-4 rounded-full text-lg flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-[rgba(0,255,100,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => scrollToSection('indoor-section')}
              >
                <span>🌿</span> Découvrir la Solution
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12 animate-slide-up animation-delay-600">
              {navItems.slice(1, 5).map((item) => (
                <button
                  key={item.id}
                  className="bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,100,0.3)] text-[#b3e6b3] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[rgba(0,255,100,0.1)] hover:text-[#00ff88] hover:-translate-y-0.5 transition-all duration-300"
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Identité Prêtre Section */}
      <section 
        id="priest-identity" 
        ref={priestRef} 
        className="py-20 bg-[rgba(26,71,42,0.1)]"
      >
        <div className="container mx-auto px-5 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00ff88]">
            <span className="mr-3">🔬</span>
            Notre Philosophie Technologique
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-80 lg:h-96 rounded-2xl `bg-gradient-to-br from-[#1a472a] to-[#2e8b57] flex items-center justify-center relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="text-center relative z-10">
                <div className="text-5xl mb-4">🌱</div>
                <div className="text-3xl font-bold mb-4">Innovation & Respect</div>
                <div className="text-xl opacity-90">La technologie au service de la vie</div>
              </div>
            </div>
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                Nous croyons en une approche où la technologie avancée rencontre le respect profond 
                des cycles naturels. Chaque paramètre de croissance est optimisé grâce à l`IA, 
                tout en préservant l`essence même du développement végétal.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Notre système apprend continuellement de vos plantes, s`adaptant à leurs besoins 
                spécifiques pour créer l`environnement parfait. Ce n`est pas juste de l`automatisation, 
                c`est une symbiose entre technologie et nature.
              </p>
              <button 
                className="`bg-gradient-to-r from-[#00cc66] to-[#00ff88] text-[#0a1a0f] font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-[rgba(0,255,100,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => scrollToSection('features-section')}
              >
                <span>⚡</span> Voir les Fonctionnalités
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats-section" 
        ref={statsRef} 
        className="py-20 bg-[rgba(26,71,42,0.2)]"
      >
        <div className="container mx-auto px-5 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00ff88]">
            Résultats Impressionnants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,100,0.2)] rounded-xl p-8 text-center transition-all duration-300 opacity-0 translate-y-8 hover:-translate-y-2 hover:border-[#00ff88] hover:shadow-xl hover:shadow-[rgba(0,255,100,0.2)]"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#00ff88] mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IndoorGrowers Section */}
      <section id="indoor-section" ref={indoorRef} className="py-20 text-center ml-30">
        <div className="container mx-auto px-5 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00ff88]">
            <span className="mr-3">🏠</span>
            Solutions IndoorGrowers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {indoorCards.map((card) => (
              <div 
                key={card.id} 
                className="indoor-card bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,100,0.2)] rounded-xl overflow-hidden transition-all duration-300 opacity-0 translate-y-8 hover:-translate-y-2 hover:border-[#00ff88] hover:shadow-xl hover:shadow-[rgba(0,255,100,0.3)]"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#00ff88] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#b3e6b3] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" ref={featuresRef} className="py-20">
        <div className="container mx-auto px-5 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00ff88]">
            <span className="mr-3">⚡</span>
            Fonctionnalités Avancées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="feature-card bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,100,0.2)] rounded-xl p-8 text-center transition-all duration-300 opacity-0 translate-y-8 hover:-translate-y-2 hover:border-[#00ff88]"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#00ff88] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#b3e6b3] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact-section" 
        ref={contactRef} 
        className="py-20 bg-[rgba(26,71,42,0.1)]"
      >
        <div className="container mx-auto px-5 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#00ff88]">
            <span className="mr-3">📞</span>
            Commencez Votre Projet
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,100,0.3)] rounded-lg text-white focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[rgba(0,255,100,0.2)]"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,100,0.3)] rounded-lg text-white focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[rgba(0,255,100,0.2)]"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <textarea 
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(0,255,100,0.3)] rounded-lg text-white focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[rgba(0,255,100,0.2)]"
                  rows={4}
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <button 
                className="w-full `bg-gradient-to-r from-[#00cc66] to-[#00ff88] text-[#0a1a0f] font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[rgba(0,255,100,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>🚀</span> Demander un Essai Gratuit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#061008] border-t border-[rgba(0,255,100,0.2)]">
        <div className="container mx-auto px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-[#00ff88] mb-6">
                Vivent IndoorGrowers
              </h4>
              <p className="text-[#b3e6b3]">
                La solution ultime pour la culture intérieure intelligente et automatisée.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#00ff88] mb-6">
                Navigation Rapide
              </h4>
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <button 
                      className="flex items-center gap-2 text-[#b3e6b3] hover:text-[#00ff88] transition-colors"
                      onClick={() => scrollToSection(item.sectionId)}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#00ff88] mb-6">
                Contact
              </h4>
              <p className="text-[#b3e6b3] space-y-2">
                <span className="block">📧 afriquenotreterre@gmail.com</span>
                <span className="block">📞 +237672152468</span>
                <span className="block">🏢 Douala, Cameroun</span>
              </p>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-[rgba(0,255,100,0.1)]">
            <p className="text-[#8bb38b]">
              &copy; 2024 Agriculture durable&SecuriteAlimentaire. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ViventIndoorPage;