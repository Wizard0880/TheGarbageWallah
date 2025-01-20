import Kabadiwala from '../models/kabadiwalas.model.js';
import User from '../models/user.model.js';

// Register a Kabadiwala
export const registerKabadiwala = async (req, res) => {
  try {
    const { fullname, email, password, pincode } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create user entry with role 'Kabadiwala'
    const newUser = new User({ fullname, email, password, role: 'Kabadiwala' });
    await newUser.save();

    // Create Kabadiwala entry with pincode
    const newKabadiwala = new Kabadiwala({ userId: newUser._id, pincode });
    await newKabadiwala.save();

    res.status(201).json({ message: 'Kabadiwala registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login Kabadiwala
export const loginKabadiwala = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user || user.role !== 'Kabadiwala') {
      return res.status(400).json({ message: 'Kabadiwala not found' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    // Send the token in response
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Logout Kabadiwala
export const logoutKabadiwala = (req, res) => {
  try {
    // Clear the token by expiring it in the client side (cookie or authorization header)
    res.clearCookie('accessToken');
    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update active status
export const updateActiveStatus = async (req, res) => {
  try {
    const { activeStatus } = req.body;
    const { userId } = req.user; // Populated by middleware

    const kabadiwala = await Kabadiwala.findOne({ userId });
    if (!kabadiwala) {
      return res.status(404).json({ message: 'Kabadiwala not found' });
    }

    kabadiwala.activeStatus = activeStatus;
    await kabadiwala.save();

    res.json({ message: `Active status updated to ${activeStatus}` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// View pickup requests for specific pincode
export const viewPickupRequests = async (req, res) => {
  try {
    const { userId } = req.user; // Populated by middleware

    const kabadiwala = await Kabadiwala.findOne({ userId });
    if (!kabadiwala) {
      return res.status(404).json({ message: 'Kabadiwala not found' });
    }

    const pickupRequests = await PickupRequest.find({ pincode: kabadiwala.pincode }); // Replace with your PickupRequest model
    res.json({ pickupRequests });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Accept/Reject pickup request
export const handlePickupRequest = async (req, res) => {
  try {
    const { requestId, action } = req.body; // action: 'accept' or 'reject'
    const { userId } = req.user; // Populated by middleware

    const kabadiwala = await Kabadiwala.findOne({ userId });
    if (!kabadiwala) {
      return res.status(404).json({ message: 'Kabadiwala not found' });
    }

    const request = await PickupRequest.findById(requestId); // Replace with your PickupRequest model
    if (!request || request.pincode !== kabadiwala.pincode) {
      return res.status(404).json({ message: 'Pickup request not found or not in your area' });
    }

    if (action === 'accept') {
      request.status = 'Accepted';
      request.assignedKabadiwala = kabadiwala.userId;
    } else if (action === 'reject') {
      request.status = 'Rejected';
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }

    await request.save();
    res.json({ message: `Pickup request ${action}ed successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
