import jwt from 'jsonwebtoken';

const authenticateWebSocket = (ws, req, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    ws.close(1008, 'Unauthorized: No Token Provided');
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user to the request object
    next();
  } catch (error) {
    ws.close(1008, 'Unauthorized: Invalid Token');
  }
};

export default authenticateWebSocket;