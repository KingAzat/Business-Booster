import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleConsentModal from './components/GoogleConsentModal';
import EnterpriseDashboard from './components/EnterpriseDashboard';
import AccueilTab from './components/AccueilTab';
import FonctionnalitesTab from './components/FonctionnalitesTab';
import SecurityTab from './components/SecurityTab';
import PrivacyTab from './components/PrivacyTab';
import ContactTab from './components/ContactTab';
import { BusinessProfile } from './types';
import { AlertCircle, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('accueil');
  const [user, setUser] = useState<{ name: string; email: string; avatar: string } | null>(null);
  const [consentModalOpen, setConsentModalOpen] = useState(false);
  const [profile, setProfile] = useState<BusinessProfile>({
    name: "Boulangerie Patisserie du Plateau",
    category: "Boulangerie / Pâtisserie",
    phone: "+221 33 821 44 22",
    address: "24 Rue Carnot, Dakar, Sénégal",
    hours: "06:30 - 21:30",
    description: "Boulangerie artisanale sénégalaise renommée au cœur de Dakar Plateau. Croissants chauds, pains locaux au mil et pâtisseries fines.",
    isSynced: true,
    isVerified: true,
    status: 'VERIFIED'
  });

  // Local storage cache simulation
  useEffect(() => {
    const savedUser = localStorage.getItem('bb_simulated_user');
    const savedMerchant = localStorage.getItem('bb_simulated_profile');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedMerchant) {
      setProfile(JSON.parse(savedMerchant));
    }
  }, []);

  const handleConsentApproved = (merchant: {
    name: string;
    category: string;
    phone: string;
    address: string;
    hours: string;
    description: string;
  }) => {
    const generatedUser = {
      name: merchant.name.split(' ')[0] + " Admin",
      email: merchant.name.toLowerCase().replace(/[^a-z0-9]/g, '') + "@gmail.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    };

    const newProfile: BusinessProfile = {
      ...merchant,
      isSynced: true,
      isVerified: true,
      status: 'VERIFIED'
    };

    setUser(generatedUser);
    setProfile(newProfile);
    localStorage.setItem('bb_simulated_user', JSON.stringify(generatedUser));
    localStorage.setItem('bb_simulated_profile', JSON.stringify(newProfile));

    // Redirect automatically to the management dashboard to amaze the user
    setCurrentTab('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('bb_simulated_user');
    localStorage.removeItem('bb_simulated_profile');
    setCurrentTab('accueil');
  };

  const openCredentialsMockLogin = () => {
    setConsentModalOpen(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-800">
      


      {/* Main header block */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        user={user}
        onLogout={handleLogout}
        onLoginClick={openCredentialsMockLogin}
      />

      {/* Render main page based on selected tab */}
      <main className="flex-1 bg-white">
        
        {currentTab === 'accueil' && (
          <AccueilTab
            onLoginClick={openCredentialsMockLogin}
            user={user}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'fonctionnalites' && (
          <FonctionnalitesTab
            onStartFreeClick={openCredentialsMockLogin}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'api-security' && (
          <SecurityTab />
        )}

        {currentTab === 'privacy' && (
          <PrivacyTab />
        )}

        {currentTab === 'contact' && (
          <ContactTab />
        )}

        {currentTab === 'dashboard' && (
          user ? (
            <EnterpriseDashboard
              initialProfile={profile}
              user={user}
            />
          ) : (
            <div className="mx-auto max-w-md text-center py-24 px-4 space-y-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
                <AlertCircle className="h-6 w-6" />
              </span>
              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">
                  Accès restreint aux administrateurs
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Vous devez d&apos;abord simuler une connexion de gérant à l&apos;aide d&apos;un compte Google validé pour accéder au panneau d&apos;écriture de fiche Maps et de réponse aux avis.
                </p>
              </div>

              <button
                onClick={openCredentialsMockLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Lancer le flux d&apos;authentification Google
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )
        )}

      </main>

      {/* Main footer block */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Google Sign-in Overlay Simulation */}
      <GoogleConsentModal
        isOpen={consentModalOpen}
        onClose={() => setConsentModalOpen(false)}
        onConsentApproved={handleConsentApproved}
      />

    </div>
  );
}
