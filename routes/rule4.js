const express = require('express');
const router = express.Router();
const rule4Ctrl = require('../controllers/rule4');

// Get
router.get('/', rule4Ctrl.index);

module.exports = router;
