import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// REMOVA a linha "import Rufus from '../images/rufus.avif';" se ela existir aqui.
// Este componente não precisa saber de onde a imagem vem.
// Ele apenas recebe a prop "image" e a exibe.

function PetCard({ id, name, description, image }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          height="140"
          image={image} // <-- Ele já recebe a imagem pronta (seja uma URL ou a variável importada)
          alt={name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            component={Link} 
            to={`/MIAUDOTE/pet/${id}`} 
            size="small"
          >
            Ver Mais
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PetCard;