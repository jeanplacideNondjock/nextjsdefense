"use client"

import React from 'react';
import Link from 'next/link';

const PlantElectrophysiologyPage: React.FC = () => {
  return (
    <>
      {/* Styles de la page */}
      <style>{`
        /* Reset du padding-top qui aurait pu être ajouté par la navigation */
        body {
          padding-top: 0 !important;
        }
        
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
          
          /* Retirer le padding-top pour mobile */
          .page-container {
            padding-top: 0;
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
              à leur environnement. Ces signaux, appelés potentiels d'action et potentiels de variation, 
              sont des indicateurs précis de l'état physiologique des plantes.
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
                <li>Intégration avec d'autres paramètres physiologiques</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Section Science */}
        <h2 className="section-title">Les Fondements Scientifiques</h2>
        <div className="science-grid">
          <div className="science-card">
            <div className="science-icon">⚡</div>
            <h3 className="science-title">Potentiels d'Action</h3>
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
              Utilisation de l'intelligence artificielle pour corréler les signaux électriques 
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
          <h2 className="application-title">Applications de l'Électrophysiologie Végétale</h2>
          <p className="application-description">
            Notre technologie d'électrophysiologie végétale ouvre de nouvelles possibilités 
            pour la recherche agricole, le développement de produits et l'optimisation des cultures.
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