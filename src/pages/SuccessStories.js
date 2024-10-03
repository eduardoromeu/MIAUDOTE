import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import Cao from '../images/cao.jpg'
import Rex from '../images/rex.jpeg'
import Luna from '../images/luna.jpeg'
import Max from '../images/max.webp'
import Bolt from '../images/bolt.jpg'

function SuccessStories() {
  // Lista de histórias de adoção, cada uma com nome do pet, nome do adotante, localização e imagem
  const stories = [
    { id: 1, petName: 'Fofinho', owner: 'João', location: 'São Paulo', image: Cao },
    { id: 2, petName: 'Rex', owner: 'Maria', location: 'Rio de Janeiro', image: Rex },
    { id: 3, petName: 'Luna', owner: 'Pedro', location: 'Belo Horizonte', image: Luna },
    { id: 4, petName: 'Max', owner: 'Ana', location: 'Curitiba', image: Max },
    { id: 5, petName: 'Bolt', owner: 'Lucas', location: 'Porto Alegre', image: Bolt },
  ];

  return (
    <Container>
      {/* Título centralizado da seção */}
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Adoções Concluídas
      </Typography>

      {/* Grid container centralizado usando justifyContent="center" para alinhar os cards no centro */}
      <Grid container justifyContent="center" spacing={3}>
        {/* Mapeamento de cada história de adoção */}
        {stories.map((story) => (
          // Grid item ajustado com breakpoints para telas diferentes
          <Grid item xs={12} sm={6} md={4} lg={3} key={story.id}>
            {/* Box estilizado para criar o "card" de cada pet */}
            <Box 
              sx={{
                border: '1px solid #ddd', // Borda fina ao redor do card
                borderRadius: '8px', // Arredondamento dos cantos do card
                padding: '16px', // Espaçamento interno do card
                textAlign: 'center', // Centraliza o texto dentro do card
                boxShadow: 3, // Adiciona uma sombra ao card
              }}
            >
              {/* Imagem do pet, com preenchimento de 100% da largura e bordas arredondadas */}
              <img
                src={story.image}
                alt={`Foto do pet ${story.petName}`}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              {/* Nome do pet com espaçamento abaixo */}
              <Typography variant="h6" gutterBottom>{story.petName}</Typography>
              {/* Informações de quem adotou e a localização */}
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
