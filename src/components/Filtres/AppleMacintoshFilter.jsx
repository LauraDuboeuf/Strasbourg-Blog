/* eslint-disable no-unused-vars */
import React from 'react';
import * as PropTypes from 'prop-types';

export default function AppleMachintoshFilter(props) {
  const { setApiFilter } = props;
  setApiFilter(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1&parent_platforms=5`
  );
  return <></>;
}
AppleMachintoshFilter.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
};
