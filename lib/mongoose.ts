import mongoose from "mongoose";
let isConnected: boolean = false;
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.NEXT_PUBLIC_MONGODB_URL) {
    return console.log("MISSING MONGOOSE URL");
  }
  if (isConnected) {
    return console.log("MongoDB is already connnected");
  }
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
      dbName: "jobs",
    });
    isConnected = true;
  } catch (error) {
    console.log("MongoDb connection failed", error);
  }
};
