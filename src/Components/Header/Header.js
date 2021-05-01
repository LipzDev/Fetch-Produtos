import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
