import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

export default function NoteFilter(props) {
  const { apiFilter, setApiFilter, setAff } = props;
  const [isAscOrder, setIsAscOrder] = useState(false);
  const ascOrder = '&ordering=rating';
  const descOrder = '&ordering=-rating';

  return (
    <button
      type="button"
      onClick={() => {
        if (isAscOrder) {
          setApiFilter(apiFilter + ascOrder);
        } else {
          setApiFilter(apiFilter + descOrder);
        }

        setIsAscOrder(!isAscOrder);
        setAff(false);
      }}
    >
      {isAscOrder ? 'Low to High' : 'High to Low'} Rating
    </button>
  );
}

NoteFilter.propTypes = {
  apiFilter: PropTypes.string.isRequired,
  setApiFilter: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
};
