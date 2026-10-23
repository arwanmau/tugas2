# Profil Muhammad Arwan Maulana

Halaman profil ini menggunakan Laravel 12, Blade, CSS, dan JavaScript.

## Persyaratan

- PHP 8.2 atau lebih baru dengan ekstensi yang dibutuhkan Laravel
- Composer

## Menjalankan secara lokal

1. Salin `.env.example` menjadi `.env` (PowerShell: `Copy-Item .env.example .env`).
2. Pasang dependensi dengan `composer install`.
3. Buat kunci aplikasi dengan `php artisan key:generate`.
4. Jalankan server pengembangan dengan `php artisan serve`.
5. Buka alamat yang ditampilkan (biasanya `http://localhost:8000`).

Web server harus menggunakan folder `public` sebagai document root. Jangan
mengekspos file proyek atau folder `vendor` ke web.

## Deployment

Deploy aplikasi ke hosting/server yang mendukung PHP 8.2+ dan Composer, lalu
arahkan document root ke folder `public`. GitHub Pages tidak dapat menjalankan
aplikasi Laravel/PHP; GitHub dapat menyimpan kode sumber, tetapi situsnya perlu
dihosting di server PHP.
