import React from 'react';
import { Container, Typography, Box, Slider, Button, Stack } from '@mui/material';

// const MIN = 0.002;
// const MAX = 0.500;
// const STEP = 0.0005;
const minZoom = 5;
const maxZoom = 500;
const zoomStep = 5;
const marks = [
  {
    value: 250,
    label: "ZOOM (KM)"
  },

];

function SearchPets() {
  const [zoom, setZoom] = React.useState(minZoom); // Estado para armazenar o valor do slider
  const [geoData, setGeoData] = React.useState(null);
  
  // Função para atualizar o valor do slider
  const handleChange = (_, newValue) => {
    setZoom(newValue / 10000); // Atualiza o estado com o novo valor do slider
  };
  
  React.useEffect(() => {
    const url = `https://api.ipgeolocation.io/v2/ipgeo?apiKey=109efc60022549648896ead43bb28bdf`; 

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro na requisição");
        }
        console.log(url);
        console.log(res);
        return res.json();
      })
      .then((json) => {setGeoData(json); console.log(json)})
      .catch((err) => console.error("Erro:", err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        gap: { xs: 2, sm: 3 },
        px: { xs: 1, sm: 2 },
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Buscar Pets
      </Typography>

      <Typography variant="h6" component="h2" gutterBottom>
        Encontre o pet ideal perto de você
      </Typography>
        
      {/* Embed do mapa com busca pelo IP */}
      <Box
        component="iframe"
        src={
          geoData && geoData.location.latitude && geoData.location.longitude ? 
          `https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(geoData.location.longitude)-zoom}%2C${parseFloat(geoData.location.latitude)-zoom}%2C${parseFloat(geoData.location.longitude)+zoom}%2C${parseFloat(geoData.location.latitude)+zoom}&amp;layer=mapnik`
          :`https://www.openstreetmap.org/export/embed.html?bbox=${-52.23396-zoom}%2C${-24.89196-zoom}%2C${-52.23396+zoom}%2C${-24.89196+zoom}&amp;layer=mapnik`
        }
        alt="Mapa"
        loading="lazy"
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 700 },
          height: { xs: 180, sm: 250 },
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />

      <Typography variant="body1" align="center" gutterBottom>
        Use a barra de distância para ajustar o raio de busca e encontre pets disponíveis para adoção em sua região
      </Typography>

      <Box sx={{ width: { xs: '100%', sm: 350 } }}>
        <Slider
          marks={marks}
          step={zoomStep}
          value={zoom * 10000}
          valueLabelDisplay="off"
          min={minZoom}
          max={maxZoom}
          onChange={handleChange}
          sx={{
            mt: 2,
            mb: 1,
            '& .MuiSlider-markLabel': {
              fontSize: { xs: 10, sm: 12 },
            },
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="body2"
            onClick={() => setZoom(minZoom)}
            sx={{ cursor: 'pointer', fontSize: { xs: 12, sm: 14 } }}
          >
            {minZoom}
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setZoom(maxZoom)}
            sx={{ cursor: 'pointer', fontSize: { xs: 12, sm: 14 } }}
          >
            {maxZoom}
          </Typography>
        </Box>
      </Box>

      <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'center' }}>
        {/* Botão para confirmar a busca */}
        <Button variant="contained" sx={{ minWidth: 120, fontSize: { xs: 14, sm: 16 } }}>BUSCAR</Button>
      </Stack>
    </Container>
  );
}

export default SearchPets;
