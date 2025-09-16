import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
    Container, 
    Typography, 
    Card, 
    CardMedia, 
    CardContent, 
    Button, 
    Box, 
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    CardActions
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PetsIcon from '@mui/icons-material/Pets';
import CakeIcon from '@mui/icons-material/Cake';
import WcIcon from '@mui/icons-material/Wc';
import StraightenIcon from '@mui/icons-material/Straighten';

import Rufus from '../images/rufus.avif'; // Certifique-se que o caminho para a imagem está correto

// 1. DADOS ENRIQUECIDOS - Adicionamos mais detalhes sobre os pets
const pets = [
  { 
    id: 1, 
    name: 'Fofinho', 
    description: 'Gato muito carinhoso, adora um colo e um bom sachê. Está castrado e vacinado. Se dá bem com outros gatos.', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKy5Zq3nDNcIKQEtTvd1iJTSzxQk4UO53QrA&s',
    age: '2 anos',
    gender: 'Macho',
    size: 'Médio',
    breed: 'SRD (Sem Raça Definida)'
  },
  { 
    id: 2, 
    name: 'Rex', 
    description: 'Cachorro brincalhão e esperto. Adora correr atrás de bolinhas e passear no parque. Precisa de espaço para gastar energia.', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekrqEm8Pps8NR1x2kRA2N2WTL23Q9R9nVbw&s',
    age: '1 ano e 6 meses',
    gender: 'Macho',
    size: 'Grande',
    breed: 'Labrador Retriever'
  },
  { 
    id: 3, 
    name: 'Rufus', 
    description: 'Cachorro dócil e amigável. Se dá bem com crianças e outros animais. Um companheiro para toda a vida.', 
    image: Rufus,
    age: '3 anos',
    gender: 'Macho',
    size: 'Médio',
    breed: 'Golden Retriever'
  }
];

// A função do componente
function PetDetails() {
  const { petId } = useParams();
  const pet = pets.find(p => p.id == petId);
  
  // Hook de estado para controlar se o pet foi "curtido"
  const [isFavorited, setIsFavorited] = useState(false);

  // Função simulada para favoritar
  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    // Futuramente, aqui você adicionará a lógica para salvar nos favoritos do usuário
    console.log(isFavorited ? `Pet ${pet.name} removido dos favoritos.` : `Pet ${pet.name} adicionado aos favoritos.`);
  };
  
  // Função simulada para adoção
  const handleAdopt = () => {
    // Futuramente, aqui você enviará a notificação para o dono do pet
    alert(`Pedido de adoção para ${pet.name} enviado! O dono será notificado.`);
    console.log(`Simulando notificação de adoção para o dono do pet ${pet.name}.`);
  };

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
          {/* Box para alinhar o nome e o botão de favoritar */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography gutterBottom variant="h3" component="div">
              {pet.name}
            </Typography>
            <IconButton onClick={handleFavorite} color="error" aria-label="adicionar aos favoritos">
              {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
          
          <Typography variant="body1" color="text.secondary" paragraph>
            {pet.description}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* 2. EXIBIÇÃO DOS NOVOS DADOS */}
          <Typography variant="h5" component="h2" gutterBottom>
            Sobre o Pet
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CakeIcon /></ListItemIcon>
              <ListItemText primary="Idade" secondary={pet.age} />
            </ListItem>
            <ListItem>
              <ListItemIcon><WcIcon /></ListItemIcon>
              <ListItemText primary="Sexo" secondary={pet.gender} />
            </ListItem>
            <ListItem>
              <ListItemIcon><StraightenIcon /></ListItemIcon>
              <ListItemText primary="Porte" secondary={pet.size} />
            </ListItem>
            <ListItem>
              <ListItemIcon><PetsIcon /></ListItemIcon>
              <ListItemText primary="Raça" secondary={pet.breed} />
            </ListItem>
          </List>

        </CardContent>

        {/* 3. BOTÕES DE AÇÃO */}
        <CardActions sx={{ p: 2, justifyContent: 'center' }}>
          <Button 
            onClick={handleAdopt} 
            variant="contained" 
            color="success" 
            size="large"
          >
            Quero Adotar!
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default PetDetails;