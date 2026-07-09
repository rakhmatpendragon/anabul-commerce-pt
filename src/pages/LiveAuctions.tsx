import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AuctionCat {
  id: string;
  name: string;
  breed: string;
  bidsCount: number;
  currentBid: number;
  imageUrl: string;
  badge?: 'LIVE' | 'FEATURED' | 'NEW ENTRY' | 'RISING STAR';
  initialTime: number; // in seconds
}

const initialAuctions: AuctionCat[] = [
  {
    id: '1',
    name: 'Sir Sterling',
    breed: 'British Shorthair',
    bidsCount: 14,
    currentBid: 1250,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBlgo-CEXq639qFl-YPlD1LMtBV_nzflKi_YM198JFsUaFLLGvrrrV8Prs3A7ssDdfixmKJADHJC_RIsuDNEL7zZzByb6WVQvVt5pDfaFvqTG-TcdVUxoZZ1dTs8GwMoTMfkC01iBIa0uXRfAyxvCNTRy9bYEPqkx3TmDquCTuvLu1EdCfRtp3zR-Np4lbBQAIAnKScrMaaViesjh03tls1LqiilIZS3_mzEdyG-kfE6mPEg68L4cIViQku5kEBKhHVeVquQypy20',
    badge: 'LIVE',
    initialTime: 3400,
  },
  {
    id: '2',
    name: 'Moonlight',
    breed: 'Blue-Point Ragdoll',
    bidsCount: 8,
    currentBid: 2100,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAELXPxNJEKDJux5c1MIUFhB9SpVBHlktjyWJWTLFZfsUYnqEz2zraUOSQsMVPeH6iVQyazCxjCXVumXjU14TBkTkwaQvl5m-j8Ul2UQ0KaSwCO5D6H3cKWESZRTiBbzN1_5WHvgnBniEg9Dew6SX1jd5F25gPIk9Zmw0r9tPjIb6fCtgHIs9HlKiq8uyxfp6Fg5v3nO7eFLfxIxdbvY_r5ioSwFQNhm3fBo2v-bUJ1Yk1Gp4LoL-WgKwqBM5lf8Bu4ckxcM0zUjh0',
    badge: 'FEATURED',
    initialTime: 82000,
  },
  {
    id: '3',
    name: 'Atlas',
    breed: 'Exotic Bengal',
    bidsCount: 0,
    currentBid: 3500,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4jwGbT0cknviLD1rYqfXlJvCaFWSA3qzyuCB4xH19gI22FVkHWe_BKCOubjMPyOpocckAc6vzkBh8NcqOZHMLE5gHahOUuwj7CksLNpS5xjbE4T-IyUPcZ1plz9_-F5cpFn43xTUhxEFPWD4QtSAzaXoVBYlPy4Glc-EokdRCCbLjPy3bfaXfQZUteXqSLXvqIyQOCrbNSWcaTM-ZhZJF7af5ZGspi2Bl6EyEHC6UlfrR-Fdx_Dunc8HEI8C_UX26gVobPTA9Qkc',
    badge: 'NEW ENTRY',
    initialTime: 172800,
  },
  {
    id: '4',
    name: 'Snowy King',
    breed: 'Maine Coon',
    bidsCount: 32,
    currentBid: 4200,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_il_S6gdoWFmd-g6vyP2tXCRBdI4Y_kJyTSJbrgEwBqbocT6SEpzwp4ZWnKFfzbL-yimjBddZxULi8BbHOh-Bk640DRM6T49FoUpqBomIvG1BSpF-2Jxh9bvQrzo0-u4-cJf6YER93FyuO2f23m3DpOqhxJ5SPl7ujErASytkwgwSodVUftUpExaWUyPIwBmBh_IckG969606XMy_PPrSmHcMGIRFoAjVCZ02P5tFAc4lgzzzXhVCEHuu9VsYbJvqcVf-oEeQnY',
    badge: 'LIVE',
    initialTime: 1200,
  },
  {
    id: '5',
    name: 'Onyx',
    breed: 'Bombay',
    bidsCount: 11,
    currentBid: 1800,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDctPfEhyVAPhXUSbVA56tOHxUhFz1XFnRVPKWhViTAL5QbMkYhYoPUqKpj0ezigTQD0tDbz_N7rVtYw8O_yBGe7RIxYdlXGID9bDVEJEtOhH_InQPke9s9iLQ4w2foqyNH9Gd0-iDUWeB2x82q3tUj0eAxbikBxg3Tq75i-YhEyeGTw6nMnbzYRcfj6NpruaopyNSkqtHkFlD1RyOPq_ZsvkKQRTTT4aAByjqJrhnuZI_PpfFuTYGLnASmm7_enHoOn7W9SMANn1A',
    initialTime: 45000,
  },
  {
    id: '6',
    name: 'Button',
    breed: 'Scottish Fold',
    bidsCount: 26,
    currentBid: 2450,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfA4R8_JkgZrZNHDsSy8VwfdgJ6by6RJ2Gmm5w_UPaa96bN6SbS9xaF30AQFSFRHuS4UHVBHs02ATNQSpMI7iZvtXntHor_i20vFuI1Lyhi8ZWsFgRQhJbGXy2ASMzQnfwNkni4K_3y4SL9GtO16Oxpg4pIXh2aFA4haOZFgT6m579GWJhiozh80324Shtsl8LxmztfoQUmRrmYBBt5cGck5MsdRhcscqggRWOywnEXNx4Ue_55HpKgE1BokMDhqZxu0uwGFXgds4',
    badge: 'RISING STAR',
    initialTime: 54000,
  },
];

export default function LiveAuctions() {
  const [auctions, setAuctions] = useState<AuctionCat[]>(initialAuctions);
  const [biddingCatIds, setBiddingCatIds] = useState<Set<string>>(new Set());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'ending' | 'newest'>('ending');

  // Timer effect to decrement countdown values
  useEffect(() => {
    const interval = setInterval(() => {
      setAuctions((prev) =>
        prev.map((cat) => {
          if (cat.initialTime > 0) {
            return { ...cat, initialTime: cat.initialTime - 1 };
          }
          return cat;
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    if (time <= 0) return 'EXPIRED';
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlaceBid = (id: string) => {
    if (biddingCatIds.has(id)) return;

    // Set bidding state for custom button UI feedback
    setBiddingCatIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    // Simulate placing a bid (increment bidsCount & currentBid)
    setAuctions((prev) =>
      prev.map((cat) => {
        if (cat.id === id) {
          return {
            ...cat,
            bidsCount: cat.bidsCount + 1,
            currentBid: cat.currentBid + 150, // simulate increment by $150
          };
        }
        return cat;
      })
    );

    // Reset button after 2 seconds
    setTimeout(() => {
      setBiddingCatIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 2000);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const sortedAuctions = [...auctions].sort((a, b) => {
    if (sortBy === 'ending') {
      const aTime = a.initialTime <= 0 ? Infinity : a.initialTime;
      const bTime = b.initialTime <= 0 ? Infinity : b.initialTime;
      return aTime - bTime;
    } else {
      // Sort by newest entries (or high IDs first)
      return parseInt(b.id) - parseInt(a.id);
    }
  });

  return (
    <>
      <Navbar />

      {/* Springy transitions for the cards & standard custom frosted glass */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .auction-card {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          }
          .auction-card:hover {
            transform: translateY(-8px);
          }
        `
      }} />

      <main className="pt-24 pb-20 bg-background text-on-surface font-body-md">
        {/* Hero Section */}
        <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-4">
                Elite Feline <span className="text-primary">Auctions</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl">
                Discover rare breeds and champion lineages. Our curated auctions connect discerning owners with extraordinary companions.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSortBy('ending')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-label-md transition-all ${
                  sortBy === 'ending'
                    ? 'bg-secondary text-on-secondary shadow-md'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Ending Soon
              </button>
              <button
                onClick={() => setSortBy('newest')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-label-md transition-all ${
                  sortBy === 'newest'
                    ? 'bg-secondary text-on-secondary shadow-md'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                Newest
              </button>
            </div>
          </div>
        </header>

        {/* Auctions Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {sortedAuctions.map((cat) => {
              const isBidding = biddingCatIds.has(cat.id);
              const isFavorited = favorites.has(cat.id);
              const isCritical = cat.initialTime > 0 && cat.initialTime < 3600;

              return (
                <div
                  key={cat.id}
                  className="auction-card group bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline/5 flex flex-col"
                >
                  <div className="relative h-[320px]">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={cat.imageUrl}
                      alt={cat.name}
                    />

                    {/* Badge */}
                    {cat.badge && (
                      <div className="absolute top-4 left-4">
                        {cat.badge === 'LIVE' ? (
                          <span className="bg-primary text-on-primary text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            LIVE
                          </span>
                        ) : cat.badge === 'FEATURED' ? (
                          <span className="bg-secondary text-on-secondary text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                            <span className="material-symbols-outlined text-[14px]">stars</span>
                            FEATURED
                          </span>
                        ) : (
                          <span className="bg-primary-container text-on-primary-container text-[12px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                            {cat.badge}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Countdown */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                      <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider leading-none">
                        Ending In
                      </p>
                      <p className={`font-headline-md text-[18px] transition-colors duration-300 ${
                        isCritical ? 'text-error font-bold' : 'text-primary'
                      }`}>
                        {formatTime(cat.initialTime)}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface">
                          {cat.name}
                        </h3>
                        <p className="text-label-md text-secondary uppercase tracking-wide">
                          {cat.breed}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[12px] text-on-surface-variant font-medium">
                          Bids: {cat.bidsCount}
                        </p>
                        <p className="font-headline-md text-primary text-[20px] tracking-tight">
                          ${cat.currentBid.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handlePlaceBid(cat.id)}
                        disabled={cat.initialTime <= 0}
                        className={`flex-1 py-3.5 rounded-full font-label-md shadow-lg active:scale-95 transition-all text-center ${
                          cat.initialTime <= 0
                            ? 'bg-surface-container-high text-on-surface-variant cursor-not-allowed shadow-none'
                            : isBidding
                            ? 'bg-secondary text-on-secondary shadow-secondary/20'
                            : 'bg-primary text-on-primary shadow-primary/20 hover:bg-primary-container'
                        }`}
                      >
                        {cat.initialTime <= 0 ? 'Auction Ended' : isBidding ? 'Bid Placed!' : 'Place Bid'}
                      </button>
                      <button
                        onClick={() => toggleFavorite(cat.id)}
                        className="w-12 h-12 flex items-center justify-center border border-outline-variant rounded-full hover:bg-surface-container transition-colors"
                      >
                        <span
                          className={`material-symbols-outlined transition-colors duration-200 ${
                            isFavorited ? 'text-primary' : 'text-on-surface-variant'
                          }`}
                          style={{
                            fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0"
                          }}
                        >
                          favorite
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <button className="px-10 py-4 bg-white border-2 border-primary text-primary rounded-full font-headline-md hover:bg-primary hover:text-on-primary transition-all duration-300">
              Discover More Auctions
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
