import express from 'express';
import { register, login, logout } from '../controllers/auth.controllers.js';
import { submitFeedback } from '../controllers/feedback.controllers.js';
import appointmentRoutes from '../routes/appointment.routes.js';
import { verifyToken } from '../middleware/auth.middleware.js'; // Named import for middleware

const router = express.Router();

// Routes
router.post('/register', register); // Registration
router.post('/login', login);       // Login
router.post('/logout', logout);     // Logout
router.post('/request-pickup', appointmentRoutes); 
router.post('/feedback', verifyToken, submitFeedback); // Protected feedback route

export default router;
