import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface Companion {
  id: string;
  name: string;
  breed: string;
  price: number;
  ageWeeks: number;
  gender: 'Male' | 'Female';
  imageUrl: string;
  badge?: string;
}

interface CompanionCardProps {
  companion: Companion;
}

export default function CompanionCard({ companion }: CompanionCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const badgeStyles: Record<string, string> = {
    'Vet-Approved': 'bg-secondary text-on-secondary',
    'Popular': 'bg-primary-container text-on-primary',
    'Premium': 'bg-secondary text-on-secondary',
    'Socialized': 'bg-secondary text-on-secondary',
    'Rare Pattern': 'bg-primary-container text-on-primary',
  };

  return (
    <div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden elevated-shadow transition-all duration-300 hover:-translate-y-2 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Link to={`/cats/${companion.id}`} className="w-full h-full block">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={companion.imageUrl}
            alt={`${companion.name} - ${companion.breed}`}
          />
        </Link>
        {companion.badge && (
          <div className="absolute top-4 left-4 pointer-events-none">
            <span
              className={`px-3 py-1 rounded-full text-label-md shadow-sm ${
                badgeStyles[companion.badge] || 'bg-secondary text-on-secondary'
              }`}
            >
              {companion.badge}
            </span>
          </div>
        )}
        <button
          className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${
            isFavorite ? 'text-primary' : 'text-on-surface-variant'
          } z-10`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <span
            className="material-symbols-outlined"
            style={isFavorite ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link to={`/cats/${companion.id}`} className="hover:text-primary transition-colors">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {companion.name}
              </h3>
            </Link>
            <p className="text-label-md text-on-surface-variant">{companion.breed}</p>
          </div>
          <span className="text-primary font-bold text-headline-md">
            ${companion.price.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-1 text-on-surface-variant text-label-md">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            {companion.ageWeeks} Weeks
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant text-label-md">
            <span className="material-symbols-outlined text-[16px]">
              {companion.gender === 'Female' ? 'female' : 'male'}
            </span>
            {companion.gender}
          </div>
        </div>

        <Link
          to={`/cats/${companion.id}`}
          className="w-full mt-auto bg-primary text-on-primary py-3 px-6 rounded-full font-label-md transition-all duration-200 hover:bg-primary-container active:scale-95 elevated-shadow text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
