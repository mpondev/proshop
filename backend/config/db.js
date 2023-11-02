import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const DB = process.env.MONGO_URI.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD
    );
    const conn = await mongoose.connect(DB);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
