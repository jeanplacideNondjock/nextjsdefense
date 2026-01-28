"use client"
const PlantSection = () => {
  return (
    <section className="`bg-gradient-to-b from-emerald-50 to-white py-16 px-4 md:px-8 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 text-center">
          Les plantes parlent, nous vous laissons les écouter
        </h1>
        
        {/* Sous-titre */}
        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-12 text-center">
          Exploiter les biosignaux pour rendre l`agriculture plus durable
        </h2>
        
        {/* Contenu textuel sous forme de paragraphes aérés */}
        <div className="space-y-8 mb-16">
          <p className="text-lg text-gray-800 leading-relaxed">
            Chez <span className="font-bold text-emerald-800"> Biosignal</span>, nous pensons que chacun mérite d`avoir accès à une alimentation saine et à une planète prospère. C`est pourquoi nous aidons les cultures à s`exprimer pleinement.
          </p>
          
          <p className="text-lg text-gray-800 leading-relaxed">
            En exploitant le réseau de signaux internes de la plante, notre système avancé de <span className="font-bold text-emerald-700">biocapteurs</span> ou <span className="font-bold text-emerald-700">d`algorithmes d`IA</span> permet de décoder la façon dont les cultures réagissent à leur environnement, en temps réel et souvent bien avant l`apparition des symptômes visibles.
          </p>
          
          <p className="text-lg text-gray-800 leading-relaxed">
            Si vous pratiquez l`agriculture dans des champs, des serres ou des fermes intérieures, développez des traitements pour les cultures ou des biostimulants de nouvelle génération, produisez des variétés de plantes plus résistantes ou faites progresser la science végétale de pointe.
          </p>
          
          <div className="text-center my-10">
            <p className="text-2xl md:text-3xl font-bold text-emerald-800 italic">
              ... notre technologie vous montre ce dont les plantes ont besoin, quand elles en ont besoin.
            </p>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
            Prendre des décisions déterminées par les plantes
          </h3>
          
          <p className="text-lg text-gray-800 leading-relaxed">
            Quand vous mesurez la santé des cultures 24h/24 et 7j/7, vous pouvez la gérer avec plus de précision. Le résultat ? De meilleurs rendements, une utilisation plus intelligente des ressources et une empreinte environnementale plus légère.
          </p>
          
          <p className="text-lg text-gray-800 leading-relaxed">
            Rendez l`agriculture plus efficace, plus résiliente et plus respectueuse des plantes. Après tout, ce sont les plantes qui savent le mieux !
          </p>
        </div>
        
        {/* Section images en colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Colonne 1 */}
          <div className="flex flex-col items-center">
            <div className="h-64 w-full mb-4 rounded-lg overflow-hidden `bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
              {/* Image réelle avec fallback */}
              <img 
                src="/opti1.jpg" 
                alt="Optimisation des conditions de culture"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-5xl text-emerald-600';
                  fallback.textContent = '🌱';
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
              />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2 text-center">
              Optimisez les conditions de culture en temps réel
            </h4>
            <p className="text-gray-700 text-center">
              Surveillance continue pour des ajustements immédiats
            </p>
          </div>
          
          {/* Colonne 2 */}
          <div className="flex flex-col items-center">
            <div className="h-64 w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
              {/* Image réelle avec fallback */}
              <img 
                src="/opti2.jpg" 
                alt="Détection du stress des plantes"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-5xl text-teal-600';
                  fallback.textContent = '';
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
              />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2 text-center">
              Détectez le stress, les maladies et les parasites
            </h4>
            <p className="text-gray-700 text-center">
              Intervention précoce pour une meilleure santé des cultures
            </p>
          </div>
          
          {/* Colonne 3 */}
          <div className="flex flex-col items-center">
            <div className="h-64 w-full mb-4 rounded-lg overflow-hidden `bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
              {/* Image réelle avec fallback */}
              <img 
                src="industries/computerp.png" 
                alt="Accélération du développement agricole"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-5xl text-green-600';
                  fallback.textContent = '';
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
              />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2 text-center">
              Accélérez le développement et la validation
            </h4>
            <p className="text-gray-700 text-center">
              Tests rapides et précis pour l'innovation agricole
            </p>
          </div>
        </div>
        
        {/* Appel à l'action */}
        <div className="`bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl p-8 md:p-10 text-center shadow-xl">
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            Acceptez-vous de développer votre propre réseau de signaux internes de la plante ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-800 font-bold py-3 px-8 rounded-full hover:bg-emerald-50 transition-colors shadow-md hover:shadow-lg">
              Découvrir nos solutions
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantSection;