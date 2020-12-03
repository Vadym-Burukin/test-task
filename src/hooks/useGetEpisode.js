/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getEpisodeInit, clearEpisodeData } from '../actions/episode';

export const useGetEpisode = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getEpisodeInit(params.id));
    return () => {
      dispatch(clearEpisodeData());
    };
  }, [dispatch, params.id]);

  const episode = useSelector((state) => state.episode);
  return episode;
};
