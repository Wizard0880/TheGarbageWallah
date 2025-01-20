import jwt from 'jsonwebtoken';

export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      userId: user._id, // Include userId to identify the user
      role: user.role,  // Include role for role-based access control
    },
    process.env.JWT_ACCESS_SECRET, // Use the access token secret
    { expiresIn: '1h' }           // Set the access token expiration time
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      userId: user._id, // Include userId
      role: user.role,  // Include role
    },
    process.env.JWT_REFRESH_SECRET, // Use the refresh token secret
    { expiresIn: '1d' }             // Set the refresh token expiration time
  );
};
