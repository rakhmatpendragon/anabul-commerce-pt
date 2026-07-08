import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard, { type Product } from '../components/ProductCard';

const trendingProducts: Product[] = [
  {
    id: '1',
    name: 'Ocean Harvest Treats',
    category: 'Grain-free organic salmon bites',
    price: 18.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsVD388tUOoxC2BY6CR2rLiLIxWt4jtXvFEGPZQxWoR5od-2yg86pFFUVOtEqlON9vg7E7Jwxzm4csvHlKKp5RuFI1n_2ibMT9gii4utJ0LOO2i7E9LngZ7UGoD8ytjwapSIvdIY-bbFLJRKrwsjYP3KorVicmG24cCzp0B-giIP7tJlmiYbM2BZKJCN9z4B78cDTbMBkwlqByZgZsrt3Y3rifsMQi7ubbgm2f4cUKdEjuAXqCiaPLENv6kqEXi32qLkd3h9SKCaI',
    badge: 'New',
  },
  {
    id: '2',
    name: 'Velvet Cloud Bed',
    category: 'Ergonomic orthopaedic support',
    price: 85.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4BiBaiD2P_sgqOMzbDGVGnmP1J8jslP4tQ3V08RZNq_gRMFhnohtpvpn67iV3foc0yoOOOlgw2GPPqOhafIIJxlm5aFc5Q_eLKVgZ38ozGYvpkFr5ePESlPKLVwUuiLurmAnwXM-7nftmTEPgSRt_rgd_3PdPsmsXs5GVyDL_f2wER8hWb7NnuyQdLMpDRchVMQN5vdgvuu8L5pgA5prPJEeHvCOSslqxCzqm7PkFdTjx8V9Gbkg-uaGh5EAnwiaP0jc3Cj433Rg',
  },
  {
    id: '3',
    name: 'Oak & Jute Scratcher',
    category: 'Sustainable natural materials',
    price: 124.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdE4MC_FQeCp3onltTXS7UMC5Pxq5aH4nd5UOySI-HOuSyr5K-SY65PUMJlUkOwTNfDX4MWbrVD5oEecoD0nmoXvPpWE_VBKVmpaoB2jq8I7VkcD7X7JH8Qn7VdneJFDKS3gonxnR70zhPW62-2wwJF2yfMt-7Wm0DQcUTtxtQD1FwJXl0evFPoZujFB7n6k-GRHDVWJB9qSMDnnTP0i2jRoRa-GqBzF_TaoFfCHRaRkK8-KJXNCUAhVVfKqJ2ve8BJORqfPS2o4A',
    badge: 'Organic',
  },
  {
    id: '4',
    name: 'Zen Grooming Kit',
    category: 'Professional bamboo brush set',
    price: 42.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGb97-CCGHirKYpugGtMif8I0R6hli67OTnT2nSSCHJsUui56Cm-finbU4AusvKMrIwuEN9-gl8qAtYcux0ZFA_Xc9KxWKmWvCFauR9to1pvPnOVWTa9YiqmIWmtQWAFzkaExRQ6o_HF0Ojof0eO6h_ggpV05rr4l6h4DUIvJA8tfaw2P-onGEm5llkTIAuTrxmVoQyAvKdXZK4LPLAbYkZ-TsKlqHk1AY8U8VYk99dskRyl7gx1GR28WUJ_dXwGurAe1SJ6T3sFk',
  },
];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* ────────────── Hero Section ────────────── */}
        <section className="relative px-margin-mobile md:px-margin-desktop py-12 md:py-24 max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="z-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-md mb-6">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  pets
                </span>
                New Collection is Here
              </div>

              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6 text-on-background max-w-lg">
                Curated Joy for Your{' '}
                <span className="text-primary">Feline Family.</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-md">
                Premium organic nutrition, boutique toys, and professional
                grooming essentials designed for the discerning modern cat
                owner.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95"
                >
                  Shop the Collection
                </Link>
                <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-label-md hover:bg-secondary/5 transition-all">
                  Our Story
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2 h-[400px] md:h-[600px]">
              <div className="absolute inset-0 bg-primary-fixed rounded-[40px] rotate-3 -z-10" />
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl rotate-0 transition-transform duration-700 hover:scale-[1.02]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Lz5fqXI_RO3RN6-RQROBLt--i9Hh7taClda7UaQNoq6J7cahBNXh7x_03UJSIry3P1-Sg0Gf9GdddDm0-QYPTkUgUr_xNfU6OiXoyKX0gC8gYYdPAiY4MOuPOo93EfwssGyppzP0Ut9e7w2YPo-SivXkCTSdIAxA-lnSNhI67F96eai357ZuSnKyhCM-gY_PbWrI6akDgMhauIBpJw7SwMq-KNIMRhe9oj5hbQW81qU0y-y73sJarVQYLMogTaKDZA-BV3ygVDg"
                  alt="A playful ginger tabby cat jumping joyfully in a sun-drenched minimalist living room"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce hover:animate-none">
                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <div>
                  <p className="text-label-md font-bold">Vet-Approved</p>
                  <p className="text-[12px] text-on-surface-variant">
                    Nutrition &amp; Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────── Trending Now Carousel ────────────── */}
        <section className="py-16 bg-surface-container-low overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-10 flex justify-between items-end">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">
                Trending Now
              </h2>
              <p className="text-on-surface-variant">
                Top-rated favorites from the Anabul community.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center hover:bg-primary-container hover:text-white transition-all"
                onClick={() => scroll('left')}
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center hover:bg-primary-container hover:text-white transition-all"
                onClick={() => scroll('right')}
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar px-margin-mobile md:px-margin-desktop pb-8 snap-x"
          >
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ────────────── Shop by Category (Asymmetric Bento) ────────────── */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
              Shop by Category
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Nutrition */}
            <Link
              to="/shop"
              className="md:col-span-8 group relative overflow-hidden rounded-3xl premium-card"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2pf8CGNCdHDEQYoFKmFefjzgH0Vi_MUy64I9dHAAw_-UoelhksFBAvKa7qmKhcao1L1inqrslKwa8prFR5zH-uQ4Rf-wIp0rH4DUGv5b8RASOzt4HyniGs697fegYFRJz8vJdcr4uUZ3LARenECLpzKHn2kVPiJoTsYc6CisRor-1z-pCIZfVdxZEKw1LqEaGvEiQxmjZSWicSX4O1Yv_Y8eUIWG5Gnzr3J2p8Gy0icwxEYpEg9MWMRNsDmiZPfoooBPp6dksxMo"
                alt="Premium cat food with fresh organic ingredients"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-headline-lg text-headline-lg mb-2">Nutrition</h3>
                <p className="font-body-md text-body-md opacity-90 max-w-xs">
                  Premium blends for every life stage and health need.
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-label-md font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Explore{' '}
                  <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </div>
            </Link>

            {/* Toys */}
            <Link
              to="/shop"
              className="md:col-span-4 group relative overflow-hidden rounded-3xl premium-card"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUgwJKuGIVApXi1NG3wMRA2MU2UrxS_jkreJAm_xVU2JFn6G8nd1uE-2wQXcf0nRqseQrUAY-bOIEpDkfR0qwZR6WXg8-UtAXmTUZCzik-UPjh_26UtLnVscD4zaAWDYf0w0fWnw87a9CXDZa3O_8ZiAUg5o-BvNSoX84ImTcEmPmIGsOVhcqtaDec_zTX14432K69tdRNB9lCkpodwovAgWIi28MafyUP7Luvrr_ZcxduhLRP_3rTfoe0ueWBJDbBJvAZxfiXKH0"
                alt="Designer cat toys in muted terracotta and sage colors"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-headline-lg text-headline-lg mb-2">Toys</h3>
                <span className="inline-flex items-center gap-2 mt-4 text-label-md font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Explore{' '}
                  <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </div>
            </Link>

            {/* Grooming */}
            <Link
              to="/shop"
              className="md:col-span-4 group relative overflow-hidden rounded-3xl premium-card"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYNuNCdHn5uR0hzu-JYnY9Dg4tSif1oP9nsW65rvTXZivv_FdsHJ2Ci_T2-kZzNNp2pewb8dGesACAJGwuK6kCLOre8e6vPPhhSC-jrc6COkO2EXKBYJRpxUBWeNhv2EOd5Sxyn_pwoIe95l3FEAL6n45qe6ZcAVeDTA211H1AbCFB4KfKZ4Z45e-86b6_x-mzQgUB4pncKRRtX4s_Gv57uMkIfu-2s0V7y4_oEiBFydcVptUZJXUf0QIdHhdZnKYqKgG-3UJtcjo"
                alt="Serene cat grooming spa setting"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-headline-lg text-headline-lg mb-2">Grooming</h3>
                <span className="inline-flex items-center gap-2 mt-4 text-label-md font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Explore{' '}
                  <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </div>
            </Link>

            {/* Accessories */}
            <Link
              to="/shop"
              className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-secondary-container flex items-center justify-center p-12"
            >
              <div className="text-center z-10">
                <h3 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">
                  Lifestyle Accessories
                </h3>
                <p className="text-on-secondary-container/80 max-w-sm mx-auto mb-8">
                  From designer collars to artisanal bowls, elevate every corner
                  of their kingdom.
                </p>
                <div className="bg-on-secondary-container text-white px-8 py-3 rounded-full inline-block group-hover:scale-105 transition-transform">
                  Shop Lifestyle
                </div>
              </div>
              {/* Decorative Abstract Shapes */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:bg-white/40 transition-all" />
            </Link>
          </div>
        </section>

        {/* ────────────── Brand Story Section ────────────── */}
        <section className="py-24 bg-surface">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[48px] overflow-hidden shadow-2xl h-[500px]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCftZZAPtJC4d06cX8jHNBE_55Mxmy_Hp1puRZU0l0bnFhuig1tnGrJAo1m7bqzZ_ImD-TRqrIBiqsYO2x9nDSfT9yOsfLa5BR4I8HsINVveg8zjPd7sk4c9mA-qIMyuM2bUDcmayDA8GT3Tw0LcbMD2AJNqdT3z94wENhM3x35Z6ZX-r2W-fQD8-XrO4_KTkOV-lv4yN8H3nvw0Fj79tbGNM1c6NXBOjBIPZiMiDfoxvh5PLRd-dyK7ZmKdAsr-M1WMc5VqQPfGFA"
                alt="Anabul founders with their cats in a modern office space"
              />
            </div>

            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-primary">
                Born from a Promise.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                At Anabul, we believe that cats aren't just pets—they are soulful
                companions that bring unparalleled grace and joy into our lives.
                Our journey began when we couldn't find products that matched the
                quality and aesthetics of a modern home.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                We spent two years traveling the globe to partner with organic
                farmers and artisan craftsmen who share our "Elevated Play"
                philosophy. Every item in our store is vet-approved, toxin-free,
                and designed to thrive in your living space.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-primary font-bold text-headline-md mb-2">100%</p>
                  <p className="text-label-md uppercase tracking-widest text-on-surface-variant">
                    Organic Ingredients
                  </p>
                </div>
                <div>
                  <p className="text-primary font-bold text-headline-md mb-2">24/7</p>
                  <p className="text-label-md uppercase tracking-widest text-on-surface-variant">
                    Expert Support
                  </p>
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
