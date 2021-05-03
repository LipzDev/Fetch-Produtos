import React from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import './Item.css';

const Item = () => {
  const [item, setItem] = React.useState(null);
  const [status, setStatus] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    async function showItem(url) {
      setStatus(true);
      const response = await fetch(url);
      const json = await response.json();
      setItem(json);
      setStatus(false);
    }

    showItem(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  return (
    <section className="item efeito">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Produto | {`${item && item.nome}`}</title>
        <meta name="description" content="Página de itens!" />
      </Helmet>
      <div className="container">
        <div className="item__sepecs">
          {status === true ? <h1 class="loading">Carregando...</h1> : ''}
          <img src={item && item.fotos[0].src} />
          <div className="item__text">
            <h2>{item && item.nome}</h2>
            <span className="price">{item && 'R$ ' + item.preco}</span>
            <p>{item && item.descricao}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
