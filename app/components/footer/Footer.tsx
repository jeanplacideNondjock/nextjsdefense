"use client"

import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaGithub,
  FaChevronRight,
  FaRss,
  FaDiscord,
  FaTelegram,
  FaApple,
  FaGooglePlay,
  FaRegCopyright
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

interface FooterLink {
  id: string;
  label: string;
  url: string;
  icon?: React.ReactNode;
}

interface SocialMedia {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const Footer: React.FC = () => {
  // Liens de navigation
  const productLinks: FooterLink[] = [
    { id: 'sensors', label: 'Capteurs Intelligents', url: '/products/sensors' },
    { id: 'controllers', label: 'Contrôleurs', url: '/products/controllers' },
    { id: 'software', label: 'Logiciels', url: '/products/software' },
    { id: 'kits', label: 'Kits Complets', url: '/products/kits' },
    { id: 'accessories', label: 'Accessoires', url: '/products/accessories' },
  ];

  const solutionLinks: FooterLink[] = [
    { id: 'indoor', label: 'IndoorGrowers', url: '/solutions/indoor' },
    { id: 'outdoor', label: 'OutdoorGrowers', url: '/solutions/outdoor' },
    { id: 'greenhouse', label: 'Smart Greenhouse', url: '/solutions/greenhouse' },
    { id: 'aqua', label: 'AquaFarm', url: '/solutions/aqua' },
    { id: 'monitoring', label: 'Vivent Monitoring', url: '/solutions/monitoring' },
  ];

  const resourceLinks: FooterLink[] = [
    { id: 'docs', label: 'Documentation', url: '/resources/docs' },
    { id: 'tutorials', label: 'Tutoriels', url: '/resources/tutorials' },
    { id: 'blog', label: 'Blog', url: '/blog' },
    { id: 'casestudies', label: 'Études de Cas', url: '/resources/case-studies' },
    { id: 'research', label: 'Recherche', url: '/research' },
    { id: 'faq', label: 'FAQ', url: '/faq' },
  ];

  const companyLinks: FooterLink[] = [
    { id: 'about', label: 'À Propos', url: '/company/about' },
    { id: 'team', label: 'Équipe', url: '/company/team' },
    { id: 'careers', label: 'Carrières', url: '/careers' },
    { id: 'press', label: 'Presse', url: '/company/press' },
    { id: 'contact', label: 'Contact', url: '/contact' },
    { id: 'partners', label: 'Partenaires', url: '/partners' },
  ];

  const legalLinks: FooterLink[] = [
    { id: 'privacy', label: 'Politique de confidentialité', url: '/legal/privacy' },
    { id: 'terms', label: 'Conditions d\'utilisation', url: '/legal/terms' },
    { id: 'cookies', label: 'Gestion des cookies', url: '/legal/cookies' },
    { id: 'gdpr', label: 'RGPD', url: '/legal/gdpr' },
    { id: 'sitemap', label: 'Plan du site', url: '/sitemap' },
  ];

  // Réseaux sociaux
  const socialMedia: SocialMedia[] = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://facebook.com/vivent',
      color: '#1877F2'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/vivent',
      color: '#1DA1F2'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://linkedin.com/company/vivent',
      color: '#0077B5'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/vivent',
      color: '#E4405F'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: <FaYoutube />,
      url: 'https://youtube.com/vivent',
      color: '#FF0000'
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/vivent',
      color: '#333'
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: <FaDiscord />,
      url: 'https://discord.gg/vivent',
      color: '#5865F2'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: <FaTelegram />,
      url: 'https://t.me/vivent',
      color: '#26A5E4'
    }
  ];

  // Boutons d'application
  const appStores = [
    {
      id: 'appstore',
      name: 'App Store',
      icon: <FaApple />,
      url: 'https://apps.apple.com/app/vivent',
      color: '#000000'
    },
    {
      id: 'playstore',
      name: 'Google Play',
      icon: <FaGooglePlay />,
      url: 'https://play.google.com/store/apps/details?id=com.vivent',
      color: '#0F9D58'
    }
  ];

  // Newsletter
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  // Styles inline
  const styles = `
    /* Reset et styles de base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    
    /* Footer Container */
    .vivent-footer {
      background: linear-gradient(135deg, #0a1a0f 0%, #1a472a 100%);
      color: white;
      padding: 4rem 0 0;
      position: relative;
      overflow: hidden;
    }
    
    .vivent-footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 100, 0.3), transparent);
    }
    
    /* Container */
    .footer-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    /* Main Footer Content */
    .footer-main {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
      gap: 3rem;
      padding-bottom: 3rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    @media (max-width: 1200px) {
      .footer-main {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    
    /* Company Info */
    .company-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: white;
      cursor: pointer;
    }
    
    .logo-icon {
      font-size: 2.5rem;
      filter: drop-shadow(0 0 10px rgba(0, 255, 100, 0.5));
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
    }
    
    .logo-title {
      font-size: 1.8rem;
      font-weight: 700;
      background: linear-gradient(45deg, #00ff88, #00cc66);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
    }
    
    .logo-subtitle {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-top: 4px;
      letter-spacing: 1px;
    }
    
    .company-description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      font-size: 0.95rem;
      max-width: 320px;
    }
    
    /* Contact Info */
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
      transition: color 0.3s ease;
      text-decoration: none;
    }
    
    .contact-item:hover {
      color: #00ff88;
    }
    
    .contact-icon {
      color: #00cc66;
      font-size: 1.1rem;
      min-width: 20px;
    }
    
    /* Footer Columns */
    .footer-column {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .column-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #00ff88;
      margin-bottom: 0.5rem;
      position: relative;
      padding-bottom: 10px;
    }
    
    .column-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: #00cc66;
    }
    
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    
    .footer-link {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      position: relative;
      padding-left: 0;
    }
    
    .footer-link:hover {
      color: #00ff88;
      padding-left: 5px;
    }
    
    .footer-link-icon {
      color: #00cc66;
      font-size: 0.8rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .footer-link:hover .footer-link-icon {
      opacity: 1;
    }
    
    /* Newsletter Section */
    .newsletter-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .newsletter-description {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    .newsletter-form {
      display: flex;
      gap: 0.5rem;
      position: relative;
    }
    
    .newsletter-input {
      flex: 1;
      padding: 0.8rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      color: white;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .newsletter-input:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
      border-color: #00cc66;
      box-shadow: 0 0 0 2px rgba(0, 204, 102, 0.2);
    }
    
    .newsletter-input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    .newsletter-btn {
      background: linear-gradient(45deg, #00cc66, #00ff88);
      color: #0a1a0f;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
      white-space: nowrap;
    }
    
    .newsletter-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 255, 100, 0.3);
    }
    
    .newsletter-success {
      position: absolute;
      top: -2.5rem;
      left: 0;
      right: 0;
      background: #00cc66;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-size: 0.9rem;
      text-align: center;
      animation: slideDown 0.3s ease;
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Social Media */
    .social-media {
      margin-top: 1rem;
    }
    
    .social-title {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1rem;
    }
    
    .social-icons {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
    
    .social-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
    }
    
    .social-icon:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    /* App Store Buttons */
    .app-stores {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
      flex-wrap: wrap;
    }
    
    .app-store-btn {
      flex: 1;
      min-width: 140px;
      padding: 0.8rem 1rem;
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .app-store-btn:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .app-store-icon {
      font-size: 1.5rem;
    }
    
    .app-store-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .app-store-subtitle {
      font-size: 0.7rem;
      opacity: 0.8;
    }
    
    .app-store-title {
      font-size: 0.9rem;
      font-weight: 600;
    }
    
    /* Footer Bottom */
    .footer-bottom {
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 2rem;
    }
    
    @media (max-width: 768px) {
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
    }
    
    .copyright {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .copyright-icon {
      font-size: 0.9rem;
    }
    
    .legal-links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    
    .legal-link {
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.3s ease;
    }
    
    .legal-link:hover {
      color: #00ff88;
    }
    
    /* Back to Top Button */
    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      background: linear-gradient(45deg, #00cc66, #00ff88);
      color: #0a1a0f;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 255, 100, 0.3);
      z-index: 100;
      opacity: 0;
      transform: translateY(20px);
    }
    
    .back-to-top.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .back-to-top:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(0, 255, 100, 0.5);
    }
    
    /* Payment Methods */
    .payment-methods {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
    }
    
    .payment-text {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.85rem;
      margin-right: 0.5rem;
    }
    
    .payment-icons {
      display: flex;
      gap: 0.8rem;
    }
    
    .payment-icon {
      background: rgba(255, 255, 255, 0.1);
      width: 40px;
      height: 25px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.7);
    }
    
    /* Language Selector */
    .footer-language {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-top: 1rem;
    }
    
    .language-text {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.85rem;
    }
    
    .language-select {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .language-select:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: #00cc66;
    }
    
    /* Trust Badges */
    .trust-badges {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
      flex-wrap: wrap;
    }
    
    .trust-badge {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .trust-badge-icon {
      color: #00cc66;
      font-size: 0.8rem;
    }
    
    /* Mobile Optimization */
    @media (max-width: 480px) {
      .footer-container {
        padding: 0 1rem;
      }
      
      .newsletter-form {
        flex-direction: column;
      }
      
      .newsletter-btn {
        justify-content: center;
      }
      
      .app-store-btn {
        min-width: 100%;
      }
      
      .social-icons {
        justify-content: center;
      }
      
      .legal-links {
        justify-content: center;
      }
    }
    
    /* Animation pour les liens */
    .footer-link {
      position: relative;
      overflow: hidden;
    }
    
    .footer-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: #00cc66;
      transition: width 0.3s ease;
    }
    
    .footer-link:hover::after {
      width: 100%;
    }
  `;

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Gestion du bouton back-to-top
  React.useEffect(() => {
    const handleScroll = () => {
      const backToTopBtn = document.querySelector('.back-to-top');
      if (backToTopBtn) {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>
      
      {/* Footer */}
      <footer className="vivent-footer">
        <div className="footer-container">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Company Info */}
            <div className="company-info">
              <Link href="/" className="footer-logo">
                <div className="logo-icon"></div>
                <div className="logo-text">
                  <div className="logo-title">AGRICULTURE DURABLE ET SECURITE ALIMENTAIRE</div>
                  <div className="logo-subtitle">AGRICULTURE INTELLIGENTE</div>
                </div>
              </Link>
              
              <p className="company-description">
                Leader dans les solutions d&apos;agriculture intelligente et durable. 
                Nous connectons la technologie de pointe avec l&apos;expertise agricole 
                pour des récoltes plus abondantes et responsables.
              </p>
              
              <div className="contact-info">
                <a href="afriquenotreterre@gmail.com" className="contact-item">
                  <MdEmail className="contact-icon" />
                  <span>afriquenotreterre@gmail.com</span>
                </a>
                
                <a href="tel:+33123456789" className="contact-item">
                  <MdPhone className="contact-icon" />
                  <span>+237 655019080</span>
                </a>
                
                <div className="contact-item">
                  <MdLocationOn className="contact-icon" />
                  <span>Douala, cameroun l&apos;In</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="social-media">
                <div className="social-title">Suivez-nous</div>
                <div className="social-icons">
                  {socialMedia.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: social.color }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="trust-badges">
                <div className="trust-badge">
                  <span className="trust-badge-icon"></span>
                  Éco-responsable
                </div>
                <div className="trust-badge">
                  <span className="trust-badge-icon"></span>
                  Certifié ISO 9001
                </div>
                <div className="trust-badge">
                  <span className="trust-badge-icon"></span>
                  Données sécurisées
                </div>
              </div>
            </div>
            
            {/* Products Column */}
            <div className="footer-column">
              <h3 className="column-title">Produits</h3>
              <ul className="footer-links">
                {productLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="footer-link">
                      <FaChevronRight className="footer-link-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* RSS Feed */}
              <div style={{ marginTop: '1rem' }}>
                <Link 
                  href="/rss" 
                  className="footer-link"
                  style={{ fontSize: '0.85rem', alignItems: 'center' }}
                >
                  <FaRss style={{ color: '#FFA500' }} />
                  Flux RSS des nouveautés
                </Link>
              </div>
            </div>
            
            {/* Solutions Column */}
            <div className="footer-column">
              <h3 className="column-title">Solutions</h3>
              <ul className="footer-links">
                {solutionLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="footer-link">
                      <FaChevronRight className="footer-link-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Language Selector */}
              <div className="footer-language">
                <span className="language-text">Langue :</span>
                <select className="language-select">
                  <option value="fr">🇫🇷 Français</option>
                  <option value="en">🇬🇧 English</option>
                  <option value="es">🇪🇸 Español</option>
                  <option value="de">🇩🇪 Deutsch</option>
                </select>
              </div>
            </div>
            
            {/* Resources Column */}
            <div className="footer-column">
              <h3 className="column-title">Ressources</h3>
              <ul className="footer-links">
                {resourceLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="footer-link">
                      <FaChevronRight className="footer-link-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* App Stores */}
              <div className="app-stores">
                {appStores.map((store) => (
                  <a
                    key={store.id}
                    href={store.url}
                    className="app-store-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="app-store-icon">{store.icon}</div>
                    <div className="app-store-text">
                      <div className="app-store-subtitle">Disponible sur</div>
                      <div className="app-store-title">{store.name}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Newsletter & Company */}
            <div className="footer-column newsletter-section">
              <div>
                <h3 className="column-title">Newsletter</h3>
                <p className="newsletter-description">
                  Inscrivez-vous pour recevoir les dernières actualités, 
                  conseils agricoles et offres exclusives.
                </p>
              </div>
              
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                {subscribed && (
                  <div className="newsletter-success">
                    Merci pour votre inscription !
                  </div>
                )}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  <FiSend />
                  S&apos;abonner
                </button>
              </form>
              
              <div>
                <h3 className="column-title" style={{ marginTop: '1.5rem' }}>Entreprise</h3>
                <ul className="footer-links">
                  {companyLinks.map((link) => (
                    <li key={link.id}>
                      <Link href={link.url} className="footer-link">
                        <FaChevronRight className="footer-link-icon" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              <FaRegCopyright className="copyright-icon" />
              <span>2024 Vivent. Tous droits réservés.</span>
            </div>
            
            <div className="legal-links">
              {legalLinks.map((link) => (
                <Link key={link.id} href={link.url} className="legal-link">
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Payment Methods */}
            <div className="payment-methods">
              <span className="payment-text">Paiements sécurisés :</span>
              <div className="payment-icons">
                <div className="payment-icon">💳</div>
                <div className="payment-icon">🔷</div>
                <div className="payment-icon">📱</div>
                <div className="payment-icon">🏦</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </>
  );
};

export default Footer;