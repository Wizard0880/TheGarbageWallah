import Log from '../models/log.model.js';
import Kabadiwala from '../models/kabadiwalas.model.js';
import Appointment from '../models/appointment.model.js';
import Feedback from '../models/feedback.model.js';

/**
 * Helper function to create a log entry
 */
const createLog = async (userId, action, details = '') => {
  try {
    const log = await Log.create({ user: userId, action, details });
    console.log('Log created:', log);
  } catch (error) {
    console.error('Error creating log:', error.message);
  }
};

/**
 * GET /admin/logs
 * View all logs.
 */
export const viewLogs = async (req, res) => {
  try {
    const logs = await Log.find().populate('user', 'fullname email role');
    res.status(200).json({ success: true, logs });
  } catch (error) {
    console.error('Error fetching logs:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching logs' });
  }
};

/**
 * GET /admin/feedbacks
 * View all feedbacks.
 */
export const viewFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json({ success: true, feedbacks });
  } catch (error) {
    console.error('Error fetching feedbacks:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching feedbacks' });
  }
};

/**
 * GET /admin/appointments/:timeframe
 * View all appointments for a day or a week.
 */
export const viewAppointments = async (req, res) => {
  const { timeframe } = req.params;
  const start = new Date();
  let end = new Date();

  if (timeframe === 'week') {
    end.setDate(end.getDate() + 7);
  } else if (timeframe === 'day') {
    end.setDate(end.getDate() + 1);
  } else {
    return res.status(400).json({ success: false, message: 'Invalid timeframe' });
  }

  try {
    const appointments = await Appointment.find({
      date: { $gte: start, $lt: end },
    });
    res.status(200).json({ success: true, appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching appointments' });
  }
};

/**
 * GET /admin/kabadiwalas
 * View all kabadiwalas or by availability and area.
 */
export const viewKabadiwalas = async (req, res) => {
  const { pinCode, status } = req.query;

  const query = {};
  if (pinCode) query.pinCode = pinCode;
  if (status) query.availableStatus = status;

  try {
    const kabadiwalas = await Kabadiwala.find(query);
    res.status(200).json({ success: true, kabadiwalas });
  } catch (error) {
    console.error('Error fetching kabadiwalas:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching kabadiwalas' });
  }
};

/**
 * PUT /admin/update-appointment/:appointmentId
 * Book, update, or cancel an appointment for a user.
 */
export const manageAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const { status, details } = req.body;

  if (!['Booked', 'Cancelled', 'Updated'].includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }

  try {
    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status, details },
      { new: true }
    );
    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    await createLog(req.user._id, 'Manage Appointment', `Updated appointment ${appointmentId} to ${status}`);
    res.status(200).json({ success: true, appointment });
  } catch (error) {
    console.error('Error managing appointment:', error.message);
    res.status(500).json({ success: false, message: 'Error managing appointment' });
  }
};
