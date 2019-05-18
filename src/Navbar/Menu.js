import React from 'react';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
    <Nav variant="pills">
    <Nav.Link href="#pricing"  className="mx-5">Featured Startups</Nav.Link>
    <NavDropdown title="Green Products" id="nav-dropdown" className="mx-5">
    <NavDropdown.Item>Product 1</NavDropdown.Item>
    <NavDropdown.Item>Product 2</NavDropdown.Item>
    <NavDropdown.Item>
    Product 3
    </NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#features" className="mx-5">Recycle Requests/Pickups</Nav.Link>
    </Nav>
    </Navbar>
  )
}

export default Menu;
