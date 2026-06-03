import { Play, Download, Building2, SlidersHorizontal, Clock, CheckCircle2, Check, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface AccueilTabProps {
  onLoginClick: () => void;
  user: { name: string; email: string } | null;
  setCurrentTab: (tab: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const stepData = [
  {
    num: 1,
    title: "Authentification Google",
    desc: "Cliquez sur le bouton de connexion Google. Vous serez redirigé vers l'interface sécurisée de Google pour vous authentifier sans que nous ne voyons jamais votre mot de passe."
  },
  {
    num: 2,
    title: "Autorisation Spécifique",
    desc: "L'écran de consentement Google listera explicitement les permissions demandées pour gérer votre compte Google Business Profile. Vous gardez le choix d'accepter."
  },
  {
    num: 3,
    title: "Gestion Directe",
    desc: "Dès lors autorisé, Business Booster utilise un jeton d'accès sécurisé pour synchroniser vos informations professionnelles. Vous pouvez révoquer cet accès à tout moment."
  }
];

const apiCards = [
  { icon: Building2, title: "Création", desc: "Création ou ajout de votre fiche établissement directement depuis l'application via les API." },
  { icon: SlidersHorizontal, title: "Configuration", desc: "Paramétrage complet des catégories de services et des attributs spécifiques à votre PME." },
  { icon: Clock, title: "Mise à jour", desc: "Modification instantanée de vos horaires d'ouverture, numéro de téléphone et publication d'offres." },
  { icon: CheckCircle2, title: "Suivi", desc: "Surveillance en temps réel de l'état de validation de votre fiche par les services Google." }
];

export default function AccueilTab({ onLoginClick, user, setCurrentTab }: AccueilTabProps) {
  return (
    <div className="space-y-0 pb-16">
      
      {/* Hero section */}
      <section className="relative overflow-hidden">
        {/* Decorative background orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-sky-300/8 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                  Conçu pour l'Afrique
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.1]"
              >
                Propulsez votre commerce local sur{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Google Maps
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-base text-slate-500 leading-relaxed max-w-lg"
              >
                Business Booster est une application mobile / web conçue exclusivement pour les PME africaines. Gérez votre visibilité en ligne et attirez plus de clients grâce à une intégration native et sécurisée.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl px-7 py-3.5 text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  Télécharger l'App
                </button>
                
                <button
                  onClick={onLoginClick}
                  className="bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  S'inscrire avec Google
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="flex items-center gap-6 pt-2 text-xs text-slate-400"
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  <span>API officielle Google</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  <span>100% Sécurisé</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3 -z-10 w-[90%] left-[5%]"></div>
              <img 
                src="/hero_mobile_app_mockup.png" 
                alt="Application Mobile Business Booster" 
                className="w-[85%] rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24" id="demo">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Découvrez l'application en action
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Voyez comment Business Booster simplifie la gestion de votre visibilité locale sur Google Maps.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl shadow-slate-900/30 overflow-hidden aspect-video relative group cursor-pointer flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img 
              src="/demo_video_thumbnail.png" 
              alt="Démonstration Business Booster" 
              className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
            />
            <div className="relative z-10 h-20 w-20 rounded-full bg-white/95 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <Play className="h-8 w-8 ml-1 fill-current" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white text-sm font-semibold text-left">
                Démonstration: Gestion des fiches & Authentification OAuth 2.0
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 space-y-14 text-center py-24">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Comment ça marche
          </h2>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Un processus transparent où vous gardez le contrôle total de vos accès Google.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative pt-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-px border-t-2 border-dashed border-slate-200"></div>

          {stepData.map((step, i) => (
            <motion.div
              key={step.num}
              className="space-y-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-600/25 relative z-10">
                {step.num}
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[260px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* API Usage */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-4 space-y-14 text-center">
          <motion.div
            className="space-y-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Utilisation de l'API Google Business Profile
            </h2>
            <p className="text-sm text-slate-500">
              Nous privilégions une transparence totale sur la manière dont nous interagissons avec vos données professionnelles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {apiCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="bg-white border border-slate-100 p-7 rounded-2xl space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-300">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secure User Flow Section */}
      <section className="bg-[#0F172A] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <motion.div
            className="bg-[#1E293B] rounded-2xl p-6 border border-slate-700/50 font-mono text-[11px] text-emerald-400 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-3 text-[10px] text-slate-500">oauth2_config.json</span>
            </div>
<pre className="text-emerald-400/90">{`// Connexion au Backend OAuth 2.0
{
  "client_id": "business_booster_id",
  "scope": "googleapis.com/auth/business.manage",
  "access_type": "offline",
  "response_type": "code"
}`}</pre>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Flux Utilisateur Sécurisé
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Business Booster utilise le protocole standard OAuth 2.0. Votre mot de passe Google n'est jamais partagé avec nous. Vous accordez l'autorisation d'accès directement sur les serveurs sécurisés de Google.
            </p>
            <ul className="space-y-4">
              {[
                "Authentification directe via Google Accounts",
                <>Révocation d'accès possible à tout moment sur <a href="#" className="underline text-blue-400 hover:text-blue-300">Google Permissions</a></>,
                "Chiffrement en transit et au repos (AES-256)"
              ].map((text, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="mt-0.5 rounded-full bg-emerald-500/20 p-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Privacy Policy summary */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <motion.div
          className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-10">
            Politique de Confidentialité & Mentions Légales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Données collectées & Scopes", desc: <>Nous utilisons exclusivement le scope Google <code className="text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">business.manage</code>. Ceci nous permet de créer et modifier vos fiches avec votre accord explicite. Aucune donnée personnelle n'est lue ou stockée.</> },
              { title: "Usage & Intégrité", desc: "Les informations GBP (noms, adresses, photos) sont utilisées uniquement pour optimiser votre visibilité locale. Nous interdisons formellement la vente de données à des tiers ou le profilage publicitaire." },
              { title: "Contrôle & Suppression", desc: <>Vous pouvez supprimer votre compte et toutes les données associées depuis l'application. La révocation de l'accès via la page <a href="#" className="text-blue-600 hover:underline">Sécurité de Google</a> suspend immédiatement nos accès.</> }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-blue-600 font-bold text-xs tracking-wider uppercase">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-xs font-bold text-slate-900">
                  <th className="py-3.5 pl-4">Catégorie</th>
                  <th className="py-3.5">Description</th>
                  <th className="py-3.5 pr-4">Durée de rétention</th>
                </tr>
              </thead>
              <tbody className="text-xs text-slate-600">
                <tr className="border-t border-slate-100">
                  <td className="py-4 pl-4 font-medium text-slate-900">GBP Metadata</td>
                  <td className="py-4">Informations publiques synchronisées (Nom, Adresse, Horaires)</td>
                  <td className="py-4 pr-4">Durée de l'abonnement actif</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="py-4 pl-4 font-medium text-slate-900">OAuth Access Token</td>
                  <td className="py-4">Jeton d'accès chiffré temporaire</td>
                  <td className="py-4 pr-4">Jusqu'à révocation (1h)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="py-4 pl-4 font-medium text-slate-900">OAuth Refresh Token</td>
                  <td className="py-4">Jeton de renouvellement chiffré stocké sur serveur sécurisé</td>
                  <td className="py-4 pr-4">Jusqu'à déconnexion ou révocation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between text-[11px] text-slate-500">
            <span>Pour en savoir plus : lisez notre <button onClick={() => setCurrentTab('privacy')} className="text-blue-600 hover:underline cursor-pointer">Politique de Confidentialité complète</button>.</span>
            <span className="mt-2 md:mt-0">Légal & Support : support@businessbooster.com</span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
