const express = require ('express');
const { createFollow, getFollowers, getFollowing } = require('../controllers/followerController');
const {verifyToken} = require('../middlewares/authMiddlewares');
const router  = express.Router();



router.post('/follow', verifyToken, createFollow);
router.get('/followers', verifyToken, getFollowers);
router.get('/following', verifyToken, getFollowing);

module.exports = router;