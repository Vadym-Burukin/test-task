import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    render: (text, record) => <Link to={`/episodes/${record.key}`}>{text}</Link>,
  },
  {
    title: 'Season',
    dataIndex: 'season',
  },
  {
    title: 'Airdate',
    dataIndex: 'airdate',
  },
];

const EpisodesTable = ({ episodes }) => {
  return (
    <div data-testid="episodes-table">
      <Table columns={columns} dataSource={Object.values(episodes)} />
    </div>
  );
};

EpisodesTable.propTypes = {
  episodes: PropTypes.PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default EpisodesTable;
