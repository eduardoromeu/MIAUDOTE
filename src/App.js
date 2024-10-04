//up2
//AppBar: Uma barra de navegação fixa no topo da página.
//Drawer: Um menu lateral que abre ao clicar no ícone de menu.
//Box: Um contêiner que contém as rotas principais e respeita o layout responsivo.

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NavBar from './components/NavBar/NavBar';
import RegisterPet from './pages/RegisterPet';
import SearchPets from './pages/SearchPets';
import SuccessStories from './pages/SuccessStories';
import Cadastro from './pages/Cadastro/Cadastro';
import PawPrint from './images/White_paw_print.png'
import { Container, Typography } from '@mui/material';

import './styles.css'; // Importa o CSS global
import './App.css';
import { Login } from '@mui/icons-material';

const userModel = {
  logado: false,
  password:"123",
  name: "Thiago Frango",
  phone: "+55 11 99999-9999",
  email: "email@example.com",
  avatar: PawPrint, // Link da imagem do avatar
  favorites: [
    {
      name: "Luna",
      description: "Uma gata branca muito carinhosa.",
      image: "https://example.com/luna.jpg",
    },
    {
      name: "Rex",
      description: "Cachorro labrador enérgico.",
      image: "https://example.com/rex.jpg",
    },
  ]
};

function App() {

  const LogOut = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      user.logado = false;
      localStorage.setItem("user", JSON.stringify(user));
    }
    window.location.href = "/MIAUDOTE/";
    return (<></>);
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const [isOpenModal, setOpenModal] = useState((user === null || user === undefined) ? true : !user.logado ?? true);

  return (
    <Router basename='/'>
        <CssBaseline />
        {/* <Header titulo="MIAUDOTE" /> */}
        <NavBar isOpenModal={isOpenModal} setOpenModal={setOpenModal} />

        {/* Rotas */}
        <Box component="main" sx={{ p: 3, mt: 8 }}>
          <Routes>
            <Route path="/MIAUDOTE/" element={<Home isOpenModal={isOpenModal} setOpenModal={setOpenModal} />} />
            <Route path="/MIAUDOTE/profile" element={<Profile />} />
            <Route path="/MIAUDOTE/register-pet" element={<RegisterPet />} />
            <Route path="/MIAUDOTE/search-pets" element={<SearchPets />} />
            <Route path="/MIAUDOTE/success-stories" element={<SuccessStories />} />
            <Route path="/MIAUDOTE/cadastro-usuario" element={<Cadastro />} />
            <Route path="/MIAUDOTE/logout" element={<LogOut />} />
            <Route path="*" element={<Home isOpenModal={isOpenModal} setOpenModal={setOpenModal} />} />
            <Route path="/MIAUDOTE/*" element={
              <Container>
                <Typography variant='h2'>404 - Página não encontrada</Typography>
              </Container>
          } />
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
