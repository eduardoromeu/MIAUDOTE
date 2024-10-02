import React from 'react';
import { Container, Typography, Box, Slider, Button, Stack, } from '@mui/material';

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
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Buscar Pets por Região
      </Typography>
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
        <Button variant="contained">
          Confirmar
        </Button>
      </Stack>
    </Container>
  );
}

export default SearchPets;