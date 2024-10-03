const express = require ('express');
const { createNotification, updateNotification, getAllNotification } = require('../controller/notificationController');
const router = express.Router();


router.post('/notification', createNotification);
router.put('/isread', updateNotification);
router.get('/', getAllNotification);

module.exports = router;