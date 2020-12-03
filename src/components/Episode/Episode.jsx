import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useGetEpisode } from '../../hooks';

const Episode = () => {
  const episode = useGetEpisode();

  return (
    <div>
      <Link to="/">
        <FormattedMessage id="episode.back" />
      </Link>
      <h1>{episode.title}</h1>
      <img src={episode.coverImage} alt="cover" />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: episode.description }} />
    </div>
  );
};

Episode.propTypes = {};

export default Episode;
