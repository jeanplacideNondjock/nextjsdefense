"use client";

import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactSectionComplete = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    mobile: '',
    country: '',
    workplace: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Fonction de validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email est requis';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Validation des autres champs
    if (!formData.firstName.trim()) newErrors.firstName = 'Prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nom est requis';
    if (!formData.organisation.trim()) newErrors.organisation = 'Organisation est requise';
    if (!formData.country) newErrors.country = 'Pays est requis';
    if (!formData.workplace) newErrors.workplace = 'Environnement de travail est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Valider le formulaire
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage('Veuillez corriger les erreurs dans le formulaire.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Test simple sans EmailJS pour vérifier
      console.log('Form data:', formData);
      
      // Envoi à l'entreprise
      const companyTemplateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        organisation: formData.organisation,
        mobile: formData.mobile || 'Non fourni',
        country: formData.country,
        workplace: formData.workplace,
        to_email: 'abounidal494@gmail.com',
        date: new Date().toLocaleDateString('fr-FR'),
        time: new Date().toLocaleTimeString('fr-FR')
      };

      console.log('Params envoyés:', companyTemplateParams);

      // D'abord, testez avec un seul envoi
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_t8w118r',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPANY || 'template_21iysjl',
        companyTemplateParams
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage('Merci ! Votre message a été envoyé avec succès.');
        
        // Réinitialiser le formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organisation: '',
          mobile: '',
          country: '',
          workplace: ''
        });
      }
    } catch (error: any) {
      console.error('Erreur détaillée:', error);
      console.error('Erreur status:', error?.status);
      console.error('Erreur text:', error?.text);
      
      // Message d'erreur plus précis
      if (error?.text) {
        setSubmitMessage(`Erreur: ${error.text}`);
      } else if (error?.status === 400) {
        setSubmitMessage('Données invalides envoyées au serveur. Vérifiez votre configuration EmailJS.');
      } else if (error?.status === 0) {
        setSubmitMessage('Erreur réseau ou clé EmailJS incorrecte.');
      } else {
        setSubmitMessage(`Une erreur est survenue: ${error?.message || 'Erreur inconnue'}`);
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Test EmailJS simplifié
  const testEmailJS = async () => {
    try {
      const testParams = {
        from_name: "Test User",
        to_email: "test@example.com",
        message: "Ceci est un test"
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPANY || 'YOUR_TEMPLATE_ID',
        testParams
      );
      
      console.log('Test réussi:', response);
      alert('EmailJS fonctionne ! Status: ' + response.status);
    } catch (error: any) {
      console.error('Test échoué:', error);
      alert('Erreur EmailJS: ' + (error.text || error.message));
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vous souhaitez en savoir plus sur les possibilités ?
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-6">
            Contactez-nous.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                Formulaire de contact
              </h3>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="text-emerald-800 font-medium">{submitMessage}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Prénom */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">
                  First name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre prénom"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Nom */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">
                  Last name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre nom"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">
                  Email address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="abounidal494@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Organisation */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">
                  Organisation name *
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.organisation ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nom de votre organisation"
                />
                {errors.organisation && (
                  <p className="text-red-500 text-sm mt-1">{errors.organisation}</p>
                )}
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">
                  Mobile phone number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              {/* Pays */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Sélectionnez votre pays</option>
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Suisse">Suisse</option>
                  <option value="Canada">Canada</option>
                   <option value="Canada">Cameroun</option>
                  <option value="Autre">Autre</option>
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>

              {/* Environnement */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">
                  Workplace environment *
                </label>
                <select
                  name="workplace"
                  value={formData.workplace}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.workplace ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Veuillez sélectionner</option>
                  <option value="field">Agriculture de plein champ</option>
                  <option value="greenhouse">Serre</option>
                  <option value="indoor">Agriculture indoor</option>
                  <option value="research">Institution de recherche</option>
                  <option value="other">Autre</option>
                </select>
                {errors.workplace && (
                  <p className="text-red-500 text-sm mt-1">{errors.workplace}</p>
                )}
              </div>

              {/* Bouton */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white font-bold py-3 px-8 rounded-md hover:bg-emerald-700 disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'ENVOYER LE MESSAGE'}
                </button>
              </div>
            </form>

            {/* Bouton de test */}
            <div className="mt-8 text-center">
              <button
                onClick={testEmailJS}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Tester la connexion EmailJS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionComplete;