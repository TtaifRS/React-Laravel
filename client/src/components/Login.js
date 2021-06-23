import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const Login = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/add');
    }
  }, [history]);
  return (
    <div>
      <Header />
      Login
    </div>
  );
};

export default Login;
