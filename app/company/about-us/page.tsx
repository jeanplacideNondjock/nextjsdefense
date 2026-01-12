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

const AboutUsPage: React.FC = () => {
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
        
        .hero-section {
          background: linear-gradient(135deg, rgba(237, 137, 54, 0.1) 0%, rgba(237, 137, 54, 0.05) 100%);
          border-radius: 20px;
          padding: 80px 60px;
          margin-bottom: 60px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(237, 137, 54, 0.15) 0%, rgba(237, 137, 54, 0) 70%);
          border-radius: 50%;
        }
        
        .page-title {
          font-size: 48px;
          font-weight: 800;
          color: #1a365d;
          margin-bottom: 20px;
          line-height: 1.1;
          position: relative;
          z-index: 1;
        }
        
        .page-subtitle {
          font-size: 24px;
          color: #4a5568;
          font-weight: 400;
          line-height: 1.5;
          max-width: 800px;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }
        
        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 42px;
          font-weight: 700;
          color: #ed8936;
          display: block;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 14px;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 8px;
        }
        
        .mission-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
          align-items: center;
        }
        
        .mission-title {
          font-size: 36px;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .mission-text {
          font-size: 18px;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 20px;
        }
        
        .mission-quote {
          font-size: 22px;
          font-weight: 600;
          color: #ed8936;
          font-style: italic;
          border-left: 4px solid #ed8936;
          padding-left: 20px;
          margin: 30px 0;
        }
        
        .values-section {
          background-color: #f8fafc;
          border-radius: 20px;
          padding: 60px;
          margin-bottom: 80px;
        }
        
        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 40px;
          text-align: center;
          position: relative;
          padding-bottom: 20px;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-color: #ed8936;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .value-card {
          background-color: white;
          border-radius: 12px;
          padding: 40px 30px;
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(237, 137, 54, 0.1);
          border-color: #ed8936;
        }
        
        .value-icon {
          font-size: 48px;
          margin-bottom: 25px;
          color: #ed8936;
        }
        
        .value-title {
          font-size: 22px;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 15px;
        }
        
        .value-description {
          font-size: 16px;
          color: #718096;
          line-height: 1.6;
        }
        
        .team-section {
          margin-bottom: 80px;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }
        
        .team-member {
          text-align: center;
        }
        
        .member-avatar {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ed8936, #dd6b20);
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 48px;
          font-weight: 600;
        }
        
        .member-name {
          font-size: 20px;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 8px;
        }
        
        .member-role {
          font-size: 16px;
          color: #ed8936;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .member-bio {
          font-size: 15px;
          color: #718096;
          line-height: 1.6;
        }
        
        .story-section {
          background: linear-gradient(135deg, #1a365d 0%, #2d4a8c 100%);
          border-radius: 20px;
          padding: 80px 60px;
          color: white;
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
        }
        
        .story-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
        }
        
        .story-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }
        
        .story-content {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
          opacity: 0.95;
        }
        
        .story-highlight {
          color: #ed8936;
          font-weight: 600;
        }
        
        .cta-section {
          text-align: center;
          padding: 60px 40px;
          background-color: #f8fafc;
          border-radius: 20px;
          margin-bottom: 40px;
        }
        
        .cta-title {
          font-size: 32px;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 20px;
        }
        
        .cta-description {
          font-size: 18px;
          color: #718096;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        
        .cta-button {
          display: inline-block;
          background-color: #ed8936;
          color: white;
          padding: 16px 40px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid #ed8936;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .cta-button:hover {
          background-color: #dd6b20;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(237, 137, 54, 0.2);
        }
        
        .related-company {
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
        
        .company-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }
        
        .related-card {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        
        .related-card:hover {
          border-color: #ed8936;
          box-shadow: 0 8px 20px rgba(237, 137, 54, 0.12);
          transform: translateY(-5px);
        }
        
        .related-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 10px;
        }
        
        .related-card p {
          font-size: 15px;
          color: #718096;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 50px 30px;
          }
          
          .page-title {
            font-size: 36px;
          }
          
          .page-subtitle {
            font-size: 20px;
          }
          
          .mission-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .mission-title {
            font-size: 28px;
          }
          
          .values-section {
            padding: 40px 30px;
          }
          
          .section-title {
            font-size: 28px;
          }
          
          .story-section {
            padding: 50px 30px;
          }
          
          .story-title {
            font-size: 28px;
          }
          
          .cta-section {
            padding: 40px 20px;
          }
          
          .cta-title {
            font-size: 26px;
          }
          
          .hero-stats {
            justify-content: space-around;
            gap: 20px;
          }
          
          .stat-number {
            font-size: 32px;
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
          <Link href="/company">Company</Link>
          <span>/</span>
          <span>About us</span>
        </div>
        
        {/* Section Hero */}
        <div className="hero-section">
          <h1 className="page-title">About Vivent Biosignals</h1>
          <p className="page-subtitle">
            Pionniers dans la technologie de biosignatures végétales. Nous transformons la façon 
            dont le monde comprend et interagit avec les plantes grâce à des données physiologiques précises.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2016</span>
              <span className="stat-label">Fondation</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Pays desservis</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Plantes analysées</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Chercheurs</span>
            </div>
          </div>
        </div>
        
        {/* Section Mission */}
        <div className="mission-section">
          <div>
            <h2 className="mission-title">Notre Mission</h2>
            <p className="mission-text">
              Chez Vivent, nous croyons que chaque plante a une histoire à raconter. 
              Notre mission est de donner une voix aux végétaux en capturant et en interprétant 
              leurs signaux physiologiques pour créer un avenir plus durable.
            </p>
            
            <p className="mission-text">
              Nous développons des technologies avancées qui permettent aux agriculteurs, 
              aux chercheurs et aux entreprises de comprendre les besoins réels des plantes 
              en temps réel, optimisant ainsi la production alimentaire tout en préservant 
              nos ressources naturelles.
            </p>
            
            <blockquote className="mission-quote">
              Donner une voix aux plantes pour nourrir le monde durablement.
            </blockquote>
          </div>
          
          <div>
            <h2 className="mission-title">Notre Vision</h2>
            <p className="mission-text">
              Nous envisageons un monde où chaque décision agricole est informée par 
              des données précises sur l`état physiologique des plantes. Un monde où 
              la technologie permet une harmonie parfaite entre production alimentaire 
              et préservation environnementale.
            </p>
            
            <p className="mission-text">
              Notre vision s`étend au-delà de l`agriculture. Nous voyons un futur où 
              la compréhension des biosignatures végétales révolutionne la recherche 
              scientifique, la pharmacologie, et même notre relation avec le monde naturel.
            </p>
          </div>
        </div>
        
        {/* Section Valeurs */}
        <div className="values-section">
          <h2 className="section-title">Nos Valeurs Fondamentales</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3 className="value-title">Excellence Scientifique</h3>
              <p className="value-description">
                Chaque décision est guidée par la rigueur scientifique et la recherche 
                approfondie. Nous nous engageons à maintenir les plus hauts standards 
                d`exactitude et de fiabilité dans nos technologies.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3 className="value-title">Durabilité</h3>
              <p className="value-description">
                Nous développons des solutions qui contribuent à une agriculture 
                durable et respectueuse de l`environnement. Notre technologie aide 
                à réduire l`utilisation des ressources et à minimiser l`impact écologique.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                Nous croyons au pouvoir de la collaboration. En travaillant avec 
                des agriculteurs, des chercheurs et des partenaires industriels, 
                nous développons des solutions qui répondent aux besoins réels du terrain.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                Nous repoussons constamment les limites de ce qui est possible 
                dans l`analyse des plantes. Notre équipe d`experts explore de 
                nouvelles façons de comprendre et d`interagir avec le monde végétal.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section Histoire */}
        <div className="story-section">
          <h2 className="story-title">Notre Histoire</h2>
          <p className="story-content">
            Fondée en 2016 par un groupe de scientifiques passionnés par la physiologie végétale, 
            Vivent Biosignals est née d`une simple question : <span className="story-highlight">Que disent vraiment les plantes ?</span>
          </p>
          
          <p className="story-content">
            Ce qui a commencé comme un projet de recherche universitaire s`est rapidement transformé 
            en une entreprise technologique de premier plan. Nos premiers prototypes, développés 
            dans un laboratoire universitaire, ont démontré que les plantes communiquent activement 
            à travers des signaux électriques.
          </p>
          
          <p className="story-content">
            Aujourd`hui, avec des bureaux en Europe et en Amérique du Nord, nous continuons à 
            innover dans le domaine des biosignatures végétales, aidant des clients dans plus 
            de 40 pays à mieux comprendre et optimiser leurs cultures.
          </p>
        </div>
        
        {/* Section Équipe */}
        <div className="team-section">
          <h2 className="section-title">Notre Équipe de Direction</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">DS</div>
              <h3 className="member-name">Dr. Sarah Dubois</h3>
              <div className="member-role">CEO & Co-fondatrice</div>
              <p className="member-bio">
                PhD en Physiologie Végétale. 15 ans d`expérience en recherche 
                et développement de technologies agricoles.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">ML</div>
              <h3 className="member-name">Dr. Marc Laurent</h3>
              <div className="member-role">Directeur Scientifique</div>
              <p className="member-bio">
                Expert en électrophysiologie végétale. Auteur de plus de 50 
                publications scientifiques dans le domaine.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">AJ</div>
              <h3 className="member-name">Anna Jensen</h3>
              <div className="member-role">Directrice Technologie</div>
              <p className="member-bio">
                Ingénieure en intelligence artificielle spécialisée dans 
                l`analyse de données biologiques complexes.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">PT</div>
              <h3 className="member-name">Pierre Thibault</h3>
              <div className="member-role">Directeur des Opérations</div>
              <p className="member-bio">
                Expérience de 20 ans dans la gestion de projets technologiques 
                à l`échelle internationale.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section CTA */}
        <div className="cta-section">
          <h2 className="cta-title">Rejoignez Notre Mission</h2>
          <p className="cta-description">
            Vous souhaitez contribuer à révolutionner la façon dont nous comprenons 
            et interagissons avec les plantes ? Découvrez comment vous pouvez faire 
            partie de notre aventure.
          </p>
          <Link href="/company/careers" className="cta-button">
            Voir les opportunités
          </Link>
        </div>
        
        {/* Sections Connexes */}
        <div className="related-company">
          <h2 className="related-title">Découvrir Plus</h2>
          <div className="company-grid">
            <Link href="/company/make-a-difference" className="related-card">
              <h3>Make a difference</h3>
              <p>Découvrez comment nous contribuons à un avenir plus durable</p>
            </Link>
            
            <Link href="/company/careers" className="related-card">
              <h3>Careers</h3>
              <p>Rejoignez notre équipe et façonnez l`avenir de l`agriculture</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;