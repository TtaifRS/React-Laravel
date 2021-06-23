import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logout from './Logout';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        {localStorage.getItem('user-info') ? (
          <>
            <Link to="/add" className="nav-link">
              Add Product
            </Link>
            <Link to="/update" className="nav-link">
              Update Product
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        )}
      </Nav>
      {localStorage.getItem('user-info') ? <Logout /> : null}
    </Navbar>
  );
};

export default Header;
