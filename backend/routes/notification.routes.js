import express from 'express';
import { getNotifications, sendNotification } from '../controllers/notification.controllers.js';
import {verifyToken} from '../middleware/auth.middleware.js';

const router = express.Router();

// Route to get notifications
router.get('/notifications', verifyToken, getNotifications);

// Route to send a notification
router.post('/notifications', verifyToken, async (req, res) => {
  const { userId, message } = req.body;

  if (!userId || !message) {
    return res.status(400).json({ success: false, message: 'User ID and message are required' });
  }

  try {
    const notification = await sendNotification(userId, message);
    res.status(201).json({ success: true, message: 'Notification sent successfully', notification });
  } catch (error) {
    console.error('Error sending notification:', error.message);
    res.status(500).json({ success: false, message: 'Error sending notification' });
  }
});

export default router;
