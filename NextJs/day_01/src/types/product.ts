/**
 * Core product fields used across the app.
 * Extends the DummyJSON product response.
 */
export interface Product {
  id: number;
  title: string;
  brand: string;
  thumbnail: string;
  price: number;
  rating: number;
  discountPercentage: number;
  category: string;
  description: string;
  images: string[];
  stock: number;
  availabilityStatus: string;
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  reviews: Review[];
}

export interface Review {
  rating: number;
  reviewerName: string;
  comment: string;
  date: string;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
