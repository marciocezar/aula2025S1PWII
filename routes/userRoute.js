const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/listusers', userController.listUsersGet);
router.get('/listuser/:id', userController.listUserGet);

module.exports = router;


