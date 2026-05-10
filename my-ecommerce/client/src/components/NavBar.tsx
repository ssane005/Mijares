import { AppBar, Toolbar, Typography, Button, Badge, Box, Container } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('mijares-language', next);
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
              {t('nav.collection')}
            </Button>
            <Button component={Link} to="/about" sx={navLinkSx}>
              {t('nav.about')}
            </Button>

            {user ? (
              <>
                <Button component={Link} to="/cart" sx={{ ...navLinkSx, minWidth: 'auto' }}>
                  <Badge badgeContent={itemCount} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.65rem' } }}>
                    <ShoppingCart sx={{ fontSize: 18 }} />
                  </Badge>
                </Button>
                <Button component={Link} to="/orders" sx={navLinkSx}>
                  {t('nav.orders')}
                </Button>
                <Button onClick={handleLogout} sx={navLinkSx}>
                  {t('nav.logout')}
                </Button>
              </>
            ) : (
              <Button component={Link} to="/login" sx={navLinkSx}>
                {t('nav.signIn')}
              </Button>
            )}

            {/* Language toggle */}
            <Button
              onClick={toggleLanguage}
              sx={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: '#9E9189',
                minWidth: 'auto',
                px: 1,
                borderLeft: '1px solid #D4CCC6',
                borderRadius: 0,
                '&:hover': { backgroundColor: 'transparent', color: '#8C4A2F' },
              }}
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
