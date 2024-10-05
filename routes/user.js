const express = require ('express');
const router = express.Router();
const { getUsers, getUserById, updateUser, deleteUser } = require ('../controller/userController');

router.get('/', getUsers)
router.get('/:id', getUserById)
router.put('update-user', updateUser)
router.delete('delete', deleteUser)

module.exports = router;