const express = require ('express');
const { createComment, updateComment, deleteComment, getComment } = require('../controllers/commentController');
const authMiddlewares = require('../middlewares/authMiddlewares');
const router = express.Router();


router.post('/comment', authMiddlewares, createComment);
router.put('/edit-comment', authMiddlewares, updateComment);
router.delete('/delete-comment', authMiddlewares, deleteComment);
router.get('/', authMiddlewares, getComment);

module.exports = router;