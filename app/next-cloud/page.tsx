


// app/client-access/next-cloud/page.tsx
"use client";

import { 
  Cloud, 
  Upload, 
  Folder, 
  File, 
  Search, 
  Users,
  Share2,
  Star,
  Clock,
  Download,
  Trash2,
  MoreVertical,
  Grid,
  List,
  Plus,
  Lock,
  Globe,
  HardDrive,
  RefreshCw
} from 'lucide-react';
import { useState } from 'react';

export default function NextCloudPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const files = [
    { id: '1', name: 'Rapport_Financier_Q1.pdf', type: 'pdf', size: '4.2 MB', modified: 'Aujourd\'hui, 10:30', shared: true, starred: true },
    { id: '2', name: 'Presentation_Client.pptx', type: 'ppt', size: '12.8 MB', modified: 'Hier, 14:22', shared: true, starred: false },
    { id: '3', name: 'Contrat_Acme.docx', type: 'doc', size: '2.1 MB', modified: '15 Mars', shared: false, starred: true },
    { id: '4', name: 'Design_System.fig', type: 'fig', size: '8.5 MB', modified: '14 Mars', shared: true, starred: false },
    { id: '5', name: 'Archive_2023.zip', type: 'zip', size: '256 MB', modified: '10 Mars', shared: false, starred: false },
    { id: '6', name: 'Screenshot.png', type: 'image', size: '3.4 MB', modified: '8 Mars', shared: true, starred: true },
    { id: '7', name: 'Database_Backup.sql', type: 'sql', size: '128 MB', modified: '5 Mars', shared: false, starred: false },
    { id: '8', name: 'Video_Tutorial.mp4', type: 'video', size: '1.2 GB', modified: '1 Mars', shared: true, starred: false }
  ];

  const folders = [
    { id: '1', name: 'Documents Clients', files: 24, size: '2.4 GB', shared: true },
    { id: '2', name: 'Design & Assets', files: 156, size: '8.2 GB', shared: true },
    { id: '3', name: 'Développement', files: 89, size: '1.8 GB', shared: false },
    { id: '4', name: 'Administratif', files: 42, size: '850 MB', shared: false }
  ];

  const storage = {
    used: 45.2,
    total: 100,
    unit: 'GB'
  };

  const recentActivity = [
    { user: 'Marie Dubois', action: 'a modifié', file: 'Budget_2024.xlsx', time: '10 min' },
    { user: 'Jean Martin', action: 'a partagé', file: 'Dossier Projet Alpha', time: '1 h' },
    { user: 'Sophie Chen', action: 'a téléchargé', file: 'Guide_Utilisateur.pdf', time: '3 h' },
    { user: 'Thomas Bernard', action: 'a créé', file: 'Nouveau dossier', time: '5 h' }
  ];

  const handleFileSelect = (id: string) => {
    setSelectedFiles(prev => 
      prev.includes(id) 
        ? prev.filter(fileId => fileId !== id)
        : [...prev, id]
    );
  };

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      alert('Téléchargement simulé terminé');
    }, 2000);
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf': return '📄';
      case 'ppt': return '📊';
      case 'doc': return '📝';
      case 'fig': return '🎨';
      case 'zip': return '📦';
      case 'image': return '🖼️';
      case 'sql': return '🗃️';
      case 'video': return '🎥';
      default: return '📎';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Next Cloud</h1>
                <p className="text-gray-600">Stockage et collaboration cloud</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <HardDrive className="w-4 h-4 mr-2" />
                {storage.used}/{storage.total} {storage.unit} utilisés
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Nouveau
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Barre d'outils */}
        <div className="mb-6 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher fichiers, dossiers..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  <Upload className={`w-4 h-4 ${uploading ? 'animate-bounce' : ''}`} />
                  {uploading ? 'Téléchargement...' : 'Téléverser'}
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stockage */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Stockage</h3>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${(storage.used / storage.total) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>{storage.used} {storage.unit}</span>
                  <span>{storage.total} {storage.unit}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Documents</span>
                  <span className="text-sm text-gray-500">12.4 GB</span>
                </button>
                <button className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Images</span>
                  <span className="text-sm text-gray-500">8.2 GB</span>
                </button>
                <button className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Vidéos</span>
                  <span className="text-sm text-gray-500">22.1 GB</span>
                </button>
              </div>
            </div>

            {/* Partage rapide */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Partage rapide
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Équipe Projet</div>
                    <div className="text-sm text-gray-600">8 membres</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Globe className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Public</div>
                    <div className="text-sm text-gray-600">Accès ouvert</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Lock className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="font-medium text-gray-900">Privé</div>
                    <div className="text-sm text-gray-600">Accès restreint</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activité récente */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Activité récente</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sm font-medium">{
                        activity.user.split(' ').map(n => n[0]).join('')
                      }</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-medium">{activity.user}</span>
                        {' '}{activity.action}{' '}
                        <span className="text-blue-600">{activity.file}</span>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Il y a {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3 space-y-6">
            {/* Dossiers */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Dossiers</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {folders.map(folder => (
                  <div key={folder.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Folder className="w-6 h-6 text-blue-600" />
                      </div>
                      {folder.shared && <Share2 className="w-4 h-4 text-gray-400" />}
                    </div>
                    <div className="font-medium text-gray-900 mb-1">{folder.name}</div>
                    <div className="text-sm text-gray-500">
                      {folder.files} fichiers • {folder.size}
                    </div>
                  </div>
                ))}
                
                <button className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition">
                  <Plus className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">Nouveau dossier</span>
                </button>
              </div>
            </div>

            {/* Fichiers */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">Fichiers récents</h2>
                <div className="flex items-center gap-2">
                  {selectedFiles.length > 0 && (
                    <>
                      <button className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                        Supprimer
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Download className="w-4 h-4" />
                        Télécharger
                      </button>
                    </>
                  )}
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {files.map(file => (
                    <div
                      key={file.id}
                      onClick={() => handleFileSelect(file.id)}
                      className={`border rounded-lg p-4 cursor-pointer transition ${
                        selectedFiles.includes(file.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-2xl">{getFileIcon(file.type)}</div>
                        <div className="flex items-center gap-1">
                          {file.starred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                          {file.shared && <Share2 className="w-4 h-4 text-gray-400" />}
                        </div>
                      </div>
                      <div className="font-medium text-gray-900 truncate mb-1">{file.name}</div>
                      <div className="text-sm text-gray-500">{file.size}</div>
                      <div className="text-xs text-gray-400 mt-2">{file.modified}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">
                          <input type="checkbox" />
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Nom</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Taille</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Modifié</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {files.map(file => (
                        <tr 
                          key={file.id}
                          onClick={() => handleFileSelect(file.id)}
                          className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                            selectedFiles.includes(file.id) ? 'bg-blue-50' : ''
                          }`}
                        >
                          <td className="py-3 px-4">
                            <input 
                              type="checkbox" 
                              checked={selectedFiles.includes(file.id)}
                              onChange={() => handleFileSelect(file.id)}
                            />
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{getFileIcon(file.type)}</span>
                              <div>
                                <div className="font-medium text-gray-900">{file.name}</div>
                                <div className="flex items-center gap-2">
                                  {file.shared && (
                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                      Partagé
                                    </span>
                                  )}
                                  {file.starred && (
                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{file.size}</td>
                          <td className="py-3 px-4 text-gray-600">{file.modified}</td>
                          <td className="py-3 px-4">
                            <button className="p-1 hover:bg-gray-200 rounded">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Actions rapides */}
            <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Actions rapides</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                  <Share2 className="w-6 h-6 mb-2" />
                  <span className="text-sm">Partager</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                  <Download className="w-6 h-6 mb-2" />
                  <span className="text-sm">Télécharger</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                  <Star className="w-6 h-6 mb-2" />
                  <span className="text-sm">Favoris</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                  <Lock className="w-6 h-6 mb-2" />
                  <span className="text-sm">Sécuriser</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}