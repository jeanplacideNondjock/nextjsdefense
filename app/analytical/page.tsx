

// app/client-access/analytical/page.tsx
"use client";

import { 
  BarChart3, 
  TrendingUp, 
  Filter, 
  Download, 
  Calendar,
  PieChart,
  LineChart,
  Users,
  DollarSign,
  Target,
  Award,
  Clock,
  RefreshCw,
  Eye,
  Share2,
  Maximize2,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function AnalyticalPage() {
  const [timeRange, setTimeRange] = useState('month');
  const [chartType, setChartType] = useState('bar');

  const metrics = [
    { label: "CA Total", value: "€12.8M", change: "+18.2%", trend: "up" },
    { label: "Clients", value: "8,429", change: "+12.4%", trend: "up" },
    { label: "Panier moyen", value: "€142", change: "-3.1%", trend: "down" },
    { label: "Taux de conversion", value: "4.8%", change: "+0.7%", trend: "up" },
    { label: "Retention", value: "78.3%", change: "+2.3%", trend: "up" },
    { label: "Satisfaction", value: "4.6/5", change: "+0.2", trend: "up" }
  ];

  const segments = [
    { name: "Grandes entreprises", value: 42, color: "bg-blue-500" },
    { name: "PME", value: 28, color: "bg-green-500" },
    { name: "Startups", value: 18, color: "bg-purple-500" },
    { name: "Particuliers", value: 12, color: "bg-orange-500" }
  ];

  const trends = [
    { month: "Jan", revenue: 1200000, customers: 3200 },
    { month: "Fév", revenue: 1350000, customers: 3520 },
    { month: "Mar", revenue: 1420000, customers: 3810 },
    { month: "Avr", revenue: 1280000, customers: 3650 },
    { month: "Mai", revenue: 1520000, customers: 4120 },
    { month: "Juin", revenue: 1680000, customers: 4520 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics Avancés</h1>
                <p className="text-gray-600">Analyse approfondie et prédictive</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                Données actualisées à l&apos;instant
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                <RefreshCw className="w-4 h-4" />
                Actualiser
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Contrôles */}
        <div className="mb-6 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-white"
                >
                  <option value="week">7 derniers jours</option>
                  <option value="month">30 derniers jours</option>
                  <option value="quarter">Trimestre</option>
                  <option value="year">Année</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select className="px-3 py-2 border border-gray-300 rounded-lg bg-white">
                  <option>Tous les segments</option>
                  <option>Grandes entreprises</option>
                  <option>PME</option>
                  <option>Startups</option>
                </select>
              </div>
              
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setChartType('bar')}
                  className={`px-3 py-2 ${chartType === 'bar' ? 'bg-gray-100' : 'bg-white'}`}
                >
                  <BarChart3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setChartType('line')}
                  className={`px-3 py-2 ${chartType === 'line' ? 'bg-gray-100' : 'bg-white'}`}
                >
                  <LineChart className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setChartType('pie')}
                  className={`px-3 py-2 ${chartType === 'pie' ? 'bg-gray-100' : 'bg-white'}`}
                >
                  <PieChart className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Exporter
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="w-4 h-4" />
                Partager
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Maximize2 className="w-4 h-4" />
                Plein écran
              </button>
            </div>
          </div>
        </div>

        {/* Métriques */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
              <div className="text-xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Graphique principal */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Évolution du Chiffre d&apos;Affaires</h2>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Tendance positive</span>
              </div>
            </div>
            
            {/* Graphique */}
            <div className="h-64">
              <div className="h-full flex items-end justify-between gap-1">
                {trends.map((trend, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-full relative">
                      <div 
                        className={`w-full mx-auto rounded-t ${
                          chartType === 'bar' 
                            ? 'bg-gradient-to-t from-purple-500 to-purple-300' 
                            : 'bg-purple-500'
                        }`}
                        style={{ height: `${(trend.revenue / 2000000) * 100}%` }}
                      >
                        {chartType === 'line' && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-600 rounded-full"></div>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">{trend.month}</div>
                    <div className="text-xs font-medium">€{(trend.revenue / 1000000).toFixed(1)}M</div>
                  </div>
                ))}
                
                {chartType === 'line' && (
                  <div className="absolute inset-0">
                    {/* Ligne de connexion simulée */}
                    <div className="absolute top-1/4 left-1/6 right-1/6 h-0.5 bg-purple-300"></div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Projection</h3>
                <div className="text-lg font-bold text-gray-900">€18.2M</div>
                <div className="text-sm text-green-600">+12% vs trimestre dernier</div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Objectif annuel</h3>
                <div className="text-lg font-bold text-gray-900">82%</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Segmentation */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Segmentation Client</h2>
              <PieChart className="w-5 h-5 text-purple-600" />
            </div>
            
            <div className="space-y-4">
              {segments.map((segment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${segment.color}`}></div>
                    <span className="text-sm text-gray-700">{segment.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-900">{segment.value}%</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${segment.color} rounded-full`}
                        style={{ width: `${segment.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Insight</h3>
              <p className="text-sm text-gray-600">
                Les grandes entreprises représentent 42% du CA total mais seulement 12% de la base client.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Performance par région */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Performance par Région</h2>
            <div className="space-y-4">
              {[
                { region: "Europe de l'Ouest", revenue: "€4.2M", growth: "+15.2%", trend: "up" },
                { region: "Amérique du Nord", revenue: "€3.8M", growth: "+22.1%", trend: "up" },
                { region: "Asie-Pacifique", revenue: "€2.9M", growth: "+8.4%", trend: "up" },
                { region: "Amérique Latine", revenue: "€1.2M", growth: "-3.2%", trend: "down" },
                { region: "Afrique", revenue: "€0.7M", growth: "+18.9%", trend: "up" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{item.region}</div>
                    <div className="text-sm text-gray-500">{item.revenue}</div>
                  </div>
                  <div className={`text-sm font-medium ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {item.growth}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prévisions */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Prévisions et Prédictions</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">CA prévisionnel (Q3)</span>
                  <span className="text-sm font-bold text-gray-900">€4.8M</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Nouveaux clients</span>
                  <span className="text-sm font-bold text-gray-900">≈ 1,200</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Taux de rétention</span>
                  <span className="text-sm font-bold text-gray-900">81.5%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '81%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm font-bold text-gray-900">Recommandation</div>
                  <div className="text-sm text-gray-600">
                    Focus sur l&apos;Amérique Latine pour redresser la croissance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights détaillés */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Insights Détaillés</h2>
            <Eye className="w-5 h-5 text-gray-500" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-900">Comportement Client</h3>
              </div>
              <p className="text-sm text-gray-600">
                Les sessions moyennes ont augmenté de 24%, indiquant un engagement accru.
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900">Performance Produit</h3>
              </div>
              <p className="text-sm text-gray-600">
                Le produit Premium représente 68% du CA avec une croissance de 32%.
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-gray-900">Tendances Marché</h3>
              </div>
              <p className="text-sm text-gray-600">
                Augmentation de 41% de la demande en solutions durables et éco-responsables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}