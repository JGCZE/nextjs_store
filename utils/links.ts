import { TDiscounts, THeroLinks, TNavLinks } from "./types";

export const navigationLinks: Array<TNavLinks> = [
  {
    id: 1,
    href: "/",
    label: "Home",
  },
  {
    id: 2,
    href: "/products",
    label: "Shop",
  },
  /* {
    id: 3,
    href: "/about-us",
    label: "About",
  }, */
  {
    id: 3,
    href: "/contact",
    label: "Contact",
  },
];

export const heroLinks: Array<THeroLinks> = [
  {
    href: "/",
    label: "Find it",
    note: "This is the home page",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/contact",
    label: "Somethink",
  },
];

export const discountLinks: Array<TDiscounts> = [
  {
    href: "/products",
    label: "20% SLEVA NA TŘIČKA",
    images:
      "https://cdn.pixabay.com/photo/2016/10/09/16/57/sale-1726232_960_720.jpg",
  },
  {
    href: "/productsx",
    label: "30% sleva na Čepice",
    images:
      "https://cdn.pixabay.com/photo/2021/04/16/12/38/discount-6183488_960_720.png",
  },
];
