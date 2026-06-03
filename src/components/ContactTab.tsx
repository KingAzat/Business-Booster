import { Mail, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ContactTab() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Quels documents sont nécessaires pour la vérification ?",
      a: "Un extrait du registre du commerce (RCCM) ou une facture d'électricité au nom de l'entreprise datant de moins de 3 mois."
    },
    {
      q: "Combien de temps prend le processus de validation ?",
      a: "La vérification prend généralement entre 24 et 48 heures ouvrées après la soumission de vos documents."
    },
    {
      q: "Pourquoi mon document a-t-il été refusé ?",
      a: "Les refus sont souvent dus à des documents illisibles, expirés ou dont le nom ne correspond pas exactement au nom de l'établissement."
    },
    {
      q: "Comment synchroniser mon compte avec Google Business Profile ?",
      a: "Une fois votre compte validé, utilisez le bouton 'S'inscrire avec Google' pour lier votre profil de manière sécurisée via OAuth 2.0."
    }
  ];

  return (
    <div className="space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-[#0052CC] px-3 py-1 text-xs font-semibold text-white">
              Support Client
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Comment pouvons-nous vous aider ?
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Notre équipe technique est prête à vous accompagner dans l'intégration de vos solutions Google et l'optimisation de vos processus d'affaires.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img 
              src="/customer_support_office.png" 
              alt="Bureaux Business Booster" 
              className="w-full rounded-2xl shadow-xl object-cover aspect-video"
            />
          </div>

        </div>
      </section>

      {/* Form and Contact Info */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-8">Envoyez-nous un message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="Jean Dupont" 
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">Email professionnel</label>
                  <input 
                    type="email" 
                    placeholder="jean@entreprise.sn" 
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Sujet</label>
                <select className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] bg-white text-slate-700">
                  <option>Aide à la vérification</option>
                  <option>Support Technique</option>
                  <option>Facturation</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Décrivez votre besoin en détail..." 
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-[#0052CC] hover:bg-blue-700 text-white rounded px-6 py-2.5 text-sm font-semibold transition-colors shadow-sm"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-[#0052CC] rounded-2xl p-8 text-white shadow-lg flex flex-col justify-between">
              <div>
                <Mail className="h-6 w-6 text-blue-200 mb-4" />
                <h3 className="text-lg font-bold mb-2">Support Email</h3>
                <p className="text-xs text-blue-100 leading-relaxed mb-6">
                  Réponse garantie sous 24h ouvrées.
                </p>
              </div>
              <a href="mailto:support@businessbooster.com" className="text-sm font-medium underline underline-offset-4 hover:text-blue-100">
                support@businessbooster.com
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <MapPin className="h-6 w-6 text-[#0052CC] mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Siège Social</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Immeuble Kébé, 7ème étage<br/>
                Avenue Cheikh Anta Diop<br/>
                Dakar, Sénégal
              </p>
              <div className="h-32 bg-slate-200 rounded-xl w-full flex items-center justify-center overflow-hidden">
                {/* Fake map */}
                <div className="w-full h-full relative flex items-center justify-center bg-[#8b8e94]">
                  <div className="w-16 h-16 bg-[#b1b4b9] rounded-full absolute -top-4 -left-4 opacity-50"></div>
                  <div className="w-24 h-24 bg-[#b1b4b9] rounded-full absolute -bottom-8 -right-8 opacity-50"></div>
                  <div className="text-white text-4xl mt-[-10px] drop-shadow-md">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            FAQ : Aide à la vérification
          </h2>
          <p className="text-sm text-slate-600">
            Tout ce qu'il faut savoir pour valider votre compte Business Booster rapidement.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 text-[#0052CC] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
