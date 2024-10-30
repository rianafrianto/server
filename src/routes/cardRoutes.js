const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// Rute API
router.get('/cards', cardController.getAllCards);
router.post('/cards', cardController.addCard);
router.put('/cards/:id', cardController.updateCard);
router.delete('/cards/:id', cardController.deleteCard);

module.exports = router;
