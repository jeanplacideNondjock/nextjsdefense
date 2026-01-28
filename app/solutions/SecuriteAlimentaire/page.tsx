"use client"

import React from 'react';
import Link from 'next/link';

const FoodAgInputSupplierPage: React.FC = () => {
  return (
    <>
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
          margin-bottom: 24px;
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
          background-color: #4299e1;
        }
        
        .description {
          font-size: 17px;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 24px;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
        }
        
        .features-list li {
          padding: 12px 0;
          padding-left: 32px;
          position: relative;
          font-size: 16px;
          color: #4a5568;
          line-height: 1.6;
        }
        
        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #48bb78;
          font-weight: bold;
          font-size: 18px;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .benefit-card {
          background-color: #f7fafc;
          border-radius: 8px;
          padding: 30px;
          border-left: 4px solid #4299e1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
        
        .benefit-icon {
          font-size: 32px;
          margin-bottom: 20px;
          color: #4299e1;
        }
        
        .benefit-title {
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 12px;
        }
        
        .benefit-description {
          font-size: 15px;
          color: #718096;
          line-height: 1.6;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #1a365d 0%, #2d4a8c 100%);
          border-radius: 12px;
          padding: 50px;
          color: white;
          text-align: center;
          margin-bottom: 60px;
        }
        
        .cta-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .cta-description {
          font-size: 18px;
          margin-bottom: 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.9;
        }
        
        .cta-button {
          display: inline-block;
          background-color: white;
          color: #1a365d;
          padding: 14px 36px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        
        .cta-button:hover {
          background-color: transparent;
          color: white;
          transform: translateY(-2px);
        }
        
        .related-solutions {
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
        
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }
        
        .solution-card {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 25px;
          text-align: center;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        
        .solution-card:hover {
          border-color: #4299e1;
          box-shadow: 0 8px 20px rgba(66, 153, 225, 0.12);
          transform: translateY(-3px);
        }
        
        .solution-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 10px;
        }
        
        .solution-card p {
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
          
          .cta-section {
            padding: 30px 20px;
          }
          
          .cta-title {
            font-size: 26px;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
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
          <Link href="/solutions">Solutions</Link>
          <span>/</span>
          <span>Food & Ag input supplier</span>
        </div>
        
        {/* En-tête de la page */}
        <div className="page-header">
          <h1 className="page-title">Food & Ag Input Supplier</h1>
          <p className="page-subtitle">
            Des solutions de biosignature avancées pour les fournisseurs d'intrants agricoles. 
            Optimisez l'efficacité de vos produits grâce à des données physiologiques précises des plantes.
          </p>
        </div>
        
        {/* Section Contenu Principal */}
        <div className="content-section">
          <div>
            <h2 className="section-title">Notre Solution</h2>
            <p className="description">
              En tant que fournisseur d'intrants agricoles, vous savez que l'efficacité de vos produits 
              dépend de leur interaction avec la physiologie végétale. Notre technologie de biosignatures 
              vous fournit des données en temps réel sur la réponse des plantes à vos produits.
            </p>
            
            <ul className="features-list">
              <li>Surveillance continue des réponses physiologiques des plantes</li>
              <li>Validation scientifique de l'efficacité de vos produits</li>
              <li>Données comparatives pour le développement de nouvelles formulations</li>
              <li>Optimisation des recommandations d'application</li>
              <li>Preuves tangibles pour vos arguments commerciaux</li>
              <li>Intégration avec vos systèmes existants</li>
            </ul>
          </div>
          
          <div>
            <h2 className="section-title">Comment ça fonctionne</h2>
            <p className="description">
              Notre système utilise des capteurs non invasifs qui mesurent les signaux électrophysiologiques 
              des plantes. Ces données sont analysées par notre intelligence artificielle pour fournir des 
              insights actionnables sur l'efficacité des intrants.
            </p>
            
            <div className="description">
              <strong>Processus en 4 étapes :</strong>
              <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li style={{ marginBottom: '10px' }}>Installation des capteurs sur les plantes témoins</li>
                <li style={{ marginBottom: '10px' }}>Application de vos produits selon les protocoles</li>
                <li style={{ marginBottom: '10px' }}>Collecte et analyse des données de biosignature</li>
                <li>Génération de rapports détaillés sur l'efficacité</li>
              </ol>
            </div>
          </div>
        </div>
        
        {/* Section Avantages */}
        <h2 className="section-title">Avantages Clés</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">📊</div>
            <h3 className="benefit-title">Validation Scientifique</h3>
            <p className="benefit-description">
              Obtenez des preuves scientifiques de l'efficacité de vos produits grâce à des données 
              physiologiques objectives et reproductibles.
            </p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3 className="benefit-title">Optimisation des Formulations</h3>
            <p className="benefit-description">
              Identifiez les formulations les plus efficaces et optimisez vos produits basés sur des 
              données réelles de réponse des plantes.
            </p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3 className="benefit-title">Avantage Commercial</h3>
            <p className="benefit-description">
              Différenciez-vous sur le marché avec des preuves tangibles de l'efficacité de vos produits 
              et renforcez la confiance de vos clients.
            </p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">🌱</div>
            <h3 className="benefit-title">Développement Durable</h3>
            <p className="benefit-description">
              Contribuez à une agriculture plus durable en optimisant l'utilisation des intrants et en 
              réduisant les applications excessives.
            </p>
          </div>
        </div>
        
        {/* Section CTA */}
        <div className="cta-section">
          <h2 className="cta-title">Prêt à transformer vos données en avantage compétitif ?</h2>
          <p className="cta-description">
            Contactez notre équipe d'experts pour découvrir comment notre technologie de biosignatures 
            peut vous aider à optimiser vos produits et à valider scientifiquement leur efficacité.
          </p>
          <Link href="/contact" className="cta-button">
            Demander une démonstration
          </Link>
        </div>
        
        {/* Solutions Connexes */}
        <div className="related-solutions">
          <h2 className="related-title">Autres Solutions</h2>
          <div className="solutions-grid">
            <Link href="/solutions/indoor-growers" className="solution-card">
              <h3>Indoor Growers</h3>
              <p>Solutions pour les cultures sous serre et en environnement contrôlé</p>
            </Link>
            
            <Link href="/solutions/outdoor-growers" className="solution-card">
              <h3>Outdoor Growers</h3>
              <p>Technologies adaptées aux cultures en plein champ</p>
            </Link>
            
            <Link href="/solutions/academics-scientists" className="solution-card">
              <h3>Academics & Scientists</h3>
              <p>Outils de recherche avancés pour la science végétale</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodAgInputSupplierPage;