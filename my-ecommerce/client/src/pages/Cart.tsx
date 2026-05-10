import { Container, Typography, Paper, Box, Button, IconButton, Grid, Divider } from '@mui/material';
import { Add, Remove, Close } from '@mui/icons-material';
import { Link, Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { items, loading, updateQuantity, removeItem, total } = useCart();
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (loading) {
    return (
      <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: 10 }}>
        <Container>
          <Typography textAlign="center" color="#475F76">Loading...</Typography>
        </Container>
      </Box>
    );
  }

  if (items.length === 0) {
    return (
      <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, mb: 2, color: '#213D57' }}
            >
              Your Collection
            </Typography>
            <Divider sx={{ width: 60, mx: 'auto', borderColor: '#213D57' }} />
          </Box>
          <Paper sx={{ p: 6, textAlign: 'center', border: '1px solid #C6D1D8' }} elevation={0}>
            <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 3, color: '#475F76' }}>
              Your collection is empty
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              to="/products"
              sx={{
                borderColor: '#213D57',
                color: '#213D57',
                '&:hover': { borderColor: '#334C64', color: '#334C64', backgroundColor: 'transparent' }
              }}
            >
              Browse Collection
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, mb: 2, color: '#213D57' }}
          >
            Your Collection
          </Typography>
          <Divider sx={{ width: 60, mx: 'auto', borderColor: '#213D57' }} />
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, border: '1px solid #C6D1D8' }} elevation={0}>
              {items.map((item, index) => (
                <Box key={item.id}>
                  {index > 0 && <Divider sx={{ my: 4 }} />}
                  <Box display="flex" gap={3}>
                    <Box
                      sx={{
                        p: 1,
                        backgroundColor: '#fff',
                        border: '1px solid #C6D1D8',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        component="img"
                        src={item.product.image_url}
                        alt={item.product.name}
                        sx={{ width: 100, height: 120, objectFit: 'cover', display: 'block' }}
                      />
                    </Box>
                    <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="center">
                      <Typography
                        variant="h6"
                        sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', mb: 0.5, color: '#213D57' }}
                      >
                        {item.product.name}
                      </Typography>
                      <Typography variant="body2" color="#475F76" sx={{ mb: 2 }}>
                        ${parseFloat(String(item.product.price)).toFixed(2)}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={2}>
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          sx={{ border: '1px solid #C6D1D8', borderRadius: 0, p: 0.5 }}
                        >
                          <Remove sx={{ fontSize: 16 }} />
                        </IconButton>
                        <Typography sx={{ minWidth: 20, textAlign: 'center' }}>{item.quantity}</Typography>
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          sx={{ border: '1px solid #C6D1D8', borderRadius: 0, p: 0.5 }}
                        >
                          <Add sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-end">
                      <IconButton size="small" onClick={() => removeItem(item.id)} sx={{ p: 0.5 }}>
                        <Close sx={{ fontSize: 18 }} />
                      </IconButton>
                      <Typography sx={{ fontWeight: 500, color: '#213D57' }}>
                        ${(parseFloat(String(item.product.price)) * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, border: '1px solid #C6D1D8' }} elevation={0}>
              <Typography
                variant="h6"
                sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 3, color: '#213D57' }}
              >
                Order Summary
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography color="#475F76">Subtotal</Typography>
                <Typography color="#213D57">${total.toFixed(2)}</Typography>
              </Box>
              <Divider sx={{ my: 3 }} />
              <Box display="flex" justifyContent="space-between" mb={4}>
                <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', color: '#213D57' }}>Total</Typography>
                <Typography variant="h6" sx={{ color: '#213D57' }}>${total.toFixed(2)}</Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                component={Link}
                to="/checkout"
                sx={{ py: 1.5 }}
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
