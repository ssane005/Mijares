import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Button, Box, Alert, Divider } from '@mui/material';
import { getProduct } from '../services/api';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import type { Product } from '../types';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProduct(parseInt(id))
        .then(setProduct)
        .catch(() => setError('Artwork not found'))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      await addToCart(product!.id);
      setSuccess('Added to cart');
      setTimeout(() => setSuccess(''), 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add to cart');
    }
  };

  if (loading) {
    return (
      <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: 10 }}>
        <Container>
          <Typography textAlign="center" color="#475F76">Loading...</Typography>
        </Container>
      </Box>
    );
  }

  if (error && !product) {
    return (
      <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: 10 }}>
        <Container>
          <Alert severity="error" sx={{ maxWidth: 400, mx: 'auto' }}>{error}</Alert>
        </Container>
      </Box>
    );
  }

  if (!product) return null;

  return (
    <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {success && <Alert severity="success" sx={{ mb: 4 }}>{success}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}

        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: 3,
                backgroundColor: '#fff',
                border: '1px solid #C6D1D8',
                boxShadow: '0 4px 20px rgba(33, 61, 87, 0.1)',
              }}
            >
              <Box
                sx={{
                  border: '1px solid #C6D1D8',
                  p: 1,
                  backgroundColor: '#f8f9fa',
                }}
              >
                <Box
                  component="img"
                  src={product.image_url}
                  alt={product.name}
                  sx={{
                    width: '100%',
                    display: 'block',
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ py: { md: 4 } }}>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: '0.2em',
                  color: '#475F76',
                  fontSize: '0.7rem',
                }}
              >
                Original Artwork
              </Typography>

              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 500,
                  mt: 1,
                  mb: 3,
                  color: '#213D57',
                }}
              >
                {product.name}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  mb: 4,
                  color: '#213D57',
                }}
              >
                ${parseFloat(String(product.price)).toFixed(2)}
              </Typography>

              <Divider sx={{ mb: 4, borderColor: '#475F76' }} />

              <Typography
                variant="body1"
                sx={{
                  lineHeight: 2,
                  color: '#475F76',
                  mb: 4,
                }}
              >
                {product.description}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 4,
                  color: product.stock > 0 ? '#213D57' : 'error.main',
                  fontWeight: 500,
                }}
              >
                {product.stock > 0 ? `${product.stock} available` : 'Sold Out'}
              </Typography>

              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                sx={{
                  py: 2,
                  backgroundColor: '#213D57',
                  '&:hover': {
                    backgroundColor: '#334C64',
                  },
                }}
              >
                Add to Collection
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetails;
