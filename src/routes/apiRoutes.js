const express = require('express');
const router = express.Router();
const { getDataCountries } = require('../controllers/apiController');

router.get('/data/Countries', getDataCountries);

module.exports = router;