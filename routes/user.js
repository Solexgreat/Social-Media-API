const express = require ('express');
const router = express.Router();
const { getUserProfile, getUserById, updateUser } = require ('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');


router.get('/account-profile', verifyToken, getUserProfile)
router.get('/:id', verifyToken, getUserById)
router.put('/update-user', verifyToken, updateUser)

module.exports = router;