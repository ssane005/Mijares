import { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { getProducts } from '../services/api';
import type { Product } from '../types';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data.slice(0, 4)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          backgroundColor: '#334C64',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '0.04em',
              mb: 3,
              color: '#ffffff',
            }}
          >
            Curated Fine Art
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 500,
              mx: 'auto',
              mb: 5,
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: '#C6D1D8',
            }}
          >
            Discover exceptional original paintings and limited edition prints
            from established and emerging artists.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/products"
            sx={{
              px: 5,
              py: 1.5,
              borderColor: '#ffffff',
              color: '#ffffff',
              '&:hover': {
                borderColor: '#C6D1D8',
                color: '#C6D1D8',
                backgroundColor: 'transparent',
              },
            }}
          >
            View Collection
          </Button>
        </Container>
      </Box>

      {/* Featured Works Section */}
      <Box sx={{ backgroundColor: '#C6D1D8', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: '0.2em',
                color: '#475F76',
                fontSize: '0.75rem',
              }}
            >
              Selected Works
            </Typography>
            <Divider
              sx={{
                width: 60,
                mx: 'auto',
                mt: 2,
                borderColor: '#213D57',
              }}
            />
          </Box>

          {loading ? (
            <Typography textAlign="center" color="text.secondary">
              Loading...
            </Typography>
          ) : (
            <ProductGrid products={products} />
          )}

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              variant="text"
              component={Link}
              to="/products"
              sx={{
                color: '#213D57',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                '&:hover': {
                  color: '#475F76',
                  backgroundColor: 'transparent',
                },
              }}
            >
              View All Works
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
