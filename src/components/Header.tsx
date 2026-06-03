import { useState } from 'react';
import { LogOut, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  user: { name: string; email: string; avatar: string } | null;
  onLogout: () => void;
  onLoginClick: () => void;
}

export default function Header({ currentTab, setCurrentTab, user, onLogout, onLoginClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'fonctionnalites', label: 'Fonctionnalités' },
    { id: 'demo', label: 'Démo' },
    { id: 'api-security', label: 'Sécurité & API' },
    { id: 'privacy', label: 'Confidentialité' }
  ];

  const handleNavClick = (tabId: string) => {
    if (tabId === 'demo') {
      setCurrentTab('accueil');
      setTimeout(() => {
        document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentTab(tabId);
    }
    setMobileMenuOpen(false);
  };

  const isActive = (tabId: string) => {
    if (tabId === 'accueil') return currentTab === 'accueil';
    return currentTab === tabId;
  };

  return (
    <header className="sticky top-0 z-50 w-full glass transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <button
          onClick={() => { setCurrentTab('accueil'); setMobileMenuOpen(false); }}
          className="flex items-center text-left cursor-pointer transition-transform active:scale-95"
          id="logo-button"
        >
          <Logo className="h-10 w-auto" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((tab) => (
            <button
              key={tab.id}
              id={`nav-tab-${tab.id}`}
              onClick={() => handleNavClick(tab.id)}
              className={`relative py-2 text-sm transition-colors duration-150 cursor-pointer ${
                isActive(tab.id)
                  ? 'text-blue-700 font-semibold'
                  : 'text-slate-500 hover:text-blue-600 font-medium'
              }`}
            >
              {tab.label}
              {isActive(tab.id) && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[2px] left-0 right-0 h-0.5 bg-blue-700 rounded-t-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right side: CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentTab('dashboard')}
                className={`flex items-center gap-2 p-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentTab === 'dashboard'
                    ? 'bg-blue-50 border border-blue-200 text-blue-700'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
                title="Mon Tableau Google Profile"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 rounded-full border border-slate-200"
                />
                <span className="hidden xl:inline text-xs font-semibold max-w-[120px] truncate">
                  {user.name}
                </span>
              </button>
              
              <button
                onClick={onLogout}
                className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                title="Se déconnecter de Google"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setCurrentTab('contact')}
              className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg px-5 py-2 text-xs font-semibold transition-all shadow-sm cursor-pointer"
              id="header-contact-btn"
            >
              Nous contacter
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavClick(tab.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm transition-colors cursor-pointer ${
                    isActive(tab.id)
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              {!user && (
                <button
                  onClick={() => { setCurrentTab('contact'); setMobileMenuOpen(false); }}
                  className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-4 py-3 text-sm font-semibold cursor-pointer text-center"
                >
                  Nous contacter
                </button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
