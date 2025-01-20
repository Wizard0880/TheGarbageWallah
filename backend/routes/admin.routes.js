import express from 'express';
import {
  viewLogs,
  viewFeedbacks,
  viewAppointments,
  viewKabadiwalas,
  manageAppointment,
} from '../controllers/admin.controllers.js';
import {verifyToken} from '../middleware/auth.middleware.js';
import roleMiddleware from '../middleware/role.middleware.js';

const router = express.Router();

// Admin-only routes
router.get('/logs', verifyToken, roleMiddleware(['Admin']), viewLogs);
router.get('/feedbacks', verifyToken, roleMiddleware(['Admin']), viewFeedbacks);
router.get('/appointments/timeframe', verifyToken, roleMiddleware(['Admin']), viewAppointments);
router.get('/kabadiwalas', verifyToken, roleMiddleware(['Admin']), viewKabadiwalas);
router.put('/update-appointment', verifyToken, roleMiddleware(['Admin']), manageAppointment);

export default router;
