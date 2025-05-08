const express = require('express');
const { predictHousePrice } = require('../controllers/predictionController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.post('/predictHousePrice',verifyToken, predictHousePrice);

module.exports = router;
