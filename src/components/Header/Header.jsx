import React, { useState } from 'react';
import AppLogo from '../AppLogo/AppLogo';
import { Button, Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';

export default function Header({titulo}) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <AppLogo />
            <Typography variant='h5' sx={{fontFamily: 'monospace', marginBottom:'-15px', marginLeft:'.25em'}}>{titulo}</Typography>
          </IconButton>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Menu Lateral */}
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem  component="a" href="/">
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem component="a" href="/profile">
            <ListItemText primary="Perfil" />
          </ListItem>
          <ListItem component="a" href="/register-pet">
            <ListItemText primary="Cadastrar Pet" />
          </ListItem>
          <ListItem component="a" href="/search-pets">
            <ListItemText primary="Buscar Pets" />
          </ListItem>
          <ListItem component="a" href="/success-stories">
            <ListItemText primary="Adoções Concluídas" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}