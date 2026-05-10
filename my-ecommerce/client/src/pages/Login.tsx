import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Paper, TextField, Button, Typography, Alert, Box, Divider } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#C6D1D8', minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: { xs: 4, md: 6 }, border: '1px solid #C6D1D8' }} elevation={0}>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 500,
                letterSpacing: '0.03em',
                color: '#213D57',
              }}
            >
              Sign In
            </Typography>
            <Divider sx={{ width: 40, mx: 'auto', mt: 2, borderColor: '#213D57' }} />
          </Box>

          {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={loading}
              sx={{ mt: 4, py: 1.5 }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <Box textAlign="center" mt={4}>
            <Typography variant="body2" color="#475F76">
              Don't have an account?{' '}
              <Box
                component={Link}
                to="/register"
                sx={{ color: '#213D57', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Create one
              </Box>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
