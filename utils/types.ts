export type TProducts = {
  _id: string;
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
