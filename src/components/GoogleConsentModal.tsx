import { Shield, Key, ArrowRight, Check, X, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface GoogleConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsentApproved: (selectedMerchant: {
    name: string;
    category: string;
    phone: string;
    address: string;
    hours: string;
    description: string;
  }) => void;
}

const MERCHANT_PRESETS = [
  {
    name: "Boulangerie Patisserie du Plateau",
    category: "Boulangerie / Pâtisserie",
    phone: "+221 33 821 44 22",
    address: "24 Rue Carnot, Dakar, Sénégal",
    hours: "06:30 - 21:30",
    description: "Boulangerie artisanale sénégalaise renommée au cœur de Dakar Plateau. Croissants chauds, pains locaux au mil et pâtisseries fines."
  },
  {
    name: "Épicerie Moderne de la Médina",
    category: "Supermarché / Épicerie",
    phone: "+221 77 550 49 11",
    address: "Avenue Blaise Diagne x Rue 17, Médina, Dakar, Sénégal",
    hours: "08:00 - 23:00",
    description: "Épicerie de quartier alimentée en produits locaux et importés de premier choix. Service rapide et livraison à domicile disponible."
  },
  {
    name: "Atelier Beauté & Coiffure Yoff",
    category: "Salon de coiffure / Esthétique",
    phone: "+221 33 860 12 99",
    address: "Route de l'Aéroport, Yoff, Dakar, Sénégal",
    hours: "09:00 - 20:00",
    description: "Salon de coiffure moderne proposant des tresses traditionnelles et coupes contemporaines. Ambiance chaleureuse et conseils beauté."
  }
];

export default function GoogleConsentModal({ isOpen, onClose, onConsentApproved }: GoogleConsentModalProps) {
  const [selectedMerchantIndex, setSelectedMerchantIndex] = useState(0);
  const [consentError, setConsentError] = useState(false);
  const [agreedToScopes, setAgreedToScopes] = useState({
    businessManage: true,
    userinfoProfile: true,
    userinfoEmail: true
  });

  if (!isOpen) return null;

  const handleApprove = () => {
    if (!agreedToScopes.businessManage) {
      setConsentError(true);
      return;
    }
    const merchant = MERCHANT_PRESETS[selectedMerchantIndex];
    onConsentApproved(merchant);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md border border-slate-200">
          
          {/* Google Sandbox Header Accent */}
          <div className="flex justify-between items-center bg-slate-50 px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24" width="24" height="24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm font-semibold text-slate-800">
                Se connecter avec Google
              </span>
            </div>
            
            <button onClick={onClose} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-6 py-5">
            {/* Context Header */}
            <div className="text-center mb-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-2">
                <Shield className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Demande de consentement de l&apos;application
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                L&apos;application <strong className="text-slate-800">Business Booster Senegal</strong> souhaite accéder à des données de votre compte Google.
              </p>
            </div>

            {/* Sandbox preset merchant choosing */}
            <div className="mb-6 p-4 rounded-xl bg-blue-50/50 border border-blue-200/60">
              <label className="block text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">
                1. Choisissez votre Commerce de test (Sénégal) :
              </label>
              <select
                id="preset-merchant-select"
                value={selectedMerchantIndex}
                onChange={(e) => setSelectedMerchantIndex(Number(e.target.value))}
                className="w-full text-xs font-medium bg-white rounded-lg border border-blue-200 p-2.5 outline-none focus:border-blue-500"
              >
                {MERCHANT_PRESETS.map((m, idx) => (
                  <option key={idx} value={idx}>
                    {m.name} ({m.category})
                  </option>
                ))}
              </select>
              <span className="block text-[11px] text-blue-600 mt-1.5 leading-normal">
                Cette simulation injectera cette PME et l&apos;adresse correspondante dans votre tableau de bord interactif Business Booster.
              </span>
            </div>

            {/* Google Permissions requested lists */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                2. Droits d&apos;accès demandés (Scopes) :
              </label>

              {/* Scope A: business.manage */}
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <input
                  id="scope-business-manage"
                  type="checkbox"
                  checked={agreedToScopes.businessManage}
                  onChange={(e) => {
                    setAgreedToScopes(prev => ({ ...prev, businessManage: e.target.checked }));
                    if (e.target.checked) setConsentError(false);
                  }}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="text-xs">
                  <label htmlFor="scope-business-manage" className="font-bold text-slate-800 cursor-pointer block">
                    Gérer vos fiches d&apos;établissement Google Business Profile
                  </label>
                  <code className="block text-[10px] text-blue-600 bg-blue-50 font-mono mt-1 px-1 rounded-sm">
                    https://www.googleapis.com/auth/business.manage
                  </code>
                  <span className="block text-slate-500 mt-1">
                    Permet de modifier vos horaires, coordonner vos adresses et répondre en direct aux avis.
                  </span>
                </div>
              </div>

              {/* Scope B: userinfo.profile */}
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <input
                  id="scope-userinfo-profile"
                  type="checkbox"
                  checked={agreedToScopes.userinfoProfile}
                  onChange={(e) => setAgreedToScopes(prev => ({ ...prev, userinfoProfile: e.target.checked }))}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="text-xs">
                  <label htmlFor="scope-userinfo-profile" className="font-bold text-slate-800 cursor-pointer block">
                    Voir vos informations personnelles fondamentales
                  </label>
                  <code className="block text-[10px] text-blue-600 bg-blue-50 font-mono mt-1 px-1 rounded-sm">
                    .../auth/userinfo.profile
                  </code>
                  <span className="block text-slate-500 mt-1">
                    Permet d&apos;afficher votre photo de profil et votre nom d&apos;administrateur dans l&apos;application.
                  </span>
                </div>
              </div>

              {/* Scope C: userinfo.email */}
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <input
                  id="scope-userinfo-email"
                  type="checkbox"
                  checked={agreedToScopes.userinfoEmail}
                  onChange={(e) => setAgreedToScopes(prev => ({ ...prev, userinfoEmail: e.target.checked }))}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="text-xs">
                  <label htmlFor="scope-userinfo-email" className="font-bold text-slate-800 cursor-pointer block">
                    Accéder à votre adresse e-mail professionnelle
                  </label>
                  <code className="block text-[10px] text-blue-600 bg-blue-50 font-mono mt-1 px-1 rounded-sm">
                    .../auth/userinfo.email
                  </code>
                  <span className="block text-slate-500 mt-1">
                    Sert d&apos;identifiant de connexion pour vous envoyer des rapports de performance.
                  </span>
                </div>
              </div>
            </div>

            {consentError && (
              <div className="mt-4 flex items-center gap-2 text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>
                  L&apos;autorisation du scope <strong>business.manage</strong> est obligatoire pour que l&apos;application puisse synchroniser vos fiches Google Maps.
                </span>
              </div>
            )}
            
            {/* Standard Warning Footer */}
            <div className="mt-5 p-3 rounded-lg bg-yellow-50 text-[11px] text-yellow-800 leading-normal border border-yellow-100">
              <span className="font-bold block mb-0.5">Souveraineté &amp; Sécurité :</span>
              Vos jetons d&apos;accès temporaires OAuth2 sont chiffrés à l&apos;aide d&apos;une clé AES-256 locale. Vous pouvez résilier cette liaison à tout moment via <a href="https://myaccount.google.com/permissions" target="_blank" className="underline font-bold hover:text-blue-600 text-yellow-900">le gestionnaire d&apos;accès Google</a>.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-slate-50 px-6 py-4 flex flex-row-reverse gap-3 border-t border-slate-100">
            <button
              onClick={handleApprove}
              id="google-approve-btn"
              className="inline-flex justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Autoriser l&apos;accès
            </button>
            <button
              onClick={onClose}
              id="google-deny-btn"
              className="inline-flex justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Annuler
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
