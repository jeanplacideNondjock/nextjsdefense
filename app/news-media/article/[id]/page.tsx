// app/news-media/article/[id]/page.tsx
"use client";

import { useParams, useRouter } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  MessageCircle,
  Bookmark,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';

// Types pour TypeScript
interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface RelatedArticle {
  id: string;
  title: string;
  date: string;
}

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: Author;
  image: string;
  tags: string[];
  excerpt: string;
  content: string;
  stats: Stat[];
  relatedArticles: RelatedArticle[];
}

// Map pour les icônes
const iconMap: Record<string, React.ReactNode> = {
  'Globe': <Globe className="w-6 h-6" />,
  'User': <User className="w-6 h-6" />,
  'Tag': <Tag className="w-6 h-6" />,
  'MessageCircle': <MessageCircle className="w-6 h-6" />,
  'Calendar': <Calendar className="w-4 h-4" />,
  'Clock': <Clock className="w-4 h-4" />,
};

// Données de secours pour développement
const fallbackArticles: Record<string, Article> = {
  '1': {
    id: '1',
    title: "Vivent Lance un Nouveau Programme de Microcrédits en Afrique",
    category: "Impact Social",
    date: "15 Mars 2024",
    readTime: "5 min",
    author: {
      name: "Marie Dubois",
      role: "Directrice des Programmes Afrique",
      avatar: "MD"
    },
    image: "bg-gradient-to-r from-green-500 to-emerald-600",
    tags: ["Finance Rurale", "Afrique", "Microcrédits", "Innovation", "Développement"],
    excerpt: "Notre nouvelle initiative de financement rural atteint 10,000 agriculteurs dans 5 pays d'Afrique de l'Ouest, avec un impact transformationnel sur les communautés locales.",
    content: `
      <h2>Une Révolution du Financement Rural</h2>
      <p>Vivent annonce aujourd'hui le lancement de son programme phare de microcrédits agricoles, dédié spécifiquement aux petits exploitants des zones rurales en Afrique de l'Ouest. Ce programme innovant vise à combler le fossé financier qui empêche des millions d'agriculteurs d'accéder aux ressources nécessaires pour développer leurs activités.</p>
      
      <h2>Impact Mesurable</h2>
      <p>En seulement six mois de phase pilote, le programme a déjà permis :</p>
      <ul>
        <li>🚜 Financement de 2,500 exploitations agricoles</li>
        <li>📈 Augmentation moyenne des revenus de 45%</li>
        <li>🌱 Conversion de 1,200 hectares à l'agriculture durable</li>
        <li>👩‍🌾 65% des bénéficiaires sont des femmes</li>
      </ul>
      
      <h2>Innovation Technologique</h2>
      <p>Notre plateforme digitale permet aux agriculteurs de :</p>
      <ul>
        <li>📱 Soumettre des demandes de crédit via mobile</li>
        <li>📊 Suivre leur progression en temps réel</li>
        <li>🤝 Accéder à des formations en ligne</li>
        <li>🌍 Se connecter à des marchés internationaux</li>
      </ul>
      
      <h2>Témoignage Fort</h2>
      <p>"Grâce au microcrédit de Vivent, j'ai pu acheter des semences améliorées et un système d'irrigation goutte-à-goutte. Ma production a triplé et je peux maintenant envoyer mes enfants à l'école." - <strong>Amina Diop, Agricultrice au Sénégal</strong></p>
      
      <h2>Perspectives d'Avenir</h2>
      <p>D'ici 2025, nous visons à :</p>
      <ul>
        <li>Étendre le programme à 10 pays supplémentaires</li>
        <li>Atteindre 100,000 bénéficiaires directs</li>
        <li>Lever 50 millions d'euros d'investissement</li>
        <li>Créer 5,000 emplois verts</li>
      </ul>
    `,
    stats: [
      { label: "Pays concernés", value: "5", icon: "Globe" },
      { label: "Bénéficiaires", value: "10,000+", icon: "User" },
      { label: "Financement total", value: "€5M", icon: "Tag" },
      { label: "Taux de réussite", value: "92%", icon: "MessageCircle" }
    ],
    relatedArticles: [
      { id: '2', title: "Notre Partenariat avec la Banque Mondiale", date: "10 Mars 2024" },
      { id: '3', title: "L'Innovation Fintech au Service du Rural", date: "28 Février 2024" },
      { id: '4', title: "Femmes et Entrepreneuriat Rural", date: "20 Février 2024" }
    ]
  },
  '2': {
    id: '2',
    title: "Partenariat avec l'UE pour le Développement Durable",
    category: "Partenariats",
    date: "10 Mars 2024",
    readTime: "4 min",
    author: {
      name: "Jean Martin",
      role: "Directeur des Partenariats Stratégiques",
      avatar: "JM"
    },
    image: "bg-gradient-to-r from-blue-500 to-cyan-600",
    tags: ["UE", "Développement Durable", "Partenariat", "Écologie"],
    excerpt: "Vivent annonce un partenariat stratégique avec l'Union Européenne pour promouvoir le développement durable en Afrique.",
    content: "Contenu de l'article 2...",
    stats: [
      { label: "Pays concernés", value: "27", icon: "Globe" },
      { label: "Budget", value: "€20M", icon: "Tag" }
    ],
    relatedArticles: []
  }
};

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  // Fonction pour charger l'article depuis l'API
  const fetchArticle = useCallback(async (articleId: string) => {
    try {
      setLoading(true);
      setError(null);
      setUseFallback(false);
      
      // 1. D'abord essayer l'API 
      let apiUrl = '';
      
      // Choisissez l'une des options suivantes :
      
      // Option A: Si vous avez votre propre API
      apiUrl = `https://api.vivent.com/articles/${articleId}`;
      
      
      
      // Option C: Si vous utilisez Firebase/Firestore
      // apiUrl = `https://firestore.googleapis.com/v1/projects/votre-projet/databases/(default)/documents/articles/${articleId}`;
      
      console.log(`Tentative de chargement depuis: ${apiUrl}`);
      
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          // Décommentez si vous avez besoin d'authentification
          // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        // Ajoutez un timeout
        signal: AbortSignal.timeout(8000)
      });
      
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
        return;
      }
      
      // 2. Si l'API échoue, essayer l'API de démo
      console.log('API principale échouée, tentative API de démo...');
      const demoResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`, {
        signal: AbortSignal.timeout(5000)
      });
      
      if (demoResponse.ok) {
        const demoData = await demoResponse.json();
        // Transformer les données de démo en format Article
        const transformedArticle: Article = {
          id: demoData.id.toString(),
          title: demoData.title || "Article de démonstration",
          category: "Développement",
          date: new Date().toLocaleDateString('fr-FR'),
          readTime: "3 min",
          author: {
            name: "Auteur Démo",
            role: "Éditeur",
            avatar: "AD"
          },
          image: "bg-gradient-to-r from-gray-500 to-gray-700",
          tags: ["Démo", "API", "Test"],
          excerpt: demoData.body?.substring(0, 150) + "..." || "Contenu de démonstration",
          content: `<p>${demoData.body || "Contenu de l'article de démonstration."}</p>`,
          stats: [
            { label: "Vues", value: "1,234", icon: "User" },
            { label: "Partages", value: "56", icon: "MessageCircle" }
          ],
          relatedArticles: []
        };
        setArticle(transformedArticle);
        return;
      }
      
      // 3. Si tout échoue, utiliser les données de secours
      console.log('API de démo échouée, utilisation des données de secours...');
      if (fallbackArticles[articleId]) {
        setArticle(fallbackArticles[articleId]);
        setUseFallback(true);
      } else {
        throw new Error('Article non trouvé');
      }
      
    } catch (err: any) {
      console.error('Erreur de chargement:', err);
      
      if (err.name === 'TimeoutError') {
        setError('Timeout: Le serveur met trop de temps à répondre');
      } else if (err.name === 'AbortError') {
        setError('Requête annulée');
      } else if (fallbackArticles[articleId as string]) {
        // Utiliser les données de secours en cas d'erreur
        setArticle(fallbackArticles[articleId as string]);
        setUseFallback(true);
      } else {
        setError(err.message || 'Erreur lors du chargement de l\'article');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.id) {
      const articleId = params.id as string;
      fetchArticle(articleId);
    }
  }, [params.id, fetchArticle]);

  const shareArticle = (platform: string) => {
    if (!article) return;
    
    const url = window.location.href;
    const title = article.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  // État de chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de l`article...</p>
          <p className="text-sm text-gray-500 mt-2">Cela peut prendre quelques secondes</p>
        </div>
      </div>
    );
  }

  // État d'erreur
  if (error && !article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Erreur de chargement</h2>
            <p className="text-gray-600 mb-6">{error}</p>
          </div>
          <div className="space-y-4">
            <button 
              onClick={() => params.id && fetchArticle(params.id as string)}
              className="block w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
            >
              ↻ Réessayer
            </button>
            <Link 
              href="/news-media" 
              className="block px-4 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition font-medium"
            >
              ← Retour aux actualités
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    router.push('/news-media');
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {useFallback && (
        <div className="bg-yellow-50 border-b border-yellow-200 py-2 px-4 text-center">
          <p className="text-yellow-800 text-sm">
            ⚠️ Affichage des données de démonstration. Configurez votre API pour des données réelles.
          </p>
        </div>
      )}
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Bouton retour */}
        <div className="mb-8">
          <Link 
            href="/news-media" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux actualités
          </Link>
        </div>

        {/* Image hero */}
        <div className={`${article.image} h-64 md:h-80 rounded-2xl mb-8 flex items-center justify-center overflow-hidden`}>
          <div className="text-center text-white px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {article.date}
              </span>
              <span className="flex items-center">
                <User className="w-3 h-3 mr-1" />
                {article.author.name}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>

        {/* Métadonnées */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium">
            {article.category}
          </span>
          
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            {article.readTime} de lecture
          </div>
          
          {article.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats en vedette */}
        {article.stats && article.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 `bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
            {article.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-green-600">
                  {iconMap[stat.icon] || <Globe className="w-6 h-6" />}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Contenu principal */}
        <article className="mb-12">
          {/* Excerpt */}
          <div className="text-xl text-gray-700 mb-8 leading-relaxed border-l-4 border-green-500 pl-6 py-2 bg-green-50">
            {article.excerpt}
          </div>

          {/* Contenu HTML */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Auteur */}
        <div className="border-t border-b border-gray-200 py-8 my-12">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6 shrink-0">
              <span className="text-xl font-bold text-green-600">{article.author.avatar}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{article.author.name}</h3>
              <p className="text-green-600 mb-3">{article.author.role}</p>
              <p className="text-gray-600">
                Expert avec 10+ ans d&apos;expérience dans le développement rural et la finance inclusive.
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Tags :</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Link 
                  key={index}
                  href={`/news-media?tag=${tag.toLowerCase()}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Partage */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Partager cet article</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => shareArticle('facebook')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </button>
            <button
              onClick={() => shareArticle('twitter')}
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </button>
            <button
              onClick={() => shareArticle('linkedin')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </button>
            <button
              onClick={() => shareArticle('copy')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              <LinkIcon className="w-5 h-5" />
              {copied ? 'Copié !' : 'Copier le lien'}
            </button>
          </div>
        </div>

        {/* Articles connexes */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Articles connexes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {article.relatedArticles.map((related) => (
                <Link 
                  key={related.id}
                  href={`/news-media/article/${related.id}`}
                  className="group"
                >
                  <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition">
                    <h4 className="font-bold text-gray-900 group-hover:text-green-700 mb-2 line-clamp-2">
                      {related.title}
                    </h4>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {related.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Newsletter */}
        <div className="mt-16 `bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ne manquez pas nos prochaines actualités</h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières publications directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              S&apos;abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}