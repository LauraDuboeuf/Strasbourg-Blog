import React from 'react';
import PropTypes from 'prop-types';

export default function AllFilter(props) {
  const { setApiFilter } = props;
  setApiFilter(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  return <></>;
}
AllFilter.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
};
