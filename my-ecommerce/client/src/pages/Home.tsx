import { useEffect } from 'react';
import { Container, Typography, Box, Button, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const featuredWorks = [
  { image: '/Mijares/images/plate-cream-girl-with-rose.jpg', titleKey: 'Girl with Rose', detail: '$1,100' },
  { image: '/Mijares/images/plate-blue-abstract-figures.jpg', titleKey: 'Abstract Figures in Blue', detail: '$950' },
  { image: '/Mijares/images/plate-blue-geometric-figure.jpg', titleKey: 'Geometric Figure in Blue', detail: '$900' },
  { image: '/Mijares/images/plate-mauve-biomorphic.jpg', titleKey: 'Biomorphic Forms — Mauve', detail: '$850' },
];

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => { document.title = 'Mijares Gallery'; }, []);

  return (
    <>
      {/* Hero — split layout */}
      <Box
        sx={{
          backgroundColor: '#F8F4EE',
          borderBottom: '1px solid #D4CCC6',
          minHeight: { xs: 'auto', md: '85vh' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
        }}
      >
        {/* Text side */}
        <Box
          sx={{
            flex: { xs: 'none', md: '0 0 42%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 4, md: 10 },
            py: { xs: 8, md: 0 },
            borderRight: { xs: 'none', md: '1px solid #D4CCC6' },
            borderBottom: { xs: '1px solid #D4CCC6', md: 'none' },
          }}
        >
          <Typography
            variant="overline"
            sx={{ display: 'block', letterSpacing: '0.25em', fontSize: '0.65rem', color: '#8C4A2F', mb: 4 }}
          >
            {t('home.location')}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: { xs: '2.8rem', md: '4.2rem' },
              letterSpacing: '0.03em',
              lineHeight: 1.08,
              color: '#1A140C',
              mb: 5,
            }}
          >
            Jose Maria<br />Mijares
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#9E9189',
              mb: 8,
              maxWidth: 340,
            }}
          >
            {t('home.heroSubtitle')}
          </Typography>
          <Box>
            <Button variant="contained" component={Link} to="/products" sx={{ mr: 3 }}>
              {t('home.viewCollection')}
            </Button>
            <Button
              variant="text"
              component={Link}
              to="/about"
              sx={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: '#9E9189',
                '&:hover': { color: '#1A140C', backgroundColor: 'transparent' },
              }}
            >
              {t('home.aboutArtist')}
            </Button>
          </Box>
        </Box>

        {/* Hero painting */}
        <Box sx={{ flex: 1, overflow: 'hidden', minHeight: { xs: 380, md: 'auto' } }}>
          <img
            src="https://secure.cernudaarte.com/uploads/paintings/large/6314_1.jpg"
            alt="Havana Lady in the Balcony — Jose Maria Mijares"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </Box>
      </Box>

      {/* Selected Works */}
      <Box sx={{ backgroundColor: '#F8F4EE', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="overline"
              sx={{ display: 'block', letterSpacing: '0.25em', fontSize: '0.68rem', color: '#9E9189', mb: 2 }}
            >
              {t('home.selectedWorks')}
            </Typography>
            <Divider sx={{ width: 32, mx: 'auto', borderColor: '#8C4A2F' }} />
          </Box>

          <Grid container spacing={6}>
            {featuredWorks.map((work) => (
              <Grid item xs={12} sm={6} md={3} key={work.image}>
                <Link to="/products" style={{ textDecoration: 'none', display: 'block' }}>
                  <Box
                    sx={{
                      mb: 2.5,
                      backgroundColor: '#EFEBE4',
                      aspectRatio: '1/1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 2,
                      overflow: 'hidden',
                      '&:hover img': { transform: 'scale(1.04)' },
                    }}
                  >
                    <img
                      src={work.image}
                      alt={`${work.titleKey} — Jose Maria Mijares`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transition: 'transform 0.6s ease' }}
                    />
                  </Box>
                  <Typography
                    sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.05rem', fontWeight: 400, color: '#1A140C', letterSpacing: '0.02em', mb: 0.5 }}
                  >
                    {work.titleKey}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#9E9189', letterSpacing: '0.05em' }}>
                    {work.detail} · {t('products.medium')}
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 12 }}>
            <Button
              variant="text"
              component={Link}
              to="/products"
              sx={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#1A140C', '&:hover': { color: '#8C4A2F', backgroundColor: 'transparent' } }}
            >
              {t('home.viewAllWorks')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Quote band */}
      <Box sx={{ backgroundColor: '#1A140C', py: { xs: 10, md: 14 } }}>
        <Container maxWidth="sm">
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: { xs: '1.6rem', md: '2.1rem' },
              lineHeight: 1.65,
              letterSpacing: '0.03em',
              color: '#F8F4EE',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            {t('home.quote')}
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: 'block', textAlign: 'center', mt: 4, letterSpacing: '0.2em', fontSize: '0.65rem', color: '#8C4A2F' }}
          >
            {t('home.quoteAttribution')}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Home;
