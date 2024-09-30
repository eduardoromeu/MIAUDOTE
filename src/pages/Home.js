import React from 'react';

import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
//Container: Centraliza o conteúdo.
//Grid: Organiza os cards dos pets de forma responsiva.
//Card: Cada pet para adoção é representado por um card.



function Home() {
  // Exemplo de dados
  const pets = [
    { id: 1, name: 'Fofinho', description: 'Gato muito carinhoso!' },
    { id: 2, name: 'Rex', description: 'Cachorro brincalhão e esperto.' },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Pets para Adoção
      </Typography>
      <Grid container spacing={3}>
        {pets.map((pet) => (
          <Grid item xs={12} sm={6} md={4} key={pet.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{pet.name}</Typography>
                <Typography>{pet.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
