import React, { useState } from 'react';
import AppLogo from '../AppLogo/AppLogo';
import { Button, Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props) {
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
            <Typography variant='h5' sx={{fontFamily: 'monospace'}}>{props.titulo}</Typography>
          </IconButton>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Menu Lateral */}
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component="a" href="/">
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem button component="a" href="/cadastro-usuario">
            <ListItemText primary="Cadastrar Usuário" />
          </ListItem>
          <ListItem button component="a" href="/profile">
            <ListItemText primary="Perfil" />
          </ListItem>
          <ListItem button component="a" href="/register-pet">
            <ListItemText primary="Cadastrar Pet" />
          </ListItem>
          <ListItem button component="a" href="/search-pets">
            <ListItemText primary="Buscar Pets" />
          </ListItem>
          <ListItem button component="a" href="/success-stories">
            <ListItemText primary="Adoções Concluídas" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}