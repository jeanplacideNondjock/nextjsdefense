
// app/news-media/press/page.tsx
"use client";

import { 
  FileText, 
  Calendar, 
  Download, 
  Newspaper, 
  Search, 
  Filter,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Archive,
  Printer,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  fileSize: string;
  downloads: number;
}

export default function PressPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const pressReleases: PressRelease[] = [
    {
      id: '1',
      title: "Communiqué : Lancement du Fonds Vert Afrique 2024",
      date: "1 Mars 2024",
      category: "Finance",
      summary: "Vivent Dans annonce la création d'un fonds de 50 millions d'euros dédié au financement de projets écologiques en Afrique.",
      fileSize: "PDF, 2MB",
      downloads: 1245
    },
    {
      id: '2',
      title: "Résultats Financiers Annuels 2023",
      date: "20 Février 2024",
      category: "Finance",
      summary: "Publication des résultats exceptionnels de l'année 2023 avec une croissance de 45% des programmes de microcrédits.",
      fileSize: "PDF, 3MB",
      downloads: 987
    },
    {
      id: '3',
      title: "Nominations au Conseil d'Administration",
      date: "10 Février 2024",
      category: "Gouvernance",
      summary: "Arrivée de trois nouveaux administrateurs renforçant l'expertise en développement durable et finance inclusive.",
      fileSize: "PDF, 1MB",
      downloads: 654
    },
    {
      id: '4',
      title: "Partenariat Stratégique avec la Banque Mondiale",
      date: "25 Janvier 2024",
      category: "Partenariats",
      summary: "Signature d'un accord historique pour étendre nos programmes de financement rural à 10 nouveaux pays.",
      fileSize: "PDF, 2.5MB",
      downloads: 1890
    },
    {
      id: '5',
      title: "Lancement de l'Initiative Femmes & Finance",
      date: "15 Janvier 2024",
      category: "Impact Social",
      summary: "Nouveau programme dédié à l'autonomisation financière des femmes entrepreneures en milieu rural.",
      fileSize: "PDF, 1.8MB",
      downloads: 2100
    },
    {
      id: '6',
      title: "Rapport d'Impact 2023",
      date: "5 Janvier 2024",
      category: "Impact",
      summary: "Bilan complet de notre impact : 500,000 bénéficiaires directs dans 25 pays.",
      fileSize: "PDF, 4MB",
      downloads: 3120
    },
    {
      id: '7',
      title: "Innovation Technologique : Nouvelle Plateforme Mobile",
      date: "20 Décembre 2023",
      category: "Technologie",
      summary: "Déploiement d'une application mobile révolutionnaire pour l'accès aux services financiers en zones rurales.",
      fileSize: "PDF, 2.2MB",
      downloads: 1450
    },
    {
      id: '8',
      title: "Prix de l'Innovation Sociale 2023",
      date: "10 Décembre 2023",
      category: "Reconnaissance",
      summary: "Vivent Dans récompensé pour son approche innovante du microcrédit agricole.",
      fileSize: "PDF, 1.5MB",
      downloads: 890
    }
  ];

  const categories = ['Tous', 'Finance', 'Gouvernance', 'Partenariats', 'Impact Social', 'Impact', 'Technologie', 'Reconnaissance'];

  const filteredReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || release.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const downloadPressRelease = (id: string, title: string) => {
    // Simulation de téléchargement
    console.log(`Téléchargement du communiqué: ${title}`);
    // En pratique : window.open(`/api/press/${id}/download`)
    alert(`Téléchargement de "${title}" démarré`);
  };

  const sendToPrinter = (title: string) => {
    console.log(`Impression de: ${title}`);
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-green-700 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
              Vivent Dans
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-green-600">Accueil</Link>
              <Link href="/news-media" className="hover:text-green-600">Actualités</Link>
              <Link href="/news-media/press" className="text-green-600 font-semibold">Presse</Link>
              <Link href="/contact" className="hover:text-green-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <Newspaper className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Espace Presse
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Retrouvez tous nos communiqués de presse, rapports officiels et ressources pour les journalistes
            </p>
          </div>
        </div>
      </section>

      {/* Filtres et Recherche */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Recherche */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un communiqué..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                />
              </div>
            </div>

            {/* Filtre par catégorie */}
            <div className="relative">
              <div className="flex items-center gap-2">
                <Filter className="text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{filteredReleases.length} communiqué(s)</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>{pressReleases.reduce((acc, rel) => acc + rel.downloads, 0)} téléchargements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des Communiqués */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Communiqués de Presse</h2>
            <div className="text-sm text-gray-600">
              Triés par date (du plus récent au plus ancien)
            </div>
          </div>

          {filteredReleases.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun résultat</h3>
              <p className="text-gray-600">
                Aucun communiqué ne correspond à votre recherche. Essayez d&apos;autres termes.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredReleases.map((release) => (
                <div 
                  key={release.id} 
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icône et Catégorie */}
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="mt-2">
                        <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          {release.category}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {release.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {release.summary}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              Publié le {release.date}
                            </div>
                            <div className="flex items-center">
                              <Download className="w-4 h-4 mr-2" />
                              {release.downloads} téléchargements
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => downloadPressRelease(release.id, release.title)}
                            className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition whitespace-nowrap"
                          >
                            <Download className="w-4 h-4" />
                            Télécharger ({release.fileSize})
                          </button>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={() => sendToPrinter(release.title)}
                              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50 transition"
                            >
                              <Printer className="w-4 h-4" />
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50 transition">
                              <Mail className="w-4 h-4" />
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50 transition">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredReleases.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                  Précédent
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Suivant
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Archives */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Archive className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Archives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Accédez à nos communiqués des années précédentes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['2023', '2022', '2021', '2020'].map((year) => (
              <div key={year} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="text-4xl font-bold text-green-600 mb-2">{year}</div>
                <div className="text-gray-600 mb-4">{year === '2023' ? '12 communiqués' : '8 communiqués'}</div>
                <Link 
                  href={`/news-media/press/archive/${year}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Consulter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Presse */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-linear-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Contact Presse</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Pour les journalistes</h3>
                <div className="space-y-4">
                  <p>
                    Notre équipe presse est disponible pour répondre à vos questions,
                    organiser des interviews ou fournir des informations complémentaires.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      <span>presse@viventdans.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-5 h-5 mr-3">📱</span>
                      <span>+33 1 23 45 67 89</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Demande d&apos;interview</h3>
                <p className="mb-4">
                  Vous souhaitez interviewer un membre de notre équipe dirigeante ?
                </p>
                <Link 
                  href="/contact/press-request"
                  className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Formulaire de demande
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Presse */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Newsletter Presse
          </h2>
          <p className="text-gray-600 mb-8">
            Recevez nos communiqués directement dans votre boîte mail. 
            Réservée aux journalistes et professionnels des médias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email professionnelle"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              S&apos;inscrire
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            Nous ne partageons jamais vos coordonnées avec des tiers.
          </p>
        </div>
      </section>
    </div>
  );
}