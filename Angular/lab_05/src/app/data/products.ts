import { Product } from "../models/product.model";

export const PRODUCTS: Product[] = [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 1200,
    "images": ["p1.png", "p2.png"],
    "seller": "Tech Store",
    "description": "High-quality wireless headphones with noise cancellation.",
    "color": "Black",
    "quantity": "15"
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "price": 2300,
    "images": ["p2.png", "p3.png"],
    "seller": "Gadget Hub",
    "description": "Smart watch with heart rate monitor and GPS.",
    "color": "Silver",
    "quantity": "20"
  },
  {
    "id": 3,
    "name": "Gaming Mouse",
    "price": 650,
    "images": ["p3.png"],
    "seller": "Pro Gamers",
    "description": "Ergonomic gaming mouse with RGB lighting.",
    "color": "Red",
    "quantity": "30"
  },
  {
    "id": 4,
    "name": "Mechanical Keyboard",
    "price": 1800,
    "images": ["p4.png"],
    "seller": "Key Masters",
    "description": "Mechanical keyboard with blue switches.",
    "color": "White",
    "quantity": "10"
  }
]
