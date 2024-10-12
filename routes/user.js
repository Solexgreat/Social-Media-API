const express = require ('express');
const router = express.Router();
const { getUserProfile, getUserById, updateUser, deleteUser } = require ('../controllers/userController');
const authMiddlewares = require('../middlewares/authMiddlewares');
const authorzeRole = require('../middlewares/authMiddlewares');

router.get('/account-profile', authMiddlewares, getUserProfile)
router.get('/:id', authMiddlewares, getUserById)
router.put('/update-user', authMiddlewares, updateUser)
router.delete('/delete', authMiddlewares, authorzeRole('admin'), deleteUser)

module.exports = router;