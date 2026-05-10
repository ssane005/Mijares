import { useState, useEffect } from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import ProductGrid from '../components/ProductGrid';
import { getProducts } from '../services/api';
import type { Product } from '../types';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100%', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              letterSpacing: '0.03em',
              mb: 2,
              color: '#213D57',
            }}
          >
            The Collection
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 500, mx: 'auto', color: '#475F76' }}
          >
            Browse our curated selection of original works and limited edition prints
          </Typography>
          <Divider sx={{ width: 60, mx: 'auto', mt: 4, borderColor: '#213D57' }} />
        </Box>

        {loading ? (
          <Typography textAlign="center" color="text.secondary">
            Loading...
          </Typography>
        ) : (
          <ProductGrid products={products} />
        )}
      </Container>
    </Box>
  );
};

export default Products;
