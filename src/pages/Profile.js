import React from 'react';
import { Container, Typography, Avatar, Grid, Card, CardContent, CardMedia, IconButton, Button, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';

function Profile() {
  const user = {
    name: "Thiago Frango",
    email: "email@example.com",
    avatar: "https://example.com/avatar.jpg", // Link da imagem do avatar
    favorites: [
      {
        name: "Luna",
        description: "Uma gata branca muito carinhosa.",
        image: "https://example.com/luna.jpg",
      },
      {
        name: "Rex",
        description: "Cachorro labrador enérgico.",
        image: "https://example.com/rex.jpg",
      },
    ],
  };

  return (
    <Container>
      {/* Cabeçalho do Perfil */}
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <Avatar alt={user.name} src={user.avatar} sx={{ width: 100, height: 100 }} />
        </Grid>
        <Grid item>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{user.email}</Typography>
          <Button startIcon={<EditIcon />} variant="outlined" sx={{ mt: 2 }}>
            Editar Perfil
          </Button>
        </Grid>
      </Grid>

      {/* Seção de Pets Favoritos */}
      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        Pets Favoritos
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          {user.favorites.map((pet, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Profile;