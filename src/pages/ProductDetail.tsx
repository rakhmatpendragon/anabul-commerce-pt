import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { catsData } from '../data/catsData';

// Maps temperament to icons
const temperamentIconMap: Record<string, string> = {
  'Good with Kids': 'child_care',
  'Calm Nature': 'spa',
  'Affectionate': 'favorite',
  'Gentle Spirit': 'spa',
  'Quiet & Sweet': 'volume_mute',
  'Loves Pampering': 'content_cut',
  'Playful': 'sports_esports',
  'Active Climber': 'vertical_align_top',
  'Highly Social': 'groups',
  'Curious': 'search',
  'Vocal & Chatty': 'chat_bubble',
  'Highly Intelligent': 'psychology',
  'Docile & Calm': 'spa',
  'Loves Cuddles': 'volunteer_activism',
  'Kid-Friendly': 'child_care',
  'Sweet-Tempered': 'sentiment_satisfied',
  'Playful & Silly': 'mood',
  'Gentle Nature': 'spa',
  'High Energy': 'bolt',
  'Intelligent': 'psychology',
  'Athletic & Active': 'fitness_center',
  'Playful & Fast': 'speed',
  'Loving & Warm': 'wb_sunny',
  'Highly Friendly': 'handshake'
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  const isValid = id && catsData[id];
  // Default to Luna (ID: 1) if ID is not found or invalid only to prevent Hook initialization errors
  const cat = isValid ? catsData[id] : catsData['1'];

  // State for interactive features
  const [heroImage, setHeroImage] = useState(cat.imageUrl);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isApplicationStarted, setIsApplicationStarted] = useState(false);

  const cartTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const appTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Update state if the cat changes
  useEffect(() => {
    setHeroImage(cat.imageUrl);
    setIsAddedToCart(false);
    setIsApplicationStarted(false);
  }, [cat.id]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (cartTimerRef.current) clearTimeout(cartTimerRef.current);
      if (appTimerRef.current) clearTimeout(appTimerRef.current);
    };
  }, []);

  const handleBuyNow = () => {
    if (isAddedToCart) return;
    setIsAddedToCart(true);
    cartTimerRef.current = setTimeout(() => {
      setIsAddedToCart(false);
    }, 3000);
  };

  const handleStartApplication = () => {
    if (isApplicationStarted) return;
    setIsApplicationStarted(true);
    appTimerRef.current = setTimeout(() => {
      setIsApplicationStarted(false);
    }, 3000);
  };

  // If the ID is invalid, show a friendly 404 screen
  if (!isValid) {
    return (
      <>
        <Navbar />
        <main className="pt-20 bg-background text-on-surface font-body-md min-h-screen flex flex-col items-center justify-center px-margin-mobile text-center">
          <div className="max-w-md bg-white p-8 rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgba(27,28,28,0.08)]">
            <span className="material-symbols-outlined text-primary text-6xl mb-4 animate-bounce">pets</span>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Cat Not Found</h1>
            <p className="text-on-surface-variant mb-6">
              The cat you are looking for might have been adopted or is no longer available.
            </p>
            <Link
              to="/cats"
              className="inline-block bg-primary text-white py-3 px-6 rounded-full font-label-md transition-all active:scale-95 duration-150 hover:bg-primary-container shadow-md"
            >
              Back to Catalog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-background text-on-surface font-body-md min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[716px] md:h-[870px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover transition-all duration-700 brightness-100 hover:brightness-[1.03]"
              src={heroImage}
              alt={`${cat.name} - ${cat.breed}`}
            />
            {/* Gradient Overlay matching standard background */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, var(--color-background) 0%, transparent 50%)'
              }}
            />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-12 max-w-container-max mx-auto">
            <div className="max-w-2xl">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-md uppercase tracking-wider mb-4 inline-block font-semibold">
                Available for Adoption
              </span>
              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-2">
                {cat.name}
              </h1>
              <p className="font-headline-md text-headline-md text-tertiary mb-6">
                {cat.breed} • {cat.ageWeeks} Weeks • {cat.gender}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white shadow-[0_8px_30px_rgba(27,28,28,0.08)] px-4 py-2 rounded-full text-label-md text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">verified</span> 
                  Vet-Approved
                </span>
                {cat.wcfRegistered && (
                  <span className="bg-white shadow-[0_8px_30px_rgba(27,28,28,0.08)] px-4 py-2 rounded-full text-label-md text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">history_edu</span> 
                    Pedigree Cert.
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* About Me */}
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b border-outline-variant pb-4">
                  About {cat.name}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {cat.about}
                </p>
                {cat.aboutSecondary && (
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
                    {cat.aboutSecondary}
                  </p>
                )}
              </div>

              {/* Temperament Bento */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cat.temperament.map((trait, index) => {
                  const icon = temperamentIconMap[trait] || 'spa';
                  return (
                    <div key={index} className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow transition-shadow">
                      <span className="material-symbols-outlined text-primary mb-3" style={{ fontSize: '32px' }}>
                        {icon}
                      </span>
                      <span className="font-label-md text-label-md text-on-surface">
                        {trait}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Health & Heritage */}
              <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgba(27,28,28,0.08)]">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
                  Health & Heritage
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-label-md text-label-md text-tertiary uppercase tracking-widest mb-4">
                      Medical Status
                    </h3>
                    <ul className="space-y-4">
                      {cat.medicalStatus.map((status, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-secondary">check_circle</span>
                          <span className="text-on-surface-variant">{status}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl bg-surface-container h-48 md:h-full min-h-[150px]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <span className="material-symbols-outlined text-tertiary-container text-4xl mb-2">
                        workspace_premium
                      </span>
                      <p className="font-headline-md text-on-surface">
                        {cat.wcfRegistered ? 'WCF Registered' : 'Quality Assurance'}
                      </p>
                      <p className="text-label-md text-on-surface-variant">
                        {cat.wcfRegistered 
                          ? 'Official Lineage Certificate Included' 
                          : 'Healthy & Socialized Family Lineage'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meet the Parents */}
              {((cat.fatherName && cat.fatherImage) || (cat.motherName && cat.motherImage)) && (
                <div className="space-y-6">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Meet the Parents
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    {cat.fatherName && cat.fatherImage && (
                      <div className="group">
                        <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-sm">
                          <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            src={cat.fatherImage}
                            alt={`Father: ${cat.fatherName}`}
                          />
                          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-label-md font-semibold text-on-surface shadow-sm">
                            Father: {cat.fatherName}
                          </div>
                        </div>
                      </div>
                    )}
                    {cat.motherName && cat.motherImage && (
                      <div className="group">
                        <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-sm">
                          <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            src={cat.motherImage}
                            alt={`Mother: ${cat.motherName}`}
                          />
                          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-label-md font-semibold text-on-surface shadow-sm">
                            Mother: {cat.motherName}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Gallery */}
              <div className="space-y-6">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Include main image in gallery */}
                  <div 
                    onClick={() => setHeroImage(cat.imageUrl)}
                    className={`h-40 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-all border-2 ${
                      heroImage === cat.imageUrl ? 'border-primary shadow-md scale-[0.98]' : 'border-transparent'
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={cat.imageUrl}
                      alt={`${cat.name} main view`}
                    />
                  </div>
                  {/* Map rest of gallery, filtering out the main image if it exists to avoid duplicates */}
                  {cat.gallery.filter((imgUrl) => imgUrl !== cat.imageUrl).map((imgUrl, index) => (
                    <div
                      key={index}
                      onClick={() => setHeroImage(imgUrl)}
                      className={`h-40 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-all border-2 ${
                        heroImage === imgUrl ? 'border-primary shadow-md scale-[0.98]' : 'border-transparent'
                      }`}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={imgUrl}
                        alt={`${cat.name} gallery view ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Adoption Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgba(27,28,28,0.08)]">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <span className="text-label-md text-on-surface-variant block mb-1">
                        Direct Purchase Price
                      </span>
                      <span className="font-headline-xl text-headline-xl text-primary font-bold">
                        ${cat.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-md font-bold mb-2">
                      NEW
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
                      <span className="material-symbols-outlined text-secondary">local_shipping</span>
                      <div>
                        <p className="text-label-md font-bold">Premium Door-to-Door Delivery</p>
                        <p className="text-[12px] text-on-surface-variant">Safe, climate-controlled transport</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
                      <span className="material-symbols-outlined text-secondary">card_giftcard</span>
                      <div>
                        <p className="text-label-md font-bold">Welcome Home Kit Included</p>
                        <p className="text-[12px] text-on-surface-variant">Food, toys, and grooming starter pack</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleBuyNow}
                    className={`w-full py-4 rounded-full font-headline-md text-headline-md transition-all active:scale-95 duration-150 mb-4 cursor-pointer shadow-md ${
                      isAddedToCart
                        ? 'bg-secondary text-on-secondary shadow-secondary/20 animate-pulse'
                        : 'bg-primary text-white hover:shadow-lg hover:shadow-primary/20 hover:bg-primary-container'
                    }`}
                  >
                    {isAddedToCart ? 'Added to Cart!' : 'Buy Now'}
                  </button>

                  <button
                    onClick={handleStartApplication}
                    className={`w-full border-2 py-4 rounded-full font-label-md text-label-md transition-all active:scale-95 duration-150 cursor-pointer ${
                      isApplicationStarted
                        ? 'bg-surface-container-high border-transparent text-primary font-bold'
                        : 'border-outline text-on-surface-variant hover:bg-surface-container-low'
                    }`}
                  >
                    {isApplicationStarted ? 'Application Started!' : 'Start Adoption Application'}
                  </button>

                  <p className="text-center text-[12px] text-on-surface-variant mt-6">
                    By proceeding, you agree to Anabul's{' '}
                    <a className="underline hover:text-primary transition-colors" href="#">
                      Premium Adoption Terms
                    </a>{' '}
                    and{' '}
                    <a className="underline hover:text-primary transition-colors" href="#">
                      Health Guarantee
                    </a>
                    .
                  </p>
                </div>

                {/* Secondary Widget: Specialist Advice */}
                <div className="bg-secondary-container/30 p-6 rounded-3xl border border-secondary-container flex items-center gap-4 shadow-sm hover:shadow transition-shadow">
                  <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-secondary-container font-semibold">
                      Consult with a Specialist
                    </p>
                    <p className="text-[13px] text-on-secondary-container/80">
                      Available 9am - 6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
