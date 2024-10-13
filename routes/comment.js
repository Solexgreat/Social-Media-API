const express = require ('express');
const {updateComment, deleteComment, getComment, createComment } = require('../controllers/commentController');
const {verifyToken} = require('../middlewares/authMiddlewares');
const router = express.Router();


router.patch('/edit-comment/:commentId', verifyToken, updateComment);
router.post('/comment/:postId', verifyToken, createComment);
router.delete('/delete-comment/:commentId', verifyToken, deleteComment);
router.get('/', verifyToken, getComment);

module.exports = router;