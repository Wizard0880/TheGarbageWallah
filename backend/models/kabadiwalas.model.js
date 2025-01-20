import mongoose from 'mongoose';

const kabadiwalaSchema = new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // Reference to the User schema
      },
      pincode: {
        type: String,
        required: true, // Pincode for pickup area
      },
      activeStatus: {
        type: Boolean,
        default: false, // Online/Offline status
      },
      requestsHandled: {
        type: Number,
        default: 0, // Number of pickup requests handled
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Kabadiwala = mongoose.model('Kabadiwala', kabadiwalaSchema);
  
  export default Kabadiwala;
  