


"use client";

import { useEffect, useRef, useState } from 'react';

const VideoWithOverlayContent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  
  // Données pour les slides défilants
  const slides = [
    {
      id: 1,
      title: "La Technologie des Biosignaux",
      description: "Nos capteurs enregistrent les signaux électriques émis par les plantes pour détecter le stress hydrique, les carences nutritives et les attaques de parasites avant tout symptôme visible.",
      imagePlaceholder: "📡"
    },
    {
      id: 2,
      title: "Analyse par Intelligence Artificielle",
      description: "Notre algorithme d'IA analyse en temps réel les données collectées pour fournir des recommandations précises d'irrigation, de fertilisation et de traitement.",
      imagePlaceholder: "🧠"
    },
    {
      id: 3,
      title: "Tableau de Bord Agricole",
      description: "Une interface intuitive permet aux agriculteurs de visualiser la santé de leurs cultures et de recevoir des alertes préventives sur leur smartphone.",
      imagePlaceholder: "📊"
    },
    {
      id: 4,
      title: "Impact Environnemental",
      description: "Réduction de 30% de la consommation d'eau et de 25% des intrants grâce à une agriculture pilotée par les données végétales.",
      imagePlaceholder: "🌍"
    }
  ];

  // Données pour les partenaires
  const partners = [
    { id: 1, name: "INRAE", logo: "🔬" },
    { id: 2, name: "AgriTech Valley", logo: "🏞️" },
    { id: 3, name: "GreenLab", logo: "🌱" },
    { id: 4, name: "Sustainable Farms", logo: "🚜" },
    { id: 5, name: "Plant Science Institute", logo: "📚" },
    { id: 6, name: "AgroInnov", logo: "⚡" },
    { id: 7, name: "BioSolutions", logo: "♻️" },
    { id: 8, name: "Food Security Alliance", logo: "🌾" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current) return;
      
      const videoContainer = videoContainerRef.current;
      const rect = videoContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcul de la progression basée sur la position de la vidéo
      let progress = 0;
      if (rect.top < 0) {
        progress = Math.min(1, Math.abs(rect.top) / (windowHeight * 0.7));
      }
      
      setScrollProgress(progress);
      
      // Contrôle de la vidéo
      const video = videoContainer.querySelector('video');
      if (video) {
        if (progress < 0.8) {
          video.style.opacity = String(1 - progress * 1.2);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    // Animation pour les partenaires
    const container = partnersRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      let animationFrameId: number;

      const animate = () => {
        if (container.scrollLeft >= scrollWidth - clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 0.5;
        }
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('scroll', handleScroll);
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcul des styles basés sur le défilement
  const videoScale = 1 + scrollProgress * 0.3;
  const contentOpacity = Math.min(1, scrollProgress * 2);
  const contentTranslateY = scrollProgress * 50;

  return (
    <div className="relative">
      {/* Section vidéo sticky */}
      <div 
        ref={videoContainerRef}
        className="sticky top-0 h-screen z-10 overflow-hidden"
      >
        <div 
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
          style={{ transform: `scale(${videoScale})` }}
        >
          <div className="relative w-full h-full max-w-5xl mx-auto">
            {/* Overlay sombre qui s'intensifie au défilement */}
            <div 
              className="absolute inset-0 bg-black transition-opacity duration-300 z-20"
              style={{ opacity: scrollProgress * 0.7 }}
            />
            
            {/* Conteneur vidéo */}
            <div className="relative w-full h-full rounded-lg md:rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/votre-video.mp4" type="video/mp4" />
                <source src="/videos/votre-video.webm" type="video/webm" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
              
              {/* Contrôles vidéo */}
              <div className="absolute bottom-4 right-4 z-30">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const video = e.currentTarget.closest('.relative')?.querySelector('video');
                    if (video) {
                      if (video.paused) {
                        video.play();
                      } else {
                        video.pause();
                      }
                    }
                  }}
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="text-center text-white animate-bounce">
            <div className="text-sm font-semibold mb-2">Défilez pour découvrir</div>
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Contenu qui se superpose */}
      <div 
        ref={contentRef}
        className="relative z-20"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslateY}px)`,
          transition: 'all 0.5s ease-out'
        }}
      >
        {/* Espace initial pour le défilement */}
        <div className="h-screen" />
        
        {/* Contenu principal */}
        <div className="w-full">
          {/* Section 1 */}
          <section className="py-16 px-4 md:px-8 bg-white">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-8">
                Nos technologies transforment l'écoute des plantes en solutions concrètes
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
                {/* Colonne 1 */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-6 w-full max-w-xs h-48 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <div className="text-5xl text-emerald-600 opacity-80">📡</div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Biocapteurs Haute Précision</h3>
                  <p className="text-gray-700">Des capteurs non invasifs qui mesurent les signaux électriques des plantes en temps réel.</p>
                </div>

                {/* Colonne 2 */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-6 w-full max-w-xs h-48 overflow-hidden rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                    <div className="text-5xl text-teal-600 opacity-80">📱</div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Interface Intuitive</h3>
                  <p className="text-gray-700">Tableau de bord accessible sur tous vos appareils pour un suivi 24h/24.</p>
                </div>

                {/* Colonne 3 */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-6 w-full max-w-xs h-48 overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <div className="text-5xl text-green-600 opacity-80">📈</div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Résultats Mesurables</h3>
                  <p className="text-gray-700">Suivez l'impact de vos décisions avec des données précises et des rapports détaillés.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 - Slides */}
          <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-emerald-50 to-white">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-12 text-center">
                Comment ça fonctionne ?
              </h2>

              <div className="relative w-full max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                    <div className="relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center">
                        <div className="text-6xl opacity-70">
                          {slides[activeSlide].imagePlaceholder}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-emerald-800 mb-4">
                        {slides[activeSlide].title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 max-w-md">
                        {slides[activeSlide].description}
                      </p>
                      
                      <div className="flex space-x-3">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              activeSlide === index
                                ? 'bg-emerald-600 w-6'
                                : 'bg-emerald-300 hover:bg-emerald-400'
                            }`}
                            aria-label={`Aller à l'étape ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 - Partenaires */}
          <section className="py-16 px-4 md:px-8 bg-white">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
              <div className="text-center mb-12 w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                  Partenaires en innovation
                </h2>
                <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
                  Signaux de réussite
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-10 w-full max-w-5xl">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                  Chez Vivent Biosignals, nous sommes fiers de collaborer avec des agriculteurs experts, 
                  des scientifiques pionniers et des chefs d'entreprise visionnaires.
                </p>

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
                      <div className="text-4xl mb-3">
                        {partner.logo}
                      </div>
                      <h3 className="text-base font-bold text-emerald-800 text-center">
                        {partner.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Navigation */}
          <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-emerald-700 to-teal-700">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Imaginez un monde où les plantes guident l'agriculture
              </h2>
              
              <p className="text-xl text-emerald-100 mb-12 max-w-3xl">
                Plongez plus profondément dans notre monde
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-white mb-3">Nos solutions</h3>
                  <p className="text-emerald-100 mb-4">
                    Découvrez comment nos technologies transforment l'agriculture
                  </p>
                  <button className="inline-flex items-center text-white font-semibold hover:text-emerald-50 text-sm md:text-base">
                    Explorer les solutions
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-white mb-3">La technologie</h3>
                  <p className="text-emerald-100 mb-4">
                    Comprenez la science derrière nos biocapteurs
                  </p>
                  <button className="inline-flex items-center text-white font-semibold hover:text-emerald-50 text-sm md:text-base">
                    Découvrir la technologie en action
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-white mb-3">À propos de Vivent Biosignals</h3>
                  <p className="text-emerald-100 mb-4">
                    Apprenez-en plus sur notre mission et notre équipe
                  </p>
                  <button className="inline-flex items-center text-white font-semibold hover:text-emerald-50 text-sm md:text-base">
                    Apprendre encore plus
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VideoWithOverlayContent;