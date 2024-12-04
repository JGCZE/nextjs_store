import { connectToDb } from "@/lib/utils";
import Items from "../lib/models";
import { TProducts } from "./types";

export const getProducts = async () => {
  try {
    connectToDb();
    const response = await Items.find();

    if (response.length === 0) {
      throw new Error("No featured products found");
    }

    return { success: response };
  } catch (error) {
    console.log("Error fetching products", error);
    throw new Error("Error fetching products");
  }
};

export const getFeaturedProducts = async (): Promise<Array<TProducts>> => {
  try {
    connectToDb();
    const response = await Items.find({ featured: true });

    if (response.length === 0) {
      throw new Error("No featured products found");
    }
    return response;
  } catch (error) {
    console.log("Error fetching products", error);
    throw new Error("Error fetching products");
  }
};
