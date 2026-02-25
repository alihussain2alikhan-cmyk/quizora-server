const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("CRITICAL: MONGO_URI is not defined in environment variables!");
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    // process.exit(1) serverless function ko crash kar deta hai, is liye hata diya
  }
};

module.exports = connectDB;
