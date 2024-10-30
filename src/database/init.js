const db = require('../config/db');

// Buat tabel 'cards' jika belum ada
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

db.query(createTableQuery, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table "cards" created or already exists.');
  }
  
  // Tutup koneksi setelah selesai
  db.end();
});
