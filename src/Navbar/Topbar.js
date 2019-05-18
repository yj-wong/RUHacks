import React from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../Images/brand_logo.svg';

function Topbar() {
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand><img src={logo} width="75" alt="logo"></img></Navbar.Brand>
    <Form inline>
    <FormControl type="text" placeholder="Search" className="sm-2" />
    <Button variant="outline-info">Search</Button>
    </Form>
    <Nav className="ml-auto">
    <Nav.Link href="#home">Register</Nav.Link>
    <Nav.Link href="#features">Sign in</Nav.Link>
    </Nav>
    </Navbar>
  )
}

export default Topbar;
