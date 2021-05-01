import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Contato from './Components/Contato/Contato';
import Produtos from './Components/Produtos/Produto';
import ProdutoIndividual from './Components/ProdutoIndividual/ProdutoIndividual';
import Error from './Components/Error/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id" element={<ProdutoIndividual />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// API https://ranekapi.origamid.dev/json/api/produto/
