# dental-klinik

Website profil klinik gigi modern & responsif berbasis **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, dan **shadcn/ui**. Dilengkapi dengan mesin personalisasi dinamis via URL query parameter untuk pitching demo website ke ratusan klinik secara instan.

## 🚀 Fitur Utama

- **Personalisasi Dinamis via Query Parameter**:
  - Ganti nama klinik (`clinic`), kota (`kota`), rating Google (`rating`), jumlah ulasan (`ulasan`), nama dokter (`dr`), nomor WhatsApp (`wa`), alamat (`alamat`), dan WhatsApp developer (`mywa`) secara real-time langsung dari URL tanpa reload atau edit kodingan.
- **Koneksi WhatsApp Pasien & Booking Interaktif**:
  - Reservasi jadwal langsung terhubung ke WhatsApp klinik dengan draf pesan otomatis rapi.
- **VIP Pitch Banner**:
  - Banner sticky untuk owner klinik yang memungkinkan klaim website langsung ke WhatsApp developer.
- **100% Bahasa Indonesia**:
  - Menggunakan terminologi medis kedokteran gigi standar Indonesia dengan katalog harga (IDR).
- **Halaman Lengkap**:
  - **Beranda (`/`)**: Hero, statistik klinik, daftar layanan utama, alasan memilih, ulasan pasien, dan CTA.
  - **Layanan (`/services`)**: Katalog 5 kategori perawatan gigi lengkap dengan durasi dan estimasi biaya.
  - **Tentang Kami (`/about`)**: Tim dokter spesialis, filosofi medis, dan jejak langkah.
  - **Kontak & Lokasi (`/contact`)**: Formulir booking jadwal, jam praktek operasional, alamat, dan FAQ.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ⚡ Contoh Penggunaan URL Dinamis

```
https://domain-kamu.vercel.app/?clinic=Kamelia+Dental+Care&kota=Jakarta+Selatan&rating=5.0&ulasan=239&wa=6281290909990&mywa=6281234567890
```

## 📦 Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🌐 Deploy ke Vercel

```bash
npx vercel
```
