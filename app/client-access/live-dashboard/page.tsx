

// app/client-access/live-dashboard/page.tsx
"use client";

import { 
  Activity, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Globe, 
  Clock,
  AlertCircle,
  RefreshCw,
  Download,
  Filter,
  Eye,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LiveDashboardPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('À l\'instant');
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const kpis = [
    {
      title: "Chiffre d'Affaires",
      value: "€2.4M",
      change: "+12.5%",
      isPositive: true,
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Clients Actifs",
      value: "3,248",
      change: "+8.2%",
      isPositive: true,
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Taux d'Engagement",
      value: "78.3%",
      change: "-2.1%",
      isPositive: false,
      icon: <Activity className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Couverture Géographique",
      value: "42",
      change: "+3",
      isPositive: true,
      icon: <Globe className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const alerts = [
    { id: 1, message: "Pic d'activité détecté en Asie", type: 'info', time: '2 min' },
    { id: 2, message: "Maintenance programmée à 02:00", type: 'warning', time: '15 min' },
    { id: 3, message: "Nouveau client majeur", type: 'success', time: '1 h' },
    { id: 4, message: "Latence réseau augmentée", type: 'error', time: '2 h' }
  ];

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdate('À l\'instant');
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(prev => {
        const [time, unit] = prev.split(' ');
        if (unit === 'instant') return 'À l\'instant';
        if (time === 'À') return 'Il y a 1 min';
        const minutes = parseInt(time) + 1;
        return `Il y a ${minutes} min`;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Live Dashboard</h1>
                <p className="text-gray-600">Tableau de bord en temps réel</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                MAJ : {lastUpdate}
              </div>
              <button
                onClick={refreshData}
                disabled={isRefreshing}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
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
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white">
                  <option>Toutes les régions</option>
                  <option>Europe</option>
                  <option>Amérique du Nord</option>
                  <option>Asie</option>
                  <option>Afrique</option>
                </select>
              </div>
              
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                {['today', 'week', 'month', 'quarter'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 text-sm font-medium ${
                      selectedPeriod === period 
                        ? 'bg-green-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {period === 'today' && 'Aujourd\'hui'}
                    {period === 'week' && '7 jours'}
                    {period === 'month' && '30 jours'}
                    {period === 'quarter' && 'Trimestre'}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Eye className="w-4 h-4" />
                Personnaliser
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Exporter
              </button>
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${kpi.color}`}>
                  {kpi.icon}
                </div>
                <div className={`flex items-center text-sm ${kpi.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {kpi.change}
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">{kpi.title}</h3>
              <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
              <div className="mt-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${kpi.isPositive ? 'bg-green-500' : 'bg-red-500'}`}
                    style={{ width: kpi.isPositive ? '75%' : '40%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Graphique principal */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Performance des Ventes</h2>
              <div className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Temps réel</span>
              </div>
            </div>
            
            {/* Graphique simulé */}
            <div className="h-64 flex items-end justify-between gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-linear-to-t from-green-500 to-green-300 rounded-t"
                    style={{ height: `${Math.random() * 80 + 20}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-2">
                    {i}h
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Objectif journalier</div>
                  <div className="text-lg font-bold text-gray-900">€850K</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Réalisé</div>
                  <div className="text-lg font-bold text-green-600">€723K</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Progression</div>
                  <div className="text-lg font-bold text-gray-900">85%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Alertes */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Alertes en Direct
              </h2>
              <span className="text-sm text-gray-500">Dernières 24h</span>
            </div>
            
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <div className={`w-2 h-2 mt-2 rounded-full ${
                    alert.type === 'info' ? 'bg-blue-500' :
                    alert.type === 'warning' ? 'bg-yellow-500' :
                    alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Voir toutes les alertes
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Distribution géographique */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Distribution Géographique
              </h2>
              <PieChart className="w-5 h-5 text-green-600" />
            </div>
            
            <div className="h-64 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 border-8 border-blue-500 rounded-full"></div>
                <div className="absolute inset-0 border-8 border-green-500 rounded-full" style={{ clipPath: 'inset(0 50% 0 0)' }}></div>
                <div className="absolute inset-0 border-8 border-orange-500 rounded-full" style={{ clipPath: 'inset(0 0 50% 0)' }}></div>
                <div className="absolute inset-0 border-8 border-purple-500 rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Europe</span>
              </div>
              <div className="text-sm text-gray-900">42%</div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Amérique</span>
              </div>
              <div className="text-sm text-gray-900">28%</div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Asie</span>
              </div>
              <div className="text-sm text-gray-900">18%</div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Afrique</span>
              </div>
              <div className="text-sm text-gray-900">12%</div>
            </div>
          </div>

          {/* Objectifs */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Objectifs du Trimestre
              </h2>
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            
            <div className="space-y-6">
              {[
                { goal: 'Chiffre d\'affaires', target: '€7.2M', progress: 65, color: 'bg-green-500' },
                { goal: 'Nouveaux clients', target: '500', progress: 42, color: 'bg-blue-500' },
                { goal: 'Taux de satisfaction', target: '95%', progress: 78, color: 'bg-purple-500' },
                { goal: 'Réduction des coûts', target: '15%', progress: 60, color: 'bg-orange-500' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-gray-900">{item.goal}</span>
                      <span className="text-sm text-gray-500 ml-2">→ {item.target}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{item.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Prochaine révision</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  15 Mars 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status du système */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Status du Système</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">API</p>
              <p className="font-bold text-gray-900">Opérationnel</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Base de données</p>
              <p className="font-bold text-gray-900">Normal</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Latence réseau</p>
              <p className="font-bold text-gray-900">86ms</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Uptime</p>
              <p className="font-bold text-gray-900">99.97%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}