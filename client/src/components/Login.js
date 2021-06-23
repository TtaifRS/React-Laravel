import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/add');
    }
  }, [history]);

  const { email, password } = values;

  const handleChange = (value) => (e) => {
    setValues({ ...values, [value]: e.target.value });
  };

  const signUp = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}login`,
      data: { email, password },
    })
      .then((response) => {
        console.log('Login SUCCESS', response.data);
        setValues({
          ...values,

          email: '',
          password: '',
        });

        localStorage.setItem('user-info', JSON.stringify(response.data));
        history.push('/add');
      })
      .catch((error) => {
        console.log('Login ERROR', error.response.data);
        setValues({ ...values });
      });
  };

  return (
    <div>
      <Header />
      <Form className="container col-sm-6 offset-sm-3 mt-5">
        <h3 className="my-3">Login</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange('email')}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange('password')}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={signUp}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
