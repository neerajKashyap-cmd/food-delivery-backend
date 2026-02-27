import mongoose from "mongoose";

let isConnected = false;

const connectDb = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    isConnected = db.connections[0].readyState;
    console.log("database connected successfully");
  } catch (error) {
    console.log("db error", error);
  }
};

export default connectDb;