# Registrasi Uang Sangu

Proyek ini adalah sebuah halaman web sederhana yang terdiri dari dua tab: `Registrasi` dan `List Pendaftar`. Pada tab `Registrasi`, pengguna dapat mendaftarkan data berupa nama, umur, dan uang sangu dengan validasi tertentu. Data yang valid akan ditambahkan ke tab `List Pendaftar`, yang menampilkan daftar pendaftar beserta resume rata-rata umur dan uang sangu.

## Fitur

1. **Validasi Form**:
   - Nama minimal 10 karakter.
   - Umur minimal 25 tahun.
   - Uang sangu minimal 100 ribu dan maksimal 1 juta.

2. **Penambahan Data Pendaftar**:
   - Data yang valid akan disimpan dalam tabel pendaftar.

3. **Resume Data**:
   - Menampilkan rata-rata uang sangu dan rata-rata umur dari semua pendaftar.

4. **Hapus Data**:
   - Setiap pendaftar memiliki tombol untuk menghapus data dari daftar.

## Teknologi yang Digunakan

- **HTML**: Untuk struktur halaman.
- **CSS**: Menggunakan [Bootstrap](https://getbootstrap.com/) untuk styling.
- **JavaScript**: Untuk logika validasi, penambahan, dan penghapusan data pendaftar.

## Cara Menggunakan

1. **Clone Repository**:
   ```
   git clone [https://github.com/aqshalibrahim/homework.git]
   ```
2. **Buka File `index.html`** di browser.
3. **Tab Registrasi**:
   - Masukkan Nama, Umur, dan Uang Sangu sesuai validasi yang telah ditentukan.
   - Klik tombol `Submit` untuk menambahkan data pendaftar.
4. **Tab List Pendaftar**:
   - Lihat daftar pendaftar yang telah didaftarkan.
   - Rata-rata uang sangu dan umur akan otomatis terupdate setiap kali ada penambahan atau penghapusan data.
   - Klik tombol `Hapus` untuk menghapus data pendaftar.

## Struktur Proyek

```
├── index.html       # File utama HTML
├── script.js        # JavaScript untuk logika form dan tabel
└── README.md        # File dokumentasi ini
```

## Contoh Tampilan

### Tab Registrasi


### Tab List Pendaftar


## Catatan Pengembangan

- **Konsep OOP dan Asynchronous**: 
  - Kode ini menggunakan konsep OOP untuk pengelolaan data pendaftar dan metode asynchronous (`setTimeout` atau `Promise`) dapat digunakan untuk proses simulasi seperti pengambilan data dari server.
- **Framework CSS**: 
  - Menggunakan Bootstrap untuk mempercantik tampilan form dan tabel.

## Cara Kontribusi

1. Fork repository ini.
2. Buat branch fitur baru (`feature/fitur-baru`).
3. Lakukan perubahan yang diperlukan.
4. Push ke branch baru (`feature/fitur-baru`).
5. Buat Pull Request ke branch `main` repository ini.


## Kontak

Untuk informasi lebih lanjut atau pertanyaan, silakan hubungi [aqshalibrahim27@gmail.com](aqshalibrahim27@gmail.com).
