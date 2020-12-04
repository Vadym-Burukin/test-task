import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getShowInit } from 'state/show/showActions';

export const useGetShow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowInit());
  }, [dispatch]);

  const show = useSelector((state) => state.show);
  return show;
};
