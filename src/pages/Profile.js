import React, { useState } from 'react';
import { Container, Typography, Avatar, Grid, Card, CardContent, CardMedia, IconButton, Button, Box, TextField, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

function Profile() {
  const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(currentUser);

  if (!currentUser) {
    return <Typography variant="h4">Usuário não encontrado. Faça o login.</Typography>;
  }

  const handleEdit = () => {
    setEditedUser(currentUser);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(editedUser));
    setCurrentUser(editedUser);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container>
      {/* ============================================================
        INÍCIO DA SEÇÃO ALTERADA: Usando Stack para layout vertical
        ============================================================
      */}
      <Stack direction="column" alignItems="center" spacing={2} sx={{ mb: 4, width: 'fit-content' }}>
        <Avatar alt={currentUser.name} src={currentUser.avatar} sx={{ width: 100, height: 100, p: 1.5, bgcolor: 'orange' }} />

        {isEditing ? (
          // MODO DE EDIÇÃO
          <Stack spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <TextField
              label="Nome"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
            <TextField
              label="Email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
            <Box>
              <Button startIcon={<SaveIcon />} variant="contained" type="submit" sx={{ mr: 1 }}>
                Salvar
              </Button>
              <Button startIcon={<CancelIcon />} variant="outlined" onClick={handleCancel}>
                Cancelar
              </Button>
            </Box>
          </Stack>
        ) : (
          // MODO DE VISUALIZAÇÃO
          <Stack alignItems="center" spacing={1}>
            <Typography variant="h4">{currentUser.name}</Typography>
            <Typography variant="body1">{currentUser.email}</Typography>
            <Button startIcon={<EditIcon />} variant="outlined" sx={{ mt: 1 }} onClick={handleEdit}>
              Editar Perfil
            </Button>
          </Stack>
        )}
      </Stack>
      {/* ============================================================
        FIM DA SEÇÃO ALTERADA
        ============================================================
      */}


      {/* Seção de Pets Favoritos (Permanece igual) */}
      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        Pets Favoritos
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          {currentUser.favorites && currentUser.favorites.map((pet, index) => (
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