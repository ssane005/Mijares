import pool from './pool.js';

const initDB = async () => {
  const client = await pool.connect();

  try {
    await client.query(`
      -- Users table
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );

      -- Products table
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10,2) NOT NULL,
        image_url VARCHAR(500),
        stock INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT NOW()
      );

      -- Cart items table
      CREATE TABLE IF NOT EXISTS cart_items (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
        quantity INTEGER NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(user_id, product_id)
      );

      -- Orders table
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        total DECIMAL(10,2) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW()
      );

      -- Order items table
      CREATE TABLE IF NOT EXISTS order_items (
        id SERIAL PRIMARY KEY,
        order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
        product_id INTEGER REFERENCES products(id),
        quantity INTEGER NOT NULL,
        price DECIMAL(10,2) NOT NULL
      );
    `);

    // Seed products if table is empty
    const { rows } = await client.query('SELECT COUNT(*) FROM products');
    if (parseInt(rows[0].count) === 0) {
      await client.query(`
        INSERT INTO products (name, description, price, image_url, stock) VALUES
        ('Wireless Headphones', 'High-quality wireless headphones with noise cancellation and 30-hour battery life.', 79.99, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', 50),
        ('Smartphone', 'Latest generation smartphone with amazing camera and all-day battery.', 499.99, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', 30),
        ('Gaming Mouse', 'RGB ergonomic gaming mouse with adjustable DPI up to 16000.', 29.99, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', 100),
        ('Mechanical Keyboard', 'Full-size mechanical keyboard with Cherry MX switches and RGB backlighting.', 149.99, 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400', 45),
        ('4K Monitor', '27-inch 4K UHD monitor with HDR support and 144Hz refresh rate.', 349.99, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400', 20),
        ('Laptop Stand', 'Adjustable aluminum laptop stand for better ergonomics.', 39.99, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', 75),
        ('USB-C Hub', '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.', 49.99, 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400', 60),
        ('Webcam HD', '1080p HD webcam with built-in microphone and auto-focus.', 69.99, 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400', 40)
      `);
      console.log('Seeded products table');
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
};

initDB();
