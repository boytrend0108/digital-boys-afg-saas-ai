import mongoose, { Document, Schema } from 'mongoose';
import { Event } from './event.model';

// Interface for Booking document
export interface IBooking extends Document {
  eventId: mongoose.Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>({
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: [true, 'Event ID is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator: (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format',
    },
  },
}, {
  timestamps: true,
});

// Verify event exists before saving booking
bookingSchema.pre('save', async function (next) {
  if (this.isModified('eventId')) {
    const eventExists = await Event.findById(this.eventId);
    if (!eventExists) {
      throw new Error('Event does not exist');
    }
  }
  next();
});

// Create index on eventId for faster queries
bookingSchema.index({ eventId: 1 });
bookingSchema.index({ email: 1 });

export const Booking = mongoose.models.Booking || mongoose.model<IBooking>('Booking', bookingSchema);