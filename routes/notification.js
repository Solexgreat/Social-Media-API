const express = require ('express');
const { createNotification, updateNotification, getAllNotification } = require('../controllers/notificationController');
const {verifyToken} = require('../middlewares/authMiddlewares');
const router = express.Router();


router.post('/notification', verifyToken, createNotification);
router.put('/isread', verifyToken, updateNotification);
router.get('/', verifyToken, getAllNotification);

module.exports = router;