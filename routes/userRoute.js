const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/users', authenticateToken, userController.listUsersGet);
router.get('/user/:id', authenticateToken,userController.listUserGet);
router.patch('/user/:id/activate', authenticateToken, userController.activateUser);
router.patch('/user/:id/deactivate', authenticateToken, userController.deactivateUser);
router.patch('/user/:id/password', authenticateToken, userController.updatePassword);
router.patch('/user/:id/update', authenticateToken, userController.updateUser);

module.exports = router;