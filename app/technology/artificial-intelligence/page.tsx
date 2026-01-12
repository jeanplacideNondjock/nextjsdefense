


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

const ArtificialIntelligencePage: React.FC = () => {
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
        
        .ai-process {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }
        
        .process-step {
          background-color: #f0fff4;
          border-radius: 12px;
          padding: 30px;
          border-left: 5px solid #48bb78;
          transition: transform 0.3s ease;
        }
        
        .process-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(72, 187, 120, 0.12);
        }
        
        .step-number {
          display: inline-block;
          background-color: #48bb78;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 20px;
        }
        
        .step-title {
          font-size: 22px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 15px;
        }
        
        .step-description {
          font-size: 16px;
          color: #4a5568;
          line-height: 1.6;
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
        
        .ai-models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .ai-model-card {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .ai-model-card:hover {
          border-color: #48bb78;
          box-shadow: 0 8px 20px rgba(72, 187, 120, 0.12);
          transform: translateY(-3px);
        }
        
        .model-icon {
          font-size: 40px;
          margin-bottom: 20px;
          color: #48bb78;
        }
        
        .model-title {
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 15px;
        }
        
        .model-description {
          font-size: 15px;
          color: #718096;
          line-height: 1.6;
        }
        
        .data-flow {
          background-color: #f8fafc;
          border-radius: 15px;
          padding: 40px;
          margin-bottom: 50px;
        }
        
        .flow-diagram {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .flow-step {
          text-align: center;
          flex: 1;
          min-width: 150px;
        }
        
        .flow-circle {
          width: 60px;
          height: 60px;
          background-color: #48bb78;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          font-weight: bold;
          font-size: 20px;
        }
        
        .flow-arrow {
          color: #48bb78;
          font-size: 24px;
          margin: 0 10px;
        }
        
        .flow-label {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 5px;
        }
        
        .flow-desc {
          font-size: 13px;
          color: #718096;
        }
        
        .ai-benefits {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          border-radius: 15px;
          padding: 50px;
          color: white;
          text-align: center;
          margin-bottom: 60px;
        }
        
        .benefits-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .benefit-item {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 25px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }
        
        .benefit-icon {
          font-size: 30px;
          margin-bottom: 15px;
        }
        
        .benefit-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .benefit-desc {
          font-size: 14px;
          opacity: 0.9;
        }
        
        .demo-button {
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
          margin-top: 30px;
        }
        
        .demo-button:hover {
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
          .ai-process {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .page-title {
            font-size: 32px;
          }
          
          .page-subtitle {
            font-size: 18px;
          }
          
          .ai-benefits {
            padding: 30px 20px;
          }
          
          .benefits-title {
            font-size: 26px;
          }
          
          .ai-models-grid {
            grid-template-columns: 1fr;
          }
          
          .flow-diagram {
            flex-direction: column;
            align-items: center;
          }
          
          .flow-arrow {
            transform: rotate(90deg);
            margin: 10px 0;
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
          <span>Artificial Intelligence</span>
        </div>
        
        {/* En-tête de la page */}
        <div className="page-header">
          <h1 className="page-title">Artificial Intelligence</h1>
          <p className="page-subtitle">
            Notre intelligence artificielle transforme les données de biosignatures en insights 
            actionnables. Découvrez comment notre IA analyse et interprète les signaux physiologiques des plantes.
          </p>
        </div>
        
        {/* Processus IA */}
        <h2 className="section-title">Notre Processus d`Analyse par IA</h2>
        <div className="ai-process">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3 className="step-title">Collecte des Données Brutes</h3>
            <p className="step-description">
              Les capteurs capturent des millions de points de données électrophysiologiques 
              avec une précision milliseconde, créant un flux continu d`informations brutes.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3 className="step-title">Prétraitement et Nettoyage</h3>
            <p className="step-description">
              Notre IA filtre les bruits, normalise les signaux et prépare les données pour 
              l`analyse, éliminant les artefacts et préservant les informations significatives.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Reconnaissance de Patterns</h3>
            <p className="step-description">
              Les algorithmes d`apprentissage profond identifient des patterns spécifiques 
              dans les biosignatures, corrélés à des états physiologiques particuliers.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3 className="step-title">Génération d`Insights</h3>
            <p className="step-description">
              L`IA synthétise les analyses en insights actionnables, prédictions et 
              recommandations pour une prise de décision éclairée.
            </p>
          </div>
        </div>
        
        {/* Modèles d'IA */}
        <h2 className="section-title">Nos Modèles d`Intelligence Artificielle</h2>
        <div className="ai-models-grid">
          <div className="ai-model-card">
            <div className="model-icon">🧠</div>
            <h3 className="model-title">Réseaux de Neurones Profonds</h3>
            <p className="model-description">
              Architectures neuronales spécialement conçues pour reconnaître des patterns 
              complexes dans les séries temporelles de biosignatures.
            </p>
          </div>
          
          <div className="ai-model-card">
            <div className="model-icon">📊</div>
            <h3 className="model-title">Apprentissage par Transfert</h3>
            <p className="model-description">
              Modèles pré-entraînés adaptés aux caractéristiques spécifiques des signaux 
              électrophysiologiques végétaux pour une analyse plus rapide et précise.
            </p>
          </div>
          
          <div className="ai-model-card">
            <div className="model-icon">🔍</div>
            <h3 className="model-title">Algorithmes d`Ensemble</h3>
            <p className="model-description">
              Combinaison de multiples modèles pour améliorer la précision des prédictions 
              et réduire les erreurs d`analyse.
            </p>
          </div>
          
          <div className="ai-model-card">
            <div className="model-icon">⚡</div>
            <h3 className="model-title">Traitement en Temps Réel</h3>
            <p className="model-description">
              Architectures optimisées pour analyser les flux de données en continu et 
              fournir des insights instantanés.
            </p>
          </div>
        </div>
        
        {/* Flux de Données */}
        <div className="data-flow">
          <h2 className="section-title">Flux de Données et Analyse</h2>
          <div className="flow-diagram">
            <div className="flow-step">
              <div className="flow-circle">🌱</div>
              <div className="flow-label">Plantes</div>
              <div className="flow-desc">Sources de données</div>
            </div>
            
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-circle">📡</div>
              <div className="flow-label">Capteurs</div>
              <div className="flow-desc">Collecte des signaux</div>
            </div>
            
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-circle">☁️</div>
              <div className="flow-label">Cloud</div>
              <div className="flow-desc">Stockage sécurisé</div>
            </div>
            
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-circle">🤖</div>
              <div className="flow-label">IA</div>
              <div className="flow-desc">Analyse des données</div>
            </div>
            
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-circle">📈</div>
              <div className="flow-label">Insights</div>
              <div className="flow-desc">Résultats actionnables</div>
            </div>
          </div>
        </div>
        
        {/* Avantages de l'IA */}
        <div className="ai-benefits">
          <h2 className="benefits-title">Avantages de Notre Approche IA</h2>
          <p className="benefits-description" style={{ fontSize: '18px', opacity: '0.9', maxWidth: '800px', margin: '0 auto' }}>
            Notre intelligence artificielle révolutionne l`analyse des biosignatures végétales 
            avec une précision et une vitesse inégalées.
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <div className="benefit-name">Précision Supérieure</div>
              <div className="benefit-desc">
                Détection de patterns imperceptibles à l`œil humain avec une précision de 99.2%
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-name">Analyse en Temps Réel</div>
              <div className="benefit-desc">
                Traitement des données en continu pour des insights immédiats
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <div className="benefit-name">Prédictions Précises</div>
              <div className="benefit-desc">
                Anticipation des états physiologiques avant qu`ils ne deviennent visibles
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🔬</div>
              <div className="benefit-name">Recherche Avancée</div>
              <div className="benefit-desc">
                Découverte de nouvelles corrélations entre signaux et états physiologiques
              </div>
            </div>
          </div>
          
          <Link href="/contact" className="demo-button">
            Voir l`IA en Action
          </Link>
        </div>
        
        {/* Technologies Connexes */}
        <div className="related-tech">
          <h2 className="related-title">Autres Technologies</h2>
          <div className="tech-grid">
            <Link href="/technology/how-it-works" className="related-card">
              <h3>How it works</h3>
              <p>Comprendre le fonctionnement global de notre technologie</p>
            </Link>
            
            <Link href="/technology/plant-electrophysiology" className="related-card">
              <h3>Plant Electrophysiology</h3>
              <p>La science derrière les signaux que notre IA analyse</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtificialIntelligencePage;