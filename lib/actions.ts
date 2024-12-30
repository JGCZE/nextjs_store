"use server";
import { connectToDb } from "@/lib/utils";
import { Items, UserValues } from "../lib/models";
import { TProducts, TReview } from "./types";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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

export const handleGithubLogin = async () => {
  // po přihlášení mě to přesměruje na api/auth
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const handleRegister = async (previousState, formData) => {
  const { userName, email, password } = Object.fromEntries(formData);

  if (password.length < 3) {
    return { error: "Password is too short" };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDb();

    const user = await UserValues.findOne({ userName });

    if (user) {
      return { error: "Username už existuje" };
    }

    const newUser = new UserValues({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("SAVE TO DB", newUser);

    return { succes: true };
  } catch (error) {
    console.log(error);
    return { error: "SOMETHING WENT WRONG MOTHERFUCKER" };
  }
};

export const login = async (previousState, formData) => {
  const { userName, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { userName, password });
    return { succes: true };
  } catch (error) {
    console.log(error);
    return { error: "SOMETHING WENT WRONG MOTHERFUCKER" };
  }
};
