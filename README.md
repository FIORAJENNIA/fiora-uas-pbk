# 📚 Aplikasi Manajemen Perpustakaan

Aplikasi web sederhana untuk mengelola data perpustakaan, seperti buku, anggota, dan transaksi peminjaman. Dibuat dengan **Vue 3**, **Pinia**, dan menggunakan **JSON Server** sebagai backend palsu (mock API).

## 🎨 Tema

Desain bertema **perpustakaan dengan warna pink**, bersih dan ringan.

---

## 🚀 Fitur

- **Dashboard**: Ringkasan informasi utama (bisa dikembangkan lebih lanjut).
- **Manajemen Buku**:
  - Tambah buku
  - Edit buku
  - Hapus buku
  - Lihat daftar buku
- **Manajemen Anggota**:
  - Tambah anggota
  - Lihat daftar anggota
- **Transaksi Peminjaman**:
  - Tambah peminjaman
  - Lihat daftar peminjaman
- **Laporan**:
  - Tampilkan riwayat peminjaman
  - Status pengembalian
- **Skeleton Loading** saat fetching data
- Unit Test untuk fitur hapus buku (Vitest)

---

## 📁 Struktur Folder

---

## 🔀 Routing

Berikut daftar halaman dan path-nya:

- **Dashboard:** `'/'` – Halaman utama ringkasan
- **Daftar Buku:** `'/buku'` – Menampilkan seluruh buku
- **Tambah Buku:** `'/buku/add'` – Form tambah buku
- **Edit Buku:** `'/buku/edit/:id'` – Edit data buku

- **Daftar Anggota:** `'/anggota'` – Menampilkan semua anggota
- **Tambah Anggota:** `'/anggota/add'` – Form tambah anggota

- **Daftar Peminjaman:** `'/peminjaman'` – Menampilkan semua transaksi
- **Tambah Peminjaman:** `'/peminjaman/add'` – Tambah transaksi peminjaman

- **Laporan:** `'/laporan'` – Menampilkan laporan peminjaman

---