import { Lock, ShieldCheck, Globe, Shield, CheckCircle2 } from 'lucide-react';

export default function SecurityTab() {
  return (
    <div className="space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Infrastructure certifiée Google Cloud
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Sécurité & Intégration API Google de classe entreprise
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
              Business Booster utilise les protocoles de sécurité les plus rigoureux pour garantir l'intégrité de vos données lors de l'utilisation des services Google. De l'authentification OAuth 2.0 au chiffrement AES-256, découvrez comment nous protégeons votre infrastructure.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="bg-[#0052CC] hover:bg-blue-700 text-white rounded px-6 py-3 text-sm font-semibold transition-all cursor-pointer shadow-sm">
                Consulter le livre blanc
              </button>
              <button className="bg-white border border-slate-200 hover:bg-slate-50 text-[#0052CC] rounded px-6 py-3 text-sm font-semibold transition-all cursor-pointer">
                Documentation API
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img 
              src="/server_rack_security.png" 
              alt="Serveurs sécurisés Business Booster" 
              className="w-full rounded-2xl shadow-xl object-cover aspect-video"
            />
          </div>

        </div>
      </section>

      {/* Architecture de sécurité */}
      <section className="mx-auto max-w-6xl px-4 space-y-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Architecture de Sécurité
          </h2>
          <div className="h-1 w-12 bg-[#0052CC] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col xl:flex-row gap-6 shadow-sm">
            <div className="space-y-4 flex-1">
              <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052CC]">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Authentification OAuth 2.0</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nous n'accédons jamais à vos identifiants Google. L'accès est géré via des jetons d'accès (Access Tokens) à durée de vie limitée, révocables à tout moment depuis votre console d'administration Google.
              </p>
            </div>
            <div className="flex-1 bg-[#1E2329] rounded-xl p-4 font-mono text-[10px] text-slate-300 border border-slate-800 shadow-inner flex items-center">
<pre>
{`"client_id": "auth.booster.api",
"client_id": "tb-entreprise-12",
"scope": "https://www.googleapis.com/auth/
 business.manage", "offline",
"prompt": "consent"`}
</pre>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Chiffrement AES-256</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toutes les données au repos sont chiffrées à l'aide de l'algorithme AES-256-GCM, le standard industriel recommandé par l'ANSSI et le NIST.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[11px] font-bold text-emerald-600 bg-emerald-50 w-fit px-3 py-1.5 rounded-lg border border-emerald-100">
              <CheckCircle2 className="h-3.5 w-3.5" /> Conformité FIPS 140-2
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="h-10 w-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Souveraineté des Données</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hébergement exclusivement en Europe (Région europe-west3). Respect strict du RGPD et des clauses contractuelles types de Google Cloud.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-xl flex items-center justify-center text-[#0052CC]">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Exigences de Production Google</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0052CC] mt-0.5" />
                <span className="text-[11px] text-slate-600 font-medium">Validation de la marque et du domaine effectuée.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0052CC] mt-0.5" />
                <span className="text-[11px] text-slate-600 font-medium">Limitation stricte des quotas API.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0052CC] mt-0.5" />
                <span className="text-[11px] text-slate-600 font-medium">Revue de sécurité annuelle (CASA Tier 2).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0052CC] mt-0.5" />
                <span className="text-[11px] text-slate-600 font-medium">Monitoring en temps réel via Google Cloud Operations.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Scopes API */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="bg-[#1E2329] rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-2xl space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Transparence des Scopes API
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Le principe du moindre privilège est au cœur de notre intégration. Nous ne demandons que les permissions strictement nécessaires au fonctionnement du service Business Booster.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-6 border-b border-slate-800">
              <div className="flex-1 space-y-1">
                <code className="text-[#0052CC] font-mono text-[11px] bg-blue-950 px-2 py-1 rounded">.../auth/business.manage</code>
                <div className="text-white text-sm font-bold pt-2">Gestion de Profil d'Entreprise</div>
              </div>
              <div className="flex-1 text-xs text-slate-400 leading-relaxed">
                Nécessaire pour synchroniser vos informations locales, répondre aux avis clients et publier des mises à jour directement depuis l'interface Booster.
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-6 border-b border-slate-800">
              <div className="flex-1 space-y-1">
                <code className="text-[#0052CC] font-mono text-[11px] bg-blue-950 px-2 py-1 rounded">.../auth/adwords</code>
                <div className="text-white text-sm font-bold pt-2">Optimisation Google Ads</div>
              </div>
              <div className="flex-1 text-xs text-slate-400 leading-relaxed">
                Permet l'analyse des performances de vos campagnes et l'ajustement automatique des enchères pour capitaliser votre ROI publicitaire.
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1 space-y-1">
                <code className="text-[#0052CC] font-mono text-[11px] bg-blue-950 px-2 py-1 rounded">.../auth/userinfo.email</code>
                <div className="text-white text-sm font-bold pt-2">Identification Utilisateur</div>
              </div>
              <div className="flex-1 text-xs text-slate-400 leading-relaxed">
                Utilisé uniquement pour créer votre compte sécurisé et vous envoyer les rapports hebdomadaires de performance de votre entreprise.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Table */}
      <section className="mx-auto max-w-5xl px-4 space-y-8 pt-12">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Conformité & Certifications
        </h2>
        
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left bg-white text-sm">
            <thead className="bg-[#F8FAFC] border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-bold text-slate-900">Standard</th>
                <th className="px-6 py-4 font-bold text-slate-900">Statut</th>
                <th className="px-6 py-4 font-bold text-slate-900">Dernier Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 text-slate-600">RGPD (Europe)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Conforme</span>
                </td>
                <td className="px-6 py-4 text-slate-500 text-xs">Janvier 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-600">Google CASA (Tier 2)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Conforme</span>
                </td>
                <td className="px-6 py-4 text-slate-500 text-xs">Mars 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-600">SOC 2 Type II</td>
                <td className="px-6 py-4">
                  <span className="inline-flex bg-blue-100 text-[#0052CC] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">En cours</span>
                </td>
                <td className="px-6 py-4 text-slate-500 text-xs">Prévu T4 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-600">TLS 1.3 Transmission</td>
                <td className="px-6 py-4">
                  <span className="inline-flex bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Actif</span>
                </td>
                <td className="px-6 py-4 text-slate-500 text-xs">Quotidien (Automatisé)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="mx-auto max-w-5xl px-4 pt-16">
        <div className="bg-[#0052CC] rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden shadow-xl">
          {/* Shield watermark background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none transform translate-x-1/4">
            <Shield className="h-64 w-64 md:h-96 md:w-96" />
          </div>
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Prêt pour une croissance sécurisée ?
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-8">
              Rejoignez plus de 500 entreprises qui font confiance à Business Booster pour leur gestion digitale sécurisée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#0052CC] hover:bg-blue-50 rounded px-8 py-3 text-sm font-bold transition-colors cursor-pointer shadow-sm">
                Commencer maintenant
              </button>
              <button className="bg-transparent border border-white hover:bg-white/10 text-white rounded px-8 py-3 text-sm font-bold transition-colors cursor-pointer">
                Parler à un expert
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
