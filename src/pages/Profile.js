import React from 'react';
import { Container, Typography } from '@mui/material';

function Profile() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Meu Perfil
      </Typography>
      {/* Informações do usuário e seus pets favoritos */}
    </Container>
  );
}

export default Profile;