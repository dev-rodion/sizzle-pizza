import mongoose from "mongoose";

const connectDB = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("connectDB 3");

    console.log("Error connecting to MongoDB: \n", err);
  }
};

export default connectDB;
