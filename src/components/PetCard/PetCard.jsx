import React from 'react';
import { CardMedia, Button, Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import petPaws from '../../images/PetPaws.jpg';

export default function PetCard({name, description, image}) {
    console.log(name, description, image);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={(image !== undefined) ? image : petPaws}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">
          <Box sx={{display:"flex", maxWidth:"1.5em"}}>
            <FavoriteBorderIcon sx={{width:'100%'}} />
          </Box>
        </Button> */}
        <Button size="small">
            Adotar
        </Button>
        <Button size="small">Ver mais</Button>
      </CardActions>
    </Card>
  );
}