import { Request } from 'express';

export interface User {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  created_at: Date;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  created_at: Date;
}

export interface CartItem {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  created_at: Date;
  product?: Product;
}

export interface Order {
  id: number;
  user_id: number;
  total: number;
  status: string;
  created_at: Date;
  items?: OrderItem[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  product?: Product;
}

export interface AuthRequest extends Request {
  user?: { id: number; email: string };
}

export interface JWTPayload {
  id: number;
  email: string;
}
