import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Produtos from './Components/Produtos/Produtos';
import Contato from './Components/Contato/Contato';
import Item from './Components/Item/Item';
import Error from './Components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produto/:id" element={<Item />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
