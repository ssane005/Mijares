import { useEffect } from 'react';
import { Container, Typography, Box, Divider, Grid } from '@mui/material';

const AboutUs = () => {
  useEffect(() => { document.title = 'About the Artist | Mijares Gallery'; }, []);

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
            The Artist
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
                Jose Maria Mijares in his studio, Miami
              </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: '0.2em', color: '#9E9189', fontSize: '0.68rem' }}
              >
                Havana, 1921 — Miami, 2004
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
                A Legacy in Cuban Modern Art
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2, color: '#1A140C', mb: 3 }}>
                Jose Maria Mijares was born in Havana in 1921 and trained at the prestigious
                San Alejandro Academy of Fine Arts on scholarship at age 16. Influenced by the
                Havana School — Carlos Enríquez, René Portocarrero, and Fidelio Ponce — he became
                a founding member of <em>Los Diez Pintores Concretos</em>, a landmark movement
                in pre-Castro Cuban art history.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2, color: '#1A140C', mb: 3 }}>
                He participated in the Venice Biennial (1952, 1956) and São Paulo Biennial (1953),
                and exhibited in Paris, Tokyo, Caracas, Washington D.C., and Miami. In 1968 he
                left Cuba following Castro's rise, settling in Miami where his work evolved
                toward figurative painting focused on people and Cuban landscapes.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2, color: '#1A140C' }}>
                He received an Honorary Doctorate in Fine Arts from Florida International
                University in 2001 and opened the Mijares Gallery in Coral Gables in 2002.
                His work is held in MoMA New York, the Lowe Art Museum, and the Museum of
                Modern Art of Latin America in Washington D.C.
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
              The Gallery
            </Typography>
            <Divider sx={{ width: 32, mx: 'auto', mb: 5, borderColor: '#8C4A2F' }} />
            <Typography
              variant="body1"
              sx={{ lineHeight: 2, color: '#F8F4EE', maxWidth: 520, mx: 'auto', mb: 3 }}
            >
              Mijares Gallery is run by his family, continuing the legacy of a man who painted
              six hours a day from sunrise until the end of his life. The works offered here —
              originals, certified prints, and art on object — come directly from his estate.
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 2, color: '#9E9189', maxWidth: 520, mx: 'auto' }}
            >
              This is not a posthumous archive. It is a living business, run by people who
              knew him, dedicated to placing his work in homes where it will be seen and
              loved for generations.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
