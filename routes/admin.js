const express = require('express');
const {
  promoteUser,
  demoteUser,
  deletePost,
  approvePost,
  rejectPost,
  updateSettings,
  createAnnouncement,
	deleteUser,
} = require('../controllers/adminController');
const { verifyToken, authorizeRole } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.patch('/promote/:id', verifyToken, authorizeRole('admin'), promoteUser);
router.patch('/demote/:id', verifyToken, authorizeRole('admin'), demoteUser);
router.delete('/deletePost/:id', verifyToken, authorizeRole('admin'), deletePost);
router.patch('/approvePost/:id', verifyToken, authorizeRole('admin'), approvePost);
router.patch('/rejectPost/:id', verifyToken, authorizeRole('admin'), rejectPost);
router.patch('/settings', verifyToken, authorizeRole('admin'), updateSettings);
router.post('/announcement', verifyToken, authorizeRole('admin'), createAnnouncement);
router.delete('/delete', verifyToken, authorizeRole('admin'), deleteUser)

module.exports = router;