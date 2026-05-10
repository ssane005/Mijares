import type { AuthResponse, Product, CartItem, Order } from '../types';

const API_BASE = '/api';

const getHeaders = (): HeadersInit => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }
  return response.json();
};

// Auth
export const register = async (email: string, password: string, name: string): Promise<AuthResponse> => {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  });
  return handleResponse<AuthResponse>(response);
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse<AuthResponse>(response);
};

export const getMe = async (): Promise<AuthResponse['user']> => {
  const response = await fetch(`${API_BASE}/auth/me`, { headers: getHeaders() });
  return handleResponse<AuthResponse['user']>(response);
};

// Products
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE}/products`);
  return handleResponse<Product[]>(response);
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_BASE}/products/${id}`);
  return handleResponse<Product>(response);
};

// Cart
export const getCart = async (): Promise<CartItem[]> => {
  const response = await fetch(`${API_BASE}/cart`, { headers: getHeaders() });
  return handleResponse<CartItem[]>(response);
};

export const addToCart = async (productId: number, quantity: number = 1): Promise<void> => {
  const response = await fetch(`${API_BASE}/cart`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ productId, quantity }),
  });
  return handleResponse<void>(response);
};

export const updateCartItem = async (id: number, quantity: number): Promise<void> => {
  const response = await fetch(`${API_BASE}/cart/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({ quantity }),
  });
  return handleResponse<void>(response);
};

export const removeFromCart = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE}/cart/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return handleResponse<void>(response);
};

// Orders
export const createOrder = async (): Promise<Order> => {
  const response = await fetch(`${API_BASE}/orders`, {
    method: 'POST',
    headers: getHeaders(),
  });
  return handleResponse<Order>(response);
};

export const getOrders = async (): Promise<Order[]> => {
  const response = await fetch(`${API_BASE}/orders`, { headers: getHeaders() });
  return handleResponse<Order[]>(response);
};

export const getOrder = async (id: number): Promise<Order> => {
  const response = await fetch(`${API_BASE}/orders/${id}`, { headers: getHeaders() });
  return handleResponse<Order>(response);
};
