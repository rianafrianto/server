const express = require('express');
const { generateContent } = require('../controllers/contentController');
const router = express.Router();

// Endpoint untuk AI content generation
router.post('/generate-content', generateContent);

module.exports = router;
