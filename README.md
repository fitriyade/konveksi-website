# Ratu Jahit – Website Konveksi

## Deskripsi Project
Ratu Jahit adalah website konveksi yang dibuat menggunakan React. Website ini memiliki landing page yang berisi informasi tentang perusahaan dan overview portfolio, serta dashboard admin yang digunakan untuk mengelola data produk.
Dashboard admin sudah terintegrasi dengan API yang dibuat menggunakan MockApi dan mendukung fitur CRUD (Create, Read, Update, Delete).


## Fitur Utama
- Landing page informasi perusahaan
- Overview portfolio produk
- Dashboard admin
- CRUD data produk
- Integrasi API MockAPI

## Teknologi yang Digunakan
- React
- TypeScript
- Tailwind CSS
- React Router
- MockAPI

## API Endpoint
Project ini menggunakan API dari MockAPI untuk mengelola data produk.
- Base URL:
https://mockapi.io/api/v1/products

- Endpoint yang digunakan:
   - GET /products        Menampilkan semua produk
   - GET /products/:id    Menampilkan detail produk
   - POST /products       Menambahkan produk baru
   - PUT /products/:id    Mengupdate data produk
   - DELETE /products/:id Menghapus produk

API ini digunakan pada dashboard admin untuk menjalankan fitur CRUD produk.

## Penggunaan AI Tools
Dalam pengembangan project ini, saya menggunakan AI tools yaitu Antigravity untuk membantu membuat struktur komponen, fungsi CRUD, serta membantu debugging ketika terjadi error.

## Contoh Prompt
Buatkan fungsi CRUD produk pada React yang terhubung dengan API dari MockAPI dan tampilkan data dalam bentuk tabel.

## Review dan Evaluasi Kode dari AI
Kode yang dihasilkan AI digunakan sebagai dasar pengembangan, kemudian saya melakukan beberapa penyesuaian, seperti:
- Menambahkan validasi input pada form produk
- Memperbaiki struktur kode agar lebih rapi dan mudah dipahami
- Menambahkan error handling pada proses pengambilan data dari API

