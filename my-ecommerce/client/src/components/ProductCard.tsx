import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      component={Link}
      to={`/products/${product.id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        '&:hover': {
          border: 'none',
          '& .artwork-frame': {
            boxShadow: '0 8px 30px rgba(33, 61, 87, 0.15)',
          },
          '& .artwork-title': {
            color: '#334C64',
          },
        },
      }}
    >
      <Box
        className="artwork-frame"
        sx={{
          p: 2,
          backgroundColor: '#fff',
          border: '1px solid #C6D1D8',
          boxShadow: '0 2px 12px rgba(33, 61, 87, 0.08)',
          transition: 'all 0.4s ease',
        }}
      >
        <Box
          sx={{
            border: '1px solid #C6D1D8',
            p: 0.5,
            backgroundColor: '#f8f9fa',
          }}
        >
          <CardMedia
            component="img"
            image={product.image_url}
            alt={product.name}
            sx={{
              aspectRatio: '4/5',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
      <CardContent sx={{ pt: 3, pb: 2, px: 0, flexGrow: 1 }}>
        <Typography
          className="artwork-title"
          variant="h6"
          component="h2"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.2rem',
            fontWeight: 500,
            mb: 0.5,
            transition: 'color 0.3s ease',
            color: '#213D57',
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontStyle: 'italic',
            fontSize: '0.85rem',
            mb: 1.5,
            color: '#475F76',
          }}
        >
          {product.description.length > 60
            ? product.description.substring(0, 60) + '...'
            : product.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '0.9rem',
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#213D57',
          }}
        >
          ${parseFloat(String(product.price)).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
