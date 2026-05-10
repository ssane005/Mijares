import { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Badge, Box, Container,
  IconButton, Drawer, List, ListItemButton, ListItemText, Divider,
} from '@mui/material';
import { Menu, Close, ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setDrawerOpen(false);
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

  const langToggle = (
    <Button
      onClick={toggleLanguage}
      sx={{
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        color: '#9E9189',
        minWidth: 'auto',
        px: 1,
        '&:hover': { backgroundColor: 'transparent', color: '#8C4A2F' },
      }}
    >
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </Button>
  );

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 2.5 }}>

            {/* Logo */}
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
                fontSize: { xs: '1.1rem', md: '1.5rem' },
              }}
            >
              Mijares Gallery
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
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
              <Box sx={{ borderLeft: '1px solid #D4CCC6', pl: 1 }}>
                {langToggle}
              </Box>
            </Box>

            {/* Mobile: hamburger | lang toggle */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: '#1A140C', p: 1 }}
                aria-label="open menu"
              >
                <Menu sx={{ fontSize: 22 }} />
              </IconButton>
              <Box sx={{ width: '1px', height: 16, backgroundColor: '#D4CCC6', mx: 0.5 }} />
              {langToggle}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: '#F8F4EE',
            px: 3,
            py: 4,
          },
        }}
      >
        {/* Drawer header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.1rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#1A140C',
            }}
          >
            Mijares Gallery
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#9E9189', p: 0 }}>
            <Close sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: '#D4CCC6', mb: 3 }} />

        <List disablePadding>
          {[
            { label: t('nav.collection'), to: '/products' },
            { label: t('nav.about'), to: '/about' },
          ].map(({ label, to }) => (
            <ListItemButton
              key={to}
              component={Link}
              to={to}
              onClick={() => setDrawerOpen(false)}
              sx={{
                px: 0,
                py: 1.5,
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  sx: {
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#1A140C',
                    fontFamily: '"DM Sans", sans-serif',
                  },
                }}
              />
            </ListItemButton>
          ))}

          {user ? (
            <>
              <ListItemButton
                component={Link}
                to="/orders"
                onClick={() => setDrawerOpen(false)}
                sx={{ px: 0, py: 1.5, '&:hover': { backgroundColor: 'transparent' } }}
              >
                <ListItemText
                  primary={t('nav.orders')}
                  primaryTypographyProps={{
                    sx: { fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1A140C' },
                  }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={handleLogout}
                sx={{ px: 0, py: 1.5, '&:hover': { backgroundColor: 'transparent' } }}
              >
                <ListItemText
                  primary={t('nav.logout')}
                  primaryTypographyProps={{
                    sx: { fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9E9189' },
                  }}
                />
              </ListItemButton>
            </>
          ) : (
            <ListItemButton
              component={Link}
              to="/login"
              onClick={() => setDrawerOpen(false)}
              sx={{ px: 0, py: 1.5, '&:hover': { backgroundColor: 'transparent' } }}
            >
              <ListItemText
                primary={t('nav.signIn')}
                primaryTypographyProps={{
                  sx: { fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1A140C' },
                }}
              />
            </ListItemButton>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
