const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const upload = require('../middleware/uploadMiddleware');

router.post('/login', authController.login);
router.post('/register', upload.single('profileImage'), authController.register);

module.exports = router;
