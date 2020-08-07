const express = require('express');
const router = express.Router();
const rule3Ctrl = require('../controllers/rule3');

// Get
router.get('/', rule3Ctrl.index);

module.exports = router;
