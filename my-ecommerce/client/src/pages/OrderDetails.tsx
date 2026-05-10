import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, Divider, Alert } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { getOrder } from '../services/api';
import type { Order } from '../types';

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user && id) {
      getOrder(parseInt(id))
        .then(setOrder)
        .catch(() => setError('Order not found'))
        .finally(() => setLoading(false));
    }
  }, [user, id]);

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

  if (error) {
    return (
      <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: 10 }}>
        <Container maxWidth="md">
          <Alert severity="error" sx={{ maxWidth: 400, mx: 'auto' }}>{error}</Alert>
        </Container>
      </Box>
    );
  }

  if (!order) return null;

  return (
    <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="overline"
            sx={{
              color: order.status === 'pending' ? '#475F76' : '#213D57',
              letterSpacing: '0.15em',
            }}
          >
            {order.status}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, mt: 1, mb: 2, color: '#213D57' }}
          >
            Order #{order.id}
          </Typography>
          <Typography variant="body2" color="#475F76">
            Placed on {new Date(order.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>
          <Divider sx={{ width: 60, mx: 'auto', mt: 3, borderColor: '#213D57' }} />
        </Box>

        <Paper sx={{ p: 4, border: '1px solid #C6D1D8' }} elevation={0}>
          <Typography
            variant="h6"
            sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 4, color: '#213D57' }}
          >
            Items
          </Typography>

          {order.items?.map((item, index) => (
            <Box key={item.id}>
              {index > 0 && <Divider sx={{ my: 3 }} />}
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
                    src={item.image_url}
                    alt={item.name}
                    sx={{ width: 80, height: 100, objectFit: 'cover', display: 'block' }}
                  />
                </Box>
                <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="center">
                  <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: '#213D57' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="#475F76">
                    Qty: {item.quantity} @ ${parseFloat(String(item.price)).toFixed(2)}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography sx={{ fontWeight: 500, color: '#213D57' }}>
                    ${(parseFloat(String(item.price)) * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 4 }} />

          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', color: '#213D57' }}>
              Total
            </Typography>
            <Typography variant="h6" sx={{ color: '#213D57' }}>
              ${parseFloat(String(order.total)).toFixed(2)}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default OrderDetails;
