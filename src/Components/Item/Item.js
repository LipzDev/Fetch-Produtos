import React from 'react';
import './Item.css';
import { useParams } from 'react-router';

const Item = () => {
  const [item, setItem] = React.useState(null);
  const [load, setLoad] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    async function showItem(url) {
      setLoad(true);
      const response = await fetch(url);
      const json = await response.json();
      setItem(json);
      setLoad(false);
    }
    showItem(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  return (
    <section className="item efeito">
      <div className="container">
        <div className="item__produto">
          {load === true ? <h1>Carregando...</h1> : ''}
          <img src={item && item.fotos[0].src} />
          <h2>{item && item.nome}</h2>
          <span>{item && item.preco}</span>
          <p>{item && item.descricao}</p>
        </div>
      </div>
    </section>
  );
};

export default Item;
