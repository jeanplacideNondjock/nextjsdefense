// app/company/make-a-difference/page.tsx
"use client";

import { Heart, Users, Globe, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function MakeADifferencePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Vivent Dans
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <Link href="/company/make-a-difference" className="text-blue-600 font-semibold">Make a Difference</Link>
            <Link href="/projects" className="hover:text-blue-600">Projets</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Make a Difference
          </h1>
          <p className="text-xl mb-8">
            Notre mission est de créer un impact positif et durable dans le monde
          </p>
          <Link href="/join">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
              Rejoindre la mission
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Valeur 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Heart className="text-red-500" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Empathie</h3>
              <p className="text-gray-600">
                Nous plaçons l`humain au cœur de toutes nos décisions et actions
              </p>
            </div>

            {/* Valeur 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Globe className="text-green-500" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact Durable</h3>
              <p className="text-gray-600">
                Nous créons des solutions qui ont un impact positif et durable
              </p>
            </div>

            {/* Valeur 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Users className="text-blue-500" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Ensemble, nous pouvons accomplir plus et aller plus loin
              </p>
            </div>

            {/* Valeur 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Target className="text-orange-500" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Nous repoussons les limites pour trouver des solutions créatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Initiatives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Initiatives</h2>
          
          <div className="space-y-8">
            {/* Initiative 1 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Éducation Numérique</h3>
                <span className="text-lg font-bold text-blue-600">75%</span>
              </div>
              <p className="text-gray-600 mb-4">
                Former 10,000 jeunes aux compétences numériques essentielles
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Initiative 2 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Environnement</h3>
                <span className="text-lg font-bold text-green-600">45%</span>
              </div>
              <p className="text-gray-600 mb-4">
                Planter 1 million d`arbres d`ici 2025 pour lutter contre le changement climatique
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            {/* Initiative 3 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Inclusion Digitale</h3>
                <span className="text-lg font-bold text-purple-600">60%</span>
              </div>
              <p className="text-gray-600 mb-4">
                Fournir un accès internet gratuit dans les zones rurales défavorisées
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-500 h-3 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="bg-linear-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Pays</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Bénévoles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-100">Partenaires</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-blue-100">Personnes impactées</div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600">MD</span>
                </div>
                <div>
                  <h4 className="font-bold">Marie Dubois</h4>
                  <p className="text-gray-500 text-sm">Bénévole</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                Une expérience qui a changé ma vie et ma vision du monde.
              </p>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-green-600">JM</span>
                </div>
                <div>
                  <h4 className="font-bold">Jean Martin</h4>
                  <p className="text-gray-500 text-sm">Partenaire</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                Leur approche innovante transforme véritablement les communautés.
              </p>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-purple-600">SC</span>
                </div>
                <div>
                  <h4 className="font-bold">Sophie Chen</h4>
                  <p className="text-gray-500 text-sm">Bénéficiaire</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                Grâce à Vivent Dans, j`ai pu réaliser mon projet d`entreprise sociale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award className="mx-auto mb-6 text-yellow-500" size={64} />
          <h2 className="text-3xl font-bold mb-6">Prêt à faire la différence ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez notre communauté et participez à créer un avenir meilleur
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                <CheckCircle size={20} />
                Devenir Bénévole
              </button>
            </Link>
            <Link href="/partnerships">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Partenariat Entreprise
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Vivent Dans</h3>
              <p className="text-gray-400">
                Faire la différence, un pas à la fois
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><Link href="/projects" className="text-gray-400 hover:text-white">Nos Projets</Link></li>
                <li><Link href="/volunteer" className="text-gray-400 hover:text-white">Devenir Bénévole</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">À Propos</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-gray-400">contact@viventdans.com</p>
              <p className="text-gray-400">+33 1 23 45 67 89</p>
              <p className="text-gray-400">Paris, France</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Vivent Dans Company. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}