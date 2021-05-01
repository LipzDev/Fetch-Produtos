import React from 'react';
import { useParams } from 'react-router';

const Item = () => {
  const [item, setItem] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function showItem(url) {
      const response = await fetch(url);
      const json = await response.json();
      setItem(json);
    }
    showItem(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (item === null) return null;

  return (
    <section className="item">
      <div className="container">
        <div className="item__produto">
          <img src={item.fotos[0].src} />
          <h2>{item.nome}</h2>
          <span>{item.preco}</span>
          <p>{item.descricao}</p>
        </div>
      </div>
    </section>
  );
};

export default Item;
