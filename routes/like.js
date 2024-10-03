const express = require ('express');
const { createLike, unLike, getLikes } = require('../controller/likeController');
const router = express.Router();


router.post('/like', createLike);
router.put('/unlike', unLike);
router.get('/', getLikes);

module.exports = router;