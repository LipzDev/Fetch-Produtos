import React from 'react';
import './Produto.css';
import { Helmet } from 'react-helmet';

const Produto = () => {
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    async function getInfo() {
      const api = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/`,
      );
      const json = await api.json();
      setItem(json);
    }

    getInfo();
  }, []);

  React.useEffect(() => {
    const produtoImg = document.querySelectorAll('.produtos__box img');

    async function getProduto(event) {
      const name = event.target.name;
      const api = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${name}`,
      );
      const json = await api.json();
      console.log(json);
    }

    produtoImg.forEach((item) => item.addEventListener('click', getProduto));
  }, [item]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de produtos!" />
        <title>Ranek | Produtos</title>
      </Helmet>
      <section className="produtos">
        <div className="container">
          <div className="produtos__item">
            {item &&
              item.map(({ id, nome, fotos }) => (
                <div key={id} className="produtos__box">
                  <img src={fotos[0].src} alt={fotos[0].titulo} name={id} />
                  <h2>{nome}</h2>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Produto;
