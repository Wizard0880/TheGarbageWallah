import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    // Retrieve token from the Authorization header
    const token = req.headers['authorization']?.split(' ')[1];  // Bearer <token>

    if (!token) {
      return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }

    // Verify the token using the access secret
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = decoded; // Attach decoded token data (e.g., userId, role) to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // Handle specific JWT errors
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Access Denied: Token Expired' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Access Denied: Invalid Token' });
    } else {
      console.error('Token verification error:', error.message);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

export const verifyRole = (roles) => {
  return (req, res, next) => {
    // Ensure the user object exists and check for the required role
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access Denied: Insufficient Permissions' });
    }
    next(); // User has the required role, proceed to the next middleware or route
  };
};
