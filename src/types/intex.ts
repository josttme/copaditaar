// src/types/index.ts
export type Category = "gun" | "knife" | "set" | "combo";

export interface Product {
  id: string;
  price: number;
  stock: number;
  name: string;
  image: string;
  name_product_2?: string;
  image_product_2?: string;
  created_at: string;
  category: Category;
}
