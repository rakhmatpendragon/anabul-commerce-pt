import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuctionCard, { type AuctionCat } from '../components/AuctionCard';

const BID_INCREMENT = 150;

// Setup initial auctions with absolute timestamps based on current time
const getInitialAuctions = (): AuctionCat[] => {
  const now = Date.now();
  return [
    {
      id: '1',
      name: 'Sir Sterling',
      breed: 'British Shorthair',
      bidsCount: 14,
      currentBid: 1250,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBlgo-CEXq639qFl-YPlD1LMtBV_nzflKi_YM198JFsUaFLLGvrrrV8Prs3A7ssDdfixmKJADHJC_RIsuDNEL7zZzByb6WVQvVt5pDfaFvqTG-TcdVUxoZZ1dTs8GwMoTMfkC01iBIa0uXRfAyxvCNTRy9bYEPqkx3TmDquCTuvLu1EdCfRtp3zR-Np4lbBQAIAnKScrMaaViesjh03tls1LqiilIZS3_mzEdyG-kfE6mPEg68L4cIViQku5kEBKhHVeVquQypy20',
      badge: 'LIVE',
      endTime: now + 3400 * 1000,
    },
    {
      id: '2',
      name: 'Moonlight',
      breed: 'Blue-Point Ragdoll',
      bidsCount: 8,
      currentBid: 2100,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAELXPxNJEKDJux5c1MIUFhB9SpVBHlktjyWJWTLFZfsUYnqEz2zraUOSQsMVPeH6iVQyazCxjCXVumXjU14TBkTkwaQvl5m-j8Ul2UQ0KaSwCO5D6H3cKWESZRTiBbzN1_5WHvgnBniEg9Dew6SX1jd5F25gPIk9Zmw0r9tPjIb6fCtgHIs9HlKiq8uyxfp6Fg5v3nO7eFLfxIxdbvY_r5ioSwFQNhm3fBo2v-bUJ1Yk1Gp4LoL-WgKwqBM5lf8Bu4ckxcM0zUjh0',
      badge: 'FEATURED',
      endTime: now + 82000 * 1000,
    },
    {
      id: '3',
      name: 'Atlas',
      breed: 'Exotic Bengal',
      bidsCount: 0,
      currentBid: 3500,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4jwGbT0cknviLD1rYqfXlJvCaFWSA3qzyuCB4xH19gI22FVkHWe_BKCOubjMPyOpocckAc6vzkBh8NcqOZHMLE5gHahOUuwj7CksLNpS5xjbE4T-IyUPcZ1plz9_-F5cpFn43xTUhxEFPWD4QtSAzaXoVBYlPy4Glc-EokdRCCbLjPy3bfaXfQZUteXqSLXvqIyQOCrbNSWcaTM-ZhZJF7af5ZGspi2Bl6EyEHC6UlfrR-Fdx_Dunc8HEI8C_UX26gVobPTA9Qkc',
      badge: 'NEW ENTRY',
      endTime: now + 172800 * 1000,
    },
    {
      id: '4',
      name: 'Snowy King',
      breed: 'Maine Coon',
      bidsCount: 32,
      currentBid: 4200,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_il_S6gdoWFmd-g6vyP2tXCRBdI4Y_kJyTSJbrgEwBqbocT6SEpzwp4ZWnKFfzbL-yimjBddZxULi8BbHOh-Bk640DRM6T49FoUpqBomIvG1BSpF-2Jxh9bvQrzo0-u4-cJf6YER93FyuO2f23m3DpOqhxJ5SPl7ujErASytkwgwSodVUftUpExaWUyPIwBmBh_IckG969606XMy_PPrSmHcMGIRFoAjVCZ02P5tFAc4lgzzzXhVCEHuu9VsYbJvqcVf-oEeQnY',
      badge: 'LIVE',
      endTime: now + 1200 * 1000,
    },
    {
      id: '5',
      name: 'Onyx',
      breed: 'Bombay',
      bidsCount: 11,
      currentBid: 1800,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDctPfEhyVAPhXUSbVA56tOHxUhFz1XFnRVPKWhViTAL5QbMkYhYoPUqKpj0ezigTQD0tDbz_N7rVtYw8O_yBGe7RIxYdlXGID9bDVEJEtOhH_InQPke9s9iLQ4w2foqyNH9Gd0-iDUWeB2x82q3tUj0eAxbikBxg3Tq75i-YhEyeGTw6nMnbzYRcfj6NpruaopyNSkqtHkFlD1RyOPq_ZsvkKQRTTT4aAByjqJrhnuZI_PpfFuTYGLnASmm7_enHoOn7W9SMANn1A',
      endTime: now + 45000 * 1000,
    },
    {
      id: '6',
      name: 'Button',
      breed: 'Scottish Fold',
      bidsCount: 26,
      currentBid: 2450,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfA4R8_JkgZrZNHDsSy8VwfdgJ6by6RJ2Gmm5w_UPaa96bN6SbS9xaF30AQFSFRHuS4UHVBHs02ATNQSpMI7iZvtXntHor_i20vFuI1Lyhi8ZWsFgRQhJbGXy2ASMzQnfwNkni4K_3y4SL9GtO16Oxpg4pIXh2aFA4haOZFgT6m579GWJhiozh80324Shtsl8LxmztfoQUmRrmYBBt5cGck5MsdRhcscqggRWOywnEXNx4Ue_55HpKgE1BokMDhqZxu0uwGFXgds4',
      badge: 'RISING STAR',
      endTime: now + 54000 * 1000,
    },
  ];
};

export default function LiveAuctions() {
  const [auctions, setAuctions] = useState<AuctionCat[]>(getInitialAuctions);
  const [biddingCatIds, setBiddingCatIds] = useState<Set<string>>(new Set());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'ending' | 'newest'>('ending');

  // Keep track of timeouts to clear them on component unmount (avoiding memory leaks)
  const timeoutRefs = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  useEffect(() => {
    return () => {
      // Cleanup all active timeouts on unmount
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const handlePlaceBid = useCallback((id: string) => {
    if (biddingCatIds.has(id)) return;

    // Set bidding state for UI feedback
    setBiddingCatIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    // Simulate placing a bid
    setAuctions((prev) =>
      prev.map((cat) => {
        if (cat.id === id) {
          return {
            ...cat,
            bidsCount: cat.bidsCount + 1,
            currentBid: cat.currentBid + BID_INCREMENT,
          };
        }
        return cat;
      })
    );

    // Revert bid placement visual state after 2 seconds
    const timeout = setTimeout(() => {
      setBiddingCatIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      timeoutRefs.current.delete(id);
    }, 2000);

    timeoutRefs.current.set(id, timeout);
  }, [biddingCatIds]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const sortedAuctions = useMemo(() => {
    return [...auctions].sort((a, b) => {
      if (sortBy === 'ending') {
        const now = Date.now();
        const aTime = a.endTime <= now ? Infinity : a.endTime;
        const bTime = b.endTime <= now ? Infinity : b.endTime;
        return aTime - bTime;
      } else {
        return parseInt(b.id) - parseInt(a.id);
      }
    });
  }, [auctions, sortBy]);

  return (
    <>
      <Navbar />

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
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-label-md transition-all cursor-pointer ${
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
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-label-md transition-all cursor-pointer ${
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
            {sortedAuctions.map((cat) => (
              <AuctionCard
                key={cat.id}
                cat={cat}
                isBidding={biddingCatIds.has(cat.id)}
                isFavorited={favorites.has(cat.id)}
                onPlaceBid={handlePlaceBid}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <button className="px-10 py-4 bg-white border-2 border-primary text-primary rounded-full font-headline-md hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
              Discover More Auctions
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
