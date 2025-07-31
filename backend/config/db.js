import mongoose from "mongoose";

export async function connectToDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI); // ✅ Fixed name
    console.log("✅ MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}
