import { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getOrders } from '../services/api';
import type { Order } from '../types';

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      getOrders()
        .then(setOrders)
        .finally(() => setLoading(false));
    }
  }, [user]);

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

  return (
    <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, mb: 2, color: '#213D57' }}
          >
            Your Orders
          </Typography>
          <Divider sx={{ width: 60, mx: 'auto', borderColor: '#213D57' }} />
        </Box>

        {orders.length === 0 ? (
          <Paper sx={{ p: 6, textAlign: 'center', border: '1px solid #C6D1D8' }} elevation={0}>
            <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', color: '#475F76' }}>
              No orders yet
            </Typography>
          </Paper>
        ) : (
          orders.map((order) => (
            <Paper
              key={order.id}
              component={Link}
              to={`/orders/${order.id}`}
              sx={{
                p: 4,
                mb: 3,
                textDecoration: 'none',
                display: 'block',
                border: '1px solid #C6D1D8',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#475F76',
                },
              }}
              elevation={0}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 0.5, color: '#213D57' }}
                  >
                    Order #{order.id}
                  </Typography>
                  <Typography variant="body2" color="#475F76">
                    {new Date(order.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Typography>
                </Box>
                <Box textAlign="right">
                  <Typography
                    variant="overline"
                    sx={{
                      color: order.status === 'pending' ? '#475F76' : '#213D57',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {order.status}
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', color: '#213D57' }}>
                    ${parseFloat(String(order.total)).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))
        )}
      </Container>
    </Box>
  );
};

export default Orders;
