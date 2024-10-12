onst express = require('express');
const {
  promoteUser,
  demoteUser,
  deletePost,
  approvePost,
  rejectPost,
  updateSettings,
  getAnalytics,
  createAnnouncement,
} = require('../controllers/adminController');
const { verifyToken, authorizeRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.patch('/promote/:id', verifyToken, authorizeRole('admin'), promoteUser);
router.patch('/demote/:id', verifyToken, authorizeRole('admin'), demoteUser);
router.delete('/deletePost/:id', verifyToken, authorizeRole('admin'), deletePost);
router.patch('/approvePost/:id', verifyToken, authorizeRole('admin'), approvePost);
router.patch('/rejectPost/:id', verifyToken, authorizeRole('admin'), rejectPost);
router.patch('/settings', verifyToken, authorizeRole('admin'), updateSettings);
router.post('/announcement', verifyToken, authorizeRole('admin'), createAnnouncement);

module.exports = router;