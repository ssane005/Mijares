import { useEffect } from 'react';
import { Container, Typography, Box, Divider, Grid, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const plates = [
  { id: 'plate-harbor-geometric', title: 'Harbor — Geometric Composition', image: '/Mijares/images/plate-harbor-geometric.jpg', price: 1200 },
  { id: 'plate-cream-girl-with-rose', title: 'Girl with Rose', image: '/Mijares/images/plate-cream-girl-with-rose.jpg', price: 1100 },
  { id: 'plate-blue-abstract-figures', title: 'Abstract Figures in Blue', image: '/Mijares/images/plate-blue-abstract-figures.jpg', price: 950 },
  { id: 'plate-blue-geometric-figure', title: 'Geometric Figure in Blue', image: '/Mijares/images/plate-blue-geometric-figure.jpg', price: 900 },
  { id: 'plate-mauve-biomorphic', title: 'Biomorphic Forms — Mauve', image: '/Mijares/images/plate-mauve-biomorphic.jpg', price: 850 },
];

const inquiryEmail = 'info@mijaresgallery.com';

const Products = () => {
  const { t } = useTranslation();

  useEffect(() => { document.title = `${t('products.heading')} | Mijares Gallery`; });

  return (
    <Box sx={{ backgroundColor: '#F8F4EE', minHeight: '100%' }}>

      {/* Header */}
      <Box sx={{ borderBottom: '1px solid #D4CCC6', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{ display: 'block', letterSpacing: '0.25em', fontSize: '0.65rem', color: '#8C4A2F', mb: 3 }}
          >
            {t('products.category')}
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: { xs: '2.2rem', md: '3.5rem' },
              letterSpacing: '0.04em',
              color: '#1A140C',
              mb: 3,
            }}
          >
            {t('products.heading')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 520,
              mx: 'auto',
              color: '#9E9189',
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            {t('products.subtitle')}
          </Typography>
          <Divider sx={{ width: 32, mx: 'auto', mt: 5, borderColor: '#8C4A2F' }} />
        </Container>
      </Box>

      {/* Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 14 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }}>
          {plates.map((plate) => (
            <Grid item xs={12} sm={6} md={4} key={plate.id}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: '#EFEBE4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                    mb: 3,
                    aspectRatio: '1/1',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={plate.image}
                    alt={`${plate.title} — Jose Maria Mijares`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Box>

                <Typography
                  sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', fontWeight: 400, color: '#1A140C', letterSpacing: '0.02em', mb: 0.5 }}
                >
                  {plate.title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#9E9189', letterSpacing: '0.04em', mb: 0.5 }}>
                  {t('products.medium')}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#9E9189', letterSpacing: '0.04em', mb: 3 }}>
                  {t('products.dimensions')}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography
                    sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', fontWeight: 400, color: '#1A140C', letterSpacing: '0.02em' }}
                  >
                    ${plate.price.toLocaleString()}
                  </Typography>
                  <Button
                    variant="outlined"
                    href={`mailto:${inquiryEmail}?subject=Inquiry: ${encodeURIComponent(plate.title)}&body=Hello,%0A%0AI am interested in "${plate.title}" (${t('products.dimensions')}).%0A%0APlease let me know about availability and next steps.%0A%0AThank you.`}
                    sx={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      px: 3,
                      py: 1,
                      borderColor: '#1A140C',
                      color: '#1A140C',
                      '&:hover': { borderColor: '#8C4A2F', color: '#8C4A2F', backgroundColor: 'transparent' },
                    }}
                  >
                    {t('products.inquire')}
                  </Button>
                </Box>
                <Box sx={{ mt: 2, borderBottom: '1px solid #D4CCC6' }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bottom note */}
      <Box sx={{ backgroundColor: '#1A140C', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#9E9189', lineHeight: 2, fontSize: '0.95rem', mb: 3 }}>
            {t('products.disclaimer')}
          </Typography>
          <Button
            variant="outlined"
            href={`mailto:${inquiryEmail}`}
            sx={{
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              px: 4,
              py: 1.5,
              borderColor: '#F8F4EE',
              color: '#F8F4EE',
              '&:hover': { borderColor: '#8C4A2F', color: '#8C4A2F', backgroundColor: 'transparent' },
            }}
          >
            {t('products.contactGallery')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Products;
