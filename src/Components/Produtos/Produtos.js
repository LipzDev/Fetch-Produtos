import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Produtos.css';

const Produtos = () => {
  const [item, setItem] = React.useState(null);
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    async function produtos() {
      setStatus(true);
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/`,
      );
      const json = await response.json();
      setItem(json);
      setStatus(false);
    }

    produtos();
  }, []);

  return (
    <section className="produtos efeito">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Produtos</title>
        <meta name="description" content="Página de produtos!" />
      </Helmet>
      <div className="container">
        <div className="produtos__item">
          {status === true ? <h1 class="loading">Carregando...</h1> : ''}
          {item &&
            item.map(({ id, fotos, nome }) => (
              <Link to={`produtos/${id}`} className="produtos__box" key={id}>
                <img src={fotos[0].src} alt={fotos[0].titulo} />
                <h1>{nome}</h1>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;
