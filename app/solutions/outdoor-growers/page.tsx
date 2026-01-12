 "use client"


import React, { useState, useEffect } from 'react';

// Types TypeScript
interface CardItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  icon?: string;
}

const ViventPage: React.FC = () => {
  // États pour les données
  const [outdoorCards, setOutdoorCards] = useState<CardItem[]>([
    {
      id: 1,
      title: "Surveillance Climatique",
      description: "Capteurs intelligents pour surveiller température, humidité, ensoleillement et précipitations en temps réel.",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Gestion de l'Irrigation",
      description: "Système d'irrigation intelligent qui s'adapte aux conditions météorologiques et aux besoins des plantes.",
      imageUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Analyse du Sol",
      description: "Diagnostic complet de la santé du sol avec recommandations d'amendements naturels.",
      imageUrl: "https://images.unsplash.com/photo-1597848212624-e6f1f5d6f7d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ]);

  const [features, setFeatures] = useState<CardItem[]>([
    {
      id: 1,
      icon: "📊",
      title: "Analyses Précises",
      description: "Données en temps réel et historiques pour prendre des décisions éclairées concernant vos cultures."
    },
    {
      id: 2,
      icon: "🤖",
      title: "Recommandations Intelligentes",
      description: "Algorithmes d'IA qui fournissent des conseils personnalisés basés sur vos conditions spécifiques."
    },
    {
      id: 3,
      icon: "🌍",
      title: "Durabilité",
      description: "Solutions conçues pour minimiser l'impact environnemental et promouvoir la biodiversité."
    }
  ]);

  // Fonction pour faire défiler jusqu'à une section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effet pour les animations
  useEffect(() => {
    const cards = document.querySelectorAll('.outdoor-card, .feature-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
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

  // Styles inline combinés
  const styles = `
    /* Reset et styles de base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
      background-color: #f5f5f5;
      color: #333;
      line-height: 1.6;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Header */
    .vivent-header {
      background: linear-gradient(to right, #2c5530, #4a7c59);
      color: white;
      padding: 1.5rem 0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .logo h1 {
      font-size: 1.8rem;
      font-weight: 700;
    }
    
    .logo-icon {
      font-size: 2rem;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      gap: 2rem;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
      cursor: pointer;
    }
    
    .nav-link:hover, .nav-link.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
    
    .solution-btn {
      background-color: #e67e22;
      color: white;
      padding: 0.7rem 1.5rem;
      border-radius: 30px;
      font-weight: 600;
      transition: all 0.3s;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .solution-btn:hover {
      background-color: #d35400;
      transform: translateY(-2px);
    }
    
    /* Hero */
    .hero {
      background: linear-gradient(rgba(44, 85, 48, 0.9), rgba(44, 85, 48, 0.8)), 
                  url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 5rem 0;
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .hero-title {
      font-size: 2.8rem;
      margin-bottom: 1rem;
    }
    
    .hero-description {
      font-size: 1.2rem;
      max-width: 800px;
      margin: 0 auto 2rem;
      line-height: 1.8;
    }
    
    /* Identité Prêtre */
    .priest-identity {
      background-color: white;
      border-radius: 10px;
      padding: 2.5rem;
      margin-bottom: 3rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      border-left: 5px solid #4a7c59;
    }
    
    .section-title {
      color: #2c5530;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .section-icon {
      font-size: 1.5rem;
    }
    
    .identity-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2rem;
      align-items: center;
    }
    
    .priest-img {
      height: 250px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      background-image: url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');
      background-size: cover;
      background-position: center;
      position: relative;
    }
    
    .priest-img::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }
    
    .img-placeholder {
      position: relative;
      z-index: 1;
      font-weight: 600;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    }
    
    .identity-text p {
      margin-bottom: 1rem;
      line-height: 1.7;
    }
    
    /* OutdoorGrowers */
    .outdoor-section {
      background-color: #f9f9f9;
      border-radius: 10px;
      padding: 2.5rem;
      margin-bottom: 3rem;
      border-top: 5px solid #e67e22;
    }
    
    .section-description {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
      color: #555;
    }
    
    .outdoor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .outdoor-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s, box-shadow 0.3s;
      opacity: 0;
      transform: translateY(20px);
    }
    
    .outdoor-card.animate-in {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .outdoor-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .card-img {
      height: 180px;
      background-color: #ddd;
      background-size: cover;
      background-position: center;
    }
    
    .card-content {
      padding: 1.5rem;
    }
    
    .card-content h4 {
      color: #2c5530;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
    
    .card-content p {
      color: #666;
      line-height: 1.6;
    }
    
    /* Features */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .feature-card {
      background-color: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s;
      text-align: center;
      opacity: 0;
      transform: translateY(20px);
    }
    
    .feature-card.animate-in {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    .feature-icon {
      font-size: 2.5rem;
      color: #4a7c59;
      margin-bottom: 1rem;
    }
    
    .feature-title {
      color: #2c5530;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    
    .feature-description {
      color: #666;
      line-height: 1.7;
    }
    
    /* Footer */
    .footer {
      background-color: #2c5530;
      color: white;
      padding: 3rem 0 1.5rem;
      margin-top: 3rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .footer-section h4 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      color: #e67e22;
    }
    
    .footer-links,
    .footer-contact {
      list-style: none;
    }
    
    .footer-links li,
    .footer-contact li {
      margin-bottom: 0.8rem;
    }
    
    .footer-links a {
      color: #ddd;
      text-decoration: none;
      transition: color 0.3s;
      cursor: pointer;
    }
    
    .footer-links a:hover {
      color: #e67e22;
      text-decoration: underline;
    }
    
    .footer-contact li {
      color: #ddd;
      line-height: 1.6;
    }
    
    .copyright {
      text-align: center;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .header-container {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-list {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }
      
      .hero {
        padding: 3rem 0;
      }
      
      .hero-title {
        font-size: 2rem;
      }
      
      .hero-description {
        font-size: 1rem;
        padding: 0 1rem;
      }
      
      .identity-content {
        grid-template-columns: 1fr;
      }
      
      .priest-img {
        height: 200px;
      }
      
      .priest-identity,
      .outdoor-section {
        padding: 1.5rem;
      }
      
      .outdoor-grid {
        grid-template-columns: 1fr;
      }
      
      .features {
        grid-template-columns: 1fr;
      }
      
      .feature-card {
        padding: 1.5rem;
      }
      
      .footer {
        padding: 2rem 0 1rem;
      }
      
      .footer-content {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.5rem;
      }
      
      .section-title {
        font-size: 1.5rem;
      }
      
      .logo h1 {
        font-size: 1.5rem;
      }
    }
  `;

  return (
    <div className="vivent-page">
      <style>{styles}</style>
      
      {/* Header */}
      <header className="vivent-header">
        <div className="container header-container">
          <div className="logo">
            <span className="logo-icon">🌿</span>
            <h1>Vivent Solutions</h1>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <span className="nav-link">Accueil</span>
              </li>
              <li className="nav-item">
                <span className="nav-link active">Solutions</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Produits</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">À propos</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Contact</span>
              </li>
              <li className="nav-item">
                <button 
                  className="solution-btn"
                  onClick={() => scrollToSection('outdoor')}
                >
                  Essai gratuit
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">Solution Vivent pour OutdoorGrowers</h2>
          <p className="hero-description">
            Une solution complète pour les cultivateurs en extérieur, combinant technologie avancée 
            et expertise écologique pour des récoltes abondantes et durables.
          </p>
          <button 
            className="solution-btn"
            onClick={() => scrollToSection('outdoor')}
          >
            Découvrir OutdoorGrowers
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        {/* Identité Prêtre */}
        <section className="priest-identity">
          <h3 className="section-title">
            <span className="section-icon">👨‍🌾</span> 
            Identité Prêtre : Notre Philosophie
          </h3>
          <div className="identity-content">
            <div className="priest-img">
              <div className="img-placeholder">
                Gardien de la Terre
              </div>
            </div>
            <div className="identity-text">
              <p>
                Notre approche s inspire de la relation sacrée entre le cultivateur et la terre. 
                Comme un prêtre voue sa vie à servir une cause supérieure, nous nous engageons à servir 
                la terre et à promouvoir une agriculture respectueuse et régénératrice.
              </p>
              <p>
                L identité Prêtre chez Vivent représente notre dévouement à protéger les écosystèmes, 
                à transmettre le savoir agricole et à célébrer les cycles naturels. Nous croyons que 
                chaque cultivateur est un gardien de la terre, avec la responsabilité de la préserver 
                pour les générations futures.
              </p>
              <p>
                Cette philosophie guide toutes nos solutions techniques, garantissant qu elles soutiennent 
                plutôt qu elles n exploitent, qu elles régénèrent plutôt qu elles n épuisent, et qu elles 
                honorent la sagesse ancestrale tout en intégrant l innovation moderne.
              </p>
            </div>
          </div>
        </section>

        {/* OutdoorGrowers */}
        <section id="outdoor" className="outdoor-section">
          <h3 className="section-title">
            <span className="section-icon">🌱</span> 
            Solution OutdoorGrowers
          </h3>
          <p className="section-description">
            Notre solution spécifique pour les cultivateurs en extérieur combine surveillance intelligente, 
            conseils personnalisés et outils de gestion pour optimiser vos cultures en plein air.
          </p>
          
          <div className="outdoor-grid">
            {outdoorCards.map((card) => (
              <div key={card.id} className="outdoor-card">
                <div 
                  className="card-img" 
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                ></div>
                <div className="card-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="features">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Vivent Solutions</h4>
              <p>
                Des solutions technologiques au service de l agriculture durable 
                et respectueuse de l environnement.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Nos Solutions</h4>
              <ul className="footer-links">
                <li><span onClick={() => scrollToSection('outdoor')}>OutdoorGrowers</span></li>
                <li><span>IndoorCultivators</span></li>
                <li><span>AquaFarmers</span></li>
                <li><span>PermaDesign</span></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li>Email: contact@vivent-solutions.fr</li>
                <li>Téléphone: +33 1 23 45 67 89</li>
                <li>Adresse: 123 Rue de la Culture, 75000 Paris</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>
              &copy; 2023 Vivent Solutions. Tous droits réservés. | 
              Identité `Prêtre` - Protéger et servir la terre.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ViventPage;