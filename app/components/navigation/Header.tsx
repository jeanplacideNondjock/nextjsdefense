// components/ui/HeaderViventExact.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function HeaderViventExact() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Effet de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    {
      title: 'SOLUTIONS',
      items: [
        { name: 'Agriculture de Précision', link: '/solutions/Formation&Education' },
        { name: 'Gestion Intelligente', link: '/solutions/GestionIntelligente' },
        { name: 'Sécurité Alimentaire', link: '/solutions/SecuriteAlimentaire' },
        { name: 'Formation & Éducation', link: '/solutions/AgricultureDePrecision' },
      ]
    },
    {
      title: 'TECHNOLOGY',
      items: [
        { name: 'Plateforme LoT', link: '/technology/PlateformeLoT' },
        { name: 'Analytics & AI', link: '/technology/Analytics&AI' },
        { name: 'Applications', link: '/technology/applications' },
        { name: 'API & Intégration', link: '/technology/API&Integration' },
      ]
    },
    {
      title: 'COMPANY',
      items: [
        { name: 'About Us', link: '/company/about-us' },
        { name: 'Our Mission', link: '/company/make-a-difference' },
        { name: 'Careers', link: '/company/careers' },
        { name: 'Contact', link: '/company/contact' },
      ]
    },
    {
      title: 'NEWS & RESEARCH',
      items: [
        { name: 'Latest News', link: '/news-media' },
        { name: 'Research Papers', link: '/news' },
        { name: 'Case Studies', link: '/next-cloud' },
     
      ]
    },
    {
      title: 'CLIENT ACCESS',
      items: [
        { name: 'Login', link: '/sign-in' },
        { name: 'Documentation', link: '/analytical' },
        { name: 'Support Center', link: '/archive/year' },
        { name: 'Resources', link: '/client-access/live-dashboard' },
      ]
    }
  ];

  return (
    <>
      {/* Navigation principale  */}
      <div 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            
            {/* Titre à GAUCHE avec marge gauche */}
            <div className="flex items-center ml-12">
              <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                <span className="text-gray-900">Agriculture Durarable</span>
                <span className="text-green-600 block"> & Securite alimentaire</span>
              </Link>
            </div>

            {/* Menu Desktop centré */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {menuItems.map((menu) => (
                <div key={menu.title} className="relative group">
                  <button
                    onClick={() => setActiveMenu(activeMenu === menu.title ? null : menu.title)}
                    onMouseEnter={() => setActiveMenu(menu.title)}
                    className="flex items-center gap-1 px-4 py-6 text-sm font-medium tracking-wide text-gray-700 hover:text-green-600 transition-colors relative group"
                  >
                    {menu.title}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === menu.title ? 'rotate-180' : ''}`} />
                    {activeMenu === menu.title && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></div>
                    )}
                  </button>

                  {/* Dropdown avec animation */}
                  {activeMenu === menu.title && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-64 bg-white shadow-2xl border border-gray-200 rounded-lg py-3 z-50 animate-fadeIn"
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      {menu.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.link}
                          className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors hover:pl-7"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Bouton Contact à DROITE avec marge droite */}
            <div className="flex items-center mr-12 ">
              <Link 
                href="/company/contact"
                className="w-20 h-10 text-center px-6 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Menu Mobile Toggle - maintenu à droite */}
            <div className="lg:hidden mr-6">
              <button 
                className="p-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile Full */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white animate-slideDown">
              <div className="py-6">
                {menuItems.map((menu) => (
                  <div key={menu.title} className="mb-3 px-6">
                    <button
                      onClick={() => setActiveMenu(activeMenu === menu.title ? null : menu.title)}
                      className="flex justify-between items-center w-full py-4 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span>{menu.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === menu.title ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeMenu === menu.title && (
                      <div className="mt-2 ml-4 space-y-2 border-l border-gray-200 pl-6">
                        {menu.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.link}
                            className="block py-3 text-sm text-gray-600 hover:text-green-600 hover:pl-2 transition-all"
                            onClick={() => {
                              setActiveMenu(null);
                              setMobileOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Bouton Contact mobile */}
                <div className="mt-8 px-6 py-10">
                  <Link 
                    href="/company/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center py-4 bg-green-600 text-white text-base font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styles inline pour les animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}