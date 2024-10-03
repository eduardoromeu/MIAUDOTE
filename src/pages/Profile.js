import React from 'react';
import { Container, Typography, Avatar, Grid2, Card, CardContent, CardMedia, IconButton, Button, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import Rufus from '../images/rufus.avif';

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  if(!user) return <Typography variant="h4">Usuário não encontrado</Typography>;

  user.favorites = [{name: "Rufus", description: "Cachorro Dócil", image: Rufus}];

  return (
    <Container>
      {/* Cabeçalho do Perfil */}
      <Grid2 container spacing={3} alignItems="center">
        <Grid2>
          <Avatar alt={user.name} src={user.avatar} sx={{ width: 100, height: 100, p: 1.5, bgcolor: 'orange' }} />
        </Grid2>
        <Grid2>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{user.email}</Typography>
          <Button startIcon={<EditIcon />} variant="outlined" sx={{ mt: 2 }}>
            Editar Perfil
          </Button>
        </Grid2>
      </Grid2>

      {/* Seção de Pets Favoritos */}
      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        Pets Favoritos
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid2 container spacing={3} justifyContent="center">
          {user.favorites.map((pet, index) => (
            <Grid2 xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={pet.image}
                  alt={pet.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {pet.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pet.description}
                  </Typography>
                </CardContent>
                <IconButton aria-label="favorite">
                  <FavoriteIcon color="error" />
                </IconButton>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}

export default Profile;