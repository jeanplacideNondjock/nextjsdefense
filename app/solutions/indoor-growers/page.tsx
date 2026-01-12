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
      title: "Auto matisation Complète",
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
      const offset = 80; // Compensation pour le header fixe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
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

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
              entry.target.classList.add('animate-in');
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

  // Styles inline
  const styles = `
    /* Reset et styles de base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
      background-color: #0a1a0f;
      color: #e8f5e9;
      line-height: 1.6;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Header dynamique */
    .vivent-header {
      background: linear-gradient(135deg, #0a1a0f 0%, #1a472a 100%);
      color: white;
      padding: 1rem 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: all 0.3s ease;
      border-bottom: 1px solid transparent;
    }
    
    .vivent-header.scrolled {
      padding: 0.7rem 0;
      background: rgba(10, 26, 15, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 255, 100, 0.2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    
    .logo:hover {
      transform: scale(1.05);
    }
    
    .logo h1 {
      font-size: 1.8rem;
      font-weight: 700;
      background: linear-gradient(45deg, #00ff88, #00cc66);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .logo-icon {
      font-size: 2.2rem;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    /* Navigation Desktop */
    .desktop-nav {
      display: flex;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      gap: 1.5rem;
      align-items: center;
    }
    
    .nav-item {
      position: relative;
    }
    
    .nav-link {
      color: #b3e6b3;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      transition: all 0.3s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.95rem;
      white-space: nowrap;
    }
    
    .nav-link:hover {
      color: #00ff88;
      background: rgba(0, 255, 100, 0.1);
    }
    
    .nav-link.active {
      color: #00ff88;
      background: rgba(0, 255, 100, 0.15);
      box-shadow: 0 0 15px rgba(0, 255, 100, 0.2);
    }
    
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 5px;
      background: #00ff88;
      border-radius: 50%;
      box-shadow: 0 0 10px #00ff88;
    }
    
    /* Menu Mobile */
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      color: #00ff88;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      z-index: 1001;
    }
    
    .mobile-nav {
      position: fixed;
      top: 0;
      right: -100%;
      width: 280px;
      height: 100vh;
      background: rgba(10, 26, 15, 0.98);
      backdrop-filter: blur(10px);
      padding: 5rem 2rem 2rem;
      transition: right 0.4s ease;
      z-index: 1000;
      border-left: 1px solid rgba(0, 255, 100, 0.2);
      box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
    }
    
    .mobile-nav.open {
      right: 0;
    }
    
    .mobile-nav-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .mobile-nav-link {
      color: #b3e6b3;
      text-decoration: none;
      padding: 1rem;
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .mobile-nav-link:hover,
    .mobile-nav-link.active {
      color: #00ff88;
      background: rgba(0, 255, 100, 0.1);
      transform: translateX(5px);
    }
    
    .mobile-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 999;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .mobile-overlay.open {
      display: block;
      opacity: 1;
    }
    
    .close-btn {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: none;
      border: none;
      color: #00ff88;
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    /* Bouton principal */
    .primary-btn {
      background: linear-gradient(45deg, #00cc66, #00ff88);
      color: #0a1a0f;
      padding: 0.8rem 2rem;
      border-radius: 30px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 15px rgba(0, 255, 100, 0.3);
    }
    
    .primary-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 255, 100, 0.5);
    }
    
    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 6rem 0 4rem;
      position: relative;
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(rgba(10, 26, 15, 0.95), rgba(10, 26, 15, 0.9)),
        url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      z-index: -2;
    }
    
    .hero-content {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    
    .hero-title {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(45deg, #00ff88, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: slideUp 1s ease;
    }
    
    .hero-description {
      font-size: 1.2rem;
      color: #b3e6b3;
      margin-bottom: 2.5rem;
      line-height: 1.8;
      animation: slideUp 1s ease 0.2s both;
    }
    
    .hero-cta {
      animation: slideUp 1s ease 0.4s both;
    }
    
    /* Navigation rapide */
    .quick-nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 3rem;
      flex-wrap: wrap;
      animation: slideUp 1s ease 0.6s both;
    }
    
    .quick-nav-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(0, 255, 100, 0.3);
      color: #b3e6b3;
      padding: 0.7rem 1.5rem;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
    }
    
    .quick-nav-btn:hover {
      background: rgba(0, 255, 100, 0.1);
      color: #00ff88;
      transform: translateY(-2px);
    }
    
    /* Sections générales */
    .section {
      padding: 5rem 0;
      position: relative;
    }
    
    .section-title {
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #00ff88;
      text-align: center;
    }
    
    /* Identité Prêtre */
    .priest-identity {
      background: rgba(26, 71, 42, 0.1);
    }
    
    .identity-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .priest-img {
      height: 400px;
      border-radius: 20px;
      background: linear-gradient(45deg, #1a472a, #2e8b57);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      overflow: hidden;
      position: relative;
    }
    
    .priest-img::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
      background-size: cover;
      background-position: center;
      opacity: 0.3;
    }
    
    /* Stats Section */
    .stats-section {
      background: rgba(26, 71, 42, 0.2);
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .stat-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      padding: 2.5rem 2rem;
      text-align: center;
      border: 1px solid rgba(0, 255, 100, 0.2);
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(30px);
    }
    
    .stat-card.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .stat-card:hover {
      transform: translateY(-10px);
      border-color: #00ff88;
      box-shadow: 0 15px 30px rgba(0, 255, 100, 0.2);
    }
    
    .stat-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .stat-value {
      font-size: 2.5rem;
      font-weight: 700;
      color: #00ff88;
      margin-bottom: 0.5rem;
    }
    
    /* IndoorGrowers Section */
    .indoor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .indoor-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      overflow: hidden;
      border: 1px solid rgba(0, 255, 100, 0.2);
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(30px);
    }
    
    .indoor-card.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .indoor-card:hover {
      transform: translateY(-10px);
      border-color: #00ff88;
      box-shadow: 0 15px 30px rgba(0, 255, 100, 0.3);
    }
    
    .card-img {
      height: 200px;
      background-size: cover;
      background-position: center;
    }
    
    /* Features Section */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .feature-card {
      background: rgba(255, 255, 255, 0.05);
      padding: 2.5rem 2rem;
      border-radius: 15px;
      text-align: center;
      border: 1px solid rgba(0, 255, 100, 0.2);
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(30px);
    }
    
    .feature-card.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .feature-card:hover {
      transform: translateY(-10px);
      border-color: #00ff88;
    }
    
    /* Contact Section */
    .contact-section {
      background: rgba(26, 71, 42, 0.1);
    }
    
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-input {
      width: 100%;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(0, 255, 100, 0.3);
      border-radius: 10px;
      color: white;
      font-size: 1rem;
    }
    
    .form-input:focus {
      outline: none;
      border-color: #00ff88;
      box-shadow: 0 0 10px rgba(0, 255, 100, 0.2);
    }
    
    /* Footer */
    .footer {
      background: #061008;
      padding: 4rem 0 2rem;
      border-top: 1px solid rgba(0, 255, 100, 0.2);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }
    
    .footer-section h4 {
      color: #00ff88;
      margin-bottom: 1.5rem;
    }
    
    /* Animations */
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Responsive */
    @media (max-width: 1024px) {
      .hero-title {
        font-size: 2.8rem;
      }
      
      .identity-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      
      .priest-img {
        height: 300px;
      }
    }
    
    @media (max-width: 768px) {
      .desktop-nav {
        display: none;
      }
      
      .mobile-menu-btn {
        display: block;
      }
      
      .hero-title {
        font-size: 2.2rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .hero {
        padding: 7rem 0 3rem;
      }
      
      .quick-nav {
        flex-direction: column;
        align-items: center;
      }
      
      .quick-nav-btn {
        width: 100%;
        max-width: 250px;
        justify-content: center;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.8rem;
      }
      
      .section {
        padding: 3rem 0;
      }
      
      .container {
        padding: 0 15px;
      }
    }
    
    /* Progress Indicator */
    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgba(0, 255, 100, 0.1);
      z-index: 1001;
    }
    
    .scroll-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #00cc66, #00ff88);
      width: 0%;
      transition: width 0.3s ease;
    }
    
    /* Back to top button */
    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #00ff88;
      color: #0a1a0f;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
      z-index: 999;
      box-shadow: 0 4px 15px rgba(0, 255, 100, 0.3);
    }
    
    .back-to-top.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .back-to-top:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(0, 255, 100, 0.5);
    }
  `;

  return (
    <div className="vivent-page">
      <style>{styles}</style>
      
      {/* Scroll Progress */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" id="progress-bar"></div>
      </div>
      
      {/* Back to Top Button */}
      <div 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </div>

      {/* Header */}
      <header className={`vivent-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div 
            className="logo"
            onClick={() => scrollToSection('hero')}
          >
            <span className="logo-icon">🌿</span>
            <h1>Vivent Indoor</h1>
          </div>

          {/* Navigation Desktop */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <span 
                    className={`nav-link ${activeSection === item.sectionId ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                </li>
              ))}
              <li className="nav-item">
                <button 
                  className="primary-btn"
                  onClick={() => scrollToSection('contact-section')}
                >
                  <span>🚀</span> Essai Gratuit
                </button>
              </li>
            </ul>
          </nav>

          {/* Menu Mobile Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <button 
            className="close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <span 
                  className={`mobile-nav-link ${activeSection === item.sectionId ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              </li>
            ))}
            <li>
              <button 
                className="primary-btn"
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
                onClick={() => scrollToSection('contact-section')}
              >
                <span>🚀</span> Essai Gratuit
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero" ref={heroRef}>
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              IndoorGrowers Pro<br/>
              <span style={{ fontSize: '2.5rem' }}>La Révolution de la Culture Intérieure</span>
            </h1>
            <p className="hero-description">
              Transformez n importe quel espace en environnement de culture optimal avec notre 
              système intelligent. Contrôle total, automatisation avancée et résultats garantis 
              pour des récoltes abondantes toute l année.
            </p>
            
            <div className="hero-cta">
              <button 
                className="primary-btn"
                onClick={() => scrollToSection('indoor-section')}
                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
              >
                <span>🌿</span> Découvrir la Solution
              </button>
            </div>

            <div className="quick-nav">
              {navItems.slice(1, 5).map((item) => (
                <button
                  key={item.id}
                  className="quick-nav-btn"
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
      <section id="priest-identity" className="section priest-identity" ref={priestRef}>
        <div className="container">
          <h2 className="section-title">
            <span style={{ marginRight: '10px' }}>🔬</span>
            Notre Philosophie Technologique
          </h2>
          <div className="identity-content">
            <div className="priest-img">
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Innovation & Respect</div>
                <div style={{ marginTop: '1rem', opacity: 0.9 }}>La technologie au service de la vie</div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Nous croyons en une approche où la technologie avancée rencontre le respect profond 
                des cycles naturels. Chaque paramètre de croissance est optimisé grâce à l IA, 
                tout en préservant l essence même du développement végétal.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Notre système apprend continuellement de vos plantes, s adaptant à leurs besoins 
                spécifiques pour créer l environnement parfait. Ce n est pas juste de l automatisation, 
                c est une symbiose entre technologie et nature.
              </p>
              <button 
                className="primary-btn"
                onClick={() => scrollToSection('features-section')}
                style={{ marginTop: '1rem' }}
              >
                <span>⚡</span> Voir les Fonctionnalités
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="section stats-section" ref={statsRef}>
        <div className="container">
          <h2 className="section-title">Résultats Impressionnants</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IndoorGrowers Section */}
      <section id="indoor-section" className="section" ref={indoorRef}>
        <div className="container">
          <h2 className="section-title">
            <span style={{ marginRight: '10px' }}>🏠</span>
            Solutions IndoorGrowers
          </h2>
          <div className="indoor-grid">
            {indoorCards.map((card) => (
              <div key={card.id} className="indoor-card">
                <div 
                  className="card-img"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ color: '#00ff88', marginBottom: '1rem', fontSize: '1.3rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: '#b3e6b3', lineHeight: '1.6' }}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="section" ref={featuresRef}>
        <div className="container">
          <h2 className="section-title">
            <span style={{ marginRight: '10px' }}>⚡</span>
            Fonctionnalités Avancées
          </h2>
          <div className="features">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ color: '#00ff88', marginBottom: '1rem', fontSize: '1.4rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#b3e6b3', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="section contact-section" ref={contactRef}>
        <div className="container">
          <h2 className="section-title">
            <span style={{ marginRight: '10px' }}>📞</span>
            Commencez Votre Projet
          </h2>
          <div className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                placeholder="Votre nom"
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                className="form-input" 
                placeholder="Votre email"
              />
            </div>
            <div className="form-group">
              <textarea 
                className="form-input" 
                rows={4}
                placeholder="Décrivez votre projet..."
              />
            </div>
            <button 
              className="primary-btn"
              style={{ width: '100%', padding: '1.2rem' }}
            >
              <span>🚀</span> Demander un Essai Gratuit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <h4>Vivent IndoorGrowers</h4>
              <p style={{ marginTop: '1rem', color: '#b3e6b3' }}>
                La solution ultime pour la culture intérieure intelligente et automatisée.
              </p>
            </div>
            <div>
              <h4>Navigation Rapide</h4>
              <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.id} style={{ marginBottom: '0.5rem' }}>
                    <span 
                      style={{ color: '#b3e6b3', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                      onClick={() => scrollToSection(item.sectionId)}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <p style={{ marginTop: '1rem', color: '#b3e6b3' }}>
                📧 contact@vivent-indoor.fr<br/>
                📞 +33 1 23 45 67 89<br/>
                🏢 Paris, France
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0, 255, 100, 0.1)' }}>
            <p style={{ color: '#8bb38b' }}>
              &copy; 2024 Vivent IndoorGrowers. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      {/* Script pour la barre de progression et back-to-top */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', () => {
            // Barre de progression
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
              progressBar.style.width = scrolled + '%';
            }
            
            // Bouton back-to-top
            const backToTop = document.querySelector('.back-to-top');
            if (backToTop) {
              if (window.scrollY > 300) {
                backToTop.classList.add('visible');
              } else {
                backToTop.classList.remove('visible');
              }
            }
          });
        `
      }} />
    </div>
  );
};

export default ViventIndoorPage;