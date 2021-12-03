import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

export default function DateFilter(props) {
  const { apiFilter, setApiFilter, setAff } = props;
  const [isAscOrder, setIsAscOrder] = useState(false);
  const ascOrder = '&ordering=released';
  const descOrder = '&ordering=-released';

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
      {isAscOrder ? 'Low to High' : 'High to Low'} Released
    </button>
  );
}

DateFilter.propTypes = {
  apiFilter: PropTypes.string.isRequired,
  setApiFilter: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
};
