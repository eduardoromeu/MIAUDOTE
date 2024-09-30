import React from 'react';
import { Container, Typography } from '@mui/material';

function SearchPets() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Buscar Pets por Região
      </Typography>
      {/* Implementação de geolocalização e busca */}
    </Container>
  );
}

export default SearchPets;