import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

function SuccessStories() {
  const stories = [
    { id: 1, petName: 'Fofinho', owner: 'João', location: 'São Paulo' },
    { id: 2, petName: 'Rex', owner: 'Maria', location: 'Rio de Janeiro' },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Adoções Concluídas
      </Typography>
      <Grid container spacing={3}>
        {stories.map((story) => (
          <Grid item xs={12} sm={6} md={4} key={story.id}>
            <Typography variant="h6">{story.petName}</Typography>
            <Typography>{`Adotado por: ${story.owner}`}</Typography>
            <Typography>{`Local: ${story.location}`}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SuccessStories;