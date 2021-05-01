import React from 'react';
import './Contato.css';
import { Helmet } from 'react-helmet';

const Contato = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de produtos!" />
        <title>Ranek | Contato</title>
      </Helmet>

      <div>
        <img src="#" alt="" />

        <div className="info">
          <h1>Entre em contato.</h1>
          <p>andre@origamid</p>
          <p>999-999</p>
          <p>Rua: Viela Angelo Brunholi, 269</p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
