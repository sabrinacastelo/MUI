import React from 'react';
import { Paper, Typography, TextField, Button, Container, CssBaseline } from '@mui/material';

const Login = () => {
  const handleLogin = () => {
    // Implemente a lógica de login aqui
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Faça o Login</Typography>
        <TextField label="Nome de usuário" variant="outlined" margin="normal" fullWidth />
        <TextField label="Senha" variant="outlined" margin="normal" type="password" fullWidth />
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Entrar
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
