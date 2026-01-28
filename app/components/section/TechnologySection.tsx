"use client";

import { useEffect, useRef, useState } from 'react';

const PostVideoContent = () => {
  const partnersRef = useRef<HTMLDivElement>(null);
  
  // Données pour les étapes "Comment ça fonctionne ?"
  const etapes = [
    {
      id: 1,
      title: "La Technologie des Biosignaux",
      description: "Nos capteurs enregistrent les signaux électriques émis par les plantes pour détecter le stress hydrique, les carences nutritives et les attaques de parasites avant tout symptôme visible.",
      imageUrl: "/background/back.webp"
    },
    {
      id: 2,
      title: "Analyse par Intelligence Artificielle",
      description: "Notre algorithme d'IA analyse en temps réel les données collectées pour fournir des recommandations précises d'irrigation, de fertilisation et de traitement.",
      imageUrl: "/background/back3.jpg"
    },
    {
      id: 3,
      title: "Tableau de Bord Agricole",
      description: "Une interface intuitive permet aux agriculteurs de visualiser la santé de leurs cultures et de recevoir des alertes préventives sur leur smartphone.",
      imageUrl: "/science/lab2.jpg"
    },
    {
      id: 4,
      title: "Impact Environnemental",
      description: "Réduction de 30% de la consommation d'eau et de 25% des intrants grâce à une agriculture pilotée par les données végétales.",
      imageUrl: "/case-studies/usecases3.jpg"
    }
  ];

  // Données pour les partenaires (logos défilants)
  const partners = [
    { id: 1, name: "INRAE", logo: "/log1.jpg" },
    { id: 2, name: "AgriTech Valley", logo: "/log2.jpg" },
    { id: 3, name: "GreenLab", logo: "/log3.jpg" },
    { id: 4, name: "Sustainable Farms", logo: "/log4.jpg" },
    { id: 5, name: "Plant Science Institute", logo: "/log5.jpg" },
    { id: 6, name: "AgroInnov", logo: "/log6.jpg" },
    { id: 7, name: "BioSolutions", logo: "/log7.jpg" },
    { id: 8, name: "Food Security Alliance", logo: "/log8.jpg" }
  ];

  // Images pour la section 1
  const section1Images = [
    { src: "/biocap1.jpg", alt: "Biocapteurs Haute Précision", title: "Biocapteurs Haute Précision", description: "Des capteurs non invasifs qui mesurent les signaux électriques des plantes en temps réel." },
    { src: "/bord1.jpg", alt: "Interface Intuitive", title: "Interface Intuitive", description: "Tableau de bord accessible sur tous vos appareils pour un suivi 24h/24." },
    { src: "/rest1.jpg", alt: "Résultats Mesurables", title: "Résultats Mesurables", description: "Suivez l'impact de vos décisions avec des données précises et des rapports détaillés." }
  ];

  // Animation pour le défilement infini des logos
  useEffect(() => {
    const container = partnersRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let animationFrameId: number;

    const animate = () => {
      if (container.scrollLeft >= scrollWidth - clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 8;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Section 1 */}
      <section className="py-16 px-4 md:px-8 bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-8">
            Nos technologies transforment l`écoute des plantes en solutions concrètes
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Colonne 1 */}
            {section1Images.map((image, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center">
                <div className="mb-6 w-full max-w-xs h-48 overflow-hidden rounded-xl `bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  {/* Image réelle */}
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback si l'image ne charge pas
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'text-5xl text-emerald-600 opacity-80';
                      fallback.textContent = index === 0 ? '' : index === 1 ? '' : '';
                      e.currentTarget.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-3">{image.title}</h3>
                <p className="text-gray-700">{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Comment ça fonctionne ? (Design alterné) */}
      <section className="py-16 px-4 md:px-8 `bg-gradient-to-b from-emerald-50 to-white">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-12 text-center">
            Comment ça fonctionne ?
          </h2>

          <div className="space-y-20">
            {etapes.map((etape, index) => (
              <div 
                key={etape.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                {/* Contenu texte */}
                <div className="flex-1 max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
                    {etape.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {etape.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-xl">
                  <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden rounded-2xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center">
                      <img 
                        src={etape.imageUrl} 
                        alt={etape.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'text-6xl opacity-70';
                          fallback.textContent = '';
                          e.currentTarget.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Partenaires */}
      <section className="py-16 px-4 md:px-8 bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Partenaires en innovation
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Signaux de réussite
            </p>
          </div>

          <div className="`bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-10 w-full max-w-5xl">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              Chez Africa Nature Biosignals, nous sommes fiers de collaborer avec des agriculteurs experts, 
              des scientifiques pionniers et des chefs d`entreprise visionnaires. Ensemble, nous libérons 
              tout le potentiel d`une agriculture durable et pilotée par les plantes.
            </p>

            {/* Carrousel */}
            <div 
              ref={partnersRef}
              className="flex overflow-hidden space-x-6 py-6"
              style={{ scrollBehavior: 'smooth' }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-none w-40 h-40 bg-white rounded-xl p-4 shadow-md border border-emerald-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
                >
                  {/* Logo partenaire */}
                  <div className="h-16 w-16 flex items-center justify-center mb-3">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        // Fallback si le logo ne charge pas
                        e.currentTarget.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'text-3xl';
                        fallback.textContent = '🏢';
                        e.currentTarget.parentNode?.appendChild(fallback);
                      }}
                    />
                  </div>
                  <h3 className="text-base font-bold text-emerald-800 text-center">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-emerald-600">
                 Notre réseau de partenaire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Navigation */}
      <section className="py-16 px-4 md:px-8 `bg-gradient-to-r from-emerald-700 to-teal-700 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Imaginez un monde où les plantes guident l`agriculture
          </h2>
          
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl">
            Plongez plus profondément dans notre monde
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {/* Bloc 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Nos solutions</h3>
              <p className="text-emerald-100 mb-4">
                Découvrez comment nos technologies transforment l`agriculture
              </p>
              <button className="inline-flex items-center text-white font-semibold hover:text-emerald-50 text-sm md:text-base">
                Explorer les solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Bloc 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">La technologie</h3>
              <p className="text-emerald-100 mb-4">
                Comprenez la science derrière nos biocapteurs
              </p>
              <button className="inline-flex items-center text-white font-semibold hover:text-emerald-50 text-sm md:text-base">
                Découvrir la technologie en action
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Bloc 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">À propos de nous</h3>
              <p className="text-emerald-100 mb-4">
                Apprenez-en plus sur notre mission et notre équipe
              </p>
              <button className="inline-flex items-center text-white font-semibold hover:text-emerald-50 text-sm md:text-base">
                Apprendre encore plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostVideoContent;