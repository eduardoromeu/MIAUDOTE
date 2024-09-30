// nav bar aqui feature

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li><Link to="/register-pet">Cadastrar Pet</Link></li>
        <li><Link to="/search-pets">Buscar Pets</Link></li>
        <li><Link to="/success-stories">Adoções Concluídas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;