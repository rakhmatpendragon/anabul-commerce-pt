# Planning Implementasi Frontend (Presentation Tier) - Anabul E-Commerce

Dokumen ini berisi panduan tingkat tinggi (high-level planning) untuk mengimplementasikan Presentation Tier (Frontend) dari aplikasi Anabul E-Commerce menggunakan React, TypeScript, dan Bun. Rencana ini mengacu pada desain yang ada di folder `stitch_anabul_cat_shop`.

---

## 1. Inisialisasi Proyek & Dependencies

Gunakan **Bun** sebagai package manager dan runner untuk mempercepat performa pengembangan.

### Langkah Inisialisasi:
1. Jalankan inisialisasi React + TypeScript menggunakan Vite:
   ```bash
   bun create vite . --template react-ts
   ```
2. Instal pustaka-pustaka dependensi berikut:
   - **State & Data Fetching**:
     - `@reduxjs/toolkit` dan `react-redux` (Untuk global state seperti keranjang belanja, sesi autentikasi/JWT, dan preferensi UI global).
     - `@tanstack/react-query` (React Query) dan `@tanstack/react-query-devtools` (Untuk sinkronisasi, caching data dari backend Java Spring Boot, dan optimalisasi pemuatan katalog).
   - **Navigasi**:
     - `react-router-dom` (Mengelola navigasi multi-halaman client-side).
   - **Komunikasi API**:
     - `axios` (Client HTTP untuk berkomunikasi dengan API backend Spring Boot dan menangani interceptor JWT).
   - **UI Components & Styling**:
     - `tailwindcss`, `postcss`, `autoprefixer` (Framework CSS utility-first untuk menyusun layout responsif sesuai design system).
     - `@mui/material`, `@emotion/react`, `@emotion/styled`, `@mui/icons-material` (Menyediakan komponen berbasis Google Material Design seperti dialog box, dropdown modal, forms, dan layout grid).
   - **Form Handling & Validasi**:
     - `formik` dan `yup` (Menangani manajemen state formulir kompleks dan validasi skema real-time, seperti pada registrasi/login dan halaman checkout).

---

## 2. Implementasi Design System & Styling

Konfigurasikan visual aplikasi agar sesuai dengan panduan di `stitch_anabul_cat_shop/anabul_design_system/DESIGN.md`:

### Tailwind CSS (`tailwind.config.js`):
- **Warna**: Masukkan palette warna berikut:
  - `primary` (Terracotta/Soft Coral): `#9f402d`
  - `secondary` (Sage Green): `#4a654e`
  - `background` / `surface` (Creamy Off-White): `#fcf9f8`
  - `on-surface` (Charcoal): `#1b1c1c`
- **Typography**:
  - `fontFamily`: Gunakan `Quicksand` untuk headlines/judul, dan `Plus Jakarta Sans` untuk body copy serta teks UI.
- **Borders & Spacing**:
  - Terapkan `borderRadius` default `0.5rem` (8px) untuk tombol dan input, serta `1rem` (16px) untuk card dan container utama.

### Material UI Theme Integration:
- Buat custom theme MUI menggunakan `createTheme` yang menyelaraskan palette warna, font-family (`Quicksand` & `Plus Jakarta Sans`), dan border-radius dari konfigurasi Tailwind. Gunakan `ThemeProvider` di tingkat root aplikasi (`main.tsx`).

---

## 3. Arsitektur Folder & Struktur Kode

Gunakan pendekatan *Layered/Feature-based Architecture* yang rapi:

```text
src/
├── assets/             # Aset statis seperti logo, placeholder gambar kucing
├── components/         # Komponen reusable global (Navbar, Footer, Button, Card, Input)
├── context/            # Context tambahan (jika diperlukan diluar Redux)
├── features/           # Pembagian kode berdasarkan modul fungsional
│   ├── auth/           # Login, Register, Profile (Formik + Yup)
│   ├── products/       # Katalog, pencarian, detail produk
│   ├── auctions/       # Live bidding, timer lelang
│   └── cart/           # Manajemen keranjang belanja
├── hooks/              # Custom React Hooks (misal: query hooks untuk TanStack Query)
├── pages/              # Halaman-halaman utama (mengacu pada mockup stitch)
├── routes/             # Definisi rute navigasi (React Router DOM)
├── services/           # Konfigurasi Axios instance & API client
└── store/              # Konfigurasi Redux Toolkit (store, slices)
```

---

## 4. Rencana Halaman & Komponen (Mockup Reference)

Bangun rute dan halaman berdasarkan visual dan kode HTML yang disediakan di folder `stitch_anabul_cat_shop`:

1. **Homepage (`/` - `anabul_homepage`)**:
   - Tampilan hero section bernuansa hangat dengan Quicksand typography.
   - Highlight produk unggulan, kategori kucing, dan sekilas info lelang aktif.
2. **Shop All (`/shop` - `shop_all_anabul`)**:
   - Grid produk makanan, aksesoris, dan kebutuhan kucing.
   - Fitur filter kategori dan pengurutan harga/popularitas.
3. **Available Cats (`/cats` - `available_cats_buy_now_anabul`)**:
   - Galeri kucing yang siap diadopsi/dibeli langsung.
   - Detail ringkas status vaksinasi, usia, dan ras.
4. **Live Cat Auctions (`/auctions` - `live_cat_auctions_anabul`)**:
   - Daftar lelang kucing yang sedang berjalan (real-time).
   - Indikator timer hitung mundur dan penawaran harga tertinggi saat ini.
5. **Product/Cat Detail (`/cats/:id` - `meet_luna_british_shorthair_anabul`)**:
   - Halaman detail profil kucing (contoh: Luna).
   - Tampilan gambar multi-angle, detail karakteristik, dokumen kesehatan, dan tombol CTA ("Buy Now" atau "Place Bid").
6. **Shopping Cart (`/cart` - `your_cart_anabul`)**:
   - Rincian item yang akan dibeli, perubahan kuantitas, ringkasan harga, serta CTA ke formulir pengiriman & pembayaran.

---

## 5. Alur Data & State Management (High Level)

### A. Komunikasi API (Axios + TanStack Query)
- Konfigurasikan instance Axios dengan base URL menunjuk ke backend Java Spring Boot.
- Tambahkan Request Interceptor untuk melampirkan JWT token di header `Authorization: Bearer <token>` secara otomatis dari Redux state jika user sudah login.
- Kelola GET request (seperti daftar kucing, profil produk, dan detail lelang) menggunakan **TanStack Query** (`useQuery`). Manfaatkan caching bawaan agar perpindahan halaman terasa instan bagi pengguna.
- Kelola POST/PUT/DELETE request (seperti checkout, login, place bid) menggunakan `useMutation`.

### B. Global State (Redux Toolkit)
- **Auth Slice**: Menyimpan status login, data user profil, dan JWT token.
- **Cart Slice**: Menyimpan daftar item belanja beserta kuantitasnya. Sinkronkan state ini dengan `localStorage` agar isi keranjang tidak hilang saat halaman di-refresh.
- **UI Slice**: Mengelola state UI global (seperti status drawer cart, notifikasi toast, atau dialog login).

### C. Validasi Form (Formik + Yup)
- Gunakan Formik untuk mengikat state input pada form pendaftaran, login, dan form pengisian alamat pengiriman pada saat checkout.
- Terapkan validasi schema Yup (misalnya: format email valid, password minimal 8 karakter, alamat pengiriman wajib diisi) untuk memberikan feedback error real-time sebelum data dikirim ke server.

---

## 6. Integrasi Presentation & Business Layer

- **Protokol Komunikasi**: Frontend berkomunikasi dengan Backend Java Spring Boot via RESTful API JSON.
- **Pintu Gerbang Keamanan**: Endpoint publik (katalog produk, daftar lelang) dapat diakses tanpa token, sedangkan endpoint privat (keranjang belanja, submit bid, checkout) wajib menyertakan JWT token.
- **Penanganan Error**: Buat Response Interceptor di Axios untuk mendeteksi error HTTP (misal: token kedaluwarsa/401, akses ditolak/403) dan arahkan user kembali ke halaman login atau tampilkan notifikasi toast yang informatif.
