export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
}

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}

export interface Order {
  id: number;
  user_id: number;
  total: number;
  status: string;
  created_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  name: string;
  image_url: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
