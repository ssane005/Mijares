import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#213D57',
      light: '#334C64',
      dark: '#1a3148',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#475F76',
      light: '#C6D1D8',
      dark: '#334C64',
      contrastText: '#ffffff',
    },
    background: {
      default: '#C6D1D8',
      paper: '#ffffff',
    },
    text: {
      primary: '#213D57',
      secondary: '#475F76',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#213D57',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#213D57',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#213D57',
    },
    h4: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: '#213D57',
    },
    h5: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 500,
      color: '#213D57',
    },
    h6: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 500,
      color: '#213D57',
    },
    subtitle1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.8,
    },
    body2: {
      fontWeight: 300,
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 400,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontSize: '0.8rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#213D57',
          color: '#ffffff',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 32px',
        },
        contained: {
          backgroundColor: '#213D57',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#334C64',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: '1px',
          borderColor: '#213D57',
          color: '#213D57',
          '&:hover': {
            borderWidth: '1px',
            borderColor: '#334C64',
            backgroundColor: 'rgba(33, 61, 87, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #C6D1D8',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#475F76',
          },
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
              borderColor: '#C6D1D8',
            },
            '&:hover fieldset': {
              borderColor: '#475F76',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#213D57',
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#475F76',
        },
      },
    },
  },
});

export default theme;
