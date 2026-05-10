import { useEffect } from 'react';
import { Container, Typography, Box, Divider, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => { document.title = `${t('about.heading')} | Mijares Gallery`; });

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          backgroundColor: '#F8F4EE',
          borderBottom: '1px solid #D4CCC6',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{ display: 'block', letterSpacing: '0.25em', fontSize: '0.65rem', color: '#8C4A2F', mb: 3 }}
          >
            {t('about.category')}
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: { xs: '2.5rem', md: '4rem' },
              letterSpacing: '0.04em',
              color: '#1A140C',
            }}
          >
            Jose Maria Mijares
          </Typography>
        </Container>
      </Box>

      {/* Biography */}
      <Box sx={{ backgroundColor: '#F8F4EE', py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box sx={{ overflow: 'hidden', border: '1px solid #D4CCC6' }}>
                <img
                  src="/Mijares/images/mijares.jpg"
                  alt="Jose Maria Mijares at work in his studio"
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{ mt: 1.5, fontSize: '0.7rem', letterSpacing: '0.08em', color: '#9E9189', textAlign: 'center' }}
              >
                {t('about.photoCaption')}
              </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: '0.2em', color: '#9E9189', fontSize: '0.68rem' }}
              >
                {t('about.dates')}
              </Typography>
              <Divider sx={{ width: 32, mt: 2, mb: 4, borderColor: '#8C4A2F' }} />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  mb: 4,
                  color: '#1A140C',
                }}
              >
                {t('about.heading')}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2, color: '#1A140C', mb: 3 }}>
                {t('about.bio1')}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2, color: '#1A140C', mb: 3 }}>
                {t('about.bio2')}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2, color: '#1A140C' }}>
                {t('about.bio3')}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission */}
      <Box sx={{ backgroundColor: '#1A140C', py: { xs: 10, md: 14 } }}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{ display: 'block', letterSpacing: '0.25em', fontSize: '0.65rem', color: '#8C4A2F', mb: 3 }}
            >
              {t('about.galleryCategory')}
            </Typography>
            <Divider sx={{ width: 32, mx: 'auto', mb: 5, borderColor: '#8C4A2F' }} />
            <Typography variant="body1" sx={{ lineHeight: 2, color: '#F8F4EE', maxWidth: 520, mx: 'auto', mb: 3 }}>
              {t('about.mission1')}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2, color: '#9E9189', maxWidth: 520, mx: 'auto' }}>
              {t('about.mission2')}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
