// app/news-media/press/contact/page.tsx
"use client";

import { 
  Mail, 
  Phone, 
  User, 
  Building, 
  Globe, 
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  ArrowLeft,
  Upload,
  FileText,
  Download
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PressContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    media: '',
    position: '',
    country: '',
    subject: '',
    message: '',
    interviewType: '',
    preferredDate: '',
    preferredTime: '',
    attachments: [] as File[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        attachments: Array.from(e.target.files || [])
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        media: '',
        position: '',
        country: '',
        subject: '',
        message: '',
        interviewType: '',
        preferredDate: '',
        preferredTime: '',
        attachments: []
      });
    }, 5000);
  };

  const pressTeam = [
    { name: 'Sophie Martin', role: 'Responsable Presse', email: 's.martin@viventdans.com', phone: '+33 1 23 45 67 88' },
    { name: 'Thomas Dubois', role: 'Chargé de Relations Médias', email: 't.dubois@viventdans.com', phone: '+33 1 23 45 67 89' },
    { name: 'Camille Leroy', role: 'Attachée de Presse Internationale', email: 'c.leroy@viventdans.com', phone: '+33 1 23 45 67 90' }
  ];

  const interviewTypes = [
    'Interview téléphonique',
    'Interview vidéo (Zoom/Teams)',
    'Interview en personne',
    'Échange par email',
    'Conférence de presse'
  ];

  const countries = [
    'France', 'Belgique', 'Suisse', 'Canada', 'États-Unis',
    'Royaume-Uni', 'Allemagne', 'Espagne', 'Italie', 'Autre'
  ];

  const handleDownload = (fileName: string) => {
    console.log(`Téléchargement de: ${fileName}`);
    // Simulation de téléchargement
    alert(`Le fichier "${fileName}" va être téléchargé.`);
  };

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
              <Link href="/contact" className="hover:text-green-600">Contact général</Link>
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
            Retour à l&apos;espace presse
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Presse</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous êtes journaliste ? Utilisez ce formulaire pour toute demande d&apos;information, 
              d&apos;interview ou d&apos;accréditation.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Demande envoyée !</h2>
                <p className="text-gray-600 mb-6">
                  Votre demande a bien été transmise à notre équipe presse. 
                  Nous vous répondrons dans les 24 heures.
                </p>
                <Link 
                  href="/news-media/press" 
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Retour aux communiqués
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations personnelles */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <User className="w-5 h-5 mr-3 text-green-600" />
                    Vos coordonnées
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Média / Organisation *
                      </label>
                      <input
                        type="text"
                        name="media"
                        value={formData.media}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Poste / Fonction *
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pays *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      >
                        <option value="">Sélectionnez un pays</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Sujet de la demande */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-3 text-green-600" />
                    Votre demande
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Objet *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="interview">Demande d&apos;interview</option>
                        <option value="information">Demande d&apos;information</option>
                        <option value="accreditation">Demande d&apos;accréditation</option>
                        <option value="clarification">Demande de clarification</option>
                        <option value="other">Autre demande</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message détaillé *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        placeholder="Décrivez votre demande en détail..."
                      />
                    </div>
                    
                    {formData.subject === 'interview' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type d&apos;interview *
                          </label>
                          <select
                            name="interviewType"
                            value={formData.interviewType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                          >
                            <option value="">Sélectionnez un type</option>
                            {interviewTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Date préférée
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <input
                                type="date"
                                name="preferredDate"
                                value={formData.preferredDate}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Horaire préféré
                            </label>
                            <div className="relative">
                              <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <select
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                              >
                                <option value="">Sélectionnez un horaire</option>
                                <option value="morning">Matin (9h-12h)</option>
                                <option value="afternoon">Après-midi (14h-17h)</option>
                                <option value="evening">Soir (après 18h)</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pièces jointes
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-600 mb-2">
                          Glissez-déposez vos fichiers ici ou
                        </p>
                        <label className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700">
                          Parcourir
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        <p className="text-sm text-gray-500 mt-2">
                          PDF, DOC, JPG jusqu&apos;à 10MB
                        </p>
                        {formData.attachments.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700">
                              {formData.attachments.length} fichier(s) sélectionné(s)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bouton d'envoi */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    * Champs obligatoires. Réponse sous 24h ouvrées.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-600" />
                Contact direct
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-700">Email presse</p>
                  <a href="mailto:presse@viventdans.com" className="text-green-600 hover:text-green-700">
                    presse@viventdans.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Téléphone presse</p>
                  <a href="tel:+33123456789" className="text-green-600 hover:text-green-700">
                    +33 1 23 45 67 89
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Urgences presse</p>
                  <a href="tel:+33123456790" className="text-green-600 hover:text-green-700">
                    +33 1 23 45 67 90
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2 text-green-600" />
                Notre équipe presse
              </h3>
              <div className="space-y-6">
                {pressTeam.map((person, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <p className="font-semibold text-gray-900">{person.name}</p>
                    <p className="text-green-600 text-sm mb-2">{person.role}</p>
                    <div className="space-y-1">
                      <a href={`mailto:${person.email}`} className="flex items-center text-sm text-gray-600 hover:text-green-600">
                        <Mail className="w-4 h-4 mr-2" />
                        {person.email}
                      </a>
                      <a href={`tel:${person.phone}`} className="flex items-center text-sm text-gray-600 hover:text-green-600">
                        <Phone className="w-4 h-4 mr-2" />
                        {person.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-green-600" />
                Documents utiles
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => handleDownload('Kit média complet')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span>Kit média complet</span>
                  <Download className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDownload('Charte graphique')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span>Charte graphique</span>
                  <Download className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDownload('Photos haute résolution')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span>Photos haute résolution</span>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-linear-to-r from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Heures d&apos;ouverture</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Lun - Ven</span>
                  <span>9h - 18h</span>
                </p>
                <p className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h - 16h</span>
                </p>
                <p className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Urgences uniquement</span>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-green-500">
                <p className="text-sm">
                  Pour les demandes urgentes en dehors des heures d&apos;ouverture, 
                  contactez le service d&apos;astreinte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}