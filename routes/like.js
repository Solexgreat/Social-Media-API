const express = require ('express');
const { createLike, unLike, getLikes } = require('../controllers/likeController');
const authMiddlewares = require('../middlewares/authMiddlewares');
const router = express.Router();


router.post('/like', authMiddlewares, createLike);
router.put('/unlike', authMiddlewares, unLike);
router.get('/', authMiddlewares, getLikes);

module.exports = router;