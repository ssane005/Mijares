import { createTheme } from '@mui/material/styles';

// Palette pulled from the warm, layered tones in Mijares' oil work —
// ochres, siennas, and linen whites against a near-black with warmth.
const palette = {
  linen: '#F8F4EE',
  nearBlack: '#1A140C',
  sienna: '#8C4A2F',
  siennaLight: '#B5694A',
  warmGray: '#9E9189',
  warmGrayLight: '#D4CCC6',
  white: '#FFFFFF',
};

const theme = createTheme({
  palette: {
    primary: {
      main: palette.sienna,
      light: palette.siennaLight,
      dark: '#6B3520',
      contrastText: palette.white,
    },
    secondary: {
      main: palette.warmGray,
      light: palette.warmGrayLight,
      dark: '#7A6E67',
      contrastText: palette.nearBlack,
    },
    background: {
      default: palette.linen,
      paper: palette.white,
    },
    text: {
      primary: palette.nearBlack,
      secondary: palette.warmGray,
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '0.06em',
      color: palette.nearBlack,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '0.05em',
      color: palette.nearBlack,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: palette.nearBlack,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: palette.nearBlack,
    },
    h5: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '0.03em',
      color: palette.nearBlack,
    },
    h6: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '0.03em',
      color: palette.nearBlack,
    },
    subtitle1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: '1.1rem',
      fontStyle: 'italic',
      fontWeight: 400,
      color: palette.warmGray,
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.8,
      letterSpacing: '0.01em',
    },
    body2: {
      fontWeight: 300,
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 400,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
    },
    overline: {
      fontWeight: 400,
      letterSpacing: '0.2em',
      fontSize: '0.7rem',
      color: palette.warmGray,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.linen,
          color: palette.nearBlack,
          boxShadow: 'none',
          borderBottom: `1px solid ${palette.warmGrayLight}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 36px',
        },
        contained: {
          backgroundColor: palette.nearBlack,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: palette.sienna,
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: '1px',
          borderColor: palette.nearBlack,
          color: palette.nearBlack,
          '&:hover': {
            borderWidth: '1px',
            borderColor: palette.sienna,
            color: palette.sienna,
            backgroundColor: 'transparent',
          },
        },
        text: {
          color: palette.nearBlack,
          '&:hover': {
            color: palette.sienna,
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: 'none',
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': {
              borderColor: palette.warmGrayLight,
            },
            '&:hover fieldset': {
              borderColor: palette.warmGray,
            },
            '&.Mui-focused fieldset': {
              borderColor: palette.nearBlack,
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.warmGrayLight,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: '"DM Sans", sans-serif',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontSize: '0.7rem',
        },
      },
    },
  },
});

export default theme;
