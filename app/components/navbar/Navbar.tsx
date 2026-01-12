"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // <-- Import ajouté ici

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
        { text: "Food & Ag inputs supplier", url: "/solutions/food-ag-input-supplier" },
        { text: "Indoor growers", url: "/solutions/indoor-growers" },
        { text: "Outdoor growers", url: "/solutions/outdoor-growers" },
        { text: "Academics & scientists", url: "/solutions/Academics&Scientists" }
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
      {/* Styles globaux */}
      <style>{`
        .navigation-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .top-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #e0e0e0;
          margin-bottom: 10px;
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
          font-size: 14px;
          font-weight: 600;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          position: relative;
          padding: 5px 0;
          transition: color 0.3s;
          user-select: none;
        }
        
        .nav-item:hover {
          color: #2d3748;
        }
        
        /* Ajouter les séparateurs ~ */
        .nav-item:not(:last-child)::after {
          content: '~';
          margin-left: 5px;
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
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
          z-index: 1000;
          border-radius: 4px;
          padding: 10px 0;
          margin-top: 5px;
          animation: fadeIn 0.2s ease;
          border-top: 3px solid;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .dropdown-link {
          display: block;
          padding: 12px 20px;
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
          padding-left: 25px;
          text-decoration: none;
        }
        
        .dropdown-title {
          padding: 12px 20px;
          font-size: 13px;
          font-weight: 700;
          color: #2d3748;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 5px;
          background-color: #f8fafc;
        }
        
        .dropdown-indicator {
          display: inline-block;
          margin-left: 3px;
          font-size: 10px;
          vertical-align: middle;
          transition: transform 0.3s;
        }
        
        .dropdown.active .dropdown-indicator {
          transform: rotate(180deg);
        }
        
        .biosignals-section {
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .biosignals-text {
          font-size: 36px;
          font-weight: 300;
          color: #2d3748;
          letter-spacing: 2px;
          cursor: pointer;
        }
        
        .biosignals-text:hover {
          opacity: 0.9;
        }
        
        .contact-button {
          background-color: #1a365d;
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-left: 10px;
          text-decoration: none;
          display: inline-block;
        }
        
        .contact-button:hover {
          background-color: #2d4a8c;
          text-decoration: none;
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
            gap: 10px;
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
          
          .biosignals-text {
            font-size: 28px;
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
        }
      `}</style>
      
      <div className="navigation-container" ref={dropdownContainerRef}>
        {/* Première ligne de navigation */}
        <div className="top-nav">
          {/* Lien principal avec Link */}
          <Link 
            href="/" 
            className="company-name" 
            onClick={closeDropdown}
          >
            SUSTAINAIBLE AGRICULTURE
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

            {/* Bouton Contact - aussi avec Link si c'est une page interne */}
            <Link 
              href="/contact" 
              className="contact-button"
              onClick={closeDropdown}
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* Deuxième ligne avec Biosignals */}
        <div className="biosignals-section">
          <Link 
            href="/" 
            className="biosignals-text" 
            onClick={closeDropdown}
          >
            Biosignals
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;