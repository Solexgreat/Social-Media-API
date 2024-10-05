const express = require ('express');
const { repost, updateRepost, getYourRepost, getRepostForPost } = require('../controller/repostController');
const authMiddlewares = require('../middlewares/authMiddlewares');
const router = express.Router();


router.post('/:id/repost', authMiddlewares, repost);
router.put('/:id/quote', authMiddlewares, updateRepost);
router.get('/getYourRepost', authMiddlewares, getYourRepost);
router.get('/getRepostForPost', authMiddlewares, getRepostForPost);

module.exports = router;