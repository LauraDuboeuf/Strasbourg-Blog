import React from 'react';
import * as PropTypes from 'prop-types';

export default function PsFilter(props) {
  const { setApiFilter } = props;
  setApiFilter(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1&parent_platforms=2`
  );
  return <></>;
}
PsFilter.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
};
