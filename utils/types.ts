export type TNavLinks = {
  id: number;
  href: string;
  label: string;
};

export type TProducts = {
  _id: string;
  available?: boolean;
  itemName: string;
  price: number;
  description?: string;
  image: string;
  featured: boolean;
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
