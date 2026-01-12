"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Interface pour les liens
interface DropdownItem {
  text: string;
  url: string;
}

interface DropdownData {
  title: string;
  items: DropdownItem[];
  color: string;
}

const Navigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownContainerRef.current && 
        !dropdownContainerRef.current.contains(event.target as Node)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Données pour les dropdowns avec URLs
  const dropdownData: Record<string, DropdownData> = {
    solutions: {
      title: "SOLUTIONS",
      items: [
        { text: "Food & Ag input supplier", url: "/solutions/food-ag-input-supplier" },
        { text: "Indoor growers", url: "/solutions/indoor-growers" },
        { text: "Outdoor growers", url: "/solutions/outdoor-growers" },
        { text: "Academics & scientists", url: "/solutions/academics-scientists" }
      ],
      color: "#4299e1"
    },
    technology: {
      title: "TECHNOLOGY",
      items: [
        { text: "How it works", url: "/technology/how-it-works" },
        { text: "Plant electrophysiology", url: "/technology/plant-electrophysiology" },
        { text: "Artificial intelligence", url: "/technology/artificial-intelligence" }
      ],
      color: "#48bb78"
    },
    company: {
      title: "COMPANY",
      items: [
        { text: "About us", url: "/company/about-us" },
        { text: "Make a difference", url: "/company/make-a-difference" },
        { text: "Careers", url: "/company/careers" }
      ],
      color: "#ed8936"
    },
    news: {
      title: "MEDIA/NEWS",
      items: [
        { text: "News", url: "/news" },
        { text: "Media Assets", url: "/media-assets" },
        { text: "Research papers", url: "/research-papers" }
      ],
      color: "#9f7aea"
    },
    client: {
      title: "CLIENT ACCESS",
      items: [
        { text: "Live dashboard", url: "/client/dashboard" },
        { text: "Analytical", url: "/client/analytical" },
        { text: "Next cloud", url: "/client/next-cloud" }
      ],
      color: "#f56565"
    }
  };

  // Fonction simplifiée pour fermer le dropdown
  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <style>{`
        .navigation-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          z-index: 1000;
        }
        
        .navigation-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 20px;
        }
        
        .top-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .company-name {
          font-size: 28px;
          font-weight: 700;
          color: #1a365d;
          letter-spacing: 1px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }
        
        .company-name:hover {
          opacity: 0.9;
        }
        
        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        
        .nav-item {
          font-size: 13px;
          font-weight: 600;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          position: relative;
          padding: 8px 0;
          transition: color 0.3s;
          user-select: none;
        }
        
        .nav-item:hover {
          color: #2d3748;
        }
        
        /* Ajouter les séparateurs ~ */
        .nav-item:not(:last-child)::after {
          content: '~';
          margin-left: 8px;
          color: #a0aec0;
        }
        
        .dropdown {
          position: relative;
        }
        
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          min-width: 250px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          z-index: 1001;
          border-radius: 6px;
          padding: 12px 0;
          margin-top: 8px;
          animation: fadeIn 0.2s ease;
          border-top: 3px solid;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .dropdown-link {
          display: block;
          padding: 12px 24px;
          font-size: 14px;
          color: #4a5568;
          text-transform: none;
          letter-spacing: normal;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border-left: 3px solid transparent;
          text-decoration: none;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }
        
        .dropdown-link:hover {
          background-color: #f7fafc;
          color: #2d3748;
          padding-left: 28px;
        }
        
        .dropdown-title {
          padding: 12px 24px;
          font-size: 12px;
          font-weight: 700;
          color: #2d3748;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 8px;
          background-color: #f8fafc;
        }
        
        .dropdown-indicator {
          display: inline-block;
          margin-left: 4px;
          font-size: 10px;
          vertical-align: middle;
          transition: transform 0.3s;
        }
        
        .dropdown.active .dropdown-indicator {
          transform: rotate(180deg);
        }
        
        .contact-button {
          background-color: #1a365d;
          color: white;
          border: none;
          padding: 8px 22px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-left: 12px;
          text-decoration: none;
          display: inline-block;
        }
        
        .contact-button:hover {
          background-color: #2d4a8c;
        }
        
        /* Espace pour éviter que le contenu ne soit caché sous la barre fixe */
        body {
          padding-top: 90px;
        }
        
        @media (max-width: 768px) {
          .top-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .nav-links {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          
          .dropdown {
            width: 100%;
          }
          
          .dropdown-content {
            position: static;
            box-shadow: none;
            margin-top: 10px;
            margin-left: 20px;
            width: calc(100% - 40px);
          }
          
          .contact-button {
            margin-left: 0;
            margin-top: 10px;
            align-self: flex-start;
          }
          
          /* Retirer les séparateurs en mobile */
          .nav-item:not(:last-child)::after {
            content: '';
          }
          
          /* Ajuster l'espace pour mobile */
          body {
            padding-top: 180px;
          }
        }
      `}</style>
      
      <div className="navigation-wrapper">
        <div className="navigation-container" ref={dropdownContainerRef}>
          <div className="top-nav">
            <Link 
              href="/" 
              className="company-name" 
              onClick={closeDropdown}
            >
              Vivent
            </Link>
            
            <div className="nav-links">
              {/* SOLUTIONS Dropdown */}
              <div 
                className={`nav-item dropdown ${activeDropdown === 'solutions' ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('solutions')}
              >
                SOLUTIONS <span className="dropdown-indicator">▼</span>
                {activeDropdown === 'solutions' && (
                  <div 
                    className="dropdown-content"
                    style={{ borderTopColor: dropdownData.solutions.color }}
                  >
                    <div className="dropdown-title">{dropdownData.solutions.title}</div>
                    {dropdownData.solutions.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="dropdown-link"
                        style={{ 
                          borderLeftColor: activeDropdown === 'solutions' ? dropdownData.solutions.color : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderLeftColor = dropdownData.solutions.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderLeftColor = activeDropdown === 'solutions' ? dropdownData.solutions.color : 'transparent';
                        }}
                        onClick={closeDropdown}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* TECHNOLOGY Dropdown */}
              <div 
                className={`nav-item dropdown ${activeDropdown === 'technology' ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('technology')}
              >
                TECHNOLOGY <span className="dropdown-indicator">▼</span>
                {activeDropdown === 'technology' && (
                  <div 
                    className="dropdown-content"
                    style={{ borderTopColor: dropdownData.technology.color }}
                  >
                    <div className="dropdown-title">{dropdownData.technology.title}</div>
                    {dropdownData.technology.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="dropdown-link"
                        style={{ 
                          borderLeftColor: activeDropdown === 'technology' ? dropdownData.technology.color : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderLeftColor = dropdownData.technology.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderLeftColor = activeDropdown === 'technology' ? dropdownData.technology.color : 'transparent';
                        }}
                        onClick={closeDropdown}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* COMPANY Dropdown */}
              <div 
                className={`nav-item dropdown ${activeDropdown === 'company' ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('company')}
              >
                COMPANY <span className="dropdown-indicator">▼</span>
                {activeDropdown === 'company' && (
                  <div 
                    className="dropdown-content"
                    style={{ borderTopColor: dropdownData.company.color }}
                  >
                    <div className="dropdown-title">{dropdownData.company.title}</div>
                    {dropdownData.company.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="dropdown-link"
                        style={{ 
                          borderLeftColor: activeDropdown === 'company' ? dropdownData.company.color : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderLeftColor = dropdownData.company.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderLeftColor = activeDropdown === 'company' ? dropdownData.company.color : 'transparent';
                        }}
                        onClick={closeDropdown}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* MEDIA/NEWS Dropdown */}
              <div 
                className={`nav-item dropdown ${activeDropdown === 'news' ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('news')}
              >
                MEDIA/NEWS <span className="dropdown-indicator">▼</span>
                {activeDropdown === 'news' && (
                  <div 
                    className="dropdown-content"
                    style={{ borderTopColor: dropdownData.news.color }}
                  >
                    <div className="dropdown-title">{dropdownData.news.title}</div>
                    {dropdownData.news.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="dropdown-link"
                        style={{ 
                          borderLeftColor: activeDropdown === 'news' ? dropdownData.news.color : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderLeftColor = dropdownData.news.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderLeftColor = activeDropdown === 'news' ? dropdownData.news.color : 'transparent';
                        }}
                        onClick={closeDropdown}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* CLIENT ACCESS Dropdown */}
              <div 
                className={`nav-item dropdown ${activeDropdown === 'client' ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('client')}
              >
                CLIENT ACCESS <span className="dropdown-indicator">▼</span>
                {activeDropdown === 'client' && (
                  <div 
                    className="dropdown-content"
                    style={{ borderTopColor: dropdownData.client.color }}
                  >
                    <div className="dropdown-title">{dropdownData.client.title}</div>
                    {dropdownData.client.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="dropdown-link"
                        style={{ 
                          borderLeftColor: activeDropdown === 'client' ? dropdownData.client.color : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderLeftColor = dropdownData.client.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderLeftColor = activeDropdown === 'client' ? dropdownData.client.color : 'transparent';
                        }}
                        onClick={closeDropdown}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Bouton Contact */}
              <Link 
                href="/contact" 
                className="contact-button"
                onClick={closeDropdown}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PlantElectrophysiologyPage: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      
      {/* Styles de la page */}
      <style>{`
        .page-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .breadcrumb {
          font-size: 14px;
          color: #718096;
          margin-bottom: 20px;
        }
        
        .breadcrumb a {
          color: #4299e1;
          text-decoration: none;
        }
        
        .breadcrumb a:hover {
          text-decoration: underline;
        }
        
        .breadcrumb span {
          margin: 0 8px;
          color: #cbd5e0;
        }
        
        .page-header {
          margin-bottom: 40px;
        }
        
        .page-title {
          font-size: 42px;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        
        .page-subtitle {
          font-size: 20px;
          color: #4a5568;
          font-weight: 400;
          line-height: 1.5;
          max-width: 800px;
        }
        
        .content-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        
        .section-title {
          font-size: 28px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 30px;
          position: relative;
          padding-bottom: 12px;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: #48bb78;
        }
        
        .description {
          font-size: 17px;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 24px;
        }
        
        .science-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .science-card {
          background-color: #f0fff4;
          border-radius: 10px;
          padding: 30px;
          border-left: 4px solid #48bb78;
          transition: transform 0.3s ease;
        }
        
        .science-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(72, 187, 120, 0.12);
        }
        
        .science-icon {
          font-size: 36px;
          margin-bottom: 20px;
          color: #48bb78;
        }
        
        .science-title {
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 15px;
        }
        
        .science-description {
          font-size: 15px;
          color: #4a5568;
          line-height: 1.6;
        }
        
        .signal-types {
          background-color: #f8fafc;
          border-radius: 12px;
          padding: 40px;
          margin-bottom: 50px;
        }
        
        .signal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }
        
        .signal-item {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        
        .signal-name {
          font-size: 18px;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .signal-wave {
          display: inline-block;
          width: 30px;
          height: 4px;
          background-color: #48bb78;
          border-radius: 2px;
          position: relative;
        }
        
        .signal-wave::after {
          content: '~';
          position: absolute;
          right: -15px;
          top: -8px;
          color: #48bb78;
          font-size: 14px;
        }
        
        .signal-desc {
          font-size: 14px;
          color: #718096;
          line-height: 1.5;
        }
        
        .application-section {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          border-radius: 15px;
          padding: 50px;
          color: white;
          text-align: center;
          margin-bottom: 60px;
        }
        
        .application-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .application-description {
          font-size: 18px;
          margin-bottom: 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.9;
        }
        
        .application-button {
          display: inline-block;
          background-color: white;
          color: #48bb78;
          padding: 14px 36px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        
        .application-button:hover {
          background-color: transparent;
          color: white;
          transform: translateY(-2px);
        }
        
        .related-tech {
          margin-top: 60px;
          border-top: 1px solid #e2e8f0;
          padding-top: 50px;
        }
        
        .related-title {
          font-size: 24px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 30px;
          text-align: center;
        }
        
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }
        
        .related-card {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 25px;
          text-align: center;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        
        .related-card:hover {
          border-color: #48bb78;
          box-shadow: 0 8px 20px rgba(72, 187, 120, 0.12);
          transform: translateY(-3px);
        }
        
        .related-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 10px;
        }
        
        .related-card p {
          font-size: 14px;
          color: #718096;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .content-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .page-title {
            font-size: 32px;
          }
          
          .page-subtitle {
            font-size: 18px;
          }
          
          .application-section {
            padding: 30px 20px;
          }
          
          .application-title {
            font-size: 26px;
          }
          
          .science-grid {
            grid-template-columns: 1fr;
          }
          
          .signal-grid {
            grid-template-columns: 1fr;
          }
          
          /* Ajustement pour la navigation fixe */
          .page-container {
            padding-top: 20px;
          }
        }
      `}</style>
      
      {/* Contenu de la page */}
      <div className="page-container">
        {/* Fil d'Ariane */}
        <div className="breadcrumb">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <Link href="/technology">Technology</Link>
          <span>/</span>
          <span>Plant Electrophysiology</span>
        </div>
        
        {/* En-tête de la page */}
        <div className="page-header">
          <h1 className="page-title">Plant Electrophysiology</h1>
          <p className="page-subtitle">
            La science des signaux électriques des plantes. Découvrez comment nous capturons 
            et interprétons les biosignatures électrophysiologiques pour comprendre la physiologie végétale.
          </p>
        </div>
        
        {/* Section Contenu Principal */}
        <div className="content-section">
          <div>
            <h2 className="section-title">La Science des Signaux Végétaux</h2>
            <p className="description">
              Tout comme les animaux, les plantes génèrent des signaux électriques en réponse 
              à leur environnement. Ces signaux, appelés potentiels d`action et potentiels de variation, 
              sont des indicateurs précis de l`état physiologique des plantes.
            </p>
            
            <p className="description">
              Notre technologie capture ces signaux avec une précision milliseconde, permettant 
              une compréhension approfondie des réponses des plantes aux stimuli environnementaux, 
              aux stress et aux traitements.
            </p>
            
            <div className="description">
              <strong>Applications principales :</strong>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li style={{ marginBottom: '8px' }}>Détection précoce du stress hydrique</li>
                <li style={{ marginBottom: '8px' }}>Réponses aux traitements phytosanitaires</li>
                <li style={{ marginBottom: '8px' }}>Optimisation de la fertilisation</li>
                <li>Surveillance de la santé globale des plantes</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">Notre Approche Scientifique</h2>
            <p className="description">
              Nous utilisons des électrodes non invasives placées stratégiquement sur les plantes 
              pour mesurer les variations de potentiel électrique. Ces données sont ensuite analysées 
              par nos algorithmes spécialisés pour extraire des informations significatives.
            </p>
            
            <div className="description">
              <strong>Avantages de notre méthode :</strong>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li style={{ marginBottom: '8px' }}>Mesures en temps réel 24h/24</li>
                <li style={{ marginBottom: '8px' }}>Pas de dommage aux plantes</li>
                <li style={{ marginBottom: '8px' }}>Haute résolution temporelle</li>
                <li>Intégration avec d`autres paramètres physiologiques</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Section Science */}
        <h2 className="section-title">Les Fondements Scientifiques</h2>
        <div className="science-grid">
          <div className="science-card">
            <div className="science-icon">⚡</div>
            <h3 className="science-title">Potentiels d`Action</h3>
            <p className="science-description">
              Signaux électriques rapides propagés dans les plantes en réponse à des stimuli 
              spécifiques, similaires aux influx nerveux chez les animaux.
            </p>
          </div>
          
          <div className="science-card">
            <div className="science-icon">📈</div>
            <h3 className="science-title">Potentiels de Variation</h3>
            <p className="science-description">
              Changements graduels du potentiel électrique liés à des processus physiologiques 
              continus comme la photosynthèse ou la transpiration.
            </p>
          </div>
          
          <div className="science-card">
            <div className="science-icon">🔍</div>
            <h3 className="science-title">Analyse des Patterns</h3>
            <p className="science-description">
              Identification de signatures électriques spécifiques associées à différents 
              états physiologiques et réponses environnementales.
            </p>
          </div>
          
          <div className="science-card">
            <div className="science-icon">🤖</div>
            <h3 className="science-title">Interprétation par IA</h3>
            <p className="science-description">
              Utilisation de l`intelligence artificielle pour corréler les signaux électriques 
              avec des conditions physiologiques spécifiques.
            </p>
          </div>
        </div>
        
        {/* Section Types de Signaux */}
        <div className="signal-types">
          <h2 className="section-title">Types de Signaux Électriques</h2>
          <div className="signal-grid">
            <div className="signal-item">
              <h3 className="signal-name">
                <span className="signal-wave"></span>
                Signaux Rapides
              </h3>
              <p className="signal-desc">
                Réponses immédiates aux stimuli mécaniques, thermiques ou chimiques. 
                Durée : 1-10 secondes.
              </p>
            </div>
            
            <div className="signal-item">
              <h3 className="signal-name">
                <span className="signal-wave" style={{ background: '#4299e1' }}></span>
                Signaux Lents
              </h3>
              <p className="signal-desc">
                Variations graduelles liées aux cycles circadiens, stress hydrique 
                ou nutritionnel. Durée : minutes à heures.
              </p>
            </div>
            
            <div className="signal-item">
              <h3 className="signal-name">
                <span className="signal-wave" style={{ background: '#9f7aea' }}></span>
                Signaux Rythmiques
              </h3>
              <p className="signal-desc">
                Oscillations régulières associées à des processus physiologiques 
                périodiques comme la respiration cellulaire.
              </p>
            </div>
            
            <div className="signal-item">
              <h3 className="signal-name">
                <span className="signal-wave" style={{ background: '#ed8936' }}></span>
                Signaux Complexes
              </h3>
              <p className="signal-desc">
                Combinaisons de différents types de signaux indiquant des réponses 
                physiologiques intégrées et adaptatives.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section Applications */}
        <div className="application-section">
          <h2 className="application-title">Applications de l`Électrophysiologie Végétale</h2>
          <p className="application-description">
            Notre technologie d`électrophysiologie végétale ouvre de nouvelles possibilités 
            pour la recherche agricole, le développement de produits et l`optimisation des cultures.
          </p>
          <Link href="/contact" className="application-button">
            Découvrir les applications
          </Link>
        </div>
        
        {/* Technologies Connexes */}
        <div className="related-tech">
          <h2 className="related-title">Autres Technologies</h2>
          <div className="tech-grid">
            <Link href="/technology/how-it-works" className="related-card">
              <h3>How it works</h3>
              <p>Découvrez le fonctionnement global de notre technologie de biosignatures</p>
            </Link>
            
            <Link href="/technology/artificial-intelligence" className="related-card">
              <h3>Artificial Intelligence</h3>
              <p>Comment notre IA analyse les données électrophysiologiques</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantElectrophysiologyPage;