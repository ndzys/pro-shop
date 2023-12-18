import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const session = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${session.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
