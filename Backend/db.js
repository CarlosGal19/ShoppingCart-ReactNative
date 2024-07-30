import { connect } from "mongoose";

export default async function connectDB() {
  try {
    console.log("Connecting to MongoDB...");
    const URI = process.env.MONGO_URI;
    await connect(URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
}

