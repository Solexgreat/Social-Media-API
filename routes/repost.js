const express = require ('express');
const { repost, updateRepost, getYourRepost, getRepostForPost } = require('../controllers/repostController');
const {verifyToken} = require('../middlewares/authMiddlewares');
const router = express.Router();


router.post('/:postId/repost', verifyToken, repost);
router.put('/:repostId/quote', verifyToken, updateRepost);
router.get('/getYourRepost', verifyToken, getYourRepost);
router.get('/getRepostForPost', verifyToken, getRepostForPost);

module.exports = router;