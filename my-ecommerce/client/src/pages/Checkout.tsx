import { useState } from 'react';
import { Container, Typography, Paper, Box, Button, Divider, Alert } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../services/api';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!user) return <Navigate to="/login" />;
  if (items.length === 0) return <Navigate to="/cart" />;

  const handlePlaceOrder = async () => {
    setLoading(true);
    setError('');

    try {
      const order = await createOrder();
      clearCart();
      navigate(`/orders/${order.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, mb: 2, color: '#213D57' }}
          >
            Checkout
          </Typography>
          <Divider sx={{ width: 60, mx: 'auto', borderColor: '#213D57' }} />
        </Box>

        {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}

        <Paper sx={{ p: 4, mb: 4, border: '1px solid #C6D1D8' }} elevation={0}>
          <Typography
            variant="h6"
            sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 3, color: '#213D57' }}
          >
            Order Summary
          </Typography>
          {items.map((item) => (
            <Box key={item.id} display="flex" justifyContent="space-between" mb={2}>
              <Typography color="#475F76">
                {item.product.name} <span style={{ opacity: 0.6 }}>x {item.quantity}</span>
              </Typography>
              <Typography color="#213D57">${(parseFloat(String(item.product.price)) * item.quantity).toFixed(2)}</Typography>
            </Box>
          ))}
          <Divider sx={{ my: 3 }} />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', color: '#213D57' }}>Total</Typography>
            <Typography variant="h6" sx={{ color: '#213D57' }}>${total.toFixed(2)}</Typography>
          </Box>
        </Paper>

        <Paper sx={{ p: 4, mb: 4, border: '1px solid #C6D1D8' }} elevation={0}>
          <Typography
            variant="h6"
            sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 2, color: '#213D57' }}
          >
            Shipping Information
          </Typography>
          <Typography color="#475F76">
            {user.name}
          </Typography>
          <Typography color="#475F76" variant="body2">
            {user.email}
          </Typography>
        </Paper>

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handlePlaceOrder}
          disabled={loading}
          sx={{ py: 2 }}
        >
          {loading ? 'Processing...' : 'Complete Purchase'}
        </Button>
      </Container>
    </Box>
  );
};

export default Checkout;
