// routes/appointment.routes.js
import express from 'express';
import { bookAppointment, getAppointments } from '../controllers/appointment.controllers.js';
import {verifyToken} from '../middleware/auth.middleware.js';

const router = express.Router();

// Route to book an appointment
router.post('/book', verifyToken, bookAppointment);

// Route to get all appointments (for user)
router.get('/', verifyToken, getAppointments);

export default router;
