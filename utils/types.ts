export type TNavLinks = {
  id: number;
  href: string;
  label: string;
};

export type TProducts = {
  _id: string;
  available: boolean;
  categoryId: number;
  itemName: string;
  price: number;
  description?: string;
  image: string;
  featured: boolean;
  reviews?: Array<number>;
  sizes: Array<string>;
};

export type TCategories = {
  categoryId: number;
  category: string;
};

export type THeroLinks = {
  href: string;
  label: string;
  note?: string;
};

export type TDiscounts = {
  href: string;
  label: string;
  images: string;
};

export type TReview = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};
