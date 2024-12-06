import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 23, p: 4, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Email" variant="outlined" fullWidth required />
        <TextField label="Password" variant="outlined" type="password" fullWidth required />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
