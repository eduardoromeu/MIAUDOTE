import React from 'react';
import { Container, Typography, Box, Slider, Button, Stack } from '@mui/material';

const MAX = 100;
const MIN = 1;
const marks = [
  {
    value: MIN,
    label: 'KM',
  },
  {
    value: MAX,
    label: '',
  },
];

function SearchPets() {
  const [val, setVal] = React.useState(MIN); // Estado para armazenar o valor do slider

  // Função para atualizar o valor do slider
  const handleChange = (_, newValue) => {
    setVal(newValue); // Atualiza o estado com o novo valor do slider
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Buscar Pets por Região
      </Typography>

      <Typography variant="h6" component="h2" gutterBottom>
        Encontre o pet ideal perto de você
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Use a barra de distância para ajustar o raio de busca e encontre pets disponíveis para adoção em sua região
      </Typography>

      {/* Contêiner com overflow escondido para aplicar zoom */}
      <Box 
        sx={{
          width: 350,
          height: 200,
          overflow: 'hidden', // Garante que o zoom não afete o tamanho visível da imagem
          mb: 2,
          borderRadius: 2,
          border: '2px solid #ccc',
        }}
      >
        <Box
          component="img"
          src="https://acontecendoaqui.com.br/wp-content/uploads/2015/11/maps.jpg"
          alt="Mapa ilustrativo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${1 + val / 320})`, // Aumenta a escala da imagem conforme o valor do slider
            transition: 'transform 0.3s ease-in-out', // Transição suave para o zoom
          }}
        />
      </Box>

      <Box sx={{ width: 350 }}>
        <Slider
          marks={marks}
          step={10}
          value={val}
          valueLabelDisplay="auto"
          min={MIN}
          max={MAX}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="body2"
            onClick={() => setVal(MIN)}
            sx={{ cursor: 'pointer' }}
          >
            {MIN}
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setVal(MAX)}
            sx={{ cursor: 'pointer' }}
          >
            {MAX}
          </Typography>
        </Box>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button variant="contained">Confirmar</Button> {/* Botão para confirmar */}
      </Stack>
    </Container>
  );
}

export default SearchPets;
