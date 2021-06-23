import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Protected = ({ Component }) => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      history.push('/register');
    }
  }, [history]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
