const express = require('express');
const router = express.Router();
const rule1Ctrl = require('../controllers/rule1');

// Get
router.get('/', rule1Ctrl.index);

module.exports = router;
