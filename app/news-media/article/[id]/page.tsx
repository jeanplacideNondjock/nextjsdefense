// app/news-media/article/[id]/page.tsx
"use client";

import { useParams, useRouter } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
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
import { useEffect, useState, ReactNode, useCallback } from 'react';

// Types pour TypeScript
interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface Stat {
  label: string;
  value: string;
  icon: ReactNode;
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

// Données des articles
const articlesData: Record<string, Article> = {
  '1': {
    id: '1',
    title: "Vivent Dans Lance un Nouveau Programme de Microcrédits en Afrique",
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
      <p>Vivent Dans annonce aujourd'hui le lancement de son programme phare de microcrédits agricoles, dédié spécifiquement aux petits exploitants des zones rurales en Afrique de l'Ouest. Ce programme innovant vise à combler le fossé financier qui empêche des millions d'agriculteurs d'accéder aux ressources nécessaires pour développer leurs activités.</p>
      
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
      <p>"Grâce au microcrédit de Vivent Dans, j'ai pu acheter des semences améliorées et un système d'irrigation goutte-à-goutte. Ma production a triplé et je peux maintenant envoyer mes enfants à l'école." - <strong>Amina Diop, Agricultrice au Sénégal</strong></p>
      
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
      { label: "Pays concernés", value: "5", icon: <Globe className="w-6 h-6" /> },
      { label: "Bénéficiaires", value: "10,000+", icon: <User className="w-6 h-6" /> },
      { label: "Financement total", value: "€5M", icon: <Tag className="w-6 h-6" /> },
      { label: "Taux de réussite", value: "92%", icon: <MessageCircle className="w-6 h-6" /> }
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
    excerpt: "Contenu de l'article 2...",
    content: "Contenu de l'article 2...",
    stats: [
      { label: "Pays concernés", value: "27", icon: <Globe className="w-6 h-6" /> },
      { label: "Budget", value: "€20M", icon: <Tag className="w-6 h-6" /> }
    ],
    relatedArticles: []
  }
};

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Fonction pour charger l'article
  const loadArticle = useCallback((articleId: string) => {
    const foundArticle = articlesData[articleId];
    
    if (foundArticle) {
      // Utiliser setTimeout pour éviter l'appel synchrone
      setTimeout(() => {
        setArticle(foundArticle);
        setLoading(false);
      }, 0);
    } else {
      router.push('/news-media');
    }
  }, [router]);

  useEffect(() => {
    if (params.id) {
      const articleId = params.id as string;
      loadArticle(articleId);
    } else {
      setLoading(!false);
    }
  }, [params.id, loadArticle]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de l'article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h2>
          <Link href="/news-media" className="text-green-600 hover:text-green-700 font-semibold">
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-green-700">
              Vivent Dans
            </Link>
            <div className="space-x-6">
              <Link href="/news-media" className="text-green-600 font-semibold">Actualités</Link>
              <Link href="/company/make-a-difference" className="hover:text-green-600">Impact</Link>
              <Link href="/contact" className="hover:text-green-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Bouton retour */}
        <div className="mb-8">
          <Link 
            href="/news-media" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux actualités
          </Link>
        </div>

        {/* Image hero */}
        <div className={`${article.image} h-64 md:h-80 rounded-2xl mb-8 flex items-center justify-center`}>
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold px-4">{article.title}</h1>
          </div>
        </div>

        {/* Métadonnées */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium">
            {article.category}
          </span>
          
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {article.date}
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            {article.readTime} de lecture
          </div>
          
          <div className="flex items-center text-gray-600">
            <User className="w-4 h-4 mr-2" />
            {article.author.name}
          </div>
        </div>

        {/* Stats en vedette */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
          {article.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2 text-green-600">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

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
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Tags :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Link 
                key={index}
                href={`/news-media?tag=${tag}`}
                className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Partage */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Partager cet article</h3>
          <div className="flex flex-wrap gap-4">
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
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
              <Bookmark className="w-5 h-5" />
              Sauvegarder
            </button>
          </div>
        </div>

        {/* Articles connexes */}
        {article.relatedArticles.length > 0 && (
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
                    <h4 className="font-bold text-gray-900 group-hover:text-green-700 mb-2">
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

        {/* Commentaires */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Commentaires</h3>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                Soyez le premier à commenter cet article.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium">
                Ajouter un commentaire
              </button>
            </div>
          </div>
        </div>

        {/* CTA Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ne manquez pas nos prochaines actualités</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières publications directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
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