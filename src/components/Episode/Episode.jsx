import React from 'react';
import PropTypes from 'prop-types';

const Episode = ({ match }) => <div>{match.params.id}</div>;

Episode.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Episode;
