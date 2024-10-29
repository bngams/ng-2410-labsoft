import { Product } from "./product"

// TODO: put it in a better location (like an http module or lib...)
export type ApiResponse = {
  total: number,
  limit: number,
  skip: number,
}

// type inheritance with type keyword
// differs from type inheritance with interface keyword
// https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript
export type ProductApiResponse = ApiResponse & {
  products: Product[]  // or Partial<Product> or T extends Products
} 
