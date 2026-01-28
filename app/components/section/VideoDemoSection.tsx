"use client";

import { useEffect, useRef, useState } from 'react';

const VideoScrollSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcul de la progression du défilement dans la section
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      
      setScrollProgress(progress);

      // Gérer la lecture vidéo
      if (videoRef.current) {
        if (progress > 0.2 && progress < 0.9) {
          if (!isPlaying) {
            videoRef.current.play().catch(console.error);
            setIsPlaying(true);
          }
          // Ajuster le volume en fonction du défilement
          videoRef.current.volume = Math.min(1, progress * 1.5);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying]);

  // Calcul des styles basés sur le défilement
  const videoScale = 0.8 + scrollProgress * 0.4; // Agrandissement progressif
  const videoOpacity = Math.min(1, scrollProgress * 3);
  const blurAmount = Math.max(0, 5 - scrollProgress * 5);
  const overlayOpacity = scrollProgress * 0.7;

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[150vh] md:min-h-[200vh] `bg-gradient-to-b from-emerald-50 to-emerald-100 overflow-hidden"
    >
      {/* Conteneur de la vidéo avec effets de parallaxe */}
      <div 
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `scale(${videoScale})`,
          opacity: videoOpacity,
          filter: `blur(${blurAmount}px)`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Overlay sombre progressif */}
        <div 
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* Conteneur vidéo */}
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[80vh] object-cover"
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            <source src="/videos/video1.webm" type="video/webm" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          
          {/* Contrôles overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => {
                if (videoRef.current) {
                  if (videoRef.current.paused) {
                    videoRef.current.play();
                    setIsPlaying(true);
                  } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                  }
                }
              }}
              className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                {isPlaying ? (
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-center text-emerald-700 animate-bounce">
          <div className="text-sm font-semibold mb-2">Défilez pour voir la vidéo</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Texte descriptif qui apparaît */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none"
        style={{
          opacity: Math.max(0, 1 - scrollProgress * 2),
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl max-w-lg">
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">
            Découvrez notre technologie en action
          </h3>
          <p className="text-gray-700">
            Notre système de biocapteurs enregistre les signaux électriques des plantes
            pour une agriculture plus intelligente et durable.
          </p>
        </div>
      </div>

      {/* Indicateur de progression */}
      <div className="fixed top-4 right-4 z-30">
        <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-600 transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoScrollSection;