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
export default App;