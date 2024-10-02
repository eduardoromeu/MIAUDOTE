import React, { useContext, useState } from 'react';
import { Container, Grid2, Typography } from '@mui/material';
import PetCard from '../components/PetCard/PetCard';
import LoginModal from '../components/LoginModal/LoginModal'
import { userContext } from '../userContext';

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

  const user = useContext(userContext);

  const [isModalOpen, setModalOpen] = useState(!user.logado ?? true);

  return (
    <Container sx={{minHeight:"120vh"}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Pets para Adoção
      </Typography>
      <Grid2 container spacing={3}>
        {pets.map((pet, index) => (
          <PetCard name={pet.name} description={pet.description} image={pet.image} key={pet.id} />
        ))}
      </Grid2>

      <LoginModal open={isModalOpen} onClose={() => setModalOpen(!isModalOpen)} />
    </Container>
  );
}

export default Home;
