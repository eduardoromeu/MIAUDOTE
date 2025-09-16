import React from 'react';
import { Container, Grid, Typography } from '@mui/material'; // Usando Grid do core, é mais comum
import PetCard from '../components/PetCard/PetCard';
import LoginModal from '../components/LoginModal/LoginModal';
import Rufus from '../images/rufus.avif';

function Home({ isOpenModal, setOpenModal }) {
  const pets = [
    { id: 1, name: 'Fofinho', description: 'Gato muito carinhoso!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKy5Zq3nDNcIKQEtTvd1iJTSzxQk4UO53QrA&s' },
    { id: 2, name: 'Rex', description: 'Cachorro brincalhão e esperto.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekrqEm8Pps8NR1x2kRA2N2WTL23Q9R9nVbw&s' },
    { id: 3, name: 'Rufus', description: 'Cachorro dócil e amigável.', image: Rufus }
  ];

  return (
    <Container sx={{ minHeight: "120vh" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Pets para Adoção
      </Typography>
      {/* Troquei Grid2 por Grid, que é o mais padrão */}
      <Grid container spacing={3}>
        {pets.map((pet) => (
          // A mudança principal está aqui: passamos o id do pet para o PetCard
          <PetCard
            key={pet.id}
            id={pet.id} // <-- ADICIONADO AQUI
            name={pet.name}
            description={pet.description}
            image={pet.image}
          />
        ))}
      </Grid>

      <LoginModal open={isOpenModal} onClose={() => setOpenModal(!isOpenModal)} />
    </Container>
  );
}

export default Home;