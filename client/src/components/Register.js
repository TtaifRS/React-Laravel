import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = values;

  const handleChange = (value) => (e) => {
    setValues({ ...values, [value]: e.target.value });
  };

  console.log(values);

  return (
    <Form className="container col-sm-6 offset-sm-3 mt-5">
      <h3 className="my-3">Sign Up</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={name}
          onChange={handleChange('name')}
        />
      </Form.Group>
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
      <Button
        variant="primary"
        type="submit"
        onSubmit={(e) => e.preventDefault()}
      >
        Sign Up
      </Button>
    </Form>
  );
};

export default Register;
