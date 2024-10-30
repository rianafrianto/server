Panduan Menjalankan Aplikasi Backend Content Management Platform

1. Prasyarat
    Sebelum memulai, pastikan Anda memiliki hal berikut:
   - Node.js(Minimal v18)
   - MySQL: Anda memerlukan MySQL terinstal di sistem Anda. Jika Anda tidak memiliki MySQL anda bisa menggunakan DBeaver.
   - DBeaver atau alat pengelolaan database lainnya: Untuk mengelola database MySQL.
     
2. Clone Repositori
   Buka terminal dan jalankan perintah berikut untuk meng-clone repositori backend:
   - git clone <URL_REPOSITORI_BACKEND>
   - cd backend
     
4. Setelah masuk ke folder backend, jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
   - npm install
  
5. Buat Database MySQL baru dengan nama yang sesuai, misalnya content_management, menggunakan DBeaver atau melalui command line MySQL:
   - CREATE DATABASE content_management;
     
6. Buat file .env di dalam folder backend dan tambahkan konfigurasi berikut:
   - DB_HOST=localhost
   - DB_USER=root
   - DB_PASSWORD=your_password
   - DB_NAME=content_management
   - GEMINIAI_API_KEY=your_gemini_api_key
     
   Gantilah your_password dengan kata sandi yang sesuai untuk user MySQL Anda dan your_gemini_api_key dengan key API yang Anda dapatkan dari Google AI.
   Untuk mendapatkan key API, tutorialnya bisa mengikuti link berikut : https://www.youtube.com/watch?v=6aj5a7qGcb4&ab_channel=AiDeveloper

7. Inisialisasi Database,
   Jalankan perintah berikut untuk inisialisasi tabel yang diperlukan dalam database:
   - npm run init-db

8. Jalankan Server,
   Setelah semua langkah di atas selesai, jalankan server dengan perintah berikut:
   - npm run dev / npm start
   - Server akan berjalan di http://localhost:3000

9. Pengujian API,
Setelah server berjalan, Anda dapat menguji API dengan menggunakan aplikasi seperti Postman atau thunderclient. Berikut adalah beberapa endpoint yang dapat Anda coba:

Endpoint: GET http://localhost:3000/api/cards

Apabila berhasil, maka muncul respon seperti ini :

{
  "success": true,
  "message": "Get All Card Successfully",
  "data": []
}

Setelah setup backend berhasil, selanjutnya setup frontend.
   
