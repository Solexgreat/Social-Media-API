const express = require ('express');
const router = express.Router();
const {signup, login, passwordResetRequest, resetPassword} = require ('../controllers/authController');
const verifyToken = require('../middlewares/authMiddlewares');


router.post('/signup', signup)
router.post('/login', login)
router.get('forget-password', verifyToken, passwordResetRequest)
router.post('reset_password', verifyToken, resetPassword)

module.exports = router;