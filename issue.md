# Perencanaan Implementasi Halaman Available Cats (Adopsi/Beli Langsung) - Anabul E-Commerce

Tugas ini adalah mengimplementasikan halaman daftar kucing yang tersedia untuk dibeli secara langsung dari mockup HTML (`stitch_anabul_cat_shop/available_cats_buy_now_anabul/code.html`) ke dalam komponen React TypeScript (`src/pages/AvailableCats.tsx`).

Dokumen ini ditujukan bagi junior programmer atau model AI untuk mempermudah pengerjaan langkah demi langkah.

---

## 1. Analisis & Pembagian Komponen

Untuk mempermudah pemeliharaan kode dan menggunakan kembali komponen yang sudah ada:

1. **`Navbar` (`src/components/Navbar.tsx`)**:
   - Gunakan komponen global `Navbar` yang telah diimplementasikan sebelumnya di bagian paling atas halaman.
2. **`Footer` (`src/components/Footer.tsx`)**:
   - Gunakan komponen global `Footer` di bagian paling bawah halaman.
3. **`CompanionCard` (`src/components/CompanionCard.tsx`)**:
   - Komponen kartu untuk setiap kucing. Ini mirip dengan `ProductCard` namun memiliki struktur dan detail data yang berbeda (seperti jenis kelamin/gender, usia dalam minggu, dan tombol wishlist/favorite).
4. **`AvailableCats` (`src/pages/AvailableCats.tsx`)**:
   - Komponen halaman utama yang menampung filter bar, grid kucing (`CompanionCard`), pagination, dan trust/quality section (bento style).

---

## 2. Langkah-Langkah Implementasi Kode

Ikuti instruksi berikut untuk mengimplementasikan fitur ini:

### Langkah 1: Buat Tipe Data & Komponen `CompanionCard.tsx`
- Buat file `src/components/CompanionCard.tsx`.
- Definisikan interface `Companion`:
  ```typescript
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
  ```
- Salin struktur HTML kartu kucing dari mockup (contoh: Baris 197-227).
- Ubah class menjadi JSX (`className`).
- Konversikan ikon dan gaya style:
  - Tombol favorite (hati): Gunakan Google Material Symbols Outlined `<span className="material-symbols-outlined">favorite</span>`.
  - Simbol gender: Gunakan ikon `female` untuk perempuan dan `male` untuk laki-laki berdasarkan nilai properti `gender`.
  - Format harga: Tampilkan harga dengan format currency. Contoh: `${companion.price.toLocaleString()}`.
- Tambahkan handler sederhana pada tombol **Buy Now** (misalnya memicu log konsol atau integrasi keranjang di masa depan).

### Langkah 2: Buat Halaman `AvailableCats.tsx`
- Buka file `src/pages/AvailableCats.tsx` yang sebelumnya berupa placeholder.
- Impor `Navbar` dan `Footer` global.
- Deklarasikan array data statis berisi 8 kucing dari mockup:
  1. Luna - British Shorthair ($1,200, 14 Weeks, Female, Vet-Approved badge)
  2. Oliver - Persian ($1,500, 12 Weeks, Male, Popular badge)
  3. Atlas - Maine Coon ($1,800, 16 Weeks, Male, Premium badge)
  4. Bella - Siamese ($950, 10 Weeks, Female)
  5. Misty - Ragdoll ($1,600, 15 Weeks, Female, Socialized badge)
  6. Pippin - Scottish Fold ($1,400, 9 Weeks, Male)
  7. Leo - Bengal ($2,200, 18 Weeks, Male, Rare Pattern badge)
  8. Mochi - Munchkin ($1,350, 11 Weeks, Female)
- Salin struktur filter bar, grid produk, pagination, dan trust/quality section dari `<main>` di `code.html`.
- Konversikan class menjadi `className`, tutup tag `<img>` dan `<input />` secara mandiri.

### Langkah 3: Implementasikan Logika Interaksi Sederhana (State & Interaktivitas)
- **Filter Dropdown**:
  - Untuk Breed, Age, dan Gender, buat state lokal jika ingin mensimulasikan filter (misalnya `const [genderFilter, setGenderFilter] = useState<string | null>(null)`).
  - Tampilkan data yang ter-filter di dalam grid menggunakan metode `.filter()` pada array kucing sebelum melakukan `.map()`.
- **Wishlist/Favorite State**:
  - Terapkan state lokal dalam `CompanionCard` untuk mendeteksi apakah kartu tersebut masuk wishlist atau tidak (`const [isFavorite, setIsFavorite] = useState(false)`), dan ubah visual tombol hati (misalnya mengisi warna merah/terracotta saat aktif).
- **Sticky Filter Bar**:
  - Filter bar memiliki class `sticky top-20 z-40`. Pastikan elemen pembungkus di atasnya tidak menghalangi posisi sticky dan tinggi navigasi header terhitung dengan benar (header berada di `fixed top-0` dengan tinggi sekitar `pt-24` di elemen main).

### Langkah 4: Rute & Navigasi
- Pastikan halaman terhubung dengan benar di `src/routes/AppRoutes.tsx` ke path `/cats`.
- Perbarui tautan "Companions" di komponen `Navbar.tsx` agar menggunakan `<Link to="/cats">` sehingga pengguna dapat berpindah halaman tanpa memuat ulang browser.

---

## 3. Hasil Akhir yang Diharapkan
- Tampilan list kucing yang responsif di segala ukuran layar.
- Transisi hover yang mulus pada kartu kucing (`hover:-translate-y-2` dan efek zoom gambar `group-hover:scale-105`).
- Komponen menggunakan Google Fonts (`Quicksand` dan `Plus Jakarta Sans`) serta ikon `Material Symbols Outlined` yang diwarisi dari `index.html`.
