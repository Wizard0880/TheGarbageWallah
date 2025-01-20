import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import connectDB from './config/database.config.js';
import authRoutes from './routes/auth.routes.js';
import adminRoutes from './routes/admin.routes.js';
import KabadiwalaRoutes from './routes/kabadiwala.routes.js';
import setupWebSocket from './config/websocket.config.js';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());

connectDB();

setupWebSocket(server);

// Routes
app.use('/api/resident', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/kabadiwala',KabadiwalaRoutes);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));