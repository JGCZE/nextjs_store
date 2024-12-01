import { connectToDb } from "@/lib/utils";
import Items from "../lib/models";

export const getProducts = async () => {
  try {
    connectToDb();
    const response = await Items.find();
    return response;
  } catch (error) {
    console.log("Error fetching products", error);
    throw new Error("Error fetching products");
  }
};
