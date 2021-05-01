import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Contato from './Components/Contato/Contato';
import Produtos from './Components/Produtos/Produto';
import Item from './Components/Item/Item';
import Error from './Components/Error/Error';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produtos/:id" element={<Item />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// API https://ranekapi.origamid.dev/json/api/produto/
