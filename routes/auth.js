const express = require ('express');
const router = express.Router();
const {signup, login, passwordResetRequest, resetPassword} = require ('../controllers/authController');

router.post('/signup', signup)
router.post('/login', login)
router.get('forget-password', passwordResetRequest)
router.post('reset_password', resetPassword)

module.exports = router;