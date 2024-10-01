import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Modal, } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function RegisterPet() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <div>
          <Button onClick={handleOpen}>Cadastrar</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Parabens!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                O pet foi cadastrado com sucesso!
              </Typography>
            </Box>
          </Modal>
        </div>
      </form>
    </Container>
  );
}

export default RegisterPet;