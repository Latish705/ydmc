import mongoose from "mongoose";

const connnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return;
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};

export default connnectDB;
