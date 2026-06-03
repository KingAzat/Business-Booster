import React, { useState, useEffect } from 'react';
import { 
  Building, MapPin, Phone, Clock, FileText, CheckCircle, RefreshCw, 
  Star, MessageSquare, Plus, Eye, PhoneCall, Navigation, ArrowRight,
  TrendingUp, Sparkles, Send, Map
} from 'lucide-react';
import { BusinessProfile, Review, BusinessPost } from '../types';

interface EnterpriseDashboardProps {
  initialProfile: BusinessProfile;
  user: { name: string; email: string } | null;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Amadou Diouf",
    rating: 5,
    comment: "Excellent service ! Les produits sont toujours frais et l'accueil est incomparable. Je recommande vivement à tous les habitants du Plateau.",
    date: "Il y a 2 jours"
  },
  {
    id: "rev-2",
    author: "Fatou Kane",
    rating: 4,
    comment: "Très propre et bien organisé. Seul bémol, l'attente peut être un peu longue aux heures de pointe le midi. Mais la qualité est au rendez-vous.",
    date: "Il y a 1 semaine"
  },
  {
    id: "rev-3",
    author: "Michel Gomis",
    rating: 5,
    comment: "Je suis client fidèle depuis des mois. Le personnel est aux petits soins et les prix de base sont très corrects pour la zone.",
    date: "Il y a 2 semaines"
  }
];

const DEFAULT_POSTS: BusinessPost[] = [
  {
    id: "post-1",
    title: "Offre Spéciale Korité !",
    content: "Profitez de réductions exceptionnelles sur toute notre sélection pour fêter la Korité en famille. Commandez en avance dès aujourd'hui !",
    date: "25 Mai 2026",
    views: 142,
    clicks: 34
  },
  {
    id: "post-2",
    title: "Nouveau : Arrivage de Produits Bio de Casamance",
    content: "Nous soutenons les petits producteurs locaux ! Venez tester notre nouvelle gamme de mangues douces, jus naturels et épices de Casamance.",
    date: "12 Mai 2026",
    views: 95,
    clicks: 18
  }
];

export default function EnterpriseDashboard({ initialProfile, user }: EnterpriseDashboardProps) {
  const [profile, setProfile] = useState<BusinessProfile>({
    ...initialProfile,
    isSynced: true,
    isVerified: true,
    status: 'VERIFIED'
  });

  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'reviews' | 'posts' | 'analytics'>('profile');
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);
  const [posts, setPosts] = useState<BusinessPost[]>(DEFAULT_POSTS);
  
  // Form edit states
  const [editName, setEditName] = useState(profile.name);
  const [editCategory, setEditCategory] = useState(profile.category);
  const [editPhone, setEditPhone] = useState(profile.phone);
  const [editAddress, setEditAddress] = useState(profile.address);
  const [editHours, setEditHours] = useState(profile.hours);
  const [editDescription, setEditDescription] = useState(profile.description);

  // Sync animation states
  const [syncing, setSyncing] = useState(false);
  const [showSyncSuccess, setShowSyncSuccess] = useState(false);

  // Quick Post Draft state
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [draftGenerated, setDraftGenerated] = useState(false);

  // Auto update input states when preset changes (via auth login preset triggers)
  useEffect(() => {
    setProfile({
      ...initialProfile,
      isSynced: true,
      isVerified: true,
      status: 'VERIFIED'
    });
    setEditName(initialProfile.name);
    setEditCategory(initialProfile.category);
    setEditPhone(initialProfile.phone);
    setEditAddress(initialProfile.address);
    setEditHours(initialProfile.hours);
    setEditDescription(initialProfile.description);
  }, [initialProfile]);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSyncing(true);
    
    // Simulate API network latency
    setTimeout(() => {
      setSyncing(false);
      setProfile(prev => ({
        ...prev,
        name: editName,
        category: editCategory,
        phone: editPhone,
        address: editAddress,
        hours: editHours,
        description: editDescription,
        status: 'UPDATED',
        isSynced: true
      }));
      setShowSyncSuccess(true);
      setTimeout(() => setShowSyncSuccess(false), 4000);
    }, 1500);
  };

  const handleReplySubmit = (reviewId: string, replyText: string) => {
    setReviews(prev => prev.map(rev => {
      if (rev.id === reviewId) {
        return { ...rev, reply: replyText, replyDraft: '' };
      }
      return rev;
    }));
  };

  const handlePostCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle || !newPostContent) return;

    const newPost: BusinessPost = {
      id: `post-${Date.now()}`,
      title: newPostTitle,
      content: newPostContent,
      date: "Aujourd'hui",
      views: 0,
      clicks: 0
    };

    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
    setDraftGenerated(false);
  };

  const handleGeneratePostWithAI = () => {
    // Generate a high engagement post draft contextually
    setNewPostTitle(`🌟 Merveilles chez ${editName} !`);
    setNewPostContent(
      `Saviez-vous que nous mettons constamment nos horaires à jour ? Retrouvez-nous au ${editAddress} de ${editHours}. N'hésitez pas à nous appeler directement au ${editPhone} pour toute question ou commande spéciale !`
    );
    setDraftGenerated(true);
  };

  return (
    <div id="dashboard-root" className="bg-slate-50 min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Area */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              Tableau de bord Google Business Profile
            </span>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">
              {profile.name}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Liaison active avec le compte Administrateur : <strong className="text-slate-700">{user?.email}</strong>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Fiche vérifiée sur Google Maps
            </span>

            <button
              onClick={handleProfileSave}
              disabled={syncing}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-xs font-bold transition-all disabled:bg-blue-400 cursor-pointer"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${syncing ? 'animate-spin' : ''}`} />
              {syncing ? 'Synchronisation...' : 'Forcer Sync'}
            </button>
          </div>
        </div>

        {showSyncSuccess && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-start gap-2 text-sm animate-fade-in animate-duration-300">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block">Synchronisation réussie !</strong>
              Les serveurs Google Maps de Dakar ont mis à jour votre fiche établissement. Les modifications sont maintenant visibles en temps réel pour tous les utilisateurs.
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main workspace section */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Nav tabs inside the dashboard */}
            <div className="bg-white p-1 rounded-xl border border-slate-200 flex flex-wrap gap-1">
              <button
                onClick={() => setActiveSubTab('profile')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                  activeSubTab === 'profile'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <Building className="h-3.5 w-3.5" />
                Informations Fiche
              </button>

              <button
                onClick={() => setActiveSubTab('reviews')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                  activeSubTab === 'reviews'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Avis Clients ({reviews.length})
              </button>

              <button
                onClick={() => setActiveSubTab('posts')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                  activeSubTab === 'posts'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                Publications Google ({posts.length})
              </button>

              <button
                onClick={() => setActiveSubTab('analytics')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                  activeSubTab === 'analytics'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <TrendingUp className="h-3.5 w-3.5" />
                Statistiques
              </button>
            </div>

            {/* Sub-tab A: PROFILE INFOS FORM */}
            {activeSubTab === 'profile' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h2 className="text-base font-bold text-slate-900">
                    Propriétés du Point d&apos;Établissement
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Ces informations apparaîtront directement sur l&apos;application mobile Google Maps et les recherches de proximité.
                  </p>
                </div>

                <form onSubmit={handleProfileSave} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">
                        Nom Commercial Officiel
                      </label>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 outline-none rounded-lg p-2.5 focus:border-blue-500 focus:bg-white transition-all text-slate-800 font-medium"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">
                        Catégorie Primaire Google
                      </label>
                      <input
                        type="text"
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 outline-none rounded-lg p-2.5 focus:border-blue-500 focus:bg-white transition-all text-slate-800 font-medium"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">
                        Téléphone de Contact public
                      </label>
                      <input
                        type="text"
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 outline-none rounded-lg p-2.5 focus:border-blue-500 focus:bg-white transition-all text-slate-800 font-medium"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">
                        Horaires d&apos;Ouverture Hebdomadaires
                      </label>
                      <input
                        type="text"
                        value={editHours}
                        onChange={(e) => setEditHours(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 outline-none rounded-lg p-2.5 focus:border-blue-500 focus:bg-white transition-all text-slate-800 font-medium"
                        required
                      />
                    </div>

                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700">
                      Adresse Physique en Afrique de l&apos;Ouest
                    </label>
                    <input
                      type="text"
                      value={editAddress}
                      onChange={(e) => setEditAddress(e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 outline-none rounded-lg p-2.5 focus:border-blue-500 focus:bg-white transition-all text-slate-800 font-medium"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700">
                      Description du Commerce (Aperçu)
                    </label>
                    <textarea
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      rows={3}
                      className="w-full text-xs bg-slate-50 border border-slate-200 outline-none rounded-lg p-2.5 focus:border-blue-500 focus:bg-white transition-all text-slate-800 font-medium"
                      required
                    />
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                    <button
                      type="submit"
                      disabled={syncing}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2.5 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                    >
                      {syncing ? (
                        <>
                          <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          Mise à jour en cours...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-3.5 w-3.5" />
                          Sauvegarder et Synchroniser les données
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Sub-tab B: REVIEWS MANAGEMENT */}
            {activeSubTab === 'reviews' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <h2 className="text-base font-bold text-slate-900">
                    Avis clients synchronisés
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Répondez en direct pour renforcer votre image de marque locale et booster l&apos;algorithme de recommandation Google Maps.
                  </p>
                </div>

                <div className="space-y-4">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <strong className="block text-xs font-semibold text-slate-900">
                            {rev.author}
                          </strong>
                          <span className="block text-[10px] text-slate-500">
                            {rev.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-0.5 text-amber-500 bg-amber-100/40 px-2 py-0.5 rounded-full">
                          <Star className="h-3 w-3 fill-current" />
                          <span className="text-[10px] font-bold">{rev.rating}/5</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-700 italic">
                        &ldquo;{rev.comment}&rdquo;
                      </p>

                      {rev.reply ? (
                        <div className="p-3 bg-blue-50/50 border-l-2 border-blue-500 rounded-r-lg text-xs">
                          <span className="block font-bold text-slate-800 mb-0.5">Votre réponse :</span>
                          <p className="text-slate-600">{rev.reply}</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Écrire une réponse polie..."
                              id={`reply-input-${rev.id}`}
                              className="flex-1 text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:border-blue-500 focus:ring-0 outline-none"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  const text = (e.target as HTMLInputElement).value;
                                  if (text) {
                                    handleReplySubmit(rev.id, text);
                                    (e.target as HTMLInputElement).value = '';
                                  }
                                }
                              }}
                            />
                            <button
                              onClick={() => {
                                const input = document.getElementById(`reply-input-${rev.id}`) as HTMLInputElement;
                                if (input && input.value) {
                                  handleReplySubmit(rev.id, input.value);
                                  input.value = '';
                                }
                              }}
                              className="bg-blue-600 text-white rounded-lg px-3 py-1.5 text-xs font-bold hover:bg-blue-700 cursor-pointer"
                            >
                              <Send className="h-3 w-3" />
                            </button>
                          </div>
                          
                          {/* Suggest reply helper */}
                          <button
                            onClick={() => {
                              const input = document.getElementById(`reply-input-${rev.id}`) as HTMLInputElement;
                              if (input) {
                                input.value = `Un grand merci pour votre retour, ${rev.author} ! Votre satisfaction est notre plus grande motivation à Dakar.`;
                              }
                            }}
                            className="inline-flex items-center gap-1 text-[11px] text-blue-600 font-bold hover:underline"
                          >
                            <Sparkles className="h-3 w-3" />
                            Générer réponse rapide de bienvenue
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-tab C: GOOGLE POSTS CREATE */}
            {activeSubTab === 'posts' && (
              <div className="space-y-6">
                
                {/* Creator card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4">
                    <div>
                      <h2 className="text-base font-bold text-slate-900">
                        Créer une nouvelle publication Google
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Les posts apparaissent directement sous votre adresse Maps et durent 7 jours pour maximiser le trafic.
                      </p>
                    </div>

                    <button
                      onClick={handleGeneratePostWithAI}
                      className="inline-flex items-center gap-1 text-xs bg-amber-50 hover:bg-amber-100 text-amber-800 px-3 py-1.5 rounded-lg border border-amber-200 font-bold transition-all cursor-pointer"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      Remplissage Automatique
                    </button>
                  </div>

                  <form onSubmit={handlePostCreate} className="space-y-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Titre de l&apos;Actualité ou Promotion</label>
                      <input
                        type="text"
                        placeholder="Ex: Arrivage frais ce matin aux Almadies !"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Contenu du Message</label>
                      <textarea
                        placeholder="Ex: Partagez vos nouvelles offres spéciales et attirez les chercheurs de proximité..."
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        rows={3}
                        className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="h-4 w-4" />
                        Publier sur Google Profile
                      </button>
                    </div>
                  </form>
                </div>

                {/* Published lists */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 border-b border-slate-50 pb-2">
                    Publications Actives
                  </h3>

                  <div className="space-y-4">
                    {posts.map((post) => (
                      <div key={post.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50/40">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-xs font-bold text-slate-800">{post.title}</h4>
                          <span className="text-[10px] text-slate-500 font-medium">{post.date}</span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {post.content}
                        </p>

                        <div className="flex gap-4 border-t border-slate-100 pt-2.5 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3 text-blue-600" />
                            {post.views} Vues
                          </span>
                          <span className="flex items-center gap-1">
                            <ArrowRight className="h-3 w-3 text-emerald-600" />
                            {post.clicks} Clics CTA
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Sub-tab D: DETAILED CODE AND CHART ANALYTICS */}
            {activeSubTab === 'analytics' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Statistiques d&apos;Interaction de votre PME
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Analyse en temps réel tirée de l&apos;API Google Business Profile locale.
                  </p>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                    <span className="text-[10px] uppercase tracking-wider text-blue-800 font-bold">Vues de Recherche Maps</span>
                    <strong className="block text-2xl font-black text-slate-800 mt-1">1 240</strong>
                    <span className="text-xs text-emerald-600 font-bold block mt-1">+18% cette semaine</span>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold">Appels Déclenchés</span>
                    <strong className="block text-2xl font-black text-slate-800 mt-1">84</strong>
                    <span className="text-xs text-emerald-600 font-bold block mt-1">+34% ce mois-ci</span>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                    <span className="text-[10px] uppercase tracking-wider text-orange-800 font-bold">Demandes d&apos;Itinéraire</span>
                    <strong className="block text-2xl font-black text-slate-800 mt-1">312</strong>
                    <span className="text-xs text-emerald-600 font-bold block mt-1">+8% de croissance</span>
                  </div>
                </div>

                {/* Custom Elegant Graphic representing interaction peaks (Hour-by-hour) */}
                <div className="space-y-2 border border-slate-100 p-4 rounded-xl">
                  <strong className="text-xs text-slate-700 block font-bold">Heures d&apos;Affluence Quotidienne Réelle (Plateau, Dakar)</strong>
                  <div className="h-40 flex items-end justify-between pt-6 px-2 border-b border-slate-200">
                    {[12, 18, 48, 62, 90, 100, 75, 42, 68, 88, 30, 10].map((height, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                        <div className="w-4 sm:w-6 bg-blue-600 hover:bg-emerald-500 rounded-t-sm transition-all duration-300 relative group" style={{ height: `${height * 1.2}px` }}>
                          <span className="absolute -top-7 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-[9px] font-bold px-1 py-0.5 rounded-sm whitespace-nowrap z-10">
                            {height}% Affluence
                          </span>
                        </div>
                        <span className="text-[9px] text-slate-400 font-bold">
                          {8 + i}h
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="block text-center text-slate-400 text-[10px]">
                    Visualisation sémantique basée sur les requêtes de routes de Dakar, Sénégal.
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT SIDEBAR: STATIC IMMERSIVE GOOGLE MAPS PREVIEW */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm sticky top-24">
              
              {/* Header simulator */}
              <div className="bg-slate-900 text-white px-4 py-3 text-xs font-bold flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <Map className="h-3.5 w-3.5" />
                  SIMULATEUR DE RECHERCHE MAPS
                </span>
                
                <span className="text-[10px] text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  LIVE VIEW
                </span>
              </div>

              {/* Dynamic search bar mockup */}
              <div className="p-3 border-b border-slate-100 bg-slate-50">
                <div className="flex bg-white border border-slate-200 rounded-lg p-2 items-center gap-2 text-xs">
                  <MapPin className="h-3.5 w-3.5 text-red-500" />
                  <span className="text-slate-800 font-semibold truncate flex-1">
                    {editName || 'Votre commerce'}
                  </span>
                  <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-sm font-mono leading-none">
                    DKR
                  </span>
                </div>
              </div>

              {/* Map rendering card mockup */}
              <div className="relative h-44 bg-blue-100 overflow-hidden flex items-center justify-center">
                {/* Simulated streets lines with stylized vector lookup */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-1/4 left-0 w-full h-2 bg-white" />
                  <div className="absolute top-2/3 left-0 w-full h-4 bg-white" />
                  <div className="absolute top-0 left-1/3 w-2 h-full bg-white" />
                  <div className="absolute top-0 left-2/3 w-3 h-full bg-white" />
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -rotate-12" />
                </div>

                {/* Static visual representation pointer Dakar */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <span className="absolute -inset-2 bg-red-400 rounded-full animate-ping opacity-40" />
                    <div className="h-10 w-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 duration-200 cursor-pointer">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <div className="mt-2 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md">
                    {editName || 'Commerce Local'}
                  </div>
                </div>

                {/* Map corner labels */}
                <div className="absolute bottom-2 left-2 bg-white/80 text-[8px] font-bold text-slate-500 px-1 py-0.5 rounded-sm uppercase">
                  Dakar, Sénégal
                </div>
              </div>

              {/* Store mockup detail cards */}
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {editName || 'Votre commerce'}
                  </h3>
                  <span className="text-[11px] text-blue-600 block font-medium mt-0.5">
                    {editCategory || 'Type de Commerce'}
                  </span>

                  <div className="flex items-center gap-1 text-amber-500 mt-1.5">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">
                      4.8 (12 avis)
                    </span>
                  </div>
                </div>

                {/* Visual action pill rows */}
                <div className="grid grid-cols-3 gap-2 border-y border-slate-100 py-3">
                  <button onClick={() => alert(`Simule l'appel vers ${editPhone}`)} className="flex flex-col items-center gap-1 p-1 bg-blue-50 rounded-lg text-blue-800 hover:bg-blue-100 cursor-pointer">
                    <PhoneCall className="h-4 w-4" />
                    <span className="text-[9px] font-bold">Appeler</span>
                  </button>

                  <button onClick={() => alert(`Affiche l'itinéraire vers ${editAddress}`)} className="flex flex-col items-center gap-1 p-1 bg-emerald-50 rounded-lg text-emerald-800 hover:bg-emerald-100 cursor-pointer">
                    <Navigation className="h-4 w-4" />
                    <span className="text-[9px] font-bold">Itinéraire</span>
                  </button>

                  <button onClick={() => setActiveSubTab('reviews')} className="flex flex-col items-center gap-1 p-1 bg-slate-100 rounded-lg text-slate-700 hover:bg-slate-200 cursor-pointer">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-[9px] font-bold">Avis</span>
                  </button>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span className="leading-normal">{editAddress || 'Adresse physique'}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-emerald-700 font-bold bg-emerald-100/60 px-1 py-0.5 rounded-sm">Ouvert</span>
                      <span className="ml-1 text-slate-500 font-medium">· {editHours || 'Horaires'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono">{editPhone || 'Téléphone'}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <FileText className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <p className="line-clamp-2 text-slate-500 italic">
                      &ldquo;{editDescription || 'Pas de description renseignée.'}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Visual latest post slider inside card */}
                {posts.length > 0 && (
                  <div className="border-t border-slate-100 pt-3.5 mt-3 space-y-1.5">
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-blue-600 block">
                      Dernière publication Google Maps
                    </span>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs">
                      <strong className="block text-slate-900 font-bold text-[11px] truncate">{posts[0].title}</strong>
                      <p className="text-slate-500 line-clamp-2 mt-0.5 text-[11px] leading-relaxed">
                        {posts[0].content}
                      </p>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
