"use client"

import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram
} from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer: React.FC = () => {
  // États pour la newsletter
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

  // Liens principaux simplifiés
  const mainLinks = [
    { id: 'products', label: 'Produits', url: '/products' },
    { id: 'solutions', label: 'Solutions', url: '/solutions' },
    { id: 'resources', label: 'Ressources', url: '/resources' },
    { id: 'company', label: 'Entreprise', url: '/company' },
    { id: 'contact', label: 'Contact', url: '/contact' },
  ];

  // Réseaux sociaux
  const socialMedia = [
    { id: 'facebook', icon: <FaFacebookF />, url: 'https://facebook.com' },
    { id: 'twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { id: 'linkedin', icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
    { id: 'instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
  ];

  // Styles
  const styles = `
    .simple-footer {
      background-color: #001f3f;
      color: white;
      padding: 3rem 0 1.5rem;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 2fr;
      gap: 3rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    
    .footer-logo {
      font-size: 1.8rem;
      font-weight: 700;
      color: white;
      text-decoration: none;
      margin-bottom: 1rem;
      display: inline-block;
    }
    
    .footer-description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      max-width: 400px;
    }
    
    .footer-links-grid {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    
    .footer-link {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }
    
    .footer-link:hover {
      color: white;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.95rem;
      margin-bottom: 1rem;
      text-decoration: none;
    }
    
    .contact-item:hover {
      color: white;
    }
    
    .social-icons {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    
    .social-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .social-icon:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    
    .newsletter-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: white;
    }
    
    .newsletter-form {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .newsletter-input {
      flex: 1;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      color: white;
      font-size: 0.95rem;
    }
    
    .newsletter-input:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.3);
    }
    
    .newsletter-input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    .newsletter-btn {
      background: white;
      color: #001f3f;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.3s ease;
    }
    
    .newsletter-btn:hover {
      opacity: 0.9;
    }
    
    .newsletter-success {
      color: #4CAF50;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1.5rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    @media (max-width: 768px) {
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
    }
    
    .copyright {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.9rem;
    }
    
    .legal-links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    
    .legal-link {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.3s ease;
    }
    
    .legal-link:hover {
      color: white;
    }
    
    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 40px;
      height: 40px;
      background: white;
      color: #001f3f;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 100;
      opacity: 0;
      visibility: hidden;
    }
    
    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
    }
    
    .back-to-top:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
      
      <footer className="simple-footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Informations de l'entreprise */}
            <div>
              <Link href="/" className="footer-logo">
                Food security
              </Link>
              <p className="footer-description">
                Solutions d&apos;agriculture intelligente pour une production 
                durable et efficace.
              </p>
              
              <div className="social-icons">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.id}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Liens rapides */}
            <div>
              <h3 className="newsletter-title">Navigation</h3>
              <div className="footer-links-grid">
                {mainLinks.map((link) => (
                  <Link key={link.id} href={link.url} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Newsletter & Contact */}
            <div>
              <h3 className="newsletter-title">Newsletter</h3>
              <p className="footer-description" style={{ fontSize: '0.9rem' }}>
                Recevez nos dernières actualités et conseils.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  S&apos;inscrire
                </button>
              </form>
              
              {subscribed && (
                <div className="newsletter-success">
                  Merci pour votre inscription !
                </div>
              )}
              
              <div style={{ marginTop: '1.5rem' }}>
                <a href="mailto:afriquenotreterre@gmail.com" className="contact-item">
                  <MdEmail />
                  <span>afriquenotreterre@gmail.com</span>
                </a>
                <a href="tel:+237655019080" className="contact-item">
                  <MdPhone />
                  <span>+237 655019080</span>
                </a>
                <div className="contact-item">
                  <MdLocationOn />
                  <span>Douala, Cameroun</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              © 2024 AgriNature droits réservés.
            </div>
            <div className="legal-links">
              <Link href="/legal/privacy" className="legal-link">
                Confidentialité
              </Link>
              <Link href="/legal/terms" className="legal-link">
                Conditions
              </Link>
              <Link href="/legal/cookies" className="legal-link">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      <button className="back-to-top" onClick={scrollToTop} aria-label="Retour en haut">
        ↑
      </button>
    </>
  );
};

export default Footer;