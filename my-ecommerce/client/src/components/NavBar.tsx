import { AppBar, Toolbar, Typography, Button, Badge, Box, Container } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#ffffff',
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            Mijares Gallery
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Button
              color="inherit"
              component={Link}
              to="/products"
              sx={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: '#C6D1D8',
                '&:hover': { backgroundColor: 'transparent', color: '#ffffff' }
              }}
            >
              Collection
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: '#C6D1D8',
                '&:hover': { backgroundColor: 'transparent', color: '#ffffff' }
              }}
            >
              About
            </Button>

            {user ? (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/cart"
                  sx={{
                    minWidth: 'auto',
                    color: '#C6D1D8',
                    '&:hover': { backgroundColor: 'transparent', color: '#ffffff' }
                  }}
                >
                  <Badge badgeContent={itemCount} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.65rem' } }}>
                    <ShoppingCart sx={{ fontSize: 20 }} />
                  </Badge>
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/orders"
                  sx={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    color: '#C6D1D8',
                    '&:hover': { backgroundColor: 'transparent', color: '#ffffff' }
                  }}
                >
                  Orders
                </Button>
                <Button
                  color="inherit"
                  onClick={handleLogout}
                  sx={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    color: '#C6D1D8',
                    '&:hover': { backgroundColor: 'transparent', color: '#ffffff' }
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  color: '#C6D1D8',
                  '&:hover': { backgroundColor: 'transparent', color: '#ffffff' }
                }}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
