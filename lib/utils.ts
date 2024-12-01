import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from "mongoose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const connection: { isConnected?: boolean } = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB as string);
    connection.isConnected = db.connections[0].readyState === 1;
  } catch (error) {
    console.log("Error connecting to DB", error);
    throw new Error("Error connecting to DB");
  }
};
