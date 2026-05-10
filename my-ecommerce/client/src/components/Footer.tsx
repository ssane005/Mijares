import { Box, Container, Typography, Divider, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto', backgroundColor: '#1A140C' }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              letterSpacing: '0.08em',
              mb: 2,
              color: '#F8F4EE',
            }}
          >
            Mijares Gallery
          </Typography>
          <Divider sx={{ width: 32, mx: 'auto', mb: 4, borderColor: '#8C4A2F' }} />
          <MuiLink
            component={Link}
            to="/about"
            sx={{
              display: 'inline-block',
              mb: 4,
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#9E9189',
              textDecoration: 'none',
              '&:hover': { color: '#F8F4EE' },
            }}
          >
            About Us
          </MuiLink>
          <Typography
            variant="body2"
            sx={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#9E9189' }}
          >
            {new Date().getFullYear()} Mijares Gallery. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
