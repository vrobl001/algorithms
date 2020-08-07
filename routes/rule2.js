const express = require('express');
const router = express.Router();
const rule2Ctrl = require('../controllers/rule2');

// Get
router.get('/', rule2Ctrl.index);

module.exports = router;
