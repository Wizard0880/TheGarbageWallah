import User from '../models/user.model.js';
import { generateAccessToken, generateRefreshToken } from '../utils/token.utils.js';
import jwt from 'jsonwebtoken'; 

// Register User
export const register = async (req, res) => {
  try {
    const { fullname, email, password, role, address, pincode } = req.body;

    // Check if the email already exists in the database
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create a new user with the provided data, including the address
    const newUser = new User({ fullname, email, password, role, address, pincode });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    // Generate access and refresh tokens
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Save refreshToken in the user's document
    user.refreshToken = refreshToken;
    await user.save();

    // Send the tokens in the response headers
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    res.json({ message: 'Logged in successfully', refreshToken });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


// Logout User
export const logout = async (req, res) => {
  try {
    // Get the access token from the Authorization header
    const token = req.headers['authorization']?.split(' ')[1];  // Bearer <token>

    if (!token) {
      return res.status(400).json({ message: 'Access token is required' });
    }

    console.log(token);

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);  // Verify the token using the access secret
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token Expired' });
      }
      return res.status(403).json({ message: 'Invalid Token' });
    }

    // Find the user based on the decoded userId
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove the refresh token from the user's document
    user.refreshToken = null;
    await user.save();

    // Send success message
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

