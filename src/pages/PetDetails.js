import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import Rufus from '../images/rufus.avif'; // Certifique-se que o caminho para a imagem está correto a partir DESTE arquivo

// Dados simulados
const pets = [
  { id: 1, name: 'Fofinho', description: 'Gato muito carinhoso, adora um colo e um bom sachê. Está castrado e vacinado.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKy5Zq3nDNcIKQEtTvd1iJTSzxQk4UO53QrA&s' },
  { id: 2, name: 'Rex', description: 'Cachorro brincalhão e esperto. Adora correr atrás de bolinhas e passear no parque.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekrqEm8Pps8NR1x2kRA2N2WTL23Q9R9nVbw&s' },
  { id: 3, name: 'Rufus', description: 'Cachorro dócil e amigável. Se dá bem com crianças e outros animais. Um companheiro para toda a vida.', image: Rufus }
];

// A função do componente
function PetDetails() {
  const { petId } = useParams();
  const pet = pets.find(p => p.id == petId);

  if (!pet) {
    return (
      <Container>
        <Typography variant="h4" color="error">Pet não encontrado!</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={pet.image}
          alt={pet.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {pet.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {pet.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

// A linha mais importante para resolver o erro
export default PetDetails;