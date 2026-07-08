import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CompanionCard, { type Companion } from '../components/CompanionCard';

const allCompanions: Companion[] = [
  {
    id: '1',
    name: 'Luna',
    breed: 'British Shorthair',
    price: 1200,
    ageWeeks: 14,
    gender: 'Female',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZXoDv6Ds7GXc94H-3qfkuLacr4113vW5l6xuYfnbtM3WmD8HFp2aOXi_rI-MO1YXeMmPxN4T_UghUQuP_P9IsWFdYBmJoz2THn8ksRZhRji3jXWJYYnf1sOUmJNCB_soIMGvBoFpEcGYaoHfiKdoqITWjCSdZchsOLaLIhg8pRtr5y9d9dTu1c9qndfQ1cEa2rvo3Ncpzcc5cb21_1tKYa8iILmTBFcIZb1k_Ub112zg1-Y9T4oGy18Mm4OKnTFFL_Vl7Cbe75E0',
    badge: 'Vet-Approved',
  },
  {
    id: '2',
    name: 'Oliver',
    breed: 'Persian',
    price: 1500,
    ageWeeks: 12,
    gender: 'Male',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0mlmqmYhBNL0hXmDvKVI9Z9oSYd7O3QpFXKrIt_t3AJ6pbCdNBL-_9uxCmY4xPrywubqnPiLYe-f5KUt9LhjIVJpnxW_G3ifcKgyFcBEdVkoMtlTOJKhmgjniwXn2DP-rG2Kue1mK9p1arlYO0W9dR1jRPxlXHu_PqCSK1gieji6VPD5E9Ddl8wqU4lHFydXVagdEyUgUlK-xBjfbtlGcNvc4y71vUSh0MZ43GYUtYpGmOdeepYuAj7gGQu0AlxnAMy7kRtlvcyU',
    badge: 'Popular',
  },
  {
    id: '3',
    name: 'Atlas',
    breed: 'Maine Coon',
    price: 1800,
    ageWeeks: 16,
    gender: 'Male',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtn6JJxUnvAxJ24W76kcm_6hd6Fjo9pk1MhQQE9fKMO3iFUPi8oZBzD6RxVipKD4tGx9vb7jqPqPI6Ua812DmMgjcsmnklG48jtbksoEBQAInsJNKSaXuU32gylhqCbK8F9Rwr5NrRdMU-cJM-iBUivMBuSWe0BkBin2b4vtt5IOfIbjZzckTwzIWDcbsYY8CE2vBPldkfqKlFepGt-LEeEcaEfo79HD73dR4PH8fqafq0unwZSc7BEhP4tCTqYDodVfemT456O-s',
    badge: 'Premium',
  },
  {
    id: '4',
    name: 'Bella',
    breed: 'Siamese',
    price: 950,
    ageWeeks: 10,
    gender: 'Female',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Df-HSr06al_VqTyreU19Mlp9bw0g0UpzrDf-C_6gRhzi3B2ndTvihTTcBwxZEIV1RmqwQdsxM6Don_QvIR8SzgNw0gD3mD9pTxGFniSgu2cEXVHWZF1VNwzuqlcsM5d6oLyyG9TNWmALjqvzFRUzegvw0qqZt62nvAOOQRQ5SrS5Crior6vO6M0EEdRq4tTpnjbX4e6I6EkOOw92Abq4BvxNLFcty7jeqysZG9SP7Ftg-VoMBEYizMP55s5KUaBgDjhMLWastkM',
  },
  {
    id: '5',
    name: 'Misty',
    breed: 'Ragdoll',
    price: 1600,
    ageWeeks: 15,
    gender: 'Female',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy-8sJm5QepToBssWeo5tRPOIIF4lSBzs6bFZ5ouFPUJoQyYa_mWt34jWUt13h3AzLCo5FUzQ3YJHnq_jHGLRXZWd3NqI4At_7tlHM6_bIFEU55FHHZrL2ct-Pk4C_k51_kSW4GV83r5NClPvAoz7OF2i_j9QN_G-nu3AT7RLQWV4pDbJcHW06AsZ0ECj4kwXpKu1WxGxR3fLIwVpuexAugpYctujZ0ey0Kr-XYsMHr6vM_YpqhqagKksaufwe_F03qks1wiBL1e4',
    badge: 'Socialized',
  },
  {
    id: '6',
    name: 'Pippin',
    breed: 'Scottish Fold',
    price: 1400,
    ageWeeks: 9,
    gender: 'Male',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBt3MWwPHhrJQxSaInNMpTQOpZ7EpknKeH9XxuTPgEry8hRM-nR-fOX-vQK44iJ-oGEwOePvvh8f8PfWpACK0VFmx16u5kLe0cuMK5Qh8qeTjm1fb0pXcTyKadd9wRyqeDEqewXJCfjpSGIGVnDBWUC7qfDU2XK2nP_EiCZ5gdHNRF9zBShBvt9_EsaJ_9-KAGszmMCko2KTdbMcHAld-1UFV-1UBbMOH9JC8-yLtIVLmMMqkH3R2IBAMAx9ZjYgIp711DrtEmOYCk',
  },
  {
    id: '7',
    name: 'Leo',
    breed: 'Bengal',
    price: 2200,
    ageWeeks: 18,
    gender: 'Male',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-XXEuiYooZBvJQp6SJbIYwu5CV2S6WHzNq3B82kRSKGZKb94bSvS8PKn_WJbWMkiub-Lz0Yue6U16EnD2IcWphNF2wRvTkK4GWGu8yqQJbVKf5ZetwLKef0xYJzcNvwo1MWCsPmhMH0uG_GDa6zldQvAkhzupkUN0wNAPR7aSAO1eLdtE7irhzkbRlUKa1cPJQpA_83US1gsYGXVIsJW3qvhoaSe1aXc5EWzWqH5c-Hs9dygBM23NCu0dfM8zoJFeMqF85fMS_HU',
    badge: 'Rare Pattern',
  },
  {
    id: '8',
    name: 'Mochi',
    breed: 'Munchkin',
    price: 1350,
    ageWeeks: 11,
    gender: 'Female',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoq8d0G-lqagvHUTRAd_s7VhNftuYqF6Q9YSkju519UjfYQU1TSpWIrFMjHYARGzHj2AgFgUVGVg3Pjh_EfDqXoG623QtnyFgRGuX6MiCLnrLrDabymFaGssVa0Ivid7OKCJPJsJtPoSwcxv_-fHV2l16YbQzY9cjblTSd5yoCoyT_ox3B0o9LA5HgdGiQhh8bWqkt_l-gkEmabyN91Oa2WbId6tnBJzB-e8e0vYs7iJu-gw4P8isVeUhnKcFeZUqWv7Uaft1ZnvU',
  },
];

const breeds = ['All', ...new Set(allCompanions.map((c) => c.breed))];
const genders: ('All' | 'Male' | 'Female')[] = ['All', 'Male', 'Female'];

export default function AvailableCats() {
  const [breedFilter, setBreedFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState<string>('All');
  const [showBreedDropdown, setShowBreedDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);

  const filtered = allCompanions.filter((c) => {
    if (breedFilter !== 'All' && c.breed !== breedFilter) return false;
    if (genderFilter !== 'All' && c.gender !== genderFilter) return false;
    return true;
  });

  const clearFilters = () => {
    setBreedFilter('All');
    setGenderFilter('All');
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20">
        {/* ── Hero / Intro ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              Find Your New Best Friend
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Every Anabul companion is vet-checked, socialized, and ready to
              join your home. Discover the magic of a premium feline connection.
            </p>
          </div>
        </section>

        {/* ── Filter Bar ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 sticky top-20 z-40">
          <div className="glass-card rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 elevated-shadow">
            <div className="flex flex-wrap gap-4">
              {/* Breed Filter */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-label-md hover:bg-surface-container-low transition-all"
                  onClick={() => {
                    setShowBreedDropdown(!showBreedDropdown);
                    setShowGenderDropdown(false);
                  }}
                >
                  {breedFilter === 'All' ? 'Breed' : breedFilter}
                  <span className="material-symbols-outlined text-[18px]">
                    keyboard_arrow_down
                  </span>
                </button>
                {showBreedDropdown && (
                  <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-xl border border-outline-variant/20 py-2 min-w-[180px] z-50">
                    {breeds.map((breed) => (
                      <button
                        key={breed}
                        className={`block w-full text-left px-4 py-2 text-label-md hover:bg-surface-container-low transition-colors ${
                          breedFilter === breed
                            ? 'text-primary font-bold'
                            : 'text-on-surface-variant'
                        }`}
                        onClick={() => {
                          setBreedFilter(breed);
                          setShowBreedDropdown(false);
                        }}
                      >
                        {breed}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Gender Filter */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-label-md hover:bg-surface-container-low transition-all"
                  onClick={() => {
                    setShowGenderDropdown(!showGenderDropdown);
                    setShowBreedDropdown(false);
                  }}
                >
                  {genderFilter === 'All' ? 'Gender' : genderFilter}
                  <span className="material-symbols-outlined text-[18px]">
                    keyboard_arrow_down
                  </span>
                </button>
                {showGenderDropdown && (
                  <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-xl border border-outline-variant/20 py-2 min-w-[140px] z-50">
                    {genders.map((g) => (
                      <button
                        key={g}
                        className={`block w-full text-left px-4 py-2 text-label-md hover:bg-surface-container-low transition-colors ${
                          genderFilter === g
                            ? 'text-primary font-bold'
                            : 'text-on-surface-variant'
                        }`}
                        onClick={() => {
                          setGenderFilter(g);
                          setShowGenderDropdown(false);
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-label-md text-on-surface-variant">
                Showing {filtered.length} companions
              </span>
              <div className="h-6 w-[1px] bg-outline-variant" />
              <button
                className="flex items-center gap-1 text-primary font-semibold text-label-md hover:underline decoration-2 underline-offset-4"
                onClick={clearFilters}
              >
                Clear All
              </button>
            </div>
          </div>
        </section>

        {/* ── Cat Grid ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
            {filtered.map((companion) => (
              <CompanionCard key={companion.id} companion={companion} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-[64px] text-on-surface-variant/30 mb-4">
                search_off
              </span>
              <p className="text-headline-md font-headline-md text-on-surface-variant">
                No companions match your filters
              </p>
              <button
                className="mt-4 text-primary font-semibold text-label-md hover:underline"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filtered.length > 0 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold">
                  1
                </button>
                <button className="w-10 h-10 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container">
                  2
                </button>
                <button className="w-10 h-10 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container">
                  3
                </button>
              </div>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          )}
        </section>

        {/* ── Trust / Quality Section ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 text-center">
              <span className="material-symbols-outlined text-primary text-[48px] mb-4">
                verified_user
              </span>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                Verified Health
              </h4>
              <p className="text-body-md text-on-surface-variant">
                Every companion receives a comprehensive health screening and
                genetic testing before listing.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 text-center">
              <span className="material-symbols-outlined text-primary text-[48px] mb-4">
                home_health
              </span>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                Socialized Early
              </h4>
              <p className="text-body-md text-on-surface-variant">
                Raised in a loving, home-like environment to ensure they are
                confident and friendly from day one.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 text-center">
              <span className="material-symbols-outlined text-primary text-[48px] mb-4">
                local_shipping
              </span>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                Safe Delivery
              </h4>
              <p className="text-body-md text-on-surface-variant">
                Climate-controlled, low-stress transportation provided by
                certified pet travel specialists.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
