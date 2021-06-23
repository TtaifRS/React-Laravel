import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const user = JSON.parse(localStorage.getItem('user-info'));
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem('user-info');
    history.push('/register');
  };

  return (
    <>
      <Nav className="mr-5">
        <NavDropdown title={user && user.name}>
          <NavDropdown.Item className="mr-5" onClick={logOut}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default Logout;
