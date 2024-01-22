import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI not found");
  }
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "eventloop",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
