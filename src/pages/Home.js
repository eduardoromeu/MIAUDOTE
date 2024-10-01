import React from 'react';
import { Container, Grid2, Card, CardContent, Typography } from '@mui/material';
import PetCard from '../components/PetCard/PetCard';
//Container: Centraliza o conteúdo.
//Grid: Organiza os cards dos pets de forma responsiva.
//Card: Cada pet para adoção é representado por um card.



function Home() {
  // Exemplo de dados
  const pets = [
    { id: 1, name: 'Fofinho', description: 'Gato muito carinhoso!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKy5Zq3nDNcIKQEtTvd1iJTSzxQk4UO53QrA&s' },
    { id: 2, name: 'Rex', description: 'Cachorro brincalhão e esperto.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekrqEm8Pps8NR1x2kRA2N2WTL23Q9R9nVbw&s' },
    { id: 3, name: 'Rufus', description: 'Cachorro dócil e amigável.' }
  ];

  return (
    <Container sx={{minHeight:"120vh"}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Pets para Adoção
      </Typography>
      <Grid2 container spacing={3}>
        {pets.map((pet, index) => (
          <PetCard name={pet.name} description={pet.description} image={pet.image} key={pet.id} />
          // <Grid2 item xs={12} sm={6} md={4} key={pet.id}>
          //   <Card>
          //     <CardContent>
          //       <Typography variant="h5">{pet.name}</Typography>
          //       <Typography>{pet.description}</Typography>
          //     </CardContent>
          //   </Card>
          // </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Home;
