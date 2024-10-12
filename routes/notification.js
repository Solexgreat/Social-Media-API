const express = require ('express');
const { createNotification, updateNotification, getAllNotification } = require('../controllers/notificationController');
const authMiddlewares = require('../middlewares/authMiddlewares');
const router = express.Router();


router.post('/notification', authMiddlewares, createNotification);
router.put('/isread', authMiddlewares, updateNotification);
router.get('/', authMiddlewares, getAllNotification);

module.exports = router;