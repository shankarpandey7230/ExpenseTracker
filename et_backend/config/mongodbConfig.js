import mongoose from 'mongoose';
const MONGO_URL = 'mongodb://localhost:27017/expense_tracker';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    conn && console.log('connected');
  } catch (error) {
    console.log(error);
  }
};
