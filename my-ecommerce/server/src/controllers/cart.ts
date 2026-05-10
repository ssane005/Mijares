import { Response } from 'express';
import pool from '../db/pool.js';
import { AuthRequest } from '../types/index.js';

export const getCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      `SELECT ci.id, ci.quantity, ci.product_id,
              p.name, p.price, p.image_url, p.stock
       FROM cart_items ci
       JOIN products p ON ci.product_id = p.id
       WHERE ci.user_id = $1`,
      [req.user!.id]
    );

    const items = result.rows.map((row) => ({
      id: row.id,
      quantity: row.quantity,
      product: {
        id: row.product_id,
        name: row.name,
        price: parseFloat(row.price),
        image_url: row.image_url,
        stock: row.stock,
      },
    }));

    res.json(items);
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const addToCart = async (req: AuthRequest, res: Response): Promise<void> => {
  const { productId, quantity = 1 } = req.body;

  if (!productId) {
    res.status(400).json({ error: 'Product ID is required' });
    return;
  }

  try {
    // Check if product exists and has stock
    const productResult = await pool.query('SELECT * FROM products WHERE id = $1', [productId]);
    const product = productResult.rows[0];

    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    if (product.stock < quantity) {
      res.status(400).json({ error: 'Not enough stock' });
      return;
    }

    // Upsert cart item
    const result = await pool.query(
      `INSERT INTO cart_items (user_id, product_id, quantity)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id, product_id)
       DO UPDATE SET quantity = cart_items.quantity + $3
       RETURNING *`,
      [req.user!.id, productId, quantity]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateCartItem = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (quantity === undefined || quantity < 0) {
    res.status(400).json({ error: 'Valid quantity is required' });
    return;
  }

  try {
    if (quantity === 0) {
      await pool.query('DELETE FROM cart_items WHERE id = $1 AND user_id = $2', [id, req.user!.id]);
      res.json({ message: 'Item removed from cart' });
      return;
    }

    const result = await pool.query(
      'UPDATE cart_items SET quantity = $1 WHERE id = $2 AND user_id = $3 RETURNING *',
      [quantity, id, req.user!.id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Cart item not found' });
      return;
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const removeFromCart = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM cart_items WHERE id = $1 AND user_id = $2 RETURNING *',
      [id, req.user!.id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Cart item not found' });
      return;
    }

    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
