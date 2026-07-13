# Bali Moto Rent — Next.js App Router

Modern minimalist website rental motor di Bali, dibangun dengan Next.js 15 (App Router), React 19, dan Tailwind CSS v4.

## Setup

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Struktur

- `app/` — App Router pages (Home, Motor list, Motor detail, Tentang, Kontak)
- `components/site/` — Navbar, Footer, MotorCard, WhatsAppFloat
- `data/motors.ts` — Katalog motor
- `lib/site.ts` — Konfigurasi brand & WhatsApp
- `public/` — Gambar motor dan hero

## Konfigurasi

Edit `lib/site.ts` untuk mengganti nomor WhatsApp, alamat, email, dan jam operasional.
