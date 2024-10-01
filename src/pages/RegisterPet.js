import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

function RegisterPet() {
  const [petName, setPetName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Função para registrar o pet
    console.log({ petName, description });
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Cadastrar Pet
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome do Pet"
          variant="outlined"
          fullWidth
          margin="normal"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <TextField
          label="Idade"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
                <TextField
          label="Raça"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />        
                <TextField
          label="Diga mais sobre o pet"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}

export default RegisterPet;