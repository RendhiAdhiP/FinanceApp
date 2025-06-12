# Finance App

Finance App adalah aplikasi manajemen keuangan berbasis web yang dibuat menggunakan teknologi Vue.js, Tailwind CSS, Shadcn Vue, dan ApexCharts. Aplikasi ini dikembangkan penulis sebagai tugas latihan Front-End saat magang untuk mengasah kemampuan coding. Tampilan antarmuka aplikasi dirancang responsif sehingga dapat digunakan dengan baik pada berbagai perangkat (desktop maupun mobile).

## Fitur Utama

- **Dashboard**: Menampilkan ringkasan keuangan pengguna, meliputi komponen **"Saldo Saya"**, **"Transaksi Terbaru"**, **"Ringkasan Pengeluaran"**, **"Kartu Saya"**, dan *Ikhtisar Anggaran* dengan grafik perbandingan pendapatan dan pengeluaran.
- **Saldo (Balance)**: Menampilkan daftar saldo yang dimiliki pengguna dalam berbagai mata uang (misalnya USD, IDR, dll). Pengguna dapat menambah atau memilih jenis saldo sesuai kebutuhan.
- **Kartu (Cards)**: Menampilkan daftar kartu milik pengguna, misalnya kartu debit atau kredit. Pengguna dapat melihat informasi kartu dan menambah kartu baru.
- **Transaksi (Transactions)**: Menampilkan riwayat transaksi keuangan pengguna. Pengguna dapat melihat detail pemasukan dan pengeluaran dari berbagai transaksi yang tercatat.
- **Penerima (Recipients)**: Menampilkan daftar penerima transaksi atau transfer yang tersimpan (misalnya kontak penerima pembayaran). Fitur ini memudahkan pengguna memilih penerima saat melakukan transaksi.
- **Integrasi (Integrations)**: Halaman pengaturan untuk menghubungkan aplikasi dengan layanan eksternal (misalnya integrasi dengan Google Drive). Pengguna dapat mengelola koneksi layanan tambahan di sini.
- **Pengaturan (Settings)**: Halaman pengaturan umum aplikasi, seperti pengaturan profil pengguna dan preferensi tampilan aplikasi.

## Teknologi

Aplikasi ini dibangun menggunakan beberapa teknologi modern:

- **Vue.js**: framework JavaScript progresif untuk membangun antarmuka pengguna (UI). Vue.js memudahkan pembuatan komponen-komponen dinamis dalam aplikasi web.
- **Tailwind CSS**: framework CSS *utility-first* yang memudahkan proses styling antarmuka dengan kelas-kelas siap pakai. Tailwind memungkinkan pembuatan desain yang responsif dan konsisten.
- **Shadcn Vue**: pustaka komponen antarmuka berbasis Tailwind CSS yang menyediakan komponen-komponen modern siap pakai untuk mempercepat pengembangan UI.
- **ApexCharts**: pustaka grafik (chart) modern untuk membuat visualisasi data interaktif yang menarik. ApexCharts digunakan untuk menampilkan grafik pendapatan dan pengeluaran pada halaman Dashboard.
- **Vite**: build tool dan bundler modern untuk proyek Vue.js. Vite menyediakan server pengembangan cepat dan proses build yang efisien.

## Cara Menjalankan

Untuk menjalankan aplikasi Finance App secara lokal, ikuti langkah-langkah berikut:

1. Pastikan **Node.js** dan **npm** sudah terpasang di komputer Anda.
2. Clone repository ini ke lokal:
   ```bash
   git clone https://github.com/RendhiAdhiP/FinanceApp.git
   ```
3. Masuk ke direktori proyek:
   ```bash
   cd FinanceApp
   ```
4. Install dependensi yang diperlukan:
   ```bash
   npm install
   ```
5. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
6. Buka browser dan akses alamat yang muncul di terminal (biasanya `http://localhost:5173`) untuk melihat aplikasi Finance App berjalan secara lokal.

## Tautan

- **Demo Aplikasi**: [financemanagement-app.vercel.app](https://financemanagement-app.vercel.app/dashboard)
- **Repository GitHub**: [RendhiAdhiP/FinanceApp](https://github.com/RendhiAdhiP/FinanceApp)

