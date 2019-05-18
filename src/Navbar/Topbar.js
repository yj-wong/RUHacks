// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import {Nav, Navbar, Form, FormControl, Button, Modal} from 'react-bootstrap';
import logo from '../Images/brand_logo.svg';

const reduceMargin = {
  marginTop: '-15px',
  marginBottom: '-20px'
};

class Topbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return [
      <Navbar bg="dark" variant="dark" style={reduceMargin}>
      <Navbar.Brand href="#home"><img src={logo} width="75" alt="logo"></img></Navbar.Brand>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="sm-2 mr-1" />
      <Button variant="outline-info">Search</Button>
      </Form>
      <Nav className="ml-auto">
      <Nav.Link href="#register">Register</Nav.Link>
      <Nav.Link href="#signin" onClick={this.handleShow} variant="secondary">Sign in</Nav.Link>
      </Nav>
      </Navbar>,

      <Modal show={this.state.show} onHide={this.handleClose} className="text-center">
      <Modal.Header closeButton>
      <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
      <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </Form>;
      </Modal.Body>

      <Modal.Footer className="justify-content-center">
      <Button variant="primary">Sign In</Button>
      <Button variant="secondary" onClick={this.handleClose}>Close</Button>
      </Modal.Footer>
      </Modal>
    ];
  }
}

export default Topbar;
