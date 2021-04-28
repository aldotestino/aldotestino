import mongoose, { Schema } from 'mongoose';

const customerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
mongoose.models = {};

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
