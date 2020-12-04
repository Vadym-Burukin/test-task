import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Spin, Card } from 'antd';
import { FormattedMessage } from 'react-intl';

import { useGetEpisode } from 'hooks';

const { Meta } = Card;

const Episode = () => {
  const episode = useGetEpisode();

  if (episode.loading) {
    return (
      <div className="spinner">
        <Spin />
      </div>
    );
  }

  const coverImage = episode.coverImage || './download.png';

  return (
    <div>
      <Link to="/">
        <Button type="primary">
          <FormattedMessage id="episode.back" />
        </Button>
      </Link>
      <Card
        hoverable
        style={{ width: 240, marginTop: 30, marginBottom: 30 }}
        cover={<img alt="episode cover" src={coverImage} data-testid="cover-image" />}
      >
        <Meta title={episode.title} />
      </Card>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: episode.description }} />
    </div>
  );
};

Episode.propTypes = {};

export default Episode;
