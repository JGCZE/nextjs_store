import { connectToDb } from "@/lib/utils";
import Items from "../lib/models";
import { TProducts, TReview } from "./types";

export const getProducts = async (): Promise<Array<TProducts>> => {
  try {
    connectToDb();
    const response = await Items.find();

    if (response.length === 0) {
      throw new Error("No featured products found");
    }

    return response;
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

export const getItem = async (productId: string): Promise<Array<TProducts>> => {
  try {
    connectToDb();
    const response = await Items.findOne({ _id: productId });

    if (response.length === 0) {
      throw new Error("No item found");
    }

    return response;
  } catch (error) {
    console.log(error, "Cannot get one specific item");
    throw new Error("Error fetching products");
  }
};

export const getReviews = async (
  reviewsIds: Array<number>
): Promise<Array<TReview> | undefined> => {
  const API_URL = process.env.REVIEWS_URL;

  try {
    const queryParams = reviewsIds.map((id) => `id=${id}`).join("&");
    const response = await fetch(`${API_URL}?${queryParams}`);

    if (!response) {
      throw new Error("NO REVIEWS FOUND");
    }

    return response.json();
  } catch (error) {
    console.log(error, "Cannot get reviews");
  }
};
