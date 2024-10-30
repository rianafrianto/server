const db = require('../config/db');

const Card = {
  getAllCards: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM cards ORDER BY created_at DESC';
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  addCard: (title, description) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO cards (title, description) VALUES (?, ?)';
      db.query(query, [title, description], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateCard: (id, title, description) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM cards WHERE id = ?', [id], (err, results) => {
        if (err) return reject(err);
        const cardToUpdate = results[0];

        if (!cardToUpdate) {
          return reject(new Error('Card not found'));
        }

        const query = `
          UPDATE cards 
          SET title = ?, description = ? 
          WHERE id = ?`;
        
        db.query(query, [title, description, id], (err) => {
          if (err) return reject(err);
          resolve({ id, title, description }); 
        });
      });
    });
  },
  

  deleteCard: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM cards WHERE id = ?', [id], (err, results) => {
        if (err) return reject(err);
        const cardToDelete = results[0];

        if (!cardToDelete) {
          return reject(new Error('Card not found'));
        }

        const query = 'DELETE FROM cards WHERE id = ?';
        db.query(query, [id], (err) => {
          if (err) return reject(err);
          resolve(cardToDelete);
        });
      });
    });
  },
};

module.exports = Card;
