import React from 'react';
import * as PropTypes from 'prop-types';
import Cards from '../Cards';

export default function PageCards(props) {
  const { setAff, setID, items } = props;
  return (
    <div>
      {/* cards */}
      <ul className="grid-parent">
        {/* on va lire le tableau de la réponse parametre par parametre */}
        {items.map((item) => (
          <li
            key={item.id}
            style={{ listStyle: 'none' }}
            className="grid-enfant"
          >
            {/* A chaque lecture de parametre on crée une nouvelle carte en fonction du parametre(jeux) */}
            <Cards
              image={item.background_image}
              name={item.name}
              released={item.released}
              genres={item.genres}
              platformes={item.parent_platforms}
              id={item.id}
              setID={setID}
              setAff={setAff}
              rating={item.rating}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
PageCards.propTypes = {
  setID: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
  items: PropTypes.node.isRequired,
};
