

// app/news-media/press/archive/[year]/page.tsx
"use client";

import { useParams, useRouter } from 'next/navigation';
import { 
  Calendar, 
  ArrowLeft, 
  FileText, 
  Download, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Données d'exemple par année
const yearlyArchives = {
  '2023': [
    { id: '1', title: 'Résultats Financiers Q4 2023', date: '15 Décembre 2023', downloads: 450 },
    { id: '2', title: 'Lancement Programme Éducation', date: '10 Novembre 2023', downloads: 320 },
    { id: '3', title: 'Partenariat avec Google.org', date: '25 Octobre 2023', downloads: 890 },
    { id: '4', title: 'Rapport Impact Environnemental', date: '15 Octobre 2023', downloads: 540 },
    { id: '5', title: 'Nominations Direction', date: '5 Octobre 2023', downloads: 210 },
  ],
  '2022': [
    { id: '6', title: 'Expansion en Amérique Latine', date: '20 Décembre 2022', downloads: 380 },
    { id: '7', title: 'Fonds Climat 2023', date: '10 Novembre 2022', downloads: 420 },
    { id: '8', title: 'Prix Innovation Sociale', date: '25 Octobre 2022', downloads: 560 },
  ],
  '2021': [
    { id: '9', title: 'Lancement Application Mobile', date: '15 Décembre 2021', downloads: 1200 },
    { id: '10', title: 'Partenariat UE', date: '10 Novembre 2021', downloads: 670 },
  ],
  '2020': [
    { id: '11', title: 'Création Vivent Dans', date: '1 Janvier 2020', downloads: 1500 },
    { id: '12', title: 'Premier Programme Microcrédit', date: '15 Mars 2020', downloads: 890 },
  ]
};

export default function YearArchivePage() {
  const params = useParams();
  const router = useRouter();
  const year = params.year as string;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Récupérer les archives de l'année
  const archives = yearlyArchives[year as keyof typeof yearlyArchives] || [];
  
  // Pagination
  const totalPages = Math.ceil(archives.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArchives = archives.slice(startIndex, startIndex + itemsPerPage);

  if (!year || !archives.length) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Archives non disponibles</h2>
          <Link href="/news-media/press" className="text-green-600 hover:text-green-700 font-semibold">
            Retour aux communiqués
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-green-700">
              Vivent Dans
            </Link>
            <div className="space-x-6">
              <Link href="/news-media" className="hover:text-green-600">Actualités</Link>
              <Link href="/news-media/press" className="text-green-600 font-semibold">Presse</Link>
              <Link href="/contact" className="hover:text-green-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/news-media/press" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux communiqués
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Archives {year}</h1>
              <p className="text-gray-600">
                {archives.length} communiqué(s) publié(s) cette année
              </p>
            </div>
          </div>
        </div>

        {/* Liste des archives */}
        <div className="space-y-6">
          {currentArchives.map((archive) => (
            <div key={archive.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {archive.title}
                    </h3>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {archive.date}
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        {archive.downloads} téléchargements
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Télécharger
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-green-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          </div>
        )}

        {/* Navigation des années */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Autres années</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(yearlyArchives)
              .filter(y => y !== year)
              .map(otherYear => (
                <Link
                  key={otherYear}
                  href={`/news-media/press/archive/${otherYear}`}
                  className="bg-green-50 hover:bg-green-100 rounded-xl p-4 text-center transition"
                >
                  <div className="text-2xl font-bold text-green-600">{otherYear}</div>
                  <div className="text-sm text-gray-600">
                    {yearlyArchives[otherYear as keyof typeof yearlyArchives].length} communiqué(s)
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Statistiques {year}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{archives.length}</div>
              <div className="text-sm text-gray-600">Communiqués publiés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {archives.reduce((acc, a) => acc + a.downloads, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Téléchargements totaux</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round(archives.reduce((acc, a) => acc + a.downloads, 0) / archives.length)}
              </div>
              <div className="text-sm text-gray-600">Moyenne par communiqué</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {archives[0]?.date.split(' ')[2] || 'N/A'}
              </div>
              <div className="text-sm text-gray-600">Dernière publication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}