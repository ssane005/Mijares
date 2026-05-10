import { Container, Typography, Box, Button, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const featuredWorks = [
  { image: '/Mijares/images/plate-harbor-geometric.jpg', title: 'Harbor — Geometric Composition', detail: '$1,200 · Ceramic plate' },
  { image: '/Mijares/images/plate-cream-girl-with-rose.jpg', title: 'Girl with Rose', detail: '$1,100 · Ceramic plate' },
  { image: '/Mijares/images/plate-blue-abstract-figures.jpg', title: 'Abstract Figures in Blue', detail: '$950 · Ceramic plate' },
  { image: '/Mijares/images/plate-blue-geometric-figure.jpg', title: 'Geometric Figure in Blue', detail: '$900 · Ceramic plate' },
];

const Home = () => {
  return (
    <>
      {/* Hero — split layout */}
      <Box
        sx={{
          backgroundColor: '#F8F4EE',
          borderBottom: '1px solid #D4CCC6',
          minHeight: { xs: 'auto', md: '85vh' },
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        {/* Text side */}
        <Box
          sx={{
            flex: '0 0 42%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 4, md: 10 },
            py: { xs: 10, md: 0 },
            borderRight: '1px solid #D4CCC6',
          }}
        >
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              letterSpacing: '0.25em',
              fontSize: '0.65rem',
              color: '#8C4A2F',
              mb: 4,
            }}
          >
            Coral Gables · Est. 2002
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
            Original paintings, certified prints, and works on object — from one of
            Cuba's most important modern painters.
          </Typography>
          <Box>
            <Button variant="contained" component={Link} to="/products" sx={{ mr: 3 }}>
              View the Collection
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
              About the Artist
            </Button>
          </Box>
        </Box>

        {/* Hero painting */}
        <Box
          sx={{
            flex: 1,
            overflow: 'hidden',
            position: 'relative',
            minHeight: { xs: 360, md: 'auto' },
          }}
        >
          <img
            src="/Mijares/images/plate-cream-girl-with-rose.jpg"
            alt="Girl with Rose — Jose Maria Mijares"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              padding: '40px',
              backgroundColor: '#EFEBE4',
            }}
          />
        </Box>
      </Box>

      {/* Selected Works */}
      <Box sx={{ backgroundColor: '#F8F4EE', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                letterSpacing: '0.25em',
                fontSize: '0.68rem',
                color: '#9E9189',
                mb: 2,
              }}
            >
              Selected Works
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
                      alt={`${work.title} — Jose Maria Mijares`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.6s ease',
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.05rem',
                      fontWeight: 400,
                      color: '#1A140C',
                      letterSpacing: '0.02em',
                      mb: 0.5,
                    }}
                  >
                    {work.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: '0.75rem', color: '#9E9189', letterSpacing: '0.05em' }}
                  >
                    {work.detail}
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
              sx={{
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: '#1A140C',
                '&:hover': { color: '#8C4A2F', backgroundColor: 'transparent' },
              }}
            >
              View All Works
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
            "His work fuses constructivism and biomorphic surrealism with baroque elements
            from colonial Caribbean design."
          </Typography>
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              textAlign: 'center',
              mt: 4,
              letterSpacing: '0.2em',
              fontSize: '0.65rem',
              color: '#8C4A2F',
            }}
          >
            — Florida International University, 2001
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Home;
