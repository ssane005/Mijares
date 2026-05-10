import { Box, Container, Typography, Divider, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto', backgroundColor: '#213D57' }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 500,
              letterSpacing: '0.05em',
              mb: 2,
              color: '#ffffff',
            }}
          >
            Mijares Gallery
          </Typography>
          <Divider sx={{ width: 40, mx: 'auto', mb: 3, borderColor: '#C6D1D8' }} />
          <MuiLink
            component={Link}
            to="/about"
            sx={{
              display: 'inline-block',
              mb: 3,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              color: '#C6D1D8',
              textDecoration: 'none',
              '&:hover': { color: '#ffffff' },
            }}
          >
            About Us
          </MuiLink>
          <Typography
            variant="body2"
            sx={{ fontSize: '0.8rem', letterSpacing: '0.05em', color: '#C6D1D8' }}
          >
            {new Date().getFullYear()} Mijares Gallery. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
