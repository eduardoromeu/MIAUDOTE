//up2
//AppBar: Uma barra de navegação fixa no topo da página.
//Drawer: Um menu lateral que abre ao clicar no ícone de menu.
//Box: Um contêiner que contém as rotas principais e respeita o layout responsivo.

import React, { useContext, useState } from 'react';
import { userContext } from './userContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RegisterPet from './pages/RegisterPet';
import SearchPets from './pages/SearchPets';
import SuccessStories from './pages/SuccessStories';
import Cadastro from './pages/Cadastro/Cadastro';
import PawPrint from './images/White_paw_print.png'
import LoggedUser from './LoggedUser';

import './styles.css'; // Importa o CSS global
import './App.css';
import Header from './components/Header/Header';

const userModel = {
  logado: false,
  password:"123",
  name: "Thiago Frango",
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
  const [user, setUser] = useState(userModel);
  
  return (
    <userContext.Provider value={{user, setUser}}>
      <Router>
        <CssBaseline />
        <Header titulo="MIAUDOTE" />

        {/* Rotas */}
        <Box component="main" sx={{ p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register-pet" element={<RegisterPet />} />
            <Route path="/search-pets" element={<SearchPets />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/cadastro-usuario" element={<Cadastro />} />
          </Routes>
        </Box>
      </Router>
    </userContext.Provider>
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
