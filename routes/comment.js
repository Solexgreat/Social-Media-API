const express = require ('express');
const { createComment, updateComment, deleteComment, getComment } = require('../controllers/commentController');
const {verifyToken} = require('../middlewares/authMiddlewares');
const router = express.Router();


router.post('/comment', verifyToken, createComment);
router.put('/edit-comment', verifyToken, updateComment);
router.delete('/delete-comment', verifyToken, deleteComment);
router.get('/', verifyToken, getComment);

module.exports = router;