const express = require ('express');
const { repost, updateRepost } = require('../controller/repostController');
const router = express.Router();


router.post('/:id/repost', repost);
router.put('/:id/quote', updateRepost);

module.exports = router;