import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    console.log("Got mongo URI = ", process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } 
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
