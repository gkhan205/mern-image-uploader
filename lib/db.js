import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const DB_URL = "mongodb://localhost:27017";
    await mongoose.connect(DB_URL, {
      dbName: "file-upload",
    });
    console.log("DB Connected!");
  } catch (err) {
    console.log("DB Connection Error: ", err);
  }
};
