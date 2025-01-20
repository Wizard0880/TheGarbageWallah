import Feedback from '../models/feedback.model.js';

export const submitFeedback = async (req, res) => {
  try {
    const { rating } = req.body;
    const userId = req.user.id;  // Assuming the user is authenticated

    const feedback = new Feedback({ userId, rating });
    await feedback.save();

    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback' });
  }
};
