const express = require('express');
const router = express.Router();
const { getDataCountries, getFile } = require('../controllers/apiController');

router.get('/data/Countries', getDataCountries);
router.get('/data/file', getFile);

module.exports = router;