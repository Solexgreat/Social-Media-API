const express = require ('express');
const { createFollow, getFollowers, getFollowing } = require('../controllers/followerController');
const authMiddlewares = require('../middlewares/authMiddlewares');
const router  = express.Router();



router.post('/follow', authMiddlewares, createFollow);
router.get('/followers', authMiddlewares, getFollowers);
router.get('/following', authMiddlewares, getFollowing);

module.exports = router;