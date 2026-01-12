// app/company/careers/page.tsx
"use client";

import { 
  Briefcase, 
  Building, 
  Globe, 
  Users, 
  Award, 
  Rocket, 
  MapPin, 
  DollarSign, 
  Heart, 
  Leaf,
  TreePine,
  Sprout,
  Home,
  Shield,
  Target
} from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Expert en Finance Rurale",
      department: "Finance Inclusive",
      location: "Remote / Afrique de l'Ouest",
      type: "CDI",
      salary: "€45k - €65k",
      description: "Développez des solutions de microfinance pour les populations rurales.",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Chargé de Projets Agricoles",
      department: "Développement Rural",
      location: "Afrique Centrale",
      type: "CDI",
      salary: "€40k - €58k",
      description: "Supervisez des projets d'agriculture durable en zones rurales.",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Analyste d'Impact Social",
      department: "Impact & Mesure",
      location: "Remote",
      type: "CDI",
      salary: "€50k - €70k",
      description: "Évaluez l'impact de nos programmes de financement rural.",
      color: "bg-white border-green-200"
    },
    {
      title: "Développeur FinTech",
      department: "Technologie",
      location: "Remote",
      type: "CDI",
      salary: "€55k - €75k",
      description: "Créez des solutions digitales pour l'inclusion financière rurale.",
      color: "bg-white border-green-200"
    },
    {
      title: "Coordinatrice de Terrain",
      department: "Opérations",
      location: "Afrique de l'Est",
      type: "CDI",
      salary: "€42k - €60k",
      description: "Coordonnez les programmes de financement dans les communautés rurales.",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Stagiaire Finance Durable",
      department: "R&D",
      location: "Paris / Remote",
      type: "Stage",
      salary: "€1,200/mois",
      description: "Étudiez des modèles innovants de finance rurale durable.",
      color: "bg-white border-green-200"
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="text-green-600" size={24} />,
      title: "Impact Vert Direct",
      description: "Contribuez à des projets écologiques et durables"
    },
    {
      icon: <Heart className="text-green-600" size={24} />,
      title: "Mission Significative",
      description: "Changez réellement la vie des communautés rurales"
    },
    {
      icon: <Globe className="text-green-600" size={24} />,
      title: "Flexibilité Totale",
      description: "Télétravail et horaires adaptés à votre vie"
    },
    {
      icon: <DollarSign className="text-green-600" size={24} />,
      title: "Rémunération Équitable",
      description: "Salaire compétitif + primes d'impact"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Communauté Engagée",
      description: "Travaillez avec des passionnés du développement durable"
    },
    {
      icon: <Rocket className="text-green-600" size={24} />,
      title: "Croissance Continue",
      description: "Formations et évolutions de carrière garanties"
    }
  ];

  const ruralPrograms = [
    {
      icon: <Sprout className="text-green-600" size={32} />,
      title: "Microcrédits Agricoles",
      description: "Financement accessible pour les petits exploitants agricoles",
      impact: "10,000+ agriculteurs financés"
    },
    {
      icon: <Home className="text-green-600" size={32} />,
      title: "Énergie Solaire Rurale",
      description: "Accès à l'énergie propre dans les zones reculées",
      impact: "500+ villages électrifiés"
    },
    {
      icon: <TreePine className="text-green-600" size={32} />,
      title: "Agroforesterie",
      description: "Soutien aux pratiques agricoles durables et reforestation",
      impact: "1M+ arbres plantés"
    },
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: "Assurance Récolte",
      description: "Protection financière contre les aléas climatiques",
      impact: "25,000+ familles protégées"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4 border-b border-green-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-700 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
            Vivent Dans
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-green-600">Accueil</Link>
            <Link href="/company/make-a-difference" className="hover:text-green-600">Impact</Link>
            <Link href="/company/careers" className="text-green-600 font-semibold">Carrières</Link>
            <Link href="/contact" className="hover:text-green-600">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Briefcase className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Carrières avec <span className="text-green-600">Impact Rural</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Rejoignez notre mission d`inclusion financière et de développement durable 
            pour les populations rurales à travers le monde
          </p>
          <Link href="#openings">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg">
              Voir nos offres
            </button>
          </Link>
        </div>
      </section>

      {/* Notre Mission Rurale */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Notre Focus
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Financement des Communautés Rurales
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous développons des solutions financières innovantes pour autonomiser 
              les populations rurales et créer un développement économique durable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ruralPrograms.map((program, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-100 hover:border-green-300 transition">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center text-green-700 font-semibold">
                  <Target className="w-4 h-4 mr-2" />
                  {program.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Rejoindre */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi Travailler Avec Nous ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres d'Emploi */}
      <section id="openings" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Nous Recrutons
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Offres d`Emploi
            </h2>
            <p className="text-gray-600">
              Rejoignez des équipes dédiées au développement rural durable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className={`${job.color} rounded-xl border p-6 hover:shadow-lg transition`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        job.type === 'CDI' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{job.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-green-600" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                
                <Link href={`/company/careers/apply?position=${encodeURIComponent(job.title)}`}>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                    Postuler maintenant
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ils Parlent de Leur Expérience
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-green-600">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Amadou Sow</h4>
                  <p className="text-green-600 text-sm">Expert Finance Rurale</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                Travailler ici m`a permis de voir l`impact réel de notre travail sur les communautés rurales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-green-600">MF</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Marie Fall</h4>
                  <p className="text-green-600 text-sm">Chargée de Projets</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                La flexibilité et la mission significative font de ce travail une véritable vocation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-green-600">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Jean Diallo</h4>
                  <p className="text-green-600 text-sm">Analyste d`Impact</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                Chaque jour, je contribue à rendre l`économie plus inclusive et durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Building className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à Faire la Différence ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous soyez un expert en finance rurale ou passionné par le développement durable, 
            votre place est ici
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/careers/spontaneous">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg">
                Candidature Spontanée
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                Parler à un Recruteur
              </button>
            </Link>
          </div>
          
          <p className="text-gray-500 mt-8">
            Processus de recrutement : 2 semaines maximum ⚡
          </p>
        </div>
      </section>
    </div>
  );
}