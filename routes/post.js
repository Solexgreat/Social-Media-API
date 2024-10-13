const express = require ('express');
const router = express.Router();
const { createPost, updatePost, deletePost, getAllPost, getPostById } = require('../controllers/postController');
const {verifyToken} = require('../middlewares/authMiddlewares');



router.post('/create-post', verifyToken, createPost);
router.put('/update-post/:postId', verifyToken, updatePost);
router.delete('/delete-post/:postId', verifyToken, deletePost);
router.get('/', verifyToken, getAllPost);
router.get('/:postid', verifyToken, getPostById);

module.exports = router;