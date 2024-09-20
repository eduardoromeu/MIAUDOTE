// https://www.svgrepo.com/collection/pet-hotel/
import { red } from '@mui/material/colors';

import { createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import Cadastro from './pages/Cadastro/Cadastro';
import { colors } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header titulo="MIAUDOT"></Header>
        <Cadastro />
      </div>
    </ThemeProvider>
  );
}

export default App;