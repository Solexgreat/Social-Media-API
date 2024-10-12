const express = require ('express');
const { createPost, updatePost, deletePost, getAllPost, getPostById } = require('../controllers/postController');
const authMiddlewares = require('../middlewares/authMiddlewares');
const router = express.Router();



router.post('/Post', authMiddlewares, createPost);
router.put('/update-Post', authMiddlewares, updatePost);
router.delete('/delete-post', authMiddlewares, deletePost);
router.get('/', authMiddlewares, getAllPost);
router.get('/:id', authMiddlewares, getPostById);

module.exports = router;