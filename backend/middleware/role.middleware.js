const verifyRole = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const { user } = req; // Assuming authentication middleware has populated req.user

      // Check if the user's role is in the allowed roles
      if (!user || !allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Access Denied: Insufficient Permissions' });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
};

export default verifyRole;
