// controllers/appointment.controller.js
import Appointment from '../models/appointment.model.js';

export const bookAppointment = async (req, res) => {
  const { scrapType, pickupDate, address } = req.body;
  try {
    // Validate input
    if (!scrapType || !pickupDate || !address) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    // Create the appointment
    const newAppointment = new Appointment({
      userId: req.user._id, // Attach the userId from the token
      scrapType,
      pickupDate,
      address,
    });

    await newAppointment.save();

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      appointment: newAppointment,
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ success: false, message: 'Error booking appointment' });
  }
};

// Fetch user's appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ success: false, message: 'Error fetching appointments' });
  }
};
