import { CheckCircle2, Smartphone, TrendingUp, ShieldCheck, Zap, Lock, ArrowRight, Store } from 'lucide-react';

interface FonctionnalitesTabProps {
  onStartFreeClick: () => void;
  setCurrentTab: (tab: string) => void;
}

export default function FonctionnalitesTab({ onStartFreeClick, setCurrentTab }: FonctionnalitesTabProps) {
  return (
    <div className="space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 pt-12 md:pt-20 text-center space-y-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Optimisé pour l'Afrique
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Dominez votre marché local avec Business Booster
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Une suite complète d'outils conçus spécifiquement pour les PME africaines. Gérez votre présence en ligne, analysez vos performances et attirez plus de clients via Google Business Profile.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onStartFreeClick}
            className="bg-[#0052CC] hover:bg-blue-700 text-white rounded px-6 py-3 text-sm font-semibold transition-all cursor-pointer shadow-sm"
          >
            Commencer gratuitement
          </button>
          <button
            onClick={() => {
              setCurrentTab('accueil');
              setTimeout(() => {
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white border border-slate-200 hover:bg-slate-50 text-blue-700 rounded px-6 py-3 text-sm font-semibold transition-all cursor-pointer"
          >
            Voir la démo
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-6xl px-4 space-y-6">
        
        {/* Top Row: 2/3 and 1/3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Card */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="space-y-6 flex-1">
              <div className="flex items-center gap-3">
                <Store className="h-6 w-6 text-[#0052CC]" />
                <h3 className="text-xl font-bold text-slate-900">Gestion centralisée Google Business</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mettez à jour vos horaires, publiez des actualités et répondez aux avis en un seul clic. Notre interface simplifiée élimine la complexité de Google Business Profile.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Posts automatisés
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Réponse rapide aux avis
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Mise à jour synchronisée
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full flex justify-end">
              <img 
                src="/dashboard_tablet_mockup.png" 
                alt="Tableau de bord Business Booster" 
                className="w-[120%] max-w-[400px] object-contain drop-shadow-xl -mr-4 md:-mr-12"
              />
            </div>
          </div>

          {/* Blue Card */}
          <div className="bg-[#0052CC] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div className="space-y-6">
              <Smartphone className="h-8 w-8 text-blue-200" />
              <h3 className="text-xl font-bold">Interface Mobile-First</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Conçue pour fonctionner parfaitement même avec une connexion limitée. Gérez votre business directement depuis votre smartphone, où que vous soyez.
              </p>
            </div>
            <div className="mt-8 bg-white/10 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-blue-200" />
              <span className="text-xs font-semibold">Optimisé basse bande passante</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: 1/2 and 1/2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Analytics Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm">
            <TrendingUp className="h-6 w-6 text-red-500" />
            <h3 className="text-xl font-bold text-slate-900">Analyses en temps réel</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Comprenez comment vos clients vous trouvent. Suivez les appels, les demandes d'itinéraire et les visites sur votre site web.
            </p>
            <div className="mt-6 bg-[#F8FAFC] rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-semibold text-slate-700">Appels ce mois-ci</span>
                <span className="text-sm font-bold text-emerald-600">+24%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-[#0052CC] h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

          {/* Verification Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm relative overflow-hidden">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
            <h3 className="text-xl font-bold text-slate-900">Vérification simplifiée</h3>
            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              Nous vous accompagnons pas à pas dans le processus de vérification Google pour garantir que votre entreprise soit visible et crédible immédiatement.
            </p>
            <button 
              onClick={() => setCurrentTab('contact')}
              className="text-[#0052CC] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all relative z-10"
            >
              En savoir plus <ArrowRight className="h-4 w-4" />
            </button>
            <div className="absolute -bottom-8 -right-8 opacity-5">
              <CheckCircle2 className="h-64 w-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Google Section */}
      <section className="bg-[#F8FAFC] py-20 mt-20 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="bg-[#1E2329] rounded-xl p-6 shadow-2xl font-mono text-[11px] text-slate-300 overflow-hidden border border-slate-800">
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            </div>
<pre>
<span className="text-blue-400">const</span> booster = <span className="text-blue-400">new</span> BusinessBooster();

<span className="text-slate-500">// Synchronisation auto avec Google Business API</span>
<span className="text-purple-400">await</span> booster.syncProfile({"{"}
  locationId: <span className="text-emerald-400">"loc_8901"</span>,
  updateHours: <span className="text-emerald-400">"08:00-20:00"</span>,
  priority: <span className="text-emerald-400">"HIGH"</span>
{"}"});

console.<span className="text-blue-300">log</span>(<span className="text-emerald-400">"Profil mis à jour avec succès"</span>);
</pre>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Propulsé par la technologie officielle Google
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Business Booster utilise les API officielles de Google pour garantir une fiabilité totale et une sécurité sans compromis de vos données professionnelles.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#0052CC]" />
                  <h4 className="font-bold text-slate-900 text-sm">API Directe</h4>
                </div>
                <p className="text-[11px] text-slate-500">Vitesse de mise à jour instantanée.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#0052CC]" />
                  <h4 className="font-bold text-slate-900 text-sm">OAuth 2.0</h4>
                </div>
                <p className="text-[11px] text-slate-500">Protocole de sécurité standard.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="mx-auto max-w-5xl px-4 pt-10">
        <div className="bg-[#0052CC] rounded-[2rem] p-12 text-center text-white space-y-8 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#0052CC] opacity-50"></div>
          {/* decorative pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.2 }}></div>
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Prêt à booster votre visibilité ?
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Rejoignez des milliers d'entrepreneurs africains qui font confiance à Business Booster pour digitaliser leur commerce.
            </p>
          </div>
          <button
            onClick={onStartFreeClick}
            className="relative z-10 bg-white text-[#0052CC] hover:bg-blue-50 rounded px-8 py-3.5 text-sm font-bold transition-colors cursor-pointer"
          >
            Créer mon compte maintenant
          </button>
        </div>
      </section>

    </div>
  );
}
