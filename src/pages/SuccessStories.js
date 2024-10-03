import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import Cao from '../images/cao.jpg';
import Rex from '../images/rex.jpeg';
import Luna from '../images/luna.jpeg';
import Max from '../images/max.webp';
import Bolt from '../images/bolt.jpg';

function SuccessStories() {
  const stories = [
    { id: 1, petName: 'Fofinho', owner: 'João', location: 'São Paulo', image: Cao },
    { id: 2, petName: 'Rex', owner: 'Maria', location: 'Rio de Janeiro', image: Rex },
    { id: 3, petName: 'Luna', owner: 'Pedro', location: 'Belo Horizonte', image: Luna },
    { id: 4, petName: 'Max', owner: 'Ana', location: 'Curitiba', image: Max },
    { id: 5, petName: 'Bolt', owner: 'Lucas', location: 'Porto Alegre', image: Bolt },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Adoções Concluídas
      </Typography>

      <Grid container justifyContent="center" spacing={3}>
        {stories.map((story) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={story.id}>
            <Box
              sx={{
                backgroundImage: `url(${story.image})`, // Defin a imagem como fundo do card
                backgroundSize: 'cover', // Faz com que a imagem cubra o fundo mantendo a proporção
                backgroundPosition: 'center', // Centraliza a imagem no bg
                height: '200px', // Define uma altura fixa para o card
                border: '1x solid #ddd', // Adiciona uma borda fina ao card
                borderRadius: '8px', // Arredondamento dos cantos do card
                boxShadow: 3, // shadow card
              }}
            />
            {/* Box para o texto abaixo do card */}
            <Box
              sx={{
                padding: '16px', // Espaçamento interno text
                textAlign: 'center', // Centraliza o texto
                backgroundColor: '#fff', // Fundo branco para o texto
                borderRadius: '0 0 8px 8px', // Arredondamento dos cantos inferiores do box
                border: '1px solid #ddd', // Borda fina ao redor do box de texto
                borderTop: 'none', // Remove a borda superior para um visual contínuo
                marginTop: '-6px', // Eleva o box 6px para cima
              }}
            >
              <Typography variant="h6" gutterBottom>
                {story.petName}
              </Typography>
              <Typography>{`Adotado por: ${story.owner}`}</Typography>
              <Typography>{`Local: ${story.location}`}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SuccessStories;
