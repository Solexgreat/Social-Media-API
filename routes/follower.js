const express = require ('express');
const { createFollow, getFollowers, getFollowing } = require('../controller/followerController');
const router  = express.Router();



router.post('/follow', createFollow);
router.get('/followers', getFollowers);
router.get('/following', getFollowing);

module.exports = router;