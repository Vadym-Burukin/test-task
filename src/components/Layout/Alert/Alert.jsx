import React from 'react';

import { useGetError } from 'hooks';
import './styles.scss';

const Alert = () => {
  const error = useGetError();

  let alert = null;
  if (error) {
    alert = <div className="alert">{error.message}</div>;
  }
  return alert;
};

export default Alert;
