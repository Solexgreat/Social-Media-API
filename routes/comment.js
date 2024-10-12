const express = require ('express');
const {updateComment, deleteComment, getComment, createComment } = require('../controllers/commentController');
const {verifyToken} = require('../middlewares/authMiddlewares');
const router = express.Router();


router.put('/edit-comment', verifyToken, updateComment);
router.post('/comment', verifyToken, createComment);
router.delete('/delete-comment', verifyToken, deleteComment);
router.get('/', verifyToken, getComment);

module.exports = router;