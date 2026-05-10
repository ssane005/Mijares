import { Response } from 'express';
import pool from '../db/pool.js';
import { AuthRequest } from '../types/index.js';

export const createOrder = async (req: AuthRequest, res: Response): Promise<void> => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Get cart items
    const cartResult = await client.query(
      `SELECT ci.id, ci.quantity, ci.product_id, p.price, p.stock, p.name
       FROM cart_items ci
       JOIN products p ON ci.product_id = p.id
       WHERE ci.user_id = $1`,
      [req.user!.id]
    );

    if (cartResult.rows.length === 0) {
      res.status(400).json({ error: 'Cart is empty' });
      await client.query('ROLLBACK');
      return;
    }

    // Calculate total and verify stock
    let total = 0;
    for (const item of cartResult.rows) {
      if (item.stock < item.quantity) {
        res.status(400).json({ error: `Not enough stock for ${item.name}` });
        await client.query('ROLLBACK');
        return;
      }
      total += parseFloat(item.price) * item.quantity;
    }

    // Create order
    const orderResult = await client.query(
      'INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING *',
      [req.user!.id, total]
    );
    const order = orderResult.rows[0];

    // Create order items and update stock
    for (const item of cartResult.rows) {
      await client.query(
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)',
        [order.id, item.product_id, item.quantity, item.price]
      );

      await client.query('UPDATE products SET stock = stock - $1 WHERE id = $2', [item.quantity, item.product_id]);
    }

    // Clear cart
    await client.query('DELETE FROM cart_items WHERE user_id = $1', [req.user!.id]);

    await client.query('COMMIT');

    res.status(201).json(order);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Server error' });
  } finally {
    client.release();
  }
};

export const getOrders = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      'SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC',
      [req.user!.id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getOrder = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const orderResult = await pool.query('SELECT * FROM orders WHERE id = $1 AND user_id = $2', [id, req.user!.id]);
    const order = orderResult.rows[0];

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }

    const itemsResult = await pool.query(
      `SELECT oi.*, p.name, p.image_url
       FROM order_items oi
       JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = $1`,
      [id]
    );

    res.json({ ...order, items: itemsResult.rows });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
