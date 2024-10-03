const express = require ('express');
const { createPost, updatePost, deletePost, getAllPost, getPostById } = require('../controller/postController');
const router = express.Router();



router.post('/Post', createPost);
router.put('/update-Post', updatePost);
router.delete('/delete-post', deletePost);
router.get('/', getAllPost);
router.get('/:id', getPostById);

module.exports = router;