import { Globe, Share2, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  return (
    <footer className="bg-[#0F172A] mt-20 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-5 lg:col-span-2 pr-8">
            <Logo className="h-9 w-auto" theme="dark" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              La solution de croissance digitale n°1 pour les PME en Afrique. Propulsée par les APIs officielles Google.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" />
              <span>Ouagadougou, Burkina Faso</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Mail className="h-3.5 w-3.5" />
              <span>businessbooster.support@gmail.com</span>
            </div>
          </div>

          {/* Column 2: Produit */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Produit
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button onClick={() => setCurrentTab('fonctionnalites')} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Fonctionnalités
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('api-security')} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Documentation API
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Légal */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Légal
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <button onClick={() => setCurrentTab('privacy')} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Politique de confidentialité
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Aide */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Aide
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button onClick={() => setCurrentTab('contact')} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Support
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('contact')} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  Nous contacter
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-slate-500">
            © 2026 Business Booster. Tous droits réservés.
          </span>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-blue-600/20 flex items-center justify-center cursor-pointer transition-colors duration-200 group">
              <Globe className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-blue-600/20 flex items-center justify-center cursor-pointer transition-colors duration-200 group">
              <Share2 className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
