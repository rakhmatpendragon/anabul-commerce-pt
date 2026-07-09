import { useState, useEffect } from 'react';

export interface AuctionCat {
  id: string;
  name: string;
  breed: string;
  bidsCount: number;
  currentBid: number;
  imageUrl: string;
  badge?: 'LIVE' | 'FEATURED' | 'NEW ENTRY' | 'RISING STAR';
  endTime: number; // absolute timestamp in milliseconds
}

interface AuctionCardProps {
  cat: AuctionCat;
  isBidding: boolean;
  isFavorited: boolean;
  onPlaceBid: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export default function AuctionCard({
  cat,
  isBidding,
  isFavorited,
  onPlaceBid,
  onToggleFavorite,
}: AuctionCardProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const diff = Math.max(0, Math.floor((cat.endTime - Date.now()) / 1000));
      setTimeLeft(diff);
    };

    calculateTimeLeft(); // initial run
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [cat.endTime]);

  const formatTime = (time: number) => {
    if (time <= 0) return 'EXPIRED';
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const isCritical = timeLeft > 0 && timeLeft < 3600;

  return (
    <div className="auction-card group bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline/5 flex flex-col">
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
            {formatTime(timeLeft)}
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
            onClick={() => onPlaceBid(cat.id)}
            disabled={timeLeft <= 0}
            className={`flex-1 py-3.5 rounded-full font-label-md shadow-lg active:scale-95 transition-all text-center ${
              timeLeft <= 0
                ? 'bg-surface-container-high text-on-surface-variant cursor-not-allowed shadow-none'
                : isBidding
                ? 'bg-secondary text-on-secondary shadow-secondary/20'
                : 'bg-primary text-on-primary shadow-primary/20 hover:bg-primary-container'
            }`}
          >
            {timeLeft <= 0 ? 'Auction Ended' : isBidding ? 'Bid Placed!' : 'Place Bid'}
          </button>
          <button
            onClick={() => onToggleFavorite(cat.id)}
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
}
