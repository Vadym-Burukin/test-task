import React from 'react';
import { Card, Spin } from 'antd';

import { useGetShow } from '../../hooks';
import EpisodesTable from './EpisodesTable/EpisodesTable';
import './styles.scss';

const { Meta } = Card;

const Show = () => {
  const show = useGetShow();

  if (show.loading) {
    return (
      <div className="spinner">
        <Spin />
      </div>
    );
  }

  return (
    <>
      <div className="show-header">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="show cover" src={show.coverImage} data-testid="cover-image" />}
        >
          <Meta title={show.title} />
        </Card>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="show-description" dangerouslySetInnerHTML={{ __html: show.description }} />
      </div>
      <EpisodesTable episodes={show.episodes} />
    </>
  );
};

export default Show;
