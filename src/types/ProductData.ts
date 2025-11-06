/**
 * Type definition of the product json data we are consuming.
 */

export type ProductData = {
  id: string;
  name: string;
  gender: "womens" | "mens" | "unisex" | string;
  category: string;
  description: string;
  price: number;
  cost: number;
  color: {
    name: string;
    hex: string;
  }[];
  sizes: string[];
  material: string;
  sales: {
    domestic: number;
    international: number;
    total: number;
  };
};