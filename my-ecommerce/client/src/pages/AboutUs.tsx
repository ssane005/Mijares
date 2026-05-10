import { Container, Typography, Box, Divider, Grid } from '@mui/material';

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          backgroundColor: '#334C64',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '0.04em',
              mb: 3,
              color: '#ffffff',
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 500,
              mx: 'auto',
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: '#C6D1D8',
            }}
          >
            Celebrating the life and legacy of a master artist
          </Typography>
        </Container>
      </Box>

      {/* Artist Biography Section */}
      <Box sx={{ backgroundColor: '#C6D1D8', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            {/* Artist Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  overflow: 'hidden',
                  border: '1px solid #213D57',
                }}
              >
                <img
                  src="/images/mijares.jpg"
                  alt="The Artist"
                  style={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            {/* Biography Text */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: '0.2em',
                    color: '#475F76',
                    fontSize: '0.75rem',
                  }}
                >
                  The Artist
                </Typography>
                <Divider
                  sx={{
                    width: 60,
                    mt: 2,
                    mb: 3,
                    borderColor: '#213D57',
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 500,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    mb: 3,
                    color: '#213D57',
                  }}
                >
                  A Legacy in Art
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    color: '#334C64',
                    mb: 2,
                  }}
                >
                  Born with an innate gift for capturing the essence of life on canvas,
                  the artist dedicated decades to perfecting their craft. Their work
                  spans a remarkable journey through various styles and mediums, always
                  maintaining a distinctive voice that speaks to the human experience.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    color: '#334C64',
                    mb: 2,
                  }}
                >
                  Throughout their career, they created pieces that have moved collectors
                  and art enthusiasts alike. Each brushstroke tells a story, each color
                  choice reflects a deep understanding of emotion and beauty.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    color: '#334C64',
                  }}
                >
                  Though no longer with us, their artistic vision continues to inspire
                  and their works remain timeless treasures that connect us to something
                  greater than ourselves.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Gallery Mission Section */}
      <Box sx={{ backgroundColor: '#ffffff', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: '0.2em',
                color: '#475F76',
                fontSize: '0.75rem',
              }}
            >
              Our Mission
            </Typography>
            <Divider
              sx={{
                width: 60,
                mx: 'auto',
                mt: 2,
                mb: 4,
                borderColor: '#213D57',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 4,
                color: '#213D57',
              }}
            >
              Preserving Art, Sharing Beauty
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 2,
                color: '#334C64',
                maxWidth: 600,
                mx: 'auto',
                mb: 3,
              }}
            >
              Mijares Gallery is dedicated to preserving and sharing the remarkable
              works of a beloved artist. We believe that art has the power to
              transform spaces, evoke emotions, and create lasting connections
              between the creator and the collector.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 2,
                color: '#334C64',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Every piece in our collection has been carefully curated to represent
              the finest examples of the artist's work. We invite you to explore,
              discover, and find the piece that speaks to your soul.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
