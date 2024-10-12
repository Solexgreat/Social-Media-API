const express = require ('express');
const { createLike, unLike, getLikes } = require('../controllers/likeController');
const verifyToken = require('../middlewares/authMiddlewares');
const router = express.Router();


router.post('/like', verifyToken, createLike);
router.put('/unlike/:likeId', verifyToken, unLike);
router.get('/',verifyToken, getLikes);

module.exports = router;