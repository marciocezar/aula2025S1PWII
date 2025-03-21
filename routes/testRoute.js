const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.get('/test', testController.testeGet);
router.get('/check', testController.validarGet);

router.post('/test', testController.testePost);
router.post('/check', testController.validarPost);

module.exports = router;

