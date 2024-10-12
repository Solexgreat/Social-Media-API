const express = require ('express');
const { createPost, updatePost, deletePost, getAllPost, getPostById } = require('../controllers/postController');
const {verifyToken} = require('../middlewares/authMiddlewares');
const router = express.Router();



router.post('/create-post', verifyToken, createPost);
router.put('/update-Post', verifyToken, updatePost);
router.delete('/delete-post', verifyToken, deletePost);
router.get('/', verifyToken, getAllPost);
router.get('/:id', verifyToken, getPostById);

module.exports = router;