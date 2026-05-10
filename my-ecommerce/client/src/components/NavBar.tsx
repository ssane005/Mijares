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

  const navLinkSx = {
    fontSize: '0.7rem',
    letterSpacing: '0.18em',
    color: '#1A140C',
    '&:hover': { backgroundColor: 'transparent', color: '#8C4A2F' },
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2.5 }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#1A140C',
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              letterSpacing: '0.08em',
            }}
          >
            Mijares Gallery
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Button component={Link} to="/products" sx={navLinkSx}>
              Collection
            </Button>
            <Button component={Link} to="/about" sx={navLinkSx}>
              About
            </Button>

            {user ? (
              <>
                <Button component={Link} to="/cart" sx={{ ...navLinkSx, minWidth: 'auto' }}>
                  <Badge badgeContent={itemCount} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.65rem' } }}>
                    <ShoppingCart sx={{ fontSize: 18 }} />
                  </Badge>
                </Button>
                <Button component={Link} to="/orders" sx={navLinkSx}>
                  Orders
                </Button>
                <Button onClick={handleLogout} sx={navLinkSx}>
                  Logout
                </Button>
              </>
            ) : (
              <Button component={Link} to="/login" sx={navLinkSx}>
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
