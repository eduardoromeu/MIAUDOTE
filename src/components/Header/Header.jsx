import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 

export default function Header({ titulo }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {titulo || "MIAUDOTE"}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >

          <Toolbar />
          <Divider />
          <List>

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/MIAUDOTE/">
                <ListItemText primary="-- TESTE INÍCIO --" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/MIAUDOTE/profile">
                <ListItemText primary="-- TESTE PERFIL --" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/MIAUDOTE/register-pet">
                <ListItemText primary="-- TESTE CADASTRAR PET --" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/MIAUDOTE/search-pets">
                <ListItemText primary="-- TESTE BUSCAR PETS --" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}