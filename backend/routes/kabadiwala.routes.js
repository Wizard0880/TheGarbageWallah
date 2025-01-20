import express from 'express';
import {
  registerKabadiwala,
  updateActiveStatus,
  viewPickupRequests,
  handlePickupRequest,
  loginKabadiwala,
  logoutKabadiwala
} from '../controllers/kabadiwala.controllers.js';
import { verifyRole } from '../middleware/auth.middleware.js';
import notificationRoutes from '../routes/notification.routes.js';

const router = express.Router();

// Register Route
router.post('/register', registerKabadiwala);

// Login Route
router.post('/login', loginKabadiwala);

// Logout Route
router.post('/logout', logoutKabadiwala);

// Update Active Status
router.patch('/status', verifyRole('Kabadiwala'), updateActiveStatus);

// View Pickup Requests
router.get('/requests', verifyRole('Kabadiwala'), viewPickupRequests);

// Handle Pickup Request (Accept/Reject)
router.post('/requests/action', verifyRole('Kabadiwala'), handlePickupRequest);

// Notifications Route
router.post('/notifications', verifyRole('Kabadiwala'), notificationRoutes);

export default router;
