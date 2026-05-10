import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import type { CartItem } from '../types';
import * as api from '../services/api';
import { useAuth } from './AuthContext';

interface CartContextType {
  items: CartItem[];
  loading: boolean;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  updateQuantity: (id: number, quantity: number) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
  clearCart: () => void;
  total: number;
  itemCount: number;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const refreshCart = useCallback(async () => {
    if (!user) {
      setItems([]);
      return;
    }
    setLoading(true);
    try {
      const cartItems = await api.getCart();
      setItems(cartItems);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const addToCart = async (productId: number, quantity = 1) => {
    await api.addToCart(productId, quantity);
    await refreshCart();
  };

  const updateQuantity = async (id: number, quantity: number) => {
    await api.updateCartItem(id, quantity);
    await refreshCart();
  };

  const removeItem = async (id: number) => {
    await api.removeFromCart(id);
    await refreshCart();
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => sum + parseFloat(String(item.product.price)) * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, loading, addToCart, updateQuantity, removeItem, clearCart, total, itemCount, refreshCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
