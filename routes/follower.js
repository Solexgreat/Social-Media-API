const express = require ('express');
const { follow, getFollowers, getFollowing, unFollow } = require('../controllers/followerController');
const {verifyToken} = require('../middlewares/authMiddlewares');
const router  = express.Router();



router.post('/follow', verifyToken, follow);
router.get('/followers', verifyToken, getFollowers);
router.get('/following', verifyToken, getFollowing);
router.get('/unfollow/:followingId', verifyToken, unFollow);

module.exports = router;