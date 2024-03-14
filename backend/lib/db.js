import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_Url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: "+ error.message);
  }
};