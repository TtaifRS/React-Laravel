import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Protected from './components/Protected';

const App = () => {
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/add">
        <Protected Component={AddProduct} />
      </Route>
      <Route path="/update">
        <Protected Component={UpdateProduct} />
      </Route>
    </Router>
  );
};

export default App;
