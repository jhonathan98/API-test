const express = require('express');
const router = express.Router();
const { getDataCountries, getFile, uploadFileBucket, GetAllTiketHubSpot } = require('../controllers/apiController');

router.get('/data/Countries', getDataCountries);
router.get('/data/file', getFile);
router.get('/data/bucket', uploadFileBucket);
router.get('/hubspot', GetAllTiketHubSpot);

module.exports = router;