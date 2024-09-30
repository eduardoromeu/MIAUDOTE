//up2
//AppBar: Uma barra de navegação fixa no topo da página.
//Drawer: Um menu lateral que abre ao clicar no ícone de menu.
//Box: Um contêiner que contém as rotas principais e respeita o layout responsivo.

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RegisterPet from './pages/RegisterPet';
import SearchPets from './pages/SearchPets';
import SuccessStories from './pages/SuccessStories';

import './styles.css'; // Importa o CSS global


function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Miaudote
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component="a" href="/">
            <ListItemText primary="Início" />
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

      <Box component="main" sx={{ p: 3, mt: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register-pet" element={<RegisterPet />} />
          <Route path="/search-pets" element={<SearchPets />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;


/*

// https://www.svgrepo.com/collection/pet-hotel/
import { red } from '@mui/material/colors';

import { createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import Cadastro from './pages/Cadastro/Cadastro';
import { colors } from '@mui/material';
import FormPropsTextFields from './components/Formulario/formulario';

//up 1
jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RegisterPet from './pages/RegisterPet';
import SearchPets from './pages/SearchPets';
import SuccessStories from './pages/SuccessStories';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});


//up 1
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register-pet" element={<RegisterPet />} />
          <Route path="/search-pets" element={<SearchPets />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </div>
    </Router>
  );
}
    
    /*
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header titulo="MIAUDOT"></Header>
        <Cadastro />
      </div>
    </ThemeProvider>
  );
}
*/
