


// app/news-media/page.tsx
"use client";

import { 
  Newspaper, 
  Calendar, 
  Users, 
  TrendingUp, 
  Globe, 
  Award,
  ArrowRight,
  Clock,
  Tag,
  Share2,
  BookOpen,
  Video,
  Mic,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export default function NewsMediaPage() {
  const featuredNews = [
    {
      id: 1,
      title: "Vivent Dans Lance un Nouveau Programme de Microcrédits en Afrique",
      excerpt: "Notre initiative de financement rural atteint 10,000 agriculteurs dans 5 pays d'Afrique de l'Ouest.",
      category: "Impact Social",
      date: "15 Mars 2024",
      readTime: "5 min",
      imageColor: "bg-green-100",
      tags: ["Finance Rurale", "Afrique", "Innovation"]
    },
    {
      id: 2,
      title: "Partenariat avec l'UE pour le Développement Durable",
      excerpt: "Collaboration historique pour accélérer la transition écologique dans les zones rurales.",
      category: "Partenariats",
      date: "10 Mars 2024",
      readTime: "4 min",
      imageColor: "bg-blue-100",
      tags: ["UE", "Développement", "Écologie"]
    },
    {
      id: 3,
      title: "Notre Impact 2023 : Chiffres Clés",
      excerpt: "Découvrez comment nous avons transformé la vie de 500,000 personnes l'année dernière.",
      category: "Rapport Annuel",
      date: "5 Mars 2024",
      readTime: "7 min",
      imageColor: "bg-purple-100",
      tags: ["Impact", "2023", "Statistiques"]
    }
  ];

  const allNews = [
    {
      id: 4,
      title: "Innovation Technologique : Notre Nouvelle Plateforme Fintech",
      excerpt: "Découvrez comment notre technologie révolutionne l'accès au financement rural.",
      category: "Technologie",
      date: "28 Février 2024",
      type: "Article",
      icon: <FileText className="text-green-600" />
    },
    {
      id: 5,
      title: "Interview avec Notre CEO sur France 24",
      excerpt: "Notre fondateur partage sa vision sur l'inclusion financière en Afrique.",
      category: "Médias",
      date: "25 Février 2024",
      type: "Vidéo",
      icon: <Video className="text-blue-600" />
    },
    {
      id: 6,
      title: "Podcast : Les Défis du Financement Rural",
      excerpt: "Notre expert financier discute des solutions innovantes pour les communautés rurales.",
      category: "Podcast",
      date: "20 Février 2024",
      type: "Audio",
      icon: <Mic className="text-purple-600" />
    },
    {
      id: 7,
      title: "Étude de Cas : Succès en Côte d'Ivoire",
      excerpt: "Comment notre programme a boosté l'économie locale dans 50 villages.",
      category: "Succès",
      date: "15 Février 2024",
      type: "Rapport",
      icon: <BookOpen className="text-orange-600" />
    },
    {
      id: 8,
      title: "Conférence Internationale sur le Développement Durable",
      excerpt: "Nous étions présents au Forum Économique Mondial pour parler inclusion financière.",
      category: "Événements",
      date: "10 Février 2024",
      type: "Actualité",
      icon: <Users className="text-red-600" />
    },
    {
      id: 9,
      title: "Prix de l'Innovation Sociale 2024",
      excerpt: "Vivent Dans récompensé pour son approche innovante du microcrédit.",
      category: "Reconnaissance",
      date: "5 Février 2024",
      type: "Distinction",
      icon: <Award className="text-yellow-600" />
    }
  ];

  const pressReleases = [
    {
      id: 10,
      title: "Communiqué : Lancement du Fonds Vert Afrique",
      date: "1 Mars 2024",
      download: "PDF, 2MB"
    },
    {
      id: 11,
      title: "Communiqué : Résultats Financiers 2023",
      date: "20 Février 2024",
      download: "PDF, 3MB"
    },
    {
      id: 12,
      title: "Communiqué : Nouveau Conseil d'Administration",
      date: "10 Février 2024",
      download: "PDF, 1MB"
    }
  ];

  const mediaKit = {
    logo: "Logo Vivent Dans (SVG, PNG)",
    photos: "Bibliothèque d'images haute résolution",
    brandGuide: "Guide des marques et couleurs",
    teamBios: "Biographies de l'équipe dirigeante",
    factSheet: "Fiche d'information entreprise"
  };

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
            <Link href="/company/careers" className="hover:text-green-600">Carrières</Link>
            <Link href="/news-media" className="text-green-600 font-semibold">News & Media</Link>
            <Link href="/contact" className="hover:text-green-600">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <Newspaper className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              News <span className="text-green-600">&</span> Media
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Découvrez nos dernières actualités, communiqués de presse et ressources média
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Suivez notre impact mondial</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Restez informé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">À la Une</h2>
            <Link href="/news-media/all" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
              Voir toutes les actualités
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <article key={news.id} className="group cursor-pointer">
                <div className={`${news.imageColor} h-48 rounded-xl mb-6 flex items-center justify-center`}>
                  <Newspaper className="w-16 h-16 text-green-600" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {news.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {news.readTime} de lecture
                  </div>
                  <Link href={`/news-media/article/${news.id}`} className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                    Lire l`article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {news.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All News & Media */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Toutes les Actualités
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news) => (
              <div key={news.id} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    {news.icon}
                  </div>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {news.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{news.type}</span>
                  <Link href={`/news-media/article/${news.id}`} className="text-green-600 hover:text-green-700 text-sm font-medium">
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Press Releases */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-green-600" />
                Communiqués de Presse
              </h2>
              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <div key={release.id} className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{release.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{release.date}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">{release.download}</span>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                          Télécharger
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/news-media/press" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                  Archives des communiqués
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Media Kit */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Share2 className="w-6 h-6 mr-3 text-green-600" />
                Kit Média
              </h2>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-gray-600 mb-6">
                  Ressources pour les journalistes et les médias
                </p>
                <div className="space-y-4">
                  {Object.entries(mediaKit).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-green-100 last:border-0">
                      <span className="font-medium text-gray-900">{key}</span>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Télécharger
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Contact Presse</h4>
                  <p className="text-gray-600 mb-2">presse@viventdans.com</p>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-linear-to-r from-green-50 to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Newspaper className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Restez Informé
          </h2>
          <p className="text-gray-600 mb-8">
            Recevez nos dernières actualités et mises à jour directement dans votre boîte mail
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              S`abonner
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            Nous respectons votre vie privée. Désabonnez-vous à tout moment.
          </p>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Suivez-Nous sur les Réseaux
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: "Twitter", handle: "@ViventDans", followers: "25K", color: "bg-blue-100 text-blue-600" },
              { platform: "LinkedIn", handle: "Vivent Dans", followers: "50K", color: "bg-blue-50 text-blue-700" },
              { platform: "Instagram", handle: "@ViventDans", followers: "40K", color: "bg-pink-100 text-pink-600" },
              { platform: "YouTube", handle: "Vivent Dans TV", followers: "15K", color: "bg-red-100 text-red-600" }
            ].map((social, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Tag className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{social.platform}</h3>
                <p className="text-gray-600 mb-2">{social.handle}</p>
                <p className="text-sm text-gray-500">{social.followers} abonnés</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}