"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

// Données locales disponibles
const localData = [
  {
    title: "Données météorologiques 2024",
    description: "Historique des températures et précipitations par région.",
    fileUrl: "/data/meteo_2024.csv",
    fileType: "CSV",
    source: "Local",
  },
  {
    title: "Cartographie des sols du Cameroun",
    description: "Classification des sols, texture et pH par département.",
    fileUrl: "/data/sols_cmr.pdf",
    fileType: "PDF",
    source: "Local",
  },
  {
    title: "Rendements Maïs 2015–2023",
    description: "Statistiques de rendement par zone agroécologique.",
    fileUrl: "/data/rendements_mais.zip",
    fileType: "ZIP",
    source: "Local",
  },
];

type ApiDataItem = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export default function DownloadDataSection() {
  const [apiData, setApiData] = useState<ApiDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchExternalData() {
      try {
        // Exemple d'appel API (FAKE)
        const res = await fetch(
          "https://www.fao.org/sustainable-development-goals-data-portal/data/en"
        ); 
        const json = await res.json();
        setApiData(json);
      } catch (error) {
        console.error("Erreur chargement API", error);
      } finally {
        setLoading(false);
      }
    }
    fetchExternalData();
  }, []);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {/* TITRE */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Données Agricoles à Télécharger
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Accédez à des jeux de données locaux et externes pour formation,
            analyses terrain et prise de décision.
          </p>
        </div>

        {/* DONNÉES LOCALES */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-700">
            Données disponibles localement
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {localData.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                    <span className="inline-block mt-3 text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
                      {item.fileType}
                    </span>
                  </div>
                  <a
                    href={item.fileUrl}
                    download
                    className="ml-4 text-blue-600 hover:text-blue-800"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DONNÉES API */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-700">
            Données externes disponibles
          </h3>

          {loading ? (
            <p className="text-center text-gray-500">Chargement...</p>
          ) : apiData.length === 0 ? (
            <p className="text-center text-gray-500">
              Aucune donnée externe trouvée
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {apiData.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      className="ml-4 text-blue-600 hover:text-blue-800"
                      rel="noopener noreferrer"
                    >
                      <Download size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
