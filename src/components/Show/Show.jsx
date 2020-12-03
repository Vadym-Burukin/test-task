import React from 'react';
import { Link } from 'react-router-dom';

import { useGetShow } from '../../hooks';

const Show = () => {
  const show = useGetShow();

  if (show.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{show.title}</h1>
      <img src={show.coverImage} alt="cover" />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: show.description }} />
      <ul>
        {Object.values(show.episodes).map((episode) => {
          return (
            <li key={episode.id}>
              <Link to={`/episodes/${episode.id}`}>{episode.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Show;
