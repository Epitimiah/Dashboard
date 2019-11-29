import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
import { 
  Navbar,
 } from 'reactstrap';
*/

function App() {
  return (
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
    <Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    </Nav>
    
  </Navbar>
    
  );
}

export default App;
