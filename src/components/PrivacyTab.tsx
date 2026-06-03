import { Info, ShieldAlert, ArrowUpRight, Shield, Lock, Eye, FileText, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function PrivacyTab() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sidebarLinks = [
    { id: 'intro', label: '1. Introduction' },
    { id: 'collecte', label: '2. Collecte des données GBP' },
    { id: 'utilisation', label: '3. Utilisation des informations' },
    { id: 'stockage', label: '4. Stockage & Sécurité' },
    { id: 'droits', label: '5. Vos droits (RGPD)' },
    { id: 'revocation', label: '6. Révocation de l\'accès', highlight: true }
  ];

  const rights = [
    { icon: Eye, title: "Droit d'accès", desc: "Consulter les données que nous détenons." },
    { icon: FileText, title: "Droit de rectification", desc: "Corriger toute erreur factuelle." },
    { icon: Trash2, title: "Droit à l'oubli", desc: "Suppression définitive de vos données de nos serveurs." },
    { icon: ArrowUpRight, title: "Droit à la portabilité", desc: "Export de vos rapports au format JSON/CSV." }
  ];

  return (
    <div className="pb-16">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-[#0F172A] py-16 sm:py-20 lg:py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-slate-400 mb-6 sm:mb-8"
          >
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Accueil</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">Politique de Confidentialité</span>
          </motion.div>
          
          <motion.div
            className="max-w-3xl space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full px-4 py-1.5 text-xs font-semibold">
              <Shield className="h-3.5 w-3.5" />
              Conformité RGPD
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Politique de Confidentialité
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Dernière mise à jour : 24 Mai 2024. Cette politique détaille comment Business Booster interagit avec vos données Google Business Profile pour assurer une conformité totale et une sécurité maximale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* Sidebar Menu - hidden on mobile, shown on lg */}
          <motion.div
            className="hidden lg:block lg:col-span-1 sticky top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-5">
                Sommaire
              </h3>
              <ul className="space-y-1">
                {sidebarLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        link.highlight
                          ? 'text-blue-600 hover:bg-blue-50'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mobile Horizontal Table of Contents */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {sidebarLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`whitespace-nowrap px-3 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                    link.highlight
                      ? 'bg-blue-50 text-blue-600 border-blue-200'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-200 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Policy Content */}
          <div className="lg:col-span-3 space-y-14 sm:space-y-16">
            
            {/* 1. Introduction */}
            <motion.div
              id="intro"
              className="space-y-4 scroll-mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pb-3 border-b border-slate-200">
                1. Introduction
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chez Business Booster, nous plaçons la transparence au cœur de notre infrastructure. Cette Politique de Confidentialité régit l'accès, la collecte et l'utilisation des données via les APIs de Google (Google Business Profile) par notre plateforme. Notre objectif est de fournir des outils d'optimisation locale tout en garantissant l'intégrité de vos actifs numériques.
              </p>
            </motion.div>

            {/* 2. Collecte */}
            <motion.div
              id="collecte"
              className="space-y-6 scroll-mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pb-3 border-b border-slate-200">
                2. Collecte des données (Google Business Profile)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Business Booster demande exclusivement l'accès aux données nécessaires au fonctionnement de l'application via les protocoles OAuth2 de Google. Les types de données collectées incluent :
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Informations du Profil</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Nom de l'établissement, adresse, horaires d'ouverture et catégories de services.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="h-9 w-9 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <Eye className="h-4 w-4 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Données d'Engagement</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Statistiques de clics, appels, demandes d'itinéraire et avis clients.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-4 sm:p-5 flex gap-3 rounded-xl">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Important :</strong> Nous ne collectons aucune information personnelle sensible (santé, origine, religion) non liée à la gestion de votre fiche établissement.
                </p>
              </div>
            </motion.div>

            {/* 3. Utilisation */}
            <motion.div
              id="utilisation"
              className="space-y-4 scroll-mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pb-3 border-b border-slate-200">
                3. Utilisation des informations
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Les données GBP sont utilisées strictement pour :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Générer des rapports de performance consolidés pour vos établissements.",
                  "Automatiser la mise à jour des informations de contact sur Google Maps.",
                  "Optimiser votre référencement local grâce à l'analyse sémantique des avis.",
                  "Identifier des opportunités de croissance basées sur les tendances locales."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-600 text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. Stockage */}
            <motion.div
              id="stockage"
              className="space-y-6 scroll-mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pb-3 border-b border-slate-200">
                4. Stockage & Sécurité
              </h2>
              <div className="bg-[#0F172A] rounded-2xl p-5 sm:p-6 font-mono text-[10px] sm:text-[11px] text-emerald-400 border border-slate-700/50 overflow-x-auto">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-3 text-[10px] text-slate-500">security_config.json</span>
                </div>
<pre className="text-emerald-400/90">{`# Infrastructure de sécurité Business Booster
encryption_method: "AES-256-GCM"
auth_type: "OAuth2.0 / Server-side tokens"
storage_region: "EU-West-1 (France)"
access_control: "Strict Least Privilege Principle"`}</pre>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Toutes les données sont stockées sur des serveurs sécurisés en France. Les jetons d'accès (Tokens) Google sont chiffrés au repos et ne sont jamais exposés côté client. Nous effectuons des audits de sécurité mensuels pour prévenir toute vulnérabilité.
              </p>
            </motion.div>

            {/* 5. Vos droits */}
            <motion.div
              id="droits"
              className="space-y-6 scroll-mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pb-3 border-b border-slate-200">
                5. Vos droits (RGPD)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données :
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rights.map((right, i) => {
                  const Icon = right.icon;
                  return (
                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                      <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-slate-700" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">{right.title}</h4>
                      <p className="text-xs text-slate-500">{right.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* 6. Révocation */}
            <motion.div
              id="revocation"
              className="scroll-mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 opacity-5">
                  <ShieldAlert className="h-48 w-48 text-red-500" />
                </div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="h-10 w-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <ShieldAlert className="h-5 w-5 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-red-900">
                    6. Révocation de l'accès
                  </h2>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed relative z-10">
                  Vous pouvez révoquer l'accès de Business Booster à vos données Google à tout moment. Cette action entraîne l'arrêt immédiat de toutes les synchronisations et la suppression automatique de nos jetons d'accès dans un délai de 24 heures.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                  <a 
                    href="https://myaccount.google.com/permissions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-5 py-3 text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    Gestionnaire Google OAuth
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <button className="bg-white border border-red-200 hover:bg-red-50 text-red-700 rounded-xl px-5 py-3 text-sm font-semibold transition-colors cursor-pointer">
                    Demander la suppression totale
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Engagement de Sécurité Banner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-8">
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl py-16 sm:py-20 flex items-center justify-center text-center px-6 sm:px-8 bg-[#0F172A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl space-y-4">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 mx-auto mb-2">
              <Lock className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Engagement de Sécurité
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nous ne vendons jamais vos données à des tiers. Business Booster est conçu pour servir votre entreprise, pas pour exploiter vos informations.
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
